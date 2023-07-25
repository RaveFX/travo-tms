import React from 'react';

const features = [
  { name: 'Full Name:', description: 'Alec M. Thompson' },
  { name: 'Mobile:', description: ' (44) 123 1234 123' },
  { name: 'Email:', description: 'alecthompson@mail.com' },
  { name: 'Location:', description: 'United States' },
  { name: 'Reserved Date:', description: '14/06/21', isGreen: true }, // Add "isGreen: true" to make it green
  { name: 'Reserved Time:', description: '10.00 A.M', isGreen: true }, // Add "isGreen: true" to make it green
];

export default function Schedule() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        {/* Swap the positions of the two divs */}
        <div className="grid grid-cols-2 grid-rows-1 gap-2 sm:gap-60 lg:gap-8">
          <img
            src="safari.jpg"
            // alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
            className="rounded-lg bg-gray-100 w-full h-full object-center object-cover lg:col-span-2"
          />
          {/* Add the other images here if you need them */}
        </div>

        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Reserve Person Information</h2>

          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                {/* Use conditional class to set the text color to green */}
                <dd className={`mt-1 text-sm ${feature.isGreen ? 'text-green-500' : 'text-gray-500'}`}>{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
