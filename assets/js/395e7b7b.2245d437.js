"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2245],{3905:function(e,t,r){r.r(t),r.d(t,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return v},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){return function(t){var r=c(t.components);return n.createElement(e,a({},t,{components:r}))}},c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),u=c(r),p=o,f=u["".concat(i,".").concat(p)]||u[p]||m[p]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},87579:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],s={id:"defaults_list_override",title:"Defaults List Overrides"},d=void 0,l={unversionedId:"upgrades/1.0_to_1.1/defaults_list_override",id:"upgrades/1.0_to_1.1/defaults_list_override",title:"Defaults List Overrides",description:"Hydra versions prior to 1.1 supported overriding of Hydra config groups via the Defaults List in this manner:",source:"@site/docs/upgrades/1.0_to_1.1/defaults_list_override.md",sourceDirName:"upgrades/1.0_to_1.1",slug:"/upgrades/1.0_to_1.1/defaults_list_override",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_override",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/upgrades/1.0_to_1.1/defaults_list_override.md",tags:[],version:"current",lastUpdatedBy:"Akshay Raj Dhamija",lastUpdatedAt:1705547872,formattedLastUpdatedAt:"1/18/2024",frontMatter:{id:"defaults_list_override",title:"Defaults List Overrides"},sidebar:"docs",previous:{title:"Changes to default composition order",permalink:"/docs/upgrades/1.0_to_1.1/default_composition_order"},next:{title:"Defaults List interpolation",permalink:"/docs/upgrades/1.0_to_1.1/defaults_list_interpolation"}},u=[],c={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Hydra versions prior to 1.1 supported overriding of Hydra config groups via the Defaults List in this manner:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"defaults:\n - model: resnet50\n - hydra/launcher: submitit\n")),(0,a.mdx)("p",null,"As of Hydra 1.1, Config group overrides must be marked explicitly with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"override")," keyword:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:"{3}","{3}":!0},"defaults:\n - model: resnet50\n - override hydra/launcher: submitit\n")),(0,a.mdx)("p",null,"The Defaults List is described ",(0,a.mdx)("a",{parentName:"p",href:"/docs/advanced/defaults_list"},"here"),"."),(0,a.mdx)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,a.mdx)("h5",{parentName:"div"},(0,a.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,a.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.mdx)("div",{parentName:"div",className:"admonition-content"},(0,a.mdx)("p",{parentName:"div"},"Omitting the ",(0,a.mdx)("inlineCode",{parentName:"p"},"override")," keyword when overriding Hydra's config groups will result in an error in Hydra 1.2"))))}p.isMDXComponent=!0}}]);