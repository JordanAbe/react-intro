import React, {Component} from 'react';
import Titulo from './Titulo';
import Click from './Click';
import Stateful from './Stateful';
import Controlado from './Controlado';
import NoControlado from './NoControlado';
import Ciclo from './Ciclo';
import Componente from './containers/Login';
import Main from './layout/Main';
import style from './style.css';
import { throwStatement } from '@babel/types';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      tamano: '',
      mostrar: true
    }

    setInterval(
      ()=> { this.setState({valor: Math.random() > .5 ? 1 : 2});}
      , 2000
    )

  }

  render(){
    const {tamano, valor} = this.state;
    const nombre = this.props.nombre;
    const a = 15;
    const b = 10;
    const frutas = ['piña','naranja','mandarina']
    return (
      <Main>
        <div className="App">
          <h3>Default props</h3>
          <Titulo titulo="Este es mi titulo" />
          <hr/>
          <Saludo nombre={nombre}/>
          <hr/>
          <h3>Condicionales if && else if</h3>
          {a > b && <p>que tal </p>}
          {(a > b) ? <div>'a es mayor que b'</div> : <div>'b es mayor que b'</div>}
          <hr/>
          <h3>for con Map</h3>
          <ul>
          {frutas.map(fruta => <li key={fruta}>{fruta}</li>)}
          </ul>
          <hr/>
          <Click/>
          <hr/>
          <Stateful/>
          <hr/>
          <Controlado 
            tamaño={tamano} 
            onChangeTamaño={(value)=>this.setState({tamano: value})} 
            onClickAceptar={()=> console.log(this.state)}/>
          <hr/>
          <NoControlado 
            onClickAceptar={(val)=> console.log(val)}/>
          <hr/>
          <h3>Ciclo de vida de un componente</h3>
          { this.state.mostrar &&
            <Ciclo valor={valor}/>
          }
          <button onClick={()=> this.setState({mostrar: !this.state.mostrar})}>ver</button>
          <hr/>
          <h3>Componentes y containers</h3>
          <Componente />
        </div>
      </Main>
    );
  }
}

function Saludo(props) {
  return (
    <div>
        <div className="border-datos">Datos personales de {props.nombre}</div>
        <Persona nombre={props.nombre} apellido="Abe" edad="29"/>
    </div>
    
  )
}

function Persona(props){
  const { nombre, apellido, edad} = props;
  return (
    <div>
      <div>Nombre: {nombre}</div>
      <div>Apellido: {apellido}</div>
      <div>Edad: {edad}</div>
    </div>
  )
}

export default App;
