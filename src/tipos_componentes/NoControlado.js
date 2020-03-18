import React, {Component} from 'react';

class NoControlado extends Component {
    constructor(props){
        super(props);
        this.state = {
            tamaño:''
        }
    }
    render(){
        const { tamaño } = this.state;
        const { onClickAceptar} = this.props;
        return (
            <div>
            <h3>Componente NO controlado</h3>
            <ul>
                <li><input type="radio" name="tamano" onChange={e => this.setState({tamaño: e.target.value})} checked={tamaño === 'grande'} value="grande"/>Grande</li>
                <li><input type="radio" name="tamano" onChange={e => this.setState({tamaño: e.target.value})} checked={tamaño === 'mediano'} value="mediano"/>Mediano</li>
                <li><input type="radio" name="tamano" onChange={e => this.setState({tamaño: e.target.value})} checked={tamaño === 'chico'} value="chico"/>Chico</li>
            </ul>
            <button onClick={()=>onClickAceptar(this.state)} >Aceptar</button>
        </div>
        )
    }
}

export default NoControlado;