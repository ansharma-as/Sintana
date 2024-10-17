import React from "react";
import Navbar from "../components/Navbar";
import BUPart from "../components/AsuPart-page";
import Partnership from "../components/PartnerwithusToday";
import FooterComponent from "../components/Footer";
import Autoslider from "../components/Autoslider";

const AsuPartnership = () => {
  return (
    <>
      <div className=" relative h-auto w-auto ">
        <div className="bg-[url('/images/BU4.png')] bg-cover bg-center h-[217.8px] w-full xl1:h-[500px] ">
          <Navbar />
        </div>

        <div className="p-10">
          <div className="flex flex-col items-center ">
            <h1 className="text-5xl font-bold leading-tight  text-[#425563]">
              Our Partnership With BU
            </h1>
            <p className="mb-[17.28px] ">
              Sintana was founded in partnership with Bennett University,
              globally recognized as one of the most innovative universities in
              the world.
            </p>
            <span className="mb-[17.28px] ">
              When you partner with Sintana and BU, your students get direct
              access to the resources and expertise of Bennett University,
              including:
            </span>
          </div>

          <BUPart />
        </div>
      </div>

      <Autoslider />

      <div className="">
        <div className="lg1:flex flex-col-reverse md1:flex sm1:flex">
          <div className="py-[70px] pl-[120px] pr-[270px] w-1/2 inline-block h-auto align-top sm1:w-full sm1:p-6 sm1:h-auto md1:w-full md1:p-8 md1:h-auto lg1:w-full lg1:p-10 lg1:h-auto">
            <h2 className="text-[30px] text-[#425563] font-bold tracking-normal leading-tight">
              Cutting-Edge Innovation and Research
            </h2>
            <p className="text-[15.84px] mt-4">
              Bennett University (BU) is recognized as No. 1 for Private
              University Innovation in India. Known for its strong global
              partnerships with institutions like Babson College and Georgia
              Tech, BU leads in fostering entrepreneurship, AI, and data
              sciences. Its No. 1 ranking for placements and No. 1 School of
              Media & Journalism add to its reputation for academic excellence.
              BU's rapid growth, interdisciplinary research, and industry-driven
              programs have made it a top choice for students seeking
              cutting-edge education and industry-ready skills.
            </p>
          </div>

          <div className=" bg-[url('/images/home-cutting-edge-photo-scaled.png')] bg-cover w-1/2 inline-block h-[668px] align-top lg1:h-[489.531px] lg1:w-auto lg1:bg-center lg1:bg-cover md1:h-[489.531px]  md1:w-auto md1:bg-center md1:bg-cover sm1:h-[489.531px] sm1:w-auto sm1:bg-center sm1:bg-cover">
            {/* <img src="/images/home-cutting-edge-photo-scaled.jpg" alt="" className='object-cover bg-no-repeat h-[668px]'/> */}
          </div>
        </div>

        <div className="sm1:flex sm1:flex-col md1:flex md1:flex-col lg1:flex lg1:flex-col">
          <div className=" bg-[url('/images/asu-partnership-photo.png')] bg-cover  bg-center bg-no-repeat w-1/2 inline-block h-[1234.7px] align-top lg1:h-[400px] lg1:w-auto lg1:bg-center lg1:bg-cover md1:h-[400px]  md1:w-auto md1:bg-center md1:bg-cover sm1:h-[400px] sm1:w-auto sm1:bg-center sm1:bg-cover ">
            {/* <img src="/images/home-cutting-edge-photo-scaled.jpg" alt="" className='object-cover bg-no-repeat h-[668px]'/> */}
          </div>

          <div className="py-[70px] pl-[120px] pr-[270px] w-1/2 inline-block h-[1234.7px] align-top sm1:p-6 sm1:w-full sm1:h-auto md1:p-8 md1:w-full md1:h-auto lg1:p-10 lg1:w-full lg1:h-auto">
            <h2 className="text-[46.08px] text-[#425563] font-bold tracking-normal leading-tight">
              World-Class Resources and Faculty
            </h2>
            <p className="text-[15.84px] mt-4">
              Bennett University (BU) continues to receive significant
              recognition for both its faculty and cutting-edge resources.
              Recently, 11 of BU's faculty members were ranked among the top 2%
              of scientists worldwide, showcasing its strong emphasis on
              academic excellence and research. This accolade places BU among
              India’s leading institutions for innovation and research. In
              addition to its esteemed faculty, BU has set a milestone by
              becoming the first private university in India to install an AI
              Supercomputer, in collaboration with NVIDIA. This move has
              transformed the university into a hub for advanced AI research,
              with enhanced capabilities in fields like deep learning,
              healthcare, and smart living solutions.
            </p>
          </div>
        </div>
      </div>
      <Partnership />
      <FooterComponent />
    </>
  );
};

export default AsuPartnership;
