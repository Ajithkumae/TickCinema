import React from "react";
import { Provider } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { screenName } from "./Constant/NavigationName";
import { store } from "./Redux/store";
import Dashboard from "./Screens/Dashboard/Dashboard";
import MovieDetails from "./Screens/MovieDetails/MovieDetails";

const App = () => {
  return (
    <Provider store={store}>
      <Routes>
        <Route path={screenName.dashboard} element={<Dashboard />} />
        <Route path={screenName.movieDetails} element={<MovieDetails />} />

      </Routes>
    </Provider>
  );
};

export default App;
