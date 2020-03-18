import React, { useState, useEffect } from 'react';
import useApi from './useApi';
import Nav from '../../layout/Nav';

function App(){
    // const { response, error, isLoading } = useApi('http://localhost:2222/orders' + Math.random()); //para generar error
    const { response, error, isLoading, refetch } = useApi('http://localhost:2222/orders');
    const [ count, setCount ] = useState(0);
    console.log(response, error, isLoading);

    // setInterval(() => setCount(count + 1), 3000);

    if(isLoading){
        return <h1>Loading ...</h1>
    }

    const onRefetch = () => {
        refetch();
    }

    return (
        <div>
            <Nav />
            <div onClick={() => setCount(count + 1)}>
                { error &&
                    <div>
                        <h1>Error</h1>
                        <p>{error}</p>
                    </div>
                }
                { response && 
                    <div>
                        <h1>Data</h1>
                        <ul>
                            {response.map((order) => (
                                <li key={order.id}>{order.name}</li>
                            ))}
                        </ul>
                    </div>
                }
                <button onClick={onRefetch}>Refetch</button>
            </div>
        </div>
    )
}

export default App;