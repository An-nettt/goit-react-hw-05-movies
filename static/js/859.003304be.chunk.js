"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[859],{833:function(n,t,e){e.d(t,{Z:function(){return l}});var c,o,r,i=e(689),a=e(168),u=e(87),f=e(444),d=f.ZP.ul(c||(c=(0,a.Z)(["\n  margin-top: 20px;\n  padding-left: 10;\n"]))),s=(0,f.ZP)(u.rU)(o||(o=(0,a.Z)(["\n  font-weight: 500;\n  text-decoration: none;\n"]))),p=f.ZP.p(r||(r=(0,a.Z)(["\n  margin-bottom: 10px;\n  color: #0a0a23;\n"]))),h=e(184),l=function(n){var t=n.movies,e=(0,i.TH)();return(0,h.jsx)(d,{children:t.map((function(n){var t=n.id,c=n.title;return(0,h.jsx)(s,{to:"/movies/".concat(t),state:{from:e},children:(0,h.jsx)(p,{children:c})},t)}))})}},859:function(n,t,e){e.r(t),e.d(t,{default:function(){return x}});var c,o,r=e(439),i=e(791),a=e(87),u=e(168),f=e(444),d=f.ZP.input(c||(c=(0,u.Z)(["\n  width: 250px;\n  margin-left: 20px;\n  margin-right: 10px;\n  padding: 8px 10px;\n  border: 2px solid #0a0a23;\n  border-radius: 5px;\n"]))),s=f.ZP.button(o||(o=(0,u.Z)(["\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  background-color: #0a0a23;\n  color: #fff;\n"]))),p=e(323),h=e(833),l=e(184),x=function(){var n,t=(0,i.useState)(""),e=(0,r.Z)(t,2),c=e[0],o=e[1],u=(0,i.useState)([]),f=(0,r.Z)(u,2),x=f[0],v=f[1],g=(0,a.lr)(),m=(0,r.Z)(g,2),b=m[0],Z=m[1],_=null!==(n=b.get("query"))&&void 0!==n?n:"";(0,i.useEffect)((function(){(0,p.gH)(_).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){return n.results.map((function(n){return{id:n.id,title:n.title}}))})).then((function(n){v(n)})).catch((function(n){console.log(n)}))}),[_]);return(0,l.jsxs)("div",{children:[(0,l.jsx)(d,{type:"text",value:c,placeholder:"Enter the name of the movie...",onChange:function(n){o(n.currentTarget.value.toLowerCase())}}),(0,l.jsx)(s,{type:"button",onClick:function(){Z({query:c})},children:"Search"}),(0,l.jsx)(h.Z,{movies:x})]})}},323:function(n,t,e){e.d(t,{Df:function(){return i},IQ:function(){return u},Jh:function(){return f},TP:function(){return a},gH:function(){return d}});var c="4b1c3558eb2d79dd671ee6aeceadbb9c",o="https://api.themoviedb.org/3/",r="movie/",i=function(){return fetch("".concat(o).concat("trending/movie/day","?api_key=").concat(c))},a=function(n){return fetch("".concat(o).concat(r).concat(n,"?api_key=").concat(c))},u=function(n){return fetch("".concat(o).concat(r).concat(n).concat("/credits","?api_key=").concat(c))},f=function(n){return fetch("".concat(o).concat(r).concat(n).concat("/reviews","?api_key=").concat(c))},d=function(n){return fetch("".concat(o).concat("search/movie?query=").concat(n,"&api_key=").concat(c))}}}]);
//# sourceMappingURL=859.003304be.chunk.js.map