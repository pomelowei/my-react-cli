import React, {Component} from 'react';
import MockData from '../config/MockData'

import './common'
import '../assets/scss/article-detail.scss';

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article_id: props.id
    }
  }

  render() {

    return (
        <div className="article article-detail">

        </div>
    );
  }

}