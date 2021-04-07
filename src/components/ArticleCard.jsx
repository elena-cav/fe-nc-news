import React, { Component } from 'react';
import { ReactComponent as Star } from '../images/asterisk-solid.svg';

import { StyledArticleCard } from '../styled/articleCard';
import { Link } from '@reach/router';
import VoteArticle from './VoteArticle';
import * as api from '../utils/api';
import { convertTime } from '../utils/utils';

class ArticleCard extends Component {
  state = {};

  render() {
    const {
      author,
      title,
      topic,
      created_at,
      votes,
      article_id,
      comment_count,
      filterByAuthor
    } = this.props;

    const convertedTime = convertTime(created_at);

    return (
      <StyledArticleCard>
        <span className="author-date">
          <p>Posted by </p>
          <p
            className="author"
            onClick={() => {
              filterByAuthor(author);
            }}
          >
            {' '}
            {author}
          </p>
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
              api.deleteArticle(article_id);
            }}
          >
            delete article
          </button>
        ) : (
          <VoteArticle votes={votes} article_id={article_id} />
        )}
      </StyledArticleCard>
    );
  }
}

export default ArticleCard;
