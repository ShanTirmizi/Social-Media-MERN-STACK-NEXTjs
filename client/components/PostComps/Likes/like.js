import React from 'react';

const Like = ({ item, userLikes, setUserLikes, postLikesBefore }) => {
  return (
    <>
      <h1>{item.likesCount}</h1>
      <button onClick={() => postLikesBefore(item._id)}>like</button>
    </>
  );
};

export default Like;
