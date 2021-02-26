import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const SearchList = () => {
  const useStyles = makeStyles((theme) => ({
    searchCompany: {
      marginTop: 55,
      width: 480,
      height: "70px",
      "& label": {
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: "20px",
        marginTop: 7,
      },
      "& input": {
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.01em",
        color: "#263238",
        display: "flex",
      },
      "& .MuiOutlinedInput-root": {
        height: "56px",
      },
    },
    searchIcon: {
      color: "red",
    },
    searchIcon2: {
      color: "#CCCCCC",
    },
    searchList: {
      width: 480,
      marginLeft: 50,
      "&:hover": {
        background: "#EDF7FF;",
      },
    },
    searchCPList: {
      color: "#333333",
      lineHeight: 20,
      letterSpacing: -0.01,
      "& span": {
        fontSize: "14px",
      },
    },
  }));

  const classes = useStyles();
  return (
    <>
      <article className="Section searchSection">
        <div>
          <TextField
            id="outlined-basic"
            label="회사검색"
            variant="outlined"
            size="small"
            className={classes.searchCompany}
          />
          <br />

          <ListItem button className={classes.searchList}>
            <ListItemIcon>
              <FavoriteIcon className={classes.searchIcon} />
            </ListItemIcon>
            <ListItemText
              className={classes.searchCPList}
              primary="(주)월급날 -jan"
            />
          </ListItem>
          <ListItem button className={classes.searchList}>
            <ListItemIcon>
              <FavoriteBorderIcon className={classes.searchIcon2} />
            </ListItemIcon>
            <ListItemText
              className={classes.searchCPList}
              primary="(주)넥슨코리아(NK) - mint"
            />
          </ListItem>
        </div>
      </article>
    </>
  );
};

export default SearchList;
