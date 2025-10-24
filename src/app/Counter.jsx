'use client';
import {useState} from 'react';
export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Current Sales Count: {count}</p>
            <button id="add-button" onClick={() => setCount(count + 1)}>Add Sale</button>
            <br></br>
            <button id="delete-button" onClick={() => setCount(count - 1)}>Delete Sale</button>
        </div>
    
    );

}