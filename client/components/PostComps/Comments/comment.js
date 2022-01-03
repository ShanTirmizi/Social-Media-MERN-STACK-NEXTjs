import React from 'react';

const Comment = ({ postComment, item }) => {
  return (
    <>
      <button onClick={() => postComment(item._id)}> comment</button>
      {item.comments.map((comment) => {
        console.log(comment);
        return (
          <>
            <p key={comment._id}> comment = {comment.text}</p>
          </>
        );
      })}
    </>
  );
};

export default Comment;
