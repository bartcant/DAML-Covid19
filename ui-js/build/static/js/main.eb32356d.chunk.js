(this["webpackJsonpcovid19-js"]=this["webpackJsonpcovid19-js"]||[]).push([[0],{180:function(e,t,a){e.exports=a(308)},192:function(e,t){},194:function(e,t){},230:function(e,t){},231:function(e,t){},308:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=a(362),l=a(363),s=a(19),p=a(33),m=a.n(p),d={palette:{primary:{main:"#536DFE",light:m()("#536DFE").lighten(7.5).toHexString(),dark:m()("#536DFE").darken(15).toHexString()},secondary:{main:"#FF5C93",light:m()("#FF5C93").lighten(7.5).toHexString(),dark:m()("#FF5C93").darken(15).toHexString(),contrastText:"#FFFFFF"},warning:{main:"#FFC260",light:m()("#FFC260").lighten(7.5).toHexString(),dark:m()("#FFC260").darken(15).toHexString()},success:{main:"#3CD4A0",light:m()("#3CD4A0").lighten(7.5).toHexString(),dark:m()("#3CD4A0").darken(15).toHexString()},info:{main:"#9013FE",light:m()("#9013FE").lighten(7.5).toHexString(),dark:m()("#9013FE").darken(15).toHexString()},text:{primary:"#4A4A4A",secondary:"#6E6E6E",hint:"#B9B9B9"},background:{default:"#F6F7FF",light:"#F3F5FF"}},customShadows:{widget:"0px 3px 11px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetDark:"0px 3px 18px 0px #4558A3B3, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A",widgetWide:"0px 12px 33px 0px #E8EAFC, 0 3px 3px -2px #B2B2B21A, 0 1px 8px 0 #9A9A9A1A"}},g=a(172),u={default:Object(g.a)(Object(s.a)({},d,{},{typography:{h1:{fontSize:"3rem"},h2:{fontSize:"2rem"},h3:{fontSize:"1.64rem"},h4:{fontSize:"1.5rem"},h5:{fontSize:"1.285rem"},h6:{fontSize:"1.142rem"}}}))},h=a(108),f=a(35),b=a(45),w=a(9),E=a(16),y=a.n(E),x=a(365),v=Object(x.a)((function(e){return{root:{display:"flex",maxWidth:"100vw",overflowX:"hidden"},content:{flexGrow:1,padding:e.spacing(3),width:"calc(100vw - 240px)",minHeight:"100vh"},contentShift:{width:"calc(100vw - ".concat(240+e.spacing(6),"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},fakeToolbar:Object(s.a)({},e.mixins.toolbar)}})),k=a(339),O=a(341),C=a(342),S=a(88),j=a(343),I=a(344),B=a(345),F=a(346),N=a(87),A=Object(x.a)((function(e){return{logotype:Object(w.a)({color:"white",marginLeft:e.spacing(2.5),marginRight:e.spacing(2.5),fontWeight:500,fontSize:18,whiteSpace:"nowrap"},e.breakpoints.down("xs"),{display:"none"}),appBar:{width:"100vw",zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},toolbar:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},hide:{display:"none"},grow:{flexGrow:1},search:{position:"relative",borderRadius:25,paddingLeft:e.spacing(2.5),width:36,backgroundColor:Object(N.fade)(e.palette.common.black,0),transition:e.transitions.create(["background-color","width"]),"&:hover":{cursor:"pointer",backgroundColor:Object(N.fade)(e.palette.common.black,.08)}},searchFocused:Object(w.a)({backgroundColor:Object(N.fade)(e.palette.common.black,.08),width:"100%"},e.breakpoints.up("md"),{width:250}),searchIcon:{width:36,right:0,height:"100%",position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create("right"),"&:hover":{cursor:"pointer"}},searchIconOpened:{right:e.spacing(1.25)},inputRoot:{color:"inherit",width:"100%"},inputInput:{height:36,padding:0,paddingRight:36+e.spacing(1.25),width:"100%"},messageContent:{display:"flex",flexDirection:"column"},headerMenu:{marginTop:e.spacing(7)},headerMenuList:{display:"flex",flexDirection:"column"},headerMenuItem:{"&:hover, &:focus":{backgroundColor:e.palette.primary.main,color:"white"}},headerMenuButton:{marginLeft:e.spacing(2),padding:e.spacing(.5)},headerMenuButtonCollapse:{marginRight:e.spacing(2)},headerIcon:{fontSize:28,color:"rgba(255, 255, 255, 0.35)"},headerIconCollapse:{color:"white"},profileMenu:{minWidth:265},profileMenuUser:{display:"flex",flexDirection:"column",padding:e.spacing(2)},profileMenuItem:{color:e.palette.text.hint},profileMenuIcon:{marginRight:e.spacing(2),color:e.palette.text.hint},profileMenuLink:{fontSize:16,textDecoration:"none","&:hover":{cursor:"pointer"}},messageNotification:{height:"auto",display:"flex",alignItems:"center","&:hover, &:focus":{backgroundColor:e.palette.background.light}},messageNotificationSide:{display:"flex",flexDirection:"column",alignItems:"center",marginRight:e.spacing(2)},messageNotificationBodySide:{alignItems:"flex-start",marginRight:0},sendMessageButton:{margin:e.spacing(4),marginTop:e.spacing(2),marginBottom:e.spacing(2),textTransform:"none"},sendButtonIcon:{marginLeft:e.spacing(2)},progress:{color:"rgba(255, 255, 255, 0.35)"}}})),T=a(21),L=r.a.createContext(),R=r.a.createContext();function D(e,t){switch(t.type){case"TOGGLE_SIDEBAR":return Object(s.a)({},e,{isSidebarOpened:!e.isSidebarOpened});default:throw new Error("Unhandled action type: ".concat(t.type))}}function z(e){var t=e.children,a=r.a.useReducer(D,{isSidebarOpened:!0}),n=Object(T.a)(a,2),o=n[0],i=n[1];return r.a.createElement(L.Provider,{value:o},r.a.createElement(R.Provider,{value:i},t))}function U(){var e=r.a.useContext(L);if(void 0===e)throw new Error("useLayoutState must be used within a LayoutProvider");return e}function M(){var e=r.a.useContext(R);if(void 0===e)throw new Error("useLayoutDispatch must be used within a LayoutProvider");return e}function W(e){e({type:"TOGGLE_SIDEBAR"})}var G=a(168),P=a.n(G),H=a(169),_=window.location.host.split("."),J=_[0],K=_.slice(1);K.unshift("api");var Q="https://"+K.join(".")+(window.location.port?":"+window.location.port:"")+"/data/"+J+"/",X=P()(),q=_.slice(1);q.unshift("login");var V=q.join(".")+(window.location.port?":"+window.location.port:"")+"/auth/login?ledgerId="+J,Y=r.a.createContext(),Z=r.a.createContext();function $(e,t){switch(t.type){case"LOGIN_SUCCESS":return Object(s.a)({},e,{isAuthenticated:!0,token:t.token,party:t.party});case"LOGIN_FAILURE":case"SIGN_OUT_SUCCESS":return Object(s.a)({},e,{isAuthenticated:!1});default:throw new Error("Unhandled action type: ".concat(t.type))}}function ee(e){var t=e.children,a=localStorage.getItem("daml.party"),n=localStorage.getItem("daml.token"),o=r.a.useReducer($,{isAuthenticated:!!n,token:n,party:a}),i=Object(T.a)(o,2),c=i[0],l=i[1];return r.a.createElement(Y.Provider,{value:c},r.a.createElement(Z.Provider,{value:l},t))}function te(){var e=r.a.useContext(Y);if(void 0===e)throw new Error("useUserState must be used within a UserProvider");return e}function ae(){var e=r.a.useContext(Z);if(void 0===e)throw new Error("useUserDispatch must be used within a UserProvider");return e}function ne(e,t,a,n,r,o){if(o(!1),r(!0),t){var i=a||function(e){return H.sign({"https://daml.com/ledger-api":{ledgerId:J,applicationId:X,admin:!0,actAs:[e],readAs:[e]}},"secret")}(t);localStorage.setItem("daml.party",t),localStorage.setItem("daml.token",i),e({type:"LOGIN_SUCCESS",token:i,party:t}),o(null),r(!1),n.push("/app")}else e({type:"LOGIN_FAILURE"}),o(!0),r(!1)}var re=function(){window.location.assign("https://".concat(V))};var oe=a(42),ie=a.n(oe);var ce=Object(b.g)((function(e){var t=e.history,a=A(),n=U(),o=M(),i=te(),c=ae(),l=Object(oe.useReload)();return r.a.createElement(k.a,{position:"fixed",className:a.appBar},r.a.createElement(O.a,{className:a.toolbar},r.a.createElement(C.a,{color:"inherit",onClick:function(){return W(o)},className:y()(a.headerMenuButton,a.headerMenuButtonCollapse)},n.isSidebarOpened?r.a.createElement(j.a,{classes:{root:y()(a.headerIcon,a.headerIconCollapse)}}):r.a.createElement(I.a,{classes:{root:y()(a.headerIcon,a.headerIconCollapse)}})),r.a.createElement(S.a,{variant:"h6",weight:"medium",className:a.logotype},"DAML App Template"),r.a.createElement("div",{className:a.grow}),r.a.createElement(S.a,{variant:"h6",weight:"medium"},"User: ",i.party),r.a.createElement(C.a,{color:"inherit","aria-haspopup":"true",onClick:l,className:a.headerMenuButton},r.a.createElement(B.a,{classes:{root:a.headerIcon}})),r.a.createElement(C.a,{"aria-haspopup":"true",color:"inherit",className:a.headerMenuButton,"aria-controls":"profile-menu",onClick:function(e){return function(e,t,a){e.preventDefault(),localStorage.removeItem("daml.party"),localStorage.removeItem("daml.token"),t({type:"SIGN_OUT_SUCCESS"}),a.push("/login")}(e,c,t)}},r.a.createElement(F.a,{classes:{root:a.headerIcon}}))))})),le=a(367),se=a(351),pe=a(352),me=a(353),de=a(173),ge=Object(x.a)((function(e){var t;return{menuButton:{marginLeft:12,marginRight:36},hide:{display:"none"},drawer:{width:240,flexShrink:0,whiteSpace:"nowrap"},drawerOpen:{width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerClose:Object(w.a)({transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),overflowX:"hidden",width:e.spacing(7)+40},e.breakpoints.down("sm"),{width:240}),toolbar:Object(s.a)({},e.mixins.toolbar,Object(w.a)({},e.breakpoints.down("sm"),{display:"none"})),content:{flexGrow:1,padding:e.spacing(3)},mobileBackButton:(t={marginTop:e.spacing(.5),marginLeft:e.spacing(3)},Object(w.a)(t,e.breakpoints.only("sm"),{marginTop:e.spacing(.625)}),Object(w.a)(t,e.breakpoints.up("md"),{display:"none"}),t)}})),ue=a(347),he=a(348),fe=a(349),be=Object(x.a)((function(e){return{link:{textDecoration:"none","&:hover, &:focus":{backgroundColor:e.palette.background.light}},linkActive:{backgroundColor:e.palette.background.light},linkNested:{paddingLeft:0,"&:hover, &:focus":{backgroundColor:"#FFFFFF"}},linkIcon:{marginRight:e.spacing(1),color:e.palette.text.secondary+"99",transition:e.transitions.create("color"),width:24,display:"flex",justifyContent:"center"},linkIconActive:{color:e.palette.primary.main},linkText:{padding:0,color:e.palette.text.secondary+"CC",transition:e.transitions.create(["opacity","color"]),fontSize:16},linkTextActive:{color:e.palette.text.primary},linkTextHidden:{opacity:0},nestedList:{paddingLeft:e.spacing(2)+30},sectionTitle:{marginLeft:e.spacing(4.5),marginTop:e.spacing(2),marginBottom:e.spacing(2)},divider:{marginTop:e.spacing(2),marginBottom:e.spacing(4),height:1,backgroundColor:"#D8D8D880"}}}));function we(e){var t,a=e.path,n=e.icon,o=e.label,i=e.location,c=e.isSidebarOpened,l=be(),s=a&&(i.pathname===a||-1!==i.pathname.indexOf(a));return r.a.createElement(ue.a,{button:!0,component:a&&f.b,to:a,className:l.link,classes:{root:y()(l.linkRoot,Object(w.a)({},l.linkActive,s))},disableRipple:!0},r.a.createElement(he.a,{className:y()(l.linkIcon,Object(w.a)({},l.linkIconActive,s))},n),r.a.createElement(fe.a,{classes:{primary:y()(l.linkText,(t={},Object(w.a)(t,l.linkTextActive,s),Object(w.a)(t,l.linkTextHidden,!c),t))},primary:o}))}var Ee=Object(b.g)((function(e){var t,a,o=e.location,i=ge(),c=Object(de.a)(),l=U().isSidebarOpened,s=M(),p=Object(n.useState)(!0),m=Object(T.a)(p,2),d=m[0],g=m[1];return Object(n.useEffect)((function(){return window.addEventListener("resize",u),u(),function(){window.removeEventListener("resize",u)}})),r.a.createElement(le.a,{variant:d?"permanent":"temporary",className:y()(i.drawer,(t={},Object(w.a)(t,i.drawerOpen,l),Object(w.a)(t,i.drawerClose,!l),t)),classes:{paper:y()((a={},Object(w.a)(a,i.drawerOpen,l),Object(w.a)(a,i.drawerClose,!l),a))},open:l},r.a.createElement("div",{className:i.toolbar}),r.a.createElement("div",{className:i.mobileBackButton},r.a.createElement(C.a,{onClick:function(){return W(s)}},r.a.createElement(j.a,{classes:{root:y()(i.headerIcon,i.headerIconCollapse)}}))),r.a.createElement(se.a,{className:i.sidebarList},r.a.createElement(we,{key:"default",label:"Default",path:"/app/default",icon:r.a.createElement(pe.a,null),location:o,isSidebarOpened:l}),r.a.createElement(we,{key:"Report",label:"Report",path:"/app/report",icon:r.a.createElement(me.a,null),location:o,isSidebarOpened:l})));function u(){var e=window.innerWidth<c.breakpoints.values.md;e&&d?g(!1):e||d||g(!0)}})),ye=a(171),xe=a.n(ye),ve=a(354),ke=a(355),Oe=a(356),Ce=a(357),Se=a(358),je=a(359),Ie=a(364),Be=a(360),Fe=Object(x.a)((function(){return{tableCell:{verticalAlign:"top",paddingTop:6,paddingBottom:6,fontSize:"0.75rem"},tableRow:{height:"auto"},textField:{fontSize:"0.75rem"}}}));function Ne(e){var t=e.contracts,a=e.columns,o=e.actions,i=void 0===o?[]:o;i=i||[];var c=!a;a=a||[["TemplateId","templateId"],["ContractId","contractId"]];var l=Fe(),p=Object(n.useState)({}),m=Object(T.a)(p,2),d=m[0],g=m[1];function u(e,t){return function e(t,a){if(0===a.length)return t;if(void 0===t[a[0]])throw new Error("Object doesn't have key '"+a[0]+"': "+JSON.stringify(t));return e(t[a[0]],a.slice(1))}(e,"string"===typeof t&&""!==t?t.split("."):[])}return r.a.createElement(r.a.Fragment,null,r.a.createElement(ve.a,{container:!0,spacing:4},r.a.createElement(ve.a,{item:!0,xs:12},r.a.createElement(ke.a,{size:"small"},r.a.createElement(Oe.a,null,r.a.createElement(Ce.a,{className:l.tableRow},a.map((function(e){return r.a.createElement(Se.a,{className:l.tableCell,key:e[0]},e[0])})),c?r.a.createElement(Se.a,{className:l.tableCell,key:"payload"},"Payload"):r.a.createElement(r.a.Fragment,null),i.map((function(e){return r.a.createElement(Se.a,{className:l.tableCell,key:e[0]},e[0])})))),r.a.createElement(je.a,null,t.map((function(e,t){return r.a.createElement(Ce.a,{key:t,className:l.tableRow},a.map((function(t){return r.a.createElement(Se.a,{key:t[0],className:l.tableCell},u(e,t[1]))})),c?r.a.createElement(Se.a,{key:"payload",className:l.tableCell},r.a.createElement(xe.a,{src:e.payload,name:!1,collapsed:!0,enableClipboard:!1})):r.a.createElement(r.a.Fragment,null),i.map((function(t){return r.a.createElement(Se.a,{key:t[0],className:l.tableCell},t.length>2?r.a.createElement(Ie.a,{InputProps:{classes:{underline:l.textFieldUnderline,input:l.textField}},onChange:(a=t[2],function(e){g(Object(s.a)({},d,Object(w.a)({},a,e.target.value)))}),onKeyDown:function(a){"Enter"===a.key&&(t[1](e,d[t[2]]),a.target.value="")},placeholder:t[2]}):r.a.createElement(r.a.Fragment,null),r.a.createElement(Be.a,{color:"primary",size:"small",className:"px-2",variant:"contained",onClick:function(){return t[1](e,d[t[2]])}},t[0]));var a})))})))))))}var Ae=a(84);function Te(){var e=Object(oe.useStreamQuery)(Ae.Main.Asset);return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{contracts:e.contracts,columns:[["ContractId","contractId"],["Issuer","payload.issuer"],["Owner","payload.owner"],["Name","payload.name"]]}))}function Le(){var e=Object(oe.useQuery)(Ae.Main.Asset);return r.a.createElement(Ne,{contracts:e.contracts})}var Re=Object(b.g)((function(){var e=v(),t=te(),a=U();return r.a.createElement(ie.a,{party:t.party,token:t.token,httpBaseUrl:Q,wsBaseUrl:void 0},r.a.createElement("div",{className:e.root},r.a.createElement(r.a.Fragment,null,r.a.createElement(ce,null),r.a.createElement(Ee,null),r.a.createElement("div",{className:y()(e.content,Object(w.a)({},e.contentShift,a.isSidebarOpened))},r.a.createElement("div",{className:e.fakeToolbar}),r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/app/default",component:Le}),r.a.createElement(b.b,{path:"/app/report",component:Te}))))))})),De=a(309),ze=Object(x.a)((function(e){return{container:{height:"100vh",width:"100vw",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0},logotype:Object(w.a)({display:"flex",alignItems:"center",marginBottom:e.spacing(12)},e.breakpoints.down("sm"),{display:"none"}),logotypeText:{fontWeight:500,color:e.palette.primary.main,marginLeft:e.spacing(2)},logotypeIcon:{width:70,marginRight:e.spacing(2)},paperRoot:{boxShadow:e.customShadows.widgetDark,display:"flex",flexDirection:"column",alignItems:"center",paddingTop:e.spacing(8),paddingBottom:e.spacing(8),paddingLeft:e.spacing(6),paddingRight:e.spacing(6),maxWidth:404},textRow:{marginBottom:e.spacing(10),textAlign:"center"},errorCode:{fontSize:148,fontWeight:600},safetyText:{fontWeight:300,color:e.palette.text},backButton:{boxShadow:e.customShadows.widget,textTransform:"none",fontSize:22}}})),Ue=a(85),Me=a.n(Ue);function We(){var e=ze();return r.a.createElement(ve.a,{container:!0,className:e.container},r.a.createElement("div",{className:e.logotype},r.a.createElement("img",{className:e.logotypeIcon,src:Me.a,alt:"logo"}),r.a.createElement(S.a,{variant:"h3",color:"white",className:e.logotypeText},"App Template")),r.a.createElement(De.a,{classes:{root:e.paperRoot}},r.a.createElement(S.a,{variant:"h1",color:"primary",className:y()(e.textRow,e.errorCode)},"404"),r.a.createElement(S.a,{variant:"h5",color:"primary",className:e.textRow},"Oops. Looks like the page you're looking for no longer exists"),r.a.createElement(S.a,{variant:"h6",color:"text",colorBrightness:"secondary",className:y()(e.textRow,e.safetyText)},"But we're here to bring you back to safety"),r.a.createElement(Be.a,{variant:"contained",color:"primary",component:f.b,to:"/",size:"large",className:e.backButton},"Back to Home")))}var Ge=a(350),Pe=a(361),He=Object(x.a)((function(e){var t;return{container:{height:"100vh",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",top:0,left:0},logotypeContainer:(t={backgroundColor:e.palette.background.default,width:"60%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},Object(w.a)(t,e.breakpoints.down("md"),{width:"50%"}),Object(w.a)(t,e.breakpoints.down("md"),{display:"none"}),t),logotypeImage:{width:165,marginBottom:e.spacing(4)},logotypeText:Object(w.a)({color:"#3a478f",fontWeight:500,fontSize:84},e.breakpoints.down("md"),{fontSize:48}),formContainer:Object(w.a)({width:"40%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},e.breakpoints.down("md"),{width:"50%"}),form:{width:320},tab:{fontWeight:400,fontSize:18},greeting:{fontWeight:500,textAlign:"center",marginTop:e.spacing(4)},subGreeting:{fontWeight:500,textAlign:"center",marginTop:e.spacing(2)},googleButton:{marginTop:e.spacing(6),boxShadow:e.customShadows.widget,backgroundColor:"white",width:"100%",textTransform:"none"},googleButtonCreating:{marginTop:0},googleIcon:{width:30,marginRight:e.spacing(2)},creatingButtonContainer:{marginTop:e.spacing(2.5),height:46,display:"flex",justifyContent:"center",alignItems:"center"},createAccountButton:{height:46,textTransform:"none"},formDividerContainer:{marginTop:e.spacing(4),marginBottom:e.spacing(4),display:"flex",alignItems:"center"},formDividerWord:{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},formDivider:{flexGrow:1,height:1,backgroundColor:e.palette.text.hint+"40"},dablLoginButton:{marginBottom:e.spacing(2)},errorMessage:{textAlign:"center"},textFieldUnderline:{"&:before":{borderBottomColor:e.palette.primary.light},"&:after":{borderBottomColor:e.palette.primary.main},"&:hover:before":{borderBottomColor:"".concat(e.palette.primary.light," !important")}},textField:{borderBottomColor:e.palette.background.light},formButtons:{width:"100%",marginTop:e.spacing(4),display:"flex",justifyContent:"space-between",alignItems:"center"},forgetButton:{textTransform:"none",fontWeight:400},loginLoader:{marginLeft:e.spacing(4)},copyright:Object(w.a)({marginTop:e.spacing(4),whiteSpace:"nowrap"},e.breakpoints.up("md"),{position:"absolute",bottom:e.spacing(2)})}}));var _e=Object(b.g)((function(e){var t=He(),a=ae(),o=Object(n.useState)(!1),i=Object(T.a)(o,2),c=i[0],l=i[1],s=Object(n.useState)(null),p=Object(T.a)(s,2),m=p[0],d=p[1],g=Object(n.useState)(""),u=Object(T.a)(g,2),h=u[0],f=u[1],b=Object(n.useState)(""),w=Object(T.a)(b,2),E=w[0],y=w[1];return r.a.createElement(ve.a,{container:!0,className:t.container},r.a.createElement("div",{className:t.logotypeContainer},r.a.createElement("img",{src:Me.a,alt:"logo",className:t.logotypeImage}),r.a.createElement(S.a,{className:t.logotypeText},"App Template")),r.a.createElement("div",{className:t.formContainer},r.a.createElement("div",{className:t.form},r.a.createElement(r.a.Fragment,null,r.a.createElement(Ge.a,{in:m},r.a.createElement(S.a,{color:"secondary",className:t.errorMessage},"Something is wrong with your login or password :(")),r.a.createElement(r.a.Fragment,null,r.a.createElement(Be.a,{className:t.dablLoginButton,variant:"contained",color:"primary",size:"large",onClick:re},"Log in with DABL"),r.a.createElement(S.a,null,"OR")),r.a.createElement(Ie.a,{id:"email",InputProps:{classes:{underline:t.textFieldUnderline,input:t.textField}},value:h,onChange:function(e){return f(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&ne(a,h,E,e.history,l,d)},margin:"normal",placeholder:"Username",type:"email",fullWidth:!0}),r.a.createElement(Ie.a,{id:"password",InputProps:{classes:{underline:t.textFieldUnderline,input:t.textField}},value:E,onChange:function(e){return y(e.target.value)},onKeyDown:function(t){"Enter"===t.key&&ne(a,h,E,e.history,l,d)},margin:"normal",placeholder:"Password",type:"password",fullWidth:!0}),r.a.createElement("div",{className:t.formButtons},c?r.a.createElement(Pe.a,{size:26,className:t.loginLoader}):r.a.createElement(Be.a,{disabled:0===h.length,onClick:function(){return ne(a,h,E,e.history,l,d)},variant:"contained",color:"primary",size:"large"},"Login"))))))}));function Je(){var e=te();return r.a.createElement(f.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:function(e){var t=ae();return Object(n.useEffect)((function(){var e=new URL(window.location.toString()),a=e.searchParams.get("token");if(null!==a){var n=e.searchParams.get("party");if(null===n)throw We();localStorage.setItem("daml.party",n),localStorage.setItem("daml.token",a),t({type:"LOGIN_SUCCESS",token:a,party:n})}})),r.a.createElement(b.a,{to:"/app/report"})}}),r.a.createElement(b.b,{exact:!0,path:"/app",render:function(){return r.a.createElement(b.a,{to:"/app/report"})}}),r.a.createElement(t,{path:"/app",component:Re}),r.a.createElement(a,{path:"/login",component:_e}),r.a.createElement(b.b,{component:We})));function t(t){var a=t.component,n=Object(h.a)(t,["component"]);return r.a.createElement(b.b,Object.assign({},n,{render:function(t){return e.isAuthenticated?r.a.createElement(a,t):r.a.createElement(b.a,{to:{pathname:"/login",state:{from:t.location}}})}}))}function a(t){var a=t.component,n=Object(h.a)(t,["component"]);return r.a.createElement(b.b,Object.assign({},n,{render:function(t){return e.isAuthenticated?r.a.createElement(b.a,{to:{pathname:"/"}}):r.a.createElement(a,t)}}))}}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname);i.a.render(r.a.createElement(z,null,r.a.createElement(ee,null,r.a.createElement(c.a,{theme:u.default},r.a.createElement(l.a,null),r.a.createElement(Je,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},85:function(e,t,a){e.exports=a.p+"static/media/logo.06c81d21.svg"}},[[180,1,2]]]);
//# sourceMappingURL=main.eb32356d.chunk.js.map