import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

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
