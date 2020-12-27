import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import { Route } from "react-router-dom";
import Article from './components/Article';
import CreateArticle from './components/CreateArticle';
import UpdateArticle from './components/UpdateArticle';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          username:null
      };
  }

  render() {
    return (
      <div>
        <Header/>
        <Route exact path="/board" component={ArticleList}/>
        <Route path="/board/:id" component={Article}/>
        <Route path="/create" component={CreateArticle}/>
        <Route path="/update/:id" component={UpdateArticle}/>
      </div>
    );
  }
}

export default App;