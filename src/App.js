import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Comments from './components/Comments';
import PostTopic from './components/PostTopic';
import Nav from './components/NavBar';
import { Globals } from './styled/globals';
import { Container } from './styled/container';
import ErrorDisplay from './components/ErrorDisplay';
import Deleted from './components/Deleted';
import React, { Component } from 'react';
import UserPage from './components/UserPage';
import Footer from './components/Footer';
import * as api from './utils/api';

class App extends Component {
  state = {
    isActive: false,
    topics: []
  };

  componentDidMount() {
    api.fetchTopics().then((topics) => {
      this.setState({ topics });
    });
  }

  openMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  addTopic = (newTopic) => {
    this.setState((currState) => {
      return {
        topics: [newTopic, ...currState.topics]
      };
    });
  };

  render() {
    return (
      <Globals>
        <Container>
          <Nav
            topics={this.state.topics}
            isActive={this.state.isActive}
            openMenu={this.openMenu}
          />
          <Header openMenu={this.openMenu} />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="?author=:author" />
            <Deleted path="articles/:article_id/deleted" />
            <ArticlesList path="/:topic/articles" />
            <Comments path="/articles/:article_id" />
            <UserPage path="/user/jessjelly" />
            <PostTopic addTopic={this.addTopic} path="/new-topic" />
            <ErrorDisplay
              default
              status={404}
              msg={'Uh oh, we can’t seem to find the page you’re looking for'}
            />
          </Router>
        </Container>
        <Footer />
      </Globals>
    );
  }
}

export default App;
