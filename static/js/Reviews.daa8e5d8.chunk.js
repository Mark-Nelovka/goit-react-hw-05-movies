"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[753],{457:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(152),s="Reviews_containerContent__X2hN0",c="Reviews_title__t265C",r="Reviews_comment__udiQ2",i=n(791),o=n(569),u=n.n(o),h=n(871),l=n(184);var d=function(){var e=(0,i.useState)(null),t=(0,a.Z)(e,2),n=t[0],o=t[1],d=(0,h.UO)().movieId;return(0,i.useEffect)((function(){u().get("https://api.themoviedb.org/3/movie/".concat(d,"/reviews?api_key=").concat("35d12bb42e646b3da19939eafb14620b")).then((function(e){e.data.results.length>0&&o(e.data.results)})).catch((function(e){console.log(e)}))}),[d]),(0,l.jsx)(l.Fragment,{children:n?n.map((function(e){var t=e.author,n=e.content,a=e.id;return(0,l.jsxs)("div",{className:s,children:[(0,l.jsxs)("h2",{className:c,children:["Author: ",t]}),(0,l.jsx)("p",{className:r,children:n})]},a)})):(0,l.jsx)("p",{children:"We don't have any reviews for this movie"})})}}}]);
//# sourceMappingURL=Reviews.daa8e5d8.chunk.js.map