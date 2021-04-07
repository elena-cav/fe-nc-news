import React, { Component } from 'react';
import * as api from '../utils/api';
import { StyledArticles } from '../styled/articles';
import ArticleCard from './ArticleCard';
import Filters from './Filters';
import { Ring } from 'react-awesome-spinners';
import ErrorDisplay from './ErrorDisplay';

class ArticlesList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: null
  };
  componentDidMount() {
    api.fetchArticles().then((articles) => {
      this.setState({ articles, isLoading: false });
    })
  }

  sortArticles = (sort) => {
    this.setState({ isLoading: true });
    api
      .fetchSortedArticles(sort)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
  };

  filterByAuthor = (author) => {
   this.setState({ isLoading: true });
    api
      .fetchFilteredArticles(author)
      .then((articles) => {
        this.setState({ articles, isLoading: false });
      })
  }

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

        <ul className='articles-wrapper'>
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

export default ArticlesList;
