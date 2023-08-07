import React from 'react';

const BenefitsCard = ({ iconUrl, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-500 text-white">
        <img src={iconUrl} alt="Benefit Icon" className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold mt-4">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsPage = () => {
  const benefitsData = [
    {
      iconUrl: 'https://w7.pngwing.com/pngs/182/483/png-transparent-check-correct-green-mark-tick.png',
      title: 'Responsive Design',
      description: 'Tailwind CSS makes it easy to create responsive components for various screen sizes.',
    },
    {
      iconUrl: 'https://w7.pngwing.com/pngs/182/483/png-transparent-check-correct-green-mark-tick.png',
      title: 'Simplified Styling',
      description: 'Tailwind CSS provides pre-built utility classes, eliminating the need for custom CSS.',
    },
    {
      iconUrl: 'https://w7.pngwing.com/pngs/182/483/png-transparent-check-correct-green-mark-tick.png',
      title: 'Component Reusability',
      description: 'Tailwind CSS allows creating reusable UI components for easier development.',
    },
    {
      iconUrl: 'https://w7.pngwing.com/pngs/182/483/png-transparent-check-correct-green-mark-tick.png',
      title: 'Low Learning Curve',
      description: 'Tailwind CSS has a straightforward learning process for new developers.',
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Benefits of Tailwind CSS in React</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefitsData.map((benefit, index) => (
          <BenefitsCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default BenefitsPage;
