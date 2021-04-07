import axios from 'axios';

const request = axios.create({
  baseURL: 'https://elena-nc-news.herokuapp.com/api'
});

export const fetchTopics = () => {
  return request.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = () => {
  return request.get('/articles').then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticlesByTopic = (topic) => {
  return request.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchSortedArticlesByTopic = (topic, sort) => {
  return request
    .get(`/articles?topic=${topic}&sort_by=${sort}&order=asc`)
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchSortedArticles = (sort) => {
  return request.get(`/articles?sort_by=${sort}&order=asc`).then(({ data }) => {
    return data.articles;
  });
};

export const fetchArticleById = (id) => {
  return request.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const fetchCommentsByArticleId = (id) => {
  return request.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
