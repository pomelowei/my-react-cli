import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import classNames  from 'classnames';

import SideBar from './siderbar'
import Header from './header';
import Footer from './footer'
import Index from './index'
import Auth from './auth'
import Article from './article'
import '../assets/scss/main.scss';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      'sidebarStatus': false,
      'authStatus': false
    };
    this.toggleShow = this.toggleShow.bind(this);
    this.closeOverlay = this.closeOverlay.bind(this);
  }

  toggleShow(value, type) {
    if (type === 'auth') {
      this.setState({'authStatus': value});
    } else if (type === 'sidebar') {
      this.setState({'sidebarStatus': value});
    }
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
              <Auth authStatus={this.state.authStatus} onValueChange={this.toggleShow}/>
              <SideBar onValueChange={this.toggleShow}/>
              <Header onValueChange={this.toggleShow}/>
              <Route exact path="/" component={Index}/>
              <Route path="/article" component={Article}/>
              <Footer />
            </div>
          </Router>
        </div>
    )
  }
}