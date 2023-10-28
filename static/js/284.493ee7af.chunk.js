"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[284],{58992:function(t,n,e){var r=e(29439),i=e(72791);n.Z=function(t){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),a=e[0],o=e[1],s=(0,i.useRef)(!1),u=(0,i.useRef)(t);return u.current=t,(0,i.useEffect)((function(){var t=setTimeout((function(){s.current=!0,o(!!u.current)}),300),n=setTimeout((function(){u.current?o(!0):clearTimeout(t)}),100);return function(){clearTimeout(n),clearTimeout(t)}}),[]),(0,i.useEffect)((function(){s.current&&o(!!t)}),[t,s]),a}},8204:function(t,n,e){e.r(n),e.d(n,{default:function(){return U}});var r=e(29439),i=e(67394),a=e(97552),o=e(34855),s=e(56196),u=e(50525),c=e(58992),d=e(93447),l=e(19201),p=e(65509),f=e(72791),h=e(39230),x=e(57689),m=e(57621),g=e(72363),v=e(47047),Z=e(64554),j=e(80184),w=function(){return(0,j.jsx)(v.Z,{animation:"wave",height:40,width:27})},k=function(){return(0,j.jsxs)(g.Z,{sx:{display:"flex",justifyContent:"space-between"},children:[(0,j.jsx)(v.Z,{animation:"wave",height:60,width:"150px"}),(0,j.jsx)(Z.Z,{sx:{display:"flex",gap:1},children:[1,2,3].map((function(t,n){return(0,j.jsx)(w,{},n)}))})]})},b=(0,f.memo)(k),y=function(){return(0,j.jsx)(v.Z,{sx:{minHeight:190,flexGrow:1},animation:"wave",variant:"rectangular"})},L=(0,f.memo)(y),T=e(9585),C=function(){return(0,j.jsx)(T.Z,{avatar:(0,j.jsx)(v.Z,{animation:"wave",variant:"circular",width:40,height:40}),title:(0,j.jsx)(v.Z,{animation:"wave",height:10,width:"80%",style:{marginBottom:6}}),subheader:(0,j.jsx)(v.Z,{animation:"wave",height:10,width:"40%"}),action:(0,j.jsx)(w,{})})},B=(0,f.memo)(C),F=function(){return(0,j.jsxs)(m.Z,{sx:{m:2,borderRadius:"20px",display:"flex",flexDirection:"column"},elevation:0,children:[(0,j.jsx)(B,{}),(0,j.jsx)(L,{}),(0,j.jsx)(b,{})]})},R=e(74165),I=e(15861),P=e(12917),S=e(91797),z=e(25983),H=e(35362),E=e(4942),J=e(40260),M=e(66934),O=(0,M.ZP)("main")((function(t){var n,e=t.theme;return n={position:"relative",width:"100%",top:15,paddingLeft:"15px",paddingRight:"15px",marginBottom:"30px",maxWidth:800,overflow:"hidden",height:"calc(100vh - 90px)",zIndex:1e3},(0,E.Z)(n,e.breakpoints.up("sm"),{paddingLeft:"50px",paddingRight:"50px"}),(0,E.Z)(n,"& > div",{marginTop:"20px",height:"calc(100% - 60px)","& > div":{height:"100%"}}),n})),q=(0,M.ZP)(J.Z,{shouldForwardProp:function(t){return"right"!==t}})((function(t){var n=t.right,e=t.theme;return(0,E.Z)({position:"absolute",top:"0",left:n?"unset":"0%",right:n?"0%":"unset",width:"30px",height:"30px",color:e.palette.primary.main,transform:n?"rotate(180deg)":"unset",cursor:"pointer",transition:"all 0.15s ease-in-out","&:hover":{color:e.palette.primary.dark,transform:n?"rotate(180deg) scale(1.1)":"scale(1.1)"}},e.breakpoints.up("sm"),{top:"50%"})})),A=(0,M.ZP)("button")((function(t){var n=t.theme;return(0,E.Z)({background:"transparent",margin:"10px auto 0",padding:"0",border:"none",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",color:n.palette.primary.contrastText,"& svg":{display:"none",transition:".2s"},"& p":{marginLeft:"10px",fontSize:16,transition:".2s"},"&:hover svg":{transform:"rotate3d(0,1,0,180deg)"},"&:hover p":{transform:"scale(1.05)"}},n.breakpoints.up("sm"),{"& svg":{display:"block"}})})),G={enter:function(t){return{x:t>0?800:-800,opacity:0}},initial:{opacity:0},center:{zIndex:1,x:0,opacity:1}},N=function(){var t=(0,x.UO)().todoListId,n=(0,f.useState)(0),e=(0,r.Z)(n,2),m=e[0],g=e[1],v=(0,o.x)().currentUser,Z=(0,x.s0)(),w=(0,f.useState)(""),k=(0,r.Z)(w,2),b=k[0],y=k[1],L=(0,h.$G)().t,T=function(t,n){var e=function(){var n=(0,I.Z)((0,R.Z)().mark((function n(){return(0,R.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,S.R1)((0,z.o)(H.kJ,(0,H.qB)(t)+"?".concat(H.sF,"=true"))).then((function(t){return t.data}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return(0,P.a)([H.kJ,(0,H.qB)(t),H.sF],e,n)}(t),C=(0,c.Z)(T.isLoading),B=JSON.parse(localStorage.getItem((0,p.V)((null===v||void 0===v?void 0:v.id)||""))||"[]"),E=(0,f.useCallback)((function(n){if(g(n),t){var e=B.indexOf(t),r=n<0?e>B.length-2?0:e+1:0===e?B.length-1:e-1,i=B[r];y(i),Z(s.i.TodoListPage.path(i))}}),[t,B,Z]),J=(0,f.useMemo)((function(){var t=null;return C?t=(0,j.jsx)(F,{}):T.isFetched&&!T.data?t=(0,j.jsx)(l.Z,{}):T.data&&(t=(0,j.jsx)(d.Z,{disableHeaderRedirect:!0,todoList:T.data,scrollableContent:!0,actionsVariant:"buttons"})),t}),[T.data,T.isFetched,C]);return T.data||C?(0,j.jsxs)(O,{children:[(0,j.jsxs)(A,{onClick:function(){return Z(s.i.TodoListsPage.path)},children:[(0,j.jsx)(i.Z,{}),(0,j.jsx)("p",{children:L(u.w.BackToTodoLists)})]}),(0,j.jsx)(a.E.div,{custom:m,variants:G,initial:m?"enter":"initial",animate:"center",exit:"exit",transition:{opacity:{duration:.2}},children:J}),B.length>2&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(q,{onClick:function(){return E(1)}}),(0,j.jsx)(q,{right:!0,onClick:function(){return E(-1)}})]})]},b):(0,j.jsx)(j.Fragment,{})},U=(0,f.memo)(N)},67394:function(t,n,e){var r=e(64836);n.Z=void 0;var i=r(e(45649)),a=e(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");n.Z=o},40260:function(t,n,e){var r=e(64836);n.Z=void 0;var i=r(e(45649)),a=e(80184),o=(0,i.default)((0,a.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");n.Z=o}}]);
//# sourceMappingURL=284.493ee7af.chunk.js.map