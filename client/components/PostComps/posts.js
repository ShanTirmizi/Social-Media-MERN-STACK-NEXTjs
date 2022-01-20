import React from 'react';
import Comment from './Comments/comment';
import Like from './Likes/like';

const Posts = ({
  data,
  setUserComment,
  userComment,
  user,
  postComment,
  postLikesBefore,
  userLikes,
  setUserLikes,
}) => {
  return (
    <>
      {data.map((item) => {
        return (
          <div key={item._id}>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            {user && (
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
            )}

            {/* <h1>{item.likesCount}</h1> */}
            {user && (
              <Like
                item={item}
                postLikesBefore={postLikesBefore}
                setUserLikes={setUserLikes}
                userLikes={userLikes}
              />
            )}

            <Comment user={user} postComment={postComment} item={item} />
          </div>
        );
      })}
    </>
  );
};

export default Posts;
