import React, {Component} from 'react';

import '../assets/scss/index.scss';

function BoxBackground(props) {
  return (
      <div className="box-bg">
        <img src={props.bg}/>
      </div>
  );
}
function BoxHeading() {
  return (
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
  );
}

function BoxItems(props) {
  const address = 'https://assets.awwwards.com/awards/media/cache/thumb_417_299/';
  const items = JSON.parse(props.data);
  const BoxItems = items.map((item, index) =>
      <li className="col-3" key={index}>
        <div className="box-item">
          <figure className="rollover">
            <div className="box-photo">
              <img src={address + item.image}/>
            </div>
            <div className="hover-item">
              <span className="btn-item"></span>
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
                <h3>{item.sotd_date}</h3>
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
function BoxContent(props) {
  return (
      <div className="grid">
        <BoxItems data={props.data}/>
      </div>
  );
}
function BoxBlock(props) {
  return (
      <div className="block p-0">
        <div className="inner">
          <BoxHeading />
          <BoxContent data={props.data}/>
        </div>
      </div>
  );
}

export default class Index extends Component {
  constructor() {
    super();
    this.state = {
      bg: 'https://assets.awwwards.com/awards/sites_of_the_day/2017/12/Super-Crowds-inc-cover.jpg',
      row1: '[{"id":31232,"site_name":"Andy H WEI","slug":"andy-h-wei","image":"submissions\/2017\/11\/5a204e603c433.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a204e603c433.jpg","mobile_thumbnail":"submissions\/2017\/11\/5a204e60d11e2.jpeg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":32711,"username":"timotheeroussilhe","displayName":"Timothee ROUSSILHE"},"url":"http:\/\/andyweiart.com\/","sotd_date":"2017-12-07T00:00:00+00:00","type":"submission","country":{"id":"42","name":"France","countryId":"FR"},"user_average":7.94,"design_by":"Timothee ROUSSILHE","designer_url":"http:\/\/timothee-roussilhe.com","nominee_date":"2017-12-01T09:15:07+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512724507,"is_voting_open":false,"is_site_of_the_day":true,"users_collection":[{"image":"avatar\/531689\/59ae6681745da.jpg","country":"China","social":{"twitter":"https:\/\/twitter.com\/sibeljiang","facebook":null,"linkedin":null},"displayName":"sibeljiang","id":531689,"username":"sibeljiang"},{"image":"avatar\/28399\/55bf26fe43ca7.jpeg","country":"Italy","social":{"twitter":"nod2007","facebook":null,"linkedin":"in\/coppolailenia","googleplus":null},"displayName":"Ilenia Coppola","id":28399,"username":"ileniacoppola"},{"image":"avatar\/397466\/590ca31eba5f0.jpg","country":"U.S.A.","social":{"twitter":"garymnorris","facebook":null,"linkedin":"gnorris02","googleplus":null},"displayName":"Gary Norris","id":397466,"username":"garymnorris"},{"image":"avatar\/532989\/59b652819b7ef.jpeg","country":"Portugal","social":{"twitter":null,"facebook":null,"linkedin":"in\/linkedindovitor\/"},"displayName":"Vitor Cardoso","id":532989,"username":"vitorcardoso"}],"users_collection_count":49,"code_result":{"finishAt":"2017-12-12T09:20:25+00:00","average":7.13,"number_of_votes":3,"votes":[{"average":6.75,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":8,"Accessibility":5,"WPO":7,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227378},{"average":7.8,"deleted":false,"scores":{"Semantics \/ SEO":8,"Animations \/ Transitions":8,"Accessibility":8,"WPO":8,"Responsive Design":7,"Markup \/ Meta-data":8},"judgeId":227380},{"average":6.85,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":4,"Accessibility":8,"WPO":8,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227385}]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31196,"site_name":"Performance Socks - Pacific&Co","slug":"performance-pacific-co","image":"submissions\/2017\/11\/5a1e844509b11.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a1e844509b11.jpg","mobile_thumbnail":"submissions\/2017\/11\/5a1e8445b521e.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":345418,"username":"herokidstudio","displayName":"Herokid Studio"},"url":"http:\/\/performance.pacificandco.com","sotd_date":"2017-12-06T00:00:00+00:00","type":"submission","country":{"id":"40","name":"Spain","countryId":"ES"},"user_average":7.88,"design_by":"Herokid Studio","designer_url":"http:\/\/www.herokidstudio.es","nominee_date":"2017-11-29T09:00:13+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512550813,"is_voting_open":false,"is_site_of_the_day":true,"users_collection":[{"image":"avatar\/527764\/599b2244a61a7.jpg","country":"Ukraine","social":{"twitter":null,"facebook":"profile.php?id=100004094330209","linkedin":"in\/alexandr-yaremenko\/"},"displayName":"Alexandr Yaremenko","id":527764,"username":"alexandr-yaremenko"},{"image":"default\/user7.jpg","country":"","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"Jun","id":479296,"username":"kjjune89"},{"image":"avatar\/470480\/5888f12a5ea3f.png","country":"Canada","social":{"twitter":"https:\/\/twitter.com\/denmandigital\/","facebook":"https:\/\/www.facebook.com\/denmandigital\/","linkedin":"https:\/\/www.linkedin.com\/company\/denman-digital"},"displayName":"Denman Digital","id":470480,"username":"DenmanDigital"},{"image":"default\/user8.jpg","country":"","social":[],"displayName":"Johnvis","id":417206,"username":"Johnvis"}],"users_collection_count":23,"code_result":{"finishAt":"2017-12-12T15:06:45+00:00","average":6.74,"number_of_votes":5,"votes":[{"average":6.65,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":6,"Accessibility":7,"WPO":7,"Responsive Design":6,"Markup \/ Meta-data":7},"judgeId":227299},{"average":6.55,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":7,"Accessibility":4,"WPO":8,"Responsive Design":7,"Markup \/ Meta-data":6},"judgeId":227278},{"average":6.5,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":7,"Accessibility":4,"WPO":7,"Responsive Design":6,"Markup \/ Meta-data":7},"judgeId":227182},{"average":7,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":9,"Accessibility":6,"WPO":6,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227371},{"average":7,"deleted":false,"scores":{"Semantics \/ SEO":7,"Animations \/ Transitions":9,"Accessibility":6,"WPO":6,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227371}]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31225,"site_name":"Super Crowds inc.","slug":"super-crowds-inc","image":"submissions\/2017\/11\/5a1fc1ec29816.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a1fc1ec29816.jpg","mobile_thumbnail":"submissions\/2017\/11\/5a1fc1ecbb067.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":466111,"username":"supercrowds","displayName":"Super Crowds inc."},"url":"https:\/\/supercrowds.co","sotd_date":"2017-12-05T00:00:00+00:00","type":"submission","country":{"id":"60","name":"Japan","countryId":"JP"},"user_average":8.02,"design_by":"Super Crowds inc.","designer_url":"https:\/\/supercrowds.co","nominee_date":"2017-11-30T09:01:33+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512637293,"is_voting_open":false,"is_site_of_the_day":true,"users_collection":[{"image":"default\/user4.jpg","country":"","social":[],"displayName":"maria-martini","id":456578,"username":"maria-martini"},{"image":"default\/user8.jpg","country":"","social":[],"displayName":"tanko-ho","id":555063,"username":"tanko-ho"},{"image":"default\/user6.jpg","country":"South Korea","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"zagmaster","id":554842,"username":"zagmaster"},{"image":"default\/user1.jpg","country":"","social":[],"displayName":"yuske-nishida","id":531235,"username":"yuske-nishida"}],"users_collection_count":83,"code_result":{"finishAt":"2017-12-11T08:24:52+00:00","average":6.76,"number_of_votes":3,"votes":[{"average":6.9,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":8,"Accessibility":4,"WPO":8,"Responsive Design":8,"Markup \/ Meta-data":6},"judgeId":227278},{"average":6.95,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":8,"Accessibility":5,"WPO":7,"Responsive Design":8,"Markup \/ Meta-data":7},"judgeId":227182},{"average":6.6,"deleted":false,"scores":{"Semantics \/ SEO":6,"Animations \/ Transitions":7,"Accessibility":5,"WPO":7,"Responsive Design":7,"Markup \/ Meta-data":7},"judgeId":227371}]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31174,"site_name":"Shaan Atari","slug":"shaan-atari","image":"submissions\/2017\/11\/5a197c98a05b8.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/11\/5a197c98a05b8.jpg","mobile_thumbnail":"submissions\/2017\/11\/5a197c9931e2d.jpg","mobile_site_of_the_week":"submissions\/2017\/12\/5a26b8b6c5d42.jpg","mobile_excellence":"submissions\/2017\/12\/5a26b8b6cd3ba.mp4"},"user":{"id":415015,"username":"artistsweb","displayName":"Artistsweb"},"url":"https:\/\/www.shaanatari.com","sotd_date":"","type":"submission","country":{"id":"118","name":"United Kingdom","countryId":"GB"},"user_average":7.33,"design_by":"Artistsweb","designer_url":"https:\/\/www.artistsweb.com","nominee_date":"2017-11-27T09:14:56+00:00","is_honorable_mention":true,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1512378896,"is_voting_open":false,"is_site_of_the_day":false,"users_collection":[{"image":"default\/user2.jpg","country":"","social":[],"displayName":"anatoliy-voronkin","id":554794,"username":"anatoliy-voronkin"},{"image":"avatar\/49\/50a0d407bec95.jpeg","country":"","social":{"twitter":"http:\/\/twitter.com\/oscartv","facebook":"http:\/\/www.facebook.com\/oscartv","pinterest":"http:\/\/pinterest.com\/oscartv\/","linkedin":"http:\/\/www.linkedin.com\/in\/oscartv","googleplus":null},"displayName":"\u00d3scar P\u00e9rez.","id":49,"username":"oscar-perez"},{"image":"avatar\/263934\/58cfdc47debc5.jpg","country":"Ukraine","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"Alina Rakhimova","id":263934,"username":"alina.rakhimova.5"},{"image":"avatar\/473418\/598f44b25f271.jpg","country":"Kazakhstan","social":{"twitter":null,"facebook":null,"linkedin":null},"displayName":"DarkDesigner","id":473418,"username":"DarkDesigner"}],"users_collection_count":11,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":true,"site_of_the_week_mobile_date":true}]',
      row2: '[{"id":31316,"site_name":"The hunt for the Cheshire Cat","slug":"the-hunt-for-the-cheshire-cat","image":"submissions\/2017\/12\/5a27cf383e029.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a27cf383e029.jpg","mobile_thumbnail":"submissions\/2017\/12\/5a27cf3911d50.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":207,"username":"immersivegarden","displayName":"Immersive Garden"},"url":"https:\/\/cheshirecat.inthehiddencity.com\/","sotd_date":"","type":"submission","country":{"id":"42","name":"France","countryId":"FR"},"user_average":8.32,"design_by":"Immersive Garden","designer_url":"http:\/\/www.immersive-g.com","nominee_date":"2017-12-07T09:11:10+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513242670,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"default\/user8.jpg","country":"","social":[],"displayName":"Johnvis","id":417206,"username":"Johnvis"},{"image":"avatar\/5193\/594db59d3f81d.jpg","country":"Japan","social":{"twitter":"10_Designing","facebook":"kenta.kamiya5774","behance":"tuffgong","pinterest":"kenta57\/","linkedin":"profile\/edit?trk=hb_tab_pro_top"},"displayName":"tuffgong","id":5193,"username":"tuffgong"},{"image":"default\/user5.jpg","country":"Ukraine","social":{"twitter":null,"facebook":"sveta.mylchenko","linkedin":"in\/sveta-mylchenko"},"displayName":"sveta-mylchenko","id":485431,"username":"sveta-mylchenko"},{"image":"avatar\/543042\/59eacbb98778f.jpg","country":"U.S.A.","social":{"twitter":"feliperibeiros","facebook":null,"linkedin":"in\/andre-felipe-ribeiro"},"displayName":"Andre Ribeiro","id":543042,"username":"andre-felipe-ribeiro"}],"users_collection_count":13,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31272,"site_name":"LIG WORKS","slug":"lig-works","image":"submissions\/2017\/12\/5a24ee0806004.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a24ee0806004.jpg","mobile_thumbnail":"submissions\/2017\/12\/5a24ee088cba5.jpg","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":444924,"username":"LIG","displayName":"LIG"},"url":"https:\/\/liginc.co.jp\/works\/","sotd_date":"","type":"submission","country":{"id":"60","name":"Japan","countryId":"JP"},"user_average":7.21,"design_by":"Tommy, Zawa, Pahyan \/ LIG INC.","designer_url":"https:\/\/liginc.co.jp\/works","nominee_date":"2017-12-05T09:02:11+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513069331,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"\/default\/user3.jpg","country":"Singapore","social":[],"displayName":"nickngqs","id":57201,"username":"nickngqs"},{"image":"avatar\/257876\/57cd5abc309a0.jpeg","country":"Croatia","social":{"twitter":"https:\/\/twitter.com\/CookieKatana?lang=en","facebook":"https:\/\/www.facebook.com\/marina.pdg","linkedin":"https:\/\/www.linkedin.com\/in\/marinapdg\/","googleplus":null},"displayName":"Marina Mijatovi\u0107","id":257876,"username":"marina.pdg"},{"image":"default\/user5.jpg","country":"","social":[],"displayName":"hsiao-wen-hung","id":542407,"username":"hsiao-wen-hung"},{"image":"avatar\/5193\/594db59d3f81d.jpg","country":"Japan","social":{"twitter":"10_Designing","facebook":"kenta.kamiya5774","behance":"tuffgong","pinterest":"kenta57\/","linkedin":"profile\/edit?trk=hb_tab_pro_top"},"displayName":"tuffgong","id":5193,"username":"tuffgong"}],"users_collection_count":7,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31317,"site_name":"Nove","slug":"nove","image":"submissions\/2017\/12\/5a27c45504ef6.png","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a27c45504ef6.png","mobile_thumbnail":"submissions\/2017\/12\/5a27c46713f86.png","mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":62101,"username":"atelier-design","displayName":"Atelier Design"},"url":"http:\/\/nove.eu\/","sotd_date":"","type":"submission","country":{"id":"12","name":"Belgium","countryId":"BE"},"user_average":7.62,"design_by":"Atelier Design","designer_url":"http:\/\/www.atelierdesign.be","nominee_date":"2017-12-07T09:11:06+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513242666,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"default\/user5.jpg","country":"","social":[],"displayName":"hsiao-wen-hung","id":542407,"username":"hsiao-wen-hung"},{"image":"default\/user8.jpg","country":"","social":[],"displayName":"Johnvis","id":417206,"username":"Johnvis"},{"image":"avatar\/5193\/594db59d3f81d.jpg","country":"Japan","social":{"twitter":"10_Designing","facebook":"kenta.kamiya5774","behance":"tuffgong","pinterest":"kenta57\/","linkedin":"profile\/edit?trk=hb_tab_pro_top"},"displayName":"tuffgong","id":5193,"username":"tuffgong"},{"image":"default\/user5.jpg","country":"Ukraine","social":{"twitter":null,"facebook":"sveta.mylchenko","linkedin":"in\/sveta-mylchenko"},"displayName":"sveta-mylchenko","id":485431,"username":"sveta-mylchenko"}],"users_collection_count":7,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false},{"id":31313,"site_name":"TAO TAJIMA | Filmmaker","slug":"tao-tajima-filmmaker","image":"submissions\/2017\/12\/5a27aeadf0fbd.jpg","images":{"photo":null,"thumbnail":"submissions\/2017\/12\/5a27aeadf0fbd.jpg","mobile_thumbnail":null,"mobile_site_of_the_week":null,"mobile_excellence":null},"user":{"id":274789,"username":"hiroshi.yamanaka.j","displayName":"Hiroshi Yamanaka"},"url":"http:\/\/taotajima.jp\/","sotd_date":"","type":"submission","country":{"id":"60","name":"Japan","countryId":"JP"},"user_average":8.39,"design_by":"homunculus Inc.","designer_url":"http:\/\/homunculus.jp","nominee_date":"2017-12-06T08:57:38+00:00","is_honorable_mention":false,"is_site_of_the_month":false,"is_code_awards":false,"finish_voting_date":1513155458,"is_voting_open":true,"is_site_of_the_day":false,"users_collection":[{"image":"avatar\/382836\/5694805f7aec5.png","country":"Japan","social":{"twitter":"yuichiroharaiJP","facebook":"yuichiroharai","linkedin":null,"googleplus":null},"displayName":"Yuichiroh Arai","id":382836,"username":"yuichiroharai"},{"image":"avatar\/296971\/595f86c0f2e87.jpg","country":"Russia","social":{"twitter":"hellosummerway","facebook":"igor.zyuzin","linkedin":"in\/igor-zyuzin-16358a122\/","googleplus":null},"displayName":"Igor Zyuzin","id":296971,"username":"summerway"},{"image":"default\/user5.jpg","country":"","social":[],"displayName":"-1521","id":390704,"username":"-1521"},{"image":"avatar\/\/56b879b044f4e.jpg","country":"Netherlands","social":{"twitter":null,"facebook":"thomas.gorree","linkedin":"in\/thomas-gorree-1596302","googleplus":null},"displayName":"Thomas Gorree","id":390071,"username":"Thomas-Gorree"}],"users_collection_count":18,"code_result":{"finishAt":null,"average":0,"number_of_votes":0,"votes":[]},"has_google_mobile_seal":false,"site_of_the_week_mobile_date":false}]',
    };
  }

  render() {
    return (
        <div className="container">
          <BoxBackground bg={this.state.bg}/>
          <BoxBlock data={this.state.row1}/>
          <BoxBlock data={this.state.row2}/>
        </div>
    );
  }
}