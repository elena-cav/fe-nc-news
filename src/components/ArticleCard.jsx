import React, { Component } from 'react';
import { StyledArticleCard } from '../styled/articleCard';
import { Link } from '@reach/router';
import VoteArticle from './VoteArticle'
import * as api from '../utils/api';
import {convertTime} from '../utils/utils'

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

      const convertedTime = convertTime(created_at)

    return (
      <StyledArticleCard>
        <p className='author-date'>Posted by<p className='author' onClick={() => {filterByAuthor(author)}}>{' '}{author}</p>on {convertedTime}</p>
        <h3>{title}</h3>
        <h4>{topic}</h4>
        <Link key={article_id} to={`/articles/${article_id}`}>
          {comment_count} comments
        </Link>
        { author  === 'jessjelly' ? <button onClick={() => {api.deleteArticle(article_id)}}>delete article</button>
        :<VoteArticle votes={votes} article_id={article_id} />}
                
        
      </StyledArticleCard>
    );
  }
}

export default ArticleCard;
