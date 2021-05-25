import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { HeaderCell } from "./Tablecell";
import Checkbox from "@material-ui/core/Checkbox";

export const EnhancedTableHead = ({
  rows,
  cols,
  colsCount,
  colsTitle,
  setSelected,
}) => {
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  if (colsCount === 2) {
    return (
      <TableHead>
        <TableRow>
          <TableCell
            align="center"
            padding="checkbox"
            rowSpan={colsCount}
            style={{ height: 90 }}
          >
            <Checkbox
              size="small"
              color="primary"
              onChange={handleSelectAllClick}
              inputProps={{ "aria-label": "sall desserts" }}
            />
          </TableCell>
          <HeaderCell rowSpan={colsCount} firstheader="true">
            회사명
          </HeaderCell>
          {colsTitle.map((col, index) => {
            return (
              <HeaderCell key={index} colSpan={5}>
                {col}
              </HeaderCell>
            );
          })}
        </TableRow>
        <TableRow>
          {cols.map((col, index) => {
            var borderRight = "none";
            if (index === 4 || index === 9) borderRight = "1px solid #E5E5E5";
            return (
              <HeaderCell
                key={index}
                style={{ width: col.width, borderRight: borderRight }}
              >
                {col.name}
              </HeaderCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  } else {
    return (
      <TableHead>
        <TableRow>
          <TableCell align="center" padding="checkbox" style={{ height: 50 }}>
            <Checkbox
              size="small"
              color="primary"
              onChange={handleSelectAllClick}
              inputProps={{ "aria-label": "sall desserts" }}
            />
          </TableCell>
          <HeaderCell firstheader="true" style={{ borderRight: "none" }}>
            회사명
          </HeaderCell>
          {cols.map((col, index) => {
            return (
              <HeaderCell
                key={index}
                style={{ width: col.width, borderRight: "none" }}
              >
                {col.name}
              </HeaderCell>
            );
          })}
        </TableRow>
      </TableHead>
    );
  }
};
