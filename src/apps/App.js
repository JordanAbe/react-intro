import React, {Component} from 'react';
import Titulo from '../defaultprops/Titulo';
import Nav from '../layout/Nav';
import './style.css';

class App extends Component {

  constructor(props){
    super(props);

  }

  render(){
    const a = 15;
    const b = 10;
    const frutas = ['piña','naranja','mandarina']
    return (
      <Nav>
        <div className="App">
          <h3>Default props</h3>
          <Titulo titulo="Este es mi titulo" />
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
          <Saludo nombre="Jordan"/>        
        </div>
      </Nav>
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
