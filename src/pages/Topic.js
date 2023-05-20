import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Topic = (props) => {
    const { id } = useParams()
    const navigate = useNavigate()
    const topics = props.topics
    
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

  const loaded = () => {
    return (
      <>
        <h1>{topic.name}</h1>
        <h2>{topic.description}</h2>
        <br />
        <button onClick={handleEdit}>{ isEditing ? 'Cancel Edit' : 'Edit'}</button>
        <button onClick={handleDelete}>Delete</button>
      </>
    );
  };
  const loading = () => {
    return <h1>Loading ...</h1>;
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