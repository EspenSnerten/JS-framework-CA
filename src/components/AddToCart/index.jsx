import React from "react";
import useStore from "../../state/store";

const AddToCartButton = ({ product }) => {
  const addToCart = useStore((state) => state.addToCart);

  const handleClick = () => {
    if (product) {
      addToCart(product);
    } else {
      console.error("Invalid product data");
    }
  };

  return (
    <button
      className="btn btn-active btn-accent"
      onClick={handleClick}
      aria-label="Add to Cart"
    >
      Add to Cart
    </button>
  );
};

export default AddToCartButton;
