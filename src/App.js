import './App.css';
import Nav from './components/Nav';
import Dashboard from './pages/Dashboard';
import Welcome from './pages/Welcome';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import { auth } from './services/firebase'


function App() {
  const [ user, setUser ] = useState(null)

  useEffect(()=> {
    const unsubscribe = auth.onAuthStateChanged(user => setUser(user))
    return () => {
      unsubscribe()
    }
  }, [])



  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;
