import React, {Component} from 'react';

class Componente extends Component {
    render(){
        return (
            <div style={{backgroundColor:this.props.color}}>{this.props.titulo}</div>
        )
    }
}
Componente.defaultProps = {
    color: 'gray'
}
export default Componente;