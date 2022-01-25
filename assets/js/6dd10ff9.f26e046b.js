"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8272],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return s},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),u=function(e){return function(n){var t=d(n.components);return a.createElement(e,i({},n,{components:t}))}},d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),s=r,f=u["".concat(o,".").concat(s)]||u[s]||m[s]||i;return t?a.createElement(f,p(p({ref:n},l),{},{components:t})):a.createElement(f,p({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return c},T:function(){return l}});var a=t(87462),r=t(67294),i=t(39960),o=t(52263),p=t(80907);function c(e){return r.createElement(i.default,(0,a.Z)({},e,{to:(n=e.to,c=(0,p.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==c?void 0:c.name)?t:"current"]+n),target:"_blank"}));var n,t,c}function l(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return r.createElement(c,e,r.createElement("span",null,"\xa0"),r.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},99575:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=t(93899),p=["components"],c={id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},l=void 0,u={unversionedId:"advanced/app_packaging",id:"version-1.1/advanced/app_packaging",title:"Application packaging",description:"You can package your Hydra application along with its configuration.",source:"@site/versioned_docs/version-1.1/advanced/packaging.md",sourceDirName:"advanced",slug:"/advanced/app_packaging",permalink:"/docs/advanced/app_packaging",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/packaging.md",tags:[],version:"1.1",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1643079342,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"app_packaging",title:"Application packaging",sidebar_label:"Application packaging"},sidebar:"version-1.1/docs",previous:{title:"Plugin development",permalink:"/docs/advanced/plugins/develop"},next:{title:"Hydra in Jupyter Notebooks",permalink:"/docs/advanced/jupyter_notebooks"}},d=[],s={toc:d};function m(e){var n=e.components,t=(0,r.Z)(e,p);return(0,i.mdx)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)(o.T,{to:"examples/advanced/hydra_app_example",mdxType:"ExampleGithubLink"}),(0,i.mdx)("p",null,"You can package your Hydra application along with its configuration.\nAn example ",(0,i.mdx)(o.Z,{to:"examples/advanced/hydra_app_example",mdxType:"GithubLink"},"standalone application")," is included in the repo."),(0,i.mdx)("p",null,"Run it with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ python examples/advanced/hydra_app_example/hydra_app/main.py\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,i.mdx)("p",null,"Install it with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ pip install examples/advanced/hydra_app_example\n...\nSuccessfully installed hydra-app-0.1\n")),(0,i.mdx)("p",null,"Once installed, run the installed app with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"$ hydra_app\ndataset:\n  name: imagenet\n  path: /datasets/imagenet\n")),(0,i.mdx)("p",null,"The installed app will use the packaged configuration files."))}m.isMDXComponent=!0}}]);