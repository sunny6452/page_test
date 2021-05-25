import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import { BlueButton, SelectBox } from "../common/Collection";

const NoticeMailRbox = () => {
  const useStyles = makeStyles({
    rbox: {
      width: "677px",
      whiteSpace: "nowrap",
      float: "right",
      height: "100%",
      borderRadius: 10,
      overflowY: "scroll",
      backgroundColor: "#FFFFFF",
    },
    graybox: {
      display: "table-cell",
      verticalAlign: "middle",
      height: "70px",
      width: "617px",
      backgroundColor: "#F5F5F5",
      borderRadius: 10,
      paddingLeft: "30px",
    },
    smallgraybox: {
      backgroundColor: "#F5F5F5",
      borderRadius: 10,
      height: "56px",
      width: "450px",
      marginLeft: 10,
      lineHeight: "53px",
      paddingLeft: "12px",
      "& .MuiTypography-body1": {
        fontSize: "12px",
      },
    },
    textField: {
      width: 430,
      height: 48,
      marginLeft: "10px",
      borderRadius: "5.33333px 5.33333px 0px 0px",
      "& .MuiFilledInput-root": { backgroundColor: "#f5f5f5", height: 48 },
    },
  });
  const classes = useStyles();
  const [value, setValue] = React.useState("");
  const [type, setType] = React.useState("");
  const [sendType, setSendType] = React.useState("");
  const selectSendType = ["메일+SMS", "메일", "SMS"];
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const typeCheck = (event) => {
    setType(event.target.value);
  };
  return (
    <div style={{ padding: "20px 15px 20px 30px" }}>
      <p>근로자의 로그인 경로를 선택해주세요</p>
      <div className={classes.graybox}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={value}
            onChange={handleChange}
            style={{ display: "inline" }}
          >
            <FormControlLabel
              value="female"
              control={<Radio color="primary" />}
              label="Htms"
            />
            <FormControlLabel
              value="male"
              control={<Radio color="primary" />}
              label="Tax-Refund"
            />
          </RadioGroup>
        </FormControl>
      </div>
      <p>종류를 선택해주세요</p>
      <div className={classes.graybox} style={{ height: "124px" }}>
        <FormControl component="fieldset">
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={type}
            onChange={typeCheck}
            style={{ display: "inline" }}
          >
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              label="연말정산 근로자 시작 유도메일"
              style={{ width: "55%" }}
            />
            <FormControlLabel
              value="2"
              control={<Radio color="primary" />}
              label="연말정산 1차 마감 안내 메일"
              style={{ width: "45%" }}
            />
            <br />
            <FormControlLabel
              value="3"
              control={<Radio color="primary" />}
              label="연말정산 최종 마감 안내 메일"
              style={{ width: "55%" }}
            />
            <FormControlLabel
              value="4"
              control={<Radio color="primary" />}
              label="온라인 미접수자 안내(SMS)"
              style={{ width: "45%" }}
            />
          </RadioGroup>
        </FormControl>
      </div>
      <p>전달유형을 선택해주세요</p>
      <div style={{ display: "flex" }}>
        <SelectBox
          label="전달유형"
          selectList={selectSendType}
          setSelectData={setSendType}
          selectData={sendType}
        />
        <div className={classes.smallgraybox}>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" size="small" />}
            label="SMS 전송시 모바일 링크 포함"
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" size="small" />}
            label="메일 전송시 이미지 없이 텍스트만 전송"
          />
        </div>
      </div>
      <div style={{ display: "flex", marginTop: 31 }}>
        메일 제목을 입력해주세요
        <br />
        (미작성 시 기본 제목 발송)
        <TextField
          label="메일 제목 입력"
          variant="filled"
          className={classes.textField}
        />
      </div>
      <div style={{ display: "flex", marginTop: 22 }}>
        메일 내용을 입력해주세요
        <br />
        (미작성 시 기본 제목 발송)
        <TextField
          label="메일 내용 입력"
          variant="filled"
          className={classes.textField}
        />
      </div>
      <div style={{ display: "flex", marginTop: 22 }}>
        SMS내용을 입력해주세요
        <br />
        (미작성 시 기본 제목 발송)
        <TextField
          label="SMS 내용 입력"
          variant="filled"
          className={classes.textField}
        />
      </div>
      <br />
      <span>발신자 정보를 입력해주세요</span>
      <BlueButton class="white" buttonName="미리보기" />

      <div style={{ paddingTop: 10, display: "flex" }}>
        <TextField
          label="성명 입력"
          variant="filled"
          className={classes.textField}
          style={{ marginLeft: 0, width: 150 }}
        />
        <TextField
          label="이메일 입력"
          variant="filled"
          className={classes.textField}
          style={{ width: 200 }}
        />
        <TextField
          label="전화번호 입력"
          variant="filled"
          className={classes.textField}
          style={{ width: 200 }}
        />
      </div>
    </div>
  );
};

export default NoticeMailRbox;
