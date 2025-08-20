import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
      </div>

      {/* Experience Cards */}
      <div className="flex flex-col items-center space-y-16">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="w-[320px] sm:w-[400px] lg:w-[450px] p-6 rounded-2xl  border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] transform transition-transform duration-300 hover:scale-105 flex flex-col"
          >
            {/* Top: Logo + Role */}
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white rounded-md overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-white">
                  {experience.role}
                </h3>
                <h4 className="text-sm text-gray-300">{experience.company}</h4>
                <p className="text-xs text-gray-500 mt-1">{experience.date}</p>
              </div>
            </div>

            {/* Middle: Description */}
            <p className="text-gray-400 text-sm mt-4">{experience.desc}</p>

            {/* Bottom: Skills */}
            <div className="mt-4">
              <h5 className="font-medium text-white text-sm">Skills:</h5>
              <ul className="flex flex-wrap mt-2">
                {experience.skills.map((skill, index) => (
                  <li
                    key={index}
                    className="bg-[#8245ec] text-gray-200 px-3 py-1 text-xs rounded-lg mr-2 mb-2 border border-gray-400"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
