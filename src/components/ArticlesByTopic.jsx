import React, { Component } from 'react';
import { Ring } from 'react-awesome-spinners';
import ErrorDisplay from './ErrorDisplay';
import * as api from '../utils/api';
import { StyledArticles } from '../styled/articles';
import ArticleCard from './ArticleCard';
import Filters from './Filters';
class ArticlesByTopic extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };

  componentDidMount() {
    const { topic } = this.props;
    api
      .fetchArticlesByTopic(topic)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
      .catch((err) => {
        this.setState({ err, isLoading: false });
      });
  }
  componentDidUpdate(prevProps) {
    const newTopic = prevProps.topic !== this.props.topic;
    if (newTopic) {
      this.setState({ isLoading: true });
      api.fetchArticlesByTopic(this.props.topic).then((articles) => {
        this.setState({ articles, isLoading: false });
      });
    }
  }

  sortArticles = (sort) => {
    const { topic } = this.props;
    this.setState({ isLoading: true });

    api.fetchSortedArticlesByTopic(topic, sort).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  filterByAuthor = (author) => {
    this.setState({ isLoading: true });
    api.fetchFilteredArticles(author).then((articles) => {
      this.setState({ articles, isLoading: false });
    });
  };

  render() {
    const { articles, isLoading, err } = this.state;
    if (isLoading) return <Ring />;
    if (err) {
      const { response } = err;
      return <ErrorDisplay status={response.status} msg={response.data.msg} />;
    }

    return (
      <StyledArticles>
        <Filters sortArticles={this.sortArticles} />
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
                  filterByAuthor={this.filterByAuthor}
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
