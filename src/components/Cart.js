import { useSelector, useDispatch } from "react-redux";
import FoodCards from "./FoodCards";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  //   const cartItems = useSelector((store) => store.cart.items);

  const store = useSelector((store) => store);

  const cartItems = store.cart.items;

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl font-bold text-orange-600">Cart Items</h1>
      <div className="flex justify-center">
        <div className="w-6/12 p-4 m-4 my-4">
          <FoodCards items={cartItems} />
        </div>
      </div>
      {cartItems.length === 0 ? (
        ""
      ) : (
        <button
          onClick={handleClearCart}
          className="p-2 m-2 border border-x-4 rounded-full bg-orange-500"
        >
          Clear Items
        </button>
      )}

      {cartItems.length === 0 && <h1>Cart is empty add any item</h1>}
    </div>
  );
};

export default Cart;
