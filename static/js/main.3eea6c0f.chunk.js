(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{130:function(e,a,t){e.exports=t(149)},149:function(e,a,t){"use strict";t.r(a);t(131);var n=t(0),o=t.n(n),r=t(13),i=t.n(r),l=t(224),c=t(24),s=t(36),m=t(223),d=t(49),u=t(115),p=t(196),h=Object(u.a)({props:{MuiPaper:{elevation:0},MuiAppBar:{elevation:1},MuiButton:{},MuiMenu:{elevation:1},MuiCard:{elevation:0}},overrides:{MuiButton:{root:{minWidth:0,"&$hover":{backgroundColor:"rgba(0, 0, 0, 0.08)"},"&$focusVisible":{boxShadow:"none",backgroundColor:"rgba(0, 0, 0, 0.06)"}},contained:{boxShadow:"none","&:active":{boxShadow:"none"},"&:focus":{boxShadow:"none"}},containedSecondary:{color:"#fff","&:hover":{backgroundColor:"rgb(118, 195, 21)"}}},MuiButtonGroup:{root:{boxShadow:"none"},contained:{boxShadow:"none","&:active":{boxShadow:"none"},"&:focus":{boxShadow:"none"}}}},palette:{secondary:{main:"#8cd136"},primary:{main:p.a[600]}},typography:{h1:{fontSize:"2rem"},h2:{fontSize:"1.8rem"},h3:{fontSize:"1.6rem"},h4:{fontSize:"1.4rem"},h5:{fontSize:"1.2rem"},h6:{fontSize:"1rem"}}}),b=Object(d.a)({},h,{header:{background:"#fff"},sidebar:{width:250,widthCollapsed:h.spacing(7),background:"#4a4d5a;",color:"#fff"}}),f=function(){return o.a.createElement("div",{className:"Auth"})},g=t(28),E=t(27),v=t(3),w=t(32),k=t(150),C=t(222),N=t(229),y=t(226),S=t(216),I=t(217),O=t(202),j=t(96),x=t.n(j),D=t(228),M=t(201),L=t(88),z=t.n(L),A=t(90),P=t.n(A),B=t(91),R=t.n(B),T=Object(k.a)(function(e){return{demo:{flex:1,display:"flex",justifyContent:"center",alignItems:"center"},demoIcon:{},demoName:Object(g.a)({marginLeft:e.spacing(1)},e.breakpoints.down("md"),{display:"none"}),button:Object(g.a)({margin:e.spacing(1)},e.breakpoints.down("md"),{margin:3})}}),W=function(e){var a=T(e);return o.a.createElement("div",{className:a.demo},o.a.createElement(D.a,{title:"View on GitHub"},o.a.createElement(M.a,{size:"small",variant:"outlined",color:"primary",className:a.button,href:"https://github.com/modularcode/material-admin-react"},o.a.createElement(z.a,{className:a.demoIcon}),o.a.createElement("span",{className:a.demoName},"View on GitHub"))),o.a.createElement(D.a,{title:"Help to keep the project active!"},o.a.createElement(M.a,{component:c.b,size:"small",variant:"outlined",color:"primary",className:a.button,to:"/demo/supporters"},o.a.createElement(P.a,{className:a.demoIcon}),o.a.createElement("span",{className:a.demoName},"Support Us"))),o.a.createElement(D.a,{title:"Star us on GitHub!"},o.a.createElement(M.a,{size:"small",variant:"outlined",color:"primary",className:a.button,href:"https://github.com/modularcode/material-admin-react/stargazers"},o.a.createElement(R.a,{className:a.demoIcon}),o.a.createElement("span",{className:a.demoName},"Rate Us"))))},H=t(225),F=t(203),q=t(208),U=t(205),G=t(206),J=t(204),$=t(92),Q=t.n($),V=Object(k.a)(function(e){return{searchButton:{marginRight:20},scrollPaper:{alignItems:"flex-start"}}}),Z=function(){var e=V(),a=o.a.useState(!1),t=Object(E.a)(a,2),n=t[0],r=t[1];function i(){r(!1)}return o.a.createElement("div",null,o.a.createElement(O.a,{edge:"start",color:"inherit","aria-label":"Search",className:e.searchButton,onClick:function(){r(!0)}},o.a.createElement(Q.a,null)),o.a.createElement(F.a,{fullWidth:!0,open:n,onClose:i,"aria-labelledby":"dashboard-search",classes:{scrollPaper:e.scrollPaper}},o.a.createElement(J.a,{id:"dashboard-search"},"Search..."),o.a.createElement(U.a,null,o.a.createElement(G.a,null,"You may provide some extra search hints here"),o.a.createElement(H.a,{autoFocus:!0,margin:"dense",id:"name",label:"Search text: e.g. puppies",type:"text",fullWidth:!0})),o.a.createElement(q.a,null,o.a.createElement(M.a,{onClick:i,color:"primary"},"Cancel"),o.a.createElement(M.a,{onClick:i,color:"primary"},"Search"))))},X=t(209),Y=t(93),K=t.n(Y),_=t(116),ee=t(207),ae=t(152),te=t(212),ne=t(210),oe=t(211),re=t(40),ie=[{user:{name:"Remy Sharp",image:"https://material-ui.com/static/images/avatar/1.jpg"},title:"New Order",content:" \u2014 I'll be in your neighborhood doing errands this\u2026"},{user:{name:"Travis Howard",image:"https://material-ui.com//static/images/avatar/2.jpg"},title:"New Signup",content:" \u2014 Wish I could come, but I'm out of town this\u2026"},{user:{name:"Oui Oui",image:"https://material-ui.com//static/images/avatar/3.jpg"},title:"Refund Request",content:"please provide me a refund for my order"}],le=Object(k.a)(function(e){return{headerNotifications:{marginRight:23},notificationsContainer:{},button:{},badge:{color:"#fff"},notifications:{maxWidth:360,backgroundColor:e.palette.background.paper},inline:{display:"inline"}}}),ce=function(){var e=le(),a=o.a.useState(null),t=Object(E.a)(a,2),n=t[0],r=t[1];return o.a.createElement("div",{className:e.headerNotifications},o.a.createElement(O.a,{edge:"start",color:"inherit","aria-label":"Search",className:e.button,"aria-controls":"HeaderNotifications","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},o.a.createElement(X.a,{badgeContent:3,color:"secondary",classes:{badge:e.badge}},o.a.createElement(K.a,null))),o.a.createElement(_.a,{id:"HeaderNotifications",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:function(){r(null)},elevation:1,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"},classes:{paper:e.notifications}},o.a.createElement(ee.a,{className:e.notifications},ie.map(function(a,t){return o.a.createElement(ae.a,{button:!0,alignItems:"flex-start",key:t},o.a.createElement(ne.a,null,o.a.createElement(oe.a,{alt:a.user.name,src:a.user.image})),o.a.createElement(te.a,{primary:a.title,secondary:o.a.createElement(o.a.Fragment,null,o.a.createElement(re.a,{component:"span",variant:"body2",className:e.inline,color:"textPrimary"},a.user.name),a.content)}))}))))},se=t(213),me=t(214),de=t(215),ue=t(94),pe=t.n(ue),he=t(59),be=t.n(he),fe=t(46),ge=t.n(fe),Ee=t(95),ve=t.n(Ee),we=Object(k.a)(function(e){return{headerProfile:{display:"inline-flex"},profileButton:{borderRadius:30,fontSize:"1.2rem",padding:8},profileAvatar:{width:35,height:35,marginRight:10},profileName:Object(g.a)({fontWeight:500,marginRight:5},e.breakpoints.down("sm"),{display:"none"}),profileMenu:{marginLeft:"-16px"}}}),ke=function(){var e=we(),a=o.a.useState(null),t=Object(E.a)(a,2),n=t[0],r=t[1];function i(){r(null)}return o.a.createElement("div",{className:Object(v.a)("headerProfile",e.headerProfile)},o.a.createElement(O.a,{edge:"start",color:"inherit","aria-label":"Search",className:e.profileButton,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){r(e.currentTarget)}},o.a.createElement(oe.a,{className:e.profileAvatar,alt:"John Doe",src:"https://avatars3.githubusercontent.com/u/3959008?v=3&s=40"}),o.a.createElement("span",{className:e.profileName},"John Doe"),o.a.createElement(pe.a,null)),o.a.createElement(_.a,{id:"simple-menu",anchorEl:n,keepMounted:!0,open:Boolean(n),onClose:i,elevation:1,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},classes:{paper:e.profileMenu}},o.a.createElement(se.a,{onClick:i,component:c.b,to:"/profile"},o.a.createElement(me.a,null,o.a.createElement(be.a,null)),o.a.createElement(te.a,{primary:"Profile"})),o.a.createElement(se.a,{onClick:i,component:c.b,to:"/settings"},o.a.createElement(me.a,null,o.a.createElement(ge.a,null)),o.a.createElement(te.a,{primary:"Settings"})),o.a.createElement(de.a,null),o.a.createElement(se.a,{onClick:i,component:c.b,to:"/auth/logout"},o.a.createElement(me.a,null,o.a.createElement(ve.a,null)),o.a.createElement(te.a,{primary:"Logout"}))))},Ce=Object(k.a)(function(e){return{header:{background:"#fff",color:"#7b7b7b",boxShadow:"none"},toolbar:{},menuButton:{},actions:{marginLeft:"auto",alignItems:"center",display:"flex"},notificationsButton:{marginRight:23},title:{flexGrow:1}}}),Ne=function(e){var a=e.onToggle,t=Ce();return o.a.createElement(S.a,{position:"absolute",className:t.header},o.a.createElement(I.a,{className:t.toolbar},o.a.createElement(O.a,{edge:"start",color:"inherit","aria-label":"Toggle sidebar",onClick:a,className:Object(v.a)(t.menuButton)},o.a.createElement(x.a,null)),o.a.createElement(W,null),o.a.createElement("div",{className:t.actions},o.a.createElement(Z,null),o.a.createElement(ce,null),o.a.createElement(ke,null))))},ye=Object(k.a)(function(e){return{Logo:function(e){return{display:"inline-block",verticalAlign:"text-bottom",width:e.size,height:e.size}},path:{transition:"all .3s ease"},outline:{fill:"currentColor"},letter:{fill:"currentColor"}}}),Se=function(e){var a=ye(e);return o.a.createElement("svg",{className:Object(v.a)(a.Logo,e.className),"data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 563.82 637.44"},o.a.createElement("title",null,"Modular Material Admin + React"),o.a.createElement("g",null,o.a.createElement("path",{className:Object(v.a)(a.path,a.outline),d:"M24.13,334.53c0-17,0-34.08,0-51.12-.06-25.71-.2-51.42-.26-77.13a120.65,120.65,0,0,1,1-18.17c1.91-12.83,9.11-22.06,19.67-28.91C57,151.09,70.21,144.1,83.23,136.85c27.09-15.08,53.71-31,80.57-46.43Q207.86,65,251.94,39.65c11.73-6.73,23.57-13.25,35.38-19.83,8.72-4.86,18-5.06,27.57-3.37,8.95,1.59,16.36,6.57,24,11Q390.07,56.92,441.2,86.49q36.66,21.17,73.34,42.31c16.37,9.4,32.86,18.61,49.21,28.05,10.51,6.07,18.39,14.5,22.07,26.33a42.26,42.26,0,0,1,1.79,12.65q0,43.5,0,87,0,93.58.06,187.16c0,18-7.87,31.43-23.07,40.38-26,15.33-52.32,30.24-78.5,45.33q-44.19,25.47-88.39,50.94C374.2,620.16,350.79,633.89,327,647c-14.79,8.12-29.86,8.05-44.83-.77-27.66-16.31-55.53-32.26-83.32-48.36q-40-23.18-80-46.32c-23.78-13.68-47.67-27.15-71.45-40.82-12.17-7-20.22-17.16-22.87-31.17a33.92,33.92,0,0,1-.29-6.26q0-69.36,0-138.72Zm43.28,2.25c-.19,43.94-.44,87.89.44,131.83.05,2.6,1.08,3.88,3.15,5.09,17.1,9.94,34.1,20.06,51.23,30,31,17.89,62.06,35.63,93.06,53.49C233,567.35,250.78,577.55,268.39,588c11.63,6.89,23.26,13.72,35.43,19.63a3.92,3.92,0,0,0,3.92.07c2.55-1.33,5.18-2.49,7.73-3.83,20.52-10.76,40.13-23.09,60.19-34.64q35.51-20.44,71-40.91c31.62-18.19,63.24-36.39,94.63-55,1.5-.89,2.36-1.78,2.38-3.68.19-14,.67-28.08.74-42.12.39-75.43.6-150.87-.57-226.3,0-.89-.22-1.79-.18-2.68.09-1.83-.83-2.82-2.35-3.76C512.59,177,483,160.56,453.62,143.9c-30-17-59.63-34.66-89.46-52-18.49-10.72-37.27-20.92-56-31.12-1.27-.69-2.52-1.22-3.95-.49-7.22,3.73-14.63,7.14-21.64,11.25-39.54,23.14-79.13,46.22-119,68.84q-46.69,26.51-92.7,54.18c-1.74,1-2.89,2.07-2.9,4.37-.08,10.86-.48,21.71-.5,32.57Q67.34,284.16,67.42,336.77Z",transform:"translate(-23.86 -15.48)"}),o.a.createElement("path",{className:Object(v.a)(a.path,a.letter),d:"M457.14,336c0,26.61,0,53.22.05,79.83a5.16,5.16,0,0,1-3,5.15q-26.17,14.56-52.24,29.3c-2.7,1.52-3,1.35-3.06-2-.11-17.74-.22-35.48-.25-53.22,0-27.21.13-54.42-.08-81.63-.07-9.26-.36-18.52-.48-27.79,0-3.52-.4-3.72-3.48-2-18,9.83-35.24,20.77-52.65,31.5-11.15,6.87-22.36,13.64-33.84,20a4.26,4.26,0,0,1-4.64,0c-16.26-8.4-31.48-18.56-47.06-28.09-12.87-7.87-25.77-15.68-38.86-23.17-3.38-1.94-3.68-1.71-3.79,2.14-1.42,47.73-.19,95.47-.65,143.2-.06,6.48-.17,13-.26,19.43,0,3.08-.16,3.15-2.94,1.72-15.23-7.78-29.71-16.89-44.66-25.16-2.78-1.54-5.53-3.12-8.33-4.61a3.9,3.9,0,0,1-2.27-3.8c-.78-49-.56-98.06-.27-147.1,0-4.88.28-9.76.28-14.64a4.39,4.39,0,0,1,2.32-4.1,659.56,659.56,0,0,1,57.19-33.12c4.65-2.4,8.77-1.63,13,.52,9.06,4.58,17.41,10.34,26,15.62,16.59,10.16,33.08,20.48,50.26,29.64a4.68,4.68,0,0,0,5,0c18.32-9.6,35.55-21,53.18-31.77,9.33-5.7,18.91-10.91,28.65-15.86a4.2,4.2,0,0,1,4.25-.14c20.22,11.23,40.73,22,59.9,35a5.54,5.54,0,0,1,2.79,5.1C457.45,282.58,457.84,309.28,457.14,336Z",transform:"translate(-23.86 -15.48)"})))},Ie=t(227),Oe=t(219),je=t(105),xe=t.n(je),De=t(106),Me=t.n(De),Le=t(69),ze=t.n(Le),Ae=t(107),Pe=t.n(Ae),Be=t(109),Re=t.n(Be),Te=t(101),We=t.n(Te),He=t(102),Fe=t.n(He),qe=t(103),Ue=t.n(qe),Ge=t(104),Je=t.n(Ge),$e=t(110),Qe=t.n($e),Ve=t(112),Ze=t.n(Ve),Xe=t(114),Ye=t.n(Xe),Ke=t(113),_e=t.n(Ke),ea=t(111),aa=t.n(ea),ta=t(68),na=t.n(ta),oa=t(67),ra=t.n(oa),ia=t(108),la=t.n(ia),ca=t(97),sa=t(218),ma=t(100),da=t.n(ma),ua=t(99),pa=t.n(ua),ha=t(98),ba=t.n(ha),fa=Object(n.forwardRef)(function(e,a){return o.a.createElement(c.c,Object.assign({exact:!0},e,{innerRef:a}))}),ga=Object(n.forwardRef)(function(e,a){var t=e.isCollapsed,n=Object(ca.a)(e,["isCollapsed"]),r=Ea(),i="string"===typeof e.link?o.a.createElement(ae.a,Object.assign({},n,{button:!0,component:fa,to:e.link})):o.a.createElement(ae.a,Object.assign({},n,{button:!0}));return o.a.createElement("div",{ref:a,className:Object(v.a)(t&&r.navItemCollapsedWrapper)},i)}),Ea=Object(k.a)(function(e){return Object(Ie.a)({navItem:{position:"relative","&.active":{background:"rgba(0, 0, 0, 0.08)","& .MuiListItemIcon-root":{color:"#fff"}}},navItemCollapsed:{whiteSpace:"nowrap",flexWrap:"nowrap",width:e.sidebar.widthCollapsed,"& $iconToggle":{position:"absolute",bottom:-1,fontSize:14,left:"50%",marginLeft:"-0.5em"}},navItemCollapsedWrapper:{width:e.sidebar.widthCollapsed},navItemIcon:{minWidth:40},iconToggle:{},iconSpacer:{fontSize:13,marginLeft:6}})}),va=function e(a){var t=a.name,n=a.link,r=a.Icon,i=a.IconStyles,l=void 0===i?{}:i,c=a.IconClassName,s=void 0===c?"":c,m=a.isCollapsed,d=(a.isNested,a.nestingLevel),u=void 0===d?0:d,p=a.nestingOffset,h=void 0===p?16:p,b=a.className,f=a.items,g=void 0===f?[]:f,w=m,k=Ea(),C=g&&g.length>0,N=C&&g.filter(function(e){return e.link===window.location.pathname}).length>0,y=N||!1,S=o.a.useState(y),I=Object(E.a)(S,2),O=I[0],j=I[1];var x=!!r&&o.a.createElement(r,null)||m&&o.a.createElement(ba.a,{className:k.iconSpacer})||"",M=m?16:h+16,L=o.a.createElement(ga,{link:n,className:Object(v.a)(k.navItem,m&&k.navItemCollapsed,N&&"active",b),style:{fontSize:"".concat(1-.07*u,"em"),paddingLeft:"".concat(x?h:h+40,"px")},isCollapsed:m,onClick:function(){j(!O)}},!!x&&o.a.createElement(me.a,{style:l,className:Object(v.a)(k.navItemIcon,s)},x),o.a.createElement(te.a,{primary:t,disableTypography:!0}),C&&!O&&o.a.createElement(pa.a,{className:k.iconToggle}),C&&O&&o.a.createElement(da.a,{className:k.iconToggle})),z=w?o.a.createElement(D.a,{disableFocusListener:!w,disableHoverListener:!w,disableTouchListener:!w,title:t,placement:"right"},L):L,A=C?o.a.createElement(sa.a,{in:O,timeout:"auto",unmountOnExit:!0},o.a.createElement(de.a,null),o.a.createElement(ee.a,{component:"div",disablePadding:!0},g.map(function(a){return o.a.createElement(e,Object.assign({},a,{isNested:!0,nestingLevel:u+1,isCollapsed:m,key:a.name||a.link,isOpen:O,nestingOffset:M}))}))):null;return o.a.createElement(o.a.Fragment,null,z,A)},wa=function(e){var a=e.items,t=void 0===a?[]:a,n=e.isCollapsed,r=void 0!==n&&n,i=e.isNested,l=void 0!==i&&i;return o.a.createElement(o.a.Fragment,null,t.map(function(e,a){return o.a.createElement(va,Object.assign({},e,{isCollapsed:r,isNested:l,key:a}))}))},ka=Object(k.a)(function(e){return Object(Ie.a)({navList:{width:e.sidebar.width,fontSize:"1.1em",fontWeight:400,lineHeight:1.5,letterSpacing:"0.00938em"},iconFeatures:{color:"#95de3c"},iconDocs:{color:"#f8cda9"},iconSupporters:{color:"#e3b546"},iconDiscuss:{color:"#ccc"}})}),Ca=function(e){var a=e.isCollapsed,t=ka(),n=[{name:"Dashboard",link:"/",Icon:We.a},{name:"Products",Icon:Fe.a,items:[{name:"All Products",link:"/products"},{name:"Add New",link:"/products/new"},{name:"Categories",link:"/products/categories"}]},{name:"Orders",link:"/orders",Icon:Ue.a},{name:"Customers",link:"/customers",Icon:Je.a}],r=[{name:"My Profile",link:"/profile",Icon:ra.a},{name:"Profile Settings",link:"/profile/settings",Icon:ge.a}],i=[{name:"My Account",link:"/account",Icon:ra.a},{name:"Account Settings",link:"/account/settings",Icon:ge.a},{name:"Team",link:"/account/users",Icon:na.a}],l=[{name:"Accounts",link:"/admin/accounts",Icon:ze.a},{name:"Users",link:"/admin/users",Icon:na.a}],c=[{name:"Sales & Ecommerce",items:n,Icon:xe.a},{name:"Items Manager",items:[{name:"All Items",link:"/content/items"},{name:"Add New",link:"/content/items/new"},{name:"Categories",link:"/content/categories"}],Icon:Me.a},{name:"Profile",items:r,Icon:be.a},{name:"Account",items:i,Icon:ze.a},{name:"Administration",items:l,Icon:Pe.a},{name:"Auth",items:[{name:"Login",link:"/auth/login"},{name:"Signup",link:"/auth/signup"},{name:"Recover",link:"/auth/recover"},{name:"Reset",link:"/auth/reset"}],Icon:la.a},{name:"Misc Pages",items:[{name:"Search",link:"/search"},{name:"Not Found",link:"/notfound"}],Icon:Re.a}],s=[{name:"UI Components",link:"/demo/components",Icon:Qe.a}],m=[{name:"Why Modular?",link:"/demo/features",Icon:aa.a,IconClassName:t.iconFeatures},{name:"Docs",link:"/demo/docs",Icon:Ze.a,IconClassName:t.iconDocs},{name:"Supporters",link:"/demo/supporters",Icon:_e.a,IconClassName:t.iconSupporters},{name:"Discuss",link:"/demo/discuss",Icon:Ye.a,IconClassName:t.iconDiscuss}];return o.a.createElement("div",null,o.a.createElement(ee.a,{className:t.navList,disablePadding:!0},!a&&o.a.createElement(Oe.a,{inset:!0,disableSticky:!0},"Core Modules"),o.a.createElement(wa,{isCollapsed:a,items:c})),o.a.createElement(ee.a,{className:t.navList,disablePadding:!0},!a&&o.a.createElement(Oe.a,{inset:!0,disableSticky:!0},"UI & Utils"),o.a.createElement(wa,{isCollapsed:a,items:s})),o.a.createElement(ee.a,{className:t.navList,disablePadding:!0},!a&&o.a.createElement(Oe.a,{inset:!0,disableSticky:!0},"Misc"),o.a.createElement(wa,{isCollapsed:a,items:m})))},Na=Object(k.a)(function(e){return{sidebar:{position:"absolute",top:0,bottom:0,width:"100%",height:"100%",color:e.sidebar.color,background:e.sidebar.background,overflowX:"hidden",overflowY:"auto"},sidebarHeader:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",padding:"0 8px"},e.mixins.toolbar),sidebarTitleLink:{textDecoration:"none",color:"inherit",display:"flex"},logo:{color:e.palette.primary.main},title:function(e){return{position:"relative",overflow:"visible",marginLeft:"5px",display:e.isDesktop&&e.isSidebarCollapsedDesktop?"none":"block"}},name:{},tagline:{fontSize:8,fontWeight:"bold",position:"absolute",top:"100%",marginTop:-5,background:e.palette.primary.main,color:"#fff",borderRadius:2,padding:"1px 3px",right:0}}}),ya=function(e){var a=e.isDesktop,t=e.isSidebarCollapsedDesktop,n=Na(e);return o.a.createElement("aside",{className:n.sidebar},o.a.createElement("div",{className:n.sidebarHeader},o.a.createElement(c.b,{to:"/",className:n.sidebarTitleLink},o.a.createElement(Se,{size:30,className:n.logo}),o.a.createElement(re.a,{component:"h2",variant:"h5",color:"inherit",noWrap:!0,className:n.title},o.a.createElement("span",{className:n.name},"Material Admin"),o.a.createElement("span",{className:n.tagline},"ReactJS + MaterialUI")))),o.a.createElement(Ca,{isCollapsed:a&&t}))},Sa=t(220),Ia=Object(k.a)(function(e){return{footer:{display:"flex",background:"#fff",padding:"0.5rem 1rem",justifyContent:"space-between"}}}),Oa=function(){var e=Ia();return o.a.createElement("footer",{className:e.footer},o.a.createElement(re.a,{variant:"body2",color:"textSecondary",align:"left"},"Find me on: ",o.a.createElement(Sa.a,{color:"primary",href:"https://github.com/modularcoder"},"GitHub")," | ",o.a.createElement(Sa.a,{color:"primary",href:"https://twitter.com/modularcoder"},"Twitter")," | ",o.a.createElement(Sa.a,{color:"primary",href:"https://www.linkedin.com/in/modularcoder/"},"LinkedIn")),o.a.createElement(re.a,{variant:"body2",color:"textSecondary",align:"right"},"Built with ",o.a.createElement(Sa.a,{color:"primary",href:"https://material-ui.com/"},"Material-UI")," by ",o.a.createElement(Sa.a,{color:"primary",href:"https://twitter.com/modularcoder"},"Gevorg Harutyunyan")))},ja=function(){return o.a.createElement("div",null,"Account")},xa=function(){return o.a.createElement("div",null,"Profile")},Da=function(){return o.a.createElement("div",null,"Sales")},Ma=function(){return o.a.createElement("div",null,"Content")},La=function(){return o.a.createElement("div",null,"Admin")},za=t(221),Aa=Object(k.a)(function(e){return{container:{flex:1,paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}}),Pa=function(e){var a=e.children,t=Aa();return o.a.createElement(za.a,{maxWidth:"lg",className:t.container},a)},Ba=function(){return o.a.createElement(Pa,null,"Page Not Found!")},Ra=function(){return o.a.createElement("div",null,"Demo")};function Ta(e){var a=e.match,t=Wa(),n=Object(w.a)(),r=Object(C.a)(n.breakpoints.up("md")),i=!r,l=o.a.useState(!1),c=Object(E.a)(l,2),m=c[0],d=c[1],u=o.a.useState(!1),p=Object(E.a)(u,2),h=p[0],b=p[1];return o.a.createElement("div",{className:t.dashboardContainer},o.a.createElement("div",{className:Object(v.a)(t.headerContainer,r&&t.headerContainerDesktop,r&&h&&t.headerContainerDesktopDrawerCollapsed)},o.a.createElement(Ne,{onToggle:function(){i?d(!m):b(!h)}})),o.a.createElement("div",{className:Object(v.a)(t.sidebarContainer,i&&t.sidebarContainerMobile,r&&t.sidebarContainerDesktop,r&&h&&t.sidebarContainerDesktopDrawerCollapsed)},o.a.createElement(y.a,{mdUp:!0,implementation:"css"},o.a.createElement(N.a,{variant:"temporary",anchor:"rtl"===n.direction?"right":"left",open:m,onClose:function(){d(!m)},classes:{paper:Object(v.a)(t.drawer,t.drawerMobile)},ModalProps:{keepMounted:!0}},o.a.createElement(ya,{isDesktop:r,isMobile:i,isSidebarCollapsedDesktop:h,isSidebarOpenMobile:m}))),o.a.createElement(y.a,{smDown:!0,implementation:"css"},o.a.createElement(N.a,{classes:{paper:Object(v.a)(t.drawer,t.drawerDesktop,h&&t.drawerDesktopCollapsed)},variant:"permanent"},o.a.createElement(ya,{isDesktop:r,isMobile:i,isSidebarCollapsedDesktop:h,isSidebarOpenMobile:m})))),o.a.createElement("main",{className:t.content},o.a.createElement("div",{className:t.headerSpacer}),o.a.createElement(s.c,null,o.a.createElement(s.a,{path:"".concat(a.url,"/account"),component:ja}),o.a.createElement(s.a,{path:"".concat(a.url,"/profile"),component:xa}),o.a.createElement(s.a,{path:"".concat(a.url,"/sales"),component:Da}),o.a.createElement(s.a,{path:"".concat(a.url,"/content"),component:Ma}),o.a.createElement(s.a,{path:"".concat(a.url,"/admin"),component:La}),o.a.createElement(s.a,{path:"".concat(a.url,"/demo"),component:Ra}),o.a.createElement(s.a,{component:Ba})),o.a.createElement(Oa,null)))}var Wa=Object(k.a)(function(e){var a;return{dashboardContainer:{display:"flex",background:"#f5f5f5"},headerContainer:{top:0,left:0,right:0,position:"absolute",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},headerContainerDesktop:{left:"auto",width:"calc(100% - ".concat(e.sidebar.width,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},headerContainerDesktopDrawerCollapsed:{width:"calc(100% - ".concat(e.sidebar.widthCollapsed,"px)")},sidebarContainer:(a={position:"relative"},Object(g.a)(a,e.breakpoints.up("md"),{width:e.sidebar.width,flexShrink:0}),Object(g.a)(a,"transition",e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})),a),sidebarContainerMobile:{width:0},sidebarContainerDesktop:{width:e.sidebar.width},sidebarContainerDesktopDrawerCollapsed:Object(g.a)({},e.breakpoints.up("md"),{width:e.sidebar.widthCollapsed}),drawer:{},drawerMobile:{width:e.sidebar.width},drawerDesktop:{width:"100%",position:"absolute"},drawerDesktopCollapsed:{overflowX:"hidden"},headerSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto",flexDirection:"column",display:"flex"},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240}}}),Ha=function(){return o.a.createElement("div",{className:"App"},o.a.createElement(m.a,null),o.a.createElement(l.a,{theme:b},o.a.createElement(c.a,null,o.a.createElement(s.a,{path:"/",component:Ta}),o.a.createElement(s.a,{path:"/auth",component:f}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(Ha,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[130,1,2]]]);
//# sourceMappingURL=main.3eea6c0f.chunk.js.map