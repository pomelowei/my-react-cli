import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import classNames  from 'classnames';

import SideBar from './siderbar.jsx'
import Header from './header.jsx';
import Footer from './footer.jsx'
import Index from './index.jsx'
import ArticleList from './article-list.jsx'
import '../assets/scss/main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {'sidebarStatus': false};
    this.handleChange = this.handleChange.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  handleChange(e) {
    this.setState({'sidebarStatus': e});
  }

  closeOverlay(e) {
    if (e.target.className === 'wrapper') {
      this.setState({'sidebarStatus': false});
    }
  }

  render() {
    let appClassName = classNames(
        {'header-visible': true},
        {'nav-side': this.state.sidebarStatus}
    );
    return (
        <div className={appClassName}>
          <Router>
            <div className="wrapper" onClick={this.closeOverlay}>
              <SideBar onValueChange={this.handleChange}/>
              <Header onValueChange={this.handleChange}/>
              <Route exact path="/" component={Index}/>
              <Route path="/article-list" component={ArticleList}/>
              <Footer />
            </div>
          </Router>
        </div>
    )
  }
}