'use client';
import {useState} from 'react';
export default function Counter({initialCount=0, initialStep=1}) {
    const [count, setCount] = useState(initialCount);
    const [step, setStep] = useState(initialStep);

 
    return (
        <div>
            <p aria-live="polite">Current Sales Count: {count}</p>
            <button id="add-button" onClick={() => setCount(count + step)}>Add Sale</button><br />
            
            <button id="delete-button" onClick={() => setCount(count - step)} disabled={count-step <0}>Delete Sale</button><br />
            
            <button id="reset-button" onClick={() => setCount(0)}>Reset Sale</button><br />
           
            <label> 
                Step: 
                <input type="number" value={step} onChange={(e) => setStep(Math.max(1, Number(e.target.value)))} />
            </label>
        </div>
    );
    
}
