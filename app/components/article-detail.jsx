import React, {Component} from 'react';

import {globalInfo} from './common'
import '../assets/scss/article-detail.scss';

class SpecsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: [
        {
          "Id": 10,
          "Name": "材质",
          "values": [
            {
              "PropertyId": 10,
              "Id": 351785,
              "Name": "ABS",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 477,
              "Name": "铝",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 529,
              "Name": "帆布",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 365211,
              "Name": "棉布",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 365212,
              "Name": "斜纹布",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 395,
              "Name": "EVA",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 396,
              "Name": "皮革",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 365213,
              "Name": "微纤维",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 1064,
              "Name": "合成橡胶",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 63,
              "Name": "尼龙",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 437,
              "Name": "PE",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 124,
              "Name": "塑料",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 48,
              "Name": "涤纶",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 438,
              "Name": "PP",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 452,
              "Name": "PU",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 439,
              "Name": "PVC",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 1170,
              "Name": "硅胶",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 352621,
              "Name": "Vinyl",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 1042,
              "Name": "真皮",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 1179,
              "Name": "TPU",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 4,
              "Name": "其它",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 501,
              "Name": "PC",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 10,
              "Id": 201662808,
              "Name": "PC + TPU",
              "DefinitionName": "",
              "ImageUrl": ""
            }
          ],
          "selectedValues": []
        },
        {
          "Id": 14,
          "Name": "颜色",
          "values": [
            {
              "PropertyId": 14,
              "Id": 771,
              "Name": "米色",
              "DefinitionName": "Transparent",
              "ImageUrl": "https://g04.a.alicdn.com/kf/HTB1B0TWOVXXXXalXVXXq6xXFXXXn.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 193,
              "Name": "黑色",
              "DefinitionName": "Mixture",
              "ImageUrl": "https://g01.a.alicdn.com/kf/HTB13ZPMOVXXXXa2aXXXq6xXFXXXU.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 173,
              "Name": "蓝色",
              "DefinitionName": "Random",
              "ImageUrl": "https://g02.a.alicdn.com/kf/HTB1pC_COVXXXXakapXXq6xXFXXXU.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 1254,
              "Name": "天蓝色",
              "DefinitionName": "Brown",
              "ImageUrl": "https://g03.a.alicdn.com/kf/HTB1wj3lOVXXXXaxXXXXq6xXFXXX9.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 365458,
              "Name": "褐色",
              "DefinitionName": "Purple",
              "ImageUrl": "https://g01.a.alicdn.com/kf/HTB1SPcjOVXXXXcrXXXXq6xXFXXX5.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 100018786,
              "Name": "透明",
              "DefinitionName": "Blue",
              "ImageUrl": "https://g01.a.alicdn.com/kf/HTB1L9vDOVXXXXXAapXXq6xXFXXXY.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 350850,
              "Name": "金色",
              "DefinitionName": "Cyan",
              "ImageUrl": "https://g02.a.alicdn.com/kf/HTB1TCcjOVXXXXaUXXXXq6xXFXXX8.jpg"
            },
            {
              "PropertyId": 14,
              "Id": 691,
              "Name": "灰色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 200004890,
              "Name": "深灰色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 175,
              "Name": "绿色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 200004889,
              "Name": "军绿色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 200002130,
              "Name": "象牙白",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 200001438,
              "Name": "卡其色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 200003699,
              "Name": "多色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 350852,
              "Name": "橙色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 1052,
              "Name": "粉色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 496,
              "Name": "紫色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 200004891,
              "Name": "紫罗兰",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 10,
              "Name": "红色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 350853,
              "Name": "银色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 29,
              "Name": "白色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 366,
              "Name": "黄色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 201447303,
              "Name": "玫瑰色",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 201447325,
              "Name": "深红",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 201447326,
              "Name": "深蓝",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 14,
              "Id": 202007806,
              "Name": "磨砂黑",
              "DefinitionName": "",
              "ImageUrl": ""
            }
          ],
          "selectedValues": []
        },
        {
          "Id": 200007763,
          "Name": "发货地",
          "values": [
            {
              "PropertyId": 200007763,
              "Id": 201336100,
              "Name": "CN",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336106,
              "Name": "US",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336105,
              "Name": "UK",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336101,
              "Name": "DE",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336104,
              "Name": "ES",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336099,
              "Name": "AU",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336103,
              "Name": "RU",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336102,
              "Name": "ID",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336342,
              "Name": "FR",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200007763,
              "Id": 201336343,
              "Name": "IT",
              "DefinitionName": "",
              "ImageUrl": ""
            }
          ],
          "selectedValues": []
        },
        {
          "Id": 200000828,
          "Name": "套餐",
          "values": [
            {
              "PropertyId": 200000828,
              "Id": 201655809,
              "Name": "壳＋贴膜",
              "DefinitionName": "",
              "ImageUrl": ""
            },
            {
              "PropertyId": 200000828,
              "Id": 201655810,
              "Name": "壳＋挂绳",
              "DefinitionName": "",
              "ImageUrl": ""
            }
          ],
          "selectedValues": []
        }
      ],
      skus: {
        "SkuCode": "",
        "SkuPrice": "",
        "StockQuantity": "",
        "values": [
          {
            "propertyId": 10,
            "valueId": 351785
          },
          {
            "propertyId": 14,
            "valueId": 771
          },
          {
            "propertyId": 200007763,
            "valueId": 201336100
          },
          {
            "propertyId": 200000828,
            "valueId": 201655809
          }
        ]
      }
    };
  }

  handleChange(index, id) {
    let originSkus = this.state.skus;
    let updateValue = Object.assign({}, this.state.skus["values"][index], {"valueId": id});
    originSkus["values"].splice(index, 1, updateValue);
    this.setState({skus: originSkus});
    let result = '';
    for (let a in this.state.skus["values"]) {
      result += this.state.properties[a].Name + ' : ';
      for (let b in this.state.properties[a].values) {
        let value = this.state.properties[a].values[b];
        if (value.Id === this.state.skus["values"][a].valueId) {
          result += value.Name + ' ';
        }
      }
    }
    this.props.onValue(result);
  }

  createListLabel(values, index) {
    let defaultCheck = this.state.skus.values[index];
    return values.map((item) =>
        <label key={item.Id}>
          <input type="radio" value={item.Id} checked={item.Id === defaultCheck.valueId}
                 onChange={this.handleChange.bind(this, index, item.Id)}/>
          <span>{item.Name}</span>
        </label>
    );
  }

  render() {
    const property = this.state.properties;
    const specsTable = property.map((item, index) =>
        <tr key={item.Id}>
          <td>{item.Name}</td>
          <td>{this.createListLabel(item.values, index)}</td>
        </tr>
    );
    return (
        <tbody>{specsTable}</tbody>
    );
  }

}

