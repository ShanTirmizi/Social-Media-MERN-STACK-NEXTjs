import React from 'react';

const Posting = ({ setUserPost, userPost, handleClick, user }) => {
  return (
    <>
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
          <button onClick={handleClick}>Submit</button>
        </>
      )}
    </>
  );
};

export default Posting;
