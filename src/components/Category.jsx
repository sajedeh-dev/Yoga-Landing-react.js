import yaga1 from "../assets/yaga1.png";
import yaga2 from "../assets/yaga2.png";
import yaga3 from "../assets/yaga3.png";



function Category() {
  const cards = [
    {
      title: "Meditation",
      description: "Lorem ipsum dolor sit amet consectetur.",
      image: yaga1,
    },
    {
      title: "Yoga Flow",
      description: "Nec id fringilla vestibulum commodo.",
      image: yaga2,
    },
    {
      title: "Mindfulness",
      description: "Morbi viverra dignissim et sapien .",
      image: yaga3,
    },
    {
      title: "Breathing",
      description: "Suspendisse potenti in faucibus.",
      image: yaga2,
    },
  ];

  return (
    <section className="container  mx-auto flex flex-col gap-6 md:gap-0 md:flex-row justify-between items-center pt-20 mb-20 px-4 sm:px-6 lg:px-8 ">
      
      {cards.map((card, index) => {
        return (
          <div
            key={index}
            className=" shadow-orange-100 border-1 border-orange-200  p-4 rounded-2xl  rounded-tr-[80px]  shadow-md text-center"
          >
            <img
            
              src={card.image}
              alt={card.title}
              className="w-h-60 h-60 mx-auto mb-8 "
            />
            <h2 className="text-xl mb-4 text-left text-orange-400  font-semibold">{card.title}</h2>
            <p className="text-sm text-gray-500">{card.description}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Category;
