import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function Componente(props){
    const { email, password, onChangeCampo, onLogin } = props;

    return (
        <div style={{padding: '2rem'}}>
            <TextField label="Email" fullWidth value={email} onChange={(e)=> onChangeCampo('email', e.target.value)} />
            <TextField label="Password" fullWidth value={password} onChange={(e)=> onChangeCampo('password', e.target.value)} />
            <Button variant="contained" color='primary' fullWidth onClick={onLogin} >Login</Button>
        </div>
    )
} 

export default Componente;