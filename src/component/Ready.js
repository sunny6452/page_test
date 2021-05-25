import * as React from "react";

import { BlueButton } from "../common/Collection";
import { EnhancedTable } from "../common/EnhancedTable";

const Ready = () => {
  const readyColsTitle = ["일괄 초기화", "일괄 마감"];
  const readyColname = [
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
      name4,
    };
  }

  const readyRowname = [
    createData(
      "Cupcake",
      305,
      305,
      "2021-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1",
      305,
      305,
      "2021-01-01 11:31:52",
      "2021-12-31 11:31:52",
      "처리자1"
    ),
    createData(
      "Donut",
      452,
      25.0,
      51,
      4.9,
      "처리자1",
      452,
      25.0,
      51,
      4.9,
      "처리자1"
    ),
    createData("Eclair", 262, 16.0, 24, 6.0, "처리자1"),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "처리자1"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, "처리자1"),
    createData("Honeycomb", 408, 3.2, 87, 6.5, "처리자1"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "처리자1"),
    createData("Jelly Bean", 375, 0.0, 94, 0.0, "처리자1"),
    createData("KitKat", 518, 26.0, 65, 7.0, "처리자1"),
    createData("Lollipop", 392, 0.2, 98, 0.0, "처리자1"),
    createData("Marshmallow", 318, 0, 81, 2.0, "처리자1"),
    createData("Nougat", 360, 19.0, 9, 37.0, "처리자1"),
    createData("Oreo", 437, 18.0, 63, 4.0, "처리자1"),
    createData("Cupcake", 305, 3.7, 67, 4.3, "처리자1"),
    createData("Donut", 452, 25.0, 51, 4.9, "처리자1"),
    createData("Eclair", 262, 16.0, 24, 6.0, "처리자1"),
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "처리자1"),
    createData("Gingerbread", 356, 16.0, 49, 3.9, "처리자1"),
    createData("Honeycomb", 408, 3.2, 87, 6.5, "처리자1"),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "처리자1"),
    createData("Jelly Bean", 375, 0.0, 94, 0.0, "처리자1"),
    createData("KitKat", 518, 26.0, 65, 7.0, "처리자1"),
    createData("Lollipop", 392, 0.2, 98, 0.0, "처리자1"),
    createData("Marshmallow", 318, 0, 81, 2.0, "처리자1"),
    createData("Nougat", 360, 19.0, 9, 37.0, "처리자1"),
    createData("Oreo", 437, 18.0, 63, 4.0, "처리자1"),
  ];

  return (
    <div>
      <div style={{ height: "80px", lineHeight: "85px" }}>
        <b>연말정산 준비 작업</b>
        <BlueButton buttonName="일괄 초기화" />
        <BlueButton class="margin10" buttonName="일괄 마감" />
        <BlueButton class="margin10" buttonName="일괄 마감 취소" />
      </div>
      <div>
        <EnhancedTable
          rows={readyRowname}
          cols={readyColname}
          colsTitle={readyColsTitle}
          colsCount={2}
          containerWidth={"100%"}
        />
      </div>
    </div>
  );
};
export default Ready;
