import React from 'react'
import { Link } from 'react-router-dom';

const Archives = (props) => {

    const loaded = () => {
        return props.topics.map((topic) => (
          <>
            {topic.archived ? 
              <div key={topic._id} className="topic">
                <div className='topic-name'>
                    <Link to={`/topics/${topic._id}`}className='topic-link'><h1>{topic.name}</h1></Link>
                </div>
                <div className='topic-description'>
                    <h2><em>{topic.description}</em></h2>
                </div>
            </div> : null
          }</>
        ));
      };
    
      const loading = () => {
        return <h1>Loading...</h1>;
      };
    
      return (
        <section className='archived-topics'>
          {props.topics ? loaded() : loading()}
        </section>
      );
}

export default Archives