"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9514,4204],{85642:function(e,t,a){a.r(t),a.d(t,{default:function(){return te}});var n=a(67294),l=a(3905),r=a(46291),o=a(18882),i=a(86010),c=a(63616),s=a(93783),d=a(55537),m=a(87462);var u=function(e){return n.createElement("svg",(0,m.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},b=a(95999),p=a(63366),f=a(39960),h=a(13919),v=a(90541),E="menuLinkText_OKON",C="hasHref_TwRn",g=a(72389),_=["items"],k=["item"],N=["item","onItemClick","activePath","level"],S=["item","onItemClick","activePath","level"],T=(0,n.memo)((function(e){var t=e.items,a=(0,p.Z)(e,_);return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(I,(0,m.Z)({key:t,item:e},a))})))}));function I(e){var t=e.item,a=(0,p.Z)(e,k);return"category"===t.type?0===t.items.length?null:n.createElement(y,(0,m.Z)({item:t},a)):n.createElement(w,(0,m.Z)({item:t},a))}function y(e){var t,a=e.item,l=e.onItemClick,r=e.activePath,o=e.level,s=(0,p.Z)(e,N),d=a.items,u=a.label,h=a.collapsible,v=a.className,_=a.href,k=function(e){var t=(0,g.default)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.findFirstCategoryLink)(e):void 0}),[e,t])}(a),S=(0,c.isActiveSidebarItem)(a,r),I=(0,c.useCollapsible)({initialState:function(){return!!h&&(!S&&a.collapsed)}}),y=I.collapsed,w=I.setCollapsed,A=I.toggleCollapsed;return function(e){var t=e.isActive,a=e.collapsed,l=e.setCollapsed,r=(0,c.usePrevious)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:S,collapsed:y,setCollapsed:w}),n.createElement("li",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarItemCategory,c.ThemeClassNames.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":y},v)},n.createElement("div",{className:"menu__list-item-collapsible"},n.createElement(f.default,(0,m.Z)({className:(0,i.default)("menu__link",(t={"menu__link--sublist":h&&!_,"menu__link--active":S},t[E]=!h,t[C]=!!k,t)),onClick:h?function(e){null==l||l(a),_?w(!1):(e.preventDefault(),A())}:function(){null==l||l(a)},href:h?null!=k?k:"#":k},s),u),_&&h&&n.createElement("button",{"aria-label":(0,b.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:u}),type:"button",className:"clean-btn menu__caret",onClick:function(e){e.preventDefault(),A()}})),n.createElement(c.Collapsible,{lazy:!0,as:"ul",className:"menu__list",collapsed:y},n.createElement(T,{items:d,tabIndex:y?-1:0,onItemClick:l,activePath:r,level:o+1})))}function w(e){var t=e.item,a=e.onItemClick,l=e.activePath,r=e.level,o=(0,p.Z)(e,S),s=t.href,d=t.label,u=t.className,b=(0,c.isActiveSidebarItem)(t,l);return n.createElement("li",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarItemLink,c.ThemeClassNames.docs.docSidebarItemLinkLevel(r),"menu__list-item",u),key:d},n.createElement(f.default,(0,m.Z)({className:(0,i.default)("menu__link",{"menu__link--active":b}),"aria-current":b?"page":void 0,to:s},(0,h.Z)(s)&&{onClick:a?function(){return a(t)}:void 0},o),(0,h.Z)(s)?d:n.createElement("span",null,d,n.createElement(v.Z,null))))}var A="sidebar_a3j0",P="sidebarWithHideableNavbar_VlPv",M="sidebarHidden_OqfG",Z="sidebarLogo_hmkv",x="menu_cyFh",B="menuWithAnnouncementBar_+O1J",L="collapseSidebarButton_eoK2",D="collapseSidebarButtonIcon_e+kA";function H(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,b.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,b.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,i.default)("button button--secondary button--outline",L),onClick:t},n.createElement(u,{className:D}))}function F(e){var t,a,l=e.path,r=e.sidebar,o=e.onCollapse,s=e.isHidden,m=function(){var e=(0,c.useAnnouncementBar)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,c.useScrollPosition)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}(),u=(0,c.useThemeConfig)(),b=u.navbar.hideOnScroll,p=u.hideableSidebar;return n.createElement("div",{className:(0,i.default)(A,(t={},t[P]=b,t[M]=s,t))},b&&n.createElement(d.Z,{tabIndex:-1,className:Z}),n.createElement("nav",{className:(0,i.default)("menu thin-scrollbar",x,(a={},a[B]=m,a))},n.createElement("ul",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},n.createElement(T,{items:r,activePath:l,level:1}))),p&&n.createElement(H,{onClick:o}))}var R=function(e){var t=e.toggleSidebar,a=e.sidebar,l=e.path;return n.createElement("ul",{className:(0,i.default)(c.ThemeClassNames.docs.docSidebarMenu,"menu__list")},n.createElement(T,{items:a,activePath:l,onItemClick:function(e){"category"===e.type&&e.href&&t(),"link"===e.type&&t()},level:1}))};function W(e){return n.createElement(c.MobileSecondaryMenuFiller,{component:R,props:e})}var O=n.memo(F),z=n.memo(W);function Y(e){var t=(0,s.Z)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(O,e),l&&n.createElement(z,e))}var q=a(75854),K=a.n(q),V=a(84204),U="backToTopButton_i9tI",X="backToTopButtonShow_wCmF";function j(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var G=function(){var e,t=(0,n.useState)(!1),a=t[0],l=t[1],r=(0,n.useRef)(!1),o=j(),s=o.smoothScrollTop,d=o.cancelScrollToTop;return(0,c.useScrollPosition)((function(e,t){var a=e.scrollY,n=null==t?void 0:t.scrollY;if(n)if(r.current)r.current=!1;else{var o=a<n;if(o||d(),a<300)l(!1);else if(o){var i=document.documentElement.scrollHeight;a+window.innerHeight<i&&l(!0)}else l(!1)}})),(0,c.useLocationChange)((function(e){e.location.hash&&(r.current=!0,l(!1))})),n.createElement("button",{"aria-label":(0,b.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,i.default)("clean-btn",c.ThemeClassNames.common.backToTopButton,U,(e={},e[X]=a,e)),type:"button",onClick:function(){return s()}})},J=a(76775),Q={docPage:"docPage_lDyR",docMainContainer:"docMainContainer_r8cw",docSidebarContainer:"docSidebarContainer_0YBq",docMainContainerEnhanced:"docMainContainerEnhanced_SOUu",docSidebarContainerHidden:"docSidebarContainerHidden_Qlt2",collapsedDocSidebar:"collapsedDocSidebar_zZpm",expandSidebarButtonIcon:"expandSidebarButtonIcon_cxi8",docItemWrapperEnhanced:"docItemWrapperEnhanced_aT5H"},$=a(12859);function ee(e){var t,a,r,s=e.currentDocRoute,d=e.versionMetadata,m=e.children,p=e.sidebarName,f=(0,c.useDocsSidebar)(),h=d.pluginId,v=d.version,E=(0,n.useState)(!1),C=E[0],g=E[1],_=(0,n.useState)(!1),k=_[0],N=_[1],S=(0,n.useCallback)((function(){k&&N(!1),g((function(e){return!e}))}),[k]);return n.createElement(o.Z,{wrapperClassName:c.ThemeClassNames.wrapper.docsPages,pageClassName:c.ThemeClassNames.page.docsDocPage,searchMetadata:{version:v,tag:(0,c.docVersionSearchTag)(h,v)}},n.createElement("div",{className:Q.docPage},n.createElement(G,null),f&&n.createElement("aside",{className:(0,i.default)(Q.docSidebarContainer,(t={},t[Q.docSidebarContainerHidden]=C,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(Q.docSidebarContainer)&&C&&N(!0)}},n.createElement(Y,{key:p,sidebar:f,path:s.path,onCollapse:S,isHidden:k}),k&&n.createElement("div",{className:Q.collapsedDocSidebar,title:(0,b.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,b.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:S,onClick:S},n.createElement(u,{className:Q.expandSidebarButtonIcon}))),n.createElement("main",{className:(0,i.default)(Q.docMainContainer,(a={},a[Q.docMainContainerEnhanced]=C||!f,a))},n.createElement("div",{className:(0,i.default)("container padding-top--md padding-bottom--lg",Q.docItemWrapper,(r={},r[Q.docItemWrapperEnhanced]=C,r))},n.createElement(l.MDXProvider,{components:K()},m)))))}var te=function(e){var t=e.route.routes,a=e.versionMetadata,l=e.location,o=t.find((function(e){return(0,J.LX)(l.pathname,e)}));if(!o)return n.createElement(V.default,null);var i=o.sidebar,s=i?a.docsSidebars[i]:null;return n.createElement(n.Fragment,null,n.createElement($.Z,null,n.createElement("html",{className:a.className})),n.createElement(c.DocsVersionProvider,{version:a},n.createElement(c.DocsSidebarProvider,{sidebar:s},n.createElement(ee,{currentDocRoute:o,versionMetadata:a,sidebarName:i},(0,r.Z)(t,{versionMetadata:a})))))}},84204:function(e,t,a){a.r(t);var n=a(67294),l=a(18882);t.default=function(e){var t=e.location,a={"/redirect-me":"/still-not-found","/docs/next/advanced/command_line_syntax":"/docs/advanced/override_grammar/basic"};if(null==a[t.pathname])return n.createElement(l.Z,{title:"Page Not Found"},n.createElement("div",{className:"container margin-vert--xl","data-canny":!0},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},"Page Not Found"),n.createElement("p",null,"We could not find what you were looking for."),n.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))));window.location.href=a[t.pathname]}}}]);