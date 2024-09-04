import React from "react";
import ReviewStar from "../../../ui/ReviewStar";
import ButtonPrimary from "../../../ui/ButtonPrimary";
import Typography from "../../../ui/Typography";
import ProductDescription from "./ProductDescription";
import SelectSize from "./SelectSize";
import SelectFlavor from "./SelectFlavor";
import AddToCartBtn from "../../../ui/AddToCartBtn";
import Subscription from "./Subscription";
import ProductCheckMarks from "./ProductCheckMarks";
import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from "../../../context/CartContext";

const ProductItemDetails = ({ productItemDetails }) => {
  const { addToCart } = useCartContext();
  const handleAddCart = (product) => {
    toast("Item added to cart");
    const { id, productName, price, image } = product;
    addToCart({ id, productName, price, image });
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex items-center gap-[1.6rem]">
        <ReviewStar />
        <ButtonPrimary link="/" hasLink>
          See all review
        </ButtonPrimary>
      </div>

      {productItemDetails.map((product, i) => (
        <div className="product_details_part" key={i}>
          <Typography variant="h2" colo="text-primary_color" className="italic">
            {product.productName}
          </Typography>
          <div className="price  flex items-center gap-4">
            <Typography variant="span_semibold_20" className="italic">
              BDT
            </Typography>
            <Typography variant="span_bold_24" className="italic">
              {product.price}
            </Typography>
          </div>
          <div className="description max-w-[47rem]">
            {product?.productDescription && (
              <ProductDescription description={product.productDescription} />
            )}
          </div>
          <div className="flex items-center gap-10 mt-[3rem] mb-[1.6rem]">
            <Typography variant="span_normal_16">Select Size</Typography>
            <SelectSize size={product.size} />
          </div>
          <div className="flex items-center gap-10">
            <Typography variant="span_normal_16">Select Flavor</Typography>
            <SelectFlavor flavor={product.flavor} />
          </div>
          <div className="btn my-[3rem]">
            <AddToCartBtn width="80%" onclick={() => handleAddCart(product)}>
              Add to Cart
            </AddToCartBtn>
          </div>
          <div className="pick">
            <div>
              <Typography variant="span_normal_16">
                Pickup available at our
              </Typography>
              <Typography variant="span_bold_16" className="italic">
                22 Bistro Place, Banani
              </Typography>
            </div>
            <Typography variant="span_normal_12" color="text-color_424">
              Usually ready In 2-4 days
            </Typography>
          </div>
          <div className="mt-[3rem] border border-border_DCD">
            <Subscription />
          </div>
          <div className="product_mark mt-[3rem]">
            <ProductCheckMarks />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductItemDetails;
