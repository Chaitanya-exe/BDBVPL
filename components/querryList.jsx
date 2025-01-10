import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

function createData(id, name, phone, email, query) {
  return { id, name, phone, email, query };
}

// const rows = [
//   createData("1", "Mr. Popo", "1234567890", "popo@gmail.com", "Need help"),
//   createData("2", "Mr. Lolo", "1234567890", "lolo@gmail.com", "Follow-up"),
//   createData("3", "Jonny English", "1234567890", "jonny@gmail.com", "Report issue"),
//   createData("4", "Tin Tin", "1234567890", "tintin@gmail.com", "Request info"),
//   createData("5", "Optimus Prime", "1234567890", "prime@transformers.com", "Urgent query"),
// ];

export default function StickyHeadTable({ rows }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell align="center" style={{ minWidth: 170 }}>
                Name
              </TableCell>
              <TableCell align="center" style={{ minWidth: 170 }}>
                Phone
              </TableCell>
              <TableCell align="center" style={{ minWidth: 170 }}>
                Email
              </TableCell>
              <TableCell align="center" style={{ minWidth: 170 }}>
                Date (mm/dd/yy)
              </TableCell>
              <TableCell align="center" style={{ minWidth: 170 }}>
                Query
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                const index = row.query.length - 1
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    <TableCell align="center">{row.customer_name}</TableCell>
                    <TableCell align="center">{row.phone_number}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.query[index]}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
