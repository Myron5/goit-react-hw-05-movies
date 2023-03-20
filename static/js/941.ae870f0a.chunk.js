"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[941],{941:function(e,r,n){n.r(r),n.d(r,{default:function(){return h}});var t=n(861),a=n(439),c=n(757),s=n.n(c),i=n(791),u=n(87),o=n(689),l=n(184),d=function(e){var r=e.film,n=(0,i.useState)(!1),t=(0,a.Z)(n,2),c=t[0],s=t[1];if(0!==Object.keys(r).length)return(0,l.jsxs)("div",{children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:r.poster,alt:"",onLoad:function(){return s(!0)}}),!c&&(0,l.jsx)("p",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u0442\u044c\u0441\u044f \u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u043d\u044f"})]}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsxs)("h1",{children:[r.title," (",r.year,")"]})}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:"User score"}),(0,l.jsx)("p",{children:r.vote_average})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:"Overview"}),(0,l.jsx)("p",{children:r.overview})]}),(0,l.jsxs)("li",{children:[(0,l.jsx)("h2",{children:"Genres"}),(0,l.jsx)("ul",{children:r.genres.map((function(e){var r=e.id,n=e.name;return(0,l.jsx)("li",{children:(0,l.jsx)("p",{children:n})},r)}))})]})]})]})},p=n(634),h=function(){var e,r,n=(0,o.UO)().movieId,c=(0,o.TH)(),h=(0,i.useRef)(null!==(e=null===(r=c.state)||void 0===r?void 0:r.from)&&void 0!==e?e:"/movies"),f=(0,i.useState)({}),v=(0,a.Z)(f,2),x=v[0],j=v[1],w=function(){var e=(0,t.Z)(s().mark((function e(){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.s_)(n);case 3:r=e.sent,j({title:r.title,poster:(0,p.IU)(r.poster_path),vote_average:r.vote_average,backdrop:(0,p.IU)(r.backdrop_path),year:new Date(r.release_date).getFullYear(),overview:r.overview,genres:r.genres}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){(0,t.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w();case 2:case"end":return e.stop()}}),e)})))()}),[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{children:(0,l.jsx)(u.rU,{to:h.current,children:"\u25c0 \u041d\u0430\u0437\u0430\u0434"})}),(0,l.jsxs)("p",{children:["\xa0\xa0\xa0\xa0\xa0\xa0\ud83d\udcc1\u0414\u0435\u0442\u0430\u043b\u0456 \u0444\u0456\u043b\u044c\u043c\u0443 ... ",n]}),(0,l.jsx)("br",{}),(0,l.jsx)(d,{film:x}),(0,l.jsx)("br",{}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"cast",children:"\xa0\xa0\xa0\xa0\xa0\xa0\ud83c\udfad\u0421\u043a\u043b\u0430\u0434 \u0430\u043a\u0442\u043e\u0440\u0456\u0432"})}),(0,l.jsx)("li",{children:(0,l.jsx)(u.rU,{to:"reviews",children:"\xa0\xa0\xa0\xa0\xa0\xa0\ud83d\ude48\u0412\u0456\u0434\u0433\u0443\u043a\u0438 \u043a\u0440\u0438\u0442\u0438\u043a\u0456\u0432"})})]}),(0,l.jsx)(i.Suspense,{fallback:(0,l.jsx)("div",{children:"\u0417\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0443\u0454\u043c \u0441\u0442\u043e\u0440\u0456\u043d\u043a\u0443..."}),children:(0,l.jsx)(o.j3,{})})]})}},634:function(e,r,n){n.d(r,{uR:function(){return l},d6:function(){return p},s_:function(){return d},IU:function(){return f},s2:function(){return o},CE:function(){return h}});var t=n(683),a=n(861),c=n(757),s=n.n(c),i=n(243);i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u={api_key:"8741a9c14c2465a0e7b18901e07e7ee9"},o=function(){var e=(0,a.Z)(s().mark((function e(r){var n,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams((0,t.Z)((0,t.Z)({},u),{},{page:r})),e.next=3,i.Z.get("/trending/movie/day?".concat(n));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,a.Z)(s().mark((function e(r,n){var a,c,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=new URLSearchParams((0,t.Z)((0,t.Z)({},u),{},{query:r,page:n})),e.next=3,i.Z.get("/search/movie?".concat(a));case 3:return c=e.sent,o=c.data,e.abrupt("return",o);case 6:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(r){var n,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams((0,t.Z)({},u)),e.next=3,i.Z.get("/movie/".concat(r,"?").concat(n));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,a.Z)(s().mark((function e(r){var n,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams((0,t.Z)({},u)),e.next=3,i.Z.get("/movie/".concat(r,"/credits?").concat(n));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,a.Z)(s().mark((function e(r){var n,a,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams((0,t.Z)({},u)),e.next=3,i.Z.get("/movie/".concat(r,"/reviews?").concat(n));case 3:return a=e.sent,c=a.data,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(e){return e?"https://image.tmdb.org/t/p/w500".concat(e):"default"}}}]);
//# sourceMappingURL=941.ae870f0a.chunk.js.map