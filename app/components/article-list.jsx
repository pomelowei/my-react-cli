import React, {Component} from 'react';
import MockData from './MockData'

import './common'
import '../assets/scss/article-list.scss';

function ListHeader() {
  const topics = ['React', 'React-router', 'Redux'];
  const topicItem = topics.map((item, index) =>
      <span className="list-topic" key={index}>{item}</span>
  );
  return (
      <div className="list-header">
        <span className="title">Read, write and share stories that matter</span>
        <div className="list-topics">
          {topicItem}
        </div>
      </div>
  );
}

export default class ArticleList extends Component {
  constructor() {
    super();
  }

  render() {
    const memoryData = JSON.parse(MockData);
    const articleList = memoryData.article_list.map((item) =>
        <li className="list-item" key={item.a_index}>
          <div className="item-img">
            <img src={item.a_img}/>
          </div>
          <div className="item-info">
            <div className="item-name">{item.a_name}</div>
            <div className="item-time">{new Date(item.a_date).Format('yyyy-MM-dd', false, true)}</div>
          </div>
        </li>
    );
    return (
        <div className="article article-list">
          <ListHeader />
          <ul className="list-container">{articleList}</ul>
        </div>
    );
  }

}