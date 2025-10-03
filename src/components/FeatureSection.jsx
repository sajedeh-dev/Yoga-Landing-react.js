import React from "react";

function FeatureSection() {
  const features = [
    {
      icon: "🔍",
      title: "Discover your path",
      description: "Explore different yoga styles and find the one that aligns with your goals—whether it’s relaxation, strength, or flexibility.",
    },
    {
      icon: "⚙️",
      title: "Build your routine",
      description: "Create a consistent practice with guided sessions designed to fit your lifestyle and personal needs.",
    },
    {
      icon: "🚀",
      title: "Feel the change",
      description: "Experience improved focus, reduced stress, and a healthier body as yoga becomes part of your everyday life.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-16" id="about" name="about">
      {/* heading text */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">
          How can Yoga help your life?
        </h2>
        <p className="text-gray-600">
          Through mindful practice, yoga builds trust in your body and increases inner peace.
        </p>
      </div>
      {/* features box */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center items-center p-6"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center "
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FEE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{item.icon}</div>
            </div>

            <h3 className="text-2xl font-medium mb-3">{item.title}</h3>
            <p className="text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>
      {/* button */}
      <div className="text-center mt-12">
        <button className="bg-[#FF862F] text-white cursor-pointer px-8 py-3 rounded-full font-medium hover:bg-orange-500 transition-colors relative ">
          Bcome a partner
        </button>
        {/* <div className=" absolute -z-10 w-full h-full rounded-full bg-blue-600/50 blur-xl top-0 left-0"></div> */}
      </div>
    </section>
  );
}

export default FeatureSection;
