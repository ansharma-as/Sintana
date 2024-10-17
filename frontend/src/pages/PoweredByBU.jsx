import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';
import Partnership from '../components/PartnerwithusToday';
import BUPart from '../components/AsuPart-page';
import CardSection from '../components/CardComponent';

const PoweredByBU = () => {
    return (
        <>
        <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <img
          className="w-full  h-[217.8px] xl:h-[500px] object-cover" // Adjust the height as necessary
          src="/images/BU3.png" // Make sure the correct image path is here
          alt="Background"
        />
    {/* <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        {/* <header className="relative"> */}
            {/* Background Image */}
            {/* <img 
                className="w-full h-64 md:h-96 object-cover" 
                src="/images/about.png" 
                alt="Background"  */}
            {/* />  */}

            {/* Navigation Menu */}
            <div className="absolute top-0 left-0 w-full">
                 <Navbar />
            </div>
        </header>

        <div className="p-10">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold leading-tight  text-[#425563]">
              Our Partnership With BU
            </h1>
            <p className="mb-[17.28px] ">
              Sintana was founded in partnership with Bennett University,
              globally recognized as one of the most innovative universities in
              the world.
            </p>
            <span className="mb-[17.28px] ">
              When you partner with Sintana and BU, your students get direct
              access to the resources and expertise of Bennett University,
              including:
            </span>
          </div>

          <BUPart />
        </div>

       <div>
        <CardSection/>
       </div>


        
        <div>
            <Partnership/>
        </div>





        {/* Footer */}
        <footer>
            <FooterComponent />
        </footer>
      </div>
    </>
    );
}

export default PoweredByBU;
