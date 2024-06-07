import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textstructure mt-40 px-20">
        {["WE CREATE", " EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex">
                {index == 1 && (
                  <motion.div
                    initial={{ width: "0" }}
                    animate={{ width: "6.5vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="rounded-md mr-[1vw] w-[6.5vw] h-[5vw] bg-zinc-200 relative top-[0.8rem]"
                  ></motion.div>
                )}
                <h1 className="uppercase text-[7.5vw] leading-[5.8vw] font-['Test_Founders_Grotesk'] font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md  font-light tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5 cursor-pointer">
          <div className="px-5 py-2 border-[2px] border-zinc-400 rounded-full text-md font-light uppercase">
            start the project
          </div>
          <div className="w-10 h-10 flex justify-center items-center border-[2px] border-zinc-500 rounded-full">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
