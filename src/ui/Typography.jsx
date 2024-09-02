import React from "react";
import cnMerge from "../utils/CnMerge";

const variantsMapping = {
  h2: "font-primary_font font-bold text-[4rem]",
  h3: "font-primary_font font-semibold text-[3.2rem]",
  h4: "font-primary_font font-semibold text-[2.4rem]",

  p_normal_12: "font-primary_font font-normal text-[1.2rem]",
  p_normal_16: "font-primary_font font-normal text-[1.6rem]",
  p_bold_16: "font-primary_font font-bold text-[1.6rem]",

  span_normal_12: "font-primary_font font-normal text-[1.2rem]",
  span_normal_14: "font-primary_font font-normal text-[1.4rem]",
  span_normal_16: "font-primary_font font-normal text-[1.6rem]",
  span_normal_24: "font-primary_font font-normal text-[2.4rem]",
  span_bold_16: "font-primary_font font-bold text-[1.6rem]",
  span_semibold_20: "font-primary_font font-semibold text-[2rem]",
  span_bold_20: "font-primary_font font-bold text-[2rem]",
};

const htmlTagMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",

  p_normal_12: "p",
  p_normal_16: "p",
  p_bold_16: "p",

  span_normal_12: "span",
  span_normal_14: "span",
  span_normal_16: "span",
  span_normal_24: "span",
  span_bold_16: "span",
  span_semibold_20: "span",
  span_bold_20: "span",
};
const Typography = ({
  variant = "span",
  color,
  className,
  children,
  ...props
}) => {
  const classes = cnMerge(
    variantsMapping[variant] || variantsMapping.body1, // Default to body1 if variant not found
    color || "text-black",
    className || ""
  );

  const HTMLElement = htmlTagMapping[variant] || "span";

  return (
    <HTMLElement className={classes} {...props}>
      {children}
    </HTMLElement>
  );
};

export default Typography;
