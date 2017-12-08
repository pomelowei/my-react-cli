import React, {Component} from 'react';

function HeaderTop() {
  return (
      <div className="header-top">
        <div className="box-left">
          <div className="item">
            <span className="link-1">ENGLISH</span>
          </div>
        </div>
        <div className="box-center">
          <h1 className="slogan">
            The awards of design, creativity and innovation on the internet
          </h1>
        </div>
        <div className="box-right">
          <ul className="list-social item">
            <li>
              <a>I</a>
            </li>
            <li>
              <a>T</a>
            </li>
            <li>
              <a>F</a>
            </li>
          </ul>
        </div>
      </div>
  );
}
function MenuButton() {
  return (
      <div className="btn-menu item">
        <div className="icon-menu">
          <div className="bar"/>
          <div className="bar"/>
          <div className="bar"/>
        </div>
        <span>Menu</span>
      </div>
  );
}
function SearchButton() {
  return (
      <div className="btn-search item">
        <span>S</span>
      </div>
  );
}
function LoginButton() {
  return (
      <div className="btn-login item">
        <span>REGISTER/LOG IN</span>
      </div>
  );
}
function SubmitButton() {
  return (
      <div className="btn-submit btn-green">
        <span>SUBMIT YOUR SITE!</span>
      </div>
  );
}
function HeaderMain() {
  return (
      <div className="header-main">
        <div className="box-left">
          <MenuButton />
          <SearchButton />
        </div>
        <div className="box-center">
          <span className="logo">AWWWARDS</span>
        </div>
        <div className="box-right">
          <SubmitButton />
          <LoginButton />
        </div>
      </div>
  );
}

export default class Header extends Component {

  render() {
    return (
        <div className="header" id="header">
          <HeaderTop />
          <HeaderMain />
        </div>
    );
  }
}
