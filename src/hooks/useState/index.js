import React, { Component, useState } from 'react';
import Nav from '../../layout/Nav';

const Hook = (props)=> {

    const [ count, setCount ] = useState(0);
    const [ deviceType, setDeviceType ] = useState('mobile');
    const [ datos, setDatos ] = useState({nombre: 'Jordan', edad: 29});

    console.log(datos);

    return(
        <div>
            <Nav/>
            <div onClick={()=> setCount(count + 1) }>
                Número de clicks { count }
            </div>
            <br/>
            <div>
            desktop <input type="checkbox" onChange={() => setDeviceType('desktop')} checked={deviceType === 'desktop'} />
            <br/>
            mobile <input type="checkbox" onChange={() => setDeviceType('mobile')} checked={deviceType === 'mobile'} />
            </div>
            <label>{datos.nombre}</label>
            <button onClick={()=> setDatos({...datos, nombre: 'Alex'})}>Cambiar Nombre</button>
        </div>
    )
}

export default Hook;