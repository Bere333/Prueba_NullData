(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{197:function(e,t,a){e.exports=a(404)},202:function(e,t,a){},203:function(e,t,a){},404:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),o=a.n(r),i=(a(202),a(35)),c=a(41),m=(a(203),a(28)),u=a(457),s=a(441),g=Object(s.a)((function(e){return{root:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200},button:{margin:e.spacing(1)},table:{minWidth:650}}})),d=a(448),b=a(449);var p=[],E=a(458),h=a(446),f=a(183),v=a.n(f),y=a(447);function S(){var e=g(),t=Object(n.useState)(" "),a=Object(m.a)(t,2),r=a[0],o=a[1],c=Object(n.useState)(" "),s=Object(m.a)(c,2),f=s[0],S=s[1],x=Object(n.useState)(" "),j=Object(m.a)(x,2),I=j[0],O=j[1],w=l.a.useState(!0),C=Object(m.a)(w,2),k=C[0],N=C[1],F=Object(n.useState)(" "),R=Object(m.a)(F,2),A=R[0],z=R[1],D=Object(n.useState)(" "),L=Object(m.a)(D,2),M=L[0],P=L[1],W=Object(n.useState)(" "),J=Object(m.a)(W,2),B=J[0],U=J[1],V=Object(n.useState)(" "),G=Object(m.a)(V,2),Z=G[0],H=G[1];return l.a.createElement("form",{className:e.root,noValidate:!0,autoComplete:"off",style:{textAlign:"center",display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("div",null,l.a.createElement(u.a,{id:"outlined-full-width",label:"Nombre completo",style:{margin:8},placeholder:"Introduce tu nombre completo",margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){o(e.target.value)}}),l.a.createElement(u.a,{id:"outlined-full-width",label:"Correo",style:{margin:8},placeholder:"Introduce tu correo",margin:"normal",InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){S(e.target.value)}}),l.a.createElement(u.a,{id:"date",label:"Fecha de nacimiento",type:"date",style:{margin:8},defaultValue:"2020-01-01",className:e.textField,InputLabelProps:{shrink:!0},variant:"outlined",onChange:function(e){O(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",fontSize:"20px",fontFamily:"'Roboto', sans-serif"}},"Direcci\xf3n:"),l.a.createElement("div",null,l.a.createElement(u.a,{label:"Calle",id:"outlined-margin-normal",className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){z(e.target.value)}}),l.a.createElement(u.a,{label:"Num ext",id:"outlined-margin-normal",className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){P(e.target.value)}}),l.a.createElement(u.a,{label:"Colonia",id:"outlined-margin-normal",className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){U(e.target.value)}}),l.a.createElement(u.a,{label:"Estado",id:"outlined-margin-normal",className:e.textField,margin:"normal",variant:"outlined",onChange:function(e){null===e.target.value||" "===r||" "===f?N(k):(H(e.target.value),N(!1))}}))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("div",null,l.a.createElement(h.a,{in:k,style:{width:"70rem",margin:"0rem 2rem 2rem 4.5rem"}},l.a.createElement(E.a,{action:l.a.createElement(y.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){N(!1)}},l.a.createElement(v.a,{fontSize:"inherit"})),variant:"outlined",severity:"error"},"Introduce los campos faltantes")),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/registros",style:{textDecoration:"none"}},l.a.createElement(d.a,{variant:"contained",color:"secondary",className:e.button,sendIcon:l.a.createElement(b.a,null,"send"),onClick:function(){localStorage.setItem("nombredeusuario",r),localStorage.setItem("emaildeusuario",f),localStorage.setItem("nacimientodeusuario",I),localStorage.setItem("calledeusuario",A),localStorage.setItem("numextdeusuario",M),localStorage.setItem("colonydeusuario",B),localStorage.setItem("statedeusuario",Z),p.push(function(e,t,a,n,l,r,o){return{name:e,email:t,birthday:a,direction:n,numext:l,colony:r,state:o}}(localStorage.getItem("nombredeusuario"),localStorage.getItem("emaildeusuario"),localStorage.getItem("nacimientodeusuario"),localStorage.getItem("calledeusuario"),localStorage.getItem("numextdeusuario"),localStorage.getItem("colonydeusuario"),localStorage.getItem("statedeusuario")))," "!==localStorage.getItem("nombredeusuario")&&" "!==localStorage.getItem("emaildeusuario")&&" "!==localStorage.getItem("nacimientodeusuario")?N(!1):N(!0)}},"Registrar"))))}var x=function(){return l.a.createElement("section",{className:"section-register",style:{display:"flex",justifyContent:"center",flexDirection:"column"}},l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",{style:{textAlign:"center",fontSize:"30px",fontFamily:"'Roboto', sans-serif"}},"Registro de empleados"),l.a.createElement("h2",{style:{textAlign:"center",fontSize:"20px",fontFamily:"'Roboto', sans-serif"}},"Datos personales:"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(S,null))},j=a(451),I=a(455),O=a(454),w=a(450),C=a(452),k=a(453),N=a(445);function F(){var e=g();return l.a.createElement(w.a,{component:N.a},l.a.createElement(j.a,{className:e.table,"aria-label":"simple table"},l.a.createElement(C.a,null,l.a.createElement(k.a,null,l.a.createElement(O.a,{align:"center"},"Nombre de empleado"),l.a.createElement(O.a,{align:"center"},"Email"),l.a.createElement(O.a,{align:"center"},"Fecha de nacimiento"),l.a.createElement(O.a,{align:"center"},"Direcci\xf3n"),l.a.createElement(O.a,{align:"center"},"Ver ubicaci\xf3n"))),l.a.createElement(I.a,null,p.map((function(e){return l.a.createElement(k.a,{key:e.name},l.a.createElement(O.a,{align:"center",component:"th",scope:"row"},e.name),l.a.createElement(O.a,{align:"center"},e.email),l.a.createElement(O.a,{align:"center"},e.birthday),l.a.createElement(O.a,{align:"center"},e.direction,",",e.numext,",",e.colony,",",e.state),l.a.createElement(O.a,{align:"center"},l.a.createElement(i.b,{to:"/ubicacion",style:{textDecoration:"none"}},l.a.createElement(d.a,{variant:"contained",color:"secondary",align:"center"},"Ubicaci\xf3n"))))})))))}var R=a(456),A=a(185),z=a.n(A);function D(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Registro de empleados"),l.a.createElement(F,null),l.a.createElement("br",null),l.a.createElement(i.b,{to:"/"},l.a.createElement(R.a,{color:"secondary","aria-label":"add"},l.a.createElement(z.a,null))))}var L=a(89),M=a(38),P=a(186),W=a(187),J=a(190),B=a(64),U=a(65),V=Object(B.compose)(Object(B.withProps)({googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyC5MktJlULerOZZM3lh1tJRaRyQAkxbSh4&v&v=3.exp&libraries=geometry,drawing,places",loadingElement:l.a.createElement("div",{style:{height:"100%"}}),containerElement:l.a.createElement("div",{style:{height:"400px"}}),mapElement:l.a.createElement("div",{style:{height:"100%"}})}),U.withScriptjs,U.withGoogleMap)((function(e){return l.a.createElement(G,{p:e})})),G=function(e){function t(e){var a;return Object(L.a)(this,t),(a=Object(P.a)(this,Object(W.a)(t).call(this,e))).state={lat:-34.397,lng:150.644},a}return Object(J.a)(t,e),Object(M.a)(t,[{key:"componentWillMount",value:function(){var e=this;navigator.geolocation?navigator.geolocation.watchPosition((function(t){e.setState({lat:t.coords.latitude,lng:t.coords.longitude})}),(function(e){return console.log(e)}),{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e4}):alert("El navegador no soporta la geolocalizaci\xf3n,")}},{key:"render",value:function(){var e=this,t=this.props.p,a=this.state,n=a.lat,r=a.lng;return console.log(n,r),l.a.createElement("div",null,l.a.createElement(U.GoogleMap,{ref:function(t){if(e.map=t,t&&n&&r){var a=new window.google.maps.LatLngBounds({lat:n,lng:r});console.log(a),t.panTo({lat:n,lng:r})}},zoom:16,defaultCenter:{lat:n,lng:r}},t.isMarkerShown&&l.a.createElement(U.Marker,{position:{lat:n,lng:r}})),n," ",l.a.createElement("br",null),r)}}]),t}(l.a.Component);var Z=function(){return l.a.createElement(i.a,{basename:"/Prueba_NullData"},l.a.createElement(c.a,{exact:!0,path:"/",component:x}),l.a.createElement(c.a,{path:"/registros",component:D}),l.a.createElement(c.a,{path:"/ubicacion",component:V}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(Z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[197,1,2]]]);
//# sourceMappingURL=main.7d14a412.chunk.js.map