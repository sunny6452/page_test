import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { EnhancedTable } from "../common/EnhancedTable";
import { BlueButton } from "../common/Collection";
import ScheduleRbox from "./ScheduleRbox";

const SheduleSetting = () => {
  const useStyles = makeStyles({
    box: {
      height: 630,
    },
    lbox: {
      width: "673px",
      float: "left",
    },
    rbox: {
      width: "867px",
      float: "right",
      height: "100%",
      borderRadius: 10,
      overflowY: "scroll",
      backgroundColor: "#FFFFFF",
    },
  });
  const classes = useStyles();

  const scheduleColname = [
    { width: 130, name: "처리결과" },
    { width: 160, name: "실행날짜" },
    { width: 130, name: "처리자" },
  ];
  const scheduleRowname = [
    { name: "회사명1", fat: "Snow", carbs: "Jon", name2: "처리자1" },
    { name: "회사명2", fat: "Lannister", carbs: "Cersei", name2: "처리자1" },
    { name: "회사명3", fat: "Lannister", carbs: "Jaime", name2: "처리자1" },
    { name: "회사명4", fat: "Stark", carbs: "Arya", name2: "처리자5" },
    { name: "회사명5", fat: "Targaryen", carbs: "Daenerys", name2: "처리자4" },
    { name: "회사명6", fat: "Melisandre", carbs: "Daenerys", name2: "처리자2" },
    { name: "회사명7", fat: "Clifford", carbs: "Ferrara", name2: "처리자1" },
    { name: "회사명8", fat: "Frances", carbs: "Rossini", name2: "처리자2" },
    { name: "회사명9", fat: "Roxie", carbs: "Harvey", name2: "처리자3" },
    { name: "회사명4", fat: "Stark", carbs: "Arya", name2: "처리자4" },
    { name: "회사명5", fat: "Targaryen", carbs: "Daenerys", name2: "처리자5" },
    { name: "회사명6", fat: "Melisandre", carbs: "Daenerys", name2: "처리자6" },
    { name: "회사명7", fat: "Clifford", carbs: "Ferrara", name2: "처리자7" },
    { name: "회사명8", fat: "Frances", carbs: "Rossini", name2: "처리자8" },
    { name: "회사명9", fat: "Roxie", carbs: "Harvey", name2: "처리자9" },
  ];

  return (
    <div>
      <div style={{ height: "80px", lineHeight: "85px" }}>
        <b>연말정산 일정 설정</b>
        <BlueButton buttonName="일괄설정" />
      </div>
      <div className={classes.box}>
        <div className={classes.lbox}>
          <EnhancedTable
            rows={scheduleRowname}
            cols={scheduleColname}
            colsCount={1}
            containerWidth={"100%"}
          />
        </div>
        <div className={classes.rbox}>
          <ScheduleRbox />
        </div>
      </div>
    </div>
  );
};
export default SheduleSetting;
