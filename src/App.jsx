
import React, { Suspense, useDeferredValue, useEffect, useState, lazy } from 'react';
import './App.css'
import Progress from './progress/Progress'
import InputFocus from './progress/InputFocus';

const Parent = lazy(() => import("./progress/Parent"));
const Child = lazy(() => import('./progress/Child'));
function App() {
 

  const [data, setData] = useState("");

  const oldData = useDeferredValue(data);

  console.log(oldData);
  
  return (
    <div className='App'>
        {/* <InputFocus />  */}
      <Suspense fallback="loading......">
        
          {!oldData && <Parent />}
          {oldData && <Child />}
        
      </Suspense>
      <button onClick={()=> setData("1")}>Trying to update</button>
       
    </div>
  )
}

export default App
