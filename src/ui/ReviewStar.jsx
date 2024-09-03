import React from "react";
import Star from "../assets/icons/Star";

const ReviewStar = () => {
  return (
    <div className="star flex gap-3">
      {Array.from({ length: 5 }, (_, i) => (
        <div key={i}>
          <Star />
        </div>
      ))}
    </div>
  );
};

export default ReviewStar;
