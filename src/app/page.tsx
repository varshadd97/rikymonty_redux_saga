/** @format */

"use client";
import { Provider } from "react-redux";
import RickyMonty from "./RickyMonty";
import { configureStore } from "./store";

const store = configureStore();

const Home = () => {
  return (
    <Provider store={store}>
      <RickyMonty />
    </Provider>
  );
};

export default Home;
