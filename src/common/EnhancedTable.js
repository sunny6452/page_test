import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Paper from "@material-ui/core/Paper";
import { EnhancedTableBody } from "./EnhancedTableBody";
import { EnhancedTableHead } from "./EnhancedTableHead";

//var containerHeight = 578;
export const EnhancedTable = (props) => {
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(11);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    if (props.colsCount === 2) {
      setRowsPerPage(10);
    }
  }, [props]);

  return (
    <Paper style={{ borderRadius: 10, overflowY: "hidden" }}>
      <TableContainer style={{ height: 578 }}>
        <Table style={{ width: props.containerWidth }} padding="none">
          <EnhancedTableHead
            {...props}
            selected={selected}
            setSelected={setSelected}
          />
          <EnhancedTableBody
            rows={props.rows}
            rowsPerPage={rowsPerPage}
            page={page}
            selected={selected}
            setSelected={setSelected}
          />
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={props.rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
