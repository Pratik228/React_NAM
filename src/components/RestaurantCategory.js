import FoodCards from "./FoodCards";
const RestaurantCategory = ({ data, collapse, handleCategoryClick }) => {
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleCategoryClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <button>⬇</button>
        </div>
        {collapse && <FoodCards items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
