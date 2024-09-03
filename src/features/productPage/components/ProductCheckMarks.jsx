import React from "react";
import Typography from "../../../ui/Typography";
import { productCheckMarks } from "../../../fake_api/productMarker";

const ProductCheckMarks = () => {
  return (
    <div className="grid grid-cols-3 gap-y-[4rem] sm:gap-y-0 sm:grid-cols-5 items-center gap-x-4">
      {productCheckMarks.map((marks, i) => (
        <div className="wrapper flex flex-col items-center px-12" key={i}>
          <marks.icon />
          <Typography variant="span_normal_14" className="text-center">
            {marks.mark}
          </Typography>
        </div>
      ))}
    </div>
  );
};

export default ProductCheckMarks;
