import React from 'react';

const Comment = ({ user, postComment, item }) => {
  console.log(item.userID, 'item');
  return (
    <>
      {user && <button onClick={() => postComment(item._id)}> comment</button>}

      {item.comments.map((comment) => {
        // console.log(comment);
        return (
          <>
            <p key={comment._id}>
              {comment.userID.nickname} === {comment.text}
            </p>
          </>
        );
      })}
    </>
  );
};

export default Comment;
