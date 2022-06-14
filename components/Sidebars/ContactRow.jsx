import React from 'react'
import { useRecoilState } from 'recoil'
import { darkMode } from '../../atoms/darkMode'
import { contactId } from '../../atoms/contactId'
function ContactRow() {
  const [, setContactId] = useRecoilState(contactId)
  const contacts = [
    {
      name: 'Moti Yosef',
      src: 'https://firebasestorage.googleapis.com/v0/b/instagram-clone-789cd.appspot.com/o/posts%2F2ktTb9TJsN78IEsx2tod%2Fimage?alt=media&token=9fedd3ae-b8b6-435d-a08f-e6b8f668793e',
      profile:
        'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
    },
    {
      name: 'Elon Musk',
      src: 'https://i.pinimg.com/474x/22/40/55/224055a72b9cc6ff63617bcb2c3ce8af.jpg',
      profile:
        'https://i.pinimg.com/474x/d6/88/51/d688517e6f30ed7342b3f78e7612e7bc.jpg',
    },
    {
      name: 'Jeff Bezoz',
      src: 'https://i.pinimg.com/474x/fb/33/b9/fb33b94125d3ef63f22d536190a680a6.jpg',
      profile:
        'https://i.pinimg.com/474x/e9/c8/08/e9c808fdac222166d8b1d892e79fe25e.jpg',
    },

    {
      name: 'Mark Zuckerberg',
      src: 'https://i.pinimg.com/474x/a7/0b/80/a70b8028369e0172cb8c287d50d18c2a.jpg',
      profile:
        'https://i.pinimg.com/474x/b9/3d/d4/b93dd44ef0d0719d741a9c36802e6d82.jpg',
    },
    {
      name: 'Moti Yosef',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },
    {
      name: 'Moti Yosef',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },
    {
      name: 'Moti Yosef',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },

    {
      name: 'Moti Yosef',
      src: 'https://i.pinimg.com/474x/5b/2b/63/5b2b63772a0e763fac4a143924efa19a.jpg',
      profile:
        'https://i.pinimg.com/474x/2a/05/7d/2a057d572e088070c4310edc0f0f4cd3.jpg',
    },
  ]

  return (
    <div className="w-fit-content  overflow-y-scroll pr-9 scrollbar-hide md:inline-block ">
      {contacts.map((el) => (
        <div
          onClick={() =>
            setContactId({
              name: el.name,
              src: el.profile,
              open: true,
              source: 'message',
            })
          }
          key={el.src}
          className="w-100 flex h-10 cursor-pointer  items-center space-x-2 rounded-xl p-[25px] hover:scale-125 hover:bg-gray-200 hover:opacity-100 "
        >
          <img src={el.profile} alt="" className="h-6 w-6 rounded-full" />
          <p className="text-sm font-semibold text-gray-700">{el.name}</p>
        </div>
      ))}
    </div>
  )
}

export default ContactRow
