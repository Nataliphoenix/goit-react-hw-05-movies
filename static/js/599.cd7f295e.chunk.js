"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[599],{713:function(n,t,e){e.d(t,{E9:function(){return c},Me:function(){return d},bI:function(){return p},jC:function(){return l},np:function(){return v}});var r=e(861),a=e(757),i=e.n(a),o=e(44),u="611d0802856aa5aa9d67aba31a2268eb";function c(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function p(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/search/movie?query=".concat(t,"&api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(i().mark((function n(t){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.ZP.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},599:function(n,t,e){e.r(t),e.d(t,{default:function(){return P}});var r,a,i,o,u=e(861),c=e(885),s=e(757),p=e.n(s),f=e(731),l=e(791),h=e(596),d=e(168),x=e(444),v=e(128),g=x.ZP.div(r||(r=(0,d.Z)(["\n  display: inline-flex;\n  align-items: center;\n  position: relative;\n  margin-bottom: 16px;\n  text-transform: uppercase;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),m=x.ZP.form(a||(a=(0,d.Z)(["\n  display: flex;\n  align-items: center;\n  width: 800px;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=(0,x.ZP)(v.G4C)(i||(i=(0,d.Z)(["\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  right: 6px;\n"]))),w=x.ZP.input(o||(o=(0,d.Z)(["\n  width: 100%;\n  padding: 8px 32px 8px 8px;\n  border-radius: 2px;\n  font: inherit;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),y=e(184);function Z(n){var t=n.onSubmit,e=(0,l.useState)(""),r=(0,c.Z)(e,2),a=r[0],i=r[1];return(0,y.jsx)(g,{children:(0,y.jsxs)(m,{onSubmit:function(n){n.preventDefault(),""!==a.trim()?(t(a),i("")):h.Am.error("Sorry, movie not found. Please try again.")},children:[(0,y.jsx)(b,{}),(0,y.jsx)(w,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movie",value:a,onChange:function(n){i(n.currentTarget.value.toLowerCase())}})]})})}var k=e(713),_=e(689),j=e(793);function P(){var n=(0,_.TH)(),t=(0,l.useState)("idle"),e=(0,c.Z)(t,2),r=e[0],a=e[1],i=(0,l.useState)(""),o=(0,c.Z)(i,2),s=o[0],d=o[1],x=(0,f.lr)(),v=(0,c.Z)(x,2),g=v[0],m=v[1],b=g.get("query");return(0,l.useEffect)((function(){if(b){var n=new AbortController;return function(){t.apply(this,arguments)}(),function(){n.abort()}}function t(){return(t=(0,u.Z)(p().mark((function t(){var e;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a("pending"),t.prev=1,t.next=4,(0,k.bI)(b,{signal:n.signal});case 4:e=t.sent,d(e),a("resolved"),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),h.Am.error("Something went wrong. Please, reload the page."),a("rejected");case 13:return t.prev=13,a("resolved"),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[1,9,13,16]])})))).apply(this,arguments)}}),[b]),(0,y.jsxs)("main",{children:[(0,y.jsx)(Z,{value:b,onSubmit:function(n){m(""!==n?{query:n}:{})}}),"pending"===r&&(0,y.jsx)(j.a,{}),s.length>0&&(0,y.jsx)("ul",{children:s.map((function(t){var e=t.id,r=t.title;return(0,y.jsx)("li",{children:(0,y.jsx)(f.rU,{to:"/movies/".concat(e),state:{from:n},children:r})},e)}))})]})}}}]);
//# sourceMappingURL=599.cd7f295e.chunk.js.map