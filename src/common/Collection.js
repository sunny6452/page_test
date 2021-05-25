import React from "react";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

const useStyles = makeStyles({
  formControl: {
    width: "150px",
    "& label": {
      fontWeight: "bold",
    },
  },
  search: {
    position: "absolute",
    margin: "spacing(1)",
    marginLeft: "30px",
    marginTop: "22px",
  },
  dateRight: {
    marginLeft: 20,
  },
  btn: {
    width: "auto",
    height: 30,
    border: "1px solid #007DFF",
    borderRadius: 5,
    color: "#007DFF",
    marginLeft: 20,
    cursor: "pointer",
  },
  maginLeft10: {
    marginLeft: 10,
  },
  backgroundWhite: {
    backgroundColor: "#ffff",
  },
});
const handleChange = (e, setSelectData) => {
  setSelectData(e.target.value);
};

export const BlueButton = (props) => {
  const classes = useStyles();

  var classNames = "";
  if (props.class === "white") classNames = classes.backgroundWhite;
  else if (props.class === "margin10") classNames = classes.maginLeft10;

  return (
    <button className={`${classNames} ${classes.btn}`}>
      {props.buttonName}
    </button>
  );
};

export const SelectBox = (props) => {
  const classes = useStyles();

  var classNames = "";
  if (props.class === "search") classNames = classes.search;

  return (
    <FormControl
      variant="outlined"
      className={`${classNames} ${classes.formControl}`}
    >
      <InputLabel>{props.label}</InputLabel>
      <Select
        native
        value={props.selectData}
        label={props.label}
        onChange={(e) => handleChange(e, props.setSelectData)}
      >
        {props.selectList.map((select, index) => (
          <option key={index} value={select}>
            {select}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export const Calendar = (props) => {
  const classes = useStyles();
  const handleDateChange = (date) => {
    props.setSelectData(date);
  };

  var classNames = "";
  if (props.class === "dateRight") classNames = classes.dateRight;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="yyyy-MM-dd"
        margin="normal"
        className={classNames}
        label={props.label}
        value={props.selectData}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
};

//export default SelectBox;
