(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{5523:function(e,t,a){e.exports=a(5892)},5892:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(27),c=a.n(i),l=a(252),s=a(5894),o=a(5895),d=a(5896),u=a(18),p=a(19),h=a(20),m=a(22),g=a(21),b=a(23),f=a(14),E=a(66),v=a.n(E),y=a(54),j=a(118),O=a.n(j),S=a(119),k=a.n(S),w=a(26),U=a.n(w),C=a(120),P=a.n(C),N=a(52),x=a.n(N),D=a(80),F=a.n(D),R=a(43),A=a.n(R),_=a(114),I=a.n(_),B=a(115),T=a.n(B),L=a(53),H=a.n(L),z=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).createSortHandler=function(e){return function(t){a.props.onRequestSort(t,e)}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.onSelectAllClick,n=t.order,i=t.orderBy,c=t.numSelected,l=t.rowCount,s=this.props.rows||[];return r.a.createElement(I.a,null,r.a.createElement(x.a,null,r.a.createElement(U.a,{padding:"checkbox"},r.a.createElement(A.a,{indeterminate:c>0&&c<l,checked:c===l,onChange:a})),s.map(function(t){return r.a.createElement(U.a,{key:t.id,numeric:t.numeric,padding:t.disablePadding?"none":"default",sortDirection:i===t.id&&n},r.a.createElement(H.a,{title:"Sort",placement:t.numeric?"bottom-end":"bottom-start",enterDelay:300},r.a.createElement(T.a,{active:i===t.id,direction:n,onClick:e.createSortHandler(t.id)},t.label)))},this)))}}]),t}(r.a.Component),M=a(84),W=a(6),q=a.n(W),V=a(79),$=a.n(V),J=a(29),G=a.n(J),Q=a(51),X=a.n(Q),Z=a(116),K=a.n(Z),Y=a(117),ee=a.n(Y),te=a(63),ae=function(e){var t=e.numSelected,a=e.classes,n=e.tableName,i=e.handleDelete,c=e.selected;return r.a.createElement($.a,{className:q()(a.root,Object(M.a)({},a.highlight,t>0))},r.a.createElement("div",{className:a.title},t>0?r.a.createElement(G.a,{color:"inherit",variant:"subheading"},t," selected"):r.a.createElement(G.a,{variant:"title",id:"tableTitle"},n)),r.a.createElement("div",{className:a.spacer}),r.a.createElement("div",{className:a.actions},t>0?r.a.createElement(H.a,{title:"Delete"},r.a.createElement(X.a,{"aria-label":"Delete"},r.a.createElement(K.a,{onClick:function(){return i(c)}}))):r.a.createElement(H.a,{title:"Filter list"},r.a.createElement(X.a,{"aria-label":"Filter list"},r.a.createElement(ee.a,null)))))},ne=ae=Object(f.withStyles)(function(e){return{root:{paddingRight:e.spacing.unit},highlight:"light"===e.palette.type?{color:e.palette.secondary.main,backgroundColor:Object(te.lighten)(e.palette.secondary.light,.85)}:{color:e.palette.text.primary,backgroundColor:e.palette.secondary.dark},spacer:{flex:"1 1 100%"},actions:{color:e.palette.text.secondary},title:{flex:"0 0 auto"}}})(ae),re=a(64),ie=a.n(re),ce=a(170),le=a.n(ce),se=function(){var e=localStorage.getItem("id_token");return{headers:{Authorization:e?"Bearer ".concat(e):""}}},oe=function(e,t){var a=se();return le.a.post(e,t,a)},de=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_id";return e.filter(function(e){return e[a]===t})},ue=function(e){return new Promise(function(t,a){(function(e,t){var a=se();return le.a.get(e,a)})(e).then(function(e){var n=e.data,r=n.success,i=n.data;if(!r)return a(e);t({user:{list:i||[]}})}).catch(function(e){a(new Error("Error: ",e))})})};function pe(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var he=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={order:"asc",orderBy:a.props.orderBy||"",selected:[],data:a.props.data||[],page:0,rowsPerPage:a.props.rowsPerPage||10},a.handleRequestSort=function(e,t){var n=t,r="desc";a.state.orderBy===t&&"desc"===a.state.order&&(r="asc"),a.setState({order:r,orderBy:n})},a.handleSelectAllClick=function(e,t){t?a.setState(function(e){return{selected:e.data.map(function(e){return e.id})}}):a.setState({selected:[]});var n=a.state.selected.length;n&&a.props.handleSelect(a.state.selected[n-1])},a.handleClick=function(e,t){var n=a.state.selected.indexOf(t),r=[];-1===n?r=[t]:0===n&&(r=[]),a.setState({selected:r}),r.length?a.props.handleSelect(t):a.props.handleSelect("")},a.handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.handleDeleteClick=function(e){a.handleSelectAllClick(),a.props.handleDelete(e)},a.isSelected=function(e){return-1!==a.state.selected.indexOf(e)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.tableName,i=this.state,c=i.data,l=i.order,s=i.orderBy,o=i.selected,d=i.rowsPerPage,u=i.page,p=d-Math.min(d,c.length-u*d);return r.a.createElement(F.a,{className:a.root},r.a.createElement(ne,{selected:o,numSelected:o.length,tableName:n,handleDelete:this.handleDeleteClick}),r.a.createElement("div",{className:a.tableWrapper},r.a.createElement(O.a,{className:a.table,"aria-labelledby":"tableTitle"},r.a.createElement(z,{rows:this.props.rowHeads,numSelected:o.length,order:l,orderBy:s,onSelectAllClick:this.handleSelectAllClick,onRequestSort:this.handleRequestSort,rowCount:c.length}),r.a.createElement(k.a,null,this.props.data.sort(function(e,t){return"desc"===e?function(e,a){return pe(e,a,t)}:function(e,a){return-pe(e,a,t)}}(l,s)).slice(u*d,u*d+d).map(function(t){var a=e.isSelected(t._id);return r.a.createElement(x.a,{hover:!0,onClick:function(a){return e.handleClick(a,t._id)},role:"checkbox","aria-checked":a,tabIndex:-1,key:t._id,selected:a},r.a.createElement(U.a,{padding:"checkbox"},r.a.createElement(A.a,{checked:a})),r.a.createElement(U.a,{component:"th",scope:"row",padding:"none"},t.firstName.length>30?t.firstName.substring(0,25)+"... ":t.firstName),r.a.createElement(U.a,{padding:"none"},t.lastName),r.a.createElement(U.a,{padding:"none"},t.hobbies),r.a.createElement(U.a,{padding:"none"},t.birthDate),r.a.createElement(U.a,{scope:"row",padding:"none"},r.a.createElement(ie.a,{alt:"Remy Sharp",src:t.profilePic})))}),p>0&&r.a.createElement(x.a,{style:{height:49*p}},r.a.createElement(U.a,{colSpan:4}))))),r.a.createElement(P.a,{component:"div",count:c.length,rowsPerPage:d,page:u,backIconButtonProps:{"aria-label":"Previous Page"},nextIconButtonProps:{"aria-label":"Next Page"},onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage}))}}]),t}(r.a.Component),me=a(85),ge=a.n(me),be=a(171),fe="ADD_USER_REQUEST",Ee="ADD_USER_SUCCESS",ve="ADD_USER_FAILURE",ye="UPDATE_USER_REQUEST",je="UPDATE_USER_SUCCESS",Oe="UPDATE_USER_FAILURE",Se="DELETE_USER",ke="DELETE_ALL_USERS",we="SELECT_USER",Ue=[{id:"firstName",numeric:!1,disablePadding:!0,label:"FirstName"},{id:"lastName",numeric:!1,disablePadding:!1,label:"LastName"},{id:"hobbies",numeric:!1,disablePadding:!1,label:"Hobbies"},{id:"birthDate",numeric:!1,disablePadding:!1,label:"BirthDate"},{id:"url",numeric:!1,disablePadding:!1,label:"Profile"}],Ce=30,Pe=/^[a-zA-Z ]{2,30}$/;function Ne(e,t){return{type:t,isFetching:!0,payload:e}}function xe(e,t){return{type:t,isFetching:!0,payload:e}}function De(e,t){return{type:t,isFetching:!0,payload:e}}var Fe=function(e){return function(){var t=Object(be.a)(ge.a.mark(function t(a,n){var r,i;return ge.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=JSON.parse(JSON.stringify(n())),i=r.user.list.filter(function(t){return t._id!==e}),t.next=4,oe("".concat("/api/v1/user/removeUser","/").concat(e));case 4:a(De(i,Se));case 5:case"end":return t.stop()}},t,this)}));return function(e,a){return t.apply(this,arguments)}}()},Re=function(e){return function(t){t({type:we,isFetching:!1,payload:e})}},Ae=function(e){return{root:{width:"100%",marginTop:3*e.spacing.unit},table:{minWidth:1020},tableWrapper:{overflowX:"auto"}}},_e=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={rowHeads:Ue,tableName:"Users",orderBy:"firstName"},a.handleDelete=function(e){1===e.length?a.props.deleteUser(e[0]):a.props.deleteAllUsers()},a.handleSelect=function(e){var t=de(a.props.data,e);t.length?a.props.selectUser(t[0]):a.props.selectUser({})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(he,Object.assign({data:this.props.data,handleDelete:this.handleDelete,handleSelect:this.handleSelect,orderBy:this.state.orderBy,rowHeads:this.state.rowHeads,rowsPerPage:10,tableName:this.state.tableName},this.props))}}]),t}(n.Component),Ie=Object(f.withStyles)(Ae)(_e),Be=Object(u.connect)(function(e){return{data:e.user.list}},{selectUser:Re,deleteUser:Fe,deleteAllUsers:function(){return function(){var e=Object(be.a)(ge.a.mark(function e(t){return ge.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe("".concat("/api/v1/user/removeAllUsers"));case 2:t(De([],ke));case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}})(Ie),Te=a(24),Le=a(55),He=a.n(Le),ze=a(39),Me=a(65),We=a.n(Me),qe=a(38);var Ve=a(253),$e=function(e){var t=e.input,a=e.label,n=e.meta,i=n.touched,c=n.error,l=Object(Ve.a)(e,["input","label","meta"]);return r.a.createElement(y.b,Object.assign({label:a,helperText:i&&c,fullWidth:!0,error:i&&c&&c.length>0},t,l))},Je=a(37),Ge=a.n(Je);var Qe=Object(f.withStyles)(function(e){var t;return{root:{display:"flex",flexWrap:"wrap",minWidth:300,width:"100%",marginBottom:"10px"},image:(t={position:"relative",height:200},Object(M.a)(t,e.breakpoints.down("xs"),{width:"100% !important",height:100}),Object(M.a)(t,"&:hover, &$focusVisible",{zIndex:1,"& $imageBackdrop":{opacity:.15},"& $imageMarked":{opacity:0},"& $imageTitle":{border:"4px solid currentColor"}}),t),focusVisible:{},imageButton:{position:"absolute",left:0,right:0,top:0,bottom:0,display:"flex",alignItems:"center",justifyContent:"center",color:e.palette.common.white},imageSrc:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundSize:"cover",backgroundPosition:"center 40%"},imageBackdrop:{position:"absolute",left:0,right:0,top:0,bottom:0,backgroundColor:e.palette.common.black,opacity:.4,transition:e.transitions.create("opacity")},imageTitle:{position:"relative",padding:"".concat(2*e.spacing.unit,"px ").concat(4*e.spacing.unit,"px ").concat(e.spacing.unit+6,"px")},imageMarked:{height:3,width:18,backgroundColor:e.palette.common.white,position:"absolute",bottom:-2,left:"calc(50% - 9px)",transition:e.transitions.create("opacity")}}})(function(e){var t=e.classes,a=e.image,n=e.onClick;return r.a.createElement("div",{className:t.root},r.a.createElement(Ge.a,{focusRipple:!0,key:a.title,className:t.image,focusVisibleClassName:t.focusVisible,onClick:n,style:{width:a.width}},r.a.createElement("span",{className:t.imageSrc,style:{backgroundImage:"url(".concat(a.url,")")}}),r.a.createElement("span",{className:t.imageBackdrop}),r.a.createElement("span",{className:t.imageButton},r.a.createElement(G.a,{component:"span",variant:"subtitle1",color:"inherit",className:t.imageTitle},a.title,r.a.createElement("span",{className:t.imageMarked})))))}),Xe=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).handleButtonCLick=function(e){document.getElementById("contained-button-file").click()},a.state={imageUrl:""},a.handleInputChange=a.handleInputChange.bind(Object(Te.a)(Object(Te.a)(a))),a.readURL=a.readURL.bind(Object(Te.a)(Object(Te.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"handleInputChange",value:function(e){var t=this.props.addFile;this.readURL(e.target),t(e)}},{key:"readURL",value:function(e){var t=this;if(e.files&&e.files[0]){var a=new FileReader;a.onload=function(e){t.setState({imageUrl:e.target.result})},a.readAsDataURL(e.files[0])}}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.classes,n=e.imageUrl;this.state.imageUrl!==n&&this.setState({imageUrl:n});var i={url:this.state.imageUrl||n,title:"Click to change",width:"100%"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{name:t,type:"file",id:"contained-button-file",accept:"image/*",className:a.input,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"contained-button-file"},i.url?r.a.createElement(Qe,{image:i,onClick:this.handleButtonCLick}):r.a.createElement(He.a,{component:"span",className:a.button},"Upload")))}}]),t}(n.Component),Ze=Object(f.withStyles)(function(e){return{button:{margin:e.spacing.unit},input:{display:"none"}}})(Xe),Ke=function(e){return{form:{position:"relative",lineHeight:4,marginTop:"10px"},controll:{padding:2*e.spacing.unit,width:"100"}}},Ye=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(m.a)(this,Object(g.a)(t).call(this,e))).equipmentPhoto=r.a.createRef(),a.addImage=a.addImage.bind(Object(Te.a)(Object(Te.a)(a))),a.addUser=a.addUser.bind(Object(Te.a)(Object(Te.a)(a))),a.updateUser=a.updateUser.bind(Object(Te.a)(Object(Te.a)(a))),a.prepareData=a.prepareData.bind(Object(Te.a)(Object(Te.a)(a))),a.state={profilePic:"",fileChanged:!1},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"addImage",value:function(e){e.target.files&&e.target.files.length&&this.setState({profilePic:e.target.files[0],fileChanged:!0})}},{key:"prepareData",value:function(e){var t=document.getElementById("userForm"),a=new FormData(t);return this.state.profilePic&&a.append("profilePic",this.state.profilePic,this.state.profilePic.name),this.props.userId&&a.append("id",this.props.userId),a}},{key:"addUser",value:function(e){var t=this;return this.props.addUser(this.prepareData(e)).then(function(e){t.props.reset(),t.setState({profilePic:"",fileChanged:!1})})}},{key:"updateUser",value:function(e){return this.setState({fileChanged:!1}),this.props.reset(),this.props.updateUser(this.prepareData(e),this.props.userId)}},{key:"render",value:function(){var e=this.props,t=e.classes,a=e.pristine,n=e.submitting,i=e.handleSubmit,c=this.props.imageUrl;return this.state.fileChanged?c=this.state.profilePic:c||(c="/uploads/default.jpeg"),r.a.createElement("div",{className:t.controll},r.a.createElement("form",{id:"userForm",className:t.form,onSubmit:i(this.addUser)},r.a.createElement(ze.Field,{name:"profilePic",type:"file",accept:"image/*",label:"Enter Hobbies sparated by ,",component:Ze,imageUrl:c,hidden:!0,addFile:this.addImage}),r.a.createElement(ze.Field,{name:"firstName",component:$e,label:"First Name",type:"text",InputProps:{endAdornment:r.a.createElement(We.a,{position:"end",style:{color:"gray"}},r.a.createElement(qe.e,null))}}),r.a.createElement(ze.Field,{name:"lastName",component:$e,label:"Last Name",type:"text",InputProps:{endAdornment:r.a.createElement(We.a,{position:"end",style:{color:"gray"}},r.a.createElement(qe.e,null))}}),r.a.createElement(ze.Field,{name:"birthDate",component:$e,label:"Birthday",type:"date",InputLabelProps:{shrink:!0},InputProps:{endAdornment:r.a.createElement(We.a,{position:"end",style:{color:"gray"}},r.a.createElement(qe.a,null))}}),r.a.createElement(ze.Field,{name:"hobbies",component:$e,label:"Enter Hobbies sparated by ,",type:"text"}),this.props.userId?r.a.createElement(He.a,{variant:"text",size:"large",disabled:!this.state.fileChanged&&(a||n),color:"secondary",onClick:i(this.updateUser)},"Update User"):r.a.createElement(He.a,{variant:"text",size:"large",disabled:a||n,color:"secondary",type:"submit"},"Add User")))}}]),t}(r.a.Component),et=Object(ze.reduxForm)({form:"userForm",validate:function(e){var t={};return["firstName","birthDate"].forEach(function(a){e[a]||(t[a]="This Field is Required")}),["firstName","lastName"].forEach(function(a){var n=e[a];n&&Object.assign(t,function(e,t){var a={};return e.length>Ce?a[t]="Length should be less than ".concat(Ce):Pe.test(e)||(a[t]="Name should contain atleast 2 letter"),a}(n,a))}),t},enableReinitialize:!0})(Ye),tt=Object(u.connect)(function(e){var t=e.user,a=t.selected;return{initialValues:t&&a,userId:a&&a._id,imageUrl:a?a.profilePic:"/uploads/default.jpeg"}},{addUser:function(e){return function(t){return t(Ne(e,fe)),oe("/api/v1/user/addUser",e).then(function(e){var a=e.data,n=a.success,r=a.data,i=a.error;if(!n)return t(xe(i,ve)),Promise.reject(r);t(De(r,Ee))}).catch(Promise.reject)}},updateUser:function(e,t){return function(a){return a(Ne(e,ye)),oe("".concat("/api/v1/user/updateUser","/").concat(t),e).then(function(e){var t=e.data,n=t.success,r=t.data,i=t.error;if(!n)return a(xe(i,Oe)),Promise.reject(i);a(De(r,je))}).catch(Promise.reject)}}})(Object(f.withStyles)(Ke)(et)),at=a(128),nt=a(82),rt=a.n(nt),it=a(81),ct=a.n(it),lt=a(123),st=a.n(lt),ot=a(122),dt=a.n(ot),ut=a(121),pt=a.n(ut),ht=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={checked:a.props.selected._id?[a.props.selected._id]:[],edit:!1,delete:!1},a.handleToggle=function(e){return function(){var t=a.state.checked,n=t.indexOf(e),r=Object(at.a)(t),i=de(a.props.data,e);-1===n?(r=[e],a.props.selectUser(i[0])):(r=[],a.props.selectUser({})),a.setState({checked:r})}},a.handleDelete=function(e){return function(){a.props.deleteUser(e)}},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.data,i=function(e){var t="".concat(e.firstName||""," ").concat(e.lastName||"");return t.length>30?t.substring(0,25)+"...":t};return r.a.createElement(rt.a,{dense:!0,className:a.root},n.map(function(t){return r.a.createElement(ct.a,{key:t._id,button:!0},r.a.createElement(pt.a,null,r.a.createElement(ie.a,{alt:"Avatar n\xb0".concat(1),src:t.profilePic})),r.a.createElement(dt.a,{primary:i(t),secondary:r.a.createElement(r.a.Fragment,null,r.a.createElement(G.a,{component:"span",className:a.inline,color:"textPrimary"},t.birthDate),t.hobbies)}),r.a.createElement(st.a,null,r.a.createElement(A.a,{onChange:e.handleToggle(t._id),checked:-1!==e.state.checked.indexOf(t._id)})))}))}}]),t}(r.a.Component),mt=Object(f.withStyles)(function(e){return{root:{width:"100%",maxWidth:360,backgroundColor:e.palette.background.paper,height:"90%",overflow:"auto",position:"absolute"}}})(ht),gt=Object(u.connect)(function(e){return{data:e.user.list,selected:e.user.selected||{}}},{selectUser:Re})(mt),bt=a(124),ft=a.n(bt),Et=a(83),vt=a.n(Et),yt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={value:0},a.handleChange=function(e,t){t!==a.state.value&&(a.setState({value:t}),a.props.handleChange())},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.selected,n=this.state.value;return r.a.createElement(ft.a,{value:n,onChange:this.handleChange,showLabels:!0,className:t.root},r.a.createElement(vt.a,{label:a?"Edit User":"User Form",icon:r.a.createElement(qe.d,null)}),r.a.createElement(vt.a,{label:"User Table",icon:r.a.createElement(qe.c,null)}))}}]),t}(r.a.Component),jt=Object(f.withStyles)({root:{width:"100%",position:"fixed",bottom:"0"}})(yt),Ot=Object(u.connect)(function(e){return{selected:!!e.user.selected&&!!e.user.selected._id}},{})(jt),St=a(125),kt=a.n(St),wt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1},a.handleChange=function(){a.setState({editing:!a.state.editing})},a.handleDelete=function(){var e=a.props,t=e.deleteUser,n=e.selectedUser;n&&n._id&&t(n._id)},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props,t=e.selected,a=e.classes;return r.a.createElement(r.a.Fragment,null,this.state.editing?r.a.createElement(gt,null):r.a.createElement(tt,null),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(kt.a,{color:"secondary",className:a.fab,"aria-label":"Delete User",onClick:this.handleDelete},r.a.createElement(qe.b,null))):r.a.createElement("div",null),r.a.createElement(Ot,{handleChange:this.handleChange}))}}]),t}(r.a.Component),Ut=Object(f.withStyles)(function(e){return{root:{flexGrow:1},paper:{width:"100%"},control:{padding:2*e.spacing.unit},fab:{position:"absolute",bottom:20,right:12,"z-index":5}}})(wt),Ct=Object(u.connect)(function(e){return{selected:!!e.user.selected&&!!e.user.selected._id,selectedUser:e.user.selected||{}}},{deleteUser:Fe})(Ut),Pt=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={editing:!1},a.handleChange=function(){a.setState({editing:!a.state.editing})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,{container:!0,spacing:16},r.a.createElement(y.a,{smDown:!0},r.a.createElement(v.a,{item:!0,md:4},r.a.createElement(tt,null)),r.a.createElement(v.a,{item:!0,md:8},r.a.createElement(Be,null))),r.a.createElement(y.a,{smUp:!0},r.a.createElement(Ct,null)))}}]),t}(r.a.Component),Nt=[{path:"/",name:"UserComponent",component:Object(f.withStyles)(function(e){return{root:{flexGrow:1},paper:{width:"100%"},control:{padding:2*e.spacing.unit}}})(Pt)}],xt=a(33),Dt=a(250),Ft={isFetching:!1,isEditing:!1,list:[]};var Rt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ft,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case fe:return Object.assign({},e,{isFetching:!0});case Ee:return Object.assign({},e,{isFetching:!1,list:[].concat(Object(at.a)(e.list),[t.payload])});case ve:case Oe:return Object.assign({},e,{isFetching:!1,errorMessage:t.payload.errorMessage});case je:return Object.assign({},e,{isFetching:!1,list:t.payload});case ye:return Object.assign({},e,{isFetching:!0});case we:return Object.assign({},e,{isFetching:!1,selected:t.payload});case Se:return Object.assign({},e,{isFetching:!1,selected:{},list:t.payload});case ke:return Object.assign({},e,{isFetching:!1,selected:{},list:[]});default:return e}},At=Object(xt.combineReducers)({user:Rt,form:ze.reducer}),_t=[Dt.a],It={},Bt=Object(l.a)();ue("/api/v1/user").then(function(e){return Object(xt.createStore)(At,e,xt.applyMiddleware.apply(void 0,_t))}).catch(function(e){return Object(xt.createStore)(At,It,xt.applyMiddleware.apply(void 0,_t))}).then(function(e){c.a.render(r.a.createElement(u.Provider,{store:e},r.a.createElement(s.a,{history:Bt},r.a.createElement(o.a,null,Nt.map(function(e,t){return r.a.createElement(d.a,{path:e.path,key:t,component:e.component})})))),document.getElementById("root"))})}},[[5523,2,1]]]);
//# sourceMappingURL=main.90a452d5.chunk.js.map