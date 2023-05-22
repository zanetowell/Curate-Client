import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = (props) => {
    const cards = props.cards
  return (
    <div className='sidebar'>
        <div className='create-card-link'>
            <Link to={`/cards`}className='card-link' cards={cards}><h2>Create a Flashcard</h2></Link>
        </div>
    </div>
  )
}

export default Sidebar