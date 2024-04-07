import React from "react";
import { Link } from "@tanstack/react-router"; // Import Link component for navigation
import useStore from "../../state/store";

const Checkout = () => {
  const cart = useStore((state) => state.cart);
  const getTotalPrice = useStore((state) => state.getTotalPrice);
  const removeFromCart = useStore((state) => state.removeFromCart);
  const clearCart = useStore((state) => state.clearCart);

  const handleCheckout = () => {
    sessionStorage.removeItem("cart");
    sessionStorage.removeItem("totalPrice");
    clearCart();
  };

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-4 p-4 mx-auto bg-stone-50 min-h-[300px] min-w-[360px] py-12">
        <h2 className="font-semibold">Checkout</h2>
        <div>
          <h3>Items:</h3>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.title} - {item.discountedPrice || item.price},-
                <button
                  className="p-2 ml-2 font-bold"
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Total Price: ${getTotalPrice()}</h3>
        </div>
        <Link
          className="btn btn-active btn-accent"
          to="/checkoutsuccess"
          onClick={handleCheckout}
        >
          Checkout
        </Link>
      </div>
    </section>
  );
};

export default Checkout;
