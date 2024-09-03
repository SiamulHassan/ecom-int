import React from "react";
import Typography from "../../../ui/Typography";

const ProductDescription = ({ description }) => {
  return (
    <>
      {description.map((pDescription, i) => (
        <Typography
          variant="p_normal_16"
          key={i}
          className="mb-[1.2rem] last:mb-0"
        >
          {pDescription.description}
        </Typography>
      ))}
    </>
  );
};

export default ProductDescription;
