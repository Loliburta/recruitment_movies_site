(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(7),i=a.n(r),s=a(2),o=a(4),l=a(8),v=Object(c.createContext)([""]),p=a(0),u=function(e){e.original_title;var t=e.overview,a=(e.release_date,e.title),n=(e.vote_average,e.poster_path,e.backdrop_path),r=Object(c.useContext)(v),i=Object(s.a)(r,2),u=(i[0],i[1]),j=function(){document.getElementsByTagName("body")[0].style.overflowY="visible",u("")};return Object(p.jsx)("div",{className:"movieOverview__wrapper",onClick:j,children:Object(p.jsxs)("div",{className:"movieOverview",onClick:function(e){e.stopPropagation()},children:[Object(p.jsx)("div",{className:"movieOverview__iconDiv",onClick:j,children:Object(p.jsx)(o.Icon,{className:"movieOverview__iconDiv__icon",icon:l.a})}),Object(p.jsx)("img",{className:"movieOverview__img",src:"https://image.tmdb.org/t/p/w500"+n,alt:a}),Object(p.jsxs)("div",{className:"movieOverview__details",children:[Object(p.jsx)("div",{className:"movieOverview__details__overview",children:t}),Object(p.jsx)("div",{className:"movieOverview__details__title",children:a})]})]})})},j=function(e){var t=e.original_title,a=e.overview,n=e.release_date,r=e.title,i=e.vote_average,o=e.poster_path,l=e.backdrop_path,j=Object(c.useContext)(v),d=Object(s.a)(j,2),_=(d[0],d[1]);return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{className:"movie",onClick:function(){document.getElementsByTagName("body")[0].style.overflowY="hidden",_(Object(p.jsx)(u,{original_title:t,overview:a,release_date:n,title:r,vote_average:i,poster_path:o,backdrop_path:l}))},children:[Object(p.jsx)("img",{className:"movie__img",src:"https://image.tmdb.org/t/p/w300"+o,alt:r}),Object(p.jsxs)("div",{className:"movie__info",children:[Object(p.jsx)("div",{className:"movie__info__title",children:r}),Object(p.jsx)("div",{className:"movie__info__vote_average",children:i})]})]})})},d=a(3),_=a.n(d),b=a(6),m="ca6ba627afa3f3f755cc5f5d8f2cd894",h="https://api.themoviedb.org/3/",O=function(){var e=Object(b.a)(_.a.mark((function e(t,a){var c,n,r;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(h,"movie/").concat(t,"?api_key=").concat(m,"&language=en-US&page=1"),e.prev=1,e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:r=e.sent,console.log(r.results),a(r.results),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}(),x=function(){var e=Object(b.a)(_.a.mark((function e(t,a){var c,n;return _.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=12;break}return e.next=4,fetch("".concat(h,"search/movie?api_key=").concat(m,"&language=en-US&query=").concat(t,"&page=1&include_adult=false"));case 4:return c=e.sent,e.next=7,c.json();case 7:n=e.sent,console.log(n),a(n.results),e.next=13;break;case 12:O("popular",a);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,a){return e.apply(this,arguments)}}(),f=a(9),g=a(10),w=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useContext)(v),i=Object(s.a)(r,2),l=i[0],u=(i[1],Object(c.useCallback)(Object(f.debounce)((function(e,t){return x(e,t)}),700),[]));return Object(c.useEffect)((function(){O("popular",n),console.log(a)}),[]),Object(p.jsxs)(p.Fragment,{children:[l||"",Object(p.jsxs)("div",{className:"navbar",children:[Object(p.jsx)("div",{className:"navbar__popular",onClick:function(){return O("popular",n)},children:"Popular"}),Object(p.jsx)("div",{className:"navbar__popular",onClick:function(){return O("top_rated",n)},children:"Top Rated"}),Object(p.jsx)("div",{className:"navbar__popular",onClick:function(){return O("upcoming",n)},children:"Upcoming"}),Object(p.jsxs)("div",{className:"navbar__search",children:[Object(p.jsx)("label",{htmlFor:"input",children:Object(p.jsx)(o.Icon,{className:"navbar__icon",icon:g.a})}),Object(p.jsx)("input",{id:"input",className:"navbar__input",type:"text",placeholder:"Search",onChange:function(e){u(e.target.value,n)}})]})]}),Object(p.jsx)("div",{className:l?"movies--open":"movies",children:a&&a.map((function(e){if(e.backdrop_path&&e.poster_path)return Object(p.jsx)(j,{original_title:e.original_title,overview:e.overview,release_date:e.release_date,title:e.title,vote_average:e.vote_average,poster_path:e.poster_path,backdrop_path:e.backdrop_path},e.id)}))})]})},k=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(p.jsx)(v.Provider,{value:[a,n],children:Object(p.jsx)(w,{})})};a(19);i.a.render(Object(p.jsx)(n.a.StrictMode,{children:Object(p.jsx)(k,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3d6efac7.chunk.js.map