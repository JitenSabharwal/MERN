(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5524:function(e,t,a){e.exports=a(5886)},5886:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),l=a(244),o=a(5888),s=a(5889),d=a(5890),u=a(23),p=a(24),m=a(25),h=a(27),g=a(26),b=a(28),f=a(14),E=a(42),y=a.n(E),v=a(53),j=a(112),O=a.n(j),S=a(113),k=a.n(S),w=a(19),U=a.n(w),C=a(115),P=a.n(C),N=a(51),x=a.n(N),D=a(77),F=a.n(D),R=a(61),A=a.n(R),I=a(108),B=a.n(I),_=a(109),L=a.n(_),T=a(52),H=a.n(T),M=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,n=t.order,i=t.orderBy,c=t.numSelected,l=t.rowCount,o=this.props.rows||[];return r.a.createElement(B.a,null,r.a.createElement(x.a,null,r.a.createElement(U.a,{padding:"checkbox"},r.a.createElement(A.a,{indeterminate:c>0&&c<l,checked:c===l,onChange:a})),o.map(function(t){return r.a.createElement(U.a,{key:t.id,numeric:t.numeric,padding:t.disablePadding?"none":"default",sortDirection:i===t.id&&n},r.a.createElement(H.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(L.a,{active:i===t.id,direction:n,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.a.Component),q=a(78),z=a(6),W=a.n(z),V=a(76),$=a.n(V),J=a(36),Z=a.n(J),Q=a(50),G=a.n(Q),X=a(110),K=a.n(X),Y=a(111),ee=a.n(Y),te=a(60),ae=function(e){var t=e.numSelected,a=e.classes,n=e.tableName,i=e.handleDelete,c=e.selected;return r.a.createElement($.a,{className:W()(a.root,Object(q.a)({},a.highlight,t>0))},r.a.createElement("div",{className:a.title},t>0?r.a.createElement(Z.a,{color:"inherit",variant:"subheading"},t," selected"):r.a.createElement(Z.a,{variant:"title",id:"tableTitle"},n)),r.a.createElement("div",{className:a.spacer}),r.a.createElement("div",{className:a.actions},t>0?r.a.createElement(H.a,{title:"Delete"},r.a.createElement(G.a,{"aria-label":"Delete"},r.a.createElement(K.a,{onClick:function(){return i(c)}}))):r.a.createElement(H.a,{title:"Filter list"},r.a.createElement(G.a,{"aria-label":"Filter list"},r.a.createElement(ee.a,null)))))},ne=ae=Object(f.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(te.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(ae),re=a(114),ie=a.n(re),ce=a(162),le=a.n(ce),oe=function(){var e=localStorage.getItem("id_token");return{headers:{Authorization:e?"Bearer ".concat(e):""}}},se=function(e,t){var a=oe();return le.a.post(e,t,a)},de=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_id";return e.filter(function(e){return e[a]===t})},ue=function(){return new Promise(function(e,t){(function(e,t){var a=oe();return le.a.get(e,a)})("/api/v1/user").then(function(a){var n=a.data,r=n.success,i=n.data;if(!r)return t(a);e({user:{list:i||[]}})}).catch(function(e){console.log(e),t(new Error("Error: ",e))})})};function pe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var me=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={order:"asc",orderBy:a.props.orderBy||"",selected:[],data:a.props.data||[],page:0,rowsPerPage:a.props.rowsPerPage||10},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e,t){t?a.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):a.setState({selected:[]});var n=a.state.selected.length;n&&a.props.handleSelect(a.state.selected[n-1])},a.handleClick=function(e,t){var n=a.state.selected.indexOf(t),r=[];-1===n?r=[t]:0===n&&(r=[]),a.setState({selected:r}),r.length?a.props.handleSelect(t):a.props.handleSelect("")},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.handleDeleteClick=function(e){a.handleSelectAllClick(),a.props.handleDelete(e)},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.tableName,i=this.state,c=i.data,l=i.order,o=i.orderBy,s=i.selected,d=i.rowsPerPage,u=i.page,p=d-Math.min(d,c.length-u*d);return r.a.createElement(F.a,{className:a.root},r.a.createElement(ne,{selected:s,numSelected:s.length,tableName:n,handleDelete:this.handleDeleteClick}),r.a.createElement("div",{className:a.tableWrapper},r.a.createElement(O.a,{className:a.table,"aria-labelledby":"tableTitle"},r.a.createElement(M,{rows:this.props.rowHeads,numSelected:s.length,order:l,orderBy:o,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:c.length}),r.a.createElement(k.a,null,this.props.data.sort(function(e,t){return"desc"===e?function(e,a){return pe(e,a,t)}:function(e,a){return-pe(e,a,t)}}(l,o)).slice(u*d,u*d+d).map(function(t){var a=e.isSelected(t._id);return r.a.createElement(x.a,{hover:!0,onClick:function(a){return e.handleClick(a,t._id)},role:"checkbox","aria-checked":a,tabIndex:-1,key:t._id,selected:a},r.a.createElement(U.a,{padding:"checkbox"},r.a.createElement(A.a,{checked:a})),r.a.createElement(U.a,{component:"th",scope:"row",padding:"none"},t.firstName),r.a.createElement(U.a,{padding:"none"},t.lastName),r.a.createElement(U.a,{padding:"none"},t.hobbies),r.a.createElement(U.a,{padding:"none"},t.birthDate),r.a.createElement(U.a,{scope:"row",padding:"none"},r.a.createElement(ie.a,{alt:"Remy Sharp",src:t.profilePic})))}),p>0&&r.a.createElement(x.a,{style:{height:49*p}},r.a.createElement(U.a,{colSpan:4}))))),r.a.createElement(P.a,{component:"div",count:c.length,rowsPerPage:d,page:u,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.a.Component),he=a(79),ge=a.n(he),be=a(163),fe="ADD_USER_REQUEST",Ee="ADD_USER_SUCCESS",ye="ADD_USER_FAILURE",ve="UPDATE_USER_REQUEST",je="UPDATE_USER_SUCCESS",Oe="UPDATE_USER_FAILURE",Se="DELETE_USER",ke="DELETE_ALL_USERS",we="SELECT_USER",Ue=[{id:"firstName",numeric:!1,disablePadding:!0,label:"FirstName"},{id:"lastName",numeric:!1,disablePadding:!1,label:"LastName"},{id:"hobbies",numeric:!1,disablePadding:!1,label:"Hobbies"},{id:"birthDate",numeric:!1,disablePadding:!1,label:"BirthDate"},{id:"url",numeric:!1,disablePadding:!1,label:"Profile"}];function Ce(e,t){return{type:t,isFetching:!0,payload:e}}function Pe(e,t){return{type:t,isFetching:!0,payload:e}}function Ne(e,t){return{type:t,isFetching:!0,payload:e}}var xe=function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}},De=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={rowHeads:Ue,tableName:"Users",orderBy:"firstName"},a.handleDelete=function(e){1===e.length?a.props.deleteUser(e[0]):a.props.deleteAllUsers()},a.handleSelect=function(e){var t=de(a.props.data,e);t.length?a.props.selectUser(t[0]):a.props.selectUser({})},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(me,Object.assign({data:this.props.data,handleDelete:this.handleDelete,handleSelect:this.handleSelect,orderBy:this.state.orderBy,rowHeads:this.state.rowHeads,rowsPerPage:10,tableName:this.state.tableName},this.props))}}]),t}(n.Component),Fe=Object(f.withStyles)(xe)(De),Re=Object(u.connect)(function(e){return{data:e.user.list,rows:[]}},{selectUser:function(e){return function(t){t({type:we,isFetching:!1,payload:e})}},deleteUser:function(e){return function(){var t=Object(be.a)(ge.a.mark(function t(a,n){var r,i;return ge.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(JSON.stringify(n())),i=r.user.list.filter(function(t){return t._id!==e}),t.next=4,se("".concat("/api/v1/user/removeUser","/").concat(e));case 4:a(Ne(i,Se));case 5:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},deleteAllUsers:function(){return function(){var e=Object(be.a)(ge.a.mark(function e(t){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se("".concat("/api/v1/user/removeAllUsers"));case 2:t(Ne([],ke));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(Fe),Ae=a(18),Ie=a(54),Be=a.n(Ie),_e=a(37),Le=a(62),Te=a.n(Le),He=a(118),Me=a(246),qe=function(e){var t=e.input,a=e.label,n=e.meta,i=n.touched,c=n.error,l=Object(Me.a)(e,["input","label","meta"]);return r.a.createElement(v.b,Object.assign({label:a,helperText:i&&c,fullWidth:!0,error:i&&c&&c.length>0},t,l))},ze=a(41),We=a.n(ze);var Ve=Object(f.withStyles)(function(e){var t;return{root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%",marginBottom:"10px"},image:(t={position:"relative",height:200},Object(q.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(q.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(2*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px ").concat(e.spacing.unit+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}})(function(e){var t=e.classes,a=e.image,n=e.onClick;return r.a.createElement("div",{className:t.root},r.a.createElement(We.a,{focusRipple:!0,key:a.title,className:t.image,focusVisibleClassName:t.focusVisible,onClick:n,style:{width:a.width}},r.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(a.url,")")}}),r.a.createElement("span",{className:t.imageBackdrop}),r.a.createElement("span",{className:t.imageButton},r.a.createElement(Z.a,{component:"span",variant:"subtitle1",color:"inherit",className:t.imageTitle},a.title,r.a.createElement("span",{className:t.imageMarked})))))}),$e=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).handleButtonCLick=function(e){document.getElementById("contained-button-file").click()},a.state={imageUrl:""},a.handleInputChange=a.handleInputChange.bind(Object(Ae.a)(Object(Ae.a)(a))),a.readURL=a.readURL.bind(Object(Ae.a)(Object(Ae.a)(a))),a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"handleInputChange",value:function(e){var t=this.props.addFile;this.readURL(e.target),t(e)}},{key:"readURL",value:function(e){var t=this;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(e){t.setState({imageUrl:e.target.result})},a.readAsDataURL(e.files[0])}}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.classes,n=e.imageUrl;this.state.imageUrl!==n&&this.setState({imageUrl:n});var i={url:this.state.imageUrl||n,title:"Click to change",width:"100%"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{name:t,type:"file",id:"contained-button-file",accept:"image/*",className:a.input,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"contained-button-file"},i.url?r.a.createElement(Ve,{image:i,onClick:this.handleButtonCLick}):r.a.createElement(Be.a,{component:"span",className:a.button},"Upload")))}}]),t}(n.Component),Je=Object(f.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}})($e),Ze=function(e){return{form:{position:"relative",lineHeight:4,marginTop:"10px"},controll:{padding:2*e.spacing.unit,width:"100"}}},Qe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(h.a)(this,Object(g.a)(t).call(this,e))).equipmentPhoto=r.a.createRef(),a.addImage=a.addImage.bind(Object(Ae.a)(Object(Ae.a)(a))),a.addUser=a.addUser.bind(Object(Ae.a)(Object(Ae.a)(a))),a.updateUser=a.updateUser.bind(Object(Ae.a)(Object(Ae.a)(a))),a.prepareData=a.prepareData.bind(Object(Ae.a)(Object(Ae.a)(a))),a.state={profilePic:"",fileChanged:!1},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"addImage",value:function(e){e.target.files&&e.target.files.length&&this.setState({profilePic:e.target.files[0],fileChanged:!0})}},{key:"prepareData",value:function(e){var t=document.getElementById("userForm"),a=new FormData(t);return this.state.profilePic&&a.append("profilePic",this.state.profilePic,this.state.profilePic.name),this.props.userId&&a.append("id",this.props.userId),a}},{key:"addUser",value:function(e){var t=this;return this.props.addUser(this.prepareData(e)).then(function(e){t.props.reset(),t.setState({profilePic:"",fileChanged:!1})})}},{key:"updateUser",value:function(e){return this.setState({fileChanged:!1}),this.props.reset(),this.props.updateUser(this.prepareData(e),this.props.userId)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.pristine,n=e.submitting,i=e.handleSubmit,c=this.props.imageUrl;return this.state.fileChanged?c=this.state.profilePic:c||(c="/uploads/default.jpeg"),console.log(c),r.a.createElement("div",{className:t.controll},r.a.createElement("form",{id:"userForm",className:t.form,onSubmit:i(this.addUser)},r.a.createElement(_e.Field,{name:"profilePic",type:"file",accept:"image/*",label:"Enter Hobbies sparated by ,",component:Je,imageUrl:c,hidden:!0,addFile:this.addImage}),r.a.createElement(_e.Field,{name:"firstName",component:qe,label:"First Name",type:"text",InputProps:{endAdornment:r.a.createElement(Te.a,{position:"end",style:{color:"gray"}},r.a.createElement(He.b,null))}}),r.a.createElement(_e.Field,{name:"lastName",component:qe,label:"Last Name",type:"text",InputProps:{endAdornment:r.a.createElement(Te.a,{position:"end",style:{color:"gray"}},r.a.createElement(He.b,null))}}),r.a.createElement(_e.Field,{name:"birthDate",component:qe,label:"Birthday",type:"date",InputLabelProps:{shrink:!0},InputProps:{endAdornment:r.a.createElement(Te.a,{position:"end",style:{color:"gray"}},r.a.createElement(He.a,null))}}),r.a.createElement(_e.Field,{name:"hobbies",component:qe,label:"Enter Hobbies sparated by ,",type:"text"}),this.props.userId?r.a.createElement(Be.a,{variant:"text",size:"large",disabled:!this.state.fileChanged&&(a||n),color:"secondary",onClick:i(this.updateUser)},"Update User"):r.a.createElement(Be.a,{variant:"text",size:"large",disabled:a||n,color:"secondary",type:"submit"},"Add User")))}}]),t}(r.a.Component),Ge=Object(_e.reduxForm)({form:"userForm",validate:function(e){var t={};return["firstName","birthDate"].forEach(function(a){e[a]||(t[a]="This Field is Required")}),e.email&&!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)&&(t.email="Invalid email address"),t},enableReinitialize:!0})(Qe),Xe=Object(u.connect)(function(e){var t=e.user,a=t.selected;return{initialValues:t&&a,userId:a&&a._id,imageUrl:a?a.profilePic:"/uploads/default.jpeg"}},{addUser:function(e){return function(t){return t(Ce(e,fe)),se("/api/v1/user/addUser",e).then(function(e){var a=e.data,n=a.success,r=a.data,i=a.error;if(!n)return t(Pe(i,ye)),Promise.reject(r);t(Ne(r,Ee))}).catch(function(e){return console.log("Error: ",e)})}},updateUser:function(e,t){return function(a){return a(Ce(e,ve)),se("".concat("/api/v1/user/updateUser","/").concat(t),e).then(function(e){var t=e.data,n=t.success,r=t.data,i=t.error;if(!n)return a(Pe(i,Oe)),Promise.reject(i);a(Ne(r,je))}).catch(function(e){return console.log("Error: ",e)})}}})(Object(f.withStyles)(Ze)(Ge)),Ke=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1},a}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(y.a,{container:!0,spacing:16},r.a.createElement(v.a,{smDown:!0},r.a.createElement(y.a,{item:!0,md:4},r.a.createElement(Xe,null)),r.a.createElement(y.a,{item:!0,md:8},r.a.createElement(Re,null))),r.a.createElement(v.a,{smUp:!0},this.state.editing?r.a.createElement(y.a,{item:!0,xs:12,sm:12},r.a.createElement(Re,null)):r.a.createElement(y.a,{item:!0,xs:12,sm:12},r.a.createElement(Xe,null))))}}]),t}(r.a.Component),Ye=[{path:"/",name:"UserComponent",component:Object(f.withStyles)(function(e){return{root:{flexGrow:1},paper:{width:"100%"},control:{padding:2*e.spacing.unit}}})(Ke)}],et=a(32),tt=a(241),at=a.n(tt),nt=a(242),rt=a(245),it={isFetching:!1,isEditing:!1,list:[]};var ct=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:it,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object.assign({},e,{isFetching:!0});case Ee:return Object.assign({},e,{isFetching:!1,list:[].concat(Object(rt.a)(e.list),[t.payload])});case ye:case Oe:return Object.assign({},e,{isFetching:!1,errorMessage:t.payload.errorMessage});case je:return Object.assign({},e,{isFetching:!1,list:t.payload});case ve:return Object.assign({},e,{isFetching:!0});case we:return Object.assign({},e,{isFetching:!1,selected:t.payload});case Se:return Object.assign({},e,{isFetching:!1,selected:{},list:t.payload});case ke:return Object.assign({},e,{isFetching:!1,selected:{},list:[]});default:return e}},lt=Object(et.combineReducers)({user:ct,form:_e.reducer}),ot=[nt.a,at.a],st={},dt=Object(l.a)();ue().then(function(e){return Object(et.createStore)(lt,e,et.applyMiddleware.apply(void 0,ot))}).catch(function(e){var t=Object(et.createStore)(lt,st,et.applyMiddleware.apply(void 0,ot));return console.log("opened with error",e),t}).then(function(e){c.a.render(r.a.createElement(u.Provider,{store:e},r.a.createElement(o.a,{history:dt},r.a.createElement(s.a,null,Ye.map(function(e,t){return r.a.createElement(d.a,{path:e.path,key:t,component:e.component})})))),document.getElementById("root"))})}},[[5524,2,1]]]);
//# sourceMappingURL=main.9b53c160.chunk.js.map