import React from 'react';
import Vote from './Vote';
import { convertTime } from '../utils/utils';

function CommentCard({ comments, deleteComment }) {
  return (
    <ul className="comments-wrapper">
      {comments.map(({ created_at, comment_id, body, author, votes }) => {
        const convertedTime = convertTime(created_at);

        return (
          <li className="comment" key={comment_id}>
            <p>
              Posted by {author} on {convertedTime}
            </p>
            <p>{body}</p>
            {author === 'jessjelly' ? (
              <button
                onClick={() => {
                  deleteComment(comment_id);
                }}
              >
                delete comment
              </button>
            ) : (
              <Vote votes={votes} id={comment_id} item="comments" />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentCard;
