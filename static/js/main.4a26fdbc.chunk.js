(this["webpackJsonple-grimoire"]=this["webpackJsonple-grimoire"]||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n.n(r),a=n(19),l=n.n(a),i=n(6),o=(n(26),n(4)),j=n.n(o),u=n(9),b=n(5),d=n(2),h=(n(18),n(13)),O=n.p+"static/media/Feb26_BloomGeneration-2322.c582a0e5.jpg";function x(e){var t=e.viewMenu,n=e.toggleMenu,r=e.me,s=function(){var e=Object(u.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,fetch("http://localhost:3000/users/logout",{method:"POST",headers:{"Content-Type":"application/json"}});case 4:e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("cookie errorrr",e.t0);case 10:window.location.reload(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsx)("div",{className:"homePage",style:{backgroundImage:"linear-gradient(rgba(0,0,0,0.3), black), url("+O+")"},children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{children:"le grimoire"}),Object(c.jsx)("div",{className:"actions",children:r?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:n,children:t?"Close":"Make an Entry"}),Object(c.jsx)("button",{onClick:s,className:"link signUp",children:"Log Out"})]}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(i.b,{className:"link signUp",to:"/signUp",children:"Sign Up"}),Object(c.jsx)(i.b,{className:"link button",to:"/logIn",children:"Log In"})]})})]})})}var g=n.p+"static/media/background_flowers2.1f5f8cd9.jpg";function p(e){return Object(c.jsx)("div",{className:"submitDiv",children:Object(c.jsx)("button",{className:"submitButton",onClick:e.addEntry,type:"button",children:"send entry"})})}function m(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),s=n[0],a=n[1],l=Object(r.useState)(""),i=Object(b.a)(l,2),o=i[0],d=i[1],h=Object(r.useState)(""),O=Object(b.a)(h,2),x=O[0],g=O[1],m=Object(r.useState)(!1),f=Object(b.a)(m,2),v=f[0],y=(f[1],function(){var t=Object(u.a)(j.a.mark((function t(n){var c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),(c={title:s,publishedDate:o,text:x,bookmarked:v}).category=e.category,t.prev=3,t.next=6,fetch("http://localhost:3000/entries",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(c)}).then((function(e){return document.getElementById("title").value="",document.getElementById("date").value="",document.getElementById("entry").value="",e.json()})).then((function(e){console.log("res",e)}));case 6:t.sent,t.next=12;break;case 9:t.prev=9,t.t0=t.catch(3),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[3,9]])})));return function(e){return t.apply(this,arguments)}}());return Object(c.jsxs)("div",{className:"inputField",children:[Object(c.jsxs)("div",{className:"flex",children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"title",children:"Title"}),Object(c.jsx)("textarea",{type:"text",id:"title",onChange:function(e){return a(e.target.value)}})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"date",children:"Date"}),Object(c.jsx)("input",{type:"date",id:"date",name:"entry date",onChange:function(e){return d(e.target.value)}})]})]}),Object(c.jsx)("label",{htmlFor:"entry",children:"Entry"}),Object(c.jsx)("textarea",{type:"text",id:"entry",onChange:function(e){return g(e.target.value)}}),Object(c.jsx)(p,{addEntry:y})]})}function f(e){return Object(c.jsx)("div",{className:"entry",style:{backgroundImage:"linear-gradient(black, rgba(0,0,0,0.3)), url("+g+")"},children:Object(c.jsxs)("div",{className:"entryBubble",children:[Object(c.jsx)("h2",{children:e.title}),Object(c.jsx)(m,{category:e.title})]})})}function v(){return Object(c.jsx)(f,{title:"Astrological Observations"})}function y(e){return Object(c.jsx)(f,{title:"Leger of Symbols"})}function k(e){return Object(c.jsx)(f,{title:"Tarot"})}function N(e){return Object(c.jsx)(f,{title:"Crystals"})}function w(e){return Object(c.jsx)(f,{title:"Rituals"})}function C(e){return Object(c.jsx)(f,{title:"Spells"})}function S(e){return Object(c.jsx)(f,{title:"Herbs"})}function M(e){var t=e.title,n=e.publishedDate,r=e.category,s=e.text;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"newEntry",children:[Object(c.jsx)("h3",{children:t}),Object(c.jsxs)("div",{className:"catDate",children:[Object(c.jsxs)("h4",{children:["Entry Date: ",function(e){var t=new Date(e);return"".concat(t.getUTCDate(),"/").concat(t.getUTCMonth(),"/").concat(t.getUTCFullYear())}(n)]}),Object(c.jsxs)("h4",{children:["Subject: ",r]})]}),Object(c.jsx)("p",{children:s}),Object(c.jsx)("button",{className:"delete",children:"delete"})]})})}function U(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),n=t[0],s=t[1];function a(){return(a=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/entries");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,s(n.data),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){!function(){a.apply(this,arguments)}()}),[]),Object(c.jsx)("div",{className:"entry",style:{backgroundImage:"linear-gradient(black, rgba(0,0,0,0.3)), url("+g+")"},children:Object(c.jsxs)("div",{className:"entryPage",children:[Object(c.jsx)("h2",{children:"Your Entries"}),n.map((function(e){return Object(c.jsx)(M,Object(h.a)({},e),e._id)}))]})})}function E(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),s=(n[0],n[1]),a=Object(r.useState)(""),l=Object(b.a)(a,2),i=(l[0],l[1]);return Object(c.jsx)("div",{className:"entry",style:{backgroundImage:"linear-gradient(black, rgba(0,0,0,0.3)), url("+g+")"},children:Object(c.jsxs)("div",{className:"entryBubble signupLogin",children:[Object(c.jsx)("h2",{children:"LogIn"}),Object(c.jsxs)("form",{children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Email Address"}),Object(c.jsx)("input",{name:"email",type:"email",id:"email",required:!0,onChange:function(e){s(e.target.value)}})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"password",children:"User Password"}),Object(c.jsx)("input",{name:"password",type:"password",id:"password",required:!0,onChange:function(e){i(e.target.value)}})]}),Object(c.jsx)("input",{type:"submit",value:"Log In"}),Object(c.jsx)("a",{className:"goToSignUp",href:"/signUp",children:"Don't have an account? Sign up here"})]})]})})}function F(e){var t=Object(r.useState)(""),n=Object(b.a)(t,2),s=n[0],a=n[1],l=Object(r.useState)(""),i=Object(b.a)(l,2),o=i[0],d=i[1],h=Object(r.useState)(""),O=Object(b.a)(h,2),x=O[0],p=O[1];function m(){return(m=Object(u.a)(j.a.mark((function t(){var n,c,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n={email:s,password:o,name:x},t.next=4,fetch("http://localhost:3000/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 4:return c=t.sent,t.next=7,c.json();case 7:if(r=t.sent,c.ok){t.next=10;break}throw new Error(r.message);case 10:return t.next=12,fetch("http://localhost:3000/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:s,password:o})});case 12:if(t.sent.ok){t.next=15;break}throw new Error;case 15:e.getUser(),t.next=23;break;case 18:t.prev=18,t.t0=t.catch(0),console.log(t.t0),e.updateUser(void 0),console.log({err:t.t0});case 23:case"end":return t.stop()}}),t,null,[[0,18]])})))).apply(this,arguments)}return Object(c.jsx)("div",{className:"entry",style:{backgroundImage:"linear-gradient(black, rgba(0,0,0,0.3)), url("+g+")"},children:Object(c.jsxs)("div",{className:"entryBubble signupLogin",children:[Object(c.jsx)("h2",{children:"Sign Up"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){m.apply(this,arguments)}()},children:[Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"username",children:"Choose User Name"}),Object(c.jsx)("input",{name:"username",type:"text",id:"username",required:!0,onChange:function(e){p(e.target.value)}})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"email",children:"Enter Your Email Address"}),Object(c.jsx)("input",{name:"email",type:"email",id:"email",required:!0,onChange:function(e){a(e.target.value)}})]}),Object(c.jsxs)("div",{className:"col",children:[Object(c.jsx)("label",{htmlFor:"password",children:"Create a Password"}),Object(c.jsx)("input",{name:"password",type:"password",id:"password",required:!0,onChange:function(e){d(e.target.value)}})]}),Object(c.jsx)("input",{type:"submit",value:"Sign Up"})]})]})})}function T(e){var t=e.getUser,n=e.updateUser,r=e.me;return Object(c.jsxs)(d.d,{children:[Object(c.jsx)(d.b,{path:"/astro",render:function(){return Object(c.jsx)(v,{})}}),Object(c.jsx)(d.b,{path:"/symbols",render:function(){return Object(c.jsx)(y,{})}}),Object(c.jsx)(d.b,{path:"/tarot",render:function(){return Object(c.jsx)(k,{})}}),Object(c.jsx)(d.b,{path:"/crystals",render:function(){return Object(c.jsx)(N,{})}}),Object(c.jsx)(d.b,{path:"/rituals",render:function(){return Object(c.jsx)(w,{})}}),Object(c.jsx)(d.b,{path:"/spells",render:function(){return Object(c.jsx)(C,{})}}),Object(c.jsx)(d.b,{path:"/herbs",render:function(){return Object(c.jsx)(S,{})}}),Object(c.jsx)(d.b,{path:"/entries",render:function(){return Object(c.jsx)(U,{})}}),Object(c.jsx)(d.b,{path:"/signUp",render:function(e){return r?Object(c.jsx)(d.a,{to:"/entries"}):Object(c.jsx)(F,Object(h.a)({getUser:t,updateUser:n},e))}}),Object(c.jsx)(d.b,{path:"/logIn",render:function(e){return r?Object(c.jsx)(d.a,{to:"/entries"}):Object(c.jsx)(E,Object(h.a)({getUser:e.getUser},e))}}),Object(c.jsx)(d.b,{path:"/",render:function(){return Object(c.jsx)(x,{viewMenu:e.viewMenu,me:r,toggleMenu:e.toggleMenu})}})]})}function I(e){var t=Object(d.g)();return Object(c.jsxs)("div",{className:"menuContainer",children:["/"!==t.pathname?Object(c.jsx)("button",{className:"reOpen ".concat(e.view?"inactive":"active"),onClick:e.toggleMenu,children:Object(c.jsx)("i",{className:"fas fa-angle-double-left"})}):null,Object(c.jsxs)("nav",{className:"menu ".concat(e.view?"active":"inactive"),children:[Object(c.jsx)("h2",{children:"Make an Entry"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/astro",children:"Astro Observations"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/symbols",children:"Ledger of Symbols"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/tarot",children:"Tarot Spreads"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/crystals",children:"Crystals"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/rituals",children:"Rituals"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/spells",children:"Spells"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/herbs",children:"Herbs"}),Object(c.jsx)(i.b,{onClick:e.toggleMenu,className:"link",to:"/entries",children:"Entries"}),"/"!==t.pathname?Object(c.jsxs)("div",{className:"flex link",children:[Object(c.jsx)(i.b,{className:"home link",to:"/",children:"Home"}),Object(c.jsx)("button",{className:"closeMenu link",onClick:e.toggleMenu,children:"Close Menu"})]}):null]})]})}function D(){var e=Object(d.g)(),t=Object(r.useState)(!1),n=Object(b.a)(t,2),s=n[0],a=n[1],l=function(){return a(!s)},o=Object(r.useState)(void 0),h=Object(b.a)(o,2),O=h[0],x=h[1],g=Object(r.useCallback)(Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:3000/users/me");case 3:return t=e.sent,e.next=6,t.json();case 6:if(n=e.sent,t.ok){e.next=9;break}throw new Error(n.message);case 9:x(n.data),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("error:",e.t0),x(void 0);case 16:case"end":return e.stop()}}),e,null,[[0,12]])}))),[]);return Object(r.useEffect)((function(){g()}),[g]),Object(c.jsxs)("div",{className:"App",children:["/"===e.pathname||s?null:Object(c.jsx)(i.b,{className:"homeLink",to:"/",children:"Home"}),Object(c.jsx)(T,{viewMenu:s,toggleMenu:l,getUser:g,updateUser:x,me:O}),Object(c.jsx)(I,{view:s,toggleMenu:l})]})}var L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};l.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(i.a,{children:Object(c.jsx)(D,{})})}),document.getElementById("root")),L()}},[[36,1,2]]]);
//# sourceMappingURL=main.4a26fdbc.chunk.js.map