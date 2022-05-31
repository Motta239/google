import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom';
import { Dialog, Transition } from '@headlessui/react'
import { CameraIcon } from '@heroicons/react/outline';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, snapshot } from "firebase/firestore";
import { signIn, signOut, useSession } from 'next-auth/react'
import { ref, getDownloadURL, uploadString } from "@firebase/storage";
function Modal() {
    const { data: session } = useSession();
    const [open, setOpen] = useRecoilState(modalState);
    const filePickerRef = useRef(null);
    const [loading, setLoading] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null);
    const captionRef = useRef(null)
    const uploadPost = async () => {
        if (loading) return
        setLoading(true)
        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.username,
            caption: "MOTI IS THE BEST",
            profileImg: session.user.image,
            timestamp: serverTimestamp()
        })
        console.log("New doc added with ID", docRef.id);
        const imageRef = ref(storage, `posts/${docRef.id}/image`);
        await uploadString(imageRef, selectedFile, "data_url").then(
            async (snapshot) => {
                const downloadURL = await getDownloadURL(imageRef);
                await updateDoc(doc(db, 'posts', docRef.id), {
                    image: downloadURL,
                });
            });
        setOpen(false);
        setLoading(false);
        setSelectedFile(null)
    };
    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result)
        }

    }
    return (
        <Transition.Root show={open} as={Fragment} >
            <Dialog as="div" className={`${open ? 'fixed' : " "} z-10 inset-0 overflow-y-auto`} onClose={setOpen} >
                <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100">
                        <Dialog.Overlay className={`${open ? 'fixed' : " "} inset-0  transition-opacity`} />
                    </Transition.Child>
                    <span
                        className="hidden sm:inline-block sm:align-middle sm:h-screen"
                        aria-hidden="true">

                    </span>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 translate-y-4 sm: translate-y-0 sm:scale-95"
                        enterTo="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leaveFrom=" opacity-100 translate-y-0 sm:scale-100"
                        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">

                        <div className="inline-block align-bottom backdrop-blur-xl rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden
                            shadow-xl transform transition-all  sm:my-8 sm:mr-100 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                {selectedFile ? (
                                    <img src={selectedFile} onClick={() => setSelectedFile(null)} alt="" />
                                ) : (
                                    <div
                                        className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer">
                                        <CameraIcon className='h-6 w-6 text-re-600' aria-hidden="true" />
                                    </div>)}

                            </div>

                            <div >
                                <div className="mt-3 text-center sm:mt-5">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg leading-6 font-medium text-gray-900">
                                        Upload Photo
                                    </Dialog.Title>
                                    <div>
                                        {!selectedFile && <input onClick={() => filePickerRef.current?.click()} className="backdrop-blur-xl " ref={captionRef} type="file" onChange={addImageToPost} />}
                                    </div>
                                    <div className="m-2">
                                        <input type="text" className='border-none  focus:ring-0 w-full text-center' placeholder='Please Enter Caption...' />
                                    </div>
                                </div>

                            </div>

                            <div className="mt-5 sm:mt-6">
                                <button
                                    disabled={!selectedFile}
                                    onClick={uploadPost}
                                    type="button"
                                    className=" z-20 inline-flex justify-center w-full rounded-md border border-transparent shadow-sm
                                        px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none
                                        focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-smIdisabled:bg-gray-300
                                        disabled:cursor-not-allowed hover:disabled:bg-gray-300" >
                                    {loading ? "Uploading..." : "Upload Post"}
                                </button>
                            </div>
                        </div>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition.Root>

    )
}

export default Modal