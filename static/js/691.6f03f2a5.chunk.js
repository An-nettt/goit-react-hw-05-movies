"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[691],{691:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var c=n(439),r=n(791),i=n(689),o=n(87),a=n(323),s=n(184),u=function(e){var t=e.movie,n=t.id,c=t.title,r=t.overview,i=t.vote_average,o=t.release_date,a=t.poster_path,u=t.genres,d=Math.round(10*i),h=new Date(Date.parse(o)).getFullYear();return(0,s.jsxs)("div",{children:[(0,s.jsxs)("h1",{children:[c," (",h,")"]}),(0,s.jsx)("img",{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:c}),(0,s.jsxs)("p",{children:["User Score: ",d,"%"]}),(0,s.jsx)("h3",{children:"Genres"}),(0,s.jsx)(s.Fragment,{children:u&&u.map((function(e){var t=e.name;return(0,s.jsx)("p",{children:t},t)}))}),(0,s.jsx)("h2",{children:"Overview"}),(0,s.jsx)("p",{children:r})]},n)},d=function(){var e,t,n=(0,i.TH)(),d=(0,r.useRef)(null!==(e=null===(t=n.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),h=(0,r.useState)([]),l=(0,c.Z)(h,2),v=l[0],f=l[1],p=(0,i.UO)().id;return(0,r.useEffect)((function(){(0,a.TP)(p).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()})).then((function(e){var t=e.id,n=e.title,c=e.overview,r=e.genres,i=e.vote_average,o=e.release_date,a=e.poster_path;f({id:t,title:n,overview:c,genres:r,vote_average:i,release_date:o,poster_path:a})})).catch((function(e){console.log(e)}))}),[p]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.rU,{to:d.current,children:"Go back"}),(0,s.jsx)(u,{movie:v}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,s.jsx)(r.Suspense,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:(0,s.jsx)(i.j3,{})})]})}},323:function(e,t,n){n.d(t,{Df:function(){return o},IQ:function(){return s},Jh:function(){return u},TP:function(){return a},gH:function(){return d}});var c="4b1c3558eb2d79dd671ee6aeceadbb9c",r="https://api.themoviedb.org/3/",i="movie/",o=function(){return fetch("".concat(r).concat("trending/movie/day","?api_key=").concat(c))},a=function(e){return fetch("".concat(r).concat(i).concat(e,"?api_key=").concat(c))},s=function(e){return fetch("".concat(r).concat(i).concat(e).concat("/credits","?api_key=").concat(c))},u=function(e){return fetch("".concat(r).concat(i).concat(e).concat("/reviews","?api_key=").concat(c))},d=function(e){return fetch("".concat(r).concat("search/movie?query=").concat(e,"&api_key=").concat(c))}}}]);
//# sourceMappingURL=691.6f03f2a5.chunk.js.map