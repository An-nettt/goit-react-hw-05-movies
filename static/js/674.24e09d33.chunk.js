"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{833:function(n,t,c){c.d(t,{Z:function(){return p}});var e,o,r,i=c(689),a=c(168),u=c(87),f=c(444),s=f.ZP.ul(e||(e=(0,a.Z)(["\n  margin-top: 20px;\n  padding-left: 10;\n"]))),d=(0,f.ZP)(u.rU)(o||(o=(0,a.Z)(["\n  font-weight: 500;\n  text-decoration: none;\n"]))),h=f.ZP.p(r||(r=(0,a.Z)(["\n  margin-bottom: 10px;\n  color: #0a0a23;\n"]))),l=c(184),p=function(n){var t=n.movies,c=(0,i.TH)();return(0,l.jsx)(s,{children:t.map((function(n){var t=n.id,e=n.title;return(0,l.jsx)(d,{to:"/movies/".concat(t),state:{from:c},children:(0,l.jsx)(h,{children:e})},t)}))})}},674:function(n,t,c){c.r(t),c.d(t,{default:function(){return h}});var e,o=c(439),r=c(791),i=c(168),a=c(444).ZP.h1(e||(e=(0,i.Z)(["\n  margin-left: 20px;\n"]))),u=c(323),f=c(833),s=c(684),d=c(184),h=function(){var n=(0,r.useState)([]),t=(0,o.Z)(n,2),c=t[0],e=t[1],i=(0,r.useState)(!1),h=(0,o.Z)(i,2),l=h[0],p=h[1];return(0,r.useEffect)((function(){p(!0),(0,u.Df)().then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n.results.map((function(n){return{id:n.id,title:n.title}}))})).then((function(n){e(n)})).catch((function(n){console.log(n)})).finally((function(){p(!1)}))}),[]),(0,d.jsxs)("div",{children:[l&&(0,d.jsx)(s.Z,{}),(0,d.jsx)(a,{children:" Trending today"}),(0,d.jsx)(f.Z,{movies:c})]})}},323:function(n,t,c){c.d(t,{Df:function(){return i},IQ:function(){return u},Jh:function(){return f},TP:function(){return a},gH:function(){return s}});var e="4b1c3558eb2d79dd671ee6aeceadbb9c",o="https://api.themoviedb.org/3/",r="movie/",i=function(){return fetch("".concat(o).concat("trending/movie/day","?api_key=").concat(e))},a=function(n){return fetch("".concat(o).concat(r).concat(n,"?api_key=").concat(e))},u=function(n){return fetch("".concat(o).concat(r).concat(n).concat("/credits","?api_key=").concat(e))},f=function(n){return fetch("".concat(o).concat(r).concat(n).concat("/reviews","?api_key=").concat(e))},s=function(n){return fetch("".concat(o).concat("search/movie?query=").concat(n,"&api_key=").concat(e))}}}]);
//# sourceMappingURL=674.24e09d33.chunk.js.map