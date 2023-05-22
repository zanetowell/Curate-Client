import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Sidebar from '../components/Sidebar'

const Topic = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const topics = props.topics
    const cards = props.cards
    
    const topic = topics ? topics.find((t) => t._id === id ) : null
  
    const [ editForm, setEditForm ] = useState(topic)
  
    const [ isEditing, setIsEditing ] = useState(false)
  
    const [ isToggled, setIsToggled ] = useState(false)

    useEffect(()=>{
      if (topic) {
          setEditForm(topic)
      }
    },[topic])

  // handling form data change
  const handleChange = (e) => {
    setEditForm( {
      ...editForm,
     [e.target.name]: e.target.value.toLowerCase() 
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
    navigate('/topics')
  }

  const handleToggle = () => {
    setIsToggled(prevState => !prevState)
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
        <div className='top-topic'>
          <h1 className='topic-show-title'>{topic.name}</h1>
            <div className='welcome-divider'></div>
          <h2 className='topic-show-desc'>{topic.description}</h2>
        </div>
        <br />
        <button onClick={handleEdit} className="form-btn" id='topic-edit-btn'>{ isEditing ? 'Cancel Edit' : 'Edit'}</button>
        <button onClick={handleDelete} className="form-btn" id='topic-del-btn'>Delete</button>
        <div className='study-materials-list'>
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
      <div className="show-topic-form">
      { isEditing &&
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.icon}
          name="icon"
          placeholder="icon"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
          className="form-input"
        />
        <label className='archive-btn'>archive?
        <input
        type='checkbox'
        name='archived'
        placeholder='archived'
        onClick={handleToggle}
        checked={isToggled ? topic.archived = true : topic.archived = false}
        />
        </label>
        <input type="submit" value="Update Topic" className="form-btn"/>
      </form>
    }
      </div>
      { topic ? loaded() : loading() }
      <Sidebar cards={cards}/>
    </div>
  )
}

export default Topic