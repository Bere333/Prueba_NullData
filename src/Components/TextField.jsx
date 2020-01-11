import React from 'react';

import TextField from '@material-ui/core/TextField';
import {useStyles} from './Styles'


export default function LayoutTextFields() {
  const classes = useStyles();

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
    </form>
  );
}