(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){e.exports=n(47)},47:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(27),o=n.n(c),l=n(1),i=n(2),u=n(4),s=n(3),m=n(35),b=n(6),p=n(16),f=(n(12),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-logo-wrapper pr-4 text-dark vertical-center"},r.a.createElement("img",{alt:"AON Logo",src:"img/logo.svg",width:"165px"}))}}]),n}(a.Component)),v=n(28),d=n(17),h=n(18),j=function(e){var t;switch(e){case"faArchway":t=d.a;break;case"faCog":t=d.b;break;case"faFacebook":t=h.a;break;case"faInstagramSquare":t=h.b;break;case"faTwitter":t=h.c;break;default:t=d.a}return r.a.createElement(v.a,{icon:t})},g=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero-links-wrapper hero-links-general-wrapper"},r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faCog")," Settings"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-right"}),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-right"}))}}]),n}(a.Component),O=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"hero-links-wrapper hero-links-social-wrapper"},r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faFacebook")," Facebook"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faTwitter")," Twitter"),r.a.createElement("button",{className:"btn btn-nav-link btn-sm form-control text-left"},j("faInstagramSquare")," Instagram"))}}]),n}(a.Component),E=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"",className:"hero-bg-img",src:"https://static-cdn.jtvnw.net/jtv_user_pictures/ce643359-965f-4002-99da-e8c3acdc2a26-profile_banner-480.jpeg"}))}}]),n}(a.Component),y=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{height:120,width:"100%"}},r.a.createElement(f,null),r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(E,null))}}]),n}(a.Component),k=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=function(e){return"tv"===(e=e.toLowerCase())?"col-1":"gaming"===e?"col-3":"col-2"};return r.a.createElement("div",{id:"navbar-custom",className:"bg-custom col-12 m-0 navbar-custom row"},this.props.navItems.map((function(n){return r.a.createElement("div",{className:"bg-light ".concat(t(n)," col-md-2 m-0 p-0 rounded-0"),key:"nav-"+n},r.a.createElement("a",{href:"/#/".concat("home"===n.toLowerCase()?"":n.toLowerCase())},r.a.createElement("button",{className:"btn btn-light form-control navbar-btn p-0 rounded-0  text-center text-muted text-uppercase ".concat(e.props.activeItem===n.toLowerCase()?"nav-btn-active":""),name:n.toLowerCase(),onClick:function(t){return e.props.setActiveItem(t)}},n)))})))}}]),n}(a.Component),C=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={activeItem:"home",navItems:["Home","TV","Film","Comics","Gaming","Misc"]},a.setActiveItem=a.setActiveItem.bind(Object(p.a)(a)),a}return Object(i.a)(n,[{key:"setActiveItem",value:function(e){this.setState({activeItem:e.target.name})}},{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"bg-custom-2 header-sub-wrapper"},r.a.createElement(y,null),r.a.createElement(k,{activeItem:this.state.activeItem,navItems:this.state.navItems,setActiveItem:this.setActiveItem})))}}]),n}(a.Component),w=n(29),x=n(30);function N(){var e=Object(w.a)(["\n      border-bottom: 1px solid #0f0f0f;\n      display: block;\n      font-size: 1.6em;\n      line-height: 1.3;\n      letter-spacing: -0.5px;\n      margin-bottom: 1rem;\n      padding-bottom: 1rem;\n      position: relative;\n      &:before {\n        background: ",";\n        bottom: 0;\n        content: '';\n        display: block;\n        height: 5px;\n        left: 0;\n        position: absolute;\n        width: 25px;\n      }\n    "]);return N=function(){return e},e}var I,T=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=x.a.div(N(),this.props.tabColour?this.props.tabColour:"#ccc");return r.a.createElement(e,null,r.a.createElement("h2",{style:{fontWeight:300,textTransform:"uppercase"}},this.props.title))}}]),n}(a.Component),L={ui:{style:{sectionTab:{featured:"#f44336",tv:"#8bc34a",film:"#009688",gaming:{retro:"#cddc39",modern:"#795548",board:"#673ab7"},comics:"#ffc107"}}}},A=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){fetch("/api/quizzes/list").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.featured,title:"Featured"}),Array(200).fill().map((function(e,t){return r.a.createElement("p",{key:"test-"+t+1,style:{fontSize:18,fontWeight:300}},"Scroll-Testing Content ",t+1)})))}}]),n}(a.Component),S=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.tv,title:"TV"}))}}]),n}(a.Component),B=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.film,title:"Film"}))}}]),n}(a.Component),F=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.gaming.modern,title:"Gaming"}))}}]),n}(a.Component),G=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.gaming.retro,title:"Retro Gaming"}),r.a.createElement("p",null,"Rise from yaw gwaveee"))}}]),n}(a.Component),R=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.gaming.modern,title:"Modern Gaming"}),r.a.createElement("p",null,"Breath of the Wild 2 will be quite the barn burner!"))}}]),n}(a.Component),q=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.gaming.board,title:"Board Gaming"}),r.a.createElement("p",null,"Roll the dice, Bertha..."))}}]),n}(a.Component),z=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,{tabColour:L.ui.style.sectionTab.comics,title:"Comics"}))}}]),n}(a.Component),D=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"GOT QUESTIONS?"),r.a.createElement("p",null))}}]),n}(a.Component),M=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("p",{className:"text-muted text-right",style:{fontWeight:300}},"\xa9 The Age of Nerd ",(new Date).getFullYear())))}}]),n}(a.Component),W=n(34),Y=n.n(W),_=(n(26),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).easterEgg=function(){},e}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(Y.a,{action:this.easterEgg,timeout:5e3},r.a.createElement("div",{className:"konami-window"},r.a.createElement("img",{alt:"Konami start screen gif \u2014\xa0easter egg",src:"https://thumbs.gfycat.com/DeadlyPlushCowrie-small.gif",style:{borderRadius:"10px"}})))}}]),n}(r.a.Component)),J=function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"handleScroll",value:function(){var e=document.getElementById("navbar-custom");window.scrollY<=I?e.classList.contains("fixed-top")&&e.classList.remove("fixed-top"):window.scrollY>I&&(e.classList.contains("fixed-top")||e.classList.add("fixed-top"))}},{key:"componentDidMount",value:function(){var e=document.getElementById("navbar-custom");I||(I=e.getBoundingClientRect().top+window.scrollY),window.addEventListener("scroll",this.handleScroll,{passive:!0}),fetch("/api/getList").then((function(e){return e.json()})).then((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement("div",null,r.a.createElement(C,null),r.a.createElement(_,null),r.a.createElement("main",{className:"flex-shrink-0",role:"main",style:{marginTop:100}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"content"},r.a.createElement(b.a,{exact:!0,path:"/",component:A}),r.a.createElement(b.a,{path:"/tv",component:S}),r.a.createElement(b.a,{path:"/film",component:B}),r.a.createElement(b.a,{path:"/gaming",component:F}),r.a.createElement(b.a,{path:"/retrogaming",component:G}),r.a.createElement(b.a,{path:"/moderngaming",component:R}),r.a.createElement(b.a,{path:"/boardgaming",component:q}),r.a.createElement(b.a,{path:"/comics",component:z}),r.a.createElement(b.a,{path:"/contact",component:D})))),r.a.createElement(M,null)))}}]),n}(a.Component);o.a.render(r.a.createElement(J,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8833b3a5.chunk.js.map