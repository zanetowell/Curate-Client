import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const CardDashboard = (props) => {

    const [newCardForm, setCardForm] = useState({
        front: "",
        back: "",
    })

    const handleChange = (evt) => {
        setCardForm({ ...newCardForm, [evt.target.name]: evt.target.value.toLowerCase()})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.createCards(newCardForm)
        setCardForm({
            front: "",
            back: "",
        })
    }

  // loaded function
  const loaded = () => {
    return (
      <div className='card-list'>
      {props.cards.map((card) => (
        <div key={card._id} className="flashcard">
          <Link to={`/cards/${card._id}`} className='card-list-links'>
            <div>
              <p className='card-dashboard-front'>{card.front}</p>
            </div>
            <div>
              <p className='card-dashboard-back'>{card.back}</p>
            </div>
            </Link>
        </div>
    ))}
    </div>
    )
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newCardForm.topic}
          name="topic"
          placeholder="topic"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newCardForm.front}
          name="front"
          placeholder="front"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newCardForm.back}
          name="back"
          placeholder="back"
          onChange={handleChange}
          className="form-input"
        />
        <input type="submit" value="Add Flashcard" className="form-btn"/>
      </form>
      {props.cards ? loaded() : loading()}
    </section>
  );
}

export default CardDashboard