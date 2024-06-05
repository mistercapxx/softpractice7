import React, { useState, useEffect } from 'react';
export default function App() {

  const [appData, setInputValue] = useState('');
  useEffect(() => {
    const storedValue = localStorage.getItem('appData');
if(storedValue)
setInputValue(storedValue);
 
  }, []);
  
const handleChanges = (event) => {
setInputValue(event.target.value)
}

  return (
    <div>
      React Marathon, appData: <input size='5' value={appData} onChange={handleChanges}></input>
    </div>
  );
}
