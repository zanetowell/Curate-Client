import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { auth } from './services/firebase'
import Lofi from './components/Lofi';



function App() {
  const [ user, setUser ] = useState(null)

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
    console.log(user);
    return () => {
      unsubscribe()
    }
  }, [])



  return (
    <div className="App">
      <Nav user={user}/>
      <Lofi />
      <Main user={user}/>
    </div>
  );
}

export default App;
