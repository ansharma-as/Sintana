import React from 'react';
import VideoBackgroundSection from '../components/VedioBackground';
import UniversityLogos from '../components/University-home';
import Navbar from '../components/Navbar';

const universities = [
  { name: 'Universidad Latina de Costa Rica', description: 'A private university in Costa Rica', link: '#', img: '/path/to/universidad-latina.jpg' },
  { name: 'Universidad Norbert Wiener', description: 'An educational leader in Peru', link: '#', img: '/path/to/universidad-norbert-wiener.jpg' },
  { name: 'CEIPA', description: 'Virtual education pioneer in Colombia', link: '#', img: '/path/to/ceipa.jpg' }
  // Add other universities similarly
];

// Updated SectionHeader with YouTube video preview
const SectionHeader = ({ title, subtitle, videoLink }) => (
  <section className="relative text-center py-20 bg-cover bg-center text-white" style={{ backgroundImage: 'url("/path/to/background-image.jpg")' }}>
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative z-10">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{subtitle}</p>
      
      {/* Video preview */}
      <div className="mb-8">
        <iframe 
          className="w-full md:w-2/3 lg:w-1/2 mx-auto aspect-video"
          src={videoLink}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="space-x-4">
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">Discover More</button>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">Watch The Video</button>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section className="text-center py-20 bg-gray-100">
    <h2 className="text-3xl font-bold mb-12">Helping Universities Improve And Grow</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ServiceItem title="Strategic Planning" description="Set your course for growth and impact" />
      <ServiceItem title="Recruiting and Marketing" description="Reach more students" />
      <ServiceItem title="Academic Curricula" description="Develop new programs" />
      <ServiceItem title="Online Learning" description="Expand online engagement" />
      <ServiceItem title="International Exchange" description="Collaborate with global institutions" />
      <ServiceItem title="Reputation and Ranking" description="Enhance your reputation" />
    </div>
  </section>
);

const ServiceItem = ({ title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const Universities = () => (
  <section className="text-center py-20 bg-white">
    <h2 className="text-3xl font-bold mb-12">Helping Globally Ranked Universities Reach New Markets</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {universities.map((uni, index) => (
        <UniversityCard key={index} {...uni} />
      ))}
    </div>
  </section>
);

const UniversityCard = ({ name, description, link, img }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md">
    <img src={img} alt={name} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href={link} className="text-yellow-500 font-semibold">Learn more</a>
    </div>
  </div>
);

const App = () => {
  return (
    <div className="App mb-8 ">
      
        <div className="mb-8 w-full">
            <VideoBackgroundSection />
        </div>

        <div>
            <UniversityLogos />
        </div>
      
      <Services />
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Powered by ASU</h2>
        <p className="text-gray-700 mb-6">When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.</p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">Learn more</button>
      </section>
      <section className="py-20 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-4">Launching New Universities</h2>
        <p className="text-gray-700 mb-6">We can help design, launch, and operate new projects anywhere in the world.</p>
        <button className="bg-yellow-500 text-white py-2 px-4 rounded">Learn more</button>
      </section>
      <Universities />
    </div>
  );
};

export default App;
