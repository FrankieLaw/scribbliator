(this.webpackJsonpdiaryapp=this.webpackJsonpdiaryapp||[]).push([[0],{26:function(e,a,t){e.exports=t.p+"static/media/scribbliatorLogo.8b3ffbd6.png"},27:function(e,a,t){e.exports=t(41)},32:function(e,a,t){},40:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(23),c=t.n(l),o=t(10),s=(t(32),t(33),t(34),t(1)),i=t(5),m=t(3),u=t(2),d=t(4),p=t(12),b=t(11),v=t.n(b),h=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.title;return n.a.createElement("h1",{className:"appTitle"},e)}}]),a}(r.Component),g=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={errors:{}},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.errors,t=e.onSubmit,r=e.onChange,l=a.username,c=a.password;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg"}),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("form",{onSubmit:t},n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{className:"form-control",placeholder:"Email",type:"text",id:"username",onChange:r}),l&&n.a.createElement("div",{className:"alert alert-danger text-left"},l))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",onChange:r}),c&&n.a.createElement("div",{className:"alert alert-danger text-left"},c))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("button",{className:"w-100 btn btn-primary",type:"submit",value:"Login"},"Login"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12 white-shadow"},n.a.createElement(o.b,{to:"/"},"Forgot Password?"))))),n.a.createElement("div",{className:"col-lg"}))}}]),a}(r.Component),E=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("footer",{className:"main-footer white-shadow"},"Copyright \xa9 2020 | Scribbliator | Designed By: Frankie Law")}}]),a}(r.Component),f=t(19),N=t(15),j=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={data:{},errors:{}},t.validate=function(e){var a=v.a.validate(t.state.data,t.schema,{abortEarly:!1}).error;if(a){var r={},n=!0,l=!1,c=void 0;try{for(var o,s=a.details[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var i=o.value,m=i.path,u=i.message;r[m]=u}}catch(d){l=!0,c=d}finally{try{n||null==s.return||s.return()}finally{if(l)throw c}}return r}return null},t.validateProperty=function(e){var a=e.id,r=e.value,n=Object(N.a)({},a,r),l=Object(N.a)({},a,t.schema[a]),c=v.a.validate(n,l).error;return c?c.details[0].message:null},t.submitHandler=function(e){e.preventDefault();var a=t.validate(e);t.setState({errors:a||{}}),a||console.log("Form submitted")},t.changeHandler=function(e){var a=e.currentTarget,r=Object(f.a)({},t.state.errors),n=Object(f.a)({},t.state.data),l=t.validateProperty(a);l?r[a.id]=l:delete r[a.id],n[a.id]=a.value,t.setState({data:n,errors:r})},t}return Object(d.a)(a,e),a}(n.a.Component),O=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={data:{username:"",password:""},errors:{}},t.schema={username:v.a.string().email().required(),password:v.a.string().min(6).required()},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{title:"Login"}),n.a.createElement(g,{errors:this.state.errors,onSubmit:this.submitHandler,onChange:this.changeHandler}),n.a.createElement(E,null))}}]),a}(j),y=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg"}),n.a.createElement("div",{className:"col-lg-8"},n.a.createElement("p",{className:"slogan white-shadow"},"100% Privacy with Web Notebook.",n.a.createElement("br",null),"Local friendly notebook organizer")),n.a.createElement("div",{className:"col-lg"}))}}]),a}(r.Component),w=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{title:"Scribbliator"}),n.a.createElement(y,null),n.a.createElement(E,null))}}]),a}(r.Component),k=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props,a=e.errors,t=e.onSubmit,r=e.onChange,l=a.username,c=a.password;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-lg"}),n.a.createElement("div",{className:"col-lg-5"},n.a.createElement("form",{onSubmit:t},n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{className:"form-control",placeholder:"Email",type:"text",id:"username",onChange:r}),l&&n.a.createElement("div",{className:"alert alert-danger text-left"},l))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("input",{className:"form-control",placeholder:"Password",type:"password",id:"password",onChange:r}),c&&n.a.createElement("div",{className:"alert alert-danger text-left"},c))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12"},n.a.createElement("button",{type:"submit",className:"w-100 btn btn-primary",value:"Login"},"Sign Up"))),n.a.createElement("div",{className:"form-group row"},n.a.createElement("div",{className:"col-sm-12 text-left white-shadow"},"By clicking Sign Up, you agree to our Terms and that you have read our Data Use Policy, including our Cookie Use.")))),n.a.createElement("div",{className:"col-lg"}))}}]),a}(r.Component),C=function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={data:{username:"",password:""},errors:{}},t.schema={username:v.a.string().email().required(),password:v.a.string().min(6).required()},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(h,{title:"Sign Up"}),n.a.createElement(k,{errors:this.state.errors,onSubmit:this.submitHandler,onChange:this.changeHandler}),n.a.createElement(E,null))}}]),a}(j),S=t(26),x=t.n(S),L=function(e){function a(){return Object(s.a)(this,a),Object(m.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.props.appTitle;return n.a.createElement("nav",{className:"navbar fixed-top navbar-expand-lg navbar-dark bg-dark"},n.a.createElement(o.c,{className:"navbar-brand",to:"/"},n.a.createElement("img",{className:"main-logo",src:x.a,alt:"".concat(e," Homepage")})),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#mainNav"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"mainNav"},n.a.createElement("ul",{className:"navbar-nav"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.c,{className:"nav-link",to:"/login"},"Login")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(o.c,{className:"nav-link",to:"/register"},"Sign Up")))))}}]),a}(r.Component),H=(t(40),function(e){function a(){var e,t;Object(s.a)(this,a);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(t=Object(m.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(n)))).state={},t}return Object(d.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return n.a.createElement("div",{className:"container-fluid"},n.a.createElement(L,{appTitle:"Scribbliator"}),n.a.createElement("div",{className:"row h-100"},n.a.createElement("div",{className:"col splash-screen"},n.a.createElement("div",{className:"scribbliator-homepage"},n.a.createElement(p.c,null,n.a.createElement(p.a,{path:"/register",component:C}),n.a.createElement(p.a,{path:"/login",component:O}),n.a.createElement(p.a,{path:"/",component:w}))))))}}]),a}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,null,n.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.ef6871e9.chunk.js.map