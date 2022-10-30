import React, { useEffect, useState } from "react";
import EmptyView from "../../components/common/EmptyView";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import { dataList } from "../../constants";
import "./styles.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("house");
  const [selectedLocation, setSelectedLocation] = useState("ny");
  const [selectedPrice, setSelectedPrice] = useState([100, 10000]);
  const [selectedDate, setSelectedDate] = useState(null);

  const [list, setList] = useState(dataList);
  const [resultsFound, setResultsFound] = useState(true);
  const [searchInput, setSearchInput] = useState("");

  const handleSelectCategory = (event, value) =>
    setSelectedCategory(event.target.value);

  const handleSelectLocation = (event, value) =>
    setSelectedLocation(event.target.value);

  const handleSelectDate = (event, value) => setSelectedDate(value);

  

  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const applyFilters = () => {
    let updatedList = dataList;

    

    // Category Filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Location Filter
    if (selectedLocation) {
      updatedList = updatedList.filter(
        (item) => item.location === selectedLocation
      );
    }

    // Date filter
    if (selectedDate) {
      updatedList = updatedList.filter((item) => {
        var d1 = new Date(item.date);
        var d2 = new Date(selectedDate);
        console.log(d1, d2);
        return d1.getTime() <= d2.getTime();
      });
    }

    // Search Filter
    if (searchInput) {
      updatedList = updatedList.filter(
        (item) =>
          item.title.toLowerCase().search(searchInput.toLowerCase().trim()) !==
          -1
      );
    }

    // Price Filter
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updatedList = updatedList.filter(
      (item) => item.price >= minPrice && item.price <= maxPrice
    );

    setList(updatedList);

    !updatedList.length ? setResultsFound(false) : setResultsFound(true);
  };

  useEffect(() => {
    applyFilters();
  }, [
    selectedCategory,
    searchInput,
    selectedPrice,
    selectedLocation,
    selectedDate,
  ]);

  return (
    <div className="home">
      {/* Search Bar */}
      <SearchBar
        value={searchInput}
        changeInput={(e) => setSearchInput(e.target.value)}
      />
      <div className="home_panelList-wrap">
        {/* Filter Panel */}
        <div className="home_panel-wrap">
          <FilterPanel
            selectedCategory={selectedCategory}
            selectCategory={handleSelectCategory}
            selectedLocation={selectedLocation}
            selectLocation={handleSelectLocation}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            selectedDate={selectedDate}
            selectDate={handleSelectDate}
          />
        </div>
        {/* List & Empty View */}
        <div className="home_list-wrap">
          {resultsFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};

export default Home;
