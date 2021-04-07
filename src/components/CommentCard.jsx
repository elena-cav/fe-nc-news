import React from 'react';

import VoteComment from './VoteComment';
import * as api from '../utils/api';
import { convertTime } from '../utils/utils';

function CommentCard({ comments }) {
  return (
    <ul className='comments-wrapper'>
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
                  api.deleteComment(comment_id);
                }}
              >
                delete comment
              </button>
            ) : (
              <VoteComment votes={votes} comment_id={comment_id} />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default CommentCard;
