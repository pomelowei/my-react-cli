import React, {Component} from 'react';
import classNames from 'classnames'

import './common'
import '../assets/scss/article.scss';
import ArticleList from './article-list.jsx'
import ArticleDetail from './article-detail.jsx'

class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: props.topic
    };
  }

  switchTopic(id) {
    this.props.onSwitch(id);
  }

  render() {
    const topics = [
      {
        name: 'React',
        id: 1,
        className: classNames(
            'list-topic',
            {'topic-active': (this.props.topic === 1)}
        )
      }, {
        name: 'React-router',
        id: 2,
        className: classNames(
            'list-topic',
            {'topic-active': (this.props.topic === 2)}
        )
      }, {
        name: 'Redux',
        id: 3,
        className: classNames(
            'list-topic',
            {'topic-active': (this.props.topic === 3)}
        )
      }, {
        name: 'IE',
        id: 4,
        className: classNames(
            'list-topic',
            {'topic-active': (this.props.topic === 4)}
        )
      }
    ];
    const topicItem = topics.map((item, index) =>
        <span className={item.className} key={index} onClick={this.switchTopic.bind(this, item.id)}>{item.name}</span>
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
}

export default class Article extends Component {
  constructor() {
    super();
    this.state = {
      tab: 'detail',
      topic: 1,
      article: 6
    };
    this.switchArticle = this.switchArticle.bind(this);
    this.switchTopic = this.switchTopic.bind(this);
  }

  switchArticle(id, type) {
    this.setState({article: id, tab: type});
  }

  switchTopic(value) {
    this.setState({tab: 'list', topic: value});
  }

  render() {
    if (this.state.tab === 'list') {
      return (
          <div className="article">
            <ListHeader topic={this.state.topic} onSwitch={this.switchTopic}/>
            <ArticleList topic={this.state.topic} onClick={this.switchArticle}/>
          </div>
      );
    } else {
      return (
          <div className="article">
            <ListHeader topic={this.state.topic} onSwitch={this.switchTopic}/>
            <ArticleDetail id={this.state.article} onClick={this.switchArticle}/>
          </div>
      );
    }
  }
}