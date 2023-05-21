import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Topic = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const topics = props.topics
    const cards = props.cards

    const topic = topics ? topics.find((t) => t._id === id ) : null
  
    const [ editForm, setEditForm ] = useState(topic)
  
    const [ isEditing, setIsEditing ] = useState(false)
  
    useEffect(()=>{
      if (topic) {
          setEditForm(topic)
      }
    },[topic])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( {
      ...editForm,
     [e.target.name]: e.target.value 
    })
  }
  
  // handling submit event for edit form
  const handleUpdate = (e) => {
    e.preventDefault()
    props.updateTopics(editForm, topic._id)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteTopics(topic._id)
    navigate('/')
  }


  const cardsLoaded = () => {
    return props.cards.map((card) => (
        <div key={card._id} className='topic-cards-list'>
            { card.topic === topic.name ?
        <div className="topic-card">
            <div className='card-front'>
                <h2>{card.front}</h2>
            </div>
            <div className='card-back'>
                <h2>{card.back}</h2>
            </div>
        </div> : null }
        </div>
    ));
  };

  const cardsLoading = () => {
    return <h1>Loading Cards...</h1>;
  };

  const loaded = () => {
    return (
      <>
        <h1>{topic.name}</h1>
        <h2>{topic.description}</h2>
        <br />
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit' : 'Edit'}</button>
        <button onClick={handleDelete}>Delete</button>
        <div className='study-materials-list'>
            <div className='create-card-link'>
                <Link to={`/cards`}className='card-link' cards={cards}><h2>Create a Flashcard</h2></Link>
            </div>
        { props.cards ? cardsLoaded() : cardsLoading() }
        </div>
      </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="show-topic">
      { topic ? loaded() : loading() }
      { isEditing &&
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.icon}
          name="icon"
          placeholder="icon"
          onChange={handleChange}
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Update Topic" />
      </form>
    }
    </div>
  )
}

export default Topic