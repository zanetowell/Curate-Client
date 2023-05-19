import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

    const [newForm, setNewForm] = useState({
        name: "",
        icon: "",
        description: "",
    })

    const handleChange = (evt) => {
        setNewForm({ ...newForm, [evt.target.name]: evt.target.value})
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

  // loaded function
  const loaded = () => {
    return props.topics.map((topic) => (
        <div key={topic._id} className="topic">
            <div className='topic-name'>
                <Link to={`/topics/${topic._id}`}className='topic-link'><h1>{topic.name}</h1></Link>
            </div>
            <div className='topic-description'>
                <h3><em>{topic.description}</em></h3>
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
          value={newForm.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.icon}
          name="icon"
          placeholder="icon"
          onChange={handleChange}
        />
        <input
          type="text"
          value={newForm.description}
          name="description"
          placeholder="description"
          onChange={handleChange}
        />
        <input type="submit" value="Add Topic" />
      </form>
      {props.topics ? loaded() : loading()}
    </section>
  );
}

export default Dashboard