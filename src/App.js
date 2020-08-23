import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter as Router , Route} from 'react-router-dom';

import store from './store';
import Headers from './components/Headers';
import Footer from './components/Footer';
import Home from './components/Home';
import AllPost from './components/AllPost';
import SortedPost from './components/SortedPost';

export default class App extends Component {
  render(){
    return (
      <Provider store={store}>
      <Router>
        <Headers/>
        <div className="container py-5">
          <Route exact path = "/" component={Home} />
          <Route exact path = "/allPost" component={AllPost} />
          <Route exact path = "/sortPost" component={SortedPost}/>
        </div>
        <Footer/>
      </Router>
       </Provider>
  );
  }

}


