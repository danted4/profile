(this["webpackJsonpgit-static"]=this["webpackJsonpgit-static"]||[]).push([[0],{54:function(e,t,a){e.exports=a(91)},63:function(e,t,a){},64:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},65:function(e,t,a){},91:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),o=a(11),r=a.n(o),c=a(17),s=(a(63),a(64),a(14)),i=a(4),m=(a(65),a(66),a(22)),p=a(23),u=a(26),d=a(24),E=a(29),h=a.n(E),g=function(e){return{type:"UPDATE",data:e}},f=a(32),v={updateAppState:function(e,t){h.a.get("https://raw.githubusercontent.com/danted4/profile/master/public/json/content.json").then((function(a){e(a.data[t])})).catch((function(e){console.log(e)}))}},b=a(48),x=a(93),N=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var l;return Object(m.a)(this,a),(l=t.call(this,e)).state={loaded:!1,error:!1},l}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=new Image;t.onload=function(){e.setState({loaded:!0})},t.onerror=function(){e.setState({error:!0})},t.src="/profile/images/prof2.jpg",v.updateAppState(this.props.updateAction,"home")}},{key:"render",value:function(){return console.log(this.props.appState.homeReducer),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{id:"home",className:"row no-gutters"},n.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-6"},n.a.createElement(b.a,{style:{marginBottom:"0"}},n.a.createElement("h1",null,this.props.appState.homeReducer.title),n.a.createElement("p",null,this.props.appState.homeReducer.bio),n.a.createElement("p",null,n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("span",null,n.a.createElement("strong",null,"Phone")),"\xa0:\xa0",n.a.createElement(f.CopyToClipboard,{text:this.props.appState.homeReducer.email,onCopy:function(){return alert("Contact Copied.")}},n.a.createElement("span",null,this.props.appState.homeReducer.phone))),n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("span",null,n.a.createElement("strong",null,"Email")),"\xa0:\xa0",n.a.createElement(f.CopyToClipboard,{text:this.props.appState.homeReducer.email,onCopy:function(){return alert("Email Copied.")}},n.a.createElement("span",null,this.props.appState.homeReducer.email))),n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("span",null,n.a.createElement("strong",null,"Social")),"\xa0:\xa0",n.a.createElement("span",null,"icons")))))),n.a.createElement("div",{className:"col-xs-12 col-md-6 col-lg-6"},this.state.loaded?n.a.createElement("img",{className:"profimg",src:"/profile/images/prof2.jpg",alt:"image"}):n.a.createElement("div",{className:"row no-gutters",style:{height:"100%"}},n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12",style:{height:"10%",top:"50%",transform:"translateY(-50%)"}},n.a.createElement(x.a,{animation:"grow",variant:"dark",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")),"\xa0",n.a.createElement(x.a,{animation:"grow",variant:"dark",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading...")),"\xa0",n.a.createElement(x.a,{animation:"grow",variant:"dark",role:"status"},n.a.createElement("span",{className:"sr-only"},"Loading..."))))),n.a.createElement("div",{id:"skills",className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-xs-4 col-md-4 col-lg-4",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h2",null,"Skills"),n.a.createElement("p",null,this.props.appState.homeReducer.skills.desc)),n.a.createElement("div",{className:"col-xs-8 col-md-8 col-lg-8"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h4",null,"Javascript"),n.a.createElement("p",null,this.props.appState.homeReducer.skills.javascript)),n.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6 ",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h4",null,"Frontend Development"),n.a.createElement("p",null,this.props.appState.homeReducer.skills.frontend)),n.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h4",null,"Database"),n.a.createElement("p",null,this.props.appState.homeReducer.skills.database)),n.a.createElement("div",{className:"col-xs-6 col-md-6 col-lg-6",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h4",null,"Backend Development"),n.a.createElement("p",null,this.props.appState.homeReducer.skills.backend)))))),n.a.createElement("div",{id:"experience",className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-xs-4 col-md-4 col-lg-4",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h2",null,"Experience"),n.a.createElement("p",null,this.props.appState.homeReducer.experience.desc)),n.a.createElement("div",{className:"col-xs-8 col-md-8 col-lg-8"},n.a.createElement("div",{className:"row no-gutters"},n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12",style:{padding:"2rem",textAlign:"left"}},n.a.createElement("h4",null,this.props.appState.homeReducer.experience.infosys.title),n.a.createElement("h5",null,this.props.appState.homeReducer.experience.infosys.company),n.a.createElement("p",null,this.props.appState.homeReducer.experience.infosys.desc)),n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12",style:{padding:"0 2rem 2rem 2rem",textAlign:"left"}},n.a.createElement("h4",null,this.props.appState.homeReducer.experience.wipro.title),n.a.createElement("h5",null,this.props.appState.homeReducer.experience.wipro.company),n.a.createElement("p",null,this.props.appState.homeReducer.experience.wipro.desc))))))))}}]),a}(n.a.Component),y=Object(c.b)((function(e){return{appState:e}}),(function(e){return{updateAction:function(t){return e(g(t))},logoutAction:function(){return e({})}}}))(N),S=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){return Object(m.a)(this,a),t.call(this,e)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){v.updateAppState(this.props.updateAction,"portfolio")}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"row no-gutters"},n.a.createElement(b.a,{className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("p",null,n.a.createElement("h3",null,this.props.appState.portfolioReducer.main)),n.a.createElement("p",null,this.props.appState.portfolioReducer.desc)),n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12"},n.a.createElement("h1",{style:{color:"grey"}},this.props.appState.portfolioReducer.progress))))}}]),a}(n.a.Component),k=Object(c.b)((function(e){return{appState:e}}),(function(e){return{updateAction:function(t){return e(g(t))},logoutAction:function(){return e({})}}}))(S),w=a(94),R=a(95),j=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(w.a,{fixed:"top",bg:"dark",varient:"dark"},n.a.createElement(w.a.Brand,null,n.a.createElement(s.b,{to:"/home",className:"no-decor"},"Kanav")),n.a.createElement(R.a,{className:"mr-auto"},n.a.createElement(R.a.Link,null,n.a.createElement(s.b,{className:"btn btn-secondary",to:"/home"},"Hello")),n.a.createElement(R.a.Link,null,n.a.createElement(s.b,{className:"btn btn-primary",to:"/skills"},"Skills")),n.a.createElement(R.a.Link,null,n.a.createElement(s.b,{className:"btn btn-primary",to:"/portfolio"},"Portfolio")),n.a.createElement(R.a.Link,null,n.a.createElement(s.b,{className:"btn btn-primary",to:"/contact"},"Contact")))))};var A=function(){return n.a.createElement("div",{className:"App container-fluid px-0"},n.a.createElement(s.a,null,n.a.createElement(j,null),n.a.createElement(i.d,null,n.a.createElement("div",{className:"row no-gutters margin-t-3x full-viewport-height",style:{backgroundColor:"#dcdcdc"}},n.a.createElement("div",{className:"col-xs-12 col-md-12 col-lg-12 margin-t-1x"},n.a.createElement(i.b,{path:"/",component:function(){return n.a.createElement(i.a,{to:"/home"})}}),n.a.createElement(i.b,{path:"/home",component:y}),n.a.createElement(i.b,{path:"/portfolio",component:k})))),n.a.createElement("div",{className:"row no-gutters footer"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(16),C=a(18),D={home:{title:"",bio:"",phone:"",email:"",skills:{},experience:{wipro:{},infosys:{}}},portfolio:{main:"",desc:"",progress:""}},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.home,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":var a=Object(C.a)(Object(C.a)({},e),t.data);return a;default:return e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D.portfolio,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE":var a=Object(C.a)(Object(C.a)({},e),t.data);return a;default:return e}},P=function(e){return function(e){return function(t){e(t)}}},T=Object(O.c)({homeReducer:L,portfolioReducer:B}),F=Object(O.a)(P)(O.d)(T);r.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(c.a,{store:F},n.a.createElement(A,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.11c5d74a.chunk.js.map