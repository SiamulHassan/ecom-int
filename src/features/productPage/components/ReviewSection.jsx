import React from "react";
import ReviewHeading from "./ReviewHeading";
import ReviewFilter from "./ReviewFilter";
import Review from "../../../ui/Review";

const ReviewSection = () => {
  const handleReview = () => {};
  return (
    <div className="border-t border-border_DCD pt-[4rem] mb-[8rem]">
      <div className="container">
        <div className="review_top mb-[6rem] grid grid-cols-2 items-end">
          <ReviewHeading handleReview={handleReview} />
          <ReviewFilter />
        </div>
        <Review />
      </div>
    </div>
  );
};

export default ReviewSection;
