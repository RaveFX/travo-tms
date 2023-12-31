import React from "react";

const testo = [
  {
    name: "Ravindu Viranga",
    position: "Pahasara UCSC",
    description:
      "The experience I got from Travo is Wonderful! I would love to use this service once again and forever! Highly recommended",
  },

  {
    name: "Nishan Madushanka",
    position: "Pahasara UCSC",
    description:
      "The experience I got from Travo is Wonderful! I would love to use this service once again and forever! Highly recommended",
  },

  {
    name: "Anushka Rajapaksha",
    position: "Pahasara UCSC",
    description:
      "Using this travel app has been a game-changer! Seamless bookings, breathtaking destinations, and excellent support.",
    image: "/hichcha.jpg",
  },

  {
    name: "Anushka Rajapaksha",
    position: "Pahasara UCSC",
    description:
      "Using this travel app has been a game-changer! Seamless bookings, breathtaking destinations, and excellent support.",
    image: "/hichcha.jpg",
  },
];

function Testimonials() {
  return (
    <div className="flex flex-row gap-5 mx-10">
      {testo.map((card) => (
        <div class="  w-[25%] max-h-50 mt-10  max-w-lg p-7 text-left bg-white shadow-xl rounded-xl">
          <p class="mx-auto text-base leading-relaxed text-gray-500">
            {card.description}
          </p>
          <h2 class="mt-4 text-xs font-semibold tracking-widest text-blue-500 uppercase">
            {card.name}
          </h2>
          <span href="#" class="font-semibold text-gray-200 lg:mb-0">
            {card.position}
          </span>
          <div>
            <img
              alt="testimonial"
              class="inline-block object-cover object-center w-20 h-20 mt-8 rounded-full"
              src="/hichcha.jpg"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Testimonials;
