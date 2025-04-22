function HomePage() {
  return (
    <div className="flex flex-col items-center  w-full ">
      <div className="flex items-center justify-between w-full px-3 mt-[80px]">
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="text-center">
          <p className="">Hello I'm</p>
          <p className="text-2xl font-bold">Gidado Abdullatef</p>
          <p className=" text-gray-300">Software Engineer</p>
        </div>
        <div className="rotate-270">Scroll Down</div>
      </div>
      <div className="flex gap-4 items-center justify-center w-full px-3 mt-[40px]">
        <div>
          <button className="hover:bg-[#fff]  cursor-pointer  hover:text-black text-[#4db5ff] text-[19px] border-1 border-[#4db5ff] px-4 py-2 rounded-md">
            Downlaod Resume
          </button>
        </div>
        <div className="hover:bg-[#fff] cursor-pointer hover:text-black bg-[#4db5ff] text-[19px] text-black px-4 py-2 rounded-md">
          <button>Contact Me</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
