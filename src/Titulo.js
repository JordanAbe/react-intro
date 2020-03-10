import React, {Component} from 'react';

class Titulo extends Component {
    render(){
        return (
            <div style={{backgroundColor:this.props.color}}>{this.props.titulo}</div>
        )
    }
}
Titulo.defaultProps = {
    color: 'gray'
}
export default Titulo;