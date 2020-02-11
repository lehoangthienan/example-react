import React, { useState, useEffect } from "react";

import HomePageContext from '../../context/homePage'
import Test from '../../components/Test'

const Content = () => {
  const [users, setUsers] = useState([]);
  const { posts } = React.useContext(HomePageContext);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
      });
  }, []);

  return (
    <div className="section">
      <Test />
      {users.map(user => (
        <div key={user.id} className="card">
          <h5>{user.login}</h5>
        </div>
      ))}
      {
        posts.map(post =>
          <div key={post._id} className="card">
            <h5>{post.content}</h5>
          </div>
        )
      }
    </div>
  );
}

export default Content
