import React, { Component } from 'react';
import { StyledArticleCard } from '../styled/articleCard';
import { Link } from '@reach/router';

class ArticleCard extends Component {
  state = {};

  render() {
    const {
      author,
      title,
      body,
      topic,
      created_at,
      votes,
      article_id,
      comment_count
    } = this.props;
    return (
      <StyledArticleCard>
        <p>
          posted by {author} at {created_at}
        </p>
        <h3>{title}</h3>
        <h4>{topic}</h4>
        <p>{body}</p>
        <p>{votes}</p>
        <Link key={article_id} to={`/articles/${article_id}`}>
          {comment_count} comments
        </Link>
      </StyledArticleCard>
    );
  }
}

export default ArticleCard;
