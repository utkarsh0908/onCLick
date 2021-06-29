import React, { useState } from 'react';



const App = () =>{
  
    const [count, setCount] = useState(0);
    
    let Inc = () => {
      setCount(count + 1);
    };
    return(
    <div className="main">
    <h1>{count}</h1>
    <button onClick = {Inc} >Click</button>
    </div>
  );
};

export default App;


