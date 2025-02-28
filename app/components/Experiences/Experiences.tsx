import React from "react";
import experiences from "@/data/experiences.json";
import SectionContainer from "../Section/SectionContainer";
import SectionHeader from "../Section/SectionHeader";
import Experience from "./Experience";
import Image from "next/image";

const Experiences = () => {
  return (
    <SectionContainer id="experiences">
      <div className="section-contents mb-[66px] md:mb-[43px] md:mx-[64px]">
        <SectionHeader plainText="💼 My prior" highlightText="Experience" />
        <div className="w-full px-6 md:px-[52px] flex flex-col gap-5">
          {experiences.map((experience, id) => (
            <Experience
              key={id}
              id={id}
              image={experience.image}
              company={experience.company}
              role={experience.role}
              description={experience.description}
              dates={experience.dates}
            />
          ))}
        </div>
      </div>
      <div className="circle-icon h-14 w-14 top-[77px] right-1.5 md:top-[153px] md:right-[90px] -z-10">
        <Image
          src="/bracket_icon.svg"
          alt="Bracket icon"
          width={23}
          height={23}
          className="w-auto h-auto"
        />
      </div>
      <div className="circle-icon h-14 w-14 left-1.5 bottom-0 md:left-[90px] -z-10">
        <Image
          src="/electricity_icon.svg"
          alt="Electricity icon"
          width={23}
          height={23}
          className="w-auto h-auto"
        />
      </div>
    </SectionContainer>
  );
};

export default Experiences;
