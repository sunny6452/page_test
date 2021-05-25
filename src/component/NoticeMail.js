import * as React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BlueButton } from "../common/Collection";
import { EnhancedTable } from "../common/EnhancedTable";
import NoticeMailRbox from "./NoticeMailRbox";
const NoticeMail = () => {
  const useStyles = makeStyles({
    box: {
      height: 630,
    },
    lbox: {
      width: "863px",
      float: "left",
    },
    rbox: {
      width: "677px",
      whiteSpace: "nowrap",
      float: "right",
      height: "100%",
      borderRadius: 10,
      overflowY: "scroll",
      backgroundColor: "#FFFFFF",
    },
  });
  const classes = useStyles();

  const NoticeColname = [
    { width: 150, name: "처리결과" },
    { width: 80, name: "처리상태" },
    { width: 150, name: "등록날짜" },
    { width: 150, name: "완료날짜" },
    { width: 80, name: "처리자" },
  ];
  const NoticeRowname = [
    {
      name: "회사명1",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      name2: "처리자1",
      name4: "처리자1",
      name3: "test3",
    },
    {
      name: "회사명2",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Cersei",
      name2: "처리자1",
      name3: "test3",
    },
    {
      name: "회사명3",
      result: "오류[0]건/전체[103]건",
      status: "오류",
      carbs: "Jaime",
      name2: "처리자1",
      name3: "test3",
    },
    {
      name: "회사명4",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Arya",
      name2: "처리자5",
      name3: "test3",
    },
    {
      name: "회사명5",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Daenerys",
      name2: "처리자4",
      name3: "test3",
    },
    {
      name: "회사명6",
      result: "오류[0]건/전체[103]건",
      status: "오류",
      carbs: "Daenerys",
      name2: "처리자2",
      name3: "test3",
    },
    {
      name: "회사명7",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Ferrara",
      name2: "처리자1",
      name3: "test3",
    },
    {
      name: "회사명8",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Rossini",
      name2: "처리자2",
      name3: "test3",
    },
    {
      name: "회사명9",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Harvey",
      name2: "처리자3",
      name3: "test3",
    },
    {
      name: "회사명4",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Arya",
      name2: "처리자4",
      name3: "test3",
    },
    {
      name: "회사명5",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Daenerys",
      name2: "처리자5",
      name3: "test3",
    },
    {
      name: "회사명6",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Daenerys",
      name2: "처리자6",
      name3: "test3",
    },
    {
      name: "회사명7",
      result: "오류[0]건/전체[103]건",
      status: "오류",
      carbs: "Ferrara",
      name2: "처리자7",
      name3: "test3",
    },
    {
      name: "회사명8",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Rossini",
      name2: "처리자8",
      name3: "test3",
    },
    {
      name: "회사명9",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Harvey",
      name2: "처리자9",
      name3: "test3",
    },
  ];

  return (
    <div>
      <div style={{ height: "80px", lineHeight: "85px" }}>
        <b>연말정산 일정 발송</b>
        <BlueButton buttonName="일괄발송" />
      </div>
      <div className={classes.box}>
        <div className={classes.lbox}>
          <EnhancedTable
            rows={NoticeRowname}
            cols={NoticeColname}
            colsCount={1}
            containerWidth={"100%"}
          />
        </div>
        <div className={classes.rbox}>
          <NoticeMailRbox />
        </div>
      </div>
    </div>
  );
};
export default NoticeMail;
