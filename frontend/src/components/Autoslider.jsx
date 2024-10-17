import React, { useState, useEffect } from "react";

const Autoslider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [flag, setFlag] = useState(true);
  const slides = [
    {
      statement:
        "Ranked #1 for Engineering programs among private universities in India.",
      by: "— India Today",
    },
    {
      statement: "Top 5 Private Universities in India for Academic Excellence.",
      by: "— QS India University Rankings",
    },
    {
      statement:
        "Awarded A+ grade by the National Assessment and Accreditation Council (NAAC).",
      by: "— NAAC",
    },
    {
      statement:
        "Ranked among the Top 100 universities in India for Research and Innovation.",
      by: "— National Institutional Ranking Framework (NIRF)",
    },
    {
      statement:
        "Top 10 in India for Placements in Engineering and Management streams.",
      by: "— Times of India",
    },
    {
      statement:
        "Ranked among the Top 20 universities in India for the quality of infrastructure.",
      by: "— Education World",
    },
    {
      statement: "One of the Top 10 Emerging Universities in India for 2024.",
      by: "— The Week",
    },
    {
      statement:
        "Ranked #1 for industry collaborations and internships among private universities.",
      by: "— Careers360",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [slides.length, flag]);

  const moveToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className=" xl:p-[100px] md:p-10 p-6 bg-[#EFEFEF] flex flex-col items-center h-auto">
      <h2 className="text-[46.08px] text-[#425563] font-bold tracking-normal leading-tight">
        About Bennett University
      </h2>
      <div className="my-8"></div>
      <p className="text-center">
        Bennett University is a pioneering institution focused on transforming
        higher education in India. It prioritizes inclusivity and measures
        success by the achievements of its diverse student body. With a strong
        emphasis on innovation and research, the university collaborates with
        industry leaders to provide students with practical learning
        experiences. By fostering social responsibility, Bennett University
        prepares graduates to tackle global challenges and contribute positively
        to society.
      </p>
      <div className="my-6"></div>
      <span className="text-[28.8px] text-[#425563] font-bold tracking-normal leading-tight">
        Unrivaled Recognition
      </span>
      <div className="my-6"></div>
      <div className="w-full max-w-lg mx-auto text-center">
        <div className="relative w-full min-h-64 h-auto">
          {/* slides content */}
          <div className="relative w-full  overflow-hidden h-auto">
            <div
              className="flex transition-transform duration-500 ease-in-out h-auto"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 h-auto flex flex-col justify-center items-center p-4"
                  style={{ minWidth: "100%" }}
                >
                  <h2 className="text-[24px] sm:text-[28.8px] font-semibold italic text-[#425563] text-center">
                    {slide.statement}
                  </h2>
                  <div className="my-4"></div>
                  <span className="text-[#425563] text-[15px] sm:text-[17.5px] font-bold text-center">
                    {slide.by}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* dots below the slides */}
          <div className="mt-6 flex  flex-wrap  justify-center h-auto space-x-3">
            {slides.map((_, index) => (
              <span
                key={index}
                onClick={() => {
                  moveToSlide(index);
                  setFlag(!flag);
                }}
                className={`cursor-pointer h-2 w-2 rounded-full transition-colors duration-300  my-2 ${
                  index === currentSlide ? "bg-black" : "bg-slate-400"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Autoslider;
