"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[885],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return g},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){return function(t){var n=d(t.components);return r.createElement(e,a({},t,{components:n}))}},d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(n),p=o,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||a;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},93899:function(e,t,n){n.d(t,{Z:function(){return c},T:function(){return l}});var r=n(87462),o=n(67294),a=n(39960),i=n(52263),s=n(80907);function c(e){return o.createElement(a.default,(0,r.Z)({},e,{to:(t=e.to,c=(0,s.useActiveVersion)(),(0,i.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==c?void 0:c.name)?n:"current"]+t),target:"_blank"}));var t,n,c}function l(e){var t,n=null!=(t=e.text)?t:"Example (Click Here)";return o.createElement(c,e,o.createElement("span",null,"\xa0"),o.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},91060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=n(93899),s=["components"],c={id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},l=void 0,u={unversionedId:"advanced/instantiate_objects/structured_config",id:"version-1.1/advanced/instantiate_objects/structured_config",title:"Structured Configs example",description:"This example demonstrates the use of Structured Configs to instantiated objects.",source:"@site/versioned_docs/version-1.1/advanced/instantiate_objects/structured_config.md",sourceDirName:"advanced/instantiate_objects",slug:"/advanced/instantiate_objects/structured_config",permalink:"/docs/advanced/instantiate_objects/structured_config",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.1/advanced/instantiate_objects/structured_config.md",tags:[],version:"1.1",lastUpdatedBy:"Jasha10",lastUpdatedAt:1646931550,formattedLastUpdatedAt:"3/10/2022",frontMatter:{id:"structured_config",title:"Structured Configs example",sidebar_label:"Structured Configs example"},sidebar:"version-1.1/docs",previous:{title:"Config files example",permalink:"/docs/advanced/instantiate_objects/config_files"},next:{title:"Compose API",permalink:"/docs/advanced/compose_api"}},d=[{value:"Example usage",id:"example-usage",children:[],level:4},{value:"Sample Output",id:"sample-output",children:[],level:4}],p={toc:d};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.mdx)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(i.T,{text:"Example applications",to:"examples/instantiate",mdxType:"ExampleGithubLink"}),(0,a.mdx)("p",null,"This example demonstrates the use of Structured Configs to instantiated objects."),(0,a.mdx)("h4",{id:"example-usage"},"Example usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'},'class DBConnection:\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        self.driver = driver\n        self.host = host\n        self.port = port\n\n    def connect(self) -> None:\n        print(f"{self.driver} connecting to {self.host}")\n\nclass MySQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n\nclass PostgreSQLConnection(DBConnection):\n    def __init__(self, driver: str, host: str, port: int, timeout: int) -> None:\n        super().__init__(driver=driver, host=host, port=port)\n        self.timeout = timeout\n\n@dataclass\nclass DBConfig:\n    driver: str = MISSING\n    host: str = "localhost"\n    port: int = 80\n\n@dataclass\nclass MySQLConfig(DBConfig):\n    _target_: str = "my_app.MySQLConnection"\n    driver: str = "MySQL"\n    port: int = 1234\n\n@dataclass\nclass PostGreSQLConfig(DBConfig):\n    _target_: str = "my_app.PostgreSQLConnection"\n    driver: str = "PostgreSQL"\n    port: int = 5678\n    timeout: int = 10\n\n@dataclass\nclass Config:\n    defaults: List[Any] = field(default_factory=lambda: [{"db": "mysql"}])\n    db: DBConfig = MISSING\n\n\ncs = ConfigStore.instance()\ncs.store(name="config", node=Config)\ncs.store(group="db", name="mysql", node=MySQLConfig)\ncs.store(group="db", name="postgresql", node=PostGreSQLConfig)\n\n@hydra.main(config_name="config")\ndef my_app(cfg: Config) -> None:\n    connection = instantiate(cfg.db)\n    connection.connect()\n\nif __name__ == "__main__":\n    my_app()\n')),(0,a.mdx)("h4",{id:"sample-output"},"Sample Output"),(0,a.mdx)("div",{className:"row"},(0,a.mdx)("div",{className:"col col--6"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py\nMySQL connecting to localhost:1234\n"))),(0,a.mdx)("div",{className:"col col--6"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-bash"},"$ python my_app.py db=postgresql\nPostgreSQL connecting to localhost:5678\n")))))}f.isMDXComponent=!0}}]);