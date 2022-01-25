"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8302],{3905:function(e,n,r){r.r(n),r.d(n,{MDXContext:function(){return p},MDXProvider:function(){return m},mdx:function(){return f},useMDXComponents:function(){return c},withMDXComponents:function(){return l}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var r=arguments[n];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},o.apply(this,arguments)}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),l=function(e){return function(n){var r=c(n.components);return t.createElement(e,o({},n,{components:r}))}},c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=c(r),m=a,h=l["".concat(i,".").concat(m)]||l[m]||d[m]||o;return r?t.createElement(h,s(s({ref:n},p),{},{components:r})):t.createElement(h,s({ref:n},p))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}h.displayName="MDXCreateElement"},92617:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},u=void 0,p={unversionedId:"tutorials/basic/running_your_app/multi-run",id:"version-1.0/tutorials/basic/running_your_app/multi-run",title:"Multi-run",description:"Sometimes you want to run a parameter sweep.",source:"@site/versioned_docs/version-1.0/tutorials/basic/running_your_app/2_multirun.md",sourceDirName:"tutorials/basic/running_your_app",slug:"/tutorials/basic/running_your_app/multi-run",permalink:"/docs/1.0/tutorials/basic/running_your_app/multi-run",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.0/tutorials/basic/running_your_app/2_multirun.md",tags:[],version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1643079342,formattedLastUpdatedAt:"1/25/2022",sidebarPosition:2,frontMatter:{id:"multi-run",title:"Multi-run",sidebar_label:"Multi-run"},sidebar:"version-1.0/docs",previous:{title:"Putting it all together",permalink:"/docs/1.0/tutorials/basic/your_first_app/composition"},next:{title:"Output/Working directory",permalink:"/docs/1.0/tutorials/basic/running_your_app/working_directory"}},l=[{value:"Sweeper",id:"sweeper",children:[],level:3},{value:"Launcher",id:"launcher",children:[],level:3}],c={toc:l};function m(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.mdx)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Sometimes you want to run a parameter sweep.\nA parameter sweep is a method of evaluating a function (or a program) with a pre-determined set of parameters.\nThe examples below will clarify what this means."),(0,o.mdx)("p",null,"To run a parameter sweep, use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"--multirun")," (",(0,o.mdx)("inlineCode",{parentName:"p"},"-m"),") flag and pass a comma separated list for each\ndimension you want to sweep.  "),(0,o.mdx)("p",null,"To run your program with the 3 different schemas in schema config group:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"$ python my_app.py -m schema=warehouse,support,school\n")),(0,o.mdx)("p",null,"Here is sweep over the db types (mysql,postgresql) and the schemas (warehouse,support,school).\nOutput does not contain the configuration prints."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"}," $ python my_app.py schema=warehouse,support,school db=mysql,postgresql -m\n[2019-10-01 14:44:16,254] - Launching 6 jobs locally\n[2019-10-01 14:44:16,254] - Sweep output dir : multirun/2019-10-01/14-44-16\n[2019-10-01 14:44:16,254] -     #0 : schema=warehouse db=mysql\n[2019-10-01 14:44:16,321] -     #1 : schema=warehouse db=postgresql\n[2019-10-01 14:44:16,390] -     #2 : schema=support db=mysql\n[2019-10-01 14:44:16,458] -     #3 : schema=support db=postgresql\n[2019-10-01 14:44:16,527] -     #4 : schema=school db=mysql\n[2019-10-01 14:44:16,602] -     #5 : schema=school db=postgresql\n")),(0,o.mdx)("div",{className:"admonition admonition-info alert alert--info"},(0,o.mdx)("div",{parentName:"div",className:"admonition-heading"},(0,o.mdx)("h5",{parentName:"div"},(0,o.mdx)("span",{parentName:"h5",className:"admonition-icon"},(0,o.mdx)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.mdx)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.mdx)("div",{parentName:"div",className:"admonition-content"},(0,o.mdx)("p",{parentName:"div"},"Hydra supports other kind of sweeps, for example a range sweep: ",(0,o.mdx)("strong",{parentName:"p"},"x=range(1,10)")," or a glob: ",(0,o.mdx)("strong",{parentName:"p"},"support=glob(*)"),".",(0,o.mdx)("br",{parentName:"p"}),"\n","See the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/advanced/override_grammar/extended"},"Extended Override syntax")," for details."))),(0,o.mdx)("h3",{id:"sweeper"},"Sweeper"),(0,o.mdx)("p",null,"The sweeping logic is implemented by a simple sweeper that is built into Hydra.\nAdditional sweepers are available as plugins.\nFor example, the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/plugins/ax_sweeper"},"Ax Sweeper")," can automatically find the best parameter combination!"),(0,o.mdx)("h3",{id:"launcher"},"Launcher"),(0,o.mdx)("p",null,"A Launcher is what runs your job. Hydra comes with a simple launcher that runs the jobs locally and serially.\nOther launchers are available as plugins for launching in parallel and on different clusters. For example, the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/1.0/plugins/joblib_launcher"},"JobLib Launcher"),"\ncan execute the different parameter combinations in parallel on your local machine using multi-processing."))}m.isMDXComponent=!0}}]);