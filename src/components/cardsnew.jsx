import React from "react";

const cards = [
  {
    name: "Wooden House, Florida",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    rating: 5,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image: "./cardimage.jpg",
  },

  {
    name: "Wooden House, Florida",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    rating: 5,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image: "A:UCSC/3RDYEAR/travo-tms/travo-tms/public/cardimage.jpg",
  },

  {
    name: "Wooden House, Florida",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    rating: 5,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image: "A:UCSC/3RDYEAR/travo-tms/travo-tms/public/cardimage.jpg",
  },

  {
    name: "Wooden House, Florida",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    rating: 5,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image: "A:UCSC/3RDYEAR/travo-tms/travo-tms/public/cardimage.jpg",
  },

  {
    name: "Wooden House, Florida",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    rating: 5,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image: "A:UCSC/3RDYEAR/travo-tms/travo-tms/public/cardimage.jpg",
  },
];

export default function Newcards() {
  return (
    <div class="inline-flex ml-10 mr-10 overflow-hidden gap-5 rounded-lg cursor-pointer h-max   font-poppins ">
      {cards.map((card) => (
        <a href="#" class="block w-full h-full">
          <img
            alt="blog photo"
            src="/cardimage.jpg"
            class="object-cover w-full max-h-40"
            className="rounded-t-lg"
          />
          <div class="w-full rounded-b-lg p-4 bg-white dark:bg-gray-800">
            <p class="font-medium text-indigo-500 text-md">Article</p>
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              Sigiriya
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
              {card.description}
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Car
              </div>
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #Money
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>

    /* <a href="#" class="block w-full h-full">
        <img
          alt="blog photo"
          src="/cardimage.jpg"
          class="object-cover w-full max-h-40"
        />
        <div class="w-full p-4 bg-white dark:bg-gray-800">
          <p class="font-medium text-indigo-500 text-md">Article</p>
          <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
            Sigiriya
          </p>
          <p class="font-light text-gray-400 dark:text-gray-300 text-md">
            Sigiriya or Sinhagiri is an ancient rock fortress located in the
            northern Matale District near the town of Dambulla in the Central
            Province, Sri Lanka.
          </p>
          <div class="flex flex-wrap items-center mt-4 justify-starts">
            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
              #Car
            </div>
            <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
              #Money
            </div>
          </div>
        </div>
      </a>
    </div> */
  );
}
