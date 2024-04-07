import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutSuccess = () => {
  useEffect(() => {
    toast.success("Checkout successful!");
    const timeout = setTimeout(() => {
      window.location.href = "/";
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="flex flex-col">
      <div className="flex flex-col gap-4 p-4 mx-auto bg-stone-50 min-h-[300px] min-w-[360px] py-12">
        <ToastContainer />
        <h2>Checkout Successful!</h2>
        <p>You will be redirected to the home page shortly...</p>
      </div>
    </section>
  );
};

export default CheckoutSuccess;
