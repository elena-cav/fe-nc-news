import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import ArticlesList from './components/ArticlesList';
import ArticlesByTopic from './components/ArticlesByTopic';
import Comments from './components/Comments';
import Nav from './components/NavBar';
import { Globals } from './styled/globals';
import { Container } from './styled/container';

function App() {
  return (
    <Globals>
      <Container>
        <Nav />
        <Header />
        <Router>
          <ArticlesList path="/" />
          <ArticlesByTopic path="/:topic/articles" />
          <Comments path="/articles/:article_id" />
        </Router>
      </Container>
    </Globals>
  );
}

export default App;
