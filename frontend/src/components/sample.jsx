import React, { useState } from "react";
import Navbar from "../components/Navbar";
import teamData from "../components/teamData";
import { useNavigate } from "react-router-dom";
import FooterComponent from "../components/Footer";

const Team = () => {
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [selectedPractices, setSelectedPractices] = useState([]);
  const [selectedLeadership, setSelectedLeadership] = useState([]);

  const slugify = (name) => {
    return name.toLowerCase().replace(/\s+/g, "-");
  };

  const navigate = useNavigate();

  const handleClick = (member) => {
    const slugifiedName = slugify(member.name);
    navigate(`/team/${slugifiedName}`, { state: { member } });
  };

  const handleCheckboxChange = (category, value) => {
    switch (category) {
      case "region":
        setSelectedRegions((prev) =>
          prev.includes(value)
            ? prev.filter((region) => region !== value)
            : [...prev, value]
        );
        break;
      case "practice":
        setSelectedPractices((prev) =>
          prev.includes(value)
            ? prev.filter((practice) => practice !== value)
            : [...prev, value]
        );
        break;
      case "leadership":
        setSelectedLeadership((prev) =>
          prev.includes(value)
            ? prev.filter((leadership) => leadership !== value)
            : [...prev, value]
        );
        break;
      default:
        break;
    }
  };

  // Filter team members based on selected filters
  const filteredTeamData = teamData.filter((member) => {
    const matchesRegion =
      selectedRegions.length === 0 || selectedRegions.includes(member.region);
    const matchesPractice =
      selectedPractices.length === 0 ||
      selectedPractices.includes(member.practice);
    const matchesLeadership =
      selectedLeadership.length === 0 ||
      selectedLeadership.includes(member.leadership);

    return matchesRegion && matchesPractice && matchesLeadership;
  });

  return (
    <>
      <div className="bg-[#425563] font-sans">
        <Navbar />
        <div className="p-10">
          <h2 className="text-[36px] md:text-[46.08px] font-bold text-white tracking-[-0.3px] leading-[36px] md:leading-[46.08px] mt-0 mx-0 p-0 capitalize box-border mb-5">
            World leaders in university design and transformation
          </h2>

          <ul className="text-[14.4px] pl-6 font-normal text-white list-disc xl:text-[15.84px] md:font-medium md:pl-10 box-border justify-center">
            {/* Your list content here */}
          </ul>
        </div>
      </div>

      {/* Filter Section */}
      <div className="p-10">
        <h3 className="text-xl font-bold">Filter By:</h3>

        {/* By Region */}
        <div className="mb-4">
          <h4 className="font-bold">By Region</h4>
          {["Global", "Africa", "Asia-Pacific", "Europe", "Latin America", "Middle East"].map((region) => (
            <label key={region} className="block">
              <input
                type="checkbox"
                value={region}
                checked={selectedRegions.includes(region)}
                onChange={() => handleCheckboxChange("region", region)}
              />
              {region}
            </label>
          ))}
        </div>

        {/* By Practice */}
        <div className="mb-4">
          <h4 className="font-bold">By Practice</h4>
          {[
            "Academic Excellence",
            "Health Sciences",
            "Marketing & Enrollment",
            "Online",
            "Product & Technology",
          ].map((practice) => (
            <label key={practice} className="block">
              <input
                type="checkbox"
                value={practice}
                checked={selectedPractices.includes(practice)}
                onChange={() => handleCheckboxChange("practice", practice)}
              />
              {practice}
            </label>
          ))}
        </div>

        {/* In Leadership */}
        <div className="mb-4">
          <h4 className="font-bold">In Leadership</h4>
          {["Corporate Leader", "Practice Leader", "Regional Leader"].map(
            (leadership) => (
              <label key={leadership} className="block">
                <input
                  type="checkbox"
                  value={leadership}
                  checked={selectedLeadership.includes(leadership)}
                  onChange={() => handleCheckboxChange("leadership", leadership)}
                />
                {leadership}
              </label>
            )
          )}
        </div>
      </div>

      {/* Team Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredTeamData.length > 0 ? (
          filteredTeamData.map((member, index) => (
            <div
              key={index}
              className="relative group w-full h-0 pb-[100%] cursor-pointer"
              onClick={() => handleClick(member)}
            >
              <img
                src={member.image}
                alt={member.name}
                className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[#F5B719] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out flex items-center justify-center">
                <span className="text-[#53565A] text-[23.04px] text-lg font-bold">
                  {member.name}
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-4">
            No team members match the selected filters.
          </p>
        )}
      </div>

      <FooterComponent />
    </>
  );
};

export default Team;
