import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import { Route } from "react-router-dom";
import Article from './components/Article';

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
      </div>
    );
  }
}

export default App;