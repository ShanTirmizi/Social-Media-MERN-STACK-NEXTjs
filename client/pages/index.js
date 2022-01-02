import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function App() {
  const { user } = useUser();
  console.log(user);
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
      <h1>Posts</h1>
      {/* {user ? (
        <Link href="/api/auth/logout">
          <button>logout</button>
        </Link>
      ) : (
        <Link href="/api/auth/login">
          <button>login</button>
        </Link>
      )} */}
      {user && (
        <Link href="/api/auth/logout">
          <button>logout</button>
        </Link>
      )}
      {!user && (
        <Link href="/api/auth/login">
          <button>login</button>
        </Link>
      )}

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
