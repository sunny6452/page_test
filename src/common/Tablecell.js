import React from "react";
import TableCell from "@material-ui/core/TableCell";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  headerCell: {
    backgroundColor: "#FFFF",
    borderRight: "1px solid #E5E5E5;",
    fontSize: "12px",
    textAlign: "center",
    fontWeight: "bold",
    height: "44px",
    color: "#000000",
  },
  firstHeaderCell: {
    width: "190px",
    textAlign: "left",
    paddingLeft: "16px",
  },
  bodyCell: {
    textAlign: "center",
    fontSize: "12px",
    height: "46px",
    color: "#000000",
  },
});

export const HeaderCell = (props) => {
  const classes = useStyles();
  var classNames = "";
  if (props.firstheader === "true") classNames = classes.firstHeaderCell;
  return (
    <TableCell className={`${classes.headerCell} ${classNames}`} {...props} />
  );
};

export const BodyCell = (props) => {
  const classes = useStyles();
  return (
    <>
      <TableCell className={classes.bodyCell} {...props} />
    </>
  );
};
