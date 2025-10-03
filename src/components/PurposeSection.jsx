import React from "react";

function PurposeSection() {
     const features = [
    {
      icon: "💚", // Replace with your actual icon component or image
      title: "Built for wellness",
      description: "Yoga helps cultivate strength, flexibility, and inner calm through mindful movement and breathing."
    },
    {
      icon: "🧡", // Replace with your actual icon component or image
      title: "In harmony with you",
      description: "Every practice is designed to adapt to your pace and lifestyle, guiding you toward balance and peace."
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-16 px-4 md:px-8 sm:px-6 ">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
          <div className="">
                <p className="text-sm text-[#FF9F76] font-medium mb-2 ">
                ACHIEVE MORE
                </p>
                <h2 className="text-3xl md:w-4/5 w-full md:text-4xl font-bold text-gray-900">
                Purpose of Yoga is to balance your mind and body🌿
                </h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 justify-between gap-8">
                {
                features.map((feature , index)=>(
                    <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-1 flex items-center justify-start">{feature.icon}</div>
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 ">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    </div>
                ))
                }
          </div>
        </div>
      </div>
    </section>
  );
}

export default PurposeSection;
