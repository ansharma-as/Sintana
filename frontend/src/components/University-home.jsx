import React from 'react';

const UniversityLogos = () => {
  return (
    <div className="bg-customGrey py-0 h-24">
      <div className="container mx-auto flex justify-around items-center">
        {/* Logo 1 */}
        <a href="https://www.cintana.com/university/the-international-university-of-ecuador/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed1.png" alt="UIDE" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 2 */}
        <a href="https://www.cintana.com/university/universidad-autonoma-de-guadalajara/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed2.png" alt="Universidad Autónoma de Guadalajara" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 3 */}
        <a href="https://www.cintana.com/university/northcap-university/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed3.png" alt="The NorthCap University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 4 */}
        <a href="https://www.cintana.com/university/universidad-latina/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed4.png" alt="Universidad Latina de Costa Rica" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 5 */}
        <a href="https://www.cintana.com/university/istanbul-bilgi-university/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed5.png" alt="Istanbul Bilgi University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 6 */}
        <a href="https://www.cintana.com/university/almaty-management-university/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed6.png" alt="Almaty Management University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>

        {/* Logo 7 */}
        <a href="https://www.cintana.com/university/galala-university/" target="_blank" rel="noopener noreferrer">
          <img src="/images/processed7.png" alt="Galala University" className="h-16 hover:opacity-75 transition-opacity" />
        </a>
      </div>
    </div>
  );
};

export default UniversityLogos;
