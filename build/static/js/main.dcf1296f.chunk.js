(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,t,a){e.exports=a(338)},139:function(e,t,a){},146:function(e,t,a){},284:function(e,t,a){},286:function(e,t,a){},288:function(e,t,a){},295:function(e,t,a){},324:function(e,t){},327:function(e,t,a){},333:function(e,t,a){},335:function(e,t,a){},338:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(25),i=a.n(r),s=(a(139),a(22)),c=a(15),l=a(16),u=a(19),m=a(17),p=a(18),d=a(340),h=a(341),g=a(342),b="loading:setLoading";function f(e){return{type:b,payload:{loading:e}}}var v="logged:setLogged";function O(e){return{type:v,payload:{logged:e}}}var y="error:setError";function j(e){return{type:y,payload:{error:e}}}var E=a(38),k=a.n(E),C="http://localhost:3300",L="http://localhost:3300/chatroom",N="user:login",x="user:logout";function w(e,t,a){return a===x?(k.a.remove("USER_TOKEN"),{type:x,payload:{user:{}}}):(k.a.save("USER_TOKEN",e),{type:N,payload:{user:{email:t.email,nickname:t.nickname,token:e}}})}var T=a(9),I=a(23),B=a.n(I),S=a(26),R=a.n(S),P=a(77),M=a.n(P),G=a(39),U=a.n(G),A=a(21),_=(a(146),a(57)),D=a.n(_),F=Object(A.createMuiTheme)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"1px solid #14b7ff"},"&:hover:not($disabled):before":{borderBottom:"1px solid #14b7ff"}}}},typography:{useNextVariants:!0},palette:{primary:{main:"#14b7ff"},secondary:{main:"#22cb8d"}}}),W={className:"LoginTextField"},z={className:"LoginInputLabel"};var K=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleOpen=function(){a.props.OnErrorClose(!0)},a.handleClose=function(){a.props.OnErrorClose(!1)},a.state={username:"",password:"",open:!1},a.OnInputChange=a.OnInputChange.bind(Object(T.a)(Object(T.a)(a))),a.clickLogin=a.clickLogin.bind(Object(T.a)(Object(T.a)(a))),a.clickRegister=a.clickRegister.bind(Object(T.a)(Object(T.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"clickLogin",value:function(){var e=this.state.username,t=this.state.password;e&&t?this.props.OnLoginUser({email:e,password:t}):this.handleOpen()}},{key:"clickRegister",value:function(){this.props.history.push("/register")}},{key:"OnInputChange",value:function(e){"username"===e.target.id?this.setState({username:e.target.value}):this.setState({password:e.target.value})}},{key:"render",value:function(){return o.a.createElement(A.MuiThemeProvider,{theme:F},o.a.createElement("img",{src:D.a,className:"App-logo",alt:"logo"}),o.a.createElement("div",{className:"LoginContentBody"},o.a.createElement(R.a,{id:"username",label:"Email",inputProps:W,InputLabelProps:z,autoComplete:"current-password",onChange:this.OnInputChange,margin:"normal"}),o.a.createElement(R.a,{id:"password",label:"Password",inputProps:W,InputLabelProps:z,type:"password",autoComplete:"current-password",onChange:this.OnInputChange,margin:"normal"}),o.a.createElement(B.a,{variant:"extendedFab",color:"primary",className:"LoginButton",onClick:this.clickLogin},"Connexion"),o.a.createElement(B.a,{variant:"text",color:"primary",className:"LoginButton",onClick:this.clickRegister},"S'inscrire"),o.a.createElement(M.a,{"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:this.handleClose},o.a.createElement("div",{style:{top:"50vh",left:"50vw"},className:"ModalLogin"},o.a.createElement(U.a,{variant:"h6",id:"modal-title",color:"error"},"Erreur"),o.a.createElement(U.a,{variant:"subtitle1",id:"simple-modal-description",color:"error"},"Une erreur est survenue !"),o.a.createElement(B.a,{variant:"text",color:"primary",className:"LoginModalButton",onClick:this.handleClose},"OK")))))}}]),t}(n.Component),V={OnLoginUser:function(e){return function(t){t(f(!0)),fetch(C+"/api/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){if(e.ok)return e.json()}).then(function(e){t(f(!1)),e&&!0===e.success?(t(w(e.token,e,N)),t(O(!0))):t(j(!0))})}},OnErrorClose:j},H=Object(s.b)(function(e){return{user:e.user,isError:e.error}},V)(K),J=(a(284),a(286),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"LoadingContainer"},o.a.createElement("div",{className:"lds-css ng-scope"},o.a.createElement("div",{className:"lds-ripple"},o.a.createElement("div",null),o.a.createElement("div",null))))}}]),t}(n.Component)),$=(a(288),Object(A.createMuiTheme)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"1px solid #14b7ff"},"&:hover:not($disabled):before":{borderBottom:"1px solid #14b7ff"}}}},typography:{useNextVariants:!0},palette:{primary:{main:"#14b7ff"},secondary:{main:"#22cb8d"}}})),Y={className:"RegisterTextField"},q={className:"RegisterInputLabel"},Q=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={username:"",password:"",email:""},a.OnInputChange=a.OnInputChange.bind(Object(T.a)(Object(T.a)(a))),a.clickRegister=a.clickRegister.bind(Object(T.a)(Object(T.a)(a))),a.clickLogin=a.clickLogin.bind(Object(T.a)(Object(T.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"clickRegister",value:function(){var e=this.state.username,t=this.state.password,a=this.state.email;this.props.OnRegisterUser({email:a,nickname:e,password:t})}},{key:"clickLogin",value:function(){this.props.history.push("/login")}},{key:"OnInputChange",value:function(e){var t=e.target.id;"username"===t?this.setState({username:e.target.value}):"password"===t?this.setState({password:e.target.value}):"email"===t&&this.setState({email:e.target.value})}},{key:"render",value:function(){return o.a.createElement(A.MuiThemeProvider,{theme:$},o.a.createElement("img",{src:D.a,className:"App-logo",alt:"logo"}),o.a.createElement("div",{className:"RegisterContentBody"},o.a.createElement(R.a,{id:"email",label:"Email",inputProps:Y,InputLabelProps:q,onChange:this.OnInputChange,margin:"normal"}),o.a.createElement(R.a,{id:"username",label:"Username",inputProps:Y,InputLabelProps:q,onChange:this.OnInputChange,margin:"normal"}),o.a.createElement(R.a,{id:"password",label:"Password",className:"RegisterTextField",inputProps:Y,InputLabelProps:q,type:"password",autoComplete:"current-password",onChange:this.OnInputChange,margin:"normal"}),o.a.createElement(B.a,{variant:"extendedFab",color:"primary",className:"RegisterButton",onClick:this.clickRegister},"S'inscrire"),o.a.createElement(B.a,{variant:"text",color:"primary",className:"LoginButton",onClick:this.clickLogin},"Se Connecter")))}}]),t}(n.Component),X={OnRegisterUser:function(e){return function(t){t(f(!0)),fetch(C+"/api/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(function(e){return e.ok?e.json():e.statusText}).then(function(e){console.log(e),t(f(!1))})}}},Z=Object(s.b)(function(e){return{user:e.user}},X)(Q),ee=a(43),te=a.n(ee),ae=a(126),ne=a.n(ae),oe=a(127),re=a.n(oe),ie=a(130),se=a.n(ie),ce=a(129),le=a.n(ce),ue=a(128),me=a.n(ue),pe=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).goToGame=a.goToGame.bind(Object(T.a)(Object(T.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"goToGame",value:function(e){var t=this.props.game.id+"-"+this.props.game.name;this.props.history.push("/game/"+t)}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(ne.a,{className:e.card},o.a.createElement(re.a,null,o.a.createElement(me.a,{className:e.media,image:this.props.game.background_image_url,title:this.props.game.name}),o.a.createElement(le.a,null,o.a.createElement(U.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.game.name),o.a.createElement(U.a,{className:e.desc,component:"p"},this.props.game.description))),o.a.createElement(se.a,null,o.a.createElement(B.a,{value:this.props.game.id,onClick:this.goToGame,size:"small",color:"primary"},"GO TO")))}}]),t}(n.Component),de=Object(A.withStyles)({card:{maxWidth:345,maxHeight:300},media:{height:120},desc:{maxHeight:50,overflowY:"auto"}})(pe),he="game:retrivegames";a(295);var ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.props.isLogged&&this.props.OnGamesReceived(this.props.token)}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"GContainerContentBody"},o.a.createElement(te.a,{container:!0,spacing:24,justify:"center"},o.a.createElement(te.a,{item:!0,xs:6},o.a.createElement(te.a,{container:!0,spacing:24},this.props.games.map(function(t){return o.a.createElement(te.a,{key:t.id,item:!0,xs:12,md:6,lg:4},o.a.createElement(de,{game:t,history:e.props.history}))})))))}}]),t}(n.Component),be={OnGamesReceived:function(e){return function(t){t(f(!0)),fetch(C+"/api/game/list",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return e.ok?e.json():e.statusText}).then(function(e){t({type:he,payload:{games:e}}),t(f(!1))})}}},fe=Object(s.b)(function(e){return{games:e.games,token:e.user.token,isLogged:e.logged}},be)(ge),ve=a(78),Oe=a.n(ve),ye=a(131),je=a.n(ye),Ee=(a(327),Object(A.createMuiTheme)({overrides:{MuiInput:{underline:{"&:before":{borderBottom:"1px solid #14b7ff"},"&:hover:not($disabled):before":{borderBottom:"1px solid #14b7ff"}}}},typography:{useNextVariants:!0},palette:{primary:{main:"#14b7ff"},secondary:{main:"#22cb8d"}}})),ke={className:"GameChatTextField"},Ce={className:"GameChatInputLabel"},Le=function(e){function t(e){var a;Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={message:"",list:[],socket:je.a.connect(L,{transports:["websocket"]}),roomName:a.props.match.params.id};var n=a.props.user.nickname;return a.state.socket.emit("room",{room:a.state.roomName,username:n}),a.state.socket.on("chat message",function(e){var t={me:!1,id:e.id,username:e.username,message:e.msg};e.username===n&&(t.me=!0);var o=Array.from(a.state.list);o.push(t),a.setState({list:o})}),a.OnInputChange=a.OnInputChange.bind(Object(T.a)(Object(T.a)(a))),a.sendMessage=a.sendMessage.bind(Object(T.a)(Object(T.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"OnInputChange",value:function(e){this.setState({message:e.target.value})}},{key:"sendMessage",value:function(){var e=this.state.roomName,t=this.props.user.nickname,a=this.state.message;this.state.socket.emit("chat message",{room:e,username:t,msg:a}),this.setState({message:""})}},{key:"render",value:function(){var e=this.props.classes;return o.a.createElement(A.MuiThemeProvider,{theme:Ee},o.a.createElement("div",{className:e.container},o.a.createElement("div",{className:e.controls},o.a.createElement(B.a,{variant:"contained",color:"primary",onClick:this.sendMessage},"SEND"),o.a.createElement(R.a,{id:"message",label:"Your Message here",inputProps:ke,InputLabelProps:Ce,onChange:this.OnInputChange,value:this.state.message,margin:"normal"})),o.a.createElement("div",{className:e.containerList},o.a.createElement("div",{className:e.bottomList},o.a.createElement("ul",{className:e.messageList},this.state.list.map(function(t){return o.a.createElement("li",{key:t.id,className:e.itemList},o.a.createElement("p",{className:e.nickname},t.username),t.me?o.a.createElement(Oe.a,{label:t.message,color:"primary",className:e.chip}):o.a.createElement(Oe.a,{label:t.message,color:"secondary",className:e.chip}))}))))))}}]),t}(n.Component),Ne=Object(s.b)(function(e){return{user:e.user}},{})(Object(A.withStyles)(function(e){return{chip:{margin:e.spacing.unit},container:{display:"flex",flexDirection:"column-reverse",position:"absolute",alignItems:"stretch",width:"100vw",paddingLeft:10,height:"calc(100vh - 70px)"},controls:{flexDirection:"column-reverse",width:"100vw",alignItems:"stretch",display:"flex",height:110},containerList:{display:"flex",flexDirection:"column-reverse",flex:1,minHeight:0,overflow:"auto"},bottomList:{display:"flex",flexDirection:"column-reverse"},messageList:{display:"flex",flexDirection:"column",listStyleType:"none",flex:1,padding:10,maxWidth:1e3},itemList:{margin:5},nickname:{fontSize:"small",margin:0}}})(Le)),xe=(a(333),Object(A.createMuiTheme)({palette:{primary:{main:"#14b7ff"},secondary:{main:"#22cb8d"}}})),we=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).clickLogout=a.clickLogout.bind(Object(T.a)(Object(T.a)(a))),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"clickLogout",value:function(){this.props.OnLogoutUser(this.props.token)}},{key:"render",value:function(){return o.a.createElement(A.MuiThemeProvider,{theme:xe},o.a.createElement("div",{className:"TopBarContainer"},o.a.createElement(B.a,{variant:"contained",color:"secondary",className:"LogoutButton",onClick:this.clickLogout},"LOGOUT"),o.a.createElement(B.a,{variant:"contained",color:"secondary",className:"AccountButton",onClick:this.clickRegister},"Account")))}}]),t}(n.Component),Te={OnLogoutUser:function(e){return function(t){t(f(!0)),fetch(C+"/api/logout",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){if(t(f(!1)),e.ok)return e.json()}).then(function(e){console.log(e),e.success&&(t(O(!1)),t(w("",{},x)))})}}},Ie=Object(s.b)(function(e){return{token:e.user.token}},Te)(we),Be=(a(335),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"HomeContentBody"},o.a.createElement(Ie,null),o.a.createElement(h.a,{path:"/game/:id",component:Ne}),o.a.createElement(h.a,{exact:!0,path:"/home",component:fe}),this.props.isLoading&&o.a.createElement(J,null)))}}]),t}(n.Component)),Se=Object(s.b)(function(e){return{isLoading:e.loading,isLogged:e.logged}},{})(Be),Re=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){var e=k.a.load("USER_TOKEN");e&&this.props.OnCheckValidToken(e)}},{key:"render",value:function(){return o.a.createElement(d.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-Body"},this.props.isLogged&&"/login"===document.location.pathname&&o.a.createElement(g.a,{to:"/home"}),!this.props.isLogged&&"/login"!==document.location.pathname&&o.a.createElement(g.a,{to:"/login"}),o.a.createElement(h.a,{exact:!0,path:"/home",component:Se}),o.a.createElement(h.a,{exact:!0,path:"/login",component:H}),o.a.createElement(h.a,{exact:!0,path:"/register",component:Z}),this.props.isLoading&&o.a.createElement(J,null))))}}]),t}(n.Component),Pe={OnCheckValidToken:function(e){return function(t){t(f(!0)),fetch(C+"/api/account/me",{method:"GET",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(e)}}).then(function(e){return e.ok?e.json():(t(f(!1)),e.statusText)}).then(function(a){t(f(!1)),a.success?(t(w(e,a.user,N)),t(O(!0))):k.a.remove("USER_TOKEN")})}}},Me=Object(s.b)(function(e){return{isLoading:e.loading,isLogged:e.logged,location:e.location}},Pe)(Re),Ge=a(37),Ue={email:"",nickname:"",token:""};var Ae=a(132),_e=[{id:0,name:"",description:"",background_image_url:""}];var De=Object(Ge.c)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case N:case x:return n.user}return e},loading:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case b:return n.loading}return e},logged:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case v:return n.logged}return e},games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case he:return n.games}return e},error:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case y:return n.error}return e}}),Fe=Object(Ge.d)(De,Object(Ge.a)(Ae.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=document.getElementById("root");i.a.render(o.a.createElement(s.a,{store:Fe},o.a.createElement(Me,null)),We),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},57:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[134,2,1]]]);
//# sourceMappingURL=main.dcf1296f.chunk.js.map