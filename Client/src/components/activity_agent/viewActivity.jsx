import React from "react";

const features = [
  { name: "Activity Name:", description: "Alec M. Thompson" },
  { name: "Description:", description: " (44) 123 1234 123" },
  { name: "Activity Price:", description: "alecthompson@mail.com" },
  { name: "Facilities:", description: "United States" },
];

export default function ViewActivity() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {/* Swap the positions of the two divs */}
        <div className="grid grid-cols-2 grid-rows-1 gap-2 sm:gap-60 lg:gap-8">
          <img
            src="/activity_agent/safari.jpg"
            // alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-full h-full object-center object-cover lg:col-span-2"
          />
          {/* Add the other images here if you need them */}
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Activity Information
          </h2>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                {/* Use conditional class to set the text color to green */}
                <dd
                  className={`mt-1 text-sm ${
                    feature.isGreen ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
          <div class="pt-10">
            <button class="bg-red-500 text-white hover:bg-green-700 font-bold py-1 px-2 border border-green-500 rounded mr-5">
            Delete
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}
