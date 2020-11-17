(this["webpackJsonpmy-covid19"]=this["webpackJsonpmy-covid19"]||[]).push([[0],{24:function(e,t,a){e.exports=a(55)},50:function(e,t,a){e.exports=a.p+"static/media/world2.e2302406.svg"},52:function(e,t,a){},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),l=a(56);function u(e){return r.a.createElement(l.a,null,e.children)}var i=a(62),s=a(60),d=a(9),m=a(22),E=a.n(m),f=a(57),h=a(58),v=a(59);function p(e){var t=e.start,a=e.end,n=e.header,c=e.decimals,o=void 0===c?0:c,l=e.prefix;return r.a.createElement(f.a,{className:"border-light text-white bg-info"},r.a.createElement(h.a,{className:"text-uppercase"}," ",n),r.a.createElement(v.a,{className:"mb-2"},r.a.createElement(E.a,{start:t,end:a,duration:.75,decimals:o,prefix:l,separator:".",decimal:","})))}var g=a(8),C=a.n(g);function b(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),l=Object(d.a)(o,2),u=l[0],i=l[1];return Object(n.useEffect)((function(){return C.a.get("https://covid19.mathdro.id/api/").then((function(e){c(e.data),i(!1)})).catch((function(e){console.log(e)})).then((function(){})),function(){}}),[]),Object(n.useEffect)((function(){}),[a]),u?r.a.createElement("p",null," loading"):r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{sm:"12",md:"6",lg:"3"},r.a.createElement(p,{start:0,end:a.deaths.value,header:"deaths"})),r.a.createElement(s.a,{sm:"12",md:"6",lg:"3"},r.a.createElement(p,{start:0,end:a.recovered.value,header:"recovered"})),r.a.createElement(s.a,{sm:"12",md:"6",lg:"3"},r.a.createElement(p,{start:0,end:a.confirmed.value,header:"confirmed"})),r.a.createElement(s.a,{sm:"12",md:"6",lg:"3"},r.a.createElement(p,{start:0,end:100*a.deaths.value/(a.recovered.value+a.deaths.value),header:"Death Rate",decimals:2,prefix:"%"})))}a(50);var y=a(61),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",a=e.toString().split(".");return a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g,t),a.join(".")},j=function(e){var t=e.isLoading,a=e.isError,n=e.data;if(t)return r.a.createElement("div",null,"loading table");if(a)return r.a.createElement("div",null," There is error in Store or API ");var c=n&&n.filter((function(e){return e.confirmedCount+e.deathsCount+e.recoveredCount>150}));return r.a.createElement(y.a,{dark:!0,hover:!0,responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"#"),r.a.createElement("th",null,"COUNTRIES"),r.a.createElement("th",null,"CONFIRMED"),r.a.createElement("th",null,"DEATHS"),r.a.createElement("th",null,"RECOVERED"))),r.a.createElement("tbody",null,n&&c.map((function(e,t){return r.a.createElement("tr",{key:e.country},r.a.createElement("th",{scope:"row"},t+1),r.a.createElement("td",null,e.country),r.a.createElement("td",null,O(e.confirmedCount,".")),r.a.createElement("td",null,O(e.deathsCount,".")),r.a.createElement("td",null,O(e.recoveredCount,".")))}))))},w=a(11),N=a.n(w),x=a(7),I=a(23),S=function(e,t){switch(t.type){case"FECTHING_INIT":return Object(x.a)({},e,{isLoading:!0,isError:!1});case"FECTHING_SUCCESS":return Object(x.a)({},e,{isLoading:!1,isError:!1,data:t.payload});case"FECTHING_FAILURE":return Object(x.a)({},e,{isLoading:!1,isError:!0});default:return e}},F={isLoading:!1,isError:!1,data:""},T="FECTHING_INIT",k="FECTHING_SUCCESS",R="FECTHING_FAILURE",H=function(e,t,a){return e[t.name]=a,e},L=function(e,t){var a=new Array(Object.keys(t).length).fill(null).map((function(e,t){return{country:"",confirmedCount:0,deathsCount:0,recoveredCount:0}}));return e.forEach((function(e){var n=e.countryRegion,r=a[t[n]];["confirmed","recovered","deaths"].forEach((function(t){e[t]&&(r[t+"Count"]+=e[t]),r.country||(r.country=n,r.iso3=e.iso3,r.iso2=e.iso2)}))})),a},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r="string"===typeof a[e]?a[e].toUpperCase():a[e],c="string"===typeof n[e]?n[e].toUpperCase():n[e],o=0;return r>c?o=1:r<c&&(o=-1),"desc"===t?-1*o:o}};function G(e){var t=function(e){var t=Object(n.useReducer)(S,F),a=Object(d.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){(function(){var e=Object(I.a)(N.a.mark((function e(){var t,a,n,r,o,l,u;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c({type:T}),e.prev=1,e.next=4,C.a.get("https://covid19.mathdro.id/api/countries/");case 4:return t=e.sent,a=t.data.countries.reduce(H,{}),e.next=8,C.a.get("https://covid19.mathdro.id/api/confirmed");case 8:return n=e.sent,e.next=11,C.a.get("https://covid19.mathdro.id/api/recovered");case 11:r=e.sent,o=L(n.data,a),l=L(r.data,a),(u=o.map((function(e,t){var a=l[t];return Object(x.a)({},e,{confirmedCount:Math.max(e.confirmedCount,a.confirmedCount),deathsCount:Math.max(a.deathsCount,e.deathsCount),recoveredCount:Math.max(e.recoveredCount,a.recoveredCount)})}))).sort(U("confirmedCount","desc")),c({type:k,payload:u}),e.next=23;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0),c({type:R});case 23:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}})()()}),[e]),Object(x.a)({},r)}("https://covid19.mathdro.id/api/confirmed");return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{className:"mb-4"}),r.a.createElement(i.a,{className:"text-center "},r.a.createElement(b,null),r.a.createElement(s.a,{sm:"12",md:"12",lg:"12",className:"map py-3"})),r.a.createElement(i.a,null,r.a.createElement(j,t)),r.a.createElement(i.a,{className:"mb-4"}))}a(52);var _=function(){return r.a.createElement(u,null,r.a.createElement(G,null))};a(53),a(54),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.acde6c49.chunk.js.map