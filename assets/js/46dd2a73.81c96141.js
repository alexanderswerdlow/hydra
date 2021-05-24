(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(8),a=(n(0),n(270)),i={id:"logging",title:"Customizing logging",sidebar_label:"Customizing logging"},l={unversionedId:"configure_hydra/logging",id:"version-1.0/configure_hydra/logging",isDocsHomePage:!1,title:"Customizing logging",description:"Example application",source:"@site/versioned_docs/version-1.0/configure_hydra/logging.md",slug:"/configure_hydra/logging",permalink:"/docs/configure_hydra/logging",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/configure_hydra/logging.md",version:"1.0",lastUpdatedBy:"Jeroen Overschie",lastUpdatedAt:1621881226,formattedLastUpdatedAt:"5/24/2021",sidebar_label:"Customizing logging",sidebar:"version-1.0/docs",previous:{title:"job",permalink:"/docs/configure_hydra/job"},next:{title:"Customizing working directory pattern",permalink:"/docs/configure_hydra/workdir"}},c=[],g={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/configure_hydra/logging"},Object(a.b)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),Object(a.b)("p",null,"Hydra is configuring Python standard logging library with the dictConfig method. You can learn more about it ",Object(a.b)("a",{parentName:"p",href:"https://docs.python.org/3/howto/logging.html"},"here"),".\nThere are two logging configurations, one for Hydra itself and one for the executed jobs."),Object(a.b)("p",null,"This example demonstrates how to customize the logging behavior of your Hydra app, by making the following changes\nto the default logging behavior:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Outputs only to stdout (no log file)"),Object(a.b)("li",{parentName:"ul"},"Output a simpler log line pattern")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - hydra/job_logging: custom\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-yaml",metastring:'title="hydra/job_logging/custom.yaml"',title:'"hydra/job_logging/custom.yaml"'},"# @package _group_\nversion: 1\nformatters:\n  simple:\n    format: '[%(levelname)s] - %(message)s'\nhandlers:\n  console:\n    class: logging.StreamHandler\n    formatter: simple\n    stream: ext://sys.stdout\nroot:\n  handlers: [console]\n\ndisable_existing_loggers: false\n")),Object(a.b)("p",null,"This is what the default logging looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$ python my_app.py hydra/job_logging=default\n[2020-08-24 13:43:26,761][__main__][INFO] - Info level message\n")),Object(a.b)("p",null,"And this is what the custom logging looks like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"$ python my_app.py \n[INFO] - Info level message\n")))}s.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=o.a.createContext({}),s=function(e){var t=o.a.useContext(g),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(g.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,g=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,d=p["".concat(i,".").concat(m)]||p[m]||u[m]||a;return n?o.a.createElement(d,l(l({ref:t},g),{},{components:n})):o.a.createElement(d,l({ref:t},g))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var g=2;g<a;g++)i[g]=n[g];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);