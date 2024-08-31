import { useEffect, useState } from "react";
import { RESTAURANTS } from "../utils/constants";

const useRestaurantList = () => {
  const [resList, setUseResList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredListRes, setFilteredListRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS);
    const json = await data.json();

    console.log(json);
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setUseResList(restaurants);
    setFilteredListRes(restaurants);
  };

  const filterBySearch = () => {
    const filteredRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListRes(filteredRes);
  };

  const filterByRating = () => {
    const filteredList = resList.filter((res) => res.info.avgRating > 4);
    setFilteredListRes(filteredList);
  };
  return {
    resList,
    filteredListRes,
    searchText,
    setSearchText,
    filterBySearch,
    filterByRating,
  };
};

export default useRestaurantList;
