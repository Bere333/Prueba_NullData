import React from 'react';

import TextField from '../../Components/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';


function Register (){
       
        return (
            <section className="section-register">
                <h1>Registro de empleados</h1>
                <TextField></TextField>
               
            </section>
        )
    }

    export default Register;