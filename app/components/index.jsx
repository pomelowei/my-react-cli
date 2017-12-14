import React, {Component} from 'react';
import './common'
import '../assets/scss/index.scss';

function formatTime(time) {
  return new Date(time).Format('yyyy-MM-dd');
}

class BoxItems extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      'address': 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/'
    }
  }

  handleClick(img, e) {
    console.log(img);
  }

  render() {
    const items = JSON.parse(this.props.data);
    const BoxItems = items.map((item, index) =>
        <li className="col-3" key={index}>
          <div className="box-item">
            <figure className="rollover" onClick={this.handleClick.bind(this, item.image)}>
              <div className="box-photo">
                <img src={this.state.address + item.image}/>
              </div>
              <div className="hover-item">
                <span className="btn-item"/>
              </div>
            </figure>
            <div className="box-info">
              <div className="content">
                <div className="row">
                  <h3>{item.site_name}</h3>
                </div>
                <div className="row">
                  <h3>
                    by <a>{item.user.displayName}</a> from {item.country.name}
                  </h3>
                </div>
                <div className="row">
                  <h3>{formatTime(item.nominee_date)}</h3>
                </div>
              </div>
              <div className="footer">

              </div>
            </div>
          </div>
        </li>
    );
    return (
        <ul className="list-items list-flex">{BoxItems}</ul>
    );
  }
}


class BoxBlock extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="block p-0">
          <div className="inner">
            <div className="box-heading">
              <div className="grid one-row">
                <div className="col-3">
                  <div className="box-left">
                    <h2 className="title">
                      <a href="/">Sites of the day</a>
                    </h2>
                    <span>Previous Winners</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid">
              <BoxItems data={this.props.data}/>
            </div>
          </div>
        </div>
    );
  }
}


