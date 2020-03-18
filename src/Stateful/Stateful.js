import React, {Component} from 'react';
import Nav from '../layout/Nav';

class Stateful extends Component{
    constructor(props){
        super(props);
        this.state = {
            termino: ''
        }
    }

    render(){
        const {termino} = this.state;
        return (
            <Nav>
                <div>
                    <input value={termino} onChange={(e) => this.setState({termino: e.target.value})}/>
                    <span>Aqui ...{termino}</span>
                    <button onClick={() => this.setState({termino: ''})} >Clear</button>
                </div>
            </Nav>
        )
    }
}

export default Stateful;