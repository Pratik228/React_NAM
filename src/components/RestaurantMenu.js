import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const handleCategoryClick = (index) => {
    setShowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  if (resInfo === null) return <Shimmer />;
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const { name, avgRating, cuisines, costForTwoMessage } = restaurantInfo || {};

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold text-center my-5 text-2xl">{name}</h1>
      <p className="font-bold text-wrap">
        Rating {avgRating}-{costForTwoMessage}
      </p>
      <p className="font-bold text-sm text-orange-500 underline">
        {cuisines.join(", ")}
      </p>
      <div>
        {categories.map((category, index) => (
          //controlled component
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            collapse={index === showIndex ? true : false}
            handleCategoryClick={() => handleCategoryClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
