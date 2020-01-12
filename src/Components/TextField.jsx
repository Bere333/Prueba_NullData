import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import {useStyles} from './Styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import {createData, rows} from '../Components/CreateData';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';


export default function LayoutTextFields() {
  const classes = useStyles();
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [birthday, setBirthday] = useState(' ');
  const [open, setOpen] = React.useState(true);


  return (
    <form 
      className={classes.root} noValidate autoComplete="off" 
      style={{
        textAlign:"center",
        display:"flex", 
        justifyContent:"center",
        flexDirection:"column"
      }}
      >
      <div>
        <TextField
          id="outlined-full-width"
          label="Nombre completo"
          style={{ margin: 8 }}
          placeholder="Introduce tu nombre completo"
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
              if(e.target.value===null){
                setOpen(open)
              }else{
                  setBirthday(e.target.value)
                  setOpen(false)
                }
            }}
        />
        <br></br>
        <h1>Dirección</h1>
        <div>
                <TextField
                     label="Calle"
                     id="outlined-margin-normal"
                     className={classes.textField}
                     margin="normal"
                     variant="outlined"
                />
                <TextField
                    label="Num ext"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Colonia"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Estado"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />

        </div>
      </div>
      <br></br>
      <br></br>
      <div>
            <Collapse in={open}>
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpen(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                variant="outlined" 
                severity="error"
              >
                Introduce campo faltante
              </Alert>
            </Collapse>
            <br></br>
            <Link to="/registros">

                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    sendIcon={<Icon>send</Icon>}
                    onClick={()=>{
                        localStorage.setItem("nombredeusuario", JSON.stringify(name));
                        localStorage.setItem("emaildeusuario", JSON.stringify(email));
                        localStorage.setItem("nacimientodeusuario", JSON.stringify(birthday));
                        rows.push(createData(localStorage.getItem("nombredeusuario"), localStorage.getItem("emaildeusuario") , localStorage.getItem("nacimientodeusuario")))
                        if(localStorage.getItem("nombredeusuario") !== " " &&  localStorage.getItem("emaildeusuario") !== " " && localStorage.getItem("nacimientodeusuario") !== " "){
                          setOpen(false)
                        }else{
                          setOpen(true)
                        }

                    }}

                >
                Registrar
                </Button>

            </Link>
      </div>
    </form>
  );
}