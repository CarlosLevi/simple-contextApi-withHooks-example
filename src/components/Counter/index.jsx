import React from 'react';
import { useCount } from '../../context/Count';

const Counter = () => {
    const { count, setCount } = useCount();

    return(
        <div>
            <b>Counter: {count}</b>

            <br />

            <button type="button" onClick={() =>{
                setCount(count + 1);
            }}>+</button>
        </div>
    );
}

export default Counter;