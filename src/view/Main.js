import React, { useEffect, useState } from "react";
import ".././App.css";
import { makeStyles } from "@material-ui/core/styles";
import Header from "../component/Header";
import Login from "../component/Login";
import FVList from "../component/FVList";
import SearchList from "../component/SearchList";
const Main = () => {
  return (
    <div className="App">
      <Header />
      <section className="section">
        <Login />
        <FVList />
        <SearchList />
      </section>
    </div>
  );
};
export default Main;
