import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Welcome from '../pages/Welcome'

const Main = (props) => {
    const [topics, setTopics] = useState(null)
    const URL="http://localhost:4000/topics"

    const getTopics = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        setTopics(data)
        console.log(data);
    }

    useEffect(()=> {getTopics()}, [])

  return (
    <div>
        <Routes>
            <Route path='/' element={<Welcome topics={topics}/>} />
            <Route path='/topics' element={<Dashboard topics={topics}/>} />
        </Routes>
    </div>
  )
}

export default Main