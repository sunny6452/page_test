import * as React from "react";
import { BlueButton } from "../common/Collection";
import { EnhancedTable } from "../common/EnhancedTable";

const InsaPer = () => {
  const insaperColsTitle = [
    "대상자 가져오기",
    "연말정산 정보갱신",
    "인사정보 동기화",
  ];
  const insaperColname = [
    { width: 150, name: "처리결과" },
    { width: 80, name: "처리상태" },
    { width: 150, name: "등록날짜" },
    { width: 150, name: "완료날짜" },
    { width: 80, name: "처리자" },
    { width: 150, name: "처리결과" },
    { width: 80, name: "처리상태" },
    { width: 150, name: "등록날짜" },
    { width: 150, name: "완료날짜" },
    { width: 80, name: "처리자" },
    { width: 150, name: "처리결과" },
    { width: 80, name: "처리상태" },
    { width: 150, name: "등록날짜" },
    { width: 150, name: "완료날짜" },
    { width: 80, name: "처리자" },
  ];
  function createData(
    name,
    calories,
    fat,
    carbs,
    protein,
    name2,
    calories2,
    fat2,
    carbs2,
    protein2,
    name3,
    calories3,
    fat3,
    carbs3,
    protein3,
    name4
  ) {
    return {
      name,
      calories,
      fat,
      carbs,
      protein,
      name2,
      calories2,
      fat2,
      carbs2,
      protein2,
      name3,
      calories3,
      fat3,
      carbs3,
      protein3,
      name4,
    };
  }
  const insaperRowname = [
    createData(
      "(주)월급날1",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날2",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날3",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날4",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날5",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날6",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날7",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날8",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),

    createData(
      "(주)월급날9",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날10",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날11",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날12",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날13",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날14",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날15",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날16",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날17",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날18",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날19",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날20",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "(주)월급날21",
      "오류[0]건/전체[103]건",
      "완료",
      "21-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
  ];

  return (
    <div>
      <div style={{ height: "80px", lineHeight: "85px" }}>
        <b>인사정보 일괄</b>
        <BlueButton buttonName="대상자 가져오기" />
        <BlueButton class="margin10" buttonName="연말정산 정보갱신" />
        <BlueButton class="margin10" buttonName="인사정보 동기화(가져오기)" />
      </div>
      <div>
        <EnhancedTable
          rows={insaperRowname}
          cols={insaperColname}
          colsTitle={insaperColsTitle}
          colsCount={2}
          containerWidth={2000}
        />
      </div>
    </div>
  );
};
export default InsaPer;