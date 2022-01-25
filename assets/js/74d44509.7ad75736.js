"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1260],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return u},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return f},withMDXComponents:function(){return l}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){return function(t){var n=f(t.components);return r.createElement(e,o({},t,{components:n}))}},f=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=f(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=f(n),p=i,m=l["".concat(a,".").concat(p)]||l[p]||d[p]||o;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return s},T:function(){return u}});var r=n(87462),i=n(67294),o=n(39960),a=n(52263),c=n(80907);function s(e){return i.createElement(o.default,(0,r.Z)({},e,{to:(t=e.to,s=(0,c.useActiveVersion)(),(0,a.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function u(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return i.createElement(s,e,i.createElement("span",null,"\xa0"),i.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},3794:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return f},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=n(93899),c=["components"],s={id:"hierarchical_static_config",title:"A hierarchical static configuration"},u=void 0,l={unversionedId:"tutorials/structured_config/hierarchical_static_config",id:"tutorials/structured_config/hierarchical_static_config",title:"A hierarchical static configuration",description:"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked.",source:"@site/docs/tutorials/structured_config/2_hierarchical_static_config.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/hierarchical_static_config",permalink:"/docs/next/tutorials/structured_config/hierarchical_static_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/docs/tutorials/structured_config/2_hierarchical_static_config.md",tags:[],version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1643079342,formattedLastUpdatedAt:"1/25/2022",sidebarPosition:2,frontMatter:{id:"hierarchical_static_config",title:"A hierarchical static configuration"},sidebar:"docs",previous:{title:"Minimal example",permalink:"/docs/next/tutorials/structured_config/minimal_example"},next:{title:"Config Groups",permalink:"/docs/next/tutorials/structured_config/config_groups"}},f=[],p={toc:f};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(a.T,{to:"examples/tutorials/structured_configs/2_static_complex",mdxType:"ExampleGithubLink"}),(0,o.mdx)("p",null,"Dataclasses can be nested and then accessed via a common root.  The entire tree is type checked."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-python"},'from dataclasses import dataclass\n\nimport hydra\nfrom hydra.core.config_store import ConfigStore\n\n@dataclass\nclass MySQLConfig:\n    host: str = "localhost"\n    port: int = 3306\n\n@dataclass\nclass UserInterface:\n    title: str = "My app"\n    width: int = 1024\n    height: int = 768\n\n@dataclass\nclass MyConfig:\n    db: MySQLConfig = MySQLConfig()\n    ui: UserInterface = UserInterface()\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=MyConfig)\n\n@hydra.main(config_path=None, config_name="config")\ndef my_app(cfg: MyConfig) -> None:\n    print(f"Title={cfg.ui.title}, size={cfg.ui.width}x{cfg.ui.height} pixels")\n\nif __name__ == "__main__":\n    my_app()\n')))}d.isMDXComponent=!0}}]);