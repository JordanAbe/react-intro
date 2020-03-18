import React, { Component } from 'react';
import Pagina from '../components/Login';

class Contenedor extends Component{
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }

        this.onChangeCampo = this.onChangeCampo.bind(this);
    }

    onChangeCampo(campo, valor){
        console.log(campo, ' ',valor)
        this.setState({ [campo] : valor});
    }
    onLogin(){
        console.log('onLogin');
    }

    render() {
        const { email, password} = this.state;
        return (
            <Pagina email={email} password={password} onChangeCampo={this.onChangeCampo} onLogin={this.onLogin} />
        )
    }
}

export default Contenedor;