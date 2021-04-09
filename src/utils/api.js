import axios from 'axios';

const request = axios.create({
  baseURL: 'https://elena-nc-news.herokuapp.com/api'
});

export const fetchTopics = () => {
  return request.get('/topics').then(({ data }) => {
    return data.topics;
  });
};

export const fetchArticles = ({ topic, sort_by, page, author } = {}) => {
  return request
    .get('/articles', { params: { p: page, topic, sort_by, author } })
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchCommentsByArticleId = (id, page) => {
  return request
    .get(`/articles/${id}/comments`, { params: { p: page } })
    .then(({ data }) => {
      return data.comments;
    });
};

export const fetchArticleById = (id) => {
  return request.get(`/articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const patchVotes = (id, vote, item) => {
  return request.patch(`/${item}/${id}`, { inc_votes: vote });
};

export const postComment = (id, comment) => {
  const body = {
    username: 'jessjelly',
    body: comment
  };
  return request.post(`/articles/${id}/comments`, body).then(({ data }) => {
    return data.comment;
  });
};

export const deleteItem = (item, id) => {
  return request.delete(`/${item}/${id}`);
};

export const getUser = () => {
  return request.get('/users/jessjelly').then(({ data }) => {
    return data.user;
  });
};
