import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const CardDashboard = (props) => {

    const [newCardForm, setCardForm] = useState({
        front: "",
        back: "",
    })

    const handleChange = (evt) => {
        setCardForm({ ...newCardForm, [evt.target.name]: evt.target.value})
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
    return props.cards.map((card) => (
        <div key={card._id} className="card">
            <div className='card-front'>
              <p>{card.front}</p>
            </div>
            <div className='card-back'>
              <p>{card.back}</p>
            </div>
        </div>
    ));
    
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newCardForm.front}
          name="front"
          placeholder="front"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newCardForm.back}
          name="back"
          placeholder="back"
          onChange={handleChange}
        />
        <input type="submit" value="Add Flashcard" />
      </form>
      {props.cards ? loaded() : loading()}
    </section>
  );
}

export default CardDashboard