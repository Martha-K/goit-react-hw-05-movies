"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[782],{377:function(e,n,t){t.d(n,{J:function(){return o}});var o="https://api.themoviedb.org/3"},782:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var o,i,r,c=t(439),a=t(689),u=t(791),l=t(243),d=t(377),s=t(168),v=t(444),h=v.ZP.div(o||(o=(0,s.Z)(["\n  border: 1px dashed black;\n  margin-bottom: 2px;\n"]))),f=v.ZP.p(i||(i=(0,s.Z)(["\nfont-size: larger;\nfont-weight: 600;\nmargin-left: 20px;\n"]))),_=v.ZP.p(r||(r=(0,s.Z)(["\n  margin-left: 20px;\n"]))),p=t(184),m=function(){var e,n,t=(0,a.UO)().movieId,o=(0,u.useState)(""),i=(0,c.Z)(o,2),r=i[0],s=i[1];return(0,u.useEffect)((function(){l.Z.get("".concat(d.J,"/movie/").concat(t,"/reviews?api_key=").concat({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY)).then((function(e){s(null===e||void 0===e?void 0:e.data)}))}),[t]),console.log("review",r),(0,p.jsx)("div",{children:null!==r&&void 0!==r&&null!==(e=r.results)&&void 0!==e&&e.length?null===(n=r.results)||void 0===n?void 0:n.map((function(e){return(0,p.jsxs)(h,{children:[(0,p.jsxs)(f,{children:["Author: ",e.author]}),(0,p.jsx)(_,{children:e.content})]},e.id)})):(0,p.jsx)(f,{children:"Unfortunately, there are no reviews yet :( "})})}}}]);
//# sourceMappingURL=782.2d12f337.chunk.js.map