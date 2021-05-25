import React from "react";
import MenuView from "./MenuView";
import SectionView from "./SectionView";
import Header from "../component/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <div style={{ margin: "auto", width: "1920px" }}>
        <MenuView />
        <SectionView />
      </div>
    </div>
  );
};

export default Main;
