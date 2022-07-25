"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[103],{4103:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(885),o=n(2791),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i="ContactForm_form__dhl+T",l="ContactForm_label__-cVXI",c="ContactForm_input__Bl93P",s="ContactForm_button__eSwX9",u=n(1279),d=n(184);var m=function(){var e=(0,o.useState)(""),t=(0,r.Z)(e,2),n=t[0],m=t[1],v=(0,o.useState)(""),f=(0,r.Z)(v,2),h=f[0],p=f[1],g=(0,u.Jx)().data,b=(0,u.Ol)(),x=(0,r.Z)(b,1)[0],S=function(e){var t=e.currentTarget,n=t.name,r=t.value;switch(n){case"name":m(r);break;case"number":p(r);break;default:console.warn("".concat(n," is not processed"))}},Z=function(){m(""),p("")};return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("form",{className:i,onSubmit:function(e){e.preventDefault();var t={id:a(),name:n,number:h};!function(e){return g.find((function(t){return t.name.toLowerCase()===e.toLowerCase()}))}(t.name)?x(t)&&Z():alert("".concat(t.name," is already in contacts."))},children:[(0,d.jsx)("label",{className:l,children:"Name"}),(0,d.jsx)("input",{className:c,value:n,onChange:S,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,d.jsx)("label",{className:l,children:"Number"}),(0,d.jsx)("input",{className:c,value:h,onChange:S,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,d.jsx)("button",{className:s,type:"submit",children:"Add contacts"})]})})},v=n(1413),f="ContactListItem_listItem__upGA2",h="ContactListItem_itemElement__OeqO4",p="ContactListItem_button__SG6H2",g=n(3366),b=n(7462),x=n(8182),S=n(4419),Z=n(7630),w=n(1046),_=n(4036),y=n(1217),j=n(5878);function k(e){return(0,y.Z)("MuiSvgIcon",e)}(0,j.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var C=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],z=(0,Z.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,"inherit"!==n.color&&t["color".concat((0,_.Z)(n.color))],t["fontSize".concat((0,_.Z)(n.fontSize))]]}})((function(e){var t,n,r,o,a,i,l,c,s,u,d,m,v,f,h,p,g,b=e.theme,x=e.ownerState;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(t=b.transitions)||null==(n=t.create)?void 0:n.call(t,"fill",{duration:null==(r=b.transitions)||null==(o=r.duration)?void 0:o.shorter}),fontSize:{inherit:"inherit",small:(null==(a=b.typography)||null==(i=a.pxToRem)?void 0:i.call(a,20))||"1.25rem",medium:(null==(l=b.typography)||null==(c=l.pxToRem)?void 0:c.call(l,24))||"1.5rem",large:(null==(s=b.typography)||null==(u=s.pxToRem)?void 0:u.call(s,35))||"2.1875"}[x.fontSize],color:null!=(d=null==(m=(b.vars||b).palette)||null==(v=m[x.color])?void 0:v.main)?d:{action:null==(f=(b.vars||b).palette)||null==(h=f.action)?void 0:h.active,disabled:null==(p=(b.vars||b).palette)||null==(g=p.action)?void 0:g.disabled,inherit:void 0}[x.color]}})),N=o.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiSvgIcon"}),r=n.children,o=n.className,a=n.color,i=void 0===a?"inherit":a,l=n.component,c=void 0===l?"svg":l,s=n.fontSize,u=void 0===s?"medium":s,m=n.htmlColor,v=n.inheritViewBox,f=void 0!==v&&v,h=n.titleAccess,p=n.viewBox,Z=void 0===p?"0 0 24 24":p,y=(0,g.Z)(n,C),j=(0,b.Z)({},n,{color:i,component:c,fontSize:u,instanceFontSize:e.fontSize,inheritViewBox:f,viewBox:Z}),N={};f||(N.viewBox=Z);var R=function(e){var t=e.color,n=e.fontSize,r=e.classes,o={root:["root","inherit"!==t&&"color".concat((0,_.Z)(t)),"fontSize".concat((0,_.Z)(n))]};return(0,S.Z)(o,k,r)}(j);return(0,d.jsxs)(z,(0,b.Z)({as:c,className:(0,x.Z)(R.root,o),ownerState:j,focusable:"false",color:m,"aria-hidden":!h||void 0,role:h?"img":void 0,ref:t},N,y,{children:[r,h?(0,d.jsx)("title",{children:h}):null]}))}));N.muiName="SvgIcon";var R=N;var A=function(e,t){var n=function(n,r){return(0,d.jsx)(R,(0,b.Z)({"data-testid":"".concat(t,"Icon"),ref:r},n,{children:e}))};return n.muiName=R.muiName,o.memo(o.forwardRef(n))}((0,d.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");function I(e){return(0,y.Z)("MuiAvatar",e)}(0,j.Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var P=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],B=(0,Z.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],n.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,n=e.ownerState;return(0,b.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===n.variant&&{borderRadius:(t.vars||t).shape.borderRadius},"square"===n.variant&&{borderRadius:0},n.colorDefault&&(0,b.Z)({color:(t.vars||t).palette.background.default},t.vars?{backgroundColor:t.vars.palette.Avatar.defaultBg}:{backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]}))})),F=(0,Z.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),M=(0,Z.ZP)(A,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var L=o.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiAvatar"}),a=n.alt,i=n.children,l=n.className,c=n.component,s=void 0===c?"div":c,u=n.imgProps,m=n.sizes,v=n.src,f=n.srcSet,h=n.variant,p=void 0===h?"circular":h,Z=(0,g.Z)(n,P),_=null,y=function(e){var t=e.crossOrigin,n=e.referrerPolicy,a=e.src,i=e.srcSet,l=o.useState(!1),c=(0,r.Z)(l,2),s=c[0],u=c[1];return o.useEffect((function(){if(a||i){u(!1);var e=!0,r=new Image;return r.onload=function(){e&&u("loaded")},r.onerror=function(){e&&u("error")},r.crossOrigin=t,r.referrerPolicy=n,r.src=a,i&&(r.srcset=i),function(){e=!1}}}),[t,n,a,i]),s}((0,b.Z)({},u,{src:v,srcSet:f})),j=v||f,k=j&&"error"!==y,C=(0,b.Z)({},n,{colorDefault:!k,component:s,variant:p}),z=function(e){var t=e.classes,n={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,S.Z)(n,I,t)}(C);return _=k?(0,d.jsx)(F,(0,b.Z)({alt:a,src:v,srcSet:f,sizes:m,ownerState:C,className:z.img},u)):null!=i?i:j&&a?a[0]:(0,d.jsx)(M,{className:z.fallback}),(0,d.jsx)(B,(0,b.Z)({as:s,ownerState:C,className:(0,x.Z)(z.root,l),ref:t},Z,{children:_}))})),D=n(4942),T=n(1184),O=n(5682),V=n(8519),q=n(2466),E=["component","direction","spacing","divider","children"];function $(e,t){var n=o.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,a){return e.push(r),a<n.length-1&&e.push(o.cloneElement(t,{key:"separator-".concat(a)})),e}),[])}var J=(0,Z.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return[t.root]}})((function(e){var t=e.ownerState,n=e.theme,r=(0,b.Z)({display:"flex"},(0,T.k9)({theme:n},(0,T.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var o=(0,O.hB)(n),a=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),i=(0,T.P$)({values:t.direction,base:a}),l=(0,T.P$)({values:t.spacing,base:a});r=(0,q.Z)(r,(0,T.k9)({theme:n},l,(function(e,n){return{"& > :not(style) + :not(style)":(0,D.Z)({margin:0},"margin".concat((r=n?i[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,O.NA)(o,e))};var r})))}return r})),K=o.forwardRef((function(e,t){var n=(0,w.Z)({props:e,name:"MuiStack"}),r=(0,V.Z)(n),o=r.component,a=void 0===o?"div":o,i=r.direction,l=void 0===i?"column":i,c=r.spacing,s=void 0===c?0:c,u=r.divider,m=r.children,v=(0,g.Z)(r,E),f={direction:l,spacing:s};return(0,d.jsx)(J,(0,b.Z)({as:a,ownerState:f,ref:t},v,{children:u?$(m,u):m}))})),G=K,H=function(e){var t=e.id,n=e.name,o=e.number,a=(0,u.zr)(),i=(0,r.Z)(a,1)[0];function l(e){var t,n=0;for(t=0;t<e.length;t+=1)n=e.charCodeAt(t)+((n<<5)-n);var r="#";for(t=0;t<3;t+=1){r+="00".concat((n>>8*t&255).toString(16)).slice(-2)}return r}return console.log(o),(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)(G,{direction:"row",spacing:2,children:(0,d.jsx)(L,(0,v.Z)({},function(e){return{sx:{bgcolor:l(e.name)},children:"".concat(e.name.split(" ")[0][0])}}({name:n})))}),(0,d.jsxs)("span",{className:h,children:[n,":"]}),(0,d.jsx)("span",{className:h,children:o}),(0,d.jsx)("button",{className:p,onClick:function(){return i(t)},children:"Delete"})]})},U="ContactList_contactsList__7leRd",W=n(5048),X=n(6895),Q=function(){var e=(0,W.v9)(X.zK),t=(0,u.Jx)().data,n=function(){var n=e.toLowerCase();if(t)return t.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,d.jsx)("ul",{className:U,children:t&&n.map((function(e){var t=e.id,n=e.name,r=e.number;return(0,d.jsx)(H,{id:t,name:n,number:r},t)}))})},Y="Filter_filterBox__InoKa",ee="Filter_label__9zVWL",te="Filter_input__v7ebg",ne=function(){var e=(0,W.v9)(X.zK),t=(0,W.I0)();return(0,d.jsxs)("div",{className:Y,children:[(0,d.jsx)("label",{className:ee,children:"Find contacts by name"}),(0,d.jsx)("input",{className:te,type:"text",value:e,onChange:function(e){t((0,X.jB)(e.currentTarget.value))}})]})};function re(){return(0,d.jsxs)("div",{style:{minWidth:"400px",display:"inline-block",padding:"10px",height:"100vh",margin:"0 auto"},children:[(0,d.jsx)("h1",{children:"Phonebook"}),(0,d.jsx)(m,{}),(0,d.jsx)("h2",{children:"Contacts"}),(0,d.jsx)(ne,{}),(0,d.jsx)(Q,{})]})}}}]);
//# sourceMappingURL=103.1e880e39.chunk.js.map