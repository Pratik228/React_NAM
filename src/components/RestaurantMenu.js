import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchRestaurant();
  }, []);

  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const fetchRestaurant = async () => {
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json);
    setResInfo(
      json?.data
      //   json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards[1]?.card
    );
  };
  if (resInfo === null) return <Shimmer />;
  const restaurantInfo = resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};
  const { name, avgRating, cuisines, costForTwoMessage } = restaurantInfo || {};

  return (
    <div>
      <h1>{name}</h1>
      <p>{avgRating}</p>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <div>
        <FoodCards itemCards={itemCards} />
      </div>
    </div>
  );
};

const FoodCards = ({ itemCards }) => {
  //   const [cardDetails, setCardDetails] = useState([]);
  //   const cards = foodCards.map((cards) => itemCards[cards]);

  return (
    <div>
      {itemCards.map((item) => (
        <li key={item.card.info.id}>
          {item.card.info.name} - {item.card.info.price / 100} Rs
        </li>
      ))}
    </div>
  );
};

export default RestaurantMenu;
