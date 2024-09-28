import React from 'react';
import Navbar from '../components/Navbar';
import FooterComponent from '../components/Footer';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative">
        {/* Background Image */}
        <img 
          className="w-full h-150 object-cover" 
          src="/images/contact.png" 
          alt="Background" 
        />

        {/* Navigation Menu */}
        <div className="absolute top-0 left-0 w-full">
                 <Navbar />
            </div>
      </header>

      {/* Main Section */}
      <section className="bg-customGrey text-white flex-grow flex items-center">
        <div className="container mx-3 max-w-screen-md px-4 py-16 md:px-8">
          {/* Headquarters */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-customYellow mb-4">Headquarters</h2>
            <address className="not-italic space-y-2 text-lg">
              <p>Cintana Education</p>
              <p>1130 E. University Dr.</p>
              <p>Suite 101, Building B</p>
              <p>Tempe, AZ 85281</p>
            </address>
          </div>

          {/* Phone */}
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-customYellow mb-4">Phone</h2>
            <p className="text-lg">+1.602.584.3400</p>
          </div>

          {/* Travel Information */}
          <div>
            <h2 className="text-4xl font-bold text-customYellow mb-4">Travel Information</h2>
            <a 
              href="https://www.cintana.com/travel" 
              className="text-lg hover:underline">
              https://www.cintana.com/travel
            </a>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="bg-customGrey">
        <div className="relative">
          <iframe
            title="Google Map"
            className="w-full h-96 md:h-[450px]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3357.957223012211!2d-111.94046552421798!3d33.419228980797134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0e43d8df2357%3A0xf34c073d3b313c5b!2s1130%20E%20University%20Dr%2C%20Tempe%2C%20AZ%2085281%2C%20USA!5e0!3m2!1sen!2sin!4v1695881390230!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </section>

      <footer>
        <FooterComponent/>
      </footer>
    </div>
  );
};

export default ContactPage;
