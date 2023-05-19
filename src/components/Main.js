import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Topic from '../pages/Topic'
import Welcome from '../pages/Welcome'

const Main = (props) => {
    const [topics, setTopics] = useState(null)
    const URL="http://localhost:4000/topics"

    const getTopics = async () => {
        if(!props.user) return;
        const token = await props.user.getIdToken()

        const response = await fetch(URL, {
            method:'GET',
            headers: {
                'Authorization': 'Bearer ' + token
            }
        })
        const data = await response.json()
        setTopics(data)
    }

    const createTopics = async (topic) => {
        if(!props.user) return;
        const token = await props.user.getIdToken()
        await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(topic), 
        })
        getTopics()
    }

    const updateTopics = async (topic, id) => {
        if(!props.user) return;
        const token = await props.user.getIdToken()
        await fetch(URL + id, {
            method: "PUT",
            headers: {
                "Content-Type": "Application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify(topic), 
        })
        getTopics()
    }

    const deleteTopics = async id => {
        if(!props.user) return;
        const token = await props.user.getIdToken()
        await fetch(URL + id, {
          method: "DELETE",
          headers:  {
            'Authorization': 'Bearer ' + token
          }
        })
        getTopics();
      }

    useEffect(()=> {
        if(props.user) {
            getTopics()
        } else {
            setTopics(null)
        }
        }, [props.user])

  return (
    <div>
        <Routes>
            <Route path='/' element={<Welcome topics={topics}/>} />
            <Route path='/topics' element={<Dashboard
             topics={topics} getTopics={getTopics} createTopics={createTopics}
             updateTopics={updateTopics} deleteTopics={deleteTopics}/>} />
            <Route path='/topics/:id' element={<Topic
             topics={topics} updateTopics={updateTopics} deleteTopics={deleteTopics}/>} />
        </Routes>
    </div>
  )
}

export default Main