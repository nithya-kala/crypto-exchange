(this["webpackJsonpcrypto-exchange"]=this["webpackJsonpcrypto-exchange"]||[]).push([[0],{69:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(52),s=n.n(r),l=(n(69),n(3)),i=n(4),o=n(34),j=n.n(o),b=n(125),d=n(120),O=n(124),h=n(121),u=n(128),x=n(108),g=n(109),m=n(110),p=n(111),f=n(112),C=n(113),S=n(114),y=n(115),v=n(116),D=n(117),E=n(118),T=n(119),A=n(97),N=n(123),w=n(127),R=n(126),F=n(107),I=n(2),_=Object(A.a)((function(e,t){var n=t.opened;return{control:{width:200,display:"flex",justifyContent:"space-between",alignItems:"center",padding:"5px 15px",borderRadius:e.radius.sm,border:"1px solid ".concat(e.colors.gray[4]),transition:"background-color 150ms ease",backgroundColor:n?e.colors.gray[0]:e.white,"&:hover":{backgroundColor:e.colors.gray[0]}},label:{fontWeight:500,fontSize:e.fontSizes.sm},icon:{transition:"transform 150ms ease",transform:n?"rotate(180deg)":"rotate(0deg)"}}})),k=function(e){var t=Object(c.useState)(!1),n=Object(l.a)(t,2),a=n[0],r=n[1],s=_({opened:a}).classes,i=e.options.map((function(t){return Object(I.jsx)(N.a.Item,{icon:t.image,onClick:function(){return e.onChange(t)},children:t.label},t.label)}));return Object(I.jsx)(N.a,{transitionDuration:0,onOpen:function(){return r(!0)},onClose:function(){return r(!1)},radius:"sm",control:Object(I.jsxs)(w.a,{className:s.control,children:[Object(I.jsxs)(R.a,{spacing:"xs",children:[e.selected.image,Object(I.jsx)("span",{className:s.label,children:e.selected.label})]}),Object(I.jsx)(F.a,{size:16,className:s.icon})]}),children:i})},z=[{label:"USD",image:Object(I.jsx)(x.a,{})},{label:"EUR",image:Object(I.jsx)(g.a,{})},{label:"GBP",image:Object(I.jsx)(m.a,{})},{label:"SGD",image:Object(I.jsx)(p.a,{})},{label:"CAD",image:Object(I.jsx)(f.a,{})},{label:"YEN",image:Object(I.jsx)(C.a,{})},{label:"INR",image:Object(I.jsx)(S.a,{})},{label:"MYR",image:Object(I.jsx)(y.a,{})}],B=[{label:"Bitcoin",image:Object(I.jsx)(v.a,{})},{label:"Ethereum",image:Object(I.jsx)(D.a,{})},{label:"Ripple",image:Object(I.jsx)(E.a,{})},{label:"Litecoin",image:Object(I.jsx)(T.a,{})}],P=function(e){var t=Object(c.useState)(B[0]),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(10),i=Object(l.a)(s,2),o=i[0],j=i[1],x=Object(c.useState)(z[0]),g=Object(l.a)(x,2),m=g[0],p=g[1],f=Object(c.useState)(20),C=Object(l.a)(f,2),S=C[0],y=C[1];return Object(I.jsx)(b.a,{shadow:"xs",p:"lg",style:{marginBottom:10},children:Object(I.jsxs)(b.a.Section,{p:"lg",children:[Object(I.jsx)(d.a,{children:Object(I.jsx)("h2",{children:"Exchange"})}),Object(I.jsxs)(O.a,{align:"flex-end",children:[Object(I.jsxs)(O.a.Col,{xs:3,children:[Object(I.jsx)("label",{children:"Currency from "}),Object(I.jsx)(k,{options:B,selected:a,onChange:r})]}),Object(I.jsxs)(O.a.Col,{xs:2,children:[Object(I.jsx)("label",{children:"Amount "}),Object(I.jsx)(h.a,{type:"number",placeholder:"amount",value:o,onChange:function(e){return j(parseInt(e.target.value))}})]}),Object(I.jsx)(O.a.Col,{xs:1,style:{alignSelf:"center"},children:Object(I.jsx)("label",{className:"equals",children:"="})}),Object(I.jsxs)(O.a.Col,{xs:3,children:[Object(I.jsx)("label",{children:"Currency to "}),Object(I.jsx)(k,{options:z,selected:m,onChange:p})]}),Object(I.jsxs)(O.a.Col,{xs:2,children:[Object(I.jsx)("label",{children:"Amount "}),Object(I.jsx)(h.a,{type:"number",placeholder:"amount",value:S,onChange:function(e){return y(parseInt(e.target.value))}})]}),Object(I.jsx)(O.a.Col,{xs:1,children:Object(I.jsx)(u.a,{color:"green",onClick:function(){return function(){var t={from:{currency:a.label,amount:o},to:{currency:m.label,amount:S},orderDate:(new Date).toISOString()};e.onAddOrder(t)}()},children:"Save"})})]})]})})},L=n(129),U=n(56),W=n(122),G=function(e){var t=e.orders.map((function(e,t){return Object(I.jsxs)("tr",{children:[Object(I.jsx)("td",{children:t+1}),Object(I.jsx)("td",{children:e.from.currency}),Object(I.jsx)("td",{children:e.from.amount}),Object(I.jsx)("td",{children:e.to.currency}),Object(I.jsx)("td",{children:e.to.amount}),Object(I.jsx)("td",{children:e.orderDate})]},JSON.stringify(e))}));return Object(I.jsx)(b.a,{shadow:"xs",p:"lg",children:Object(I.jsxs)(b.a.Section,{p:"lg",children:[Object(I.jsx)(O.a,{align:"flex-end",children:Object(I.jsx)(O.a.Col,{xs:3,children:Object(I.jsx)(U.a,{transitionDuration:0,placeholder:"Pick date",label:"Event date",icon:Object(I.jsx)(W.a,{size:16}),value:e.ordDate,onChange:e.onDtChange})})}),Object(I.jsxs)(L.a,{horizontalSpacing:"lg",children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{children:[Object(I.jsx)("th",{children:"#"}),Object(I.jsx)("th",{children:"Currency From"}),Object(I.jsx)("th",{children:"Amount"}),Object(I.jsx)("th",{children:"Currency To"}),Object(I.jsx)("th",{children:"Amount"}),Object(I.jsx)("th",{children:"Date"})]})}),Object(I.jsx)("tbody",{children:t})]})]})})},H=n(130),J=n(131),K=n(17);"ghpages"===Object({NODE_ENV:"production",PUBLIC_URL:"/crypto-exchange",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).HOST_ENV&&(j.a.defaults.baseURL="https://api.nithis.in");var M=Object(A.a)((function(e){return{wrapper:{paddingTop:4*e.spacing.xl,paddingBottom:4*e.spacing.xl},title:Object(i.a)({fontFamily:"Greycliff CF, ".concat(e.fontFamily),fontWeight:900,marginBottom:e.spacing.md,textAlign:"center"},e.fn.smallerThan("sm"),{fontSize:28,textAlign:"left"}),description:Object(i.a)({textAlign:"center"},e.fn.smallerThan("sm"),{textAlign:"left"})}}));var V=function(){var e=M().classes,t=Object(c.useState)([]),n=Object(l.a)(t,2),a=n[0],r=n[1],s=Object(c.useState)(null),i=Object(l.a)(s,2),o=i[0],b=i[1],d=function(){return j.a.get("/api/get-orders",{params:{ordDate:o}}).then((function(e){return r(e.data)}))};return Object(c.useEffect)((function(){d()}),[o]),setInterval((function(){return console.log("Entered Live Data")}),6e4),Object(I.jsxs)(H.a,{size:"md",pt:10,pb:10,className:e.wrapper,children:[Object(I.jsx)(J.a,{className:e.title,children:"Crypto Exchange App"}),Object(I.jsx)(H.a,{size:560,p:0,children:Object(I.jsx)(K.a,{size:"sm",className:e.description,children:"Every once in a while, you\u2019ll see a Golbat that\u2019s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pok\xe9mon."})}),Object(I.jsx)(P,{onAddOrder:function(e){j.a.post("/api/insert-order",e).then((function(e){return d()}))}}),Object(I.jsx)(G,{orders:a,ordDate:o,onDtChange:b})]})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),c(e),a(e),r(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(I.jsx)(a.a.StrictMode,{children:Object(I.jsx)(V,{})})),Y()}},[[96,1,2]]]);
//# sourceMappingURL=main.94005745.chunk.js.map