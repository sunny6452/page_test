import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { SelectBox } from "../common/Collection";

const TopMenu = () => {
  const useStyles = makeStyles({
    menuc: {
      width: "1560px",
      height: "100px",
      backgroundColor: "#ffff",
      borderRadius: "10px",
      //display: "flex",
      justifyContent: "space-between",
    },
    textField: {
      position: "absolute",
      width: "180px",
      height: "48px",
      marginTop: "25px",
      borderRadius: "5.33333px 5.33333px 0px 0px",
      "& .MuiFilledInput-root": { backgroundColor: "#f5f5f5", height: 48 },
    },
    searchButton: {
      width: "105px",
      height: "48px",
      marginTop: "26px",
      marginLeft: "1110px",
      backgroundColor: "#1976D2",
      "&.MuiButton-root:hover": {
        background: "#1976D2",
        fontWeight: "bold",
      },
    },
  });

  const classes = useStyles();
  const [yy, setYy] = React.useState("");
  const [inout, setInout] = React.useState("");
  const [pp, setPp] = React.useState("");
  const [yastatus, setYastatus] = React.useState("");

  const selectYYList = [2021, 2020, 2019, 2018];
  const selectInoutList = ["전체", "내부", "외부"];
  const selectPpList = ["전체", "김성진", "한단비", "김선희", "유성욱"];
  const selectYastatusList = ["전체", "진행중", "완료"];

  return (
    <div className={classes.menuc}>
      <SelectBox
        label="귀속년"
        selectList={selectYYList}
        setSelectData={setYy}
        selectData={yy}
        class="search"
      />
      <div style={{ marginLeft: "170px" }}>
        <SelectBox
          label="내외부구분"
          selectList={selectInoutList}
          setSelectData={setInout}
          selectData={inout}
          class="search"
        />
      </div>
      <div style={{ marginLeft: "340px" }}>
        <SelectBox
          label="연말정산담당자"
          selectList={selectPpList}
          setSelectData={setPp}
          selectData={pp}
          class="search"
        />
      </div>
      <div style={{ marginLeft: "510px" }}>
        <SelectBox
          label="처리상태"
          selectList={selectYastatusList}
          setSelectData={setYastatus}
          selectData={yastatus}
          class="search"
        />
      </div>
      <TextField
        label="회사코드입력"
        variant="filled"
        className={classes.textField}
        style={{ marginLeft: "710px" }}
      />
      <TextField
        label="처리자입력"
        variant="filled"
        className={classes.textField}
        style={{ marginLeft: "910px" }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.searchButton}
      >
        검색하기
      </Button>
    </div>
  );
};
export default TopMenu;
