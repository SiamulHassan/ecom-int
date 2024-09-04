import React from "react";
import consultImg from "../../../assets/images/consult.png";
import Typography from "../../../ui/Typography";
import ButtonSecondary from "../../../ui/ButtonSecondary";
import { Link } from "react-router-dom";
const Consultation = () => {
  return (
    <div className="bg-bg_F2E">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <picture className="justify-self-end lg:justify-self-start">
            <img
              src={consultImg}
              className="max-w-[45rem] w-full md:w-[59rem] h-auto object-cover"
              alt="consult image"
            />
          </picture>
          <div className="justify-self-start md:justify-self-end xl:justify-self-start self-center py-[2rem] md:py-0 px-[1rem] sm:px-0">
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
      {/* bottom part */}
      <div className="bg-bg_FFE py-[1.2rem]">
        <div className="container grid grid-cols-1 lg:grid-cols-3 gap-y-[2rem] lg:gap-y-0">
          <div className="flex flex-col">
            <Typography
              variant="span_normal_24"
              color="text-white"
              className="text-center"
            >
              Free BD shopping Over
              <Typography
                variant="span_bold_24"
                color="text-white"
                className="pl-3 italic"
              >
                BDT1500
              </Typography>
            </Typography>
            <Link to="/shop" className="text-center">
              <Typography variant="span_normal_24" color="text-white">
                Shop Now
              </Typography>
            </Link>
          </div>
          <div className="flex flex-col">
            <Typography
              variant="span_bold_24"
              color="text-white"
              className="italic text-center"
            >
              3-5 Day
              <Typography
                variant="span_normal_24"
                color="text-white"
                className="pl-3"
              >
                International Shipping
              </Typography>
            </Typography>
            <Link to="/" className="text-center">
              <Typography variant="span_normal_24" color="text-white">
                Learn More
              </Typography>
            </Link>
          </div>
          <div className="flex flex-col">
            <Typography
              variant="span_normal_24"
              color="text-white"
              className="text-center"
            >
              Rated{" "}
              <Typography
                variant="span_bold_24"
                color="text-white"
                className="pl-3 italic"
              >
                4.8 out of 5
              </Typography>{" "}
              on Trustpilot
            </Typography>
            <Link to="/" className="text-center">
              <Typography variant="span_normal_24" color="text-white">
                Read our reviews
              </Typography>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
