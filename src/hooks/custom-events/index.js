import React, { useCallback } from 'react';
import useTabStatus from './useTabStatus';
import useWindowsSize from './useWindowsSize';
import useUrlHash from './useUrlHash';
import useEvent from './useEvent';

const App = () => {

    const { hasFocus } = useTabStatus();
    const { width ,height } = useWindowsSize();
    const { hash } = useUrlHash();

    const onResize = useCallback(() => {
        console.log('resize', hash);
    }, []);

    useEvent('resize', onResize);

    return (
        <div>
            <h1>Verificar focus</h1>
            {
                <p>windows está en focus  { hasFocus ? 'yes' : 'no'}</p>
            }
            <br/>
            <h1>Windows size</h1>
            <p>{ `width :  ${width} height : ${height}` }</p>
            <br/>
            <h1>Hash</h1>
            <p>{ hash }</p>
        </div>
    )
}

export default App;