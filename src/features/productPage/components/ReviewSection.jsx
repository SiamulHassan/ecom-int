import React from "react";
import ReviewHeading from "./ReviewHeading";
import ReviewFilter from "./ReviewFilter";
import Review from "../../../ui/Review";

const ReviewSection = () => {
  const handleReview = () => {};
  return (
    <div className="px-[1rem] border-t border-border_DCD pt-[4rem] mb-[5rem]">
      <div className="container">
        <div className="review_top mb-[6rem] grid grid-cols-1 sm:grid-cols-2 items-end gap-y-[3rem] sm:gap-y-0">
          <ReviewHeading handleReview={handleReview} />
          <ReviewFilter />
        </div>
        <Review />
      </div>
    </div>
  );
};

export default ReviewSection;
