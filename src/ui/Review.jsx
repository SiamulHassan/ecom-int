import React from "react";
import Typography from "./Typography";
import Avatar from "../assets/icons/Avatar";
import { reviewData } from "../fake_api/reviewData";
import ReviewStar from "./ReviewStar";
import Like from "../assets/icons/Like";
import Dislike from "../assets/icons/Dislike";

const Review = () => {
  return (
    <>
      {reviewData.map((review, i) => (
        <div
          key={i}
          className="grid grid-cols-1 sm:grid-cols-2 items-center border-b border-border_DCD gap-x-4 pb-[1.5rem] mb-[2rem] last:mb-0"
        >
          <div className="left_part">
            <div className="grid grid-cols-[4rem_12rem] items-center">
              <Typography className="w-[2.4rem] h-[2.4rem] bg-bg_D9D rounded-full flex justify-center items-center">
                <Avatar />
              </Typography>
              <Typography variant="span_bold_16" color="text-primary_color">
                {review.reviewer}
              </Typography>
            </div>
            <div className="grid grid-cols-[12rem_12rem] items-center gap-x-[1.6rem] py-[1rem] md:py-[0.6rem]">
              <ReviewStar />
              <Typography variant="span_normal_16" color="text-primary_color">
                {review.starStatus}
              </Typography>
            </div>
            <Typography variant="p_normal_16" color="text-primary_color">
              {review.reviewMessage}
            </Typography>
          </div>
          <div className="right_part justify-self-start sm:justify-self-end flex flex-row sm:flex-col gap-[4rem]">
            <Typography variant="span_bold_16" className="self-end">
              {review.date}
            </Typography>
            <div className="grid grid-cols-[1fr_0.3fr_0.3fr] items-center gap-x-2">
              <Typography variant="span_normal_16">
                Was this helpful ?
              </Typography>
              <Like className="cursor-pointer" />
              <Dislike className="cursor-pointer" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Review;
