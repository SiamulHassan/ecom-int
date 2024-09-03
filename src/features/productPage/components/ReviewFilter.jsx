import React from "react";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownFill } from "react-icons/ri";
import Typography from "../../../ui/Typography";

const ReviewFilter = () => {
  return (
    <div className="review_top_right grid grid-cols-2 gap-x-[2rem] items-center">
      <div className="filter_part">
        <Typography
          variant="span_normal_16"
          className="border-b border-secondary_color"
        >
          Filter Reviews
        </Typography>
        <div className="relative mt-2">
          <input
            type="text"
            placeholder="Search"
            className="w-full font-primary_font pl-5 pr-[4rem] py-2 bg-secondary_color text-[1.6rem] focus:outline-none text-white placeholder:text-white"
          />
          <CiSearch
            size={25}
            className="cursor-pointer text-white absolute top-[50%] translate-y-[-50%] right-4"
          />
        </div>
      </div>
      <div className="self-end relative">
        <select className="appearance-none w-full bg-transparent border border-primary_color px-5 py-4 focus:outline-none">
          <option value="Image & Videos">Image & Videos</option>
          <option value="Medicine">Medicine</option>
          <option value="Tablet">Tablet</option>
        </select>
        <RiArrowDropDownFill
          size={25}
          className="absolute top-[50%] translate-y-[-50%] right-4"
        />
      </div>
    </div>
  );
};

export default ReviewFilter;
