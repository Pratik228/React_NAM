import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resLists, setUseResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListRes, setFilteredListRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setUseResList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
    setFilteredListRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || []
    );
  };

  return resLists.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRes = resLists.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredListRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resLists.filter(
              (res) => res.info.avgRating > 4
            );
            setUseResList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restraunt-container">
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
