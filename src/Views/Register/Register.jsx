import React from 'react';

import TextField from '../../Components/TextField';


function Register (){
       
        return (
            <section className="section-register" 
                style={{
                    display:"flex", 
                    justifyContent:"center",
                    flexDirection:"column"
                }}>
                <h1 style={{textAlign:"center"}}>Registro de empleados</h1>
                <TextField></TextField>
               
            </section>
        )
    }

    export default Register;