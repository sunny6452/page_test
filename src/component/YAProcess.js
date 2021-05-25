import * as React from "react";
import { BlueButton } from "../common/Collection";
import { EnhancedTable } from "../common/EnhancedTable";

const YAProcess = () => {
  const yaProcessColsTitle = ["일괄 계산", "일괄 마감", "보이기 마감"];
  const yaProcessColname = [
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

  const yaProcessRowname = [
    {
      name: "회사명1",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      name2: "처리자1",
      name4: "처리자1",
      name3: "test3",
      name8: "회사명1",
      result2: "오류[0]건/전체[103]건",
      status2: "완료",
      name6: "처리자1",
      name5: "처리자1",
      name7: "test3",
      status3: "완료",
      name0: "처리자1",
      name12: "처리자1",
      name13: "test3",
    },
    {
      name: "회사명2",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Cersei",
      name2: "처리자1",
      name3: "test3",
      name8: "회사명1",
      result2: "오류[0]건/전체[103]건",
      status2: "완료",
      name6: "처리자1",
      name5: "처리자1",
      name7: "test3",
      result3: "오류[0]건/전체[103]건",
      status4: "완료",
      name10: "처리자1",
      name9: "처리자1",
    },
    {
      name: "회사명3",
      result: "오류[0]건/전체[103]건",
      status: "오류",
      carbs: "Jaime",
      name2: "처리자1",
    },
    {
      name: "회사명4",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Arya",
      name2: "처리자5",
    },
    {
      name: "회사명5",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Daenerys",
      name2: "처리자4",
    },
    {
      name: "회사명6",
      result: "오류[0]건/전체[103]건",
      status: "오류",
      carbs: "Daenerys",
      name2: "처리자2",
    },
    {
      name: "회사명7",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Ferrara",
      name2: "처리자1",
    },
    {
      name: "회사명8",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Rossini",
      name2: "처리자2",
    },
    {
      name: "회사명9",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Harvey",
      name2: "처리자3",
    },
    {
      name: "회사명4",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Arya",
      name2: "처리자4",
    },
    {
      name: "회사명5",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Daenerys",
      name2: "처리자5",
    },
    {
      name: "회사명6",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Daenerys",
      name2: "처리자6",
    },
    {
      name: "회사명7",
      result: "오류[0]건/전체[103]건",
      status: "오류",
      carbs: "Ferrara",
      name2: "처리자7",
    },
    {
      name: "회사명8",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Rossini",
      name2: "처리자8",
    },
    {
      name: "회사명9",
      result: "오류[0]건/전체[103]건",
      status: "완료",
      carbs: "Harvey",
      name2: "처리자9",
    },
  ];

  return (
    <div>
      <div style={{ height: "80px", lineHeight: "85px" }}>
        <b>연말정산 처리 작업</b>
        <BlueButton buttonName="일괄 계산" />
        <BlueButton class="margin10" buttonName="일괄 마감" />
        <BlueButton class="margin10" buttonName="일괄 마감 취소" />
        <BlueButton class="margin10" buttonName="보이기 마감" />
        <BlueButton class="margin10" buttonName="보이기 마감 취소" />
      </div>
      <div>
        <EnhancedTable
          rows={yaProcessRowname}
          cols={yaProcessColname}
          colsTitle={yaProcessColsTitle}
          colsCount={2}
          containerWidth={2000}
        />
      </div>
    </div>
  );
};
export default YAProcess;
