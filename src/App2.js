import "./App.css";
import React, { useEffect, useState } from "react";
//import { useDispatch, useSelector } from 'react-redux';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import AppImg from "./logo.svg";
import { formatMs, ListItemAvatar } from "@material-ui/core";
import axios from "axios";
import Link from "@material-ui/core/Link";
//import logo from '';

function App() {
  const [isRemember, setIsRemember] = useState(false);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  //company 목록
  const [companyList, setCompanyList] = useState([]);
  const [serverName, setServerName] = useState(<Button></Button>);
  const [companyName, setCompanyName] = useState("");

  const [company, setCompany] = useState(<Link></Link>);
  var AllList = [];
  //Autocomplete 처리
  const defaultProps = {
    options: companyList,
    getOptionLabel: (option) => option.title,
  };

  useEffect(() => {
    //db에서 데이터 받아서 회사명 띄움
    axios.get("http://localhost:3000/data").then((response) => {
      console.log(response.data);
      //CompanyList에 서버명, 회사명 저장
      AllList = [...response.data];
      setCompanyList(AllList);
      //setCompanyList(response.data);
      //가져온 데이터 중 server 중복 값 제거
      const unique = response.data
        .map(function (val, index) {
          return val["server"];
        })
        .filter(function (val, index, arr) {
          return arr.indexOf(val) === index;
        });
      //중복제거 해서 만든 서버배열을 버튼에 출력함
      setServerName(
        unique.map((item) => {
          //console.log(item);
          return (
            <Button
              key={item}
              onClick={(e) => {
                //onClick(e, response.data);
                onClick(e);
              }}
              value={item}
              color="primary"
            >
              {item}
            </Button>
          );
        })
      );
    });
    //맨 처음 체크 되어있으면 체크박스에 체크
    if (localStorage.getItem("isRemember")) {
      setIsRemember(true);
      setId(localStorage.getItem("id"));
      setPassword(localStorage.getItem("pass"));
    }
  }, []);

  const onClick = (e) => {
    //console.log('클릭!', list);
    //console.log(e.currentTarget.value);
    var serverNames = e.currentTarget.value;
    setCompany(
      AllList.map((item) => {
        //클릭한 서버랑 가져온 서버가 같은 회사명 출력
        if (item.server == serverNames) {
          return (
            <Link href="#" color="inherit" key={item.title}>
              {item.title} - {item.server}
              <br />
            </Link>
          );
        }
      })
    );
  };

  const lcst = (key, value, isClear) => {
    localStorage.setItem(key, value);
    if (isClear) localStorage.clear();
  };

  const onSearch = (e) => {
    setCompany(
      companyList.map((item) => {
        //입력한 이름이랑 가져온 같은 회사명 출력
        if (companyName == item.title || companyName == item.server) {
          return (
            <Link href="#" color="inherit" key={item.title}>
              {item.title} - {item.server}
              <br />
            </Link>
          );
        }
      })
    );
  };

  return (
    <div>
      <div className="App">
        <img src={AppImg} className="AppImg" />
        <div className="AppTitle">
          <span className="mainTitle">월급날 통합 로그인</span>
          <br />
          등록된 아이디를 이용하여 자동으로 로그인 합니다.
        </div>
        <div className="id_area">
          <TextField
            id="standard-password-input"
            label="ID"
            type="text"
            autoComplete="current-password"
            //onChange={onChange}
            onChange={(e) => {
              setId(e.target.value);
              lcst("id", e.target.value);
              //localstorage();
            }}
            name="id"
            value={id}
            //value={getUser.id}
          />
        </div>
        <div className="pass_area">
          <TextField
            id="standard-password-input"
            label="password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => {
              setPassword(e.target.value);
              lcst("password", e.target.value);
            }}
            name="password"
            value={password}
            //value={getUser.password}
          />
        </div>
        <div className="idPass">
          <input
            type="checkbox"
            checked={isRemember}
            onChange={(e) => {
              setIsRemember(e.target.checked);
              console.log(e.target.checked);
              if (!e.target.checked) lcst("", "", true);
            }}
          />
          &nbsp; 아이디 패스워드 저장하기
        </div>
        <Button
          style={{ width: 200, marginTop: "10px" }}
          size="medium"
          variant="outlined"
          color="primary"
        >
          로그인
        </Button>
      </div>
      <div className="searchOpen">
        <span className="mainTitle">회사검색</span>
        <div>
          <Autocomplete
            {...defaultProps}
            style={{ float: "left", marginLeft: "120px", width: "400px" }}
            id="debug"
            debug
            renderInput={(params) => (
              <TextField
                {...params}
                label="회사명을 입력하세요"
                margin="normal"
                name="company"
                value={companyName}
                onChange={(e) => {
                  setCompanyName(e.target.value);
                }}
                onClick={(e) => {
                  console.log(e);
                }}
              />
            )}
          />
          <Button
            style={{ float: "left", marginTop: "35px", marginLeft: "20px" }}
            size="small"
            variant="outlined"
            color="primary"
            onClick={onSearch}
          >
            검색
          </Button>
        </div>
        <div className="serverName">{serverName}</div>
        <div>{company}</div>
      </div>
    </div>
  );
}

export default App;
