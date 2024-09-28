import React from 'react';

const UniversityLogos = () => {
  return (
    <div className="bg-customGrey py-0">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo 1 */}
        <a href="https://www.uide.edu.ec/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/uide-logo.png" alt="UIDE" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 2 */}
        <a href="https://www.uag.mx/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/uag-logo.png" alt="Universidad Autónoma de Guadalajara" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 3 */}
        <a href="https://www.northcapuniversity.edu.in/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/northcap-logo.png" alt="The NorthCap University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 4 */}
        <a href="https://www.ulatina.ac.cr/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/ulatina-logo.png" alt="Universidad Latina de Costa Rica" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 5 */}
        <a href="https://www.bilgi.edu.tr/en/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/istanbul-bilgi-logo.png" alt="Istanbul Bilgi University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 6 */}
        <a href="https://www.almau.edu.kz/en/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/almau-logo.png" alt="Almaty Management University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 7 */}
        <a href="https://www.galalau.edu.eg/" target="_blank" rel="noopener noreferrer">
          <img src="/path-to-logos/galala-logo.png" alt="Galala University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default UniversityLogos;
