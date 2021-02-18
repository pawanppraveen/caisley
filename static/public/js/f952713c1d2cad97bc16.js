(()=>{"use strict";var e={1846:(e,t,a)=>{var n=a(7294),r=a(3935),o=a(4575),l=a.n(o),s=a(3913),c=a.n(s),i=a(1506),u=a.n(i),m=a(2205),f=a.n(m),d=a(8585),g=a.n(d),p=a(9754),h=a.n(p),v=a(9713),y=a.n(v),b=a(3362),E=a(262),S=a(8908),w=a.n(S),I=a(9669),x=a.n(I),N=a(5749),O=a.n(N),j=a(3645),P=a.n(j);var k=a(5813);const C=function(e){f()(o,e);var t,a,r=(t=o,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=h()(t);if(a){var r=h()(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return g()(this,e)});function o(e){var t;return l()(this,o),t=r.call(this,e),y()(u()(t),"onChange",(function(e){t.setState(y()({},e.target.name,e.target.value))})),y()(u()(t),"submitHandler",(function(e){e.preventDefault();var a={email:t.state.email,password:t.state.password};x().post("/auth/login",a).then((function(e){e.data.success?(localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("message",e.data.message),w().location.href="/"):k.callSwal(e.data.message)})).catch((function(e){return k.printError(e)}))})),y()(u()(t),"gofbLogin",(function(e,t){if("Google"==t)var a={email:e.profileObj.email,password:e.googleId};else"FB"==t&&(a={email:e.email,password:e.userID});x().post(api.login,a).then((function(e){e.data.success?(localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("message",e.data.message),w().location.href="/"):k.callSwal(e.data.message)})).catch((function(e){k.printError(e)}))})),t.state={email:"test@test.com",password:"123456789",auth:!1,clientId:"915022609455-gv870i2eefdcl20c41tl4o02nbjr6kno.apps.googleusercontent.com",clientSecret:"g0tpSKG9EjKQnV1OsuZmSjEq"},t}return c()(o,[{key:"componentDidMount",value:function(){w().scrollTo(0,0),"undefined"!=typeof Storage&&JSON.parse(localStorage.getItem("user"))&&this.setState({auth:JSON.parse(localStorage.getItem("user")).auth||!1}),w().location.href.split("e=")[1]&&(localStorage.removeItem("user"),this.setState({auth:!1}),w().location.href="/login")}},{key:"render",value:function(){var e=this;this.state.auth&&(w().location.href="/");var t=function(t){e.gofbLogin(t,"Google")};return n.createElement(n.Fragment,null,n.createElement(b.Z,null),n.createElement("section",{className:"login auth py-5"},n.createElement("h1",{className:"heading"},"Login"),n.createElement("div",{className:"card"},n.createElement("div",null,n.createElement("form",{onSubmit:this.submitHandler},n.createElement("label",null,"E-Mail Address"),n.createElement("input",{type:"email",className:"form-control",name:"email",required:!0,placeholder:"Email Please",onChange:this.onChange,value:this.state.email}),n.createElement("label",null,"Password"),n.createElement("input",{type:"password",className:"form-control",name:"password",required:!0,placeholder:"Password Please",onChange:this.onChange,value:this.state.password}),n.createElement("div",{className:"my-div"},n.createElement("button",{className:"casleyBtn",type:"submit"},"Login")),n.createElement("div",{className:"my-div"},n.createElement("a",{href:"/forgot-password",className:"casleyBtnInverse"},"Forgot Password"))),n.createElement("div",{className:"gofb"},n.createElement(P(),{clientId:this.state.clientId,buttonText:"Login with Google",onSuccess:t,onFailure:t}),n.createElement(O(),{appId:"885798875528804",autoLoad:!1,fields:"name,email,picture",callback:function(t){e.gofbLogin(t,"FB")}}))))),n.createElement(E.Z,null))}}]),o}(n.Component);(0,r.render)(n.createElement(C,null),document.getElementById("root"))}},t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,a.x=e=>{},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={4438:0},t=[[1846,2244,6737,3935,6304]],n=e=>{},r=(r,o)=>{for(var l,s,[c,i,u,m]=o,f=0,d=[];f<c.length;f++)s=c[f],a.o(e,s)&&e[s]&&d.push(e[s][0]),e[s]=0;for(l in i)a.o(i,l)&&(a.m[l]=i[l]);for(u&&u(a),r&&r(o);d.length;)d.shift()();return m&&t.push.apply(t,m),n()},o=self.webpackChunkreward=self.webpackChunkreward||[];function l(){for(var n,r=0;r<t.length;r++){for(var o=t[r],l=!0,s=1;s<o.length;s++){var c=o[s];0!==e[c]&&(l=!1)}l&&(t.splice(r--,1),n=a(a.s=o[0]))}return 0===t.length&&(a.x(),a.x=e=>{}),n}o.forEach(r.bind(null,0)),o.push=r.bind(null,o.push.bind(o));var s=a.x;a.x=()=>(a.x=s||(e=>{}),(n=l)())})(),a.x()})();