"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1550],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return s},MDXProvider:function(){return l},mdx:function(){return y},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),l=o,f=u["".concat(i,".").concat(l)]||u[l]||m[l]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95529:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],c={id:"jupyter_notebooks",title:"Hydra in Jupyter Notebooks"},p=void 0,s={unversionedId:"advanced/jupyter_notebooks",id:"version-1.1/advanced/jupyter_notebooks",title:"Hydra in Jupyter Notebooks",description:"Hydra supports config composition inside Jupyter notebooks via the Compose API.",source:"@site/versioned_docs/version-1.1/advanced/jupyter_notebooks.md",sourceDirName:"advanced",slug:"/advanced/jupyter_notebooks",permalink:"/docs/advanced/jupyter_notebooks",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/jupyter_notebooks.md",tags:[],version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1643079342,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"jupyter_notebooks",title:"Hydra in Jupyter Notebooks"},sidebar:"version-1.1/docs",previous:{title:"Application packaging",permalink:"/docs/advanced/app_packaging"},next:{title:"Hydra in Unit Tests",permalink:"/docs/advanced/unit_testing"}},u=[],d={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.mdx)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("p",null,"Hydra supports config composition inside Jupyter notebooks via the ",(0,a.mdx)("a",{parentName:"p",href:"/docs/advanced/compose_api"},"Compose API"),".  "),(0,a.mdx)("p",null,"Run the Notebook in a the Binder to see a live demo, or open the Notebook source on GitHub."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://mybinder.org/v2/gh/facebookresearch/hydra/main?filepath=examples%252jupyter_notebooks"},(0,a.mdx)("img",{parentName:"a",src:"https://mybinder.org/badge_logo.svg",alt:"Binder"})),"\n",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra//tree/main/examples/jupyter_notebooks/"},(0,a.mdx)("img",{parentName:"a",src:"https://img.shields.io/badge/-Notebooks%20source-informational",alt:"Notebook source"}))))}l.isMDXComponent=!0}}]);