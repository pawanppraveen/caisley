(self.webpackChunkreward=self.webpackChunkreward||[]).push([[7791],{9669:(e,t,a)=>{e.exports=a(1609)},8023:(e,t,a)=>{"use strict";var n=a(7294),s=a(3935),r=a(7757),l=a.n(r),c=a(8926),i=a.n(c),m=a(4575),o=a.n(m),u=a(3913),f=a.n(u),d=a(1506),E=a.n(d),h=a(2205),g=a.n(h),p=a(8585),v=a.n(p),b=a(9754),N=a.n(b),y=a(9713),k=a.n(y),w=a(3362);const L=function(e){g()(r,e);var t,a,s=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=N()(t);if(a){var s=N()(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return v()(this,e)});function r(e){var t;return o()(this,r),t=s.call(this,e),k()(E()(t),"callApi",i()(l().mark((function e(){var a,n;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/footerData");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:t.setState({store:n.store,coupon:n.coupon,deal:n.deal});case 9:case"end":return e.stop()}}),e)})))),t.state={store:[],coupon:[],deal:[]},t}return f()(r,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){return n.createElement("footer",null,n.createElement("div",{className:"container-fluid py-3"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Stores"),n.createElement("ul",null,this.state.store.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.url},e.name))})))),n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Coupons"),n.createElement("ul",null,this.state.coupon.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.url},e.title))})))),n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Deals"),n.createElement("ul",null,this.state.deal.map((function(e,t){return n.createElement("li",{key:t},n.createElement("a",{href:e.url},e.title))})))),n.createElement("div",{className:"col-sm-3"},n.createElement("h3",null,"Important Links"),n.createElement("ul",null,n.createElement("li",null,n.createElement("a",{href:"/"},"Home")),n.createElement("li",null,n.createElement("a",{href:"/blog"},"Blog")),n.createElement("li",null,n.createElement("a",{href:"/shop"},"Shop")),n.createElement("li",null,n.createElement("a",{href:"/faq"},"FAQ")),n.createElement("li",null,n.createElement("a",{href:"/about-us"},"About Us")),n.createElement("li",null,n.createElement("a",{href:"/contact-us"},"Contact Us")))))),n.createElement("div",{className:"social"},n.createElement("div",{className:"social-container"},n.createElement("ul",{className:"social-icons"},n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/facebook-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/facebook.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/linkedin-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/linkedin.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/twitter-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/twitter.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/instagram-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/instagram.svg",className:"second"}))),n.createElement("li",null,n.createElement("a",{href:"#"},n.createElement("img",{src:"/images/icons/whatsapp-white.svg",className:"first"}),n.createElement("img",{src:"/images/icons/whatsapp-button.svg",className:"second"}))))),n.createElement("span",null,"Copyrights 2021, Casley India Pvt.Ltd."),n.createElement("span",null,"Email: hello@rewardeagle.com")))}}]),r}(n.Component);var S=a(8667),R=a.n(S),x=a(5813);const A=function(){return n.createElement("section",{className:"brands"},n.createElement("div",{className:"container-fluid"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-12 topNav"},n.createElement("h2",{className:"heading"},"Trusted Brands ",n.createElement("span",null,"we serve")),n.createElement(R(),x.params4,x.brands.map((function(e,t){return n.createElement("div",{key:t},n.createElement("img",{src:"/images/static/brands/"+e.img}))})))))))},C=function(){return n.createElement("section",{className:"newsletter"},n.createElement("div",null,n.createElement("h3",null,"Subscribe US and to avail more Offers"),n.createElement("p",null,"Save upt 90 % on things you love")),n.createElement("div",null,n.createElement("input",{className:"form-control",type:"email",placeholder:"Subscribe With Us"}),n.createElement("button",{className:"form-control kohei button"},"Subscribe")))},D=function(e){return n.createElement(n.Fragment,null,e.ads?n.createElement("section",{className:"recommended"},n.createElement("div",{className:"container-fluid"},n.createElement("h2",{className:"heading"},"New deals Onboard"),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-2"},e.ads.filter((function(e){if(12==e.type)return e})).slice(0,1).map((function(e,t){return n.createElement("a",{href:e.url,target:1==e.target?"_blank":"",key:t},n.createElement("img",{src:"/images/ads/"+e.image}))}))),e.ads.filter((function(e){if(11==e.type)return e})).slice(0,2).map((function(e,t){return n.createElement("div",{className:"col-sm-4",key:t},n.createElement("a",{href:e.url,target:1==e.target?"_blank":""},n.createElement("img",{src:"/images/ads/"+e.image})))})),n.createElement("div",{className:"col-sm-2"},e.ads.filter((function(e){if(13==e.type)return e})).slice(0,1).map((function(e,t){return n.createElement("a",{href:e.url,target:1==e.target?"_blank":"",key:t},n.createElement("img",{src:"/images/ads/"+e.image}))})))))):null)};a(5813);const B=function(e){g()(r,e);var t,a,s=(t=r,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=N()(t);if(a){var s=N()(this).constructor;e=Reflect.construct(n,arguments,s)}else e=n.apply(this,arguments);return v()(this,e)});function r(e){var t;return o()(this,r),t=s.call(this,e),k()(E()(t),"callApi",i()(l().mark((function e(){var a,n,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/shopData");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:s=[],n.basicList.forEach((function(e){s.push({id:e.id,name:e.name,start:0,end:4})})),t.setState({ads:n.ads,basicList:s,storeList:n.storeList});case 11:case"end":return e.stop()}}),e)})))),k()(E()(t),"downSlice",(function(e){t.state.basicList[e].start>0&&(t.state.basicList[e].start=t.state.basicList[e].start-4,t.state.basicList[e].end=t.state.basicList[e].end-4,t.setState({basicList:t.state.basicList}))})),k()(E()(t),"upSlice",(function(e){var a=t.state.basicList[e].id,n=t.state.basicList[e].end;t.state.storeList.filter((function(e){return JSON.parse(e.tags).includes(a)})).length>n&&(t.state.basicList[e].end=t.state.basicList[e].end+4,t.state.basicList[e].start=t.state.basicList[e].start+4,t.setState({basicList:t.state.basicList}))})),t.state={ads:t.props.ads,basicList:t.props.basicList,storeList:t.props.storeList},t}return f()(r,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){var e=this;return n.createElement(n.Fragment,null,n.createElement(w.Z,null),n.createElement("div",{className:"container-fluid dailyRanking"},n.createElement("h2",{className:"heading"},"Top Offers"),n.createElement("p",{className:"headingPara"},"Browse our best offers, including cashback deals increased for Limited time only"),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-2"},this.state.ads?n.createElement(n.Fragment,null,this.state.ads.filter((function(e){if(14==e.type||15==e.type)return e})).slice(0,2).map((function(e,t){return n.createElement("a",{href:e.url,target:1==e.target?"_blank":"",key:t},n.createElement("img",{src:"/images/ads/"+e.image,key:t,className:0==t?"mb-3":null}))}))):null),n.createElement("div",{className:"col-sm-8 doubleListdata"},this.state.storeList&&this.state.basicList?n.createElement("div",{className:"row shopBox"},this.state.basicList.map((function(t,a){return n.createElement("div",{className:"col-sm-4",key:a},n.createElement("div",{className:"card"},n.createElement("h3",null,t.name),e.state.storeList.slice(t.start,t.end).map((function(e,t){return n.createElement("a",{href:"/shop/"+e.url,key:t},n.createElement("img",{src:"/images/store/logo/"+e.logo}),n.createElement("div",{className:"arrowBox"},n.createElement("div",null,n.createElement("p",null,e.tagline),n.createElement("p",{className:"cashback"},"Upto ",e.cashback," cashback")),n.createElement("img",{src:"/images/icons/rightArrow.svg",className:"rightArrow"})),n.createElement("hr",null))})),n.createElement("div",{className:"leftRightArrow"},n.createElement("img",{src:"/images/icons/leftArrowRed.svg",className:"rightArrow",onClick:function(){return e.downSlice(a)}}),n.createElement("img",{src:"/images/icons/rightArrowRed.svg",className:"rightArrow",onClick:function(){return e.upSlice(a)}}))))}))):null),n.createElement("div",{className:"col-sm-2"},this.state.ads?n.createElement(n.Fragment,null,this.state.ads.filter((function(e){if(16==e.type||17==e.type)return e})).slice(0,2).map((function(e,t){return n.createElement("a",{href:e.url,target:1==e.target?"_blank":"",key:t},n.createElement("img",{src:"/images/ads/"+e.image,key:t,className:0==t?"mb-3":null}))}))):null))),this.state.ads?n.createElement(D,{title:"Today’s Recommended Advertisments",ads:this.state.ads}):null,n.createElement(C,null),n.createElement(A,null),n.createElement(L,null))}}]),r}(n.Component);(0,s.render)(n.createElement(B,null),document.getElementById("root"))},7294:(e,t,a)=>{"use strict";e.exports=a(2408)}}]);