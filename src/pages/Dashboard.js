import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

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
    props.topics ? loaded() : loading())
}

export default Dashboard