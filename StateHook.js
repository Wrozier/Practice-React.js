import React, { useState } from 'react';

function Example(){
    //Declare a new variable, which we'll call "count"
    
    const [count, setCount] = useState(0);
///useState is considered a Hook
///its used to call a function component to add some 
///
    return(
        <div>
            <p> You cilcked { count } times </p>
            <button onClick={() => setCount(count + 1)}>
                Click me 
            </button>
        </div>
    );
}