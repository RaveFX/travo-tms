import React from "react";

const cards = [
  {
    name: "Sigiriya",
    description:
      "Sigiriya or Sinhagiri is an ancient rock fortress located in the northern Matale District near the town of Dambulla in the Central Province, Sri Lanka.",
    rating: 5,
    hashtag1: "heritage",
    hashtag2: "history",
    image: "./cardimage.jpg",
  },

  {
    name: "Ella",
    description:
      "Small town in the Badulla District of Uva Province, Sri Lanka. The area has a rich bio-diversity, dense with numerous varieties of flora and fauna",
    rating: 5,
    features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    image: "/ella.jpg",
    hashtag1: "upcountry",
    hashtag2: "mountains",
  },

  {
    name: "Dunhinda Falls",
    description:
      "Dunhinda Falls is a waterfall located about 5 kilometres from Badulla in the lower central hills of Sri Lanka. The waterfall gets its name from the smoky dew drops.",
    rating: 5,
    hashtag1: "upcountry",
    hashtag2: "nature",
    image: "/dunhinda.jpg",
  },

  {
    name: "Hortan Plains",
    description:
      "Located at an elevation of 2,100–2,300 m (6,900–7,500 ft) and encompasses montane grassland and cloud forest. It is rich in biodiversity and many species",
    rating: 5,
    hashtag1: "biodiversity",
    hashtag2: "wildlife",
    image: "/hortan.jpg",
  },

  {
    name: "Sri Pada (Adam's Peak)",
    description:
      "Adam's Peak is a 2,243 m (7,359 ft) tall conical sacred mountain located in central Sri Lanka.It is well known for the Sri Pada (Śrī Pāda; Sinhala: ශ්‍රී පාද, sacred footprint)",
    rating: 5,
    // features: ["Free wifi", "2 bedrooms", "65 HDTV", "Fire alert"],
    hashtag1: "buddhism",
    hashtag2: "mountains",
    image: "/adams.jpg",
  },
];

export default function Newcards() {
  return (
    <div class="inline-flex ml-10 mr-10 overflow-hidden gap-5 rounded-lg cursor-pointer h-max   font-poppins ">
      {cards.map((card) => (
        <a href="#" class="block w-full h-full">
          <img
            alt="blog photo"
            src={`${card.image}`}
            class="object-cover w-full max-h-40"
            className="rounded-t-lg"
          />
          <div class="w-full rounded-b-lg p-4 bg-white dark:bg-gray-800">
            <button className=" bg-rose-700 p-1 rounded-md font-poppins font-sm text-sm text-white">
              Trending
            </button>
            {/* <p class="font-medium text-indigo-500 text-md">Article</p> */}
            <p class="mb-2 text-xl font-medium text-gray-800 dark:text-white">
              {card.name}
            </p>
            <p class="font-light text-gray-400 dark:text-gray-300 text-md">
              {card.description}
            </p>
            <div class="flex flex-wrap items-center mt-4 justify-starts">
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #{card.hashtag1}
              </div>
              <div class="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                #{card.hashtag2}
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
