"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[460],{432:function(e,t,n){n.r(t);var a=n(152),i=n(569),r=n.n(i),c=n(791),o=n(504),u=n(184);t.default=function(){var e=(0,c.useState)([]),t=(0,a.Z)(e,2),n=t[0],i=t[1];return(0,c.useEffect)((function(){r().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("35d12bb42e646b3da19939eafb14620b")).then((function(e){i(e.data.results)}))}),[]),(0,u.jsx)("ul",{children:n.map((function(e){return(0,u.jsx)(o.rU,{to:"movies/".concat(e.id),children:(0,u.jsx)("li",{children:e.title||e.original_name})},e.id)}))})}}}]);
//# sourceMappingURL=HomePage.d82f09e3.chunk.js.map