import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import React, { useEffect, useState } from "react";

const Login = () => {
  const useStyles = makeStyles((theme) => ({
    loginTitle: {
      position: "absolute",
      marginTop: "55px",
      marginLeft: "-130px",
      fontWeight: "bold",
      fontSize: "18px",
      lineHeight: "26px",
      letterSpacing: "-0.01em",
    },
    checkedTitle: {
      fontSize: "14px",
      lineHeight: "26px",
      color: "#666666",
    },
    id: {
      overflow: "hidden",
      borderRadius: 10,
      opacity: 0.7,
      width: 270,
      height: 45,
      marginTop: 100,
      "& label": {
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: "20px",
        marginTop: -4,
      },
    },
    pass: {
      overflow: "hidden",
      borderRadius: 10,
      opacity: 0.7,
      width: 270,
      height: 45,
      marginTop: 10,
      "& label": {
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: "20px",
        marginTop: -4,
      },
    },
    searchButton: {
      "&.MuiButton-root:hover": {
        background: "#3474E4",
        fontWeight: "bold",
      },
      width: 270,
      height: 45,
      background: "#3474E4",
      borderRadius: 10,
      marginTop: 10,
      //fontWeight: "bold",
      fontSize: 16,
      //lineHeight: 23,
    },
    loginChecked: {
      marginLeft: -125,
    },
  }));

  const classes = useStyles();
  const [isRemember, setIsRemember] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("isRemember")) {
      setIsRemember(true);
      setId(localStorage.getItem("id"));
      setPassword(localStorage.getItem("pass"));
    }
    console.log("isRemember", isRemember);
  }, []);

  const lcst = (key, value, isClear) => {
    console.log("key", key);
    console.log("value", value);
    console.log("isClear", isClear);

    localStorage.setItem(key, value);
    if (isClear) localStorage.clear();
  };
  return (
    <>
      <article className="Section loginSection">
        <span className={classes.loginTitle}>HTMS 계정 정보</span>
        <div //className="id"
        >
          <TextField
            label="아이디"
            variant="filled"
            size="small"
            className={classes.id}
            onChange={(e) => {
              setId(e.target.value);
              lcst("id", e.target.value);
              //localstorage();
            }}
            value={id}
          />
        </div>
        <div //className="pass"
        >
          <TextField
            label="비밀번호"
            type="password"
            variant="filled"
            size="small"
            className={classes.pass}
            onChange={(e) => {
              setPassword(e.target.value);
              lcst("pass", e.target.value);
            }}
            value={password}
          />
        </div>
        <Checkbox
          defaultChecked
          size="small"
          className={classes.loginChecked}
          inputProps={{ "aria-label": "checkbox with small size" }}
          checked={isRemember}
          onChange={(e) => {
            setIsRemember(e.target.checked);
            console.log(e.target.checked);
            lcst("isRemember", e.target.checked);
            if (!e.target.checked) lcst("", "", true);
          }}
        />
        <span className={classes.checkedTitle}>아이디/비밀번호 저장</span>
        <br />
        <Button
          variant="contained"
          className={classes.searchButton}
          color="primary"
          TabIndicatorProps={{
            style: { background: "#1976D2" },
          }}
          disableElevation
        >
          조회하기
        </Button>
      </article>
    </>
  );
};

export default Login;
