import create from "zustand";

const useStore = create((set) => {
  const initialCart = JSON.parse(sessionStorage.getItem("cart") || "[]");
  const initialTotalPrice = parseFloat(
    sessionStorage.getItem("totalPrice") || "0"
  );

  return {
    cart: initialCart,
    totalPrice: initialTotalPrice,

    addToCart: (product) => {
      set((state) => {
        const newTotalPrice =
          state.totalPrice + (product.discountedPrice || product.price);
        sessionStorage.setItem(
          "cart",
          JSON.stringify([...state.cart, product])
        );
        sessionStorage.setItem("totalPrice", newTotalPrice.toString());
        return { cart: [...state.cart, product], totalPrice: newTotalPrice };
      });
    },

    removeFromCart: (productId) => {
      set((state) => {
        const itemToRemove = state.cart.find((item) => item.id === productId);
        if (!itemToRemove) return state; // If item not found, return current state
        const updatedTotalPrice =
          state.totalPrice -
          (itemToRemove.discountedPrice || itemToRemove.price);
        const updatedCart = state.cart.filter((item) => item.id !== productId);
        sessionStorage.setItem("cart", JSON.stringify(updatedCart));
        sessionStorage.setItem("totalPrice", updatedTotalPrice.toString());
        return { cart: updatedCart, totalPrice: updatedTotalPrice };
      });
    },

    getTotalPrice: () => {
      return useStore.getState().totalPrice.toFixed(2);
    },
  };
});

export default useStore;
