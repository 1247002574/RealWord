/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{186:function(e,t,r){"use strict";r.d(t,"c",(function(){return n})),r.d(t,"d",(function(){return c})),r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f})),r.d(t,"e",(function(){return m}));var o=r(60),n=function(data){return Object(o.b)({method:"post",url:"/api/users/login",data:data})},c=function(data){return Object(o.b)({method:"post",url:"/api/users",data:data})},l=function(e){var t=e.username;return Object(o.b)({method:"GET",url:"/api/profiles/".concat(t)})},f=function(){return Object(o.b)({method:"GET",url:"/api/user"})},m=function(data){return Object(o.b)({method:"PUT",url:"/api/user",data:data})}},187:function(e,t,r){var o,n;!function(c){if(void 0===(n="function"==typeof(o=c)?o.call(t,r,t,e):o)||(e.exports=n),!0,e.exports=c(),!!0){var l=window.Cookies,f=window.Cookies=c();f.noConflict=function(){return window.Cookies=l,f}}}((function(){function e(){for(var i=0,e={};i<arguments.length;i++){var t=arguments[i];for(var r in t)e[r]=t[r]}return e}function t(s){return s.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function r(o){function n(){}function c(t,r,c){if("undefined"!=typeof document){"number"==typeof(c=e({path:"/"},n.defaults,c)).expires&&(c.expires=new Date(1*new Date+864e5*c.expires)),c.expires=c.expires?c.expires.toUTCString():"";try{var l=JSON.stringify(r);/^[\{\[]/.test(l)&&(r=l)}catch(e){}r=o.write?o.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var f="";for(var m in c)c[m]&&(f+="; "+m,!0!==c[m]&&(f+="="+c[m].split(";")[0]));return document.cookie=t+"="+r+f}}function l(e,r){if("undefined"!=typeof document){for(var n={},c=document.cookie?document.cookie.split("; "):[],i=0;i<c.length;i++){var l=c[i].split("="),f=l.slice(1).join("=");r||'"'!==f.charAt(0)||(f=f.slice(1,-1));try{var m=t(l[0]);if(f=(o.read||o)(f,m)||t(f),r)try{f=JSON.parse(f)}catch(e){}if(n[m]=f,e===m)break}catch(e){}}return e?n[e]:n}}return n.set=c,n.get=function(e){return l(e,!1)},n.getJSON=function(e){return l(e,!0)},n.remove=function(t,r){c(t,"",e(r,{expires:-1}))},n.defaults={},n.withConverter=r,n}((function(){}))}))},261:function(e,t,r){"use strict";r.r(t);r(61),r(24),r(25),r(11),r(49);var o=r(27),n=(r(36),r(3)),c=r(186),l=r(37),f=r(192),m=r.n(f);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w=r(187),h={middleware:"nologin",name:"Settings",asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function e(){var t,r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(c.b)();case 2:return t=e.sent,r=t.data.user,e.next=6,Object(c.a)({username:r.username});case 6:return o=e.sent,n=o.data.profile,e.abrupt("return",{profile:n});case 9:case"end":return e.stop()}}),e)})))()},methods:v(v({},Object(l.b)(["logout"])),{},{onSubmit:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.e)({user:m.a.omit(e.profile,["following"])});case 2:r=t.sent,o=r.data.user,e.$router.push("/profile/".concat(o.username));case 5:case"end":return t.stop()}}),t)})))()},cookieLogout:function(){w.remove("user"),this.logout(),this.$router.push("/login")}})},O=r(23),component=Object(O.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"settings-page"},[r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-6 offset-md-3 col-xs-12"},[r("h1",{staticClass:"text-xs-center"},[e._v("Your Settings")]),e._v(" "),r("form",{on:{submit:function(t){return t.preventDefault(),e.onSubmit()}}},[r("fieldset",[r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.image,expression:"profile.image"}],staticClass:"form-control",attrs:{type:"text",placeholder:"URL of profile picture"},domProps:{value:e.profile.image},on:{input:function(t){t.target.composing||e.$set(e.profile,"image",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.username,expression:"profile.username"}],staticClass:"form-control form-control-lg",attrs:{type:"text",placeholder:"Your Name"},domProps:{value:e.profile.username},on:{input:function(t){t.target.composing||e.$set(e.profile,"username",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.profile.bio,expression:"profile.bio"}],staticClass:"form-control form-control-lg",attrs:{rows:"8",placeholder:"Short bio about you"},domProps:{value:e.profile.bio},on:{input:function(t){t.target.composing||e.$set(e.profile,"bio",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.email,expression:"profile.email"}],staticClass:"form-control form-control-lg",attrs:{type:"email",placeholder:"Email"},domProps:{value:e.profile.email},on:{input:function(t){t.target.composing||e.$set(e.profile,"email",t.target.value)}}})]),e._v(" "),r("fieldset",{staticClass:"form-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.profile.password,expression:"profile.password"}],staticClass:"form-control form-control-lg",attrs:{type:"password",placeholder:"Password",minlength:"8"},domProps:{value:e.profile.password},on:{input:function(t){t.target.composing||e.$set(e.profile,"password",t.target.value)}}})]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-primary pull-xs-right"},[e._v("\n              Update Settings\n            ")]),e._v(" "),r("button",{staticClass:"btn btn-lg btn-danger pull-xs-left",on:{click:function(t){return t.preventDefault(),e.cookieLogout()}}},[e._v("\n              logout\n            ")])])])])])])])}),[],!1,null,"071fd05c",null);t.default=component.exports}}]);