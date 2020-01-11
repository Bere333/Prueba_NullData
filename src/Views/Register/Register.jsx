import React from 'react';

import TextField from '../../Components/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

function Register (){
        const classes = useStyles();
        return (
            <section className="section-register">
                <h1>Registro de empleados</h1>
                <TextField></TextField>
                <Link to="/registros">
                    <Button
                            variant="contained"
                            color="primary"
                            className={classes.button}
                            sendIcon={<Icon>send</Icon>}
                    >
                    Registrar
                    </Button>

                </Link>
            </section>
        )
    }

    export default Register;