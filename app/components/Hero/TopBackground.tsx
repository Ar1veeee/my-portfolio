import Image from "next/image";
import React from "react";

const TopBackground = () => {
  return (
    <>
      <div className="absolute w-full max-w-[360px] md:max-w-screen-lg h-[285px] md:h-[656px] top-[188px] md:top-11 left-1/2 -translate-x-1/2 md:overflow-x-hidden z-10">
        <div className="w-full h-full relative">
          <div className="circle-icon top-0 left-[171px] md:top-28 md:left-72">
            <Image
              src="/rocket_icon.svg"
              alt="Rocket Icon"
              width={23}
              height={23}
            />
          </div>
          <div className="circle-icon top-[162px] -left-5 md:top-64 md:left-0">
            <Image
              src="/bracket_icon.svg"
              alt="Bracket Icon"
              width={23}
              height={23}
              className="w-auto h-auto"
            />
          </div>
          <div className="circle-icon top-60 left-[149px] md:top-[570px] md:left-44">
            <Image
              src="/github_icon.svg"
              alt="Github Icon"
              width={23}
              height={23}
              className="w-auto h-auto"
            />
          </div>
          <div className="hidden md:circle-icon md:top-[592px] md:left-[608px]">
            <Image
              src="/electricity_icon.svg"
              alt="Electricity Icon"
              width={23}
              height={23}
              className="w-auto h-auto"
            />
          </div>
          <div className="hidden md:circle-icon md:top-[158px] md:left-[606px]">
            <Image
              src="/merge_icon.svg"
              alt="Merge Icon"
              width={23}
              height={23}
            />
          </div>
          <div className="hidden md:circle-icon md:top-[368px] md:left-[965px]">
            <Image
              src="/stack_icon.svg"
              alt="Stack Icon"
              width={23}
              height={23}
            />
          </div>
        </div>
      </div>
      <Image
        src="/top_highlight.svg"
        alt="Top dark mode background highlight"
        width={809}
        height={877}
        className="absolute top-[-515px] hidden dark:md:block left-1/2 -translate-x-1/2 w-auto h-auto"
      />

      <Image
        src="/top_highlight.svg"
        alt="Top dark mode background highlight for mobile"
        width={429}
        height={465}
        className="absolute top-[-229px] hidden dark:block dark:md:hidden left-1/2 -translate-x-1/2 w-auto h-auto"
      />
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-top-bg-light bg-[auto_auto] hidden dark:hidden md:block"></div>
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-top-bg-mobile-light bg-[auto_auto] dark:hidden md:hidden"></div>
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-top-bg-dark bg-[auto_auto] hidden md:dark:block"></div>
      <div className="absolute top-0 w-full h-[795px] bg-repeat-x bg-top-bg-mobile-dark bg-[auto_auto] hidden dark:block dark:md:hidden"></div>
    </>
  );
};

export default TopBackground;
