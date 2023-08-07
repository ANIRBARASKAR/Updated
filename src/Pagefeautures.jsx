import React from 'react';

const GlassmorphismFeatures = () => {
  return (
    <div className="bg-opacity-30 backdrop-filter backdrop-blur-lg bg-white bg-opacity-20 shadow-lg p-4 mx-auto max-w-lg rounded-md flex mt-8">
      <div className="w-1/2">
        <img
          src="https://via.placeholder.com/600"
          alt="Feature Icon"
          className="w-full h-auto rounded-lg border-4 border-white shadow-lg"
        />
      </div>
      <div className="w-1/2 pl-4 flex flex-col justify-center">
        <div className="bg-white bg-opacity-30 rounded-md p-4 shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-2">Feature 1</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vestibulum mi ut mi feugiat, vel malesuada est
            luctus.
          </p>
        </div>
        <div className="bg-white bg-opacity-30 rounded-md p-4 shadow-lg mb-4">
          <h2 className="text-xl font-bold mb-2">Feature 2</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vestibulum mi ut mi feugiat, vel malesuada est
            luctus.
          </p>
        </div>
        <div className="bg-white bg-opacity-30 rounded-md p-4 shadow-lg">
          <h2 className="text-xl font-bold mb-2">Feature 3</h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Phasellus vestibulum mi ut mi feugiat, vel malesuada est
            luctus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GlassmorphismFeatures;
