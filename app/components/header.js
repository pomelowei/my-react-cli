import React, {Component} from 'react';

function HeaderTop() {
  return (
      <div>
        <div className="box-left">
          <div className="item">
            <span>ENGLISH</span>
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
      <div>choaji</div>
  );
}
function HeaderMain() {
  return (
      <MenuButton />
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
