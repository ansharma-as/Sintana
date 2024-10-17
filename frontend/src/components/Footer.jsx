import React from 'react';

const FooterComponent = () => {
  return (
    <div>
      <footer className="bg-customGrey text-white py-8 ">
        <div className=" mx-0 px-4 flex flex-col md:flex-row-reverse md:justify-around justify-center ">


          <div className="flex justify-around flex-col md:flex-row md:w-2/3 text-center md:text-left">
            <div className=''>
              <h3 className="font-bold mb-2"></h3>
              <ul className="space-y-2">
                <li><a href="/" className="hover:underline">Home</a></li>
                <li><a href="/team" className="hover:underline">Team</a></li>
                <li><a href="/about" className="hover:underline">About</a></li>
                <li><a href="/news" className="hover:underline">News</a></li>
                <li><a href="/sintana-alliance" className="hover:underline">Features</a></li>
                <li><a href="/contact" className="hover:underline">Contact</a></li>
                <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
                <li><a href="/privacyPolicy" className="hover:underline">Privacy Policy</a></li>
              </ul>
            </div>
            <div className=' mt-8'>
              <h3 className="font-bold mb-2"></h3>
              <ul className="space-y-2">
                <li><a href="/sintana-alliance" className="hover:underline">The Sintana Alliance</a></li>
                <li><a href="/bu-partnership" className="hover:underline">BU Partnership</a></li>
                <li><a href="/powered-by-bu" className="hover:underline">Powered by BU</a></li>
                <li><a href="/new-universities" className="hover:underline">New Universities</a></li>
                <li><a href="/globally-ranked-universities" className="hover:underline">Globally Ranked Universities</a></li>
              </ul>
            </div>
          </div>

          <div className="my-8 lg:mb-0 order-last w-full md:w-1/3 text-center md:text-left">
            <h2 className="text-2xl font-bold text-yellow-500 mb-2">Sintana Education</h2>
            <address className="not-italic">
              Plot 8-11,<br />
              Bennett University,<br />
              Greater Noida, 201310<br />
            </address>
            <p className="mt-2">+91 9773661339</p>
          </div>


        </div>
      </footer>
    </div>
  );
};

export default FooterComponent;
