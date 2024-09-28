import React from 'react';

const universities = [
  {
    name: 'Almaty Management University',
    description: 'An internationally recognized, globally accredited and award-winning university in Kazakhstan.',
    img: '/path/to/almaty-university.jpg',
    link: 'https://www.example.com/almaty-management-university',
  },
  {
    name: 'American University Kyiv',
    description: 'A world-class private university in Ukraine, providing higher education at the Bachelor, Masters, and PhD levels.',
    img: '/path/to/american-university-kyiv.jpg',
    link: 'https://www.example.com/american-university-kyiv',
  },
  {
    name: 'CEIPA',
    description: 'A pioneer in virtual education in Colombia and now a member of the Cintana Alliance global network.',
    img: '/path/to/ceipa.jpg',
    link: 'https://www.example.com/ceipa',
  },
  {
    name: 'Charlotte Fresenius Privatuniversität',
    description: 'Located in Vienna, a University of Sustainability focused on clear sustainability goals.',
    img: '/path/to/charlotte-fresenius.jpg',
    link: 'https://www.example.com/charlotte-fresenius',
  },
  {
    name: 'Chitkara University',
    description: 'A private university offering undergraduate and post-graduate programs in various fields.',
    img: '/path/to/chitkara-university.jpg',
    link: 'https://www.example.com/chitkara-university',
  },
  // Add more universities as needed...
];

const CardSection = () => {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 lg:px-16">
      {universities.map((university, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={university.img} alt={university.name} className="w-full h-48 object-cover"/>
          <div className="p-4">
            <h2 className="text-xl font-bold text-gray-800">{university.name}</h2>
            <p className="mt-2 text-gray-600">{university.description}</p>
            <a 
              href={university.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md"
            >
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;
