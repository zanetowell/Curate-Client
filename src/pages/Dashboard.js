import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

    const [newForm, setNewForm] = useState({
        name: "",
        icon: "",
        description: "",
    })

    const handleChange = (evt) => {
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value.toUpperCase()})
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        props.createTopics(newForm)
        setNewForm({
            name: "",
            icon: "",
            description: "",
        })
    }

    const [isAdding, setIsAdding] = useState(false)

    const handleAdd = () => {
      setIsAdding(prevState => !prevState)
    }

  // loaded function
  const loaded = () => {
    return props.topics.map((topic) => (
        <div key={topic._id} className="topic">
            <div className='topic-name'>
                <Link to={`/topics/${topic._id}`}className='topic-link'><h1>{topic.name}</h1></Link>
            </div>
            <div className='topic-description'>
                <h2><em>{topic.description}</em></h2>
            </div>
        </div>
    ));
    
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

  return (
    <section>
      <button onClick={handleAdd} className='add-topic-toggle'>{ isAdding ? 'Cancel Creation' : 'Create'}</button>
      {isAdding &&
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
          className="form-input"
        />
        <input type="submit" value="Add Topic" className="form-btn"/>
      </form>
      }
      <div className='dashboard-headers'>
        <div className='dash-header-dividers'>
          <h1 className='topics-header'>Topics</h1>
        </div>
        <div className='dash-header-dividers'>
          <h1 className='topics-desc-header'>Descriptions</h1>
        </div>
      </div>
      {props.topics ? loaded() : loading()}
    </section>
  );
}

export default Dashboard