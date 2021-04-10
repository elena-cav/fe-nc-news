import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import Comments from './components/Comments';
import Nav from './components/NavBar';
import { Globals } from './styled/globals';
import { Container } from './styled/container';
import ErrorDisplay from './components/ErrorDisplay';
import Deleted from './components/Deleted';
import React, { Component } from 'react';
import UserPage from './components/UserPage';
import Footer from './components/Footer';
class App extends Component {
  state = {
    isActive: false
  };

  openMenu = () => {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <Globals>
        <Container>
          <Nav isActive={this.state.isActive} openMenu={this.openMenu} />
          <Header openMenu={this.openMenu} />
          <Router>
            <ArticlesList path="/" />
            <ArticlesList path="?author=:author" />
            <Deleted path="articles/:article_id/deleted" />
            <ArticlesList path="/:topic/articles" />
            <Comments path="/articles/:article_id" />
            <UserPage path="/user/jessjelly" />
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
