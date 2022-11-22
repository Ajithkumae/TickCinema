import React from "react";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Dashboard from "./Screens/Dashboard";

const App = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

export default App;