export default class ArticleDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      article: {
        image: '',
        images: []
      },
      result: ''
    };
  }

  componentDidMount() {
    this.getArticleContent();
  }

  getArticleContent() {
    const DOMAIN = 'http://192.168.192.250:9000';
    const API = '/api/retail/product';
    const _me = this;
    let data = {
      id: this.state.id,
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
          _me.setState({article: data.data});
          console.log('Request succeeded with JSON response', data);
        })
        .catch(function (error) {
          console.log('Request failed', error);
        });
  }

  createMarkup(text) {
    return {__html: text};
  }

  valueChange(value) {
    this.setState({result: value});
  }

  render() {
    const article = this.state.article;
    const thumbnail = article.images.map((item, index) =>
        <li className="thumbnail-image" key={index}>
          <img src={item.path}/>
        </li>
    );
    return (
        <div className="article article-detail">
          <div className="article-header">
            <div className="display-img">
              <img src={article.image}/>
            </div>
            <ul className="thumbnail-images">{thumbnail}</ul>
          </div>
          <div className="article-body">
            <table className="spec-list">
              <SpecsList onValue={this.valueChange.bind(this)}/>
              <tfoot>
              <tr>
                <td>Console</td>
                <td>Result:{this.state.result}</td>
              </tr>
              </tfoot>
            </table>
            <div className="html" dangerouslySetInnerHTML={this.createMarkup(article.description)}/>
          </div>
          <div className="article-footer">
          </div>
        </div>
    );
  }
}