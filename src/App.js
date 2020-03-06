import React, {Component} from 'react';
import Componente from './Componente';
import Click from './Click';
import style from './style.css';


class App extends Component {
  render(){
    const nombre = this.props.nombre;
    const a = 15;
    const b = 10;
    const frutas = ['piña','naranja','mandarina']
    return (
      <div className="App">
        <Componente titulo="Este es mi titulo" />
        <Saludo nombre={nombre}/>
        <h1>if</h1>
        {a > b && <p>que tal </p>}
        <h1>if else</h1>
        {(a > b) ? <div>'a es mayor que b'</div> : <div>'b es mayor que b'</div>}
        <h1>frutas</h1>
        <ul>
        {frutas.map(fruta => <li key={fruta}>{fruta}</li>)}
        </ul>
        <h1>Clicks</h1>
        <Click/>
      </div>
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
