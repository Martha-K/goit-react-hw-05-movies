"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[222],{377:function(n,t,e){e.d(t,{J:function(){return i}});var i="https://api.themoviedb.org/3"},222:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var i,r,o,a,c,d,l=e(439),u=e(791),p=e(243),s=e(377),h=e(168),x=e(444),_=e(87),f=x.ZP.div(i||(i=(0,h.Z)(["\npadding: 20px;\nmargin-left: 20px;\n"]))),g=x.ZP.input(r||(r=(0,h.Z)(["\nwidth: 200px;\nheight: 30px;\nborder-color: black;\nborder-radius: 8px;\nmargin-right: 5px;\nfont-size: large;\npadding-left: 10px;\n"]))),v=x.ZP.button(o||(o=(0,h.Z)(["\n  width: 90px;\n  height: 30px;\n  border-color: black;\n  border-radius: 5px;\n"]))),Z=x.ZP.li(a||(a=(0,h.Z)(["\n  padding: 2px;\n  text-decoration: none;\n"]))),b=x.ZP.ul(c||(c=(0,h.Z)(["\n  /* list-style: none; */\n"]))),m=(0,x.ZP)(_.rU)(d||(d=(0,h.Z)(["\n  color: black;\n  text-decoration: none;\n  font-size: 20px;\n\n  &.active {\n    color: blue;\n  }\n"]))),P=e(184),k=function(){var n=(0,u.useState)([]),t=(0,l.Z)(n,2),e=t[0],i=t[1],r=(0,u.useState)(""),o=(0,l.Z)(r,2),a=o[0],c=o[1];return(0,P.jsx)(P.Fragment,{children:(0,P.jsxs)(f,{children:[(0,P.jsx)(g,{type:"text",value:a,onChange:function(n){return c(n.target.value)}}),(0,P.jsx)(v,{type:"button",onClick:function(n){p.Z.get("".concat(s.J,"/search/movie?query=").concat(n,"&api_key=").concat({NODE_ENV:"production",PUBLIC_URL:"/goit-react-hw-05-movies",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_API_KEY)).then((function(n){i(n.data.results)}))},children:"\u041f\u043e\u0448\u0443\u043a"}),(0,P.jsx)("div",{children:(0,P.jsx)(b,{children:e.map((function(n){return(0,P.jsx)(Z,{children:(0,P.jsx)(m,{to:"/movies/".concat(n.id),children:n.title?n.title:n.name})},n.id)}))})})]})})}}}]);
//# sourceMappingURL=222.fb3187d3.chunk.js.map