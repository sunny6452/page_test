import React from "react";
import { Route } from "react-router";
import styled from "styled-components";
import Search from "../component/Search";
import ScheduleSettion from "../component/ScheduleSetting";
import InsaPer from "../component/InsaPer";
import YAProcess from "../component/YAProcess";
import Ready from "../component/Ready";
import NoticeMail from "../component/NoticeMail";

const StyledSection = styled.div`
  position: absolute;
  height: 810px;
  margin-top: 30px;
  margin-left: 340px;
  width: 1560px;
  border-radius: 10px;
`;

const SectionView = () => {
  return (
    <StyledSection>
      <Search />
      <Route
        path={["/", "/schedule"]}
        component={ScheduleSettion}
        exact={true}
      />
      <Route path="/insaper" component={InsaPer} />
      <Route path="/ready" component={Ready} />
      <Route path="/yaprocess" component={YAProcess} />
      <Route path="/mail" component={NoticeMail} />
    </StyledSection>
  );
};

export default SectionView;
