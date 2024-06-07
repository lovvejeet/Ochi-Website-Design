// import { motion } from "framer-motion";

import { motion } from "framer-motion";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".1"
      className="py-20  w-full rounded-tl-3xl rounded-tr-3xl bg-[#004D43]"
    >
      <div className="text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[15vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pr-20'
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className='text-[15vw] leading-none font-["Founders_Grotesk"] font-semibold uppercase pr-20'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
