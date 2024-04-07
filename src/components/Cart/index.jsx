import React from "react";
import { Link } from "@tanstack/react-router"; 
import useStore from "../../state/store";

const ShoppingCart = () => {
  const cart = useStore((state) => state.cart);
  const getTotalPrice = useStore((state) => state.getTotalPrice);

  return (
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-9 h-9"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">{cart.length}</span>
        </div>
      </div>
      <div
        tabIndex={0}
        className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
      >
        <div className="card-body">
          <span className="text-lg font-bold">{cart.length} Items</span>
          <ul>
            {cart.map((item) => (
              <li className="text-white" key={item.id}>
                {item.title}
              </li>
            ))}
          </ul>
          <span className="text-info">Total: {getTotalPrice()},-</span>
          <div className="card-actions">
            {/* Conditionally render the Link component */}
            {cart.length > 0 && (
              <Link to="/checkout" className="btn btn-active btn-accent">
                Checkout
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
