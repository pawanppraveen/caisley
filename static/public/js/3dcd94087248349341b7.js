(()=>{var e={9669:(e,t,n)=>{e.exports=n(1609)},2750:(e,t,n)=>{"use strict";var r=n(7294),a=n(3935),l=n(4575),c=n.n(l),s=n(3913),i=n.n(s),o=n(1506),m=n.n(o),u=n(2205),f=n.n(u),E=n(8585),h=n.n(E),d=n(9754),p=n.n(d),v=n(9713),g=n.n(v),w=n(3362),y=n(7757),N=n.n(y),b=n(8926),k=n.n(b);const x=function(e){f()(l,e);var t,n,a=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var a=p()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return h()(this,e)});function l(e){var t;return c()(this,l),t=a.call(this,e),g()(m()(t),"callApi",k()(N().mark((function e(){var n,r;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/footerData");case 2:return n=e.sent,e.next=5,n.json();case 5:if(r=e.sent,200===n.status){e.next=8;break}throw Error(r.message);case 8:t.setState({store:r.store,coupon:r.coupon,deal:r.deal});case 9:case"end":return e.stop()}}),e)})))),t.state={store:[],coupon:[],deal:[]},t}return i()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){return r.createElement("footer",null,r.createElement("div",{className:"container-fluid py-3"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-3"},r.createElement("h3",null,"Stores"),r.createElement("ul",null,this.state.store.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.url},e.name))})))),r.createElement("div",{className:"col-sm-3"},r.createElement("h3",null,"Coupons"),r.createElement("ul",null,this.state.coupon.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.url},e.title))})))),r.createElement("div",{className:"col-sm-3"},r.createElement("h3",null,"Deals"),r.createElement("ul",null,this.state.deal.map((function(e,t){return r.createElement("li",{key:t},r.createElement("a",{href:e.url},e.title))})))),r.createElement("div",{className:"col-sm-3"},r.createElement("h3",null,"Important Links"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"/"},"Home")),r.createElement("li",null,r.createElement("a",{href:"/blog"},"Blog")),r.createElement("li",null,r.createElement("a",{href:"/shop"},"Shop")),r.createElement("li",null,r.createElement("a",{href:"/faq"},"FAQ")),r.createElement("li",null,r.createElement("a",{href:"/about-us"},"About Us")),r.createElement("li",null,r.createElement("a",{href:"/contact-us"},"Contact Us")))))),r.createElement("div",{className:"social"},r.createElement("div",{className:"social-container"},r.createElement("ul",{className:"social-icons"},r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("img",{src:"/images/icons/facebook-white.svg",className:"first"}),r.createElement("img",{src:"/images/icons/facebook.svg",className:"second"}))),r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("img",{src:"/images/icons/linkedin-white.svg",className:"first"}),r.createElement("img",{src:"/images/icons/linkedin.svg",className:"second"}))),r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("img",{src:"/images/icons/twitter-white.svg",className:"first"}),r.createElement("img",{src:"/images/icons/twitter.svg",className:"second"}))),r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("img",{src:"/images/icons/instagram-white.svg",className:"first"}),r.createElement("img",{src:"/images/icons/instagram.svg",className:"second"}))),r.createElement("li",null,r.createElement("a",{href:"#"},r.createElement("img",{src:"/images/icons/whatsapp-white.svg",className:"first"}),r.createElement("img",{src:"/images/icons/whatsapp-button.svg",className:"second"}))))),r.createElement("span",null,"Copyrights 2021, Casley India Pvt.Ltd."),r.createElement("span",null,"Email: hello@rewardeagle.com")))}}]),l}(r.Component);var A=n(5813);const S=function(e){f()(l,e);var t,n,a=(t=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p()(t);if(n){var a=p()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return h()(this,e)});function l(e){var t;return c()(this,l),t=a.call(this,e),g()(m()(t),"changeActive",(function(e){t.setState({active:e})})),g()(m()(t),"showAnswer",(function(e){e==t.state.showAnswer?t.setState({showAnswer:""}):t.setState({showAnswer:e})})),t.state={active:1,showAnswer:""},t}return i()(l,[{key:"render",value:function(){var e=this;return r.createElement(r.Fragment,null,r.createElement(w.Z,null),r.createElement("section",{className:"faqs my-5"},r.createElement("div",{className:"container"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col-sm-4"},r.createElement("div",{className:"menu-btn"},r.createElement("ul",null,A.faqCat.map((function(t,n){return r.createElement("li",{key:n,onClick:function(){return e.changeActive(t.id)},className:t.id==e.state.active?"active":null},t.cat)}))))),r.createElement("div",{className:"col-sm-8"},r.createElement("div",{className:"faq-content"},A.faqQA.filter((function(t){return t.catId==e.state.active})).map((function(t,n){return r.createElement("div",{key:n},r.createElement("h6",{onClick:function(){return e.showAnswer(t.id)}},t.quest,r.createElement("span",null,t.id==e.state.showAnswer?"-":"+")),r.createElement("div",{className:t.id==e.state.showAnswer?"answer active":"answer"},r.createElement("p",null,t.ans)))}))))))),r.createElement(x,null))}}]),l}(r.Component);(0,a.render)(r.createElement(S,null),document.getElementById("root"))},7294:(e,t,n)=>{"use strict";e.exports=n(2408)}},t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,n.x=e=>{},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={5083:0},t=[[2750,2244,6737,3935]],r=e=>{},a=(a,l)=>{for(var c,s,[i,o,m,u]=l,f=0,E=[];f<i.length;f++)s=i[f],n.o(e,s)&&e[s]&&E.push(e[s][0]),e[s]=0;for(c in o)n.o(o,c)&&(n.m[c]=o[c]);for(m&&m(n),a&&a(l);E.length;)E.shift()();return u&&t.push.apply(t,u),r()},l=self.webpackChunkreward=self.webpackChunkreward||[];function c(){for(var r,a=0;a<t.length;a++){for(var l=t[a],c=!0,s=1;s<l.length;s++){var i=l[s];0!==e[i]&&(c=!1)}c&&(t.splice(a--,1),r=n(n.s=l[0]))}return 0===t.length&&(n.x(),n.x=e=>{}),r}l.forEach(a.bind(null,0)),l.push=a.bind(null,l.push.bind(l));var s=n.x;n.x=()=>(n.x=s||(e=>{}),(r=c)())})(),n.x()})();