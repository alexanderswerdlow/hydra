(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return f}));var r=n(3),i=n(8),o=(n(0),n(268)),a=n(277),c={id:"simple_cli",title:"A simple command-line application"},u={unversionedId:"tutorials/basic/your_first_app/simple_cli",id:"tutorials/basic/your_first_app/simple_cli",isDocsHomePage:!1,title:"A simple command-line application",description:"This is a simple Hydra application that prints your configuration.",source:"@site/docs/tutorials/basic/your_first_app/1_simple_cli.md",slug:"/tutorials/basic/your_first_app/simple_cli",permalink:"/docs/next/tutorials/basic/your_first_app/simple_cli",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/tutorials/basic/your_first_app/1_simple_cli.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1615407637,sidebar:"docs",previous:{title:"Tutorials intro",permalink:"/docs/next/tutorials/intro"},next:{title:"Specifying a config file",permalink:"/docs/next/tutorials/basic/your_first_app/config_file"}},s=[],l={toc:s};function f(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(a.a,{to:"examples/tutorials/basic/your_first_hydra_app/1_simple_cli/my_app.py",mdxType:"ExampleGithubLink"}),Object(o.b)("p",null,"This is a simple Hydra application that prints your configuration.\nThe ",Object(o.b)("inlineCode",{parentName:"p"},"my_app")," function is a place holder for your code.\nWe will slowly evolve this example to showcase more Hydra features."),Object(o.b)("p",null,"The examples in this tutorial are available ",Object(o.b)(a.b,{to:"examples/tutorials/basic",mdxType:"GithubLink"},"here"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="my_app.py"',title:'"my_app.py"'}),'from omegaconf import DictConfig, OmegaConf\nimport hydra\n\n@hydra.main()\ndef my_app(cfg: DictConfig) -> None:\n    print(OmegaConf.to_yaml(cfg))\n\nif __name__ == "__main__":\n    my_app()\n')),Object(o.b)("p",null,"In this example, Hydra creates an empty ",Object(o.b)("inlineCode",{parentName:"p"},"cfg")," object and pass it to the function annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main"),"."),Object(o.b)("p",null,"You can add config values via the command line. The ",Object(o.b)("inlineCode",{parentName:"p"},"+")," indicates that the field is new."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),"$ python my_app.py +db.driver=mysql +db.user=omry +db.password=secret\ndb:\n  driver: mysql\n  user: omry\n  password: secret\n")),Object(o.b)("p",null,"See ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/advanced/hydra-command-line-flags"}),"Hydra's command line flags")," and\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/advanced/override_grammar/basic"}),"Basic Override Syntax")," for more information about the command line."))}f.isMDXComponent=!0},268:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),l=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},f=function(e){var t=l(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),f=l(n),d=r,m=f["".concat(a,".").concat(d)]||f[d]||p[d]||o;return n?i.a.createElement(m,c(c({ref:t},s),{},{components:n})):i.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<o;s++)a[s]=n[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},269:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}))},270:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},271:function(e,t,n){"use strict";var r=n(0),i=n.n(r),o=n(11),a=n(269),c=n(7),u=Object(r.createContext)({collectLink:function(){}}),s=n(272),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};t.a=function(e){var t,n,f,p=e.isNavLink,d=e.to,m=e.href,b=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],h=e.autoAddBaseUrl,y=void 0===h||h,O=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]),j=Object(s.b)().withBaseUrl,w=Object(r.useContext)(u),D=d||m,_=Object(a.a)(D),x=null==D?void 0:D.replace("pathname://",""),P=void 0!==x?(n=x,y&&function(e){return e.startsWith("/")}(n)?j(n):n):void 0,A=Object(r.useRef)(!1),V=p?o.e:o.c,E=c.a.canUseIntersectionObserver;Object(r.useEffect)((function(){return!E&&_&&window.docusaurus.prefetch(P),function(){E&&f&&f.disconnect()}}),[P,E,_]);var C=null!==(t=null==P?void 0:P.startsWith("#"))&&void 0!==t&&t,k=!P||!_||C;return P&&_&&!C&&!g&&w.collectLink(P),k?i.a.createElement("a",Object.assign({href:P},D&&!_&&{target:"_blank",rel:"noopener noreferrer"},O)):i.a.createElement(V,Object.assign({},O,{onMouseEnter:function(){A.current||(window.docusaurus.preload(P),A.current=!0)},innerRef:function(e){var t,n;E&&e&&_&&(t=e,n=function(){window.docusaurus.prefetch(P)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(t),f.disconnect(),n())}))}))).observe(t))},to:P||""},p&&{isActive:v,activeClassName:b}))}},272:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));var r=n(21),i=n(269);function o(){var e=Object(r.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var o=void 0===r?{}:r,a=o.forcePrependBaseUrl,c=void 0!==a&&a,u=o.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if(Object(i.b)(n))return n;if(c)return t+n;var l=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+l:l}(o,n,e,t)}}}function a(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},273:function(e,t,n){try{e.exports=n(274)}catch(r){e.exports={}}},274:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(270),i=n(275),o=n(276);t.useAllDocsData=function(){return i.useAllPluginInstancesData("docusaurus-plugin-content-docs")},t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)},t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),i=r.useLocation().pathname;return o.getActivePlugin(n,i,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),i=r.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,i)}},t.useVersions=function(e){return t.useDocsData(e).versions},t.useLatestVersion=function(e){var n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveVersion(n,i)},t.useActiveDocContext=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getActiveDocContext(n,i)},t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),i=r.useLocation().pathname;return o.getDocVersionSuggestions(n,i)}},275:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return i})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return a}));var r=n(21);function i(){var e=Object(r.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var t=i()[e];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return t}function a(e,t){void 0===t&&(t="default");var n=o(e)[t];if(!n)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+t);return n}},276:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(270);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var i=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),o=i?{pluginId:i[0],pluginData:i[1]}:void 0;if(!o&&n.failfast)throw new Error("Can't find active docs plugin for pathname="+t+", while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: "+Object.values(e).map((function(e){return e.path})).join(", "));return o},t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))},t.getActiveVersion=function(e,n){var i=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==i})),[i]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))},t.getActiveDocContext=function(e,n){var i,o,a=t.getActiveVersion(e,n),c=null==a?void 0:a.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:a,activeDoc:c,alternateDocVersions:c?(i=c.id,o={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===i&&(o[e.name]=t)}))})),o):{}}},t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),i=t.getActiveDocContext(e,n),o=i.activeVersion!==r;return{latestDocSuggestion:o?null==i?void 0:i.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},277:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var r=n(3),i=n(0),o=n.n(i),a=n(271),c=n(21),u=n(273);function s(e){return o.a.createElement(a.a,Object(r.a)({},e,{to:(t=e.to,i=Object(u.useActiveVersion)(),Object(c.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!==(n=null==i?void 0:i.name)&&void 0!==n?n:"current"]+t),target:"_blank"}));var t,n,i}function l(e){var t,n=null!==(t=e.text)&&void 0!==t?t:"Example";return o.a.createElement(s,e,o.a.createElement("span",null,"\xa0"),o.a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}}}]);