import React from "react";
import Header from "../../Component/Header/Header";
import MoviesList from "../../Component/MoviesList/MoviesList";
import SliderImages from "../../Component/SliderImages/SliderImages";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Header />
      <SliderImages />
      <MoviesList/>
    </React.Fragment>
  );
};
export default Dashboard;
