import React, {Component} from 'react';
import MockData from '../config/MockData'

import './common'
import '../assets/scss/article-list.scss';

function createCircle(point) {
  let perimeter = Math.PI * 2 * 39;
  return perimeter * (1 - (point / 10));
}

function getScore(type, point) {
  point = point.toFixed(2);
  if (type === 'int') {
    return parseInt(point);
  } else if (type === 'dec') {
    let dec = point - parseInt(point);
    dec = dec.toFixed(2) * 100;
    dec = dec.toString();
    if (dec.length < 2) {
      dec = dec + '0';
    }
    return dec;
  } else if (type === 'percent') {
    return point;
  }
}

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: 'react'
    }
  }

  showDetail(id) {
    this.props.onClick(id, 'detail');
  }

  render() {
    const memoryData = JSON.parse(MockData);
    const articleList = memoryData.article_list[this.state.topic].map((item) =>
        <li className="list-item" key={item.a_id}>
          <div className="item-img">
            <img src={item.a_img}/>
          </div>
          <div className="item-info">
            <div className="item-name">{item.a_name}</div>
            <div className="item-time">{new Date(item.a_date).Format('yyyy-MM-dd', false, true)}</div>
            <div className="item-score">
              <svg>
                <circle r="39" cy="40" cx="40"/>
                <circle r="39" cy="40" cx="40" strokeLinejoin="round" strokeLinecap="round"
                        style={{
                          strokeDashoffset: createCircle(item.a_point),
                          strokeDasharray: Math.PI * 2 * 39
                        }}>
                </circle>
              </svg>
              <div className="item-percent">
                <span className="int">{getScore('int', item.a_point)}</span>
                <span className="dec">.{getScore('dec', item.a_point)}</span>
              </div>
            </div>
            <div className="item-more" onClick={this.showDetail.bind(this, item.a_id)}>More>></div>
          </div>
        </li>
    );
    return (
        <div className="article-list">
          <ul className="list-container">{articleList}</ul>
        </div>
    );
  }

}