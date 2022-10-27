import React from 'react'
import SearchBar from '../../components/Home/SearchBar'
import FilterPanel from '../../components/Home/FilterPanel'
import List from '../../components/Home/List'


const Home = () => {
  return (
    <div>
        <SearchBar />
        <FilterPanel />
        <List />
    </div>
  )
}

export default Home