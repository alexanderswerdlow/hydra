"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3089],{78665:function(e,a,t){t.d(a,{Z:function(){return f}});var l=t(63366),r=t(67294),n=t(86010),i=t(18882),s=t(39960),m="sidebar_q+wC",o="sidebarItemTitle_9G5K",c="sidebarItemList_6T4b",d="sidebarItem_cjdF",u="sidebarItemLink_zyXk",g="sidebarItemLinkActive_wcJs",p=t(95999);function v(e){var a=e.sidebar;return 0===a.items.length?null:r.createElement("nav",{className:(0,n.default)(m,"thin-scrollbar"),"aria-label":(0,p.translate)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.default)(o,"margin-bottom--md")},a.title),r.createElement("ul",{className:c},a.items.map((function(e){return r.createElement("li",{key:e.permalink,className:d},r.createElement(s.default,{isNavLink:!0,to:e.permalink,className:u,activeClassName:g},e.title))}))))}var h=["sidebar","toc","children"];var f=function(e){var a=e.sidebar,t=e.toc,s=e.children,m=(0,l.Z)(e,h),o=a&&a.items.length>0;return r.createElement(i.Z,m,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(v,{sidebar:a})),r.createElement("main",{className:(0,n.default)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),t&&r.createElement("div",{className:"col col--2"},t))))}},2754:function(e,a,t){t.r(a),t.d(a,{default:function(){return d}});var l=t(67294),r=t(52263),n=t(78665),i=t(59725),s=t(39960),m=t(95999);var o=function(e){var a=e.metadata,t=a.previousPage,r=a.nextPage;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,m.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},l.createElement("div",{className:"pagination-nav__item"},t&&l.createElement(s.default,{className:"pagination-nav__link",to:t},l.createElement("div",{className:"pagination-nav__label"},"\xab"," ",l.createElement(m.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),l.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},r&&l.createElement(s.default,{className:"pagination-nav__link",to:r},l.createElement("div",{className:"pagination-nav__label"},l.createElement(m.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=t(63616);var d=function(e){var a=e.metadata,t=e.items,s=e.sidebar,m=(0,r.default)().siteConfig.title,d=a.blogDescription,u=a.blogTitle,g="/"===a.permalink?m:u;return l.createElement(n.Z,{title:g,description:d,wrapperClassName:c.ThemeClassNames.wrapper.blogPages,pageClassName:c.ThemeClassNames.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},t.map((function(e){var a=e.content;return l.createElement(i.Z,{key:a.metadata.permalink,frontMatter:a.frontMatter,assets:a.assets,metadata:a.metadata,truncated:a.metadata.truncated},l.createElement(a,null))})),l.createElement(o,{metadata:a}))}},59725:function(e,a,t){t.d(a,{Z:function(){return T}});var l=t(67294),r=t(86010),n=t(3905),i=t(95999),s=t(39960),m=t(44996),o=t(63616),c=t(75854),d=t.n(c),u=t(86753),g="blogPostTitle_d4p0",p="blogPostData_-Im+",v="blogPostDetailsFull_xD8n",h=t(7774),f="tags_NBRY",E="tag_F03v";function b(e){var a=e.tags;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(i.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.default)(f,"padding--none","margin-left--sm")},a.map((function(e){var a=e.label,t=e.permalink;return l.createElement("li",{key:t,className:E},l.createElement(h.Z,{name:a,permalink:t}))}))))}var N="image_9q7L";var _=function(e){var a=e.author,t=a.name,r=a.title,n=a.url,i=a.imageURL;return l.createElement("div",{className:"avatar margin-bottom--sm"},i&&l.createElement(s.default,{className:"avatar__photo-link avatar__photo",href:n},l.createElement("img",{className:N,src:i,alt:t})),t&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(s.default,{href:n,itemProp:"url"},l.createElement("span",{itemProp:"name"},t))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},k="authorCol_8c0z";function P(e){var a=e.authors,t=e.assets;return 0===a.length?null:l.createElement("div",{className:"row margin-top--md margin-bottom--sm"},a.map((function(e,a){var n;return l.createElement("div",{className:(0,r.default)("col col--6",k),key:a},l.createElement(_,{author:Object.assign({},e,{imageURL:null!=(n=t.authorsImageUrls[a])?n:e.imageURL})}))})))}var T=function(e){var a,t,c,h,f=(c=(0,o.usePluralForm)().selectMessage,function(e){var a=Math.ceil(e);return c(a,(0,i.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}),E=(0,m.useBaseUrlUtils)().withBaseUrl,N=e.children,_=e.frontMatter,k=e.assets,T=e.metadata,w=e.truncated,L=e.isBlogPostPage,C=void 0!==L&&L,y=T.date,U=T.formattedDate,Z=T.permalink,B=T.tags,x=T.readingTime,I=T.title,M=T.editUrl,R=T.authors,A=null!=(a=k.image)?a:_.image,F=!C&&w,D=B.length>0;return l.createElement("article",{className:C?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(h=C?"h1":"h2",l.createElement("header",null,l.createElement(h,{className:g,itemProp:"headline"},C?I:l.createElement(s.default,{itemProp:"url",to:Z},I)),l.createElement("div",{className:(0,r.default)(p,"margin-vert--md")},l.createElement("time",{dateTime:y,itemProp:"datePublished"},U),void 0!==x&&l.createElement(l.Fragment,null," \xb7 ",f(x))),l.createElement(P,{authors:R,assets:k}))),A&&l.createElement("meta",{itemProp:"image",content:E(A,{absolute:!0})}),l.createElement("div",{className:"markdown",itemProp:"articleBody"},l.createElement(n.MDXProvider,{components:d()},N)),(D||w)&&l.createElement("footer",{className:(0,r.default)("row docusaurus-mt-lg",(t={},t[v]=C,t))},D&&l.createElement("div",{className:(0,r.default)("col",{"col--9":F})},l.createElement(b,{tags:B})),C&&M&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.default,{editUrl:M})),F&&l.createElement("div",{className:(0,r.default)("col text--right",{"col--3":D})},l.createElement(s.default,{to:T.permalink,"aria-label":"Read more about "+I},l.createElement("b",null,l.createElement(i.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:function(e,a,t){t.r(a),t.d(a,{default:function(){return u}});var l=t(67294),r=t(95999),n=t(87462),i=t(63366),s=t(86010),m="iconEdit_mS5F",o=["className"];var c=function(e){var a=e.className,t=(0,i.Z)(e,o);return l.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.default)(m,a),"aria-hidden":"true"},t),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},d=t(63616);function u(e){var a=e.editUrl;return l.createElement("a",{href:a,target:"_blank",rel:"noreferrer noopener",className:d.ThemeClassNames.common.editThisPage},l.createElement(c,null),l.createElement(r.default,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7774:function(e,a,t){t.d(a,{Z:function(){return o}});var l=t(67294),r=t(86010),n=t(39960),i="tag_WK-t",s="tagRegular_LXbV",m="tagWithCount_S5Zl";var o=function(e){var a,t=e.permalink,o=e.name,c=e.count;return l.createElement(n.default,{href:t,className:(0,r.default)(i,(a={},a[s]=!c,a[m]=c,a))},o,c&&l.createElement("span",null,c))}}}]);