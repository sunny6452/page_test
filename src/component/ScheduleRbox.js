import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { time } from "../common/globalFunction";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import { Calendar, SelectBox } from "../common/Collection";
const ScheduleRbox = () => {
  const useStyles = makeStyles({
    table: {
      paddingLeft: "20px",
      paddingTop: "20px",
      paddingRight: "30px",
      borderSpacing: "0px 10px",
    },
    tablerow: {
      display: "table-row",
      height: "70px",
    },
    tleft: {
      display: "table-cell",
      width: "207px",
      verticalAlign: "middle",
      paddingLeft: "30px",
    },
    calendarStyle: {
      paddingTop: "23px",
      verticalAlign: "baseline",
    },
    tright: {
      display: "table-cell",
      verticalAlign: "middle",
      width: "600px",
    },
    flowspan: {
      fontSize: 16,
      position: "relative",
      top: "30px",
      marginLeft: "20px",
    },
    background: {
      backgroundColor: "#f5f5f5",
      borderRadius: "10px",
      height: "244px",
      paddingLeft: "30px",
    },
    input: {
      width: 420,
      marginTop: 3,
      marginLeft: "25px",
      borderRadius: "5.33333px 5.33333px 0px 0px",
      "& .MuiFilledInput-root": { backgroundColor: "#f5f5f5", height: 48 },
    },
  });
  const classes = useStyles();
  const [value, setValue] = useState("female");
  const [scheduleYy, setScheduleYy] = useState("");
  const [insaDate, setInsaDate] = useState(time());
  const [employeeDate, setEmployeeDate] = useState(time());
  const [writeStart, setWriteStart] = useState(time());
  const [writeEnd, setWriteEnd] = useState(time());
  const [firstRevisionStart, setFirstRevisionStart] = useState(time());
  const [firstRevisionEnd, setFirstRevisionEnd] = useState(time());
  const [firstConfirmStart, setFirstConfirmStart] = useState(time());
  const [firstConfirmEnd, setFirstConfirmEnd] = useState(time());
  const [firstResultStart, setFirstResultStart] = useState(time());
  const [firstResultEnd, setFirstResultEnd] = useState(time());
  const [secondRevisionStart, setSecondRevisionStart] = useState(time());
  const [secondRevisionEnd, setSecondRevisionEnd] = useState(time());
  const [secondConfirmStart, setSecondConfirmStart] = useState(time());
  const [secondConfirmEnd, setSecondConfirmEnd] = useState(time());
  const [secondResultStart, setSecondResultStart] = useState(time());
  const [secondResultEnd, setSecondResultEnd] = useState(time());

  const selectYYList = [2021, 2020, 2019, 2018];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={classes.table}>
      <div className={classes.tablerow}>
        <div className={classes.tleft}>거래처구분</div>
        <div
          className={classes.tright}
          style={{
            backgroundColor: "#f5f5f5",
            paddingLeft: "30px",
            borderRadius: "10px",
          }}
        >
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
                label="급여대행거래처"
              />
              <FormControlLabel
                value="male"
                control={<Radio color="primary" />}
                label="연말정산거래처"
              />
            </RadioGroup>
          </FormControl>
        </div>
      </div>
      <div className={classes.tablerow}>
        <div className={classes.tleft}>년도 및 일정명</div>
        <div className={classes.tright}>
          <SelectBox
            label="년도"
            selectList={selectYYList}
            setSelectData={setScheduleYy}
            selectData={scheduleYy}
          />

          <TextField
            label="일정명 입력"
            variant="filled"
            className={classes.input}
          />
        </div>
      </div>
      <div className={classes.tablerow}>
        <div className={classes.tleft}>안내자료 전달일</div>
        <div className={classes.tright}>
          <Calendar
            label="인사팀 안내자료 전달일"
            selectData={insaDate}
            setSelectData={setInsaDate}
          />
          <Calendar
            label="임직원 안내자료 전달일"
            selectData={employeeDate}
            setSelectData={setEmployeeDate}
            class="dateRight"
          />
        </div>
      </div>
      <div className={classes.tablerow}>
        <div className={classes.tleft}>작성상담 일정</div>
        <div className={classes.tright}>
          <Calendar
            label="작성상담 일정"
            selectData={writeStart}
            setSelectData={setWriteStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="작성상담 일정"
            selectData={writeEnd}
            setSelectData={setWriteEnd}
            class="dateRight"
          />
        </div>
      </div>
      <div className={classes.tablerow}>
        <div className={`${classes.tleft} ${classes.calendarStyle}`}>
          1차 일정
        </div>
        <div className={`${classes.tright} ${classes.background}`}>
          <Calendar
            label="1차 서류접수 수정일"
            selectData={firstRevisionStart}
            setSelectData={setFirstRevisionStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="1차 서류접수 수정일"
            selectData={firstRevisionEnd}
            setSelectData={setFirstRevisionEnd}
            class="dateRight"
          />
          <Calendar
            label="1차 검토 일정"
            selectData={firstConfirmStart}
            setSelectData={setFirstConfirmStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="1차 검토 일정"
            selectData={firstConfirmEnd}
            setSelectData={setFirstConfirmEnd}
            class="dateRight"
          />
          <Calendar
            label="1차 결과상담 일정"
            selectData={firstResultStart}
            setSelectData={setFirstResultStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="1차 결과상담 일정"
            selectData={firstResultEnd}
            setSelectData={setFirstResultEnd}
            class="dateRight"
          />
        </div>
      </div>
      <div className={classes.tablerow}>
        <div className={`${classes.tleft} ${classes.calendarStyle}`}>
          2차 일정
        </div>
        <div className={`${classes.tright} ${classes.background}`}>
          <Calendar
            label="2차 서류접수 수정일"
            selectData={secondRevisionStart}
            setSelectData={setSecondRevisionStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="2차 서류접수 수정일"
            selectData={secondRevisionEnd}
            setSelectData={setSecondRevisionEnd}
            class="dateRight"
          />
          <Calendar
            label="2차 검토 일정"
            selectData={secondConfirmStart}
            setSelectData={setSecondConfirmStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="2차 검토 일정"
            selectData={secondConfirmEnd}
            setSelectData={setSecondConfirmEnd}
            class="dateRight"
          />
          <Calendar
            label="2차 결과상담 일정"
            selectData={secondResultStart}
            setSelectData={setSecondResultStart}
          />
          <span className={classes.flowspan}>~</span>
          <Calendar
            label="2차 결과상담 일정"
            selectData={secondResultEnd}
            setSelectData={setSecondResultEnd}
            class="dateRight"
          />
        </div>
      </div>
    </div>
  );
};

export default ScheduleRbox;
