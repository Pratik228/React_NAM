import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resList }) => {
  const { loggedInUser } = useContext(UserContext);
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resList.info;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:bg-slate-100">
      <img
        className="w-full h-48 object-cover"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <h4 className="text-gray-500 mb-2">{cuisines.join(", ")}</h4>
        <div className="flex items-center justify-between">
          <h4 className="text-gray-700">
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm mr-2">
              {avgRating} stars
            </span>
          </h4>
          <h4 className="text-gray-700">{costForTwo}</h4>
        </div>
        <h4>User {loggedInUser}</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
