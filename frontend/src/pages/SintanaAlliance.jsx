import React from 'react';
import MapComponent from '../components/MapComponent';
import CardSection from '../components/CardComponent';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'; // Import the Navbar component

const SintanaAlliance = () => {
  return (
    <div>
      {/* Hide the MapComponent when screen width is 1280px or larger */}
      <div className="w-full sm1:hidden md1:hidden lg1:hidden"> 
        <MapComponent />
      </div>

      {/* Show the Navbar component when screen width is 1280px or larger */}
      <div className="hidden sm1:block md1:block lg1:block bg-customGrey">
        <Navbar />
      </div>

      <div className="py-12 bg-gray-100">
        <h1 className="text-center text-5xl font-bold text-customGrey">The Sintana Alliance</h1>
        <div className="mt-4 text-center">
          <h1 className="text-lg text-slate-400 px-20">
            We’re building a global network of forward-looking universities that are working together to bring the best of higher education to every one of their students. To date, the Cintana Alliance has impacted 100,000+ students around the world by providing their institutions with the resources they need to thrive in an increasingly competitive market.
          </h1>       
          <p className="text-black px-20 mt-5">Every member of the Cintana Alliance is carefully selected and serves as the exclusive affiliate of Cintana in the region and fields of study which they serve.</p>
          <p className="text-black px-20 mt-5">Cintana Alliance members will share best practices across regions and fields of study, offer exchange opportunities for students and faculty, provide dual-degree programs with other members, and benefit from the scale of a global community of member institutions.</p>
          <p className="text-black px-20 mt-5">Over time, our alliance and its members will be a vital part of the global dialogue about the role and future of higher education.</p>    
        </div>
        <CardSection />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default SintanaAlliance;
