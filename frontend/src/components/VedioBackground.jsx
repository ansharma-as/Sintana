import React from 'react';
import { Link } from 'react-router-dom';
//import Navbar from './Navbar';

const VideoBackgroundSection = () => {
  return (
    <div className="relative h-[700px] overflow-hidden">
    {/* Video Background */}
    <video
      className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay
      loop
      muted
    >
      <source src="../../public/images/home-page-vedio.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

      {/* Navbar */}
      <div>
        {/* <Navbar /> */}
      </div>


      {/* university divisions */}
      
      

      {/* Content Overlay */}
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-4xl text-black mb-4">Welcome to Our Site</h2>
        <p className="text-lg text-balck mb-8">Discover our amazing services and offerings.</p>
        <Link to="/learn-more">
          <button className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400 transition duration-300">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoBackgroundSection;
