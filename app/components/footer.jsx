import React, {Component} from 'react';

function BoxLeft() {
  return (
      <div className="box-left">
        <h2 className="headline slogan not-mobile">The awards for design, creativity and innovation on the Internet</h2>
      </div>
  );
}

export default class Footer extends Component {

  render() {
    return (
        <div className="footer" id="footer">
          <div className="inner">
            <div className="box-top">
              <BoxLeft />
            </div>
          </div>
        </div>
    );
  }
}