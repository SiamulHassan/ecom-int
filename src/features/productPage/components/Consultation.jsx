import React from "react";
import consultImg from "../../../assets/images/consult.png";
import Typography from "../../../ui/Typography";
import ButtonSecondary from "../../../ui/ButtonSecondary";
const Consultation = () => {
  return (
    <div className="px-[1rem] bg-bg_F2E">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <picture className="justify-self-end lg:justify-self-start">
            <img
              src={consultImg}
              className="max-w-[45rem] w-full md:w-[59rem] h-auto object-cover"
              alt="consult image"
            />
          </picture>
          <div className="justify-self-start md:justify-self-end xl:justify-self-start self-center py-[2rem] md:py-0">
            <Typography variant="p_normal_16">
              Not Sure where to Start?
            </Typography>
            <Typography
              variant="h2_secondary"
              color="text-secondary_color"
              className="max-w-[41rem] mt-[1rem] mb-[2rem]"
            >
              Book a Free 25 Minute Consultation
            </Typography>
            <ButtonSecondary width="24.5rem">Book Consultation</ButtonSecondary>
          </div>
        </div>
      </div>
      <div className="container"></div>
    </div>
  );
};

export default Consultation;
