import React from "react";
import Navbar from "../components/Navbar";
import AsuPart from "../components/AsuPart-page";
import Partnership from "../components/PartnerwithusToday";
import FooterComponent from "../components/Footer";
import Autoslider from "../components/Autoslider";

const AsuPartnership = () => {
  return (
    <>
      <div className="h-auto w-auto ">
        <div className="bg-[url('/images/partnership-page-bg.png')] bg-cover bg-center h-[500px] w-full sm:h-[217.8px] md:h-[217.8px] lg:h-[217.8px]">
          <Navbar />
        </div>

        <div className="p-10">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold leading-tight my-4 text-[#425563]">
              Our Partnership With ASU
            </h1>
            <p className="mb-[17.28px] ">
              Cintana was founded in partnership with Arizona State University,
              globally recognized as one of the most innovative universities in
              the world.
            </p>
            <span className="mb-[17.28px] ">
              When you partner with Cintana and ASU, your students get direct
              access to the resources and expertise of Arizona State University,
              including:
            </span>
          </div>

          <AsuPart />

          


        </div>
      </div>

      <Autoslider/>

      <div className="">
        <div className="lg:flex flex-col-reverse md:flex sm:flex">
          <div className="py-[70px] pl-[120px] pr-[270px] w-1/2 inline-block h-auto align-top sm:w-full sm:p-6 sm:h-auto md:w-full md:p-8 md:h-auto lg:w-full lg:p-10 lg:h-auto">
            <h2 className="text-[30px] text-[#425563] font-bold tracking-normal leading-tight">
              Cutting-Edge Innovation and Research
            </h2>
            <p className="text-[15.84px] mt-4">
              ASU has consistently been ranked the number one university for
              innovation by US News & World Report. In fact, since 2002, ASU has
              had a five-fold growth in research funding (from $100 million to
              more than $650 million) and has become one of the fastest-growing
              research enterprises in the United States.
            </p>
          </div>

          <div className=" bg-[url('/images/home-cutting-edge-photo-scaled.png')] bg-cover w-1/2 inline-block h-[668px] align-top lg:h-[489.531px] lg:w-auto lg:bg-center lg:bg-cover md:h-[489.531px]  md:w-auto md:bg-center md:bg-cover sm:h-[489.531px] sm:w-auto sm:bg-center sm:bg-cover">
            {/* <img src="../../public/images/home-cutting-edge-photo-scaled.jpg" alt="" className='object-cover bg-no-repeat h-[668px]'/> */}
          </div>
        </div>

        <div className="sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col">
          <div className=" bg-[url('/images/asu-partnership-photo.png')] bg-cover  bg-center bg-no-repeat w-1/2 inline-block h-[1234.7px] align-top lg:h-[400px] lg:w-auto lg:bg-center lg:bg-cover md:h-[400px]  md:w-auto md:bg-center md:bg-cover sm:h-[400px] sm:w-auto sm:bg-center sm:bg-cover ">
            {/* <img src="../../public/images/home-cutting-edge-photo-scaled.jpg" alt="" className='object-cover bg-no-repeat h-[668px]'/> */}
          </div>

          <div className="py-[70px] pl-[120px] pr-[270px] w-1/2 inline-block h-[1234.7px] align-top sm:p-6 sm:w-full sm:h-auto md:p-8 md:w-full md:h-auto lg:p-10 lg:w-full lg:h-auto">
            <h2 className="text-[46.08px] text-[#425563] font-bold tracking-normal leading-tight">
              World-Class Resources and Faculty
            </h2>
            <p className="text-[15.84px] mt-4">
              ASU’s 119,000 students – including more than 40,000 online
              students — enjoy access to resources and faculty that can’t be
              found anywhere else, including Ira A. Fulton Schools of
              Engineering, the largest engineering program in the U.S. and the
              W.P. Carey School of Business, one of the top business schools in
              the country and highly ranked for academics, groundbreaking
              research, and student outcomes. ASU’s Thunderbird School of Global
              Management is ranked #1 Worldwide for its Master of Global
              Management. Additionally, ASU is ranked among the top universities
              in the world for research and teaching. More than 400 ASU faculty
              have been conferred by the National Academies of Sciences,
              Engineering and Medicine with “highly prestigious” awards. Among
              ASU faculty are Nobel laureates, Pulitzer Prize winners, MacArthur
              Foundation fellows and Fulbright American scholars.
            </p>
          </div>
        </div>
      </div>
      <Partnership/>
      <FooterComponent/>

    </>
  );
};

export default AsuPartnership;