import product_small_1 from "../assets/images/product_small_1.png";
import product_small_2 from "../assets/images/product_small_2.png";
import product_small_3 from "../assets/images/product_small_3.png";
import product_small_4 from "../assets/images/product_small_4.png";
import product_large1 from "../assets/images/product_large_1.png";
export const productData = [
  {
    id: 1,
    image: product_small_4,
    smallImgs: [
      product_small_1,
      product_small_2,
      product_small_3,
      product_small_4,
    ],
    bigImgs: [
      product_large1,
      product_small_2,
      product_small_3,
      product_small_4,
    ],
    productName: "Liposomal Vitamin C",
    price: "4332.23",
    productDescription: [
      {
        description:
          "Liposomal Vitamin C is an advanced form of Vitamin C encapsulated within liposomes, which are tiny fat-like particles that enhance its absorption and bioavailability in the body.",
      },
      {
        description:
          "This delivery method allows for more efficient cellular uptake, ensuring that higher levels of Vitamin C reach the bloodstream and tissues.",
      },
      {
        description:
          "It provides potent antioxidant support, boosts the immune system, promotes collagen production, and enhances skin health. Liposomal Vitamin C is ideal for those seeking maximum benefits from their Vitamin C supplementation.",
      },
    ],
    size: ["100ml", "200ml", "500ml"],
    flavor: ["Orange", "Blue Berry", "Lime"],
  },
];
