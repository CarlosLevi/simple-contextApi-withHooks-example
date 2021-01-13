import React from 'react';
import { useCount } from '../../context/Count';

const CounterMirror = () => {
    const { count } = useCount();

    return(
        <div>
            <b>Mirror: {count}</b>
        </div>
    );
}

export default CounterMirror;