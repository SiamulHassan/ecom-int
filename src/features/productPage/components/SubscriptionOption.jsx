import React from "react";
import Typography from "../../../ui/Typography";

const SubscriptionOption = ({ selected, setSelected }) => {
  return (
    <div className="w-full flex gap-2 items-start py-[1rem]">
      <input
        type="radio"
        id="subscription"
        name="subscriptionOption"
        className="hidden"
        checked={selected === "subscription"}
        onChange={() => setSelected("subscription")}
      />
      <span
        className={`inline-block ml-[0.6rem] mt-[1rem] w-[1.2rem] h-[1.2rem] rounded-full ${
          selected === "subscription" ? "bg-secondary_color" : "bg-bg_D9D"
        }`}
      ></span>
      <label
        htmlFor="subscription"
        className={`flex items-center justify-between gap-3 cursor-pointer px-[1rem] py-[0.5rem] flex-grow`}
      >
        <Typography className="w-[70%] flex flex-col gap-1">
          <Typography
            variant="span_normal_14"
            color={`${
              selected !== "subscription"
                ? "text-color_D9D"
                : "text-secondary_color"
            } `}
          >
            Subscribe & Save 10%
          </Typography>
          <Typography
            variant="span_normal_14"
            color={`${
              selected !== "subscription"
                ? "text-color_D9D"
                : "text-secondary_color"
            } `}
          >
            FREE SHIPPING + Cancel anytime
          </Typography>
          <Typography
            variant="span_normal_14"
            className="underline underline-offset-[0.6rem]"
            color={`${
              selected !== "subscription"
                ? "text-color_D9D"
                : "text-secondary_color"
            } `}
          >
            YOUR SUBSCRIPTION PERKS +
          </Typography>
        </Typography>
        <Typography className="flex items-center gap-2">
          <Typography
            variant="span_normal_24"
            color={`${
              selected !== "subscription"
                ? "text-color_D9D"
                : "text-secondary_color"
            } `}
          >
            BDT
          </Typography>
          <Typography
            variant="span_normal_16"
            color={`${
              selected !== "subscription"
                ? "text-color_D9D"
                : "text-secondary_color"
            } `}
          >
            800
          </Typography>
        </Typography>
      </label>
    </div>
  );
};

export default SubscriptionOption;
