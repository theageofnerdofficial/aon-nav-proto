(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,n){},22:function(e,t){},33:function(e,t,n){},43:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(20),c=n.n(o),i=n(23),l=n(17),s=n(35),u=n(36),m=n(1),d=n(2),f=n(12),b=n(4),p=n(3),h=n(42),g=n(7),v=(n(19),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-logo-wrapper pr-4 text-dark vertical-center"},r.a.createElement("img",{alt:"AON Logo",src:"img/logo.svg",width:"165px"}))}}]),n}(a.Component)),O=n(37),E=n(18),y=n(24),j=function(e){var t;switch(e){case"faMoon":t=E.c;break;case"faSun":t=E.d;break;case"faArchway":t=E.a;break;case"faCog":t=E.b;break;case"faFacebook":t=y.a;break;case"faInstagramSquare":t=y.b;break;case"faTwitter":t=y.c;break;default:t=E.a}return r.a.createElement(O.a,{icon:t})},k=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"hero-links-wrapper hero-links-general-wrapper"},r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faCog")," Settings"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left",onClick:function(t){return e.props.toggleLights()}},this.props.lightsOff?j("faSun"):j("faMoon"),"\xa0",this.props.lightsOff?"Lighten":"Darken"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"}))}}]),n}(a.Component),w=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero-links-wrapper hero-links-social-wrapper"},r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faFacebook")," Facebook"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faTwitter")," Twitter"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faInstagramSquare")," Instagram"))}}]),n}(a.Component),x=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"",className:"hero-bg-img",src:"https://static-cdn.jtvnw.net/jtv_user_pictures/ce643359-965f-4002-99da-e8c3acdc2a26-profile_banner-480.jpeg"}))}}]),n}(a.Component),C=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:120,width:"100%"}},r.a.createElement(v,null),r.a.createElement(k,{lightsOff:this.props.lightsOff,toggleLights:this.props.toggleLights}),r.a.createElement(w,null),r.a.createElement(x,null))}}]),n}(a.Component),N=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=function(e){return"tv"===(e=e.toLowerCase())?"col-1":"gaming"===e?"col-3":"col-2"};return r.a.createElement("div",{id:"navbar-custom",className:"bg-custom col-12 m-0 navbar-custom row"},this.props.navItems.map((function(n){return r.a.createElement("div",{className:"bg-light ".concat(t(n)," col-md-2 m-0 p-0 rounded-0"),key:"nav-"+n},r.a.createElement("a",{href:"/#/".concat("home"===n.toLowerCase()?"":n.toLowerCase())},r.a.createElement("button",{className:"btn btn-light form-control navbar-btn p-0 rounded-0  text-center text-muted text-uppercase ".concat(e.props.activeItem===n.toLowerCase()?"nav-btn-active":""),name:n.toLowerCase(),onClick:function(t){return e.props.setActiveItem(t)}},n)))})))}}]),n}(a.Component),B=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={activeItem:"home",navItems:["Home","TV","Film","Comics","Gaming","Misc"]},a.setActiveItem=a.setActiveItem.bind(Object(f.a)(a)),a}return Object(d.a)(n,[{key:"setActiveItem",value:function(e){this.setState({activeItem:e.target.name})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"bg-custom-2 header-sub-wrapper"},r.a.createElement(C,{lightsOff:this.props.lightsOff,toggleLights:this.props.toggleLights}),r.a.createElement(N,{activeItem:this.state.activeItem,navItems:this.state.navItems,setActiveItem:this.setActiveItem})))}}]),n}(a.Component),T=n(21),_=n(16);function L(){var e=Object(T.a)(["\n      border-bottom: 1px solid #0f0f0f;\n      display: block;\n      font-size: 1.6em;\n      line-height: 1.3;\n      letter-spacing: -0.5px;\n      margin-bottom: 1rem;\n      padding-bottom: 1rem;\n      position: relative;\n      &:before {\n        background: ",";\n        bottom: 0;\n        content: '';\n        display: block;\n        height: 5px;\n        left: 0;\n        position: absolute;\n        width: 25px;\n      }\n    "]);return L=function(){return e},e}var I=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=_.c.div(L(),this.props.tabColour?this.props.tabColour:"#ccc");return r.a.createElement(e,null,r.a.createElement("h2",{style:{fontWeight:300,textTransform:"uppercase"}},this.props.title))}}]),n}(a.Component),A={network:{headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept, Authorization"}},ui:{style:{sectionTab:{featured:"#f44336",tv:"#8bc34a",film:"#009688",gaming:{retro:"#cddc39",modern:"#795548",board:"#673ab7"},comics:"#ffc107"}}}},D={entities:{video:{getArr:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.extended_entities,a=n&&n.media,r=function(e){return e.toString().indexOf(".mp4")>=0&&e};return a?n.media.map((function(e){var n=e.video_info;if(n&&n.variants)return n.variants.map((function(e){return t?r(e.url):e.url}))})):[]},getPlayer:function(e){if(!(e.includes(void 0)||e.length<=0)){var t=e.reverse();return r.a.createElement("video",{width:"320",height:"240",controls:!0},t.map((function(e){return e.map((function(e){if("string"===typeof(t=e)&&void 0!==t&&t)return r.a.createElement("source",{src:e,type:"video/mp4"});var t}))})))}}}},status:{format:{removeLinkSuffix:function(e){return e.substring(e.length-23).indexOf("https://t.co")>=0?e.substring(0,e.length-23):e}},get:function(e,t){var n=t.retweeted_status?t.retweeted_status.full_text:t.full_text;return D.status.format.removeLinkSuffix(n)}}},S=D,F=(a.Component,function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"bg-light shadow rounded col-12 row p-0 m-0 mb-2"},r.a.createElement("div",{className:" col-2 text-center p-0 m-0"},r.a.createElement("span",{className:"text-primary",style:{border:"0px solid red",fontSize:40,textAlign:"center",width:"100%"}},j("faTwitter"))),r.a.createElement("div",{className:"col-10 py-2"},r.a.createElement("h6",{style:{fontWeight:300}},this.props.text),r.a.createElement("p",null,function(){if(e.props.entities_media)return e.props.entities_media.map((function(e){if(e.media_url)return r.a.createElement("img",{className:"rounded",width:"200px",src:e.media_url})}))}()),r.a.createElement("small",{className:"text-muted"},this.props.created_at)))}}]),n}(a.Component)),R=!1,W=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).state={twitterData:[],postData:[]},a.sanitizeTwitter=a.sanitizeTwitter.bind(Object(f.a)(a)),a}return Object(d.a)(n,[{key:"sanitizeTwitter",value:function(){var e=[];this.props.twitterData&&this.props.twitterData.forEach((function(t){var n={id:t.id,source:"twitter",user:t.user,text:t.full_text,created_at:t.created_at,lang:t.lang,retweet_count:t.retweet_count,favorite_count:t.favorite_count,entities_media:t.entities?t.entities.media:null,extended_entities_media:t.extended_entities?t.extended_entities.media:null};e.push(n)})),this.setState({postData:[].concat(e)}),console.log(this.state)}},{key:"componentDidUpdate",value:function(){this.props.twitterData&&this.props.twitterData.length>0&&(R||(this.sanitizeTwitter(),R=!0))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.featured,title:"Featured"}),r.a.createElement("br",null),r.a.createElement("h4",{className:"text-muted",style:{fontWeight:300}},"Nintendo UK (",this.props.twitterData.length,")"),this.state.postData.map((function(e){return r.a.createElement(F,{created_at:e.created_at,entities_media:e.entities_media,extended_entities_media:e.extended_entities_media,id:1,source:e.source,text:e.text,userData:e.user})})))}}]),n}(a.Component),z=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.tv,title:"TV"}))}}]),n}(a.Component),M=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.film,title:"Film"}))}}]),n}(a.Component),G=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.gaming.modern,title:"Gaming"}))}}]),n}(a.Component),U=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.gaming.retro,title:"Retro Gaming"}),r.a.createElement("p",null,"Rise from yaw gwaveee"))}}]),n}(a.Component),q=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.gaming.modern,title:"Modern Gaming"}),r.a.createElement("p",null,"Breath of the Wild 2 will be quite the barn burner!"))}}]),n}(a.Component),P=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.gaming.board,title:"Board Gaming"}),r.a.createElement("p",null,"Roll the dice, Bertha..."))}}]),n}(a.Component),J=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(I,{tabColour:A.ui.style.sectionTab.comics,title:"Comics"}))}}]),n}(a.Component),K=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"GOT QUESTIONS?"),r.a.createElement("p",null))}}]),n}(a.Component),Y=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-muted text-right",style:{fontWeight:300}},"\xa9 The Age of Nerd ",(new Date).getFullYear())))}}]),n}(a.Component),H=n(41),V=n.n(H),Q=(n(33),function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(m.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).easterEgg=function(){},e}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(V.a,{action:this.easterEgg,timeout:5e3},r.a.createElement("div",{className:"konami-window"},r.a.createElement("img",{alt:"Konami start screen gif \u2014\xa0easter egg",src:"https://thumbs.gfycat.com/DeadlyPlushCowrie-small.gif",style:{borderRadius:"10px"}})))}}]),n}(r.a.Component)),X={body:"#FFF",heroBgImgOpacity:.5,heroBgCol:"#0048a1",modalBody:"#fff",navBtnBg:"#f8f9fa",navBtnBorder:"#f8f9fa",text:"#000"},Z={body:"#191a1b",heroBgCol:"#000",heroBgImgOpacity:.1,modalBody:"#191a1b",navBtnBg:"#282829",navBtnBorder:"#000",navBtnColActive:"#fff",text:"#FAFAFA"};function $(){var e=Object(T.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    background: "," !important;\n    color: ",";\n  }\n  \n  .bg-custom-2 {\n    background-color: ",";\n  }\n\n  .btn-modal-close {\n    font-weight: 300;\n  }\n\n  .btn-light {\n    background-color: "," !important;\n    color: ",";\n  }\n\n  .btn-login {\n    border: 0 !important;\n  }\n\n  button.close {\n    text-shadow: 0;\n    color: ",";\n  }\n\n  .footer {\n    background-color: ",";\n  }\n\n  .hero-bg-img {\n    opacity: ",";\n  }\n\n  input {\n    background-color: "," !important;\n    color: "," !important;\n  }\n\n  .modal-content {\n    background-color: "," !important;\n    border: 0;\n  }\n\n  .modal-dialog {\n    color: ",";\n  }\n\n  .modal-body, .modal-footer, .modal-header {\n    background-color: "," !important;\n    border-color: ",";\n    color: ",";\n  }\n  \n  .nav-btn-active {\n    color: "," !important;\n  }\n\n  .navbar-btn {\n    background: ",";\n    border-color: ",";\n  }\n  "]);return $=function(){return e},e}var ee,te=Object(_.b)($(),(function(e){return e.theme.body}),(function(e){return e.theme.text}),(function(e){return e.theme.heroBgCol}),(function(e){return e.theme.navBtnBg}),(function(e){return e.theme.navBtnCol}),(function(e){return e.theme.text}),(function(e){return e.theme.body}),(function(e){return e.theme.heroBgImgOpacity}),(function(e){return e.theme.modalBody}),(function(e){return e.theme.text}),(function(e){return e.theme.modalBody}),(function(e){return e.theme.text}),(function(e){return e.theme.modalBody}),(function(e){return e.theme.modalBody}),(function(e){return e.theme.text}),(function(e){return e.theme.navBtnColActive}),(function(e){return e.theme.navBtnBg}),(function(e){return e.theme.navBtnBorder})),ne=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"btn btn-light btn-link btn-login","data-toggle":"modal","data-target":"#exampleModalLong",style:{border:0,fontWeight:300,letterSpacing:-1,position:"absolute",right:15,top:185,width:145}},"Login/Register")}}]),n}(a.Component),ae=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{className:"form-control",placeholder:"Email address",style:{fontWeight:300}}),r.a.createElement("input",{className:"form-control",placeholder:"Password",style:{fontWeight:300},type:"password"}),r.a.createElement("br",null),r.a.createElement("button",{className:"btn btn-primary form-control",style:{fontWeight:300}},"Sign In"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"text-center form-control border-0",style:{background:"none",fontSize:"0.8em",fontWeight:300}},"Don't have an account? ",r.a.createElement("a",{href:"#"},"Sign Up")))}}]),n}(a.Component),re=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"modal fade",id:"exampleModalLong",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLongTitle","aria-hidden":"true"},r.a.createElement("div",{className:"modal-dialog modal-dialog-centered",role:"document"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("div",{className:"modal-header"},r.a.createElement("h5",{className:"modal-title",id:"exampleModalLongTitle",style:{fontWeight:300,textTransform:"uppercase",letterSpacing:"-1px"}},"Login"),r.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close"},r.a.createElement("span",{"aria-hidden":"true"},"\xd7"))),r.a.createElement("div",{className:"modal-body"},r.a.createElement(ae,null)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{type:"button",className:"btn btn-sm btn-modal-close btn-secondary","data-dismiss":"modal"},"Close")))))}}]),n}(a.Component),oe=n(22),ce=n.n(oe),ie=function(e){Object(b.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).dynamicNavbar={handleScroll:function(){var e=document.getElementById("navbar-custom"),t=e.classList.contains("fixed-top"),n=window.pageYOffset;n<=ee&&t?e.classList.remove("fixed-top"):n>ee&&!t&&e.classList.add("fixed-top")},cache:{top:function(){var e=document.getElementById("navbar-custom");ee||(ee=e.getBoundingClientRect().top+window.pageYOffset)}}},a.state={lightsOff:!1,twitterData:[]},a.toggleLights=a.toggleLights.bind(Object(f.a)(a)),a.getTweetData=a.getTweetData.bind(Object(f.a)(a)),a}return Object(d.a)(n,[{key:"getTweetData",value:function(){return fetch("/api/getList").then((function(e){return e.json()})).then((function(e){return e}))}},{key:"toggleLights",value:function(){this.setState({lightsOff:!this.state.lightsOff})}},{key:"componentDidMount",value:function(){var e=this;this.dynamicNavbar.cache.top(),window.addEventListener("scroll",this.dynamicNavbar.handleScroll,{passive:!0}),fetch("/api/getList").then((function(e){return e.json()})).then((function(t){console.log(t),e.setState({twitterData:t.statuses})}))}},{key:"render",value:function(){var e=this;return r.a.createElement(h.a,null,r.a.createElement(_.a,{theme:this.state.lightsOff?Z:X},r.a.createElement(te,null),r.a.createElement("div",null,r.a.createElement(B,{lightsOff:this.state.lightsOff,toggleLights:this.toggleLights}),r.a.createElement(Q,null),r.a.createElement(re,null),r.a.createElement(ne,null),r.a.createElement("main",{className:"flex-shrink-0",role:"main",style:{marginTop:100}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(W,Object.assign({x:"Prop passed test",twitterData:e.state.twitterData},t))}}),r.a.createElement(g.a,{path:"/tv",component:z}),r.a.createElement(g.a,{path:"/film",component:M}),r.a.createElement(g.a,{path:"/gaming",component:G}),r.a.createElement(g.a,{path:"/retrogaming",component:U}),r.a.createElement(g.a,{path:"/moderngaming",component:q}),r.a.createElement(g.a,{path:"/boardgaming",component:P}),r.a.createElement(g.a,{path:"/comics",component:J}),r.a.createElement(g.a,{path:"/contact",component:K})))),r.a.createElement(Y,null))))}}]),n}(a.Component),le=Object(i.b)((function(e){return{userReducer:e.userReducer}}),(function(e){return{userSetTest:function(){return e({type:ce.a,payload:"John"})}}}))(ie),se={username:"sdds"},ue=Object(u.createLogger)(),me=Object(l.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case ce.a:return console.log("REDUCER ACTION WORKS"),Object.assign({},e,{username:t.payload});default:return e}}}),de=Object(l.d)(me,Object(l.a)(s.a,ue));c.a.render(r.a.createElement(i.a,{store:de},r.a.createElement(le,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.48519983.chunk.js.map