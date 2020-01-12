import React from 'react';
import { Link } from 'react-router-dom';

import Table from '../../Components/Table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default function AllRegisters (){
    return(
        <div style={{textAlign:"center"}}>
            <h1>Registro de empleados</h1>
            <Table/>
            <br></br>
            <Link to="/">
                <Fab color="secondary" aria-label="add">
                    <AddIcon />
                </Fab> 
            </Link>
        </div>
    )
}