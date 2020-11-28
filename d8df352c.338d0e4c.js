(window.webpackJsonp=window.webpackJsonp||[]).push([[149],{205:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var i=n(2),r=n(7),a=(n(0),n(240)),o={id:"strict_mode_flag_deprecated",title:"strict flag mode deprecation",hide_title:!0},c={unversionedId:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",id:"upgrades/0.11_to_1.0/strict_mode_flag_deprecated",isDocsHomePage:!1,title:"strict flag mode deprecation",description:"strict flag mode deprecation",source:"@site/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",slug:"/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",permalink:"/docs/next/upgrades/0.11_to_1.0/strict_mode_flag_deprecated",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/upgrades/0.11_to_1.0/strict_mode_flag_deprecated.md",version:"current",lastUpdatedBy:"Toshihiko Yanase",lastUpdatedAt:1606605430,sidebar:"docs",previous:{title:"Adding an @package directive",permalink:"/docs/next/upgrades/0.11_to_1.0/adding_a_package_directive"},next:{title:"Object instantiation changes",permalink:"/docs/next/upgrades/0.11_to_1.0/object_instantiation_changes"}},l=[{value:"strict flag mode deprecation",id:"strict-flag-mode-deprecation",children:[]},{value:"Alternatives to <code>strict=False</code>",id:"alternatives-to-strictfalse",children:[{value:"Adding config fields through the command line",id:"adding-config-fields-through-the-command-line",children:[]},{value:"Adding fields at runtime",id:"adding-fields-at-runtime",children:[]},{value:"Field existence check",id:"field-existence-check",children:[]}]}],d={rightToc:l};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"strict-flag-mode-deprecation"},"strict flag mode deprecation"),Object(a.b)("p",null,"The strict mode is a flag added to ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()")," to enable two features:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Command line error detection (overriding a field not in the config)"),Object(a.b)("li",{parentName:"ul"},"Runtime config access error detection (accessing/setting a field not in the config)")),Object(a.b)("p",null,"This flag is now deprecated and the ability to turn it off will be removed in Hydra 1.1."),Object(a.b)("h2",{id:"alternatives-to-strictfalse"},"Alternatives to ",Object(a.b)("inlineCode",{parentName:"h2"},"strict=False")),Object(a.b)("p",null,"Below are a few common reasons for people disabling strict mode along with recommended alternatives."),Object(a.b)("h3",{id:"adding-config-fields-through-the-command-line"},"Adding config fields through the command line"),Object(a.b)("p",null,"With strict mode disabled; you can add fields not specified in config file through the command line.\nHydra 1.0 introduces the + prefix to command line overrides, enabling the addition of fields not in the config file."),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'}),"db:\n  driver: mysql\n")),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-yaml",metastring:"{1,6}","{1,6}":!0}),"$ python my_app.py +db.host=localhost\ndb:\n  driver: mysql\n  host: localhost\n")),Object(a.b)("h3",{id:"adding-fields-at-runtime"},"Adding fields at runtime"),Object(a.b)("p",null,"When strict mode is disabled, you can add fields to your config at runtime.\nStrict mode is implemented by setting the OmegaConf ",Object(a.b)("inlineCode",{parentName:"p"},"struct")," flag to True on the root of the config."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can disable the struct flag a specific context using ",Object(a.b)("inlineCode",{parentName:"li"},"open_dict"),"."),Object(a.b)("li",{parentName:"ul"},"You can disable the struct flag permanently for your config using ",Object(a.b)("inlineCode",{parentName:"li"},"OmegaConf.set_struct(cfg, False)"),".")),Object(a.b)("p",null,"Learn more about OmegaConf struct flag ",Object(a.b)("a",{class:"external",href:"https://omegaconf.readthedocs.io/en/latest/usage.html#struct-flag",target:"_blank"},"here"),"."),Object(a.b)("h3",{id:"field-existence-check"},"Field existence check"),Object(a.b)("p",null,"With strict mode disabled, you can check if a field is in the config by comparing it to None:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),"if cfg.host is None:\n    # host is not in the config\n")),Object(a.b)("p",null,"This will no longer work because an exception will be thrown when the ",Object(a.b)("inlineCode",{parentName:"p"},"host")," field is accessed.",Object(a.b)("br",{parentName:"p"}),"\n","Use ",Object(a.b)("inlineCode",{parentName:"p"},"in")," or ",Object(a.b)("inlineCode",{parentName:"p"},"hasattr")," instead:"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'if "host" not in cfg:\n    # host is not in the config\n\nif not hasattr(cfg, "host"):\n    # host is not in the config\n')))}s.isMDXComponent=!0},240:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),s=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),b=i,f=p["".concat(o,".").concat(b)]||p[b]||u[b]||a;return n?r.a.createElement(f,c(c({ref:t},d),{},{components:n})):r.a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var d=2;d<a;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);