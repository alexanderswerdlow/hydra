(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(8),a=(n(0),n(268)),r=n(277),c={id:"compose_api",title:"Compose API",sidebar_label:"Compose API"},u={unversionedId:"experimental/compose_api",id:"experimental/compose_api",isDocsHomePage:!1,title:"Compose API",description:"The compose API can compose a config similarly to @hydra.main() anywhere in the code.",source:"@site/docs/experimental/hydra_compose.md",slug:"/experimental/compose_api",permalink:"/docs/next/experimental/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/experimental/hydra_compose.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615407637,sidebar_label:"Compose API",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/experimental/intro"},next:{title:"Overview",permalink:"/docs/next/development/overview"}},s=[{value:"When to use the Compose API",id:"when-to-use-the-compose-api",children:[]},{value:"Initialization methods",id:"initialization-methods",children:[]},{value:"Code example",id:"code-example",children:[]},{value:"API Documentation",id:"api-documentation",children:[]}],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The compose API can compose a config similarly to ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()")," anywhere in the code.",Object(a.b)("br",{parentName:"p"}),"\n","Prior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()"),"\nor by calling one of the initialization methods listed below."),Object(a.b)("h3",{id:"when-to-use-the-compose-api"},"When to use the Compose API"),Object(a.b)("p",null,"The Compose API is useful when ",Object(a.b)("inlineCode",{parentName:"p"},"@hydra.main()")," is not applicable.\nFor example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Inside a Jupyter notebook (",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/next/advanced/jupyter_notebooks"}),"Example"),")"),Object(a.b)("li",{parentName:"ul"},"Inside a unit test (",Object(a.b)("a",Object(i.a)({parentName:"li"},{href:"/docs/next/advanced/unit_testing"}),"Example"),")"),Object(a.b)("li",{parentName:"ul"},"In parts of your application that does not have access to the command line (",Object(a.b)(r.b,{to:"examples/advanced/ad_hoc_composition",mdxType:"GithubLink"},"Example"),")."),Object(a.b)("li",{parentName:"ul"},"To compose multiple configuration objects (",Object(a.b)(r.b,{to:"examples/advanced/ray_example/ray_compose_example.py",mdxType:"GithubLink"},"Example with Ray"),").")),Object(a.b)("div",{class:"alert alert--info",role:"alert"},"Please avoid using the Compose API in cases where ",Object(a.b)("b",null,"@hydra.main()")," can be used. Doing so forfeits many of the benefits of Hydra (e.g., Tab completion, Multirun, Working directory management, Logging management and more)"),Object(a.b)("h3",{id:"initialization-methods"},"Initialization methods"),Object(a.b)("p",null,"There are 3 initialization methods:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initialize()"),": Initialize with a config path relative to the caller"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initialize_config_module()")," : Initialize with config_module (absolute)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"initialize_config_dir()")," : Initialize with a config_dir on the file system (absolute)")),Object(a.b)("p",null,"All 3 can be used as methods or contexts.\nWhen used as methods, they are are initializing Hydra globally and should only be called once.\nWhen used as contexts, they are initializing Hydra within the context can be used multiple times."),Object(a.b)("h3",{id:"code-example"},"Code example"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python"}),'from hydra.experimental import compose, initialize\nfrom omegaconf import OmegaConf\n\nif __name__ == "__main__":\n    # context initialization\n    with initialize(config_path="conf", job_name="test_app"):\n        cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n        print(OmegaConf.to_yaml(cfg))\n\n    # global initialization\n    initialize(config_path="conf", job_name="test_app")\n    cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n    print(OmegaConf.to_yaml(cfg))\n')),Object(a.b)("h3",{id:"api-documentation"},"API Documentation"),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python",metastring:'title="Compose API"',title:'"Compose','API"':!0}),'def compose(\n    config_name: Optional[str] = None,\n    overrides: List[str] = [],\n    return_hydra_config: bool = False,\n) -> DictConfig:\n    """\n    :param config_name: the name of the config\n           (usually the file name without the .yaml extension)\n    :param overrides: list of overrides for config file\n    :param return_hydra_config: True to return the hydra config node in the result\n    :return: the composed config\n    """\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python",metastring:'title="Relative initialization"',title:'"Relative','initialization"':!0}),'def initialize(\n    config_path: Optional[str] = None,\n    job_name: Optional[str] = "app",\n    caller_stack_depth: int = 1,\n) -> None:\n    """\n    Initializes Hydra and add the config_path to the config search path.\n    config_path is relative to the parent of the caller.\n    Hydra detects the caller type automatically at runtime.\n\n    Supported callers:\n    - Python scripts\n    - Python modules\n    - Unit tests\n    - Jupyter notebooks.\n    :param config_path: path relative to the parent of the caller\n    :param job_name: the value for hydra.job.name (By default it is automatically detected based on the caller)\n    :param caller_stack_depth: stack depth of the caller, defaults to 1 (direct caller).\n    """\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python",metastring:'title="Initialzing with config module"',title:'"Initialzing',with:!0,config:!0,'module"':!0}),'def initialize_config_module(config_module: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add the config_module to the config search path.\n    The config module must be importable (an __init__.py must exist at its top level)\n    :param config_module: absolute module name, for example "foo.bar.conf".\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')),Object(a.b)("pre",null,Object(a.b)("code",Object(i.a)({parentName:"pre"},{className:"language-python",metastring:'title="Initialzing with config directory"',title:'"Initialzing',with:!0,config:!0,'directory"':!0}),'def initialize_config_dir(config_dir: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add an absolute config dir to the to the config search path.\n    The config_dir is always a path on the file system and is must be an absolute path.\n    Relative paths will result in an error.\n    :param config_dir: absolute file system path\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')))}d.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var i=n(0),o=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,r=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(r,".").concat(f)]||d[f]||p[f]||a;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var s=2;s<a;s++)r[s]=n[s];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function i(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!i(e)}n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return o}))},270:function(e,t,n){"use strict";n.r(t);var i=n(11);n.d(t,"MemoryRouter",(function(){return i.d})),n.d(t,"Prompt",(function(){return i.f})),n.d(t,"Redirect",(function(){return i.g})),n.d(t,"Route",(function(){return i.h})),n.d(t,"Router",(function(){return i.i})),n.d(t,"StaticRouter",(function(){return i.j})),n.d(t,"Switch",(function(){return i.k})),n.d(t,"generatePath",(function(){return i.l})),n.d(t,"matchPath",(function(){return i.m})),n.d(t,"useHistory",(function(){return i.n})),n.d(t,"useLocation",(function(){return i.o})),n.d(t,"useParams",(function(){return i.p})),n.d(t,"useRouteMatch",(function(){return i.q})),n.d(t,"withRouter",(function(){return i.r})),n.d(t,"BrowserRouter",(function(){return i.a})),n.d(t,"HashRouter",(function(){return i.b})),n.d(t,"Link",(function(){return i.c})),n.d(t,"NavLink",(function(){return i.e}))},271:function(e,t,n){"use strict";var i=n(0),o=n.n(i),a=n(11),r=n(269),c=n(7),u=Object(i.createContext)({collectLink:function(){}}),s=n(272),l=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(e);o<i.length;o++)t.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]])}return n};t.a=function(e){var t,n,d,p=e.isNavLink,f=e.to,m=e.href,b=e.activeClassName,h=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,y=void 0===v||v,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,_=Object(i.useContext)(u),w=f||m,x=Object(r.a)(w),P=null==w?void 0:w.replace("pathname://",""),D=void 0!==P?(n=P,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(i.useRef)(!1),C=p?a.e:a.c,N=c.a.canUseIntersectionObserver;Object(i.useEffect)((function(){return!N&&x&&window.docusaurus.prefetch(D),function(){N&&d&&d.disconnect()}}),[D,N,x]);var I=null!==(t=null==D?void 0:D.startsWith("#"))&&void 0!==t&&t,k=!D||!x||I;return D&&x&&!I&&!g&&_.collectLink(D),k?o.a.createElement("a",Object.assign({href:D},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},O)):o.a.createElement(C,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(D),A.current=!0)},innerRef:function(e){var t,n;N&&e&&x&&(t=e,n=function(){window.docusaurus.prefetch(D)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:D||""},p&&{isActive:h,activeClassName:b}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));var i=n(21),o=n(269);function a(){var e=Object(i.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,i){var a=void 0===i?{}:i,r=a.forcePrependBaseUrl,c=void 0!==r&&r,u=a.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(o.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(a,n,e,t)}}}function r(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(i){e.exports={}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var i=n(270),o=n(275),a=n(276);t.useAllDocsData=function(){return o.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return o.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),o=i.useLocation().pathname;return a.getActivePlugin(n,o,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),o=i.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:a.getActiveVersion(n.pluginData,o)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return a.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),o=i.useLocation().pathname;return a.getActiveVersion(n,o)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),o=i.useLocation().pathname;return a.getActiveDocContext(n,o)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),o=i.useLocation().pathname;return a.getDocVersionSuggestions(n,o)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return o})),n.d(t,"useAllPluginInstancesData",(function(){return a})),n.d(t,"usePluginData",(function(){return r}));var i=n(21);function o(){var e=Object(i.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function a(e){var t=o()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function r(e,t){void 0===t&&(t="default");var n=a(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var i=n(270);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!i.matchPath(t,{path:n.path,exact:!1,strict:!1})})),a=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!a&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return a},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!i.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var o,a,r=t.getActiveVersion(e,n),c=null==r?void 0:r.docs.find((function(e){return!!i.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:r,activeDoc:c,alternateDocVersions:c?(o=c.id,a={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(a[e.name]=t)}))})),a):{}}},t.getDocVersionSuggestions=function(e,n){var i=t.getLatestVersion(e),o=t.getActiveDocContext(e,n),a=o.activeVersion!==i;return{latestDocSuggestion:a?null==o?void 0:o.alternateDocVersions[i.name]:void 0,latestVersionSuggestion:a?i:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var i=n(3),o=n(0),a=n.n(o),r=n(271),c=n(21),u=n(273);function s(e){return a.a.createElement(r.a,Object(i.a)({},e,{to:(t=e.to,o=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==o?void 0:o.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,o}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return a.a.createElement(s,e,a.a.createElement("span",null,"\xa0"),a.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);