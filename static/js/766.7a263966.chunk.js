"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[766],{377:function(n,e,i){i.d(e,{J:function(){return t}});var t="https://api.themoviedb.org/3"},766:function(n,e,i){i.r(e),i.d(e,{default:function(){return C}});var t,o,l,d,r,s,c,a,v=i(439),h=i(243),p=i(791),u=i(689),x=i(168),f=i(444),j=i(87),_=f.ZP.div(t||(t=(0,x.Z)(["\ndisplay: flex;\npadding: 10px;\n"]))),Z=f.ZP.div(o||(o=(0,x.Z)(["\nmargin-left: 10px;\n"]))),m=f.ZP.ul(l||(l=(0,x.Z)(["\n  display: flex;\n\n"]))),g=f.ZP.li(d||(d=(0,x.Z)(["\n  list-style: none;\n  margin-left: 40px;\n"]))),P=f.ZP.img(r||(r=(0,x.Z)(["\n  width: 300px;\n  border: 2px solid black;\n"]))),w=f.ZP.p(s||(s=(0,x.Z)(["\nfont-size: 30px;\nfont-weight: 700;\n"]))),S=f.ZP.p(c||(c=(0,x.Z)(["\n  font-weight: 600;\n  font-size: 20px;\n"]))),E=(0,f.ZP)(j.rU)(a||(a=(0,x.Z)(["\n  color: #000000;\n  text-decoration: none;\n  font-size: 25px;\n\n  &.active {\n    color: blue;\n  }\n"]))),k=i(377),b=i(184),C=function(){var n,e=(0,u.UO)().movieId,i=(0,p.useState)([]),t=(0,v.Z)(i,2),o=t[0],l=t[1];return(0,p.useEffect)((function(){h.Z.get("".concat(k.J,"/movie/").concat(e,"?api_key=").concat({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY)).then((function(n){l(null===n||void 0===n?void 0:n.data)}))}),[e]),(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(_,{children:[(null===o||void 0===o?void 0:o.poster_path)&&(0,b.jsx)(P,{src:"https://image.tmdb.org/t/p/w500/".concat(null===o||void 0===o?void 0:o.poster_path),alt:null===o||void 0===o?void 0:o.title}),(0,b.jsxs)(Z,{children:[(0,b.jsx)(w,{children:null===o||void 0===o?void 0:o.title}),(0,b.jsxs)(S,{children:[Math.floor(10*(null===o||void 0===o?void 0:o.vote_average))," %"]}),(0,b.jsx)("p",{children:null===o||void 0===o?void 0:o.release_date}),(0,b.jsx)(S,{children:"Overview"}),(0,b.jsx)("p",{children:null===o||void 0===o?void 0:o.overview}),(0,b.jsx)(S,{children:"Genres"}),(0,b.jsx)("p",{children:null===(n=o.genres)||void 0===n?void 0:n.map((function(n){return(0,b.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,b.jsxs)(m,{children:[(0,b.jsx)(g,{children:(0,b.jsx)(E,{to:"cast",children:"Cast"})}),(0,b.jsx)(g,{children:(0,b.jsx)(E,{to:"reviews",children:"Reviews"})})]}),(0,b.jsx)(p.Suspense,{fallback:(0,b.jsx)("div",{children:"Loading..."}),children:(0,b.jsx)(u.j3,{})})]})}}}]);
//# sourceMappingURL=766.7a263966.chunk.js.map