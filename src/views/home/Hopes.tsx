import * as React from "react";
import { motion } from "framer-motion";

const Hopes: React.FC = (): React.ReactElement => {
  const [plus, setPlus] = React.useState([]);
  const clickHandle = () => {
    setPlus((preList) => [...preList, 1]);
  };
  return (
    <section className="pb-24">
      <div className="text-white text-center pt-32 px-8">
        <h1 className="text-[36px] leading-[46px] sm:text-[48px] sm:leading-[62px]">
          祈祷顺利出行
        </h1>
        <div className="mt-5 text-[20px] leading-[28px] font-normal">
          如受到防疫政策影响，本次出行将报废。
        </div>
        <button
          className="relative bg-[rgb(52,211,153)] py-3 px-5 rounded-md mt-16 text-black text-[18px] leading-[27px]"
          onClick={clickHandle}
        >
          {plus.map((_, index) => (
            <motion.div
              key={index}
              className="absolute -top-2 -right-2 text-white -translate-x-[10] translate-y-[10px] select-none"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0.6, 1, 0.4, 0],
                x: [-10, 40],
                y: [5, -40],
                transitionEnd: {
                  display: "none",
                },
              }}
            >
              +1
            </motion.div>
          ))}
          为我们祈祷
        </button>
      </div>

      <iframe
        className="w-full h-[200px] mt-20 mx-auto lg:container sm:mt-40 sm:h-[400px]"
        src="https://www.youtube.com/embed/hscPHpmsmr0"
        title="王菲-心经"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <iframe
        className="w-full h-[100px] mt-6 mx-auto lg:container sm:mt-40"
        frameborder="0"
        border="1"
        width="100%"
        height="100"
        src="//music.163.com/outchain/player?type=2&id=100554&auto=1&height=100"
      ></iframe>
    </section>
  );
};

export default Hopes;
