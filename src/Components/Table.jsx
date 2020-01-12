import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './Styles';
import {rows} from './CreateData';




// const rows = [
//   createData(localStorage.getItem("nombredeusuario"), localStorage.getItem("emaildeusuario") , localStorage.getItem("nacimientodeusuario"), 24),
//   createData(localStorage.getItem("nombredeusuario"), localStorage.getItem("emaildeusuario") , localStorage.getItem("nacimientodeusuario"), 24)

// ];


export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre de empleado</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Fecha de nacimiento</TableCell>
            <TableCell align="right">Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.birthday}</TableCell>
                <TableCell align="right">{row.direction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}