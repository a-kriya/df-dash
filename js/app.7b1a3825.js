(function(t){function e(e){for(var r,i,l=e[0],s=e[1],u=e[2],f=0,d=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var c=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("5f5b");n("68d3");r["default"].use(o["a"]);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Header"),n("b-container",{staticClass:"vh-100 pt-5",attrs:{fluid:""}},[n("router-view")],1)],1)},i=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-navbar",{attrs:{type:"dark",variant:"dark",fixed:"top"}},[n("b-navbar-brand",{attrs:{href:"#"}},[t._v("Botworx")])],1)},s=[],u=n("2877"),c={},f=Object(u["a"])(c,l,s,!1,null,null,null),d=f.exports,p={components:{Header:d}},b=p,g=Object(u["a"])(b,a,i,!1,null,null,null),h=g.exports,v=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-row",{staticClass:"h-100",attrs:{"align-h":"center","align-v":"center"}},[n("b-col",{attrs:{sm:"auto"}},[n("b-card",{staticClass:"m-4 shadow-sm",attrs:{"no-body":""}},[n("b-card-body",[n("b-card-title",{staticClass:"m-5",attrs:{"title-tag":"h3"}},[t._v("Login")]),n("div",{staticClass:"text-center my-5 mx-sm-5"},[n("div",{staticClass:"d-flex justify-content-center",attrs:{id:"google-signin-button"}})])],1)],1)],1)],1)},y=[],w={mounted:function(){gapi.signin2.render("google-signin-button",{scope:"profile email",width:240,height:50,longtitle:!0,theme:"dark",onsuccess:this.onSignInSuccess,onfailure:this.onSignInFailure})},methods:{onSignInSuccess:function(t){var e=t.getBasicProfile();console.log(e)},onSignInFailure:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];console.error(e)}}},x=w,O=Object(u["a"])(x,m,y,!1,null,null,null),_=O.exports;r["default"].use(v["a"]);var j=[{path:"/",redirect:{name:"r-login"}},{path:"/login",name:"r-login",component:_}],S=new v["a"]({mode:"history",base:"/",routes:j}),P=S,k=n("2f62");r["default"].use(k["a"]);var C=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("c860");r["default"].config.productionTip=!1,new r["default"]({router:P,store:C,render:function(t){return t(h)}}).$mount("#app")},"68d3":function(t,e,n){},c860:function(t,e,n){}});
//# sourceMappingURL=app.7b1a3825.js.map