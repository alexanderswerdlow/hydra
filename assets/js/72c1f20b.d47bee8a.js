"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1320],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return c},MDXProvider:function(){return m},mdx:function(){return g},useMDXComponents:function(){return u},withMDXComponents:function(){return d}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(){return a=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),d=function(e){return function(n){var t=u(n.components);return r.createElement(e,a({},n,{components:t}))}},u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(f,s(s({ref:n},c),{},{components:t})):r.createElement(f,s({ref:n},c))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},93899:function(e,n,t){t.d(n,{Z:function(){return l},T:function(){return c}});var r=t(87462),o=t(67294),a=t(39960),i=t(52263),s=t(80907);function l(e){return o.createElement(a.default,(0,r.Z)({},e,{to:(n=e.to,l=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(t=null==l?void 0:l.name)?t:"current"]+n),target:"_blank"}));var n,t,l}function c(e){var n,t=null!=(n=e.text)?n:"Example (Click Here)";return o.createElement(l,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+t+"-informational",alt:"Example (Click Here)"}))}},39069:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=t(93899),s=["components"],l={id:"schema",title:"Structured config schema"},c=void 0,d={unversionedId:"tutorials/structured_config/schema",id:"version-1.0/tutorials/structured_config/schema",title:"Structured config schema",description:"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files).",source:"@site/versioned_docs/version-1.0/tutorials/structured_config/5_schema.md",sourceDirName:"tutorials/structured_config",slug:"/tutorials/structured_config/schema",permalink:"/docs/1.0/tutorials/structured_config/schema",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/structured_config/5_schema.md",tags:[],version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1643079342,formattedLastUpdatedAt:"1/25/2022",sidebarPosition:5,frontMatter:{id:"schema",title:"Structured config schema"},sidebar:"version-1.0/docs",previous:{title:"Defaults List",permalink:"/docs/1.0/tutorials/structured_config/defaults"},next:{title:"Static schema with many configs",permalink:"/docs/1.0/tutorials/structured_config/static_schema"}},u=[],m={toc:u};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)(i.T,{to:"examples/tutorials/structured_configs/5_structured_config_schema",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"We have seen how to use Structured Configs as configuration, but they can also be used as a schema (i.e. validating configuration files)."),(0,a.mdx)("p",null,"When Hydra loads a config file, it looks in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ConfigStore")," for a Structured Config with a matching name and group.\nIf found, it is used as the schema for the newly loaded config."),(0,a.mdx)("p",null,"This page shows how to validate ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," files against a pre-defined schema."),(0,a.mdx)("p",null,"Given the config directory structure:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-text"},"conf/\n\u251c\u2500\u2500 config.yaml\n\u2514\u2500\u2500 db\n    \u251c\u2500\u2500 mysql.yaml\n    \u2514\u2500\u2500 postgresql.yaml\n")),(0,a.mdx)("p",null,"We can add Structured Configs for ",(0,a.mdx)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"postgresql.yaml"),", providing a schema for validating them."),(0,a.mdx)("p",null,"The Structured Configs below are stored as ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/mysql")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/postgresql"),". They will be used as schema\nwhen we load their corresponding config files."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = MISSING\n\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    driver: str = "mysql"\n    port: int = 3306\n    user: str = MISSING\n    password: str = MISSING\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    driver: str = "postgresql"\n    user: str = MISSING\n    port: int = 5432\n    password: str = MISSING\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    # Note the lack of defaults list here.\n    # In this example it comes from config.yaml\n    db: DBConfig = MISSING\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n# The config name matches both \'config.yaml\' under the conf directory\n# and \'config\' stored in the ConfigStore.\n# config.yaml will compose in db: mysql by default (per the defaults list),\n# and it will be validated against the schema from the Config class\n@hydra.main(config_path="conf", config_name="config")\ndef my_app(cfg: Config) -> None:\n    print(OmegaConf.to_yaml(cfg))\n')),(0,a.mdx)("p",null,"When ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/mysql.yaml")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"db/postgresql.yaml")," are loaded, the corresponding configs from the ",(0,a.mdx)("inlineCode",{parentName:"p"},"ConfigStore")," are used automatically.\nThis can be used to validate that both the configuration files (",(0,a.mdx)("inlineCode",{parentName:"p"},"mysql.yaml")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"postgresql.yaml"),") and the command line overrides are conforming to the schema. "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre"},"$ python my_app.py db.port=fail\nError merging override db.port=fail\nValue 'fail' could not be converted to Integer\n        full_key: db.port\n        reference_type=Optional[MySQLConfig]\n        object_type=MySQLConfig\n")),(0,a.mdx)("p",null,"Unlike the example in the previous page, the Defaults List here is ",(0,a.mdx)("inlineCode",{parentName:"p"},"config.yaml")," and ",(0,a.mdx)("strong",{parentName:"p"},"not")," in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"Config")," class."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n  - db: mysql\n")))}p.isMDXComponent=!0}}]);