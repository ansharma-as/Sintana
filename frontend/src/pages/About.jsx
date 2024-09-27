import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';
import Partnership from '../components/PartnerwithusToday';

const AboutPage = () => {
    return (
        <>
    <div className="min-h-screen flex flex-col">
        {/* Header Section */}
        <header className="relative">
            {/* Background Image */}
            <img 
                className="w-full h-64 md:h-96 object-cover" 
                src="/images/about.png" 
                alt="Background" 
            />

            {/* Navigation Menu */}
            <Navbar/>
        </header>

        {/* About Us Section */}
        <div className="bg-gray-50 py-12">
            <div className="text-center px-4 md:px-0">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-700 mb-4">About Us</h1>
                <hr className="w-16 mx-3 border-gray-400 mb-8" />
                <p className="max-w-2xl mx-auto text-gray-600 text-base md:text-lg">
                Cintana Education enables universities around the world to increase their academic quality and scale to give more students the education they need and deserve. It provides world-class expertise and access to its own proprietary resources, as well as those of ASU, a world-class university that shares Cintana’s vision of expanding access through growth and innovation. The Cintana Alliance is an international network of universities that work together to meet the growing global demand for high-quality post-secondary education.
                </p>
            </div>
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

export default AboutPage;
