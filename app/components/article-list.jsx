import React, {Component} from 'react';

import MockData from '../config/MockData'
import {globalInfo} from './common'
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

function skuList() {
  // var checkedProperties = [
  //   {
  //     "Id": 14,
  //     "Name": "颜色"
  //   }
  // ];

  // var vm = new Vue({
  //   el: "#app",
  //   data: {
  //     properties: properties,
  //     checkedProperties: checkedProperties,
  //     skus: skus
  //   },
  //   computed: {
  //     allCheckedLength: function () {
  //       var length = 0;
  //       $.each(this.properties, function () {
  //         length += this.selectedValues.length;
  //       });
  //       return length;
  //     },
  //     skusResult: function () {
  //       return JSON.stringify(this.skus);
  //     },
  //     propertyResult: function () {
  //       var result = [];
  //       $.each(this.properties, function () {
  //         $.each(this.selectedValues, function () {
  //           result.push(this);
  //         })
  //       });
  //       return JSON.stringify(result);
  //     }
  //
  //   },
  //   watch: {
  //     'allCheckedLength': {
  //       handler: 'reBuild'
  //     }
  //   },
  //   methods: {
  //     reBuild: function (val, oldVal) {
  //       var vm = this;
  //       var vmSkus = this.skus = [];
  //       var propertyChecked = [];
  //       var skuCount = 1;
  //       var ori = [];
  //       $.each(vm.properties,
  //           function (index, item) {
  //             var selectValues = this.selectedValues;
  //             if (selectValues.length > 0) {
  //               propertyChecked.push(index);
  //               skuCount *= selectValues.length;
  //               ori.push(selectValues);
  //             }
  //           });
  //       /*$.each(propertyChecked,
  //        function () {
  //        ori.push(vm.properties[this].selectedValues);
  //        });*/
  //       console.log(JSON.stringify(ori))
  //       var ret = descartes(ori);
  //       console.log(JSON.stringify(ret));
  //       for (var i = 0; i < ret.length; i++) {
  //         var sku = {SkuCode: "", SkuPrice: "", StockQuantity: ""};
  //         sku.values = [];
  //         $.each(ret[i],
  //             function () {
  //               sku.values.push({propertyId: this.PropertyId, valueId: this.Id});
  //             });
  //         vmSkus.push(sku);
  //       }
  //     },
  //     getValueName: function (sku, property) {
  //       var valueName = "";
  //       $.each(sku.values,
  //           function () {
  //             var _this = this;
  //             if (this.propertyId == property.Id) {
  //               $.each(property.selectedValues, function () {
  //                 if (_this.valueId == this.Id) {
  //                   valueName = this.Name;
  //                   return false;
  //                 }
  //               });
  //             }
  //           });
  //       return valueName;
  //
  //     }
  //   }
  // });

  function descartes(list) {
    //parent上一级索引;count指针计数
    var point = {};
    var result = [];
    var pIndex = null;
    var tempCount = 0;
    var temp = [];
    //根据参数列生成指针对象
    for (var index in list) {
      if (typeof list[index] == 'object') {
        point[index] = {'parent': pIndex, 'count': 0}
        pIndex = index;
      }
    }
    //单维度数据结构直接返回
    if (pIndex == null) {
      return list;
    }
    //动态生成笛卡尔积
    while (true) {
      for (var index in list) {
        tempCount = point[index]['count'];
        temp.push(list[index][tempCount]);
      }
      //压入结果数组
      result.push(temp);
      temp = [];
      //检查指针最大值问题
      while (true) {
        if (point[index]['count'] + 1 >= list[index].length) {
          point[index]['count'] = 0;
          pIndex = point[index]['parent'];
          if (pIndex == null) {
            return result;
          }
          //赋值parent进行再次检查
          index = pIndex;
        }
        else {
          point[index]['count']++;
          break;
        }
      }
    }
  }
}

export default class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      topic: props.topic
    }
  }

  componentDidMount() {
    this.getArticleList();
  }

  showDetail(id) {
    this.props.onClick(id, 'detail');
  }

  getArticleList() {
    const DOMAIN = 'http://192.168.192.250:9000';
    const API = '/api/retail/products';
    const _me = this;
    let data = {
      category_id: 0,
      limit: 16,
      order_by: 4,
      page: 1,
      currency_type_id: 8
    };
    data = globalInfo.requireParams(data);
    const FETCH_GET = {
      method: 'GET',
      mode: 'cors',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      credentials: 'same-origin'
    };
    const LINK = DOMAIN + API + data;

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
      } else {
        return Promise.reject(new Error(response.statusText))
      }
    }

    fetch(LINK, FETCH_GET)
        .then(status)
        .then(response => {
          return response.json();
        })
        .then(function (data) {
          const list = JSON.parse(MockData).article_list[_me.state.topic];
          _me.setState({list: list});
          console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
          console.log('Request failed', error);
        });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.topic !== this.state.topic) {
      this.setState({topic: nextProps.topic});
      this.getArticleList();
    }
  }

  render() {
    const articleList = this.state.list.map((item) =>
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