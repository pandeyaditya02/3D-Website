import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { partners } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {partners.map((partner) => (
        <div className='w-28 h-28' key={partner.name}>
          <BallCanvas icon={partner.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
