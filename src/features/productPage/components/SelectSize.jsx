import React, { useState } from "react";
import Typography from "../../../ui/Typography";

const SelectSize = ({ size }) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="flex gap-5">
      {size.map((productSize, i) => (
        <Typography
          variant="span_normal_16"
          className={`border border-secondary_color cursor-pointer px-[2rem] py-[0.8rem] ${
            selected === i ? "bg-secondary_color text-white" : ""
          }`}
          key={i}
          onClick={() => setSelected(i)}
        >
          {productSize}
        </Typography>
      ))}
    </div>
  );
};

export default SelectSize;
