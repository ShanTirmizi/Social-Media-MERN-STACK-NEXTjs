import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import Posting from '../components/PostComps/posting';
import Posts from '../components/PostComps/posts';
// import styles
import styles from '../styles/homepage.module.css';

export default function App() {
  const { user } = useUser();
  const [data, setData] = useState([]);
  const [userPost, setUserPost] = useState({
    title: '',
    description: '',
    userID: null,
  });
  const [userComment, setUserComment] = useState({
    text: '',
    userID: null,
    post: null,
  });
  const [userLikes, setUserLikes] = useState({
    userID: null,
    post: null,
  });
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:8000/posts').then((res) => {
      setData(res.data);
    });
  }, [data]);

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
  // Added like to a post
  const postLikes = async (id) => {
    await axios.post(`http://localhost:8000/posts/${id}/likes`, {
      userID: userLikes.userID,
      post: userLikes.post,
    });
  };
  const postLikesBefore = (id) => {
    setUserLikes({
      userID: user,
      post: id,
    });
    postLikes(id);
    // console.log(userLikes);
  };
  return (
    <div className={styles.container}>
      <div>
        <h1>Posts</h1>
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
        <Posting
          setUserPost={setUserPost}
          userPost={userPost}
          handleClick={handleClick}
          user={user}
        />

        <Posts
          data={data}
          setUserComment={setUserComment}
          userComment={userComment}
          user={user}
          postComment={postComment}
          postLikesBefore={postLikesBefore}
          setUserLikes={setUserLikes}
          userLikes={userLikes}
        />
      </div>
    </div>
  );
}
