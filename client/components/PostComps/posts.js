import React from 'react';
import Comment from './Comments/comment';

const Posts = ({ data, setUserComment, userComment, user, postComment }) => {
  return (
    <>
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

            <Comment postComment={postComment} item={item} />
          </div>
        );
      })}
    </>
  );
};

export default Posts;
