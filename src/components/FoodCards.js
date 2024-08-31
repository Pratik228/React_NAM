import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const FoodCards = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-2 text-left flex justify-between"
        >
          <div>
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <br></br>
              <span>₹{item.card.info.price / 100} </span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="ml-4">
            <div className="absolute">
              <button
                onClick={() => handleAddItem(item)}
                className="p-2 bg-white shadow-lg absolute m-auto rounded-lg font-bold text-green-600"
              >
                ADD⁺
              </button>
            </div>
            <img
              className="w-40 h-40 object-cover rounded"
              alt="food-image"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodCards;
