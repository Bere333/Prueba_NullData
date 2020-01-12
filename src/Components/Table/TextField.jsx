import React, { useState } from 'react';

import TextField from '@material-ui/core/TextField';
import {useStyles} from './Styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import {createData, rows} from '../Table/CreateData';
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
  const [street, setStreet] = useState(' ');
  const [numext, setNumext] = useState(' ');
  const [colony, setColony] = useState(' ');
  const [state, setState] = useState(' ');


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
              type="text"
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
                      setBirthday(e.target.value)
                }}
        />
        <br></br>
        <h1 style={{textAlign:"center", fontSize:"20px", fontFamily:"'Roboto', sans-serif"}}>Dirección:</h1>
        <div>
                <TextField
                     label="Calle"
                     id="outlined-margin-normal"
                     className={classes.textField}
                     margin="normal"
                     variant="outlined"
                     onChange = {(e)=>{
                       setStreet(e.target.value)
                     }}
                />
                <TextField
                    label="Num ext"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange = {(e)=>{
                      setNumext(e.target.value)
                    }}
                />
                <TextField
                    label="Colonia"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange = {(e)=>{
                      setColony(e.target.value)
                    }}
                />
                <TextField
                    label="Estado"
                    id="outlined-margin-normal"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    onChange = {(e)=>{
                      if(e.target.value===null || name === ' ' ||  email === ' '){
                        setOpen(open)
                      }else{
                          setState(e.target.value)
                          setOpen(false)
                        }
                    }}
                />

        </div>
      </div>
      <br></br>
      <br></br>
      <div>
            <Collapse in={open} style={{width:"70rem", margin:"0rem 2rem 2rem 4.5rem"}}>
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
                Introduce los campos faltantes
              </Alert>
            </Collapse>
            <br></br>
            <Link to="/registros" style={{textDecoration:"none"}}>

                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                    sendIcon={<Icon>send</Icon>}
                    onClick={()=>{
                        localStorage.setItem("nombredeusuario", name);
                        localStorage.setItem("emaildeusuario", email);
                        localStorage.setItem("nacimientodeusuario", birthday);
                        localStorage.setItem("calledeusuario", street);
                        localStorage.setItem("numextdeusuario", numext);
                        localStorage.setItem("colonydeusuario", colony);
                        localStorage.setItem("statedeusuario", state);
                        rows.push(createData(localStorage.getItem("nombredeusuario"), localStorage.getItem("emaildeusuario") , localStorage.getItem("nacimientodeusuario"), localStorage.getItem("calledeusuario"), localStorage.getItem("numextdeusuario"),localStorage.getItem("colonydeusuario"),localStorage.getItem("statedeusuario")))
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