import React, {useState, useEffect} from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import CardDashboard from '../pages/CardDashboard'
import Topic from '../pages/Topic'
import Welcome from '../pages/Welcome'
import Flashcard from '../pages/Flashcard'

const Main = (props) => {
    const [topics, setTopics] = useState(null)
    const topicsURL="http://localhost:4000/topics/"

    const getTopics = async () => {
        if(!props.user) return;
        const token = await props.user.getIdToken()

        const response = await fetch(topicsURL, {
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
        await fetch(topicsURL, {
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
        await fetch(topicsURL + id, {
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
        await fetch(topicsURL + id, {
          method: "DELETE",
          headers:  {
            'Authorization': 'Bearer ' + token
          }
        })
        getTopics();
      }

    


//////////////////////////////////////////
// Flashcard functions
/////////////////////////////////////////

    const [cards, setCards] = useState(null)
    const cardsURL="http://localhost:4000/cards/"

        const getCards = async () => {
            if(!props.user) return;
            const token = await props.user.getIdToken()
            const response = await fetch(cardsURL, {
                method:'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            })
            const data = await response.json()
            setCards(data)
        }
    
        const createCards = async (card) => {
            if(!props.user) return;
            const token = await props.user.getIdToken()
            await fetch(cardsURL, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json",
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(card), 
            })
            getCards()
        }
    
        const updateCards = async (card, id) => {
            if(!props.user) return;
            const token = await props.user.getIdToken()
            await fetch(cardsURL + id, {
                method: "PUT",
                headers: {
                    "Content-Type": "Application/json",
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(card), 
            })
            getCards()
        }
        
        const deleteCards = async id => {
            if(!props.user) return;
            const token = await props.user.getIdToken()
            await fetch(cardsURL + id, {
              method: "DELETE",
              headers:  {
                'Authorization': 'Bearer ' + token
              }
            })
            getCards();
          }

          useEffect(()=> {
            if(props.user) {
                getTopics()
                getCards()
            } else {
                setTopics(null)
                getCards(null)
            }
            }, [props.user])

  return (
    <div>
        <Routes>
            <Route path='/' element={<Welcome topics={topics}/>} />
            <Route path='/topics' element={<Dashboard topics={topics} getTopics={getTopics} createTopics={createTopics} updateTopics={updateTopics} deleteTopics={deleteTopics}
            />} />
            <Route path='/topics/:id' element={<Topic
             topics={topics} updateTopics={updateTopics} deleteTopics={deleteTopics}
             cards={cards} getCards={getCards} createCards={createCards} updateCards={updateCards} deleteCards={deleteCards}
             />} />
             <Route path='/cards' element={<CardDashboard 
             cards={cards} getCards={getCards} createCards={createCards} updateCards={updateCards} deleteCards={deleteCards} topics={topics}
             />} />
             <Route path='/cards/:id' element={<Flashcard 
             cards={cards} getCards={getCards} createCards={createCards} updateCards={updateCards} deleteCards={deleteCards}
             />} />
        </Routes>
    </div>
  )
}

export default Main