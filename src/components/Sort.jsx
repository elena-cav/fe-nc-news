import React from 'react';
import { ReactComponent as Heart } from '../images/heart-solid.svg';
import { ReactComponent as Clock } from '../images/clock-solid.svg';
import { ReactComponent as Comment } from '../images/comment-solid.svg';

function Sort({ sortArticles }) {
  return (
    <>
    <h4>Sort by</h4>
      <section className="filters">
        <ul>
          <li>
            <button
              onClick={() => {
                sortArticles('created_at');
              }}
            >
              <Clock /> Date created
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button
              onClick={() => {
                sortArticles('comment_count');
              }}
            >
              <Comment /> Comments
            </button>
          </li>
        </ul>
        <ul>
          <li>
            <button
              onClick={() => {
                sortArticles('votes');
              }}
            >
              <Heart /> Votes
            </button>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Sort;
