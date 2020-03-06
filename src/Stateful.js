import React, {Component} from 'react';

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
            <div>
                <input value={termino} onChange={(e) => this.setState({termino: e.target.value})}/>
                <span>Aqui ...{termino}</span>
                <button onClick={() => this.setState({termino: ''})} >Clear</button>
            </div>
        )
    }
}

export default Stateful;