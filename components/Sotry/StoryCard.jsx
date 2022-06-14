function StoryCard({ src, profile, name }) {
  return (
    <div className="duration-250 relative transition-all ease-out  hover:scale-110 ">
      <img
        className="hidden cursor-pointer border-2 border-blue-500 lg:absolute lg:z-10 lg:mt-[5px] lg:ml-[5px] lg:flex lg:h-10 lg:w-10 lg:rounded-full "
        src={profile}
        alt=""
      />
      <img
        width={150}
        height={150}
        className=" overflow-x h-20 w-20  cursor-pointer rounded-full object-cover shadow-lg  brightness-100  filter hover:shadow-lg hover:blur-none hover:brightness-125 lg:h-56 lg:w-40  lg:rounded-3xl"
        src={src}
        layout="fill"
      />
      <p className="hidden cursor-pointer text-xs text-white lg:absolute lg:z-10 lg:mt-[-45px] lg:ml-[15px] lg:flex lg:h-10 lg:w-10  ">
        {name}
      </p>
    </div>
  )
}

export default StoryCard
