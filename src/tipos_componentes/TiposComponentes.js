import React, { Component } from 'react';
import Controlado from './Controlado';
import NoControlado from './NoControlado';
import Nav from '../layout/Nav';

class TiposComponentes extends Component {
    constructor(props){
        super(props);
        this.state = {
          tamano: ''
        }
    
      }
    
      render(){
        const {tamano} = this.state;
        return (
          <Nav>
            <div className="App">
              <Controlado 
                tamaño={tamano} 
                onChangeTamaño={(value)=>this.setState({tamano: value})} 
                onClickAceptar={()=> console.log(this.state)}/>
              <hr/>
              <NoControlado 
                onClickAceptar={(val)=> console.log(val)}/>
              <hr/>
            </div>
          </Nav>
        );
        
    }
}

export default TiposComponentes;