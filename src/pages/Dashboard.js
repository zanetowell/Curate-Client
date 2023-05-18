import React, {useState} from 'react'
import { Link } from 'react-router-dom';

const Dashboard = (props) => {

  // loaded function
  const loaded = () => {
    return props.topics.map((topic) => (
      <div key={topic._id} className="topic">
        <Link to={`/topics/${topic._id}`}><h1>{topic.name}</h1></Link>
        <h3>{topic.description}</h3>
      </div>
    ));
  };

  const loading = () => {
    return <h1>Loading...</h1>;
  };

return props.topics ? loaded() : loading()
}

export default Dashboard