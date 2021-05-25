import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import {
  EventAvailable,
  HourglassFull,
  HourglassEmpty,
  Mail,
  AssignmentInd,
} from "@material-ui/icons";
import { withRouter } from "react-router";

const MainMenu = ({ history }) => {
  const useStyles = makeStyles({
    ul: {
      paddingTop: 20,
      cursor: "pointer",
      "& li": {
        "&:hover": {
          color: "#1976D2",
        },
        color: "#666666",
        height: 48,
        listStyle: "none",
        "& span": {
          verticalAlign: "top",
          paddingLeft: 20,
        },
      },
    },
  });
  const classes = useStyles();

  var schedule = "#666666";
  var insaper = "#666666";
  var ready = "#666666";
  var yaprocess = "#666666";
  var noticeMail = "#666666";
  if (window.location.pathname === "/") schedule = "#1976D2";
  else if (window.location.pathname === "/insaper") insaper = "#1976D2";
  else if (window.location.pathname === "/ready") ready = "#1976D2";
  else if (window.location.pathname === "/yaprocess") yaprocess = "#1976D2";
  else if (window.location.pathname === "/mail") noticeMail = "#1976D2";

  return (
    <ul className={classes.ul}>
      <li
        style={{ color: schedule }}
        onClick={(e) => {
          history.push("/");
        }}
      >
        <EventAvailable />
        <span>연말정산 일정 설정</span>
      </li>
      <li
        style={{ color: insaper }}
        onClick={(e) => {
          history.push("/insaper");
        }}
      >
        <AssignmentInd />
        <span>인사정보 일괄</span>
      </li>
      <li
        style={{ color: ready }}
        onClick={(e) => {
          history.push("/ready");
        }}
      >
        <HourglassEmpty />
        <span>연말정산 준비 작업</span>
      </li>
      <li
        style={{ color: yaprocess }}
        onClick={(e) => {
          history.push("/yaprocess");
        }}
      >
        <HourglassFull />
        <span>연말정산 처리 작업</span>
      </li>
      <li
        style={{ color: noticeMail }}
        onClick={(e) => {
          history.push("/mail");
        }}
      >
        <Mail />
        <span>연말정산 공지 메일</span>
      </li>
    </ul>
  );
};
export default withRouter(MainMenu);
