(self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[]).push([[20],{9100:function(e,t,n){var r=n(9489),a=n(7067);function l(t,n,c){return a()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,n){var a=[null];a.push.apply(a,t);var l=new(Function.bind.apply(e,a));return n&&r(l,n.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6725:function(e,t,n){var r=n(3395);e.exports={MDXRenderer:r}},3395:function(e,t,n){var r=n(9100),a=n(319),l=n(9713),c=n(7316),i=["scope","children"];function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=n(7294),m=n(3497).mdx,p=n(9480).useMDXScope;e.exports=function(e){var t=e.scope,n=e.children,l=c(e,i),o=p(t),f=u.useMemo((function(){if(!n)return null;var e=s({React:u,mdx:m},o),t=Object.keys(e),l=t.map((function(t){return e[t]}));return r(Function,["_fn"].concat(a(t),[""+n])).apply(void 0,[{}].concat(a(l)))}),[n,t]);return u.createElement(f,s({},l))}},5245:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),a=n(4742),l=n(5444),c=n(531),i=n(9210),o=n(8535),s=n(4647);var u=function(e){var t,n,a,u=(0,r.useState)("small"),m=u[0],p=u[1],f=(t=(0,r.useState)([0,0]),n=t[0],a=t[1],(0,r.useLayoutEffect)((function(){function e(){a([window.innerWidth,window.innerHeight])}return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n),d=f[0],v=(f[1],(0,r.useState)(!1)),E=v[0],y=v[1];(0,r.useEffect)((function(){d>576?"big"!==m&&(p("big"),y(!0),g.start("open")):(p("small"),y(!1),g.start("closed"))}),[d]);var h=(0,i.c)(0),g=(0,o._)(),w=function(e){"small"===m&&(g.start(E?"closed":"open"),y(!E),8!==h.get()?h.set(8):h.set(0))};return r.createElement(s.E.nav,{className:"navbar "+("small"===m?"small-navbar":"big-navbar")},r.createElement("div",{className:"navbar-logo"},r.createElement(l.rU,{className:"logo-link",to:"/"},r.createElement(c.Z,{className:"logo"}))),r.createElement(s.E.button,{className:"toggler",type:"button",whileTap:{scale:.8},onClick:w},r.createElement(s.E.div,{className:"icon burger-menu",layout:!0,initial:{opacity:0},animate:{opacity:1}},r.createElement(s.E.span,{animate:{rotate:E?-45:0,y:E?12:0}}),r.createElement(s.E.span,{style:{originX:.5,originY:.5},animate:{opacity:E?0:1,scaleX:E?0:1},transition:{duration:.1}}),r.createElement(s.E.span,{animate:{rotate:E?45:0,y:E?-12:0}}))),r.createElement(s.E.ul,{className:"navbar-items "+(E?"open-items":"closed-items"),animate:g,variants:{open:{opacity:1,y:0},closed:{opacity:0,y:-16}}},r.createElement("svg",{id:"menu_triangle",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"8",viewBox:"0 0 16 8"},r.createElement("g",{id:"menu_triangle_group","data-name":"menu_triangle_group"},r.createElement("polyline",{points:"0 8 8 0 16 8",fill:"#fff",stroke:"#000","stroke-miterlimit":"10"}))),r.createElement("li",{className:"nav-item"},r.createElement(l.rU,{to:"/",className:"nav-link",activeClassName:"active",partiallyActive:!0,onClick:w},r.createElement("span",{className:"text"},"Proyectos")),r.createElement("span",{className:"divider"},"/")),r.createElement("li",{className:"nav-item"},r.createElement(l.rU,{to:"/#acerca-de",className:"nav-link",activeClassName:"active",partiallyActive:!0,onClick:w},r.createElement("span",{className:"text"},"Acerca de")),r.createElement("span",{className:"divider"},"/")),r.createElement("li",{className:"nav-item"},r.createElement(l.rU,{to:"/#contacto",className:"nav-link",activeClassName:"active",partiallyActive:!0,onClick:w},r.createElement("span",{className:"text"},"Contacto")))))},m=n(7004),p=n(6725);var f=function(e){return r.createElement("svg",Object.assign({width:24,height:16,viewBox:"0 0 24 16",fill:"inherit",stroke:"inherit",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M7 5h15a1 1 0 011 1v8.5a1 1 0 01-1 1h-4.333",stroke:"inherit",fill:"none",strokeLinecap:"round"}),r.createElement("path",{d:"M.688 4.61a.5.5 0 000 .78l5 4A.5.5 0 006.5 9V1a.5.5 0 00-.812-.39l-5 4z",stroke:"inherit",fill:"none",strokeLinejoin:"round"}))};var d=function(e){return r.createElement("svg",Object.assign({width:10,height:18,viewBox:"0 0 10 18",fill:"none",stroke:"inherit",xmlns:"http://www.w3.org/2000/svg"},e),r.createElement("path",{d:"M5 7v10",stroke:"inherit",fill:"none",strokeLinecap:"round"}),r.createElement("path",{d:"M5 1L1 7h8L5 1z",stroke:"inherit",fill:"none",strokeLinejoin:"round"}))},v=function(e){var t=e.data,n=(0,r.useState)(0),l=n[0],c=n[1],i=function(){var e=window.pageYOffset;c(e)};return(0,r.useEffect)((function(){return window.addEventListener("scroll",i,{passive:!0}),function(){window.removeEventListener("scroll",i)}}),[]),r.createElement("div",{className:"projects"},r.createElement(a.Z,null,r.createElement(u,null),r.createElement("div",{className:"content container-md"},r.createElement("article",{className:"project"},r.createElement(s.E.div,{layout:!0,className:"project-heading-section "+(l>=8?"away-from-top":"")},r.createElement(s.E.div,{layout:!0,className:"button-container"},r.createElement(m.Z,{type:"secondary",href:"/",layout:!0,classes:"text-with-icon return-btn"},r.createElement("p",null,"Return"),r.createElement(f,null)),r.createElement(m.Z,{type:"secondary",href:"#",layout:!0,classes:"icon up-btn"},r.createElement(d,null))),r.createElement("div",{className:"heading-title"},r.createElement("h2",{className:"projectHeading"},t.mdx.frontmatter.title),r.createElement("svg",{id:"heading-bg",width:"544",height:"120",fill:"none",xmlns:"http://www.w3.org/2000/svg"},r.createElement("filter",{id:"blurMe"},r.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"50"})),r.createElement("g",{opacity:"0.8",filter:"url(#blurMe)"},r.createElement("ellipse",{cx:"12",cy:"-26.5",rx:"140",ry:"140",fill:"#F572EF"}),r.createElement("ellipse",{cx:"480  ",cy:"140",rx:"140",ry:"140",fill:"#FBF59B"}))))),r.createElement("div",{className:"main-text"},r.createElement(p.MDXRenderer,null,t.mdx.body))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-mdx-frontmatter-url-js-c8ca173fb1e754498978.js.map