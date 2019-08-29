import React, { Component } from 'react';
import Navbar from './components/NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch> {/*A <Switch> will iterate over all of its children <Route> elements and only render the first one that matches the current location. */}
            <Route exact path='/home' component={Home} /> {/*Route matching is done by comparing a <Route>'s path prop to the current location’s pathname. */}
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            {/*Route parameters allow to grap specific items of data through an ID. Declared with ':'  */}
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
