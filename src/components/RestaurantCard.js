const RestaurantCard = ({ resList }) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resList.info;
  return (
    <div className="cards" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img
        className="card-logo"
        alt="res-logo"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;