import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const {
    resList,
    filteredListRes,
    searchText,
    setSearchText,
    filterBySearch,
    filterByRating,
  } = useRestaurantList();

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>Oops!! seems Like we Lost the connection!! </h1>;

  return resList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center justify-center space-x-4 my-4">
        <div className="search flex items-center space-x-2">
          <input
            type="text"
            className="border py-1 px-1 border-gray-500 shadow-md rounded-full"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <div className="search m-4 p-4">
            <button
              className="bg-orange-400 hover:bg-orange-300 text-white font-bold py-2 px-3 rounded-full"
              onClick={filterBySearch}
            >
              Search
            </button>
          </div>
          <button
            className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-2 rounded-full"
            onClick={filterByRating}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="restraunt-container grid grid-cols-1 sm:grid-cols-2 md-grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredListRes.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resList={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
