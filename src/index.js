import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Login from './components/Login';
import CicloPadre from './CicloPadre';
import TiposComponentes from './TiposComponentes';
import Click from './Click';
import ClickID from './ClickID';
import Stateful from './Stateful';

function New (){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/ciclo" component={CicloPadre} />
            <Route path="/TiposComponentes" component={TiposComponentes} />

            <Route path="/clickme/:id/:userId?" component={ClickID} />
            <Route path="/clickme" component={Click} />
            
            <Route path="/stateful" component={Stateful} />
        </Switch>
    </BrowserRouter>
    )
}

ReactDOM.render(<New/>, document.getElementById('root'));
