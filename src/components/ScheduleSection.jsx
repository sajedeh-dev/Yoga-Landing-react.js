import SchedualImage from "../assets/stats.png";
import { GoArrowRight } from "react-icons/go";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

function ScheduleSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 ">
        {/* left */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          className=" md:w-1/2 w-full"
        >
          <img src={SchedualImage} alt="schedual" className="w-full h-auto" />
        </motion.div>
        {/* right */}
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView="show"
          className="md:w-1/2 w-full"
        >
          <p className="text-orange-500 text-2xl font-medium">SCHEDUAL</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-6  ">
            Discover Balance, Strength, <br />
            and Inner Peace Through the Practice of Yoga
          </h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet v Lorem ipsum dolor sit amet <br />
            Lorem ipsum dolor sit amet v Lorem ipsum dolor sit amet <br />
            Lorem ipsum dolor sit amet v Lorem ipsum dolor sit amet <br />
          </p>
          <div className="flex  gap-2 hover:gap-6 transition-all duration-500   ">
            <a href="#" className=" text-orange-500 font-semibold  ">
              Explore Scheduling Features
            </a>
            <GoArrowRight className="size-5 text-orange-500 mt-1 " />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ScheduleSection;
