import React from "react";
import featureImg from "../../../assets/images/feature_img.png";
import Typography from "../../../ui/Typography";

const Feature = () => {
  return (
    <div className="border-t border-border_DCD mb-[4.5rem] pt-[4rem]">
      <div className="grid-cols-1 grid md:grid-cols-2 items-center">
        <img
          src={featureImg}
          alt="feature image"
          className="w-full max-h-[67rem] h-full object-cover"
        />
        <div className="quote bg-bg_677 flex items-center h-full py-[4.5rem] md:py-0 pl-[3.7vw] pr-[1rem]">
          <Typography
            variant="h2"
            color="text-white"
            className="w-full md:max-w-[42.7rem] italic text-[4rem] md:text-[3.5rem] lg:text-[4rem]"
          >
            As a certified organic, family-run pharmaceutical, our Laxfo goes
            directly from us to you—with love.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Feature;
