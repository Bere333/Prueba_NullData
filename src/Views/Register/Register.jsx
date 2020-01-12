import React from 'react';

import TextField from '../../Components/Table/TextField';


function Register (){
       
        return (
            <section className="section-register" 
                style={{
                    display:"flex", 
                    justifyContent:"center",
                    flexDirection:"column",
                }}>
                <br></br><br></br>
                <h1 style={{textAlign:"center", fontSize:"30px", fontFamily:"'Roboto', sans-serif"}}>Registro de empleados</h1>
                <h2 style={{textAlign:"center", fontSize:"20px", fontFamily:"'Roboto', sans-serif"}}>Datos personales:</h2>
                <br/><br/>
                <TextField/>
            </section>
        )
    }

    export default Register;