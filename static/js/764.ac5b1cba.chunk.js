"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{368:function(t,n,e){var c=e(689),o=e(87),r=e(184);n.Z=function(t){var n=t.movies,e=(0,c.TH)();return(0,r.jsx)("ul",{children:n.map((function(t){var n=t.id,c=t.title;return(0,r.jsx)(o.rU,{to:"/movies/".concat(n),state:{from:e},children:(0,r.jsx)("p",{children:c})},n)}))})}},764:function(t,n,e){e.r(n);var c=e(439),o=e(791),r=e(87),i=e(323),u=e(368),a=e(184);n.default=function(){var t,n=(0,o.useState)(""),e=(0,c.Z)(n,2),f=e[0],s=e[1],h=(0,o.useState)([]),l=(0,c.Z)(h,2),d=l[0],v=l[1],p=(0,r.lr)(),m=(0,c.Z)(p,2),_=m[0],k=m[1],y=null!==(t=_.get("query"))&&void 0!==t?t:"";(0,o.useEffect)((function(){(0,i.gH)(y).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).then((function(t){return t.results.map((function(t){return{id:t.id,title:t.title}}))})).then((function(t){v(t)})).catch((function(t){console.log(t)}))}),[y]);return(0,a.jsxs)("div",{children:[(0,a.jsx)("input",{type:"text",value:f,placeholder:"Enter the name of the movie...",onChange:function(t){s(t.currentTarget.value.toLowerCase())}}),(0,a.jsx)("button",{type:"button",onClick:function(){k({query:f})},children:"Search"}),(0,a.jsx)(u.Z,{movies:d})]})}},323:function(t,n,e){e.d(n,{Df:function(){return i},IQ:function(){return a},Jh:function(){return f},TP:function(){return u},gH:function(){return s}});var c="4b1c3558eb2d79dd671ee6aeceadbb9c",o="https://api.themoviedb.org/3/",r="movie/",i=function(){return fetch("".concat(o).concat("trending/movie/day","?api_key=").concat(c))},u=function(t){return fetch("".concat(o).concat(r).concat(t,"?api_key=").concat(c))},a=function(t){return fetch("".concat(o).concat(r).concat(t).concat("/credits","?api_key=").concat(c))},f=function(t){return fetch("".concat(o).concat(r).concat(t).concat("/reviews","?api_key=").concat(c))},s=function(t){return fetch("".concat(o).concat("search/movie?query=").concat(t,"&api_key=").concat(c))}}}]);
//# sourceMappingURL=764.ac5b1cba.chunk.js.map