import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.closeSidebar = this.closeSidebar.bind(this);
    this.showAuthFrame = this.showAuthFrame.bind(this);
  }

  closeSidebar() {
    this.props.onValueChange(false, 'sidebar');
  }

  showAuthFrame() {
    let _me = this;
    setTimeout(function () {
      _me.props.onValueChange(true, 'auth');
    }, 600);
  }

  render() {
    return (
        <div className="nav-main" id="nav-main">
          <div className="top">
            <div className="header">
              <div className="pull-right">
                <div className="close-btn" onClick={this.closeSidebar}>Close</div>
              </div>
            </div>
            <ul className="menu" onClick={this.closeSidebar}>
              <li>
                <span className="item" onClick={this.showAuthFrame}>Register / Login</span>
              </li>
              <li>
                <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/article" className="item" activeClassName="active">Article</NavLink>
              </li>
              <li>
                <span className="item">Nominees</span>
              </li>
              <li>
                <span className="item">Collections</span>
              </li>
              <li>
                <span className="item">Professional directory</span>
              </li>
            </ul>
          </div>
        </div>
    );
  }
}