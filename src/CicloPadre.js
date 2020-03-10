import React, { Component } from 'react';
import Ciclo from './Ciclo';
import Nav from './layout/Nav';

class CicloPadre extends Component{
    constructor(props){
        super(props);
        this.state = {
            mostrar: true,
            valor: 1
        }

        setInterval(
            ()=> { this.setState({valor: Math.random() > .5 ? 1 : 2});}
            , 2000
          )
    }

    render(){
        const { valor, mostrar } = this.state;
        return (
            <Nav>
                <div>
                    <h3>Ciclo de vida de un componente</h3>
                    { mostrar &&
                        <Ciclo valor={valor}/>
                    }
                    <button onClick={()=> this.setState({mostrar: !this.state.mostrar})}>ver</button>
                </div>
            </Nav>
        )
    }
    
}

export default CicloPadre;