export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      bg: 'https://assets.awwwards.com/awards/sites_of_the_day/2017/12/Super-Crowds-inc-cover.jpg',
      row1: '[{"id":31207,"site_name":"Brand Love Score","slug":"brand-love-score","image":"submissions\/2017\/11\/5a1e75c278583.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a1e75c278583.jpg","mobile_thumbnail":null,"mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":553093,"username":"sboidock","displayName":"sboidock"},"url":"http:\/\/brandlovescore.com","sotd_date":"2017-12-09T00:00:00+00:00","type":"submission","country":{"id":"119","name":"U.S.A.","countryId":"US"},"user_average":8.23,"design_by":"Drumroll","designer_url":"http:\/\/drumroll.com","nominee_date":"2017-11-29T08:59:56+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512550796,"is_voting_open":false,"is_site_of_the_day":true,"users_collection":[{"image":"\/default\/user5.jpg","country":"United Kingdom","social":{"twitter":"echwa"},"displayName":"Damien","id":205990,"username":"echwa"},{"image":"avatar\/207645\/54d4387c8e90b.jpeg","country":"Serbia","social":{"twitter":"BraceZenith","facebook":"BraceZenith","behance":"Brace","linkedin":null,"googleplus":null},"displayName":"Brace","id":207645,"username":"Brace"},{"image":"avatar\/77977\/5906459f80fbf.jpg","country":"United Kingdom","social":{"twitter":"triloroman","facebook":"triloroman","behance":"trilo","linkedin":"in\/trilo","googleplus":null},"displayName":"Roman Trilo","id":77977,"username":"trilo"},{"image":"\/default\/user8.jpg","country":"Italy","social":{"twitter":"manlioma","facebook":"manlioma","behance":"manlioma","linkedin":"manlio.massimetti","googleplus":"manlioma"},"displayName":"Manlio Massimetti","id":295276,"username":"manlioma"}],"users_collection_count":19,"code_result":{"finishAt":"2017-12-11T14:04:13+00:00","average":7.2,"number_of_votes":2,"votes":[{"average":7.7,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":8,"Accessibility":7,"WPO":8,"Responsive Design":8,"Markup \/ Meta-data":8},"judgeId":27},{"average":6.7,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":7,"Accessibility":6,"WPO":6,"Responsive Design":8,"Markup \/ Meta-data":7},"judgeId":227370}]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31265,"site_name":"Contemple","slug":"contemple","image":"submissions\/2017\/12\/5a248c6b6dc28.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a248c6b6dc28.jpg","mobile_thumbnail":"submissions\/2017\/12\/5a248c6c0e861.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":554058,"username":"Contemple","displayName":"Contemple"},"url":"http:\/\/ccccontemple.com\/","sotd_date":"2017-12-08T00:00:00+00:00","type":"submission","country":{"id":"42","name":"France","countryId":"FR"},"user_average":7.5,"design_by":"Contemple","designer_url":"http:\/\/ccccontemple.com\/","nominee_date":"2017-12-04T08:20:26+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512980427,"is_voting_open":false,"is_site_of_the_day":true,"users_collection":[{"image":"default\/user7.jpg","country":"","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"misterlee","id":486386,"username":"misterlee"},{"image":"default\/user5.jpg","country":"","social":[],"displayName":"mariana-lencastre","id":555615,"username":"mariana-lencastre"},{"image":"avatar\/63353\/558d409bd8397.jpeg","country":"Russia","social":{"twitter":null,"facebook":"mazyhappy","linkedin":null,"googleplus":null},"displayName":"Aleksandr Mazy","id":63353,"username":"mazy"},{"image":"avatar\/508910\/59409bd1b3250.png","country":"Mexico","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"bubv","id":508910,"username":"bubv"}],"users_collection_count":26,"code_result":{"finishAt":"2017-12-13T13:12:13+00:00","average":7.18,"number_of_votes":2,"votes":[{"average":6.5,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":7,"Accessibility":6,"WPO":5,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227370},{"average":7.85,"deleted":false,"scores":{"Semantics \/ SEO":8,"Animations \/ Transitions":8,"Accessibility":8,"WPO":8,"Responsive Design":8,"Markup \/ Meta-data":7},"judgeId":27}]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31232,"site_name":"Andy H WEI","slug":"andy-h-wei","image":"submissions\/2017\/11\/5a204e603c433.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a204e603c433.jpg","mobile_thumbnail":"submissions\/2017\/11\/5a204e60d11e2.jpeg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":32711,"username":"timotheeroussilhe","displayName":"Timothee ROUSSILHE"},"url":"http:\/\/andyweiart.com\/","sotd_date":"2017-12-07T00:00:00+00:00","type":"submission","country":{"id":"42","name":"France","countryId":"FR"},"user_average":7.94,"design_by":"Timothee ROUSSILHE","designer_url":"http:\/\/timothee-roussilhe.com","nominee_date":"2017-12-01T09:15:07+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512724507,"is_voting_open":false,"is_site_of_the_day":true,"users_collection":[{"image":"default\/user7.jpg","country":"","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"misterlee","id":486386,"username":"misterlee"},{"image":"default\/user6.jpg","country":"","social":[],"displayName":"ella-cullen","id":449103,"username":"ella-cullen"},{"image":"default\/user5.jpg","country":"","social":[],"displayName":"taurin-hu","id":535877,"username":"taurin-hu"},{"image":"\/default\/user7.jpg","country":"Estonia","social":[],"displayName":"Umpalumpa","id":251727,"username":"Umpalumpa"}],"users_collection_count":55,"code_result":{"finishAt":"2017-12-12T09:20:25+00:00","average":7.13,"number_of_votes":3,"votes":[{"average":6.75,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":8,"Accessibility":5,"WPO":7,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227378},{"average":7.8,"deleted":false,"scores":{"Semantics \/ SEO":8,"Animations \/ Transitions":8,"Accessibility":8,"WPO":8,"Responsive Design":7,"Markup \/ Meta-data":8},"judgeId":227380},{"average":6.85,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":4,"Accessibility":8,"WPO":8,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227385}]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31174,"site_name":"Shaan Atari","slug":"shaan-atari","image":"submissions\/2017\/11\/5a197c98a05b8.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a197c98a05b8.jpg","mobile_thumbnail":"submissions\/2017\/11\/5a197c9931e2d.jpg","mobile_site_of_the_week":"submissions\/2017\/12\/5a26b8b6c5d42.jpg","mobile_excellence":"submissions\/2017\/12\/5a26b8b6cd3ba.mp4"},"user":{"id":415015,"username":"artistsweb","displayName":"Artistsweb"},"url":"https:\/\/www.shaanatari.com","sotd_date":"","type":"submission","country":{"id":"118","name":"United Kingdom","countryId":"GB"},"user_average":7.33,"design_by":"Artistsweb","designer_url":"https:\/\/www.artistsweb.com","nominee_date":"2017-11-27T09:14:56+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512378896,"is_voting_open":false,"is_site_of_the_day":false,"users_collection":[{"image":"default\/user2.jpg","country":"","social":[],"displayName":"anatoliy-voronkin","id":554794,"username":"anatoliy-voronkin"},{"image":"avatar\/49\/50a0d407bec95.jpeg","country":"","social":{"twitter":"http:\/\/twitter.com\/oscartv","facebook":"http:\/\/www.facebook.com\/oscartv","pinterest":"http:\/\/pinterest.com\/oscartv\/","linkedin":"http:\/\/www.linkedin.com\/in\/oscartv","googleplus":null},"displayName":"\u00d3scar P\u00e9rez.","id":49,"username":"oscar-perez"},{"image":"avatar\/263934\/58cfdc47debc5.jpg","country":"Ukraine","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"Alina Rakhimova","id":263934,"username":"alina.rakhimova.5"},{"image":"avatar\/473418\/598f44b25f271.jpg","country":"Kazakhstan","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"DarkDesigner","id":473418,"username":"DarkDesigner"}],"users_collection_count":11,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":true,"site_of_the_week_mobile_date":true}]',
      row2: '[{"id":31347,"site_name":"Warm Christmas","slug":"warm-christmas","image":"submissions\/2017\/12\/5a29a9ce86094.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a29a9ce86094.jpg","mobile_thumbnail":"submissions\/2017\/12\/5a29a9cf29322.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":392451,"username":"latinmedios","displayName":"LatinMedios"},"url":"http:\/\/www.warm-christmas.com","sotd_date":"","type":"submission","country":{"id":"119","name":"U.S.A.","countryId":"US"},"user_average":7.48,"design_by":"LatinMedios","designer_url":"http:\/\/www.latinmedios.com","nominee_date":"2017-12-09T12:20:22+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513426822,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"avatar\/58080\/584d73d6797b3.png","country":"Brazil","social":{"twitter":"visualmodo","facebook":"visualmodo","linkedin":"visualmodo"},"displayName":"Visualmodo WordPress Themes","id":58080,"username":"visualmodo"}],"users_collection_count":1,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31316,"site_name":"The hunt for the Cheshire Cat","slug":"the-hunt-for-the-cheshire-cat","image":"submissions\/2017\/12\/5a27cf383e029.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a27cf383e029.jpg","mobile_thumbnail":"submissions\/2017\/12\/5a27cf3911d50.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":207,"username":"immersivegarden","displayName":"Immersive Garden"},"url":"https:\/\/cheshirecat.inthehiddencity.com\/","sotd_date":"","type":"submission","country":{"id":"42","name":"France","countryId":"FR"},"user_average":8.38,"design_by":"Immersive Garden","designer_url":"http:\/\/www.immersive-g.com","nominee_date":"2017-12-07T09:11:10+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513242670,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"avatar\/76091\/59e8fa6d56324.png","country":"France","social":{"twitter":"marindessables","facebook":null,"behance":"marindessables","pinterest":"marindessables","linkedin":"in\/arnaud-saunier-art-director","googleplus":null},"displayName":"Ar\/\/aud Saunier","id":76091,"username":"arnaud-saunier"},{"image":"default\/user7.jpg","country":"France","social":{"twitter":"Qu3ntinD","facebook":"quentin.durand.399","linkedin":null},"displayName":"Quentin Durand","id":497932,"username":"quentin-durand"},{"image":"default\/user6.jpg","country":"","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"monochromer","id":520136,"username":"monochromer"},{"image":"default\/user3.jpg","country":"U.S.A.","social":{"twitter":null,"facebook":null,"linkedin":null,"googleplus":null},"displayName":"Crystal","id":443719,"username":"crystal-pham"}],"users_collection_count":22,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31317,"site_name":"Nove","slug":"nove","image":"submissions\/2017\/12\/5a27c45504ef6.png","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a27c45504ef6.png","mobile_thumbnail":"submissions\/2017\/12\/5a27c46713f86.png","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":62101,"username":"atelier-design","displayName":"Atelier Design"},"url":"http:\/\/nove.eu\/","sotd_date":"","type":"submission","country":{"id":"12","name":"Belgium","countryId":"BE"},"user_average":7.72,"design_by":"Atelier Design","designer_url":"http:\/\/www.atelierdesign.be","nominee_date":"2017-12-07T09:11:06+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513242666,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"avatar\/76091\/59e8fa6d56324.png","country":"France","social":{"twitter":"marindessables","facebook":null,"behance":"marindessables","pinterest":"marindessables","linkedin":"in\/arnaud-saunier-art-director","googleplus":null},"displayName":"Ar\/\/aud Saunier","id":76091,"username":"arnaud-saunier"},{"image":"default\/user1.jpg","country":"","social":[],"displayName":"tanya-borysenko","id":555168,"username":"tanya-borysenko"},{"image":"avatar\/257876\/57cd5abc309a0.jpeg","country":"Croatia","social":{"twitter":"https:\/\/twitter.com\/CookieKatana?lang=en","facebook":"https:\/\/www.facebook.com\/marina.pdg","linkedin":"https:\/\/www.linkedin.com\/in\/marinapdg\/","googleplus":null},"displayName":"Marina Mijatovi\u0107","id":257876,"username":"marina.pdg"},{"image":"default\/user6.jpg","country":"","social":{"twitter":null,"facebook":null,"linkedin":null,"googleplus":null},"displayName":"Max_m","id":440071,"username":"Max_m"}],"users_collection_count":13,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31353,"site_name":"The Insurance Experiments","slug":"the-insurance-experiments","image":"submissions\/2017\/12\/5a2a60d969d6e.png","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a2a60d969d6e.png","mobile_thumbnail":"submissions\/2017\/12\/5a2a60f16172d.png","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":188712,"username":"fishfinger","displayName":"fishfinger"},"url":"http:\/\/insuranceexperiments.org.uk","sotd_date":"","type":"submission","country":{"id":"118","name":"United Kingdom","countryId":"GB"},"user_average":8.01,"design_by":"Fishfinger","designer_url":"http:\/\/www.fishfinger.me","nominee_date":"2017-12-08T09:53:19+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513331599,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"default\/user4.jpg","country":"","social":[],"displayName":"matthew-james-woodcock","id":555239,"username":"matthew-james-woodcock"},{"image":"avatar\/242644\/55bb4519afeca.jpeg","country":"Denmark","social":{"twitter":null,"facebook":null,"pinterest":"http:\/\/www.pinterest.com\/mortenschristen\/","linkedin":"in\/morten-stig-christensen-14341151","googleplus":null},"displayName":"MSChristensen","id":242644,"username":"MSChristensen"}],"users_collection_count":2,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false}]'
    };
  }

  render() {
    return (
        <div className="container">
          <div className="box-bg">
            <img src={this.state.bg}/>
          </div>
          <BoxBlock data={this.state.row1}/>
          <BoxBlock data={this.state.row2}/>
        </div>
    );
  }
}