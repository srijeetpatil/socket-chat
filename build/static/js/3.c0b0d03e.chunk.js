(this["webpackJsonpsocket-chat"]=this["webpackJsonpsocket-chat"]||[]).push([[3],{166:function(t,e,n){"use strict";var o=n(1),r=n(163),i=n(49);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(r.a)(t,Object(o.a)({defaultTheme:i.a},e))}},167:function(t,e,n){"use strict";var o=n(1),r=n(4),i=n(0),a=n.n(i),c=(n(16),n(38)),l=n(46),s=n(48),u=i.forwardRef((function(t,e){var n=t.children,a=t.classes,l=t.className,u=t.color,d=void 0===u?"inherit":u,f=t.component,p=void 0===f?"svg":f,h=t.fontSize,v=void 0===h?"default":h,m=t.htmlColor,b=t.titleAccess,y=t.viewBox,g=void 0===y?"0 0 24 24":y,E=Object(r.a)(t,["children","classes","className","color","component","fontSize","htmlColor","titleAccess","viewBox"]);return i.createElement(p,Object(o.a)({className:Object(c.a)(a.root,l,"inherit"!==d&&a["color".concat(Object(s.a)(d))],"default"!==v&&a["fontSize".concat(Object(s.a)(v))]),focusable:"false",viewBox:g,color:m,"aria-hidden":!b||void 0,role:b?"img":void 0,ref:e},E),n,b?i.createElement("title",null,b):null)}));u.muiName="SvgIcon";var d=Object(l.a)((function(t){return{root:{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,fontSize:t.typography.pxToRem(24),transition:t.transitions.create("fill",{duration:t.transitions.duration.shorter})},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorAction:{color:t.palette.action.active},colorError:{color:t.palette.error.main},colorDisabled:{color:t.palette.action.disabled},fontSizeInherit:{fontSize:"inherit"},fontSizeSmall:{fontSize:t.typography.pxToRem(20)},fontSizeLarge:{fontSize:t.typography.pxToRem(35)}}}),{name:"MuiSvgIcon"})(u);var f=function(t,e){var n=function(e,n){return a.a.createElement(d,Object(o.a)({ref:n},e),t)};return n.muiName=d.muiName,a.a.memo(a.a.forwardRef(n))}(i.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}));var p=i.forwardRef((function(t,e){var n=t.alt,a=t.children,l=t.classes,s=t.className,u=t.component,d=void 0===u?"div":u,p=t.imgProps,h=t.sizes,v=t.src,m=t.srcSet,b=t.variant,y=void 0===b?"circle":b,g=Object(r.a)(t,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),E=null,x=function(t){var e=t.src,n=t.srcSet,o=i.useState(!1),r=o[0],a=o[1];return i.useEffect((function(){if(e||n){a(!1);var t=!0,o=new Image;return o.src=e,o.srcSet=n,o.onload=function(){t&&a("loaded")},o.onerror=function(){t&&a("error")},function(){t=!1}}}),[e,n]),r}({src:v,srcSet:m}),O=v||m,k=O&&"error"!==x;return E=k?i.createElement("img",Object(o.a)({alt:n,src:v,srcSet:m,sizes:h,className:l.img},p)):null!=a?a:O&&n?n[0]:i.createElement(f,{className:l.fallback}),i.createElement(d,Object(o.a)({className:Object(c.a)(l.root,l.system,l[y],s,!k&&l.colorDefault),ref:e},g),E)}));e.a=Object(l.a)((function(t){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:t.palette.background.default,backgroundColor:"light"===t.palette.type?t.palette.grey[400]:t.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:t.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(p)},175:function(t,e,n){"use strict";var o=n(1),r=n(4),i=n(0),a=(n(16),n(38)),c=n(46),l=n(48),s={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p"},u=i.forwardRef((function(t,e){var n=t.align,c=void 0===n?"inherit":n,u=t.classes,d=t.className,f=t.color,p=void 0===f?"initial":f,h=t.component,v=t.display,m=void 0===v?"initial":v,b=t.gutterBottom,y=void 0!==b&&b,g=t.noWrap,E=void 0!==g&&g,x=t.paragraph,O=void 0!==x&&x,k=t.variant,w=void 0===k?"body1":k,S=t.variantMapping,R=void 0===S?s:S,C=Object(r.a)(t,["align","classes","className","color","component","display","gutterBottom","noWrap","paragraph","variant","variantMapping"]),j=h||(O?"p":R[w]||s[w])||"span";return i.createElement(j,Object(o.a)({className:Object(a.a)(u.root,d,"inherit"!==w&&u[w],"initial"!==p&&u["color".concat(Object(l.a)(p))],E&&u.noWrap,y&&u.gutterBottom,O&&u.paragraph,"inherit"!==c&&u["align".concat(Object(l.a)(c))],"initial"!==m&&u["display".concat(Object(l.a)(m))]),ref:e},C))}));e.a=Object(c.a)((function(t){return{root:{margin:0},body2:t.typography.body2,body1:t.typography.body1,caption:t.typography.caption,button:t.typography.button,h1:t.typography.h1,h2:t.typography.h2,h3:t.typography.h3,h4:t.typography.h4,h5:t.typography.h5,h6:t.typography.h6,subtitle1:t.typography.subtitle1,subtitle2:t.typography.subtitle2,overline:t.typography.overline,srOnly:{position:"absolute",height:1,width:1,overflow:"hidden"},alignLeft:{textAlign:"left"},alignCenter:{textAlign:"center"},alignRight:{textAlign:"right"},alignJustify:{textAlign:"justify"},noWrap:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},gutterBottom:{marginBottom:"0.35em"},paragraph:{marginBottom:16},colorInherit:{color:"inherit"},colorPrimary:{color:t.palette.primary.main},colorSecondary:{color:t.palette.secondary.main},colorTextPrimary:{color:t.palette.text.primary},colorTextSecondary:{color:t.palette.text.secondary},colorError:{color:t.palette.error.main},displayInline:{display:"inline"},displayBlock:{display:"block"}}}),{name:"MuiTypography"})(u)},177:function(t,e,n){"use strict";var o=n(1),r=n(4),i=n(0),a=n.n(i),c=(n(16),n(47)),l=n.n(c);var s=n(38);function u(t){return t&&t.ownerDocument||document}function d(t){return u(t).defaultView||window}function f(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.reduce((function(t,e){return null==e?t:function(){for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];t.apply(this,o),e.apply(this,o)}}),(function(){}))}var p=n(46),h=n(164),v=n(162);function m(t,e){"function"===typeof t?t(e):t&&(t.current=e)}function b(t,e){return i.useMemo((function(){return null==t&&null==e?null:function(n){m(t,n),m(e,n)}}),[t,e])}var y="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;var g=i.forwardRef((function(t,e){var n=t.children,o=t.container,r=t.disablePortal,a=void 0!==r&&r,l=t.onRendered,s=i.useState(null),u=s[0],d=s[1],f=b(i.isValidElement(n)?n.ref:null,e);return y((function(){a||d(function(t){return t="function"===typeof t?t():t,c.findDOMNode(t)}(o)||document.body)}),[o,a]),y((function(){if(u&&!a)return m(e,u),function(){m(e,null)}}),[e,u,a]),y((function(){l&&(u||a)&&l()}),[l,u,a]),a?i.isValidElement(n)?i.cloneElement(n,{ref:f}):n:u?c.createPortal(n,u):u})),E="undefined"!==typeof window?i.useLayoutEffect:i.useEffect;function x(t){var e=i.useRef(t);return E((function(){e.current=t})),i.useCallback((function(){return e.current.apply(void 0,arguments)}),[])}var O=n(77);var k=n(35),w=n(32);function S(t,e){e?t.setAttribute("aria-hidden","true"):t.removeAttribute("aria-hidden")}function R(t){return parseInt(window.getComputedStyle(t)["padding-right"],10)||0}function C(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,i=[e,n].concat(Object(w.a)(o)),a=["TEMPLATE","SCRIPT","STYLE"];[].forEach.call(t.children,(function(t){1===t.nodeType&&-1===i.indexOf(t)&&-1===a.indexOf(t.tagName)&&S(t,r)}))}function j(t,e){var n=-1;return t.some((function(t,o){return!!e(t)&&(n=o,!0)})),n}function T(t,e){var n,o=[],r=[],i=t.container;if(!e.disableScrollLock){if(function(t){var e=u(t);return e.body===t?d(e).innerWidth>e.documentElement.clientWidth:t.scrollHeight>t.clientHeight}(i)){var a=function(){var t=document.createElement("div");t.style.width="99px",t.style.height="99px",t.style.position="absolute",t.style.top="-9999px",t.style.overflow="scroll",document.body.appendChild(t);var e=t.offsetWidth-t.clientWidth;return document.body.removeChild(t),e}();o.push({value:i.style.paddingRight,key:"padding-right",el:i}),i.style["padding-right"]="".concat(R(i)+a,"px"),n=u(i).querySelectorAll(".mui-fixed"),[].forEach.call(n,(function(t){r.push(t.style.paddingRight),t.style.paddingRight="".concat(R(t)+a,"px")}))}var c=i.parentElement,l="HTML"===c.nodeName&&"scroll"===window.getComputedStyle(c)["overflow-y"]?c:i;o.push({value:l.style.overflow,key:"overflow",el:l}),l.style.overflow="hidden"}return function(){n&&[].forEach.call(n,(function(t,e){r[e]?t.style.paddingRight=r[e]:t.style.removeProperty("padding-right")})),o.forEach((function(t){var e=t.value,n=t.el,o=t.key;e?n.style.setProperty(o,e):n.style.removeProperty(o)}))}}var N=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.modals=[],this.containers=[]}return Object(k.a)(t,[{key:"add",value:function(t,e){var n=this.modals.indexOf(t);if(-1!==n)return n;n=this.modals.length,this.modals.push(t),t.modalRef&&S(t.modalRef,!1);var o=function(t){var e=[];return[].forEach.call(t.children,(function(t){t.getAttribute&&"true"===t.getAttribute("aria-hidden")&&e.push(t)})),e}(e);C(e,t.mountNode,t.modalRef,o,!0);var r=j(this.containers,(function(t){return t.container===e}));return-1!==r?(this.containers[r].modals.push(t),n):(this.containers.push({modals:[t],container:e,restore:null,hiddenSiblingNodes:o}),n)}},{key:"mount",value:function(t,e){var n=j(this.containers,(function(e){return-1!==e.modals.indexOf(t)})),o=this.containers[n];o.restore||(o.restore=T(o,e))}},{key:"remove",value:function(t){var e=this.modals.indexOf(t);if(-1===e)return e;var n=j(this.containers,(function(e){return-1!==e.modals.indexOf(t)})),o=this.containers[n];if(o.modals.splice(o.modals.indexOf(t),1),this.modals.splice(e,1),0===o.modals.length)o.restore&&o.restore(),t.modalRef&&S(t.modalRef,!0),C(o.container,t.mountNode,t.modalRef,o.hiddenSiblingNodes,!1),this.containers.splice(n,1);else{var r=o.modals[o.modals.length-1];r.modalRef&&S(r.modalRef,!1)}return e}},{key:"isTopModal",value:function(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}]),t}();var P=function(t){var e=t.children,n=t.disableAutoFocus,o=void 0!==n&&n,r=t.disableEnforceFocus,a=void 0!==r&&r,l=t.disableRestoreFocus,s=void 0!==l&&l,d=t.getDoc,f=t.isEnabled,p=t.open,h=i.useRef(),v=i.useRef(null),m=i.useRef(null),y=i.useRef(),g=i.useRef(null),E=i.useCallback((function(t){g.current=c.findDOMNode(t)}),[]),x=b(e.ref,E),O=i.useRef();return i.useEffect((function(){O.current=p}),[p]),!O.current&&p&&"undefined"!==typeof window&&(y.current=d().activeElement),i.useEffect((function(){if(p){var t=u(g.current);o||!g.current||g.current.contains(t.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex",-1),g.current.focus());var e=function(){null!==g.current&&(t.hasFocus()&&!a&&f()&&!h.current?g.current&&!g.current.contains(t.activeElement)&&g.current.focus():h.current=!1)},n=function(e){!a&&f()&&9===e.keyCode&&t.activeElement===g.current&&(h.current=!0,e.shiftKey?m.current.focus():v.current.focus())};t.addEventListener("focus",e,!0),t.addEventListener("keydown",n,!0);var r=setInterval((function(){e()}),50);return function(){clearInterval(r),t.removeEventListener("focus",e,!0),t.removeEventListener("keydown",n,!0),s||(y.current&&y.current.focus&&y.current.focus(),y.current=null)}}}),[o,a,s,f,p]),i.createElement(i.Fragment,null,i.createElement("div",{tabIndex:0,ref:v,"data-test":"sentinelStart"}),i.cloneElement(e,{ref:x}),i.createElement("div",{tabIndex:0,ref:m,"data-test":"sentinelEnd"}))},M={root:{zIndex:-1,position:"fixed",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},invisible:{backgroundColor:"transparent"}},z=i.forwardRef((function(t,e){var n=t.invisible,a=void 0!==n&&n,c=t.open,l=Object(r.a)(t,["invisible","open"]);return c?i.createElement("div",Object(o.a)({"aria-hidden":!0,ref:e},l,{style:Object(o.a)({},M.root,a?M.invisible:{},l.style)})):null}));var A=new N,D=i.forwardRef((function(t,e){var n=Object(h.a)(),a=Object(v.a)({name:"MuiModal",props:Object(o.a)({},t),theme:n}),l=a.BackdropComponent,s=void 0===l?z:l,d=a.BackdropProps,p=a.children,m=a.closeAfterTransition,y=void 0!==m&&m,E=a.container,k=a.disableAutoFocus,w=void 0!==k&&k,R=a.disableBackdropClick,C=void 0!==R&&R,j=a.disableEnforceFocus,T=void 0!==j&&j,N=a.disableEscapeKeyDown,M=void 0!==N&&N,D=a.disablePortal,I=void 0!==D&&D,L=a.disableRestoreFocus,B=void 0!==L&&L,F=a.disableScrollLock,H=void 0!==F&&F,W=a.hideBackdrop,K=void 0!==W&&W,q=a.keepMounted,U=void 0!==q&&q,J=a.manager,V=void 0===J?A:J,X=a.onBackdropClick,G=a.onClose,Y=a.onEscapeKeyDown,_=a.onRendered,Q=a.open,Z=Object(r.a)(a,["BackdropComponent","BackdropProps","children","closeAfterTransition","container","disableAutoFocus","disableBackdropClick","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","manager","onBackdropClick","onClose","onEscapeKeyDown","onRendered","open"]),$=i.useState(!0),tt=$[0],et=$[1],nt=i.useRef({}),ot=i.useRef(null),rt=i.useRef(null),it=b(rt,e),at=function(t){return!!t.children&&t.children.props.hasOwnProperty("in")}(a),ct=function(){return u(ot.current)},lt=function(){return nt.current.modalRef=rt.current,nt.current.mountNode=ot.current,nt.current},st=function(){V.mount(lt(),{disableScrollLock:H}),rt.current.scrollTop=0},ut=x((function(){var t=function(t){return t="function"===typeof t?t():t,c.findDOMNode(t)}(E)||ct().body;V.add(lt(),t),rt.current&&st()})),dt=i.useCallback((function(){return V.isTopModal(lt())}),[V]),ft=x((function(t){ot.current=t,t&&(_&&_(),Q&&dt()?st():S(rt.current,!0))})),pt=i.useCallback((function(){V.remove(lt())}),[V]);if(i.useEffect((function(){return function(){pt()}}),[pt]),i.useEffect((function(){Q?ut():at&&y||pt()}),[Q,pt,at,y,ut]),!U&&!Q&&(!at||tt))return null;var ht=function(t){return{root:{position:"fixed",zIndex:t.zIndex.modal,right:0,bottom:0,top:0,left:0},hidden:{visibility:"hidden"}}}(n||{zIndex:O.a}),vt={};return void 0===p.props.tabIndex&&(vt.tabIndex=p.props.tabIndex||"-1"),at&&(vt.onEnter=f((function(){et(!1)}),p.props.onEnter),vt.onExited=f((function(){et(!0),y&&pt()}),p.props.onExited)),i.createElement(g,{ref:ft,container:E,disablePortal:I},i.createElement("div",Object(o.a)({ref:it,onKeyDown:function(t){"Escape"===t.key&&dt()&&(Y&&Y(t),M||(t.stopPropagation(),G&&G(t,"escapeKeyDown")))},role:"presentation"},Z,{style:Object(o.a)({},ht.root,!Q&&tt?ht.hidden:{},Z.style)}),K?null:i.createElement(s,Object(o.a)({open:Q,onClick:function(t){t.target===t.currentTarget&&(X&&X(t),!C&&G&&G(t,"backdropClick"))}},d)),i.createElement(P,{disableEnforceFocus:T,disableAutoFocus:w,disableRestoreFocus:B,getDoc:ct,isEnabled:dt,open:Q},i.cloneElement(p,vt))))})),I=n(78),L=n(10),B=n(5),F=!1,H=a.a.createContext(null),W="unmounted",K="exited",q="entering",U="entered",J="exiting",V=function(t){function e(e,n){var o;o=t.call(this,e,n)||this;var r,i=n&&!n.isMounting?e.enter:e.appear;return o.appearStatus=null,e.in?i?(r=K,o.appearStatus=q):r=U:r=e.unmountOnExit||e.mountOnEnter?W:K,o.state={status:r},o.nextCallback=null,o}Object(B.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===W?{status:K}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==q&&n!==U&&(e=q):n!==q&&n!==U||(e=J)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,o=this.props.timeout;return t=e=n=o,null!=o&&"number"!==typeof o&&(t=o.exit,e=o.enter,n=void 0!==o.appear?o.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===q?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===K&&this.setState({status:W})},n.performEnter=function(t){var e=this,n=this.props.enter,o=this.context?this.context.isMounting:t,r=this.props.nodeRef?[o]:[l.a.findDOMNode(this),o],i=r[0],a=r[1],c=this.getTimeouts(),s=o?c.appear:c.enter;!t&&!n||F?this.safeSetState({status:U},(function(){e.props.onEntered(i)})):(this.props.onEnter(i,a),this.safeSetState({status:q},(function(){e.props.onEntering(i,a),e.onTransitionEnd(s,(function(){e.safeSetState({status:U},(function(){e.props.onEntered(i,a)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),o=this.props.nodeRef?void 0:l.a.findDOMNode(this);e&&!F?(this.props.onExit(o),this.safeSetState({status:J},(function(){t.props.onExiting(o),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:K},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:K},(function(){t.props.onExited(o)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(o){n&&(n=!1,e.nextCallback=null,t(o))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:l.a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(n&&!o){if(this.props.addEndListener){var r=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=r[0],a=r[1];this.props.addEndListener(i,a)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===W)return null;var e=this.props,n=e.children,o=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(L.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return a.a.createElement(H.Provider,{value:null},"function"===typeof n?n(t,o):a.a.cloneElement(a.a.Children.only(n),o))},e}(a.a.Component);function X(){}V.contextType=H,V.propTypes={},V.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:X,onEntering:X,onEntered:X,onExit:X,onExiting:X,onExited:X},V.UNMOUNTED=W,V.EXITED=K,V.ENTERING=q,V.ENTERED=U,V.EXITING=J;var G=V,Y=n(49);function _(t,e){var n=t.timeout,o=t.style,r=void 0===o?{}:o;return{duration:r.transitionDuration||"number"===typeof n?n:n[e.mode]||0,delay:r.transitionDelay}}function Q(t){return"scale(".concat(t,", ").concat(Math.pow(t,2),")")}var Z={entering:{opacity:1,transform:Q(1)},entered:{opacity:1,transform:"none"}},$=i.forwardRef((function(t,e){var n=t.children,a=t.disableStrictModeCompat,c=void 0!==a&&a,l=t.in,s=t.onEnter,u=t.onEntered,d=t.onEntering,f=t.onExit,p=t.onExited,v=t.onExiting,m=t.style,y=t.timeout,g=void 0===y?"auto":y,E=t.TransitionComponent,x=void 0===E?G:E,O=Object(r.a)(t,["children","disableStrictModeCompat","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),k=i.useRef(),w=i.useRef(),S=Object(h.a)()||Y.a,R=S.unstable_strictMode&&!c,C=i.useRef(null),j=b(n.ref,e),T=b(R?C:void 0,j),N=function(t){return function(e,n){if(t){var o=R?[C.current,e]:[e,n],r=Object(I.a)(o,2),i=r[0],a=r[1];void 0===a?t(i):t(i,a)}}},P=N(d),M=N((function(t,e){!function(t){t.scrollTop}(t);var n,o=_({style:m,timeout:g},{mode:"enter"}),r=o.duration,i=o.delay;"auto"===g?(n=S.transitions.getAutoHeightDuration(t.clientHeight),w.current=n):n=r,t.style.transition=[S.transitions.create("opacity",{duration:n,delay:i}),S.transitions.create("transform",{duration:.666*n,delay:i})].join(","),s&&s(t,e)})),z=N(u),A=N(v),D=N((function(t){var e,n=_({style:m,timeout:g},{mode:"exit"}),o=n.duration,r=n.delay;"auto"===g?(e=S.transitions.getAutoHeightDuration(t.clientHeight),w.current=e):e=o,t.style.transition=[S.transitions.create("opacity",{duration:e,delay:r}),S.transitions.create("transform",{duration:.666*e,delay:r||.333*e})].join(","),t.style.opacity="0",t.style.transform=Q(.75),f&&f(t)})),L=N(p);return i.useEffect((function(){return function(){clearTimeout(k.current)}}),[]),i.createElement(x,Object(o.a)({appear:!0,in:l,nodeRef:R?C:void 0,onEnter:M,onEntered:z,onEntering:P,onExit:D,onExited:L,onExiting:A,addEndListener:function(t,e){var n=R?t:e;"auto"===g&&(k.current=setTimeout(n,w.current||0))},timeout:"auto"===g?null:g},O),(function(t,e){return i.cloneElement(n,Object(o.a)({style:Object(o.a)({opacity:0,transform:Q(.75),visibility:"exited"!==t||l?void 0:"hidden"},Z[t],m,n.props.style),ref:T},e))}))}));$.muiSupportAuto=!0;var tt=$,et=i.forwardRef((function(t,e){var n=t.classes,a=t.className,c=t.component,l=void 0===c?"div":c,u=t.square,d=void 0!==u&&u,f=t.elevation,p=void 0===f?1:f,h=t.variant,v=void 0===h?"elevation":h,m=Object(r.a)(t,["classes","className","component","square","elevation","variant"]);return i.createElement(l,Object(o.a)({className:Object(s.a)(n.root,a,"outlined"===v?n.outlined:n["elevation".concat(p)],!d&&n.rounded),ref:e},m))})),nt=Object(p.a)((function(t){var e={};return t.shadows.forEach((function(t,n){e["elevation".concat(n)]={boxShadow:t}})),Object(o.a)({root:{backgroundColor:t.palette.background.paper,color:t.palette.text.primary,transition:t.transitions.create("box-shadow")},rounded:{borderRadius:t.shape.borderRadius},outlined:{border:"1px solid ".concat(t.palette.divider)}},e)}),{name:"MuiPaper"})(et);function ot(t,e){var n=0;return"number"===typeof e?n=e:"center"===e?n=t.height/2:"bottom"===e&&(n=t.height),n}function rt(t,e){var n=0;return"number"===typeof e?n=e:"center"===e?n=t.width/2:"right"===e&&(n=t.width),n}function it(t){return[t.horizontal,t.vertical].map((function(t){return"number"===typeof t?"".concat(t,"px"):t})).join(" ")}function at(t){return"function"===typeof t?t():t}var ct=i.forwardRef((function(t,e){var n=t.action,a=t.anchorEl,l=t.anchorOrigin,p=void 0===l?{vertical:"top",horizontal:"left"}:l,h=t.anchorPosition,v=t.anchorReference,m=void 0===v?"anchorEl":v,b=t.children,y=t.classes,g=t.className,E=t.container,x=t.elevation,O=void 0===x?8:x,k=t.getContentAnchorEl,w=t.marginThreshold,S=void 0===w?16:w,R=t.onEnter,C=t.onEntered,j=t.onEntering,T=t.onExit,N=t.onExited,P=t.onExiting,M=t.open,z=t.PaperProps,A=void 0===z?{}:z,I=t.transformOrigin,L=void 0===I?{vertical:"top",horizontal:"left"}:I,B=t.TransitionComponent,F=void 0===B?tt:B,H=t.transitionDuration,W=void 0===H?"auto":H,K=t.TransitionProps,q=void 0===K?{}:K,U=Object(r.a)(t,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","onEnter","onEntered","onEntering","onExit","onExited","onExiting","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),J=i.useRef(),V=i.useCallback((function(t){if("anchorPosition"===m)return h;var e=at(a),n=(e&&1===e.nodeType?e:u(J.current).body).getBoundingClientRect(),o=0===t?p.vertical:"center";return{top:n.top+ot(n,o),left:n.left+rt(n,p.horizontal)}}),[a,p.horizontal,p.vertical,h,m]),X=i.useCallback((function(t){var e=0;if(k&&"anchorEl"===m){var n=k(t);if(n&&t.contains(n)){var o=function(t,e){for(var n=e,o=0;n&&n!==t;)o+=(n=n.parentElement).scrollTop;return o}(t,n);e=n.offsetTop+n.clientHeight/2-o||0}0}return e}),[p.vertical,m,k]),G=i.useCallback((function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:ot(t,L.vertical)+e,horizontal:rt(t,L.horizontal)}}),[L.horizontal,L.vertical]),Y=i.useCallback((function(t){var e=X(t),n={width:t.offsetWidth,height:t.offsetHeight},o=G(n,e);if("none"===m)return{top:null,left:null,transformOrigin:it(o)};var r=V(e),i=r.top-o.vertical,c=r.left-o.horizontal,l=i+n.height,s=c+n.width,u=d(at(a)),f=u.innerHeight-S,p=u.innerWidth-S;if(i<S){var h=i-S;i-=h,o.vertical+=h}else if(l>f){var v=l-f;i-=v,o.vertical+=v}if(c<S){var b=c-S;c-=b,o.horizontal+=b}else if(s>p){var y=s-p;c-=y,o.horizontal+=y}return{top:"".concat(Math.round(i),"px"),left:"".concat(Math.round(c),"px"),transformOrigin:it(o)}}),[a,m,V,X,G,S]),_=i.useCallback((function(){var t=J.current;if(t){var e=Y(t);null!==e.top&&(t.style.top=e.top),null!==e.left&&(t.style.left=e.left),t.style.transformOrigin=e.transformOrigin}}),[Y]),Q=i.useCallback((function(t){J.current=c.findDOMNode(t)}),[]);i.useEffect((function(){M&&_()})),i.useImperativeHandle(n,(function(){return M?{updatePosition:function(){_()}}:null}),[M,_]),i.useEffect((function(){if(M){var t=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:166;function o(){for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];var a=this,c=function(){t.apply(a,r)};clearTimeout(e),e=setTimeout(c,n)}return o.clear=function(){clearTimeout(e)},o}((function(){_()}));return window.addEventListener("resize",t),function(){t.clear(),window.removeEventListener("resize",t)}}}),[M,_]);var Z=W;"auto"!==W||F.muiSupportAuto||(Z=void 0);var $=E||(a?u(at(a)).body:void 0);return i.createElement(D,Object(o.a)({container:$,open:M,ref:e,BackdropProps:{invisible:!0},className:Object(s.a)(y.root,g)},U),i.createElement(F,Object(o.a)({appear:!0,in:M,onEnter:R,onEntered:C,onExit:T,onExited:N,onExiting:P,timeout:Z},q,{onEntering:f((function(t,e){j&&j(t,e),_()}),q.onEntering)}),i.createElement(nt,Object(o.a)({elevation:O,ref:Q},A,{className:Object(s.a)(y.paper,A.className)}),b)))}));e.a=Object(p.a)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(ct)}}]);
//# sourceMappingURL=3.c0b0d03e.chunk.js.map