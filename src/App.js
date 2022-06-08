import { useState } from 'react';
import './App.css';
import Child from './Component/Child';
import {ContextProvider} from "./Component/TransContext"

function App() {
 
   return (
    <div className="App">
  <ContextProvider>
     <Child />
     </ContextProvider> 
    </div>
  );
}

export default App;
