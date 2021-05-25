import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { BodyCell } from "./Tablecell";
import Checkbox from "@material-ui/core/Checkbox";

export const EnhancedTableBody = ({
  rows,
  rowsPerPage,
  page,
  selected,
  setSelected,
}) => {
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  return (
    <TableBody>
      {rows
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const isItemSelected = isSelected(row.name);
          const labelId = `enhanced-table-checkbox-${index}`;
          return (
            <TableRow
              hover
              onClick={(event) => handleClick(event, row.name)}
              role="checkbox"
              aria-checked={isItemSelected}
              tabIndex={-1}
              key={index}
              selected={isItemSelected}
            >
              <TableCell align="center" padding="checkbox">
                <Checkbox
                  color="primary"
                  size="small"
                  checked={isItemSelected}
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </TableCell>
              <BodyCell
                id={labelId}
                padding="none"
                style={{ textAlign: "left", paddingLeft: "16px" }}
              >
                {row.name}
              </BodyCell>
              {Object.values(row).map((item, rowIndex) => {
                if (rowIndex !== 0)
                  return <BodyCell key={rowIndex}>{item}</BodyCell>;
                else return false;
              })}
            </TableRow>
          );
        })}
    </TableBody>
  );
};
