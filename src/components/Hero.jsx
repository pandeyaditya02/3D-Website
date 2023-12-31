import { motion } from "framer-motion";
import { styles } from "../styles";
import { RobotsCanvas } from "./canvas";
const Hero = (props) => {
  
  const { heading } = props;

  return (
    <section className={`relative flex w-full h-screen mx-auto`}>
      <div
        className={`absolute  inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} px-16 flex flex-col md:flex-row  items-start gap-12`}
      >
        <div className="hidden md:flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className="text-[#915EFF]">{heading}</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A remarkable connection <br className="sm:block hidden" />
            with technology
          </p>
        </div>
        <RobotsCanvas />
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
