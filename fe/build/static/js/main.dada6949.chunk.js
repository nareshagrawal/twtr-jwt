(this.webpackJsonprxshell=this.webpackJsonprxshell||[]).push([[0],{162:function(e,t,a){e.exports=a(187)},167:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(15),i=a.n(o),c=(a(167),a(128)),l=a(129),s=a(154),u=a(151),m=a(237),p=a(18),g=a(9),d=a(130),f=a(5),h=a(19),b=a(33),v=a(32),w=a(238),E=a(239),y=a(108),j=a(250),O=a(234),x=a(243),S=a(244),C=a(245),I=a(233),k=a(242),N=a(241),T=a(240),D=a(148),B=a.n(D),P=a(89),W=a.n(P),R=a(149),F=a.n(R),L=a(122),A=a.n(L),J=a(150),q=a.n(J),_=a(131);function M(){try{return"undefined"!==typeof Storage&&JSON.parse(localStorage.getItem("fwo:auth")).isAuthorised||!1}catch(e){return!1}}var z={auth:{isAuthenticated:M,getData:function(){return function(){try{if("undefined"!==typeof Storage){var e=JSON.parse(localStorage.getItem("fwo:auth"));return null===e&&(Object(_.a)("auth"),(e={}).isAuthorised=!1),e}return!1}catch(t){return!1}}()},signInURL:"/signin"}},U=a(6);var V=Object(U.a)((function(e){return{root:{display:"flex",flexWrap:"wrap",justifyContent:"space-around",overflow:"hidden",backgroundColor:e.palette.background.paper,marginTop:"100px"}}}))((function(e){var t=e.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("h1",null,"Landing page"))})),H=a(247),Y=a(235),G=a(189),X=Object(I.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(g.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,"marginTop",e.spacing(8)),Object(g.a)(t,"display","flex"),Object(g.a)(t,"flexDirection","column"),Object(g.a)(t,"alignItems","center"),Object(g.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),Q=function(){var e=X(),t=Object(h.e)(),a=Object(n.useState)(""),o=Object(p.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),u=s[0],m=s[1];var g=function(e){!function(e){if("undefined"!==typeof Storage)try{e.isAuthorised=!0,localStorage.setItem("fwo:auth",JSON.stringify(e))}catch(t){console.log(t)}}(e);var a=t.location;if(M()){var n="/home";a.state&&a.state.from?(n=a.state.from.pathname,t.push(n)):t.push(n)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:e.paper,elevation:6},r.a.createElement("div",{className:e.container},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Sign up"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),g({displayName:"User",email:i})},noValidate:!0},r.a.createElement(H.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),r.a.createElement(H.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-Mail",name:"email",autoComplete:"email"}),r.a.createElement(H.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(H.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password_confirm",label:"Confirm Password",type:"password",id:"password_confirm",autoComplete:"current-password"}),r.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign up")))))};function $(e){if("undefined"!==typeof Storage)try{localStorage.setItem("twtr:auth",JSON.stringify(e))}catch(t){console.log(t)}}var K=Object(I.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(g.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,"marginTop",e.spacing(8)),Object(g.a)(t,"display","flex"),Object(g.a)(t,"flexDirection","column"),Object(g.a)(t,"alignItems","center"),Object(g.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"},buttonPadding:{marginBottom:"30px"}}})),Z=function(){var e=K(),t=Object(h.e)(),a=Object(n.useState)(""),o=Object(p.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),u=s[0],m=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:e.paper,elevation:6},r.a.createElement("div",{className:e.container},r.a.createElement(y.a,{component:"h1",variant:"h5",className:e.padding},"Sign Out"),r.a.createElement(y.a,{gutterBottom:!0},"If you are not the only one on this device."),r.a.createElement(Y.a,{fullWidth:!0,variant:"contained",margin:"normal",color:"secondary",onClick:function(){!function(){if("undefined"!==typeof Storage)try{localStorage.removeItem("twtr:auth")}catch(e){console.log(e)}}(),t.push("/")},className:e.buttonPadding},"Sign Out"),r.a.createElement(y.a,{component:"h1",variant:"h5",className:e.padding},"Fast Sign In"),r.a.createElement(y.a,{gutterBottom:!0},"If this is your device."),r.a.createElement(Y.a,{fullWidth:!0,variant:"contained",margin:"normal",color:"primary",onClick:function(){var e=function(){if("undefined"!==typeof Storage)try{return JSON.parse(localStorage.getItem("twtr:auth"))}catch(e){console.log(e)}}(),a={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)};fetch("fastlogin",a).then((function(e){return e.json()})).then((function(e){console.log("received these keys in return:"),console.log(e),$({access:e[0][0],refresh:e[0][1]}),t.push("/")})).catch((function(e){alert(e),console.log(e)}))},className:e.buttonPadding},"Sign In"),r.a.createElement(y.a,{component:"h1",variant:"h5"},"Password Sign In"),r.a.createElement(y.a,{gutterBottom:!0},"You may password-sign-in on any device."),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var a={name:i,password:u},n={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)};console.log("sending out:"),console.log(a),fetch("login",n).then((function(e){return e.json()})).then((function(e){console.log("received these keys in return:"),console.log(e),console.log(e[0].access_token),console.log(e[0].refresh_token),console.log("---"),$({access:e[0].access_token,refresh:e[0].refresh_token}),t.push("/")})).catch((function(e){alert(e),console.log(e)}))},noValidate:!0},r.a.createElement(H.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"Username",name:"username",autoComplete:"username",autoFocus:!0}),r.a.createElement(H.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password"}),r.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Sign in")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}},r.a.createElement(b.a,{to:"/password_reset"},"Forgot Password?"),r.a.createElement(b.a,{to:"/signup"},"Register")))))},ee=Object(I.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(g.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,"marginTop",e.spacing(8)),Object(g.a)(t,"display","flex"),Object(g.a)(t,"flexDirection","column"),Object(g.a)(t,"alignItems","center"),Object(g.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),te=function(){var e=ee(),t=Object(h.e)(),a=Object(n.useState)(""),o=Object(p.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),s=Object(p.a)(l,2);s[0],s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:e.paper,elevation:6},r.a.createElement("div",{className:e.container},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Password reset"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),t.replace("/signin")},noValidate:!0},r.a.createElement(H.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-Mail",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Reset Password")))))},ae=Object(I.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(g.a)(t,e.breakpoints.up(620+e.spacing(6)),{width:400,marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,"marginTop",e.spacing(8)),Object(g.a)(t,"display","flex"),Object(g.a)(t,"flexDirection","column"),Object(g.a)(t,"alignItems","center"),Object(g.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),ne=function(){var e=ae(),t=Object(h.e)(),a=Object(n.useState)(""),o=Object(p.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),s=Object(p.a)(l,2);s[0],s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:e.paper,elevation:6},r.a.createElement("div",{className:e.container},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Password reset"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault(),t.replace("/signin")},noValidate:!0},r.a.createElement(H.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"E-Mail",name:"email",autoComplete:"email",autoFocus:!0}),r.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Reset Password")))))},re=a(72),oe=a.n(re),ie=a(153),ce=a(102),le=a(88),se=a(236),ue=a(10),me=a(246),pe=a(8),ge=a(152),de=a(145),fe=ue.a.create({row:{flexDirection:"row",justifyContent:"center",alignItems:"center",padding:15,marginBottom:5,backgroundColor:"white",borderBottomWidth:ue.a.hairlineWidth,borderBottomColor:"rgba(0,0,0,0.1)"},rowIcon:{width:64,height:64,marginRight:20,borderRadius:"50%",boxShadow:"0 1px 2px 0 rgba(0,0,0,0.1)"},rowData:{flex:1},rowDataText:{fontSize:15,textTransform:"capitalize",color:"#4b4b4b"},rowDataSubText:{fontSize:13,opacity:.8,color:"#a8a689",marginTop:4}}),he=function(e){var t=e.item;return r.a.createElement(pe.a,{style:fe.row},r.a.createElement(ge.a,{style:fe.rowIcon,source:t.pic}),r.a.createElement(pe.a,{style:fe.rowData},r.a.createElement(de.a,{style:fe.rowDataText},"".concat(t.date," ").concat(t.user," ").concat(t.private," ").concat(t.aboutme)),r.a.createElement(de.a,{style:fe.rowDataSubText},t.description)))},be=a(248),ve=ue.a.create({actionsContainer:{flex:1,flexDirection:"row",justifyContent:"flex-end",alignItems:"center",padding:10},actionButton:{padding:10,color:"white",borderRadius:6,width:90,backgroundColor:"lightblue",marginRight:5,marginLeft:5},actionButtonDestructive:{backgroundColor:"pink"},actionButtonText:{textAlign:"center"}}),we=function(e){return console.log(e),r.a.createElement(pe.a,{style:ve.actionsContainer},r.a.createElement(be.a,{style:ve.actionButton,onPress:function(){alert("You could do something with this about-me action!")}},r.a.createElement(de.a,{style:ve.actionButtonText},"Reply")),r.a.createElement(be.a,{style:[ve.actionButton,ve.actionButtonDestructive],onPress:function(){alert("You could do something with this up-vote action!")}},r.a.createElement(de.a,{style:ve.actionButtonText},"Upvote")))},Ee=function(e){var t=e.tweets;return r.a.createElement(me.a,{data:t,bounceFirstRowOnMount:!0,maxSwipeDistance:160,renderItem:he,renderQuickActions:we})},ye=ue.a.create({container:{backgroundColor:"whitesmoke",marginTop:"60px"},centering:{alignItems:"center",justifyContent:"center",padding:8,height:"100vh"}}),je=function(){var e=r.a.useState([]),t=Object(p.a)(e,2),a=t[0],o=t[1],i=r.a.useState(!0),c=Object(p.a)(i,2),l=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(ce.a)(oe.a.mark((function e(){var t,a,n;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("tweets-results");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.results,console.log(n),o(Object(ie.a)(n)),s(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(le.a,{noSpacer:!0,noScroll:!0,style:ye.container},l?r.a.createElement(se.a,{style:[ye.centering],color:"#ff8179",size:"large"}):r.a.createElement(Ee,{tweets:a}))};function Oe(){if("undefined"!==typeof Storage)try{return JSON.parse(localStorage.getItem("twtr:auth")).access}catch(e){console.log(e)}}var xe=Object(I.a)((function(e){var t;return{paper:(t={width:"auto",marginLeft:e.spacing(3),marginRight:e.spacing(3)},Object(g.a)(t,e.breakpoints.up(720+e.spacing(6)),{width:900,marginLeft:"auto",marginRight:"auto"}),Object(g.a)(t,"marginTop",e.spacing(8)),Object(g.a)(t,"display","flex"),Object(g.a)(t,"flexDirection","column"),Object(g.a)(t,"alignItems","center"),Object(g.a)(t,"padding","".concat(e.spacing(2),"px ").concat(e.spacing(3),"px ").concat(e.spacing(3),"px")),t),avatar:{margin:e.spacing(1),width:192,height:192,color:e.palette.secondary.main},form:{marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)},container:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100%"}}})),Se=function(){var e=xe(),t=Object(h.e)(),a=Object(n.useState)(""),o=Object(p.a)(a,2),i=o[0],c=o[1],l=Object(n.useState)(""),s=Object(p.a)(l,2),u=s[0],m=s[1],g=function(){var e=Object(ce.a)(oe.a.mark((function e(a,n,r,o){var i,c,l,s,u;return oe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=Oe(),console.log("access_token:"),console.log(i),c={user:a,description:n,private:r,pic:o,"access-token":i},console.log("postTweet paramdict:"),console.log(c),e.prev=6,l={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(c)},e.next=10,fetch("tweet",l);case 10:return(s=e.sent).ok?console.log("success on send."):alert("response: "+s.toString()),e.prev=12,e.next=15,s.json();case 15:u=e.sent,console.log("on reply:"),console.log(u),t.push("/"),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(12),console.log(e.t0),alert("exception on reply!");case 25:e.next=31;break;case 27:e.prev=27,e.t1=e.catch(6),console.log(e.t1),alert("exception on send");case 31:case"end":return e.stop()}}),e,null,[[6,27],[12,21]])})));return function(t,a,n,r){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{className:e.paper,elevation:6},r.a.createElement("div",{className:e.container},r.a.createElement(y.a,{component:"h1",variant:"h5"},"Compose Tweet"),r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t=["women","men"],a="https://randomuser.me/api/portraits/"+t[Math.floor(Math.random()*t.length)]+"/"+(Math.floor(100*Math.random())+1).toString()+".jpg";g(u,i,!0,a),alert("tweet posted!")},noValidate:!0},r.a.createElement(H.a,{value:u,onInput:function(e){return m(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"username",label:"User Name",name:"username",autoComplete:"username",autoFocus:!0}),r.a.createElement(H.a,{value:i,onInput:function(e){return c(e.target.value)},variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"tweet",label:"Tweet",name:"tweet",autoComplete:"tweet",autoFocus:!0}),r.a.createElement(Y.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit},"Submit")),r.a.createElement("div",{style:{display:"flex",flexDirection:"row",width:"100%",justifyContent:"space-between"}}))))},Ce=Object(v.a)(),Ie=Object(I.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(d.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(g.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(9)}),drawerPaperCollapsed:Object(g.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(0)},e.breakpoints.up("sm"),{width:e.spacing(0)}),appBarSpacer:e.mixins.toolbar,content:{flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:240},footer:{position:"fixed",left:0,bottom:0,width:"100%",backgroundColor:"grey",color:"white",textAlign:"center",fontStyle:"italic"}}}));z.auth.isAuthenticated();function ke(){var e=Ie(),t=r.a.useState(!0),a=Object(p.a)(t,2),n=a[0],o=a[1],i=r.a.useState(!1),c=Object(p.a)(i,2),l=c[0],s=c[1],u=r.a.useState("Home"),g=Object(p.a)(u,2),d=g[0],v=g[1],I=function(){s(!0),o(!1)},D=function(e){return function(){v(e)}};return r.a.createElement("div",{className:e.root},r.a.createElement(m.a,null),r.a.createElement(w.a,{position:"absolute",className:Object(f.a)(e.appBar,n&&e.appBarShift,l&&e.appBar)},r.a.createElement(E.a,{title:d,className:e.toolbar},r.a.createElement(T.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){o(!0),s(!1)},className:Object(f.a)(e.menuButton,n&&e.menuButtonHidden)},r.a.createElement(B.a,null)),r.a.createElement(y.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},d),r.a.createElement(T.a,{color:"inherit"},r.a.createElement(N.a,{badgeContent:2,color:"secondary"},r.a.createElement(F.a,null))))),r.a.createElement(h.b,{history:Ce,title:d},r.a.createElement(j.a,{variant:"permanent",classes:{paper:Object(f.a)(e.drawerPaper,!n&&e.drawerPaperClose,l&&e.drawerPaperCollapsed)},open:n},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(T.a,{onClick:function(){o(!1),s(!1)}},r.a.createElement(W.a,null))),r.a.createElement(k.a,null),r.a.createElement(O.a,null,r.a.createElement(x.a,{button:!0,component:b.a,to:"/tweets",onClick:D("Tweets")},r.a.createElement(S.a,null,r.a.createElement(A.a,null)),r.a.createElement(C.a,{primary:"Tweets"}),"Tweets"===d&&r.a.createElement(S.a,null,r.a.createElement(T.a,{onClick:I},r.a.createElement(W.a,null)))),r.a.createElement(x.a,{button:!0,component:b.a,to:"/compose",onClick:D("Compose")},r.a.createElement(S.a,null,r.a.createElement(A.a,null)),r.a.createElement(C.a,{primary:"Compose"}),"Compose"===d&&r.a.createElement(S.a,null,r.a.createElement(T.a,{onClick:I},r.a.createElement(W.a,null)))),r.a.createElement(x.a,{button:!0,component:b.a,to:"/signin",onClick:D("Sign In")},r.a.createElement(S.a,null,r.a.createElement(q.a,null)),r.a.createElement(C.a,{primary:"Sign In"}),"Sign In"===d&&r.a.createElement(S.a,null,r.a.createElement(T.a,{onClick:I},r.a.createElement(W.a,null)))))),r.a.createElement("main",{className:e.content},r.a.createElement(h.a,{exact:!0,path:"/",component:V}),r.a.createElement(h.a,{path:"/tweets",component:je}),r.a.createElement(h.a,{path:"/compose",component:Se}),r.a.createElement(h.a,{path:"/signin",component:Z}),r.a.createElement(h.a,{path:"/signup",component:Q}),r.a.createElement(h.a,{path:"/password_reset",component:te}),r.a.createElement(h.a,{path:"/password_change",component:ne}))))}a(186);var Ne=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null),r.a.createElement(ke,{config:z}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[162,1,2]]]);
//# sourceMappingURL=main.dada6949.chunk.js.map