import slack from "../assets/slack.png";
import amazon from "../assets/amazon.png";
import woocommerce from "../assets/woocommerce.png";
import meundies from "../assets/meundies.png";
import sitepoint from "../assets/sitepoint.png";

function ComponyLogo() {
  const logos = [slack, amazon, woocommerce, meundies, sitepoint];
  return (
    <div className="w-full overflow-hidden container mx-auto py-20 gap-8 flex sm:flex-row flex-col sm:item-center items-start">
      <div className="w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-blue-500 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left">
        Proud partner <br /> Hubspot & Segment
      </div>

      <div className=" flex animate-marquee whitespace-nowrap ">
        {logos.map((logo, index) => (
          <img src={logo} alt="company logo" key={index} className="mx-12 h-8 w-36 object-contain  grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out" />
        ))}

         {logos.map((logo, index) => (
          <img src={logo} alt="company logo" key={`dublicate-${index}`} className="mx-12 h-8 w-36 object-contain  grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out" />
        ))}
      </div>
    </div>
  );
}

export default ComponyLogo;
