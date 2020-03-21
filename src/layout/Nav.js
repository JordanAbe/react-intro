import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import  { Link, Redirect, withRouter } from 'react-router-dom';

function Nav(props){
    const { children, history, location, match } = props;

    // console.log('location ', location);
    // console.log('match ', match);

    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="h6" color="inherit">Bienvenido</Typography>
                </ToolBar>
            </AppBar>
            <button onClick={()=> history.push('app')}>go to app</button>
            <button onClick={()=> history.goBack()}>go back</button>
            <button onClick={()=> history.goForward()}>go forward</button>
            <ul>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/app">App</Link></li>
                <li><Link to="/ciclo">Ciclo</Link></li>
                <li><Link to="/tiposComponentes">Tipos de componentes</Link></li>
                <li><Link to="/clickme">Clickme</Link></li>
                <li><Link to="/clickme/123">ClickmeID</Link></li>
                <li><Link to="/stateful">Stateful</Link></li>
                <li><Link to="/hook">Hook</Link></li>
                <li><Link to="/custom-hook">Custom Hook</Link></li>
                <li><Link to="/hook-form">Custom Hook form</Link></li>
                <li><Link to="/hook-events">Custom Hook events</Link></li>
                <li><Link to="/formik">Formik</Link></li>
                <li><Link to="/todo">Todo</Link></li>
            </ul>
            { false &&
                <Redirect to="ciclo" />
            }
            <hr/>
            <div>
                { children }
            </div>
        </div>
    )
}

export default withRouter(Nav);