"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[304],{713:function(t,e,n){n.d(e,{E9:function(){return o},Me:function(){return v},bI:function(){return p},jC:function(){return h},np:function(){return g}});var r=n(861),a=n(757),u=n.n(a),c=n(44),i="611d0802856aa5aa9d67aba31a2268eb";function o(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("https://api.themoviedb.org/3/search/movie?query=".concat(e,"&api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function g(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(e){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.ZP.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(i));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},304:function(t,e,n){n.r(e),n.d(e,{default:function(){return w}});var r,a,u=n(861),c=n(885),i=n(757),o=n.n(i),s=n(791),p=n(731),f=n(596),h=n(713),l=n(168),v=n(444),d=v.ZP.div(r||(r=(0,l.Z)([""]))),g=v.ZP.div(a||(a=(0,l.Z)([""]))),m=n(184);function w(){var t=(0,s.useState)([]),e=(0,c.Z)(t,2),n=e[0],r=e[1];return(0,s.useEffect)((function(){var t=new AbortController;function e(){return(e=(0,u.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,h.E9)({signal:t.signal});case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),f.Am.error("Something went wrong. Please, reload the page.");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){t.abort()}}),[]),(0,m.jsxs)(d,{children:[(0,m.jsx)("h2",{children:"Movies are trending today"}),n.map((function(t){var e=t.id,n=t.title;return(0,m.jsx)(g,{children:(0,m.jsx)(p.rU,{to:"/movies/".concat(e),children:n})},e)})),(0,m.jsx)(f.Ix,{position:"top-right",autoClose:3e3})]})}}}]);
//# sourceMappingURL=304.75c9b788.chunk.js.map