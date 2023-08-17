import { Typography, Avatar, Rating } from "@material-tailwind/react";

export function rating() {
  return (

      <div className="flex flex-grow flex-col">
        <h1 class="text-3xl py-1">Customer Ratings</h1>
        <div className=" flex sm:flex-row flex-wrap w-full my-1 xs:justify-center">
          <div className="w-[400px] m-1 p-5 border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <div className="flex my-10 ">
              <div className="w-1/2">
                <p>2023 Mar 10</p>
              </div>
              <div className="w-1/2 justify-end flex">
                <Rating value={2} readonly className="flex" />
              </div>
            </div>
            <div className="h-[275px]">
              <p className="mb-6 font-medium">
                "Excellent travel guide! Knowledgeable and friendly, they made
                the trip enjoyable. Only a few rushed moments, but overall, a
                fantastic experience. Will definitely recommend to others
                seeking a memorable journey."
              </p>
            </div>
            <div className="flex">
              <div className="w-1/6">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
              <div className="w-1/2">
                <p>Anne Mario</p>
              </div>
            </div>
          </div>
          <div className="w-[400px] m-1 p-5 border-2 border-gray-200 rounded-lg drop-shadow-lg">
            <div className="flex my-10 ">
              <div className="w-1/2">
                <p>2023 Mar 10</p>
              </div>
              <div className="w-1/2 justify-end flex">
                <Rating value={5} readonly className="flex" />
              </div>
            </div>
            <div className="h-[275px]">
              <p className="mb-6 font-medium">
                "Highly recommend this travel guide! Their expertise and
                enthusiasm added so much value to the trip. A well-organized
                itinerary allowed us to explore unique places. Just a minor
                issue with transportation delays, but the overall experience was
                fantastic. Will consider booking with them again in the future."
              </p>
            </div>
            <div className="flex">
              <div className="w-1/6">
                <img
                  className="h-10 w-10 flex-none rounded-full bg-gray-50"
                  src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                />
              </div>
              <div className="w-1/2">
                <p>Mass rimaz</p>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}

export default rating;
