import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

// const columns = [
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'phone no.', label: 'text', minWidth: 200 },
//   {
//     id: 'email',
//     label: 'email',
//     minWidth: 200,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'Query',
//     label: 'Query',
//     minWidth: 300,
//     align: 'center',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
// ];

function createData(id, name, phone, email, querry) {
  return { id, name, phone, email, querry };
}

const rows = [
  createData("1", "Mr. Popo", "1234567890", 1324171354, 3287263),
  createData("2", "Mr. Popo", "1234567890", 1403500365, 9596961),
  createData("3", "Mr. Popo", "1234567890", 60483973, 301340),
  createData("4", "Mr. Lolo", "1234567890", 327167434, 9833520),
  createData("5", "Jonny English", "1234567890", 37602103, 9984670),
  createData("6", "Tin Tin", "1234567890", 25475400, 7692024),
  createData("7", "Optimus Prime", "1234567890", 83019200, 357578),
  createData("8", "Snow Leopard", "1234567890", 4857000, 70273),
  createData("9", "Kala Kachhua", "1234567890", 126577691, 1972550),
  createData("10", "Mr Japani", "1234567890", 126317000, 377973),
  createData("11", "Bhola Bhala", "1234567890", 67022000, 640679),
  createData("12", "Cheetah", "1234567890", 67545757, 242495),
  createData("13", "Russian", "1234567890", 146793744, 17098246),
  createData("14", "Bihari", "1234567890", 200962417, 923768),
  createData("15", "Badmosh No.1", "1234567890", 210147125, 8515767),
  createData("16", "Lalu", "1234567890", 210147125, 8515767),
];

export default function StickyHeadTable() {
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
              <TableCell align="right" style={{ minWidth: 170 }}>
                ID
              </TableCell>
              <TableCell align="right" style={{ minWidth: 170 }}>
                Name
              </TableCell>
              <TableCell align="right" style={{ minWidth: 170 }}>
                Phone
              </TableCell>
              <TableCell align="right" style={{ minWidth: 170 }}>
                Email
              </TableCell>
              <TableCell align="right" style={{ minWidth: 170 }}>
                Querry
              </TableCell>
              <TableCell align="right" style={{ minWidth: 170 }}>
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    <TableCell key={index} align={"right"}>
                      {row.id}
                    </TableCell>
                    <TableCell key={index} align={"right"}>
                      {row.name}
                    </TableCell>
                    <TableCell key={index} align={"right"}>
                      {row.phone}
                    </TableCell>
                    <TableCell key={index} align={"right"}>
                      {row.email}
                    </TableCell>
                    <TableCell key={index} align={"right"}>
                      {row.querry}
                    </TableCell>
                    <TableCell key={index} align={"right"}>
                      {row.name}
                    </TableCell>
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
