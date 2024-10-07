import React, { useState } from 'react';

const NewsCards = () => {
  const articles = [
    {
        title: 'The Most Innovative University in U.S., Arizona State University, Unlocks Opportunity for Universum International College to Redefine Higher Education in Kosovo and the region',
        description: 'Universum College joins the ASU-Cintana Alliance, building on a commitment to support internationally competitive research, professional development, and a transformative student experience. Prishtina, KOSOVO, March 31, 2023. Universum International College...',
        link: '#',
    },
      {
        title: 'Universidad Norbert Wiener Partners with Arizona State University to Bring Innovative Global Education to Peru',
        description: 'Universidad Norbert Wiener joins the ASU-Cintana Alliance to offer a unique educational model in Peru that provides students with new academic opportunities. Lima, January 22, 2023. Universidad Norbert Wiener (UNW)...',
        link: '#',
      },
      {
        title: 'CEIPA Joins the ASU-Cintana Alliance and Partners with Arizona State University to Boost its Academic Excellence',
        description: 'Powered by Arizona State University, CEIPA’s new programming will establish a unique educational model in Colombia that provides students with a wide range of new academic opportunities. Sabaneta – August...',
        link: '#',
      },
    {
      title: 'International Students Welcomed in Arizona for Inaugural Sustainability and Innovation Summer Immersion Program at Arizona State University',
      description: 'Participants of the two-week program created lifelong friendships and were inspired to make a positive impact in their communities...',
      link: '#',
    },
    {
      title: 'Galala University Joins Global Alliance, Enabling Egyptian Students to Receive Both Egyptian and American Degrees in High-Demand Fields',
      description: 'Powered by Arizona State University, Galala University joins the Cintana Alliance to provide Egyptian students with access to world-class degree programs and cutting-edge research...',
      link: '#',
    },
    {
      title: 'CinLearn',
      description: 'CinLearn helps globally ranked universities offer online programs in native languages in markets around the world. Cross-border online education provides an important alternative for globally ranked universities...',
      link: '#',
    },
    {
        title: 'Arizona State University Partners with Cintana Education to Launch Global University Network',
        description: 'Unique collaboration will help institutions worldwide meet rising demand for higher education; scale access to high-quality programs. TEMPE — August 27, 2019 —Cintana Education, a new public benefit corporation led...',
        link: '#',
      },
      {
        title: 'Arizona State University Senior Leader Rick Shangraw to Join Cintana Education as President',
        description: 'Former Arizona State University executive leader brings deep higher education and business background to Cintana Education’s global university network. TEMPE – May 5, 2020 – Today, Cintana Education announced that...',
        link: '#',
      }
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    if (currentPage < Math.ceil(articles.length / cardsPerPage) - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const currentArticles = articles.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div className="bg-gray-300 py-12 h-fit">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 lg:space-x-6">
          {currentArticles.map((article, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg w-full lg:w-1/3">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-6">
                {article.description}
              </p>
              <a href={article.link} className="text-gray-600 font-semibold hover:text-gray-800 flex items-center">
                Read More <span className="ml-2">&rarr;</span>
              </a>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={`px-6 py-2 rounded-lg text-white ${currentPage === 0 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800'}`}
          >
            &larr;
          </button>
          <button
            onClick={handleNext}
            disabled={currentPage >= Math.ceil(articles.length / cardsPerPage) - 1}
            className={`px-6 py-2 rounded-lg text-white ${currentPage >= Math.ceil(articles.length / cardsPerPage) - 1 ? 'bg-gray-500 cursor-not-allowed' : 'bg-gray-700 hover:bg-gray-800'}`}
          >
            &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
