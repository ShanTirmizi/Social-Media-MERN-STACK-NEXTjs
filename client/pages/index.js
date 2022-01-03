import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';

export default function App() {
  const { user } = useUser();
  // console.log(user);
  const [data, setData] = useState([]);
  const [userPost, setUserPost] = useState({
    title: '',
    description: '',
    userID: null,
  });
  const [userComment, setUserComment] = useState({
    text: '',
    userID: null,
    // date: null,
    post: null,
  });
  // console.log(userPost);
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((res) => {
      // console.log(res.data);
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
      userID: userPost.userID,
    });
  };
  const postComment = async (id) => {
    await axios.post(`http://localhost:8000/posts/${id}/comments`, {
      text: userComment.text,
      userID: userComment.userID,
      post: userComment.post,
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
      {user && (
        <>
          <input
            type="text"
            onChange={(e) => {
              setUserPost({
                ...userPost,
                title: e.target.value,
                userID: user,
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
        </>
      )}

      <button onClick={handleClick}>Submit</button>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <input
              type="text"
              onChange={(e) => {
                setUserComment({
                  ...userComment,
                  text: e.target.value,
                  userID: user,
                  post: item._id,
                });
              }}
            />
            <button onClick={() => postComment(item._id)}> comment</button>
            {item.comments.map((comment) => {
              console.log(comment);
              return (
                <>
                  <p key={comment._id}> comment = {comment.text}</p>
                </>
              );
            })}
            {/* <p>{item.}</p> */}
          </div>
        );
      })}
    </>
  );
}
