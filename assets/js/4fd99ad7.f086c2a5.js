"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return c},withMDXComponents:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){return function(n){var t=c(n.components);return r.createElement(e,i({},n,{components:t}))}},c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(t),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return d},T:function(){return s}});var r=t(87462),a=t(67294),i=t(39960),o=t(52263),l=t(80907);function d(e){return a.createElement(i.default,(0,r.Z)({},e,{to:(n=e.to,d=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==d?void 0:d.name)?t:"current"]+n),target:"_blank"}));var n,t,d}function s(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return a.createElement(d,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},97273:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=t(93899),l=["components"],d={id:"documentation",title:"Documentation",sidebar_label:"Documentation"},s=void 0,u={unversionedId:"development/documentation",id:"development/documentation",title:"Documentation",description:"NEWS Entries",source:"@site/docs/development/documentation.md",sourceDirName:"development",slug:"/development/documentation",permalink:"/docs/development/documentation",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/development/documentation.md",tags:[],version:"current",lastUpdatedBy:"Akshay Raj Dhamija",lastUpdatedAt:1705547872,formattedLastUpdatedAt:"1/18/2024",frontMatter:{id:"documentation",title:"Documentation",sidebar_label:"Documentation"},sidebar:"docs",previous:{title:"Style Guide",permalink:"/docs/development/style_guide"},next:{title:"Release process",permalink:"/docs/development/release"}},c=[{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[],level:3}],level:2},{value:"Website setup",id:"website-setup",children:[{value:"Install",id:"install",children:[],level:3},{value:"Local Development",id:"local-development",children:[],level:3}],level:2}],m={toc:c};function p(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"news-entries"},"NEWS Entries"),(0,i.mdx)("p",null,"The ",(0,i.mdx)(o.Z,{to:"NEWS.md",mdxType:"GithubLink"},"NEWS.md")," file is managed using ",(0,i.mdx)("inlineCode",{parentName:"p"},"towncrier")," and all non-trivial changes\nmust be accompanied by a news entry."),(0,i.mdx)("p",null,"To add an entry to the news file, first, you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",(0,i.mdx)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),(0,i.mdx)("p",null,"Once you have an issue or pull request, you take the number, and you create a\nfile inside the ",(0,i.mdx)("inlineCode",{parentName:"p"},"news/")," directory (in case the change is directly related to Hydra)\nor in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"news/")," directory of the relevant plugin. The file is named after the\nissue number with one of the following extensions:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"api_change")," : API Change (Renames, deprecations, and removals)"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"feature")," : Addition of a new feature"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"bugfix")," : Fixing of a bug"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"docs")," : Addition or updates to documentation"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"maintenance")," : Changes that improve the maintainability of the code")),(0,i.mdx)("p",null,"If your issue or PR number is ",(0,i.mdx)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, you would\ncreate a file ",(0,i.mdx)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",(0,i.mdx)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",(0,i.mdx)("inlineCode",{parentName:"p"},"news/NNNN.api_change"),"). Likewise, if a PR touches multiple issues/PRs, you may\ncreate a file for each of them with the exact same contents, and Towncrier will\ndeduplicate them."),(0,i.mdx)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),(0,i.mdx)("p",null,"The contents of this file are markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),(0,i.mdx)("p",null,"To maintain a consistent style in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'),(0,i.mdx)("h2",{id:"website-setup"},"Website setup"),(0,i.mdx)("p",null,"The website is built using ",(0,i.mdx)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2"),".",(0,i.mdx)("br",{parentName:"p"}),"\n","Run the following commands from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"website")," directory."),(0,i.mdx)("h3",{id:"install"},"Install"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ yarn\n")),(0,i.mdx)("h3",{id:"local-development"},"Local Development"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre"},"$ yarn start\n")),(0,i.mdx)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,i.mdx)("p",null,"For more details, refer ",(0,i.mdx)(o.Z,{to:"website/README.md",mdxType:"GithubLink"},"here"),"."))}p.isMDXComponent=!0}}]);