import React, {Component} from 'react';

function Controlado(props) {

    const { tamaño, onChangeTamaño, onClickAceptar } = props;
    return (
        <div>
            <h1>Hamburguesa</h1>
            <h3>Elije tamaño:</h3>
            <ul>
                <li><input type="radio" name="taman" onChange={e => onChangeTamaño(e.target.value)} checked={tamaño === 'grande'} value="grande"/>Grande</li>
                <li><input type="radio" name="taman" onChange={e => onChangeTamaño(e.target.value)} checked={tamaño === 'mediano'} value="mediano"/>Mediano</li>
                <li><input type="radio" name="taman" onChange={e => onChangeTamaño(e.target.value)} checked={tamaño === 'chico'} value="chico"/>Chico</li>
            </ul>
            <button onClick={()=>onClickAceptar()} >Aceptar</button>
        </div>
    )

}

export default Controlado;