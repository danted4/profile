(this["webpackJsonpgit-static"]=this["webpackJsonpgit-static"]||[]).push([[0],{52:function(e,t,a){e.exports=a(86)},61:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},63:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),c=a.n(r),l=a(20),i=(a(61),a(62),a(14)),m=a(3),s=(a(63),a(64),a(41)),u=a(42),d=a(51),p=a(50),E=a(43),h=a.n(E),f=a(44),g=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){return Object(s.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("https://raw.githubusercontent.com/danted4/profile/master/public/json/content.json").then((function(t){console.log(t.data.home),e.props.updateAction(t.data.home)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{id:"home",className:"row no-gutters"},o.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-6"},o.a.createElement(f.a,null,o.a.createElement("h1",null,this.props.appState.rootReducer.title),o.a.createElement("p",null,this.props.appState.rootReducer.bio))),o.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-6"},o.a.createElement("img",{className:"profimg",src:"/profile/images/prof2.jpg",alt:"image"}))))}}]),a}(o.a.Component),b=Object(l.b)((function(e){return{appState:e}}),(function(e){return{updateAction:function(t){return e(function(e){return{type:"UPDATE",data:e}}(t))},logoutAction:function(){return e({})}}}))(g),v=a(89),k=a(90),w=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{fixed:"top",bg:"dark",varient:"dark"},o.a.createElement(v.a.Brand,null,o.a.createElement(i.b,{to:"/home",className:"no-decor"},"Kanav")),o.a.createElement(k.a,{className:"mr-auto"},o.a.createElement(k.a.Link,null,o.a.createElement(i.b,{className:"btn btn-secondary",to:"/home"},"Hello")),o.a.createElement(k.a.Link,null,o.a.createElement(i.b,{className:"btn btn-primary",to:"/skills"},"Skills")),o.a.createElement(k.a.Link,null,o.a.createElement(i.b,{className:"btn btn-primary",to:"/work"},"Work")),o.a.createElement(k.a.Link,null,o.a.createElement(i.b,{className:"btn btn-primary",to:"/contact"},"Contact")))))};var N=function(){return o.a.createElement("div",{className:"App container-fluid px-0"},o.a.createElement(i.a,null,o.a.createElement(w,null),o.a.createElement(m.d,null,o.a.createElement("div",{className:"row no-gutters margin-t-3x full-viewport-height",style:{backgroundColor:"#dcdcdc"}},o.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12 margin-t-1x"},o.a.createElement(m.b,{path:"/",component:function(){return o.a.createElement(m.a,{to:"/home"})}}),o.a.createElement(m.b,{path:"/home",component:b})))),o.a.createElement("div",{className:"row no-gutters footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=a(16),y=a(29),x={home:{title:"",bio:""}},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x.home,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":var a=Object(y.a)(Object(y.a)({},e),t.data);return a;default:return e}},A=function(e){return function(e){return function(t){e(t)}}},S=Object(j.c)({rootReducer:O}),L=Object(j.a)(A)(j.d)(S);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:L},o.a.createElement(N,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[52,1,2]]]);
//# sourceMappingURL=main.fadc2e9a.chunk.js.map