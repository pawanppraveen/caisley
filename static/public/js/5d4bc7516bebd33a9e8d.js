(self.webpackChunkreward=self.webpackChunkreward||[]).push([[5599],{7228:e=>{e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}},3646:(e,t,a)=>{var n=a(7228);e.exports=function(e){if(Array.isArray(e))return n(e)}},6860:e=>{e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},8206:e=>{e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},319:(e,t,a)=>{var n=a(3646),r=a(6860),l=a(379),s=a(8206);e.exports=function(e){return n(e)||r(e)||l(e)||s()}},379:(e,t,a)=>{var n=a(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}},5599:(e,t,a)=>{"use strict";var n=a(7294),r=a(3935),l=a(319),s=a.n(l),c=a(7757),i=a.n(c),o=a(8926),m=a.n(o),u=a(4575),d=a.n(u),p=a(3913),h=a.n(p),v=a(1506),f=a.n(v),g=a(2205),E=a.n(g),y=a(8585),b=a.n(y),S=a(9754),N=a.n(S),C=a(9713),w=a.n(C),x=a(3362),k=a(262);const A=function(e){E()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=N()(t);if(a){var r=N()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function l(e){var t;return d()(this,l),(t=r.call(this,e)).state={active:"",user:[]},t}return h()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),"undefined"!=typeof Storage&&this.setState({user:JSON.parse(localStorage.getItem("user"))||[]}),this.setState({active:window.location.pathname}),"/admin/admin"===window.location.pathname&&this.setState({active:"/admin/users"}),"/admin/addBlog"===window.location.pathname&&this.setState({active:"/admin/blogs"}),"updateBlog"===window.location.pathname.split("/")[2]&&this.setState({active:"/admin/blogs"}),"/admin/createStore"===window.location.pathname&&this.setState({active:"/admin/adminStore"}),"updateStore"===window.location.pathname.split("/")[2]&&this.setState({active:"/admin/adminStore"})}},{key:"render",value:function(){var e=this;return n.createElement("div",{className:"col-sm-2 adminSidebar"},this.state.user.role?n.createElement("ul",null,"Admin"===this.state.user.role?[{url:"/admin/users",text:"Users",active:"/admin/users"},{url:"/admin/basics",text:"Basics",active:"/admin/basics"},{url:"/admin/meta",text:"Meta",active:"/admin/meta"},{url:"/admin/blogs",text:"Blogs",active:"/admin/blogs"},{url:"/admin/blogmeta",text:"Blog Meta",active:"/admin/blogmeta"},{url:"/admin/comments",text:"Comments",active:"/admin/comments"},{url:"/admin/contacts",text:"Contact",active:"/admin/contacts"},{url:"/admin/adminStore",text:"adminStore",active:"/admin/adminStore"},{url:"/admin/adminCategory",text:"adminCategory",active:"/admin/adminCategory"},{url:"/admin/adminCoupon",text:"adminCoupon",active:"/admin/adminCoupon"},{url:"/admin/adminDeal",text:"adminDeal",active:"/admin/adminDeal"},{url:"/admin/adminCashback",text:"adminCashback",active:"/admin/adminCashback"},{url:"/admin/leaderboard",text:"leaderboard",active:"/admin/leaderboard"},{url:"/admin/advertisement",text:"Advertisement",active:"/admin/advertisement"},{url:"/admin/questionBank",text:"QuestionBank",active:"/admin/questionBank"},{url:"/admin/survey",text:"Survey",active:"/admin/survey"},{url:"/admin/survey-response",text:"Survey Response",active:"/admin/survey-response"},{url:"/admin/cashback",text:"Cashback",active:"/admin/cashback"},{url:"/admin/career",text:"Career",active:"/admin/career"},{url:"/admin/job-applications",text:"Resume",active:"/admin/job-applications"}].map((function(t,a){return n.createElement("li",{key:a},n.createElement("a",{href:t.url,className:e.state.active===t.active?"active":null},t.text))})):"User"===this.state.user.role?[{url:"/user/refer-and-earn",text:"Refer & Earn",active:"/user/refer-and-earn"},{url:"/user/your-surveys",text:"Your Surveys",active:"/user/your-surveys"},{url:"/user/cashback-history",text:"Cashback History",active:"/user/cashback-history"}].map((function(t,a){return n.createElement("li",{key:a},n.createElement("a",{href:t.url,className:e.state.active===t.active?"active":null},t.text))})):null):null)}}]),l}(n.Component);var O=a(7217),I=a(2122),P=a(9756),L=a(5697),M=a.n(L),D=a(4184),R=a.n(D),_=a(3663),T={tag:_.iC,wrapTag:_.iC,toggle:M().func,className:M().string,cssModule:M().object,children:M().node,closeAriaLabel:M().string,charCode:M().oneOfType([M().string,M().number]),close:M().object},B=function(e){var t,a=e.className,r=e.cssModule,l=e.children,s=e.toggle,c=e.tag,i=e.wrapTag,o=e.closeAriaLabel,m=e.charCode,u=e.close,d=(0,P.Z)(e,["className","cssModule","children","toggle","tag","wrapTag","closeAriaLabel","charCode","close"]),p=(0,_.mx)(R()(a,"modal-header"),r);if(!u&&s){var h="number"==typeof m?String.fromCharCode(m):m;t=n.createElement("button",{type:"button",onClick:s,className:(0,_.mx)("close",r),"aria-label":o},n.createElement("span",{"aria-hidden":"true"},h))}return n.createElement(i,(0,I.Z)({},d,{className:p}),n.createElement(c,{className:(0,_.mx)("modal-title",r)},l),u||t)};B.propTypes=T,B.defaultProps={tag:"h5",wrapTag:"div",closeAriaLabel:"Close",charCode:215};const H=B;var q={tag:_.iC,className:M().string,cssModule:M().object},j=function(e){var t=e.className,a=e.cssModule,r=e.tag,l=(0,P.Z)(e,["className","cssModule","tag"]),s=(0,_.mx)(R()(t,"modal-body"),a);return n.createElement(r,(0,I.Z)({},l,{className:s}))};j.propTypes=q,j.defaultProps={tag:"div"};const U=j;var Z=a(9669),F=a.n(Z);var W=a(5813);const G=function(e){E()(l,e);var t,a,r=(t=l,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=N()(t);if(a){var r=N()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return b()(this,e)});function l(e){var t;return d()(this,l),t=r.call(this,e),w()(f()(t),"onChange",(function(e){t.setState(w()({},e.target.name,e.target.value))})),w()(f()(t),"handleClick",(function(e){t.setState({currentPage:Number(e.target.id)})})),w()(f()(t),"changeitemsPerPage",(function(e){t.setState({itemsPerPage:e.target.value})})),w()(f()(t),"searchSpace",(function(e){t.setState({search:e.target.value})})),w()(f()(t),"addModalOn",(function(){t.setState({addmodalIsOpen:!0})})),w()(f()(t),"uploadImage",(function(e){t.setState({image:e.target.files[0]})})),w()(f()(t),"callApi",m()(i().mark((function e(){var a,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/admin/adminAds");case 2:return a=e.sent,e.next=5,a.json();case 5:if(n=e.sent,200===a.status){e.next=8;break}throw Error(n.message);case 8:t.setState({data:n.data,loading:!1});case 9:case"end":return e.stop()}}),e)})))),w()(f()(t),"resetData",(function(){t.setState({addmodalIsOpen:!1,editmodalIsOpen:!1,type:"",url:"",status:"",target:"",image:null,oldImage:"",selectedId:"",error:!1,errorMesg:""}),window.scrollTo(0,0)})),w()(f()(t),"addHandler",(function(e){e.preventDefault();var a=new FormData;a.append("type",t.state.type),a.append("image",t.state.image),a.append("url",t.state.url),a.append("status",t.state.status),a.append("target",t.state.target),F().post("/admin/addAds",a).catch((function(e){return W.printError(e)})).then((function(e){e.data.success&&t.setState({data:[].concat(s()(t.state.data),[e.data.data])}),W.callSwal(e.data.message)}))})),w()(f()(t),"editModalOn",(function(e){t.setState({editmodalIsOpen:!0,selectedId:e.id,type:e.type,status:e.status,target:e.target,url:e.url,oldImage:e.image})})),w()(f()(t),"updateHandler",(function(e){e.preventDefault();var a=new FormData;a.append("id",t.state.selectedId),a.append("type",t.state.type),a.append("image",t.state.image),a.append("url",t.state.url),a.append("status",t.state.status),a.append("target",t.state.target),a.append("oldImage",t.state.oldImage),F().post("/admin/updateAds",a).catch((function(e){return W.printError(e)})).then((function(e){e.data.success&&t.setState({data:t.state.data.map((function(t){return t.id===parseInt(e.data.data.id)?t=e.data.data:t}))}),W.callSwal(e.data.message)})),t.resetData()})),w()(f()(t),"changeStatus",(function(e,a){if(1==a)var n=0;else n=1;var r={id:e,status:n};F().post("/admin/changeAdStatus",r).then((function(e){e.data.success&&t.setState({data:t.state.data.map((function(t){return t.id===parseInt(e.data.data.id)?t=e.data.data:t}))}),W.callSwal(e.data.message)})).catch((function(e){return W.printError(e)}))})),t.state={data:[],addmodalIsOpen:!1,editmodalIsOpen:!1,type:"",url:"",status:"",target:"",image:null,oldImage:"",selectedId:"",search:"",currentPage:1,itemsPerPage:100,loading:!0,error:!1,errorMesg:""},t}return h()(l,[{key:"componentDidMount",value:function(){window.scrollTo(0,0),this.callApi()}},{key:"render",value:function(){for(var e=this,t=this.state,a=t.currentPage,r=t.itemsPerPage,l=a*r,s=l-r,c=this.state.data.filter((function(t){return null==e.state.search||t.url.toLowerCase().includes(e.state.search.toLowerCase())?t:void 0})).slice(s,l).map((function(t,a){return n.createElement("tr",{key:a},n.createElement("td",null,a+1),n.createElement("td",null,W.adList.map((function(e,a){return n.createElement("span",{key:a},t.type==e.type?e.text:null)}))),n.createElement("td",{style:{maxWidth:"180px"}},n.createElement("img",{src:"/images/ads/"+t.image,style:{maxHeight:"60px",width:"auto",display:"inline"}})),n.createElement("td",null,t.url),n.createElement("td",null,n.createElement("div",{className:"onoffswitch"},n.createElement("input",{type:"checkbox",name:"category",className:"onoffswitch-checkbox",id:"Switch-"+t.id,onChange:function(a){return e.changeStatus(t.id,a.target.value)},value:t.status,checked:1==t.status}),n.createElement("label",{className:"onoffswitch-label",htmlFor:"Switch-"+t.id},n.createElement("span",{className:"onoffswitch-inner"}),n.createElement("span",{className:"onoffswitch-switch"})))),n.createElement("td",{className:"editIcon text-center"},n.createElement("img",{src:"/images/icons/edit.svg",alt:"Edit Icon",onClick:function(){return e.editModalOn(t)}})))})),i=[],o=1;o<=Math.ceil(this.state.data.length/r);o++)i.push(o);var m=i.map((function(t){return a==t?n.createElement("li",{key:t,id:t,onClick:e.handleClick,className:"active"}," ",t):n.createElement("li",{key:t,id:t,onClick:e.handleClick}," ",t)}));return n.createElement(n.Fragment,null,n.createElement(x.Z,null),n.createElement("div",{className:"container-fluid admin"},n.createElement("div",{className:"row"},n.createElement(A,null),n.createElement("div",{className:"col-sm-10"},n.createElement("h2",{className:"heading"},"Admin ( Advertisement )"),n.createElement("div",{className:"btn-pag"},n.createElement("div",{className:"perPage"},n.createElement("div",null,n.createElement("label",null,"Add Advertisement here"),n.createElement("button",{className:"casleyBtn",onClick:this.addModalOn},"Add Advertisement")),n.createElement("div",null,n.createElement("label",null,"Items per page"),n.createElement("select",{className:"form-control",required:!0,value:r,onChange:function(t){return e.changeitemsPerPage(t)}},n.createElement("option",null,r),n.createElement("option",{value:"10"},"10"),n.createElement("option",{value:"25"},"25"),n.createElement("option",{value:"50"},"50"),n.createElement("option",{value:"100"},"100")))),n.createElement("div",{className:"search"},n.createElement("div",{className:"noFlex searchInput"},n.createElement("label",null,"Search Here"),n.createElement("input",{type:"text",placeholder:"Search here",className:"form-control",onChange:function(t){return e.searchSpace(t)}})),n.createElement("div",{className:"noFlex"},n.createElement("label",null,"Page Numbers"),n.createElement("ul",{className:"page-numbers"},m," ")))),n.createElement("table",{className:"table table-hover table-responsive"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("td",null,"Sl no."),n.createElement("td",null,"Position"),n.createElement("td",null,"Image"),n.createElement("td",null,"URL"),n.createElement("td",null,"Status"),n.createElement("td",null,"Action"))),n.createElement("tbody",null,this.state.loading?n.createElement("tr",{className:"loading"},n.createElement("td",{colSpan:"4",className:"text-center"},n.createElement("img",{src:"/images/icons/loading.gif"}))):c))))),n.createElement(k.Z,null),n.createElement(O.Z,{isOpen:this.state.addmodalIsOpen,className:"adminModal"},n.createElement(H,null," Add Advertisement Here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(U,null,n.createElement("form",{encType:"multipart/form-data",onSubmit:this.addHandler},n.createElement("div",{className:"row"},n.createElement("div",{className:this.state.type&&!this.state.error?"col-sm-4":"col-sm-12"},n.createElement("label",null,"Position of Ad"),n.createElement("select",{className:"form-control",required:!0,name:"type",onChange:this.onChange,value:this.state.type},n.createElement("option",{value:""},"Select Position of Ad"),W.adList.map((function(t,a){return e.state.data.some((function(e){return e.type==t.type&&t.single}))?null:n.createElement("option",{value:t.type,key:a},t.text)}))),this.state.error?n.createElement("p",null,this.state.errorMesg):null),this.state.type&&!this.state.error?n.createElement(n.Fragment,null,n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Image"),n.createElement("input",{name:"name",type:"file",className:"form-control",required:!0,onChange:this.uploadImage})),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Ad Status"),n.createElement("select",{className:"form-control",name:"status",value:this.state.status,required:!0,onChange:this.onChange},n.createElement("option",{value:""},"Select Status"),n.createElement("option",{value:"1"},"Show"),n.createElement("option",{value:"0"},"Hide"))),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Open Ad in "),n.createElement("select",{className:"form-control",name:"target",value:this.state.target,required:!0,onChange:this.onChange},n.createElement("option",{value:""},"Select Window Status"),n.createElement("option",{value:"0"},"Same Window"),n.createElement("option",{value:"1"},"New Window"))),n.createElement("div",{className:"col-sm-8"},n.createElement("label",null,"URL of Ad"),n.createElement("input",{name:"url",type:"text",className:"form-control",placeholder:"URL",value:this.state.url,required:!0,onChange:this.onChange}))):null),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Submit",n.createElement("span",null)))))),n.createElement(O.Z,{isOpen:this.state.editmodalIsOpen,className:"adminModal"},n.createElement(H,null," Update Advertisement here "),n.createElement("div",{className:"closeModal",onClick:this.resetData},"X"),n.createElement(U,null,n.createElement("form",{className:"modal-form",encType:"multipart/form-data",onSubmit:this.updateHandler},n.createElement("div",{className:"row"},n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Position of Ad"),n.createElement("select",{className:"form-control",required:!0,name:"type",value:this.state.type,readOnly:!0},n.createElement("option",{value:""},"Select Position of Ad"),W.adList.map((function(e,t){return n.createElement("option",{value:e.type,key:t},e.text)})))),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Image"),n.createElement("input",{name:"name",type:"file",className:"form-control",onChange:this.uploadImage}),this.state.oldImage?n.createElement("img",{src:"/images/ads/"+this.state.oldImage,className:"preview"}):null),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Ad Status"),n.createElement("select",{className:"form-control",name:"status",value:this.state.status,onChange:this.onChange},n.createElement("option",{value:""},"Select Status"),n.createElement("option",{value:"1"},"Show"),n.createElement("option",{value:"0"},"Hide"))),n.createElement("div",{className:"col-sm-4"},n.createElement("label",null,"Open Ad in "),n.createElement("select",{className:"form-control",name:"target",value:this.state.target,required:!0,onChange:this.onChange},n.createElement("option",{value:""},"Select Window Status"),n.createElement("option",{value:"0"},"Same Window"),n.createElement("option",{value:"1"},"New Window"))),n.createElement("div",{className:"col-sm-8"},n.createElement("label",null,"URL of Ad"),n.createElement("input",{name:"url",type:"text",className:"form-control",placeholder:"URL",value:this.state.url,required:!0,onChange:this.onChange}))),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Submit",n.createElement("span",null)))))))}}]),l}(n.Component);(0,r.render)(n.createElement(G,null),document.getElementById("root"))},5697:(e,t,a)=>{e.exports=a(2703)()},3935:(e,t,a)=>{"use strict";!function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(e){console.error(e)}}(),e.exports=a(4448)},7294:(e,t,a)=>{"use strict";e.exports=a(2408)}}]);