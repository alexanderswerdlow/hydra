"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[354],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return h},useMDXComponents:function(){return s},withMDXComponents:function(){return u}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},i.apply(this,arguments)}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function p(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){return function(n){var r=s(n.components);return t.createElement(e,i({},n,{components:r}))}},s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):p(p({},n),e)),r},d=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(a,".").concat(d)]||u[d]||f[d]||i;return r?t.createElement(m,p(p({ref:n},c),{},{components:r})):t.createElement(m,p({ref:n},c))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46010:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var t=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],p={id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},l=void 0,c={unversionedId:"configure_hydra/app_help",id:"version-0.11/configure_hydra/app_help",title:"Customizing Application's help",description:"Hydra provides two different help options:",source:"@site/versioned_docs/version-0.11/configure_hydra/app_help.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/app_help",permalink:"/docs/0.11/configure_hydra/app_help",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-0.11/configure_hydra/app_help.md",tags:[],version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1643079342,formattedLastUpdatedAt:"1/25/2022",frontMatter:{id:"app_help",title:"Customizing Application's help",sidebar_label:"Customizing Application's help"},sidebar:"version-0.11/docs",previous:{title:"Customizing working directory pattern",permalink:"/docs/0.11/configure_hydra/workdir"},next:{title:"Colorlog plugin",permalink:"/docs/0.11/plugins/colorlog"}},u=[],s={toc:u};function d(e){var n=e.components,r=(0,o.Z)(e,a);return(0,i.mdx)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"Hydra provides two different help options:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--help")," : Application specific help"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"--hydra-help")," Hydra specific help. ")),(0,i.mdx)("p",null,"Example output of ",(0,i.mdx)("inlineCode",{parentName:"p"},"--help"),":"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py --help\nmy_app is powered by Hydra.\n\n== Configuration groups ==\nCompose your configuration from those groups (group=option)\n\ndb: mysql, postgresql\n\n\n== Config ==\nOverride anything in the config (foo.bar=value)\n\ndb:\n  driver: mysql\n  pass: secret\n  user: omry\n\n\nPowered by Hydra (https://hydra.cc)\nUse --hydra-help to view Hydra specific help\n")),(0,i.mdx)("p",null,"This output is generated from the following default configuration.\nYou can override the individual components like ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra.help.app_name")," or the whole template. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  help:\n    # App name, override to match the name your app is known by\n    app_name: ${hydra.job.name}\n\n    # Help header, customize to describe your app to your users\n    header: |\n      ${hydra.help.app_name} is powered by Hydra.\n\n    footer: |\n      Powered by Hydra (https://hydra.cc)\n      Use --hydra-help to view Hydra specific help\n\n    # Basic Hydra flags:\n    #   $FLAGS_HELP\n    #\n    # Config groups, choose one of:\n    #   $APP_CONFIG_GROUPS: All config groups that does not start with hydra/.\n    #   $HYDRA_CONFIG_GROUPS: All the Hydra config groups (starts with hydra/)\n    #\n    # Configuration generated with overrides:\n    #   $CONFIG : Generated config\n    #\n    template: |\n      ${hydra.help.header}\n      == Configuration groups ==\n      Compose your configuration from those groups (group=option)\n\n      $APP_CONFIG_GROUPS\n\n      == Config ==\n      Override anything in the config (foo.bar=value)\n\n      $CONFIG\n\n      ${hydra.help.footer}\n")))}d.isMDXComponent=!0}}]);