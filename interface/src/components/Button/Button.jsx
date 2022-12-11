import { useState } from 'react';

const Button = () => {
    const [click, setClick] = useState(0)

    function increment(){
        setClick(click + 1)
    }

    function decrement(){
        setClick(click - 1)
    }

    return(
        <div>
            <h1>{click}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}

export default Button