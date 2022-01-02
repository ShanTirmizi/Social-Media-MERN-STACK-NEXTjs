import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState([]);
  const [userPost, setUserPost] = useState({
    title: '',
    description: '',
  });
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, [data]);

  // useEffect(() => {
  //   axios.post('http://localhost:8000/posts', {
  //     title: userPost.title,
  //     description: userPost.description,
  //   });
  // });
  const handleClick = (e) => {
    axios.post('http://localhost:8000/posts', {
      title: userPost.title,
      description: userPost.description,
    });
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setUserPost({
            ...userPost,
            title: e.target.value,
          });
        }}
      />
      <input
        type="text"
        onChange={(e) => {
          setUserPost({
            ...userPost,
            description: e.target.value,
          });
        }}
      />
      <button onClick={handleClick}>Submit</button>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}
    </>
  );
}
