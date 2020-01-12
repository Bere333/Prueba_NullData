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
                <br></br><br></br>
                <h1 style={{textAlign:"center"}}>Registro de empleados</h1>
                <br/><br/>
                <TextField/>
               
            </section>
        )
    }

    export default Register;