(this["webpackJsonpbgt-frontend"]=this["webpackJsonpbgt-frontend"]||[]).push([[0],{170:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(0),i=n(12),s=n.n(i),c=n(29),o=n(221),l=n(49),u=n(14),d=n(11),m=n.n(d),p=n(19),j=n(45),b=n(13),h=n(20),g=n(46),x=n(225),O=n(226),f=n(257),v=n(227),w=n(141),y=n.n(w),k=n(234),N=n(253),C=n(72),S=n(236),F=n(237),I=n(258),T=n(134),P={name:"",roles:"",loggedIn:!1},E=function(){localStorage.removeItem("token"),P.name="",P.roles="",P.loggedIn=!1},q=function(){var e=Object(p.a)(m.a.mark((function e(){var t,n,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem("token")&&(t=Object(T.a)(localStorage.getItem("token")),n=t.sub,a=t.scopes,P.name=n,P.roles=a,P.loggedIn=!0);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=function(){return P},R="https://bg-translate.herokuapp.com/api/v1",W="OK",D="NO_CONNECTION",A="BAD_RESPONSE";function L(e,t,n){return G.apply(this,arguments)}function G(){return(G=Object(p.a)(m.a.mark((function e(t,n,a){var r,i,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=localStorage.getItem("token"),i=new Request(R+t,{method:n,body:JSON.stringify(a),headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r)}}),e.next=5,fetch(i);case 5:if(!(s=e.sent).ok){e.next=20;break}return e.prev=7,e.t0=W,e.next=11,s.json();case 11:return e.t1=e.sent,e.abrupt("return",{status:e.t0,data:e.t1});case 15:return e.prev=15,e.t2=e.catch(7),e.abrupt("return",{status:W});case 18:e.next=21;break;case 20:return e.abrupt("return",{status:A});case 21:e.next=26;break;case 23:return e.prev=23,e.t3=e.catch(0),e.abrupt("return",{status:D});case 26:case"end":return e.stop()}}),e,null,[[0,23],[7,15]])})))).apply(this,arguments)}function H(e,t,n){return M.apply(this,arguments)}function M(){return(M=Object(p.a)(m.a.mark((function e(t,n,a){var r,i;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=new Request(R+t,{method:n,body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}),e.next=4,fetch(r);case 4:if(!(i=e.sent).ok){e.next=19;break}return e.prev=6,e.t0=W,e.next=10,i.json();case 10:return e.t1=e.sent,e.abrupt("return",{status:e.t0,data:e.t1});case 14:return e.prev=14,e.t2=e.catch(6),e.abrupt("return",{status:W});case 17:e.next=20;break;case 19:return e.abrupt("return",{status:A});case 20:e.next=25;break;case 22:return e.prev=22,e.t3=e.catch(0),e.abrupt("return",{status:D});case 25:case"end":return e.stop()}}),e,null,[[0,22],[6,14]])})))).apply(this,arguments)}function U(e,t){return K.apply(this,arguments)}function K(){return(K=Object(p.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H(t,"POST",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e){return J.apply(this,arguments)}function J(){return(J=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",H(t,"GET"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return _.apply(this,arguments)}function _(){return(_=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t,"DELETE"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t,"GET"));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e,t){return Z.apply(this,arguments)}function Z(){return(Z=Object(p.a)(m.a.mark((function e(t,n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",L(t,"POST",n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function $(){var e=Object(j.a)(["\n    color: red;"]);return $=function(){return e},e}function ee(){var e=Object(j.a)(["\n  margin: 24px 0 16px;\n"]);return ee=function(){return e},e}function te(){var e=Object(j.a)(["\n  width: 100%;\n  margin-top: 10px;\n"]);return te=function(){return e},e}function ne(){var e=Object(j.a)(["\n  margin: 8px;\n  background-color: red;\n"]);return ne=function(){return e},e}function ae(){var e=Object(j.a)(["\n  margin-top: 64px;\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n"]);return ae=function(){return e},e}var re=Object(o.a)((function(){return{textField:{background:"white",WebkitBoxShadow:"0 0 0 1000px white inset"}}})),ie=g.a.div(ae()),se=Object(g.a)(f.a)(ne()),ce=Object(g.a)(b.c)(te()),oe=Object(g.a)(x.a)(ee()),le=g.a.div($()),ue=function(){var e=Object(u.g)(),t=re();return Object(a.jsx)(b.d,{initialValues:{username:"",password:"",errors:""},validationSchema:h.a().shape({username:h.c().required("Username is required"),password:h.c().required("Password is required.")}),onSubmit:function(){var t=Object(p.a)(m.a.mark((function t(n,a){var r,i,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.setSubmitting,i=a.setFieldError,t.next=3,U("/authenticate",n);case 3:"OK"===(s=t.sent).status?(c=s.data.token,localStorage.setItem("token",c),q(),r(!1),e.push("/"),e.go(0)):i("errors","Username or password is incorrect!");case 5:case"end":return t.stop()}var c}),t)})));return function(e,n){return t.apply(this,arguments)}}(),children:function(e){var n=e.values,r=e.isSubmitting,i=e.handleChange,s=e.handleSubmit;return Object(a.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(v.a,{}),Object(a.jsxs)(ie,{children:[Object(a.jsx)(se,{children:Object(a.jsx)(y.a,{})}),Object(a.jsx)(C.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)(ce,{onSubmit:s,children:[Object(a.jsx)(I.a,{id:"errors",name:"errors",disabled:!0,type:"hidden"}),Object(a.jsx)(b.a,{id:"globalError",component:le,name:"errors"}),Object(a.jsx)(I.a,{type:"text",id:"username",name:"username",label:"Username",variant:"outlined",margin:"normal",fullWidth:!0,placeholder:"Enter your username",autoFocus:!0,inputProps:{className:t.textField},value:n.username,onChange:i}),Object(a.jsx)(b.a,{id:"usernameError",component:le,name:"username"}),Object(a.jsx)(I.a,{id:"password",name:"password",type:"password",placeholder:"Enter your password",variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",autoComplete:"current-password",inputProps:{className:t.textField},value:n.password,onChange:i}),Object(a.jsx)(b.a,{id:"passwordError",component:le,name:"password"}),Object(a.jsx)(k.a,{control:Object(a.jsx)(N.a,{value:"remember",color:"primary"}),label:"Remember me"}),Object(a.jsx)(oe,{type:"submit",name:"signin",fullWidth:!0,variant:"contained",color:"primary",disabled:r,children:"Sign In"}),Object(a.jsxs)(S.a,{container:!0,children:[Object(a.jsx)(S.a,{item:!0,xs:!0,children:Object(a.jsx)(F.a,{href:"#",variant:"body2",children:"Forgot password?"})}),Object(a.jsx)(S.a,{item:!0,children:Object(a.jsx)(F.a,{href:"#",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})}})},de=function(){return Object(a.jsx)(b.d,{initialValues:{firstName:"",lastName:"",email:"",password:"",confirmPassword:""},validationSchema:h.a().shape({firstName:h.c().required("First Name is required"),lastName:h.c().required("Last Name is required"),email:h.c().email("Email is invalid").required("Email is required"),password:h.c().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:h.c().oneOf([h.b("password"),null],"Passwords must match").required("Confirm Password is required")}),children:function(e){var t=e.touched,n=e.errors,r=e.isSubmitting,i=e.handleSubmit;return Object(a.jsxs)(b.c,{onSubmit:i,children:[Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("label",{htmlFor:"firstName",children:["First Name"," ",Object(a.jsx)(b.b,{name:"firstName",type:"text",placeholder:"Enter your email",className:"form-control".concat(n.firstName&&t.firstName?" is-invalid":"")}),Object(a.jsx)(b.a,{name:"firstName",component:"div",className:"invalid-feedback"})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("label",{htmlFor:"lastName",children:["Last Name"," ",Object(a.jsx)(b.b,{name:"lastName",type:"text",className:"form-control".concat(n.lastName&&t.lastName?" is-invalid":"")}),Object(a.jsx)(b.a,{name:"lastName",component:"div",className:"invalid-feedback"})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("label",{htmlFor:"email",children:["Email"," ",Object(a.jsx)(b.b,{name:"email",type:"text",className:"form-control".concat(n.email&&t.email?" is-invalid":"")}),Object(a.jsx)(b.a,{name:"email",component:"div",className:"invalid-feedback"})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("label",{htmlFor:"password",children:["Password"," ",Object(a.jsx)(b.b,{name:"password",type:"password",className:"form-control".concat(n.password&&t.password?" is-invalid":"")}),Object(a.jsx)(b.a,{name:"password",component:"div",className:"invalid-feedback"})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsxs)("label",{htmlFor:"confirmPassword",children:["Confirm Password"," ",Object(a.jsx)(b.b,{name:"confirmPassword",type:"password",className:"form-control".concat(n.confirmPassword&&t.confirmPassword?" is-invalid":"")}),Object(a.jsx)(b.a,{name:"confirmPassword",component:"div",className:"invalid-feedback"})]})}),Object(a.jsx)("div",{className:"form-group",children:Object(a.jsx)("button",{type:"submit",disabled:r,className:"btn btn-primary mr-2",children:"Register"})})]})}})},me=n(36),pe=n(261),je=n(172),be=n(238),he=n(254),ge=n(255),xe=n(239),Oe=n(233),fe=n(47),ve=n(89),we=function(e,t){var n=e.map((function(e){return e.id})).indexOf(t);return n>-1?(e.splice(n,1),e):e},ye=function(e,t){return!(!Array.isArray(t)||t.length)||e.split(",").some((function(e){return t.indexOf(e)>=0}))},ke=function(e){var t=e.component,n=e.user,r=e.allowedRoles,i=e.text,s=Object(ve.a)(e,["component","user","allowedRoles","text"]);return Object(a.jsx)(a.Fragment,{children:ye(n.roles,r)&&Object(a.jsx)(t,Object(fe.a)(Object(fe.a)({},s),{},{children:i}))})};ke.defaultProps={text:""};var Ne=ke,Ce=Object(o.a)((function(e){return{root:{display:"flex"},drawer:Object(me.a)({},e.breakpoints.up("sm"),{width:240,flexShrink:0}),menuButton:Object(me.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:240},content:{flexGrow:1,padding:e.spacing(3)},closeMenuButton:{marginRight:"auto",marginLeft:0}}})),Se=function(e){var t=e.user,n=e.open,r=e.handleOpen,i=e.handleClose,s=e.links,c=Object(u.g)(),o=Ce(),l=function(e){var t=e.link;return Object(a.jsx)(pe.a,{open:!1,title:"",onClick:i,children:Object(a.jsx)(je.a,{id:t.linkId,button:!0,children:Object(a.jsx)(be.a,{primary:t.text,onClick:function(){return c.push(t.path)}})})})};return Object(a.jsx)("nav",{className:o.drawer,children:Object(a.jsx)(he.a,{smUp:!0,implementation:"css",children:Object(a.jsxs)(ge.a,{variant:"temporary",anchor:"left",open:n,onOpen:r,onClose:i,classes:{paper:o.drawerPaper},ModalProps:{keepMounted:!0},children:[Object(a.jsx)(xe.a,{style:{minHeight:"1em"}}),Object(a.jsx)(xe.a,{}),Object(a.jsx)("div",{children:Object(a.jsx)(Oe.a,{children:s.map((function(e){return Object(a.jsx)(Ne,{component:l,user:t,allowedRoles:e.allowedRoles,link:e},e.text)}))})})]})})})},Fe=n(4),Ie=n(240),Te=n(235),Pe=n(144),Ee=n.n(Pe),qe=n(143),Be=n.n(qe),Re=Object(o.a)((function(e){return{link:{margin:e.spacing(1,1.5)}}})),We=function(e){var t=e.linkId,n=e.path,r=e.linkText,i=Re();return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(F.a,{id:t,variant:"button",color:"inherit",component:l.b,to:n,className:i.link,children:r})})},De=Object(o.a)((function(e){return{appBar:{borderBottom:"1px solid ".concat(e.palette.divider),zIndex:2e3},toolbar:{flexWrap:"wrap"},toolbarTitle:Object(me.a)({flexGrow:1},e.breakpoints.down("xs"),{textAlign:"center"}),heroContent:{padding:e.spacing(8,0,6)},cardHeader:{backgroundColor:"light"===e.palette.type?e.palette.grey[200]:e.palette.grey[700]},cardPricing:{display:"flex",justifyContent:"center",alignItems:"baseline",marginBottom:e.spacing(2)},loginHeader:{justifyContent:"flex-end",paddingRight:e.spacing(5),minHeight:"1em",backgroundColor:"#18202c",fontWeight:"500",color:"rgba(255, 255, 255, 0.7)"},menuButton:Object(me.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),closeMenuButton:{marginRight:e.spacing(2),display:"none"},menuLinks:Object(me.a)({},e.breakpoints.down("xs"),{display:"none"}),hide:{display:"none"},show:{display:"inline-flex"}}})),Ae=function(e){var t=e.user,n=e.open,r=e.handleOpen,i=e.handleClose,s=e.links,c=De();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{}),Object(a.jsxs)(Ie.a,{position:"static",elevation:0,className:c.appBar,children:[Object(a.jsx)(xe.a,{name:"logInHeader",className:c.loginHeader,children:t.name&&Object(a.jsxs)(a.Fragment,{children:["Logged in as"," ",t.name]})}),Object(a.jsxs)(xe.a,{className:c.toolbar,children:[Object(a.jsx)(Te.a,{color:"inherit","aria-label":"Open drawer",edge:"start",onClick:r,className:Object(Fe.a)(c.menuButton,n&&c.hide),children:Object(a.jsx)(Be.a,{})}),Object(a.jsx)(Te.a,{color:"inherit","aria-label":"Close drawer",edge:"start",onClick:i,className:Object(Fe.a)(c.closeMenuButton,n&&c.show),children:Object(a.jsx)(Ee.a,{})}),Object(a.jsx)(C.a,{variant:"h6",color:"inherit",noWrap:!0,className:c.toolbarTitle,onClick:i,children:Object(a.jsx)(F.a,{component:l.b,to:"/",color:"inherit",variant:"inherit",underline:"none",children:"BGT"})}),Object(a.jsx)("nav",{className:c.menuLinks,children:s.map((function(e){return Object(a.jsx)(Ne,{component:We,user:t,allowedRoles:e.allowedRoles,linkId:e.linkId,path:e.path,linkText:e.text},e.text)}))}),!t.loggedIn&&Object(a.jsx)(x.a,{component:l.b,to:"/login",color:"inherit",variant:"outlined",name:"login",className:c.link,onClick:i,children:"Login"}),t.loggedIn&&Object(a.jsx)(x.a,{onClick:function(){E(),window.location.href="/BGT-frontend",i()},color:"inherit",variant:"outlined",className:c.link,children:"Logout"})]})]})]})},Le={Admin:"ADMIN",Creator:"CREATOR",Basic:"BASIC"},Ge=[{text:"Add game",path:"/games/add",allowedRoles:[Le.Admin],linkId:"add-game-link"},{text:"Basic user link",path:"/",allowedRoles:[],linkId:"add-game-link"}],He=function(e){var t=e.user,n=Object(r.useState)(!1),i=Object(c.a)(n,2),s=i[0],o=i[1],l=function(){o(!0)},u=function(){o(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Ae,{user:t,open:s,handleOpen:l,handleClose:u,links:Ge}),Object(a.jsx)(Se,{user:t,open:s,handleOpen:l,handleClose:u,links:Ge})]})},Me=function(e){var t=e.component,n=e.user,r=e.allowedRoles,i=Object(ve.a)(e,["component","user","allowedRoles"]);return Object(a.jsx)(u.b,Object(fe.a)(Object(fe.a)({},i),{},{render:function(e){return n.loggedIn&&ye(n.roles,r)?Object(a.jsx)(t,Object(fe.a)({},e)):Object(a.jsx)(u.a,{to:{pathname:"/"}})}}))},Ue=function(){return Object(a.jsx)("div",{children:"user list"})},Ke=n(246),ze=n(256),Je=n(231),Ve=n(250),_e=n(247),Ye=n(249),Qe=n(248),Xe=n(241),Ze=n(245),$e=n(243),et=n(244),tt=n(242),nt=function(e){var t=e.item,n=e.handleDeleteGame,i=Object(r.useState)(!1),s=Object(c.a)(i,2),o=s[0],l=s[1],d=Object(u.g)(),m=Object(r.useState)({name:"",roles:"",loggedIn:!1}),p=Object(c.a)(m,2),j=p[0],b=p[1];Object(r.useEffect)((function(){b(B())}),[]);var h=function(){l(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(x.a,{size:"small",color:"primary",onClick:function(){l(!0)},children:"Details"}),Object(a.jsxs)(Xe.a,{fullWidth:!0,maxWidth:"sm",open:o,onClose:h,"aria-labelledby":"responsive-dialog-title",children:[Object(a.jsx)(tt.a,{id:"responsive-dialog-title",children:t.title}),Object(a.jsxs)($e.a,{children:[Object(a.jsxs)(et.a,{children:["Description:"," ",t.description]}),Object(a.jsxs)(et.a,{children:["Author:"," ",t.author]}),Object(a.jsxs)(et.a,{children:["Language:"," ",t.language]}),t.translatedLanguages&&Object(a.jsxs)(et.a,{children:["Translated languages:\xa0",t.translatedLanguages]})]}),Object(a.jsxs)(Ze.a,{children:[Object(a.jsx)(Ne,{component:x.a,user:j,allowedRoles:[Le.Creator,Le.Admin],text:"Translate",color:"primary",onClick:function(){return d.push("./games/".concat(t.title,"/translate"),{game:t})}}),Object(a.jsx)(Ne,{component:x.a,user:j,allowedRoles:[Le.Admin],text:"Delete",color:"secondary",onClick:function(){n(t.id),h()}}),Object(a.jsx)(x.a,{onClick:h,color:"primary",autoFocus:!0,children:"Close"})]})]})]})},at=Object(o.a)((function(e){return{icon:{marginRight:e.spacing(2)},heroContent:{backgroundColor:e.palette.background.paper,padding:e.spacing(8,0,6)},heroButtons:{marginTop:e.spacing(4)},cardGrid:{paddingTop:e.spacing(8),paddingBottom:e.spacing(8)},card:{height:"100%",display:"flex",flexDirection:"column"},cardMedia:{paddingTop:"56.25%"},cardContent:{flexGrow:1},loading:{display:"flex",minHeight:"60vh",alignItems:"center",justifyContent:"center"}}})),rt=function(){var e=at(),t=Object(r.useState)([]),n=Object(c.a)(t,2),i=n[0],s=n[1],o=Object(r.useState)(!1),l=Object(c.a)(o,2),u=l[0],d=l[1],j=Object(r.useState)(""),b=Object(c.a)(j,2),h=b[0],g=b[1];if(Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z("/games/original");case 2:t=e.sent,s(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),!i)return Object(a.jsx)("div",{className:e.loading,children:Object(a.jsx)(Ke.a,{})});var x=function(e){g(e),d(!0)},f=function(e){function t(){return(t=Object(p.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,V("/games/".concat(e));case 2:"OK"===t.sent.status?(s(we(i,e)),x("Game was successfully deleted")):x("This game has translations, please delete the translations first!");case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{}),Object(a.jsx)("main",{children:Object(a.jsxs)(O.a,{className:e.cardGrid,maxWidth:"md",children:[Object(a.jsx)(ze.a,{anchorOrigin:{vertical:"top",horizontal:"center"},autoHideDuration:6e3,open:u,onClose:function(){d(!1)},message:h}),Object(a.jsx)(S.a,{container:!0,spacing:4,children:i.map((function(t){return Object(a.jsx)(Je.a,Object(fe.a)(Object(fe.a)({in:!0,style:{transformOrigin:"0 0 0"}},{timeout:2e3}),{},{children:Object(a.jsx)(S.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsxs)(_e.a,{className:e.card,children:[Object(a.jsx)(Qe.a,{className:e.cardMedia,image:"https://source.unsplash.com/collection/board-game",title:"Image title"}),Object(a.jsxs)(Ye.a,{className:e.cardContent,children:[Object(a.jsx)(C.a,{gutterBottom:!0,variant:"h5",component:"h2",children:t.title.slice(0,20)}),Object(a.jsx)(C.a,{children:t.description.slice(0,70)})]}),Object(a.jsx)(Ve.a,{children:Object(a.jsx)(nt,{item:t,handleDeleteGame:f})})]})})}),t.id)}))})]})})]})},it=Object(o.a)((function(e){return{"@global":{ul:{margin:0,padding:0,listStyle:"none"}},footer:{backgroundColor:e.palette.background.paper,marginTop:"auto",padding:e.spacing(6,0)}}})),st=function(){return Object(a.jsxs)(C.a,{variant:"body2",color:"textSecondary",align:"center",children:["Copyright \xa9 ",Object(a.jsx)(F.a,{color:"inherit",href:"/",children:"Board game translator"})," ",(new Date).getFullYear(),"."]})},ct=function(){var e=it();return Object(a.jsx)("footer",{className:e.footer,children:Object(a.jsxs)(O.a,{maxWidth:"lg",children:[Object(a.jsx)(C.a,{variant:"h6",align:"center",gutterBottom:!0,children:"Board game translator"}),Object(a.jsx)(C.a,{variant:"subtitle1",align:"center",color:"textSecondary",component:"p",children:"Page that fulfils all your needs"}),Object(a.jsx)(st,{})]})})},ot=n(230),lt=n(260),ut=n(252),dt=n(251);function mt(){var e=Object(j.a)(["\n    color: red;"]);return mt=function(){return e},e}var pt=g.a.div(mt()),jt=Object(o.a)((function(){return{textField:{background:"white",WebkitBoxShadow:"0 0 0 1000px white inset"}}})),bt=function(e){var t,n=e.value,r=e.change,i=e.name,s=e.autoFocus,c=e.placeholder,o=Object(ve.a)(e,["value","change","name","autoFocus","placeholder"]),l=jt();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(I.a,Object(fe.a)({type:"text",id:i,name:i,label:(t=i,t.charAt(0).toUpperCase()+t.slice(1)),variant:"outlined",margin:"normal",fullWidth:!0,placeholder:c,autoFocus:s,value:n,onChange:r,inputProps:{className:l.textField},className:l.textField},o)),Object(a.jsx)(b.a,{component:pt,name:i})]})};function ht(){var e=Object(j.a)(["\n    color: red;"]);return ht=function(){return e},e}var gt=g.a.div(ht()),xt=Object(o.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:Object(me.a)({display:"inline-block",minWidth:"49%",margin:e.spacing(3,0,2)},e.breakpoints.down("xs"),{minWidth:"100%",margin:e.spacing(2,0,0)}),buttonGroup:{textAlign:"center"},formControl:{margin:e.spacing(1,0),minWidth:120},textField:{background:"white",WebkitBoxShadow:"0 0 0 1000px white inset"}}})),Ot=function(){var e=Object(u.g)(),t=xt(),n=Object(r.useState)([]),i=Object(c.a)(n,2),s=i[0],o=i[1];return Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z("/languages");case 2:t=e.sent,o(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsx)(b.d,{initialValues:{title:"",description:"",language:""},validationSchema:h.a().shape({title:h.c().required("Title is required").min(3,"Title is too short - should be 3 characters minimum").max(100,"Title is too long - should be 100 characters maximum"),description:h.c().required("Description is required").min(3,"Description is too short - should be 3 characters minimum").max(2e3,"Description is too long - should be 2000 characters maximum"),language:h.c().required("Language is required")}),onSubmit:function(){var t=Object(p.a)(m.a.mark((function t(n,a){var r,i,s,c,o;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a.setSubmitting,i=a.setFieldError,s=B(),t.next=4,Y("/users/".concat(s.name,"/id"));case 4:return c=t.sent,o={title:n.title,description:n.description,languageId:n.language,originalGameId:0,author:s.name,userId:c.data.id},t.next=8,X("/games",o);case 8:"OK"===t.sent.status?(r(!1),e.push("/")):i("title","Server error");case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),children:function(n){var r=n.values,i=n.isSubmitting,c=n.handleChange,o=n.handleSubmit;return Object(a.jsxs)(O.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(v.a,{}),Object(a.jsx)("div",{className:t.paper,children:Object(a.jsx)(C.a,{component:"h1",variant:"h5",children:"Create a new board game"})}),Object(a.jsxs)(b.c,{id:"create-game",className:t.form,onSubmit:o,children:[Object(a.jsx)(bt,{value:r.title,change:c,name:"title",autoFocus:!0,placeholder:"Enter game title"}),Object(a.jsx)(bt,{value:r.description,change:c,name:"description",autoFocus:!1,placeholder:"Enter game description",multiline:!0,rows:4,margin:"normal"}),Object(a.jsxs)(ot.a,{variant:"outlined",className:t.formControl,children:[Object(a.jsx)(lt.a,{id:"select-language-label",children:"Language"}),Object(a.jsx)(ut.a,{id:"language",name:"language",label:"Language",labelId:"select-language-label",className:t.textField,inputProps:{className:t.textField},value:r.language,onChange:c,children:s.map((function(e){return Object(a.jsx)(dt.a,{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsx)(b.a,{component:gt,name:"language"}),Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",style:{float:"left"},disabled:i,className:t.submit,children:"Create"}),Object(a.jsx)(x.a,{type:"reset",variant:"contained",color:"secondary",style:{float:"right"},onClick:function(){return e.push("/")},className:t.submit,children:"Cancel"})]})]})]})}})},ft=n(124),vt=h.a().shape({title:h.c().required("Title is required").min(3,"Title is too short - should be 3 characters minimum").max(100,"Title is too long - should be 100 characters maximum"),description:h.c().required("Description is required").min(3,"Description is too short - should be 3 characters minimum").max(2e3,"Description is too long - should be 2000 characters maximum"),language:h.c().required("Language is required")});function wt(){var e=Object(j.a)(["\n    color: red;"]);return wt=function(){return e},e}var yt=g.a.div(wt()),kt=Object(o.a)((function(e){return{titlePaper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},paper:{height:"40vh",padding:e.spacing(0,6),color:e.palette.text.secondary},form:{width:"100%",marginTop:e.spacing(1)},submit:Object(me.a)({display:"inline-block",minWidth:"49%",margin:e.spacing(3,0,2)},e.breakpoints.down("xs"),{minWidth:"100%",margin:e.spacing(2,0,0)}),buttonGroup:{textAlign:"center"},formControl:{margin:e.spacing(1,0),minWidth:120},textField:{}}})),Nt=function(e){var t=e.location,n=Object(u.g)(),i=kt(),s=Object(r.useState)([]),o=Object(c.a)(s,2),l=o[0],d=o[1],j=t.state.game;return Object(r.useEffect)((function(){function e(){return(e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z("/languages");case 2:t=e.sent,d(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(a.jsx)(b.d,{initialValues:{title:"",description:"",language:""},validationSchema:vt,onSubmit:function(){var e=Object(p.a)(m.a.mark((function e(a,r){var i,s,c,o,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=r.setSubmitting,s=r.setFieldError,c=B(),e.next=4,Y("/users/".concat(c.name,"/id"));case 4:return o=e.sent,l={title:a.title,description:a.description,languageId:a.language,originalGameId:t.state.game.id,author:c.name,userId:o.data.id},e.next=8,X("/games",l);case 8:"OK"===e.sent.status?(i(!1),n.push("/")):s("title","Server error");case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.values,r=e.isSubmitting,s=e.handleChange,c=e.handleSubmit;return Object(a.jsxs)(O.a,{component:"main",maxWidth:"md",children:[Object(a.jsx)(v.a,{}),Object(a.jsx)("div",{className:i.titlePaper,children:Object(a.jsxs)(C.a,{component:"h1",variant:"h5",children:["Translate"," ",j.title]})}),Object(a.jsxs)(b.c,{id:"translate-game",onSubmit:c,children:[Object(a.jsx)("div",{className:i.papers,children:Object(a.jsxs)(S.a,{container:!0,spacing:3,children:[Object(a.jsx)(S.a,{item:!0,xs:12,sm:8,children:Object(a.jsxs)(ft.a,{elevation:4,className:i.paper,children:[Object(a.jsx)(I.a,{type:"text",id:"title",name:"title",label:"Title",margin:"normal",fullWidth:!0,placeholder:"Enter game title",autoFocus:!0,value:t.title,onChange:s,inputProps:{className:i.textField},className:i.textField}),Object(a.jsx)(b.a,{component:yt,name:"title"}),Object(a.jsx)(I.a,{type:"text",id:"description",name:"description",label:"Description",fullWidth:!0,placeholder:"Enter game description",autoFocus:!0,multiline:!0,rows:4,margin:"normal",value:t.description,onChange:s,inputProps:{className:i.textField},className:i.textField}),Object(a.jsx)(b.a,{component:yt,name:"title"}),Object(a.jsxs)(ot.a,{variant:"outlined",className:i.formControl,children:[Object(a.jsx)(lt.a,{id:"select-language-label",children:"Language"}),Object(a.jsx)(ut.a,{id:"language",name:"language",label:"Language",labelId:"select-language-label",className:i.textField,inputProps:{className:i.textField},value:t.language,onChange:s,children:l.map((function(e){return Object(a.jsx)(dt.a,{value:e.id,children:e.name},e.id)}))})]}),Object(a.jsx)(b.a,{component:yt,name:"language"})]})}),Object(a.jsx)(S.a,{item:!0,xs:12,sm:4,children:Object(a.jsx)(ft.a,{className:i.paper,elevation:4,children:Object(a.jsx)(_e.a,{fullWidth:!0,elevation:0,children:Object(a.jsxs)(Ye.a,{children:[Object(a.jsx)(C.a,{variant:"h5",component:"h2",children:j.title}),Object(a.jsxs)(C.a,{variant:"body2",component:"p",children:["Description:"," ",j.description]}),Object(a.jsxs)(C.a,{variant:"body2",component:"p",children:["Author:"," ",j.author]}),Object(a.jsxs)(C.a,{variant:"body2",component:"p",children:["Language:"," ",j.language]})]})})})})]})}),Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{type:"submit",variant:"contained",color:"primary",style:{float:"left"},disabled:r,className:i.submit,children:"Create"}),Object(a.jsx)(x.a,{type:"reset",variant:"contained",color:"secondary",style:{float:"right"},onClick:function(){return n.push("/")},className:i.submit,children:"Cancel"})]})]})]})}})},Ct=function(){var e=Object(r.useState)({name:"",roles:"",loggedIn:!1}),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(r.useEffect)((function(){i(B())}),[]),Object(a.jsxs)(l.a,{basename:"/BGT-frontend",children:[Object(a.jsx)(He,{user:n}),Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.b,{exact:!0,path:"/",component:rt}),Object(a.jsx)(Me,{path:"/games/add",component:Ot,user:n,allowedRoles:[Le.Admin]}),Object(a.jsx)(Me,{path:"/games/:slug/translate",component:Nt,user:n,allowedRoles:[Le.Admin,Le.Creator]}),Object(a.jsx)(u.b,{path:"/login",component:ue}),Object(a.jsx)(u.b,{path:"/register",component:de}),Object(a.jsx)(Me,{exact:!0,path:"/users",component:Ue,user:n,allowedRoles:[Le.Admin]})]}),Object(a.jsx)(ct,{})]})},St=Object(o.a)((function(){return{root:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#eaeff1"},ul:{margin:0,padding:0,listStyle:"none"}}})),Ft=function(){var e=Object(r.useState)(!0),t=Object(c.a)(e,2),n=t[0],i=t[1],s=St();return Object(r.useEffect)((function(){q(),i(!1)}),[]),n?Object(a.jsx)("div",{children:"loading..."}):Object(a.jsx)("div",{className:s.root,children:Object(a.jsx)(Ct,{})})};s.a.render(Object(a.jsx)(Ft,{}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.d9388c52.chunk.js.map