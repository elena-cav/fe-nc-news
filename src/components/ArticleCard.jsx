import React from 'react';
import { StyledArticleCard } from '../styled/articleCard';
import { Link } from '@reach/router';
import Vote from './Vote';
import { convertTime } from '../utils/utils';
import { ReactComponent as Star } from '../images/asterisk-solid.svg';

function ArticleCard({
  author,
  title,
  topic,
  created_at,
  votes,
  article_id,
  comment_count,
  filterByAuthor,
  deleteArticle
}) {
  const convertedTime = convertTime(created_at);

  return (
    <StyledArticleCard>
      <span className="author-date">
        <p>Posted by </p>
        <Link to={`?author=${author}`}>
          <button
            className="author"
            onClick={() => {
              filterByAuthor(author);
            }}
          >
            {author}
          </button>
        </Link>
        <p>on {convertedTime}</p>
      </span>
      <span className="topic">
        <Star />

        <Link key={topic} to={`/${topic}/articles`}>
          {topic}
        </Link>
      </span>
      <Link key={article_id} to={`/articles/${article_id}`}>
        <h3>{title}</h3>
        {comment_count} comments
      </Link>
      {author === 'jessjelly' ? (
        <button
          onClick={() => {
            deleteArticle(article_id);
          }}
        >
          delete article
        </button>
      ) : (
        <Vote item="articles" votes={votes} id={article_id} />
      )}
    </StyledArticleCard>
  );
}

export default ArticleCard;
