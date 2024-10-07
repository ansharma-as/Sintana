import React from 'react';

const HomeCards = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto flex flex-col xl:flex-row items-center">
        
        {/* Left Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
            Powered by ASU
          </h1>
          <p className="text-gray-500 mb-6 ml-5">
            When you partner with Cintana and ASU, your students get direct access to the resources and expertise of Arizona State University.
          </p>
          <button className="bg-yellow-500 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition ml-8">
            Learn more
          </button>
        </div>
        
        {/* Right Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/HomeCard1.jpg"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
    </div>



    {/* Section 2 reverting cards */}

    <div className="container mx-auto flex flex-col xl:flex-row items-center">
        {/* Left Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/HomeCard2.jpg"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
            Launching New universities
          </h1>
          <p className="text-gray-500 mb-6 ml-5">
          We can help design, launch, and operate new projects anywhere in the world.          </p>
          <button className="bg-yellow-500 text-white ml-8 font-bold py-2 px-6 rounded hover:bg-yellow-600 transition">
            Learn more
          </button>
        </div>
      </div>


      {/* Section-3 Again Reverting */}

      <div className="container mx-auto flex flex-col xl:flex-row items-center">
        
        {/* Left Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
          Helping Globally Ranked Universities Reach New Markets
          </h1>
          <p className="text-gray-500 mb-6 ml-5">
          We can help develop new markets, launch and manage foreign campuses, and create new cross-border partnerships.          </p>
          <button className="bg-yellow-500 ml-8 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition">
            Learn more
          </button>
        </div>
        
        {/* Right Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/HomeCard3.jpg"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>
    </div>

    {/* Section-4 Again Reverting */}

    <div className="container mx-auto flex flex-col xl:flex-row items-center">
        {/* Left Section - Image */}
        <div className="xl:w-1/2">
          <img
            src="/images/HomeCard4.jpg"  // Replace with your image URL
            alt="Billboard"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Right Section - Text and Button */}
        <div className="xl:w-1/2 text-center xl:text-left">
          <h1 className="text-gray-700 text-4xl font-bold mb-4 ml-5">
          Featured University          </h1>
          <p className="text-gray-500 mb-6 ml-5">
          WGalala University is one of the newest members of the Cintana Alliance. In partnership with Arizona State University, they will offer dual degree programs to Egyptian students across a number of disciplinary domains.   </p>
          <button className="bg-yellow-500 ml-8 text-white font-bold py-2 px-6 rounded hover:bg-yellow-600 transition">
            Learn more
          </button>
        </div>
      </div>




    </div>


  );
};

export default HomeCards;
