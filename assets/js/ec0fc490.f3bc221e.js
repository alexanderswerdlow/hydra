"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8819],{3905:function(e,r,n){n.r(r),n.d(r,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return g},useMDXComponents:function(){return m},withMDXComponents:function(){return s}});var a=n(67294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var p=a.createContext({}),s=function(e){return function(r){var n=m(r.components);return a.createElement(e,i({},r,{components:n}))}},m=function(e){var r=a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},u=function(e){var r=m(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),s=m(n),u=t,h=s["".concat(o,".").concat(u)]||s[u]||c[u]||i;return n?a.createElement(h,l(l({ref:r},p),{},{components:n})):a.createElement(h,l({ref:r},p))}));function g(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var d in r)hasOwnProperty.call(r,d)&&(l[d]=r[d]);l.originalType=e,l.mdxType="string"==typeof e?e:t,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93899:function(e,r,n){n.d(r,{Z:function(){return d},T:function(){return p}});var a=n(87462),t=n(67294),i=n(39960),o=n(52263),l=n(80907);function d(e){return t.createElement(i.default,(0,a.Z)({},e,{to:(r=e.to,d=(0,l.useActiveVersion)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==d?void 0:d.name)?n:"current"]+r),target:"_blank"}));var r,n,d}function p(e){var r,n=null!=(r=e.text)?r:"Example (Click Here)";return t.createElement(d,e,t.createElement("span",null,"\xa0"),t.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example (Click Here)"}))}},38274:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return m},default:function(){return c}});var a=n(87462),t=n(63366),i=(n(67294),n(3905)),o=n(93899),l=["components"],d={id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},p=void 0,s={unversionedId:"plugins/nevergrad_sweeper",id:"version-1.3/plugins/nevergrad_sweeper",title:"Nevergrad Sweeper plugin",description:"PyPI",source:"@site/versioned_docs/version-1.3/plugins/nevergrad_sweeper.md",sourceDirName:"plugins",slug:"/plugins/nevergrad_sweeper",permalink:"/docs/1.3/plugins/nevergrad_sweeper",editUrl:"https://github.com/facebookresearch/hydra/edit/main/website/versioned_docs/version-1.3/plugins/nevergrad_sweeper.md",tags:[],version:"1.3",lastUpdatedBy:"jlopezpena",lastUpdatedAt:1709682745,formattedLastUpdatedAt:"3/5/2024",frontMatter:{id:"nevergrad_sweeper",title:"Nevergrad Sweeper plugin",sidebar_label:"Nevergrad Sweeper plugin"},sidebar:"docs",previous:{title:"Ax Sweeper plugin",permalink:"/docs/1.3/plugins/ax_sweeper"},next:{title:"Optuna Sweeper plugin",permalink:"/docs/1.3/plugins/optuna_sweeper"}},m=[{value:"Installation",id:"installation",children:[],level:3},{value:"Usage",id:"usage",children:[],level:3},{value:"Example of training using Nevergrad hyperparameter search",id:"example-of-training-using-nevergrad-hyperparameter-search",children:[],level:2},{value:"Defining the parameters",id:"defining-the-parameters",children:[{value:"Defining through commandline override",id:"defining-through-commandline-override",children:[{value:"Choices",id:"choices",children:[],level:4},{value:"Scalar",id:"scalar",children:[],level:4}],level:3},{value:"Defining through config file",id:"defining-through-config-file",children:[{value:"Choices",id:"choices-1",children:[],level:4},{value:"Scalars",id:"scalars",children:[],level:4}],level:3}],level:2}],u={toc:m};function c(e){var r=e.components,n=(0,t.Z)(e,l);return(0,i.mdx)("wrapper",(0,a.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://pypi.org/project/hydra-nevergrad-sweeper/"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/v/hydra-nevergrad-sweeper",alt:"PyPI"})),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/l/hydra-nevergrad-sweeper",alt:"PyPI - License"}),"\n",(0,i.mdx)("img",{parentName:"p",src:"https://img.shields.io/pypi/pyversions/hydra-nevergrad-sweeper",alt:"PyPI - Python Version"}),"\n",(0,i.mdx)("a",{parentName:"p",href:"https://pypistats.org/packages/hydra-nevergrad-sweeper"},(0,i.mdx)("img",{parentName:"a",src:"https://img.shields.io/pypi/dm/hydra-nevergrad-sweeper.svg",alt:"PyPI - Downloads"})),(0,i.mdx)(o.T,{text:"Example application",to:"plugins/hydra_nevergrad_sweeper/example",mdxType:"ExampleGithubLink"}),(0,i.mdx)(o.T,{text:"Plugin source",to:"plugins/hydra_nevergrad_sweeper",mdxType:"ExampleGithubLink"})),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad")," is a derivative-free optimization platform providing a library of state-of-the-art algorithms for hyperparameter search. This plugin provides Hydra applications a mechanism to use ",(0,i.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/"},"Nevergrad")," algorithms to optimize experiment/application parameters."),(0,i.mdx)("h3",{id:"installation"},"Installation"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"pip install hydra-nevergrad-sweeper --upgrade\n")),(0,i.mdx)("h3",{id:"usage"},"Usage"),(0,i.mdx)("p",null,"Once installed, add ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper=nevergrad")," to your command. Alternatively, override ",(0,i.mdx)("inlineCode",{parentName:"p"},"hydra/sweeper")," in your config:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - override hydra/sweeper: nevergrad\n")),(0,i.mdx)("p",null,"The default configuration is defined and documented ",(0,i.mdx)(o.Z,{to:"plugins/hydra_nevergrad_sweeper/hydra_plugins/hydra_nevergrad_sweeper/config.py",mdxType:"GithubLink"},"here"),".\nThere are several standard approaches for configuring plugins. Check ",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/patterns/configuring_plugins"},"this page")," for more information."),(0,i.mdx)("h2",{id:"example-of-training-using-nevergrad-hyperparameter-search"},"Example of training using Nevergrad hyperparameter search"),(0,i.mdx)("p",null,"We include an example of how to use this plugin. The file ",(0,i.mdx)(o.Z,{to:"plugins/hydra_nevergrad_sweeper/example/my_app.py",mdxType:"GithubLink"},"example/my_app.py")," implements an example of minimizing a (dummy) function using a mixture of continuous and discrete parameters."),(0,i.mdx)("p",null,"You can discover the Nevergrad sweeper parameters with:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml",metastring:'title="$ python your_app hydra/sweeper=nevergrad --cfg hydra -p hydra.sweeper"',title:'"$',python:!0,your_app:!0,"hydra/sweeper":"nevergrad","--cfg":!0,hydra:!0,"-p":!0,'hydra.sweeper"':!0},"# @package hydra.sweeper\n_target_: hydra_plugins.hydra_nevergrad_sweeper.core.NevergradSweeper\noptim:\n  optimizer: NGOpt\n  budget: 80\n  num_workers: 10\n  noisy: false\n  maximize: false\n  seed: null\n  max_failure_rate: 0.0\nparametrization:\n  db:\n  - mnist\n  - cifar\n  lr:\n    init: 0.02\n    step: 2.0\n    log: true\n  dropout:\n    lower: 0.0\n    upper: 1.0\n  batch_size:\n    lower: 4\n    upper: 16\n    integer: true\n")),(0,i.mdx)("p",null,"The function decorated with ",(0,i.mdx)("inlineCode",{parentName:"p"},"@hydra.main()")," returns a float which we want to minimize, the minimum is 0 and reached for:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"db: mnist\nlr: 0.12\ndropout: 0.33\nbatch_size=4\n")),(0,i.mdx)("p",null,"To run hyperparameter search and look for the best parameters for this function, clone the code and run the following command in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"plugins/hydra_nevergrad_sweeper")," directory:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"python example/my_app.py -m\n")),(0,i.mdx)("p",null,"You can also override the search space parametrization:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-bash"},"python example/my_app.py --multirun db=mnist,cifar batch_size=4,8,16 \\\n'lr=tag(log, interval(0.001, 1))' 'dropout=interval(0,1)'\n")),(0,i.mdx)("p",null,"The initialization of the sweep and the first 5 evaluations (out of 100) look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"[2020-10-08 20:13:53,592][HYDRA] NevergradSweeper(optimizer=NGOpt, budget=100, num_workers=10) minimization\n[2020-10-08 20:13:53,593][HYDRA] with parametrization Dict(batch_size=Choice(choices=Tuple(4,8,16),weights=Array{(1,3)}),db=Choice(choices=Tuple(mnist,cifar),weights=Array{(1,2)}),dropout=Scalar{Cl(0,1,b)}[sigma=Log{exp=2.0}],lr=Log{exp=3.162277660168379,Cl(0.001,1,b)}):{'db': 'mnist', 'lr': 0.03162277660168379, 'dropout': 0.5, 'batch_size': 8}\n[2020-10-08 20:13:53,593][HYDRA] Sweep output dir: multirun/2020-10-08/20-13-53\n[2020-10-08 20:13:55,023][HYDRA] Launching 10 jobs locally\n[2020-10-08 20:13:55,023][HYDRA]        #0 : db=mnist lr=0.03162277660168379 dropout=0.5 batch_size=16\n[2020-10-08 20:13:55,217][__main__][INFO] - dummy_training(dropout=0.500, lr=0.032, db=mnist, batch_size=16) = 13.258\n[2020-10-08 20:13:55,218][HYDRA]        #1 : db=cifar lr=0.018178519762066934 dropout=0.5061074452336254 batch_size=4\n[2020-10-08 20:13:55,408][__main__][INFO] - dummy_training(dropout=0.506, lr=0.018, db=cifar, batch_size=4) = 0.278\n[2020-10-08 20:13:55,409][HYDRA]        #2 : db=cifar lr=0.10056825918734161 dropout=0.6399687427725211 batch_size=4\n[2020-10-08 20:13:55,595][__main__][INFO] - dummy_training(dropout=0.640, lr=0.101, db=cifar, batch_size=4) = 0.329\n[2020-10-08 20:13:55,596][HYDRA]        #3 : db=mnist lr=0.06617542958182834 dropout=0.5059497416026679 batch_size=8\n[2020-10-08 20:13:55,812][__main__][INFO] - dummy_training(dropout=0.506, lr=0.066, db=mnist, batch_size=8) = 5.230\n[2020-10-08 20:13:55,813][HYDRA]        #4 : db=mnist lr=0.16717013388679514 dropout=0.6519070394318255 batch_size=4\n...\n[2020-10-08 20:14:27,988][HYDRA] Best parameters: db=cifar lr=0.11961221693764439 dropout=0.37285878409770895 batch_size=4\n")),(0,i.mdx)("p",null,"and the final 2 evaluations look like this:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-text"},"[HYDRA]     #8 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - my_app.py(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA]     #9 : db=mnist batch_size=4 lr=0.094 dropout=0.381\n[__main__][INFO] - my_app.py(dropout=0.381, lr=0.094, db=mnist, batch_size=4) = 1.077\n[HYDRA] Best parameters: db=mnist batch_size=4 lr=0.094 dropout=0.381\n")),(0,i.mdx)("p",null,"The run also creates an ",(0,i.mdx)("inlineCode",{parentName:"p"},"optimization_results.yaml")," file in your sweep folder with the parameters recommended by the optimizer:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"best_evaluated_result: 0.381\n\nbest_evaluated_params:\n  batch_size: 4\n  db: mnist\n  dropout: 0.381\n  lr: 0.094\n\nname: nevergrad\n")),(0,i.mdx)("h2",{id:"defining-the-parameters"},"Defining the parameters"),(0,i.mdx)("p",null,"The plugin supports two types of parameters: ",(0,i.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.Choice"},"Choices")," and ",(0,i.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.Scalar"},"Scalars"),". They can be defined either through config file or commandline override."),(0,i.mdx)("h3",{id:"defining-through-commandline-override"},"Defining through commandline override"),(0,i.mdx)("p",null,"Hydra provides an override parser that supports rich syntax. More documentation can be found in (",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/advanced/override_grammar/basic"},"OverrideGrammer/Basic"),") and (",(0,i.mdx)("a",{parentName:"p",href:"/docs/1.3/advanced/override_grammar/extended"},"OverrideGrammer/Extended"),"). We recommend you go through them first before proceeding with this doc."),(0,i.mdx)("h4",{id:"choices"},"Choices"),(0,i.mdx)("p",null,"To override a field with choices:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"'key=1,5'\n'key=shuffle(range(1, 8))'\n'key=range(1,5)'\n")),(0,i.mdx)("p",null,"You can tag an override with ",(0,i.mdx)("inlineCode",{parentName:"p"},"ordered")," to indicate it's a ",(0,i.mdx)("a",{parentName:"p",href:"https://facebookresearch.github.io/nevergrad/parametrization_ref.html#nevergrad.p.TransitionChoice"},(0,i.mdx)("inlineCode",{parentName:"a"},"TransitionChoice"))),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"`key=tag(ordered, choice(1,2,3))`\n")),(0,i.mdx)("h4",{id:"scalar"},"Scalar"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-commandline"},"`key=interval(1,12)`             # Interval are float by default\n`key=int(interval(1,8))`         # Scalar bounds cast to an int\n`key=tag(log, interval(1,12))`   # call ng.p.Log if tagged with log\n")),(0,i.mdx)("h3",{id:"defining-through-config-file"},"Defining through config file"),(0,i.mdx)("h4",{id:"choices-1"},"Choices"),(0,i.mdx)("p",null,"Choices are defined with a list in a config file."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-yaml"},"db:\n  - mnist\n  - cifar\n")),(0,i.mdx)("h4",{id:"scalars"},"Scalars"),(0,i.mdx)("p",null,"Scalars can be defined in config files, with fields:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"init"),": optional initial value"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"lower")," : optional lower bound"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"upper"),": optional upper bound"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"log"),": set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," for log distributed values"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"step"),": optional step size for looking for better parameters. In linear mode, this is an additive step; in logarithmic mode it is multiplicative."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"integer"),": set to ",(0,i.mdx)("inlineCode",{parentName:"li"},"true")," for integers (favor floats over integers whenever possible)")),(0,i.mdx)("p",null,"Providing only ",(0,i.mdx)("inlineCode",{parentName:"p"},"lower")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"upper")," bound will set the initial value to the middle of the range and the step to a sixth of the range.\n",(0,i.mdx)("strong",{parentName:"p"},"Note"),": unbounded scalars (scalars with no upper and/or lower bounds) can only be defined through a config file."))}c.isMDXComponent=!0}}]);