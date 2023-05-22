import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Flashcard = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const cards = props.cards

    const card = cards ? cards.find((c) => c._id === id ) : null
  
    const [ editForm, setEditForm ] = useState(card)
  
    const [ isEditing, setIsEditing ] = useState(false)
  
    useEffect(()=>{
      if (card) {
          setEditForm(card)
      }
    },[card])

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
    props.updateCards(editForm, card._id)
    setIsEditing(false)
  }

  const handleEdit = () => {
    setIsEditing(prevState => !prevState)
  }

  const handleDelete = () => {
    props.deleteCards(card._id)
    navigate('/cards')
  }

  const loaded = () => {
    return (
        <>
        <div className='show-card'>
            <h1>{card.front}</h1>
            <h1>{card.back}</h1>
        </div>
        <div className='show-card-btns'>
            <button onClick={handleEdit} className="form-btn">{ isEditing ? 'Cancel Edit' : 'Edit'}</button>
            <button onClick={handleDelete} className="form-btn">Delete</button>
        </div>
        </>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <div className="card-show-page">
      <div className="show-topic-form">
      { isEditing &&
      <form onSubmit={handleUpdate}>
        <input
          type="text"
          value={editForm.topic}
          name="topic"
          placeholder="topic"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.front}
          name="front"
          placeholder="front"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={editForm.back}
          name="back"
          placeholder="back"
          onChange={handleChange}
          className="form-input"
        />
        <input type="submit" value="Update Flashcard" className="form-btn"/>
      </form>
    }
    </div>
    { card ? loaded() : loading() }
    </div>
  )
}

export default Flashcard