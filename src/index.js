import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './apps/App';
import Login from './container-component/containers/Login';
import CicloPadre from './ciclo_vida/CicloPadre';
import TiposComponentes from './tipos_componentes/TiposComponentes';
import Click from './clicks/Click';
import ClickID from './clicks/ClickID';
import Stateful from './Stateful/Stateful';
import Hook from './hooks/useState/index';
import CustomHook from './hooks/custom/app';


function New (){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/app" component={App} />
            <Route path="/login" component={Login} />
            <Route path="/ciclo" component={CicloPadre} />
            <Route path="/tiposComponentes" component={TiposComponentes} />

            <Route path="/clickme/:id/:userId?" component={ClickID} />
            <Route path="/clickme" component={Click} />
            
            <Route path="/stateful" component={Stateful} />
            <Route path="/hook" component={Hook} />
            <Route path="/custom-hook" component={CustomHook} />
        </Switch>
    </BrowserRouter>
    )
}

ReactDOM.render(<New/>, document.getElementById('root'));
