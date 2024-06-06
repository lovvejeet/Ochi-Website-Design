function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#000]">
      <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] border-[#a1b562] mt-20 pt-10">
        <div className="w-1/2">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-5 mt-10 rounded-full bg-zinc-900 text-white uppercase">
            Read More
            <div className="w-2 h-2 rounded-full bg-zinc-100"></div>
          </button>
        </div>
        <div className="h-[70vh] w-1/2 bg-white rounded-3xl"></div>
        <div></div>
      </div>
    </div>
  );
}

export default About;
