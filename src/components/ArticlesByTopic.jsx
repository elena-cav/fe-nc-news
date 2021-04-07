import React, { Component } from 'react';

import * as api from '../utils/api';
import { StyledArticles } from '../styled/articles';
import ArticleCard from './ArticleCard';
class ArticlesByTopic extends Component {
  state = {
    articles: []
  };

  componentDidMount() {
    const { topic } = this.props;
    api.fetchArticlesByTopic(topic).then((articles) => {
      this.setState({ articles });
    });
  }
  componentDidUpdate(prevProps) {
    const newTopic = prevProps.topic !== this.props.topic;
    if (newTopic) {
      api.fetchArticlesByTopic(this.props.topic).then((articles) => {
        this.setState({ articles });
      });
    }
  }

  sortArticles = (sort) => {
    const { topic } = this.props;
    api.fetchSortedArticlesByTopic(topic, sort).then((articles) => {
      this.setState({ articles });
    });
  };

  render() {
    const { articles } = this.state;
    return (
      <StyledArticles>
        <h3>Sort by</h3>

        <section className="filters">
          <ul>
            <li>
              <button
                onClick={() => {
                  this.sortArticles('created_at');
                }}
              >
                Date created
              </button>
            </li>
          </ul>
          <ul>
            <li>
              <button  onClick={() => {
                  this.sortArticles('comment_count');
                }}>Comments</button>
            </li>
          </ul>
          <ul>
            <li>
              <button onClick={() => {
                  this.sortArticles('votes');
                }}>Votes</button>
            </li>
          </ul>
        </section>
        <ul>
          {articles.map(
            ({
              article_id,
              title,
              body,
              votes,
              topic,
              author,
              created_at,
              comment_count
            }) => {
              return (
                <ArticleCard
                topic={topic}
                  created_at={created_at}
                  key={article_id}
                  author={author}
                  title={title}
                  body={body}
                  votes={votes}
                  article_id={article_id}
                  comment_count={comment_count}
                />
              );
            }
          )}
        </ul>
      </StyledArticles>
    );
  }
}
export default ArticlesByTopic;
