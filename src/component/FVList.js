import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const FVList = () => {
  const useStyles = makeStyles((theme) => ({
    FVtap: {
      color: "#1976D2",
      fontWeight: "bold",
      fontSize: 14,
    },
    PrevTab: {
      color: "#1976D2",
      fontWeight: "bold",
      fontSize: 14,
    },
    FVList: {
      width: 320,
      marginLeft: 40,
      marginTop: -10,
      "&:hover": {
        background: "#EDF7FF;",
      },
    },
    FVIcon: {
      color: "red",
    },
  }));

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [FVList, setFVList] = useState(<ListItem></ListItem>);

  var FVOpen = <ListItem></ListItem>;
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    if (newValue === 1) {
      //최근기록
      console.log("최근기록");
      FVOpen = (
        <ListItem button className={classes.FVList}>
          <ListItemText
            className={classes.searchCPList}
            primary="(주)월급날 -jan"
          />
        </ListItem>
      );
    } else {
      //즐겨찾기
      console.log("즐겨찾기");
      FVOpen = (
        <ListItem button className={classes.FVList}>
          <ListItemIcon>
            <FavoriteIcon className={classes.FVIcon} />
          </ListItemIcon>
          <ListItemText
            className={classes.searchCPList}
            primary="(주)월급날 -jan"
          />
        </ListItem>
      );
    }

    fpList();
  };

  const fpList = () => {
    setFVList(FVOpen);
  };

  return (
    <>
      <article className="Section FVSection">
        <div>
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            TabIndicatorProps={{
              style: { background: "#1976D2" },
            }}
            style={{ marginTop: 20 }}
            className={classes.taps}
            centered
          >
            <Tab className={classes.FVtap} label="즐겨찾기" name="FV" />
            <Tab className={classes.PrevTab} name="prev" label="최근기록" />
          </Tabs>

          <br />
          {/* <ListItem button className={classes.FVList}>
    <ListItemIcon>
      <FavoriteIcon className={classes.FVIcon} />
    </ListItemIcon>
    <ListItemText
      className={classes.searchCPList}
      primary="(주)월급날 -jan"
    />
  </ListItem> */}
          {FVList}
        </div>
      </article>
    </>
  );
};

export default FVList;
