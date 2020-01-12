import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import {useStyles} from './Styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import {createData, rows} from '../Components/CreateData';


export default function LayoutTextFields() {
  const classes = useStyles();
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [birthday, setBirthday] = useState(' ')

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-full-width"
          label="Nombre completo"
          style={{ margin: 8 }}
          placeholder="Introduce tu nombre completo"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {(e)=>{
             setName(e.target.value)
            }}
        />
         <TextField
          id="outlined-full-width"
          label="Correo"
          style={{ margin: 8 }}
          placeholder="Introduce tu correo"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          onChange = {(e)=>{
            setEmail(e.target.value)
           }}
        />
        <TextField
          id="date"
          label="Fecha de nacimiento"
          type="date"
          style={{ margin: 8 }}
          defaultValue="2020-01-01"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,}}
            variant="outlined"
            onChange = {(e)=>{
                setBirthday(e.target.value)
            }}
        />
        <h1>Dirección</h1>
        <div>
                <TextField
                     label="Calle"
                     id="outlined-margin-normal"
                     className={classes.textField}
                     helperText="Some important text"
                     margin="normal"
                     variant="outlined"
                />
                <TextField
                    label="Num ext"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    helperText="Some important text"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Colonia"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    helperText="Some important text"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Estado"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    helperText="Some important text"
                    margin="normal"
                    variant="outlined"
                />

        </div>
      </div>
      <div>
            <Link to="/registros">
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    sendIcon={<Icon>send</Icon>}
                    onClick={()=>{
                        localStorage.setItem("nombredeusuario", JSON.stringify(name));
                        localStorage.setItem("emaildeusuario", JSON.stringify(email));
                        localStorage.setItem("nacimientodeusuario", JSON.stringify(birthday));
                        rows.push(createData(localStorage.getItem("nombredeusuario"), localStorage.getItem("emaildeusuario") , localStorage.getItem("nacimientodeusuario")))
                    }}
                >
                Registrar
                </Button>

            </Link>
      </div>
    </form>
  );
}