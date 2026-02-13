import React, { useState } from "react";
import Header from "../../components/Navbar/header/Header";
import ExploreMenu from "../../components/exploreMenu/ExploreMenu";
import FoodDisplay from "../../components/foodDisplay/FoodDisplay";
import AppDownLoad from "../../components/appDownload/AppDownLoad";

const Home = () => {

    const [category , setCategory] = useState('All');

  return (
    <div>
      <Header />
      <ExploreMenu  category={category} setCategory={setCategory} />
      <FoodDisplay category={category}/>
      <AppDownLoad />
    </div>
  );
};

export default Home;
