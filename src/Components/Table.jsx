import React from 'react';
import { Link } from 'react-router-dom';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import {useStyles} from './Styles';
import {rows} from './CreateData';



export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Nombre de empleado</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Fecha de nacimiento</TableCell>
            <TableCell align="center">Dirección</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
                <TableCell align="center" component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.birthday}</TableCell>
                <TableCell align="center">{row.direction}</TableCell>
                <TableCell align="center">
                  <Link to="/ubicacion">
                      <Button  
                        variant="contained"
                        color="secondary"
                        align="center"
                        >Información</Button>
                  </Link>
                    </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}