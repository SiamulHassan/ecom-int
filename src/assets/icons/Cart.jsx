import React from "react";

const Cart = ({ className, onclick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={18}
      viewBox="0 0 17 18"
      fill="none"
      className={className}
      onClick={onclick}
    >
      <path
        d="M7 17.5C7.82843 17.5 8.5 16.8284 8.5 16C8.5 15.1716 7.82843 14.5 7 14.5C6.17157 14.5 5.5 15.1716 5.5 16C5.5 16.8284 6.17157 17.5 7 17.5Z"
        stroke="#2B354F"
      />
      <path
        d="M14 17.5C14.8284 17.5 15.5 16.8284 15.5 16C15.5 15.1716 14.8284 14.5 14 14.5C13.1716 14.5 12.5 15.1716 12.5 16C12.5 16.8284 13.1716 17.5 14 17.5Z"
        stroke="#2B354F"
      />
      <path
        d="M0.5 1H2.5L6.004 12H14"
        stroke="#2B354F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.22405 9.5L3.30005 3.5H15.807C15.8863 3.4999 15.9645 3.51865 16.0351 3.5547C16.1057 3.59075 16.1667 3.64307 16.2131 3.70734C16.2595 3.77162 16.2899 3.846 16.3019 3.92435C16.3139 4.00271 16.3071 4.08279 16.282 4.158L14.615 9.158C14.5819 9.25752 14.5183 9.3441 14.4332 9.40548C14.3482 9.46685 14.2459 9.49992 14.141 9.5H5.22405Z"
        stroke="#2B354F"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Cart;
