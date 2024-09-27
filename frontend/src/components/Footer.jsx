import React from 'react';

const FooterComponent = ()=> {
    return (
    <div>
      <footer className="bg-customGrey text-white py-8">
      <div className="container mx-3 max-w-screen-md flex flex-col md:flex-row justify-between">
        {/* Left Section (Contact Information) */}
        <div className="mb-8 md:mb-0">
          <h2 className="text-2xl font-bold text-yellow-500 mb-2">Sintana Education</h2>
          <address className="not-italic">
            1130 E. University Dr.<br />
            Suite 101, Building B<br />
            Tempe, AZ 85281<br />
          </address>
          <p className="mt-2">+1.602.584.3400</p>
        </div>

        {/* Right Section (Links) */}
        <div className="grid grid-cols-2 gap-8 md:ml-8">
          <div>
            <h3 className="font-bold mb-2"></h3>
            <ul className="space-y-2">
              <li><a href="/home" className="hover:underline">Home</a></li>
              <li><a href="/team" className="hover:underline">Team</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/news" className="hover:underline">News</a></li>
              <li><a href="/features" className="hover:underline">Features</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Use</a></li>
              <li><a href="/privacyPolicy" className="hover:underline">Privacy Policy</a></li>


            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2"></h3>
            <ul className="space-y-2">
              <li><a href="/cintana-alliance" className="hover:underline">The Cintana Alliance</a></li>
              <li><a href="/asu-partnership" className="hover:underline">ASU Partnership</a></li>
              <li><a href="/powered-by-asu" className="hover:underline">Powered by ASU</a></li>
              <li><a href="/new-universities" className="hover:underline">New Universities</a></li>
              <li><a href="/regional-universities" className="hover:underline">Regional Universities</a></li>
              <li><a href="/globally-ranked-universities" className="hover:underline">Globally Ranked Universities</a></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
    )
}



export default FooterComponent;