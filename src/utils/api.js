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
    .get(`/articles?topic=${topic}&sort_by=${sort}`)
    .then(({ data }) => {
      return data.articles;
    });
};

export const fetchSortedArticles = (sort) => {
  return request.get(`/articles?sort_by=${sort}`).then(({ data }) => {
    return data.articles;
  });
};
export const fetchFilteredArticles = (author) => {
  return request.get(`/articles?author=${author}`).then(({ data }) => {
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

export const patchArticle = (id, vote) => {
  return request.patch(`/articles/${id}`, { inc_votes: vote }).then(() => {
    window.location.reload();
  });
};

export const postComment = (id, comment) => {
  const body = {
    username: 'jessjelly',
    body: comment
  };
  return request.post(`/articles/${id}/comments`, body).then(() => {
    window.location.reload();
  });
};

export const deleteComment = (id) => {
  return request.delete(`/comments/${id}`).then(() => {
    window.location.reload();
  });
};

export const patchComment = (id, vote) => {
  return request.patch(`/comments/${id}`, { inc_votes: vote }).then(() => {
    window.location.reload();
  });
};

export const deleteArticle = (id) => {
  return request.delete(`/articles/${id}`).then(() => {
    window.location.reload();
  });
};
