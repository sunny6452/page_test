import React from "react";
import styled from "styled-components";
import MainMenu from "../component/MainMenu";

const StyledMenu = styled.div`
  position: absolute;
  width: 300px;
  height: 810px;
  margin-left: 20px;
  margin-top: 30px;
  background-color: #fff;
  border-radius: 10px;
`;

const MenuView = () => {
  return (
    <StyledMenu>
      <MainMenu />
    </StyledMenu>
  );
};

export default MenuView;
