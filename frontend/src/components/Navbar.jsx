import React from 'react';
const Navbar = () => {
  return(
    <>
    <div>
      <nav className="absolute top-4 right-8 flex space-x-6 text-white">
          <a href="/solutions" className="hover:underline">SOLUTIONS</a>
          <a href="/team" className="hover:underline">TEAM</a>
          <a href="/alliance" className="hover:underline">THE CINTANA ALLIANCE</a>
          <a href="/asu-partnership" className="hover:underline">ASU PARTNERSHIP</a>
          <a href="/about" className="hover:underline">ABOUT</a>
          <a href="/contact" className="hover:underline">CONTACT</a>
        </nav></div>
    </>
  )
}

export default Navbar;