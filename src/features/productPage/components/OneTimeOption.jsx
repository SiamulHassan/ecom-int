import React from "react";
import Typography from "../../../ui/Typography";

const OneTimeOption = ({ selected, setSelected }) => {
  return (
    <div className="w-full flex gap-2 items-start border-t border-border_DCD py-[1rem]">
      <input
        type="radio"
        id="onetime"
        name="subscriptionOption"
        className="hidden"
        checked={selected === "onetime"}
        onChange={() => setSelected("onetime")}
      />
      <span
        className={`inline-block ml-[0.6rem] mt-[1rem] w-[1.2rem] h-[1.2rem] rounded-full ${
          selected === "onetime" ? "bg-secondary_color" : "bg-bg_D9D"
        }`}
      ></span>
      <label
        htmlFor="onetime"
        className={`flex items-center justify-between gap-3 cursor-pointer px-[1rem] py-[0.5rem] flex-grow`}
      >
        <span className="w-[70%] flex flex-col gap-1">
          <Typography
            variant="span_normal_14"
            color={`${
              selected !== "onetime" ? "text-color_D9D" : "text-secondary_color"
            } `}
          >
            One-Time Purchase
          </Typography>
          <Typography
            variant="span_normal_14"
            color={`${
              selected !== "onetime" ? "text-color_D9D" : "text-secondary_color"
            } `}
          >
            Single purchase with no commitment
          </Typography>
        </span>
        <Typography className="flex items-center gap-2">
          <Typography
            variant="span_normal_24"
            color={`${
              selected !== "onetime" ? "text-color_D9D" : "text-secondary_color"
            } `}
          >
            BDT
          </Typography>
          <Typography
            variant="span_normal_16"
            color={`${
              selected !== "onetime" ? "text-color_D9D" : "text-secondary_color"
            } `}
          >
            200
          </Typography>
        </Typography>
      </label>
    </div>
  );
};

export default OneTimeOption;
