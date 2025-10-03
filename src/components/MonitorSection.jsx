import yoga from "../assets/yoga.png";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function MonitorSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ">
        {/* left */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 w-full"
        >
          <p className="text-[#FF862F] text-2xl font-medium">MONITOR</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6 md:w-4/5 ">
            Transform Your Body and Mind with the Healing Power of Yoga
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet v Lorem ipsum dolor sit amet <br />
            Lorem ipsum dolor sit amet v Lorem ipsum dolor sit amet <br />
            Lorem ipsum dolor sit amet v Lorem ipsum dolor sit amet <br />
          </p>
          <div className="flex  gap-2 hover:gap-6 transition-all duration-500   ">
            <a href="#" className=" text-[#FF862F] font-semibold  ">
              Explore Scheduling Features
            </a>
            <GoArrowRight className="size-5 text-[#FF862F] mt-1 " />
          </div>
        </motion.div>
        {/* right */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView="show"
          className=" md:w-1/2 w-full "
        >
          <img src={yoga} alt="schedual" className="w-full h-auto " />
        </motion.div>
      </div>
    </section>
  );
}

export default MonitorSection;
