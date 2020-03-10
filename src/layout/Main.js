import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';

function Main(props){
    const { children } = props;
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="h6" color="inherit">Bienvenido</Typography>
                </ToolBar>
            </AppBar>
            <div>
                { children }
            </div>
        </div>
    )
}

export default Main;