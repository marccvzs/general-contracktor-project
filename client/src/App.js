import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    fetch('/hello')
    .then(r => r.json())
    .then(data => setCount(data.count));
  }, []);

  return (
    <h1 className="text-3xl text-lime-500 font-bold underline">
      Page Count: {count}
    </h1>
  );
}

export default App;
