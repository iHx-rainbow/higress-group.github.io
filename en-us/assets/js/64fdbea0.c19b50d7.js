"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[8119],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),a=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=a(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=a(r),d=o,h=p["".concat(c,".").concat(d)]||p[d]||g[d]||n;return r?i.createElement(h,s(s({ref:t},l),{},{components:r})):i.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,s=new Array(n);s[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,s[1]=u;for(var a=2;a<n;a++)s[a]=r[a];return i.createElement.apply(null,s)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3113:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>n,metadata:()=>u,toc:()=>a});var i=r(7462),o=(r(7294),r(3905));const n={title:"New contributor guide",keywords:["Higress","contributor"],description:"This is a guide for new contributor who wants to contribute to Higress.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/reporting-security-issues_dev.md"},s="Reporting Security Issues",u={unversionedId:"developers/contributor-guide/reporting-security-issues_dev",id:"developers/contributor-guide/reporting-security-issues_dev",title:"New contributor guide",description:"This is a guide for new contributor who wants to contribute to Higress.",source:"@site/i18n/en-us/docusaurus-plugin-content-docs/current/developers/contributor-guide/reporting-security-issues_dev.md",sourceDirName:"developers/contributor-guide",slug:"/developers/contributor-guide/reporting-security-issues_dev",permalink:"/en-us/docs/developers/contributor-guide/reporting-security-issues_dev",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/reporting-security-issues_dev.md",tags:[],version:"current",frontMatter:{title:"New contributor guide",keywords:["Higress","contributor"],description:"This is a guide for new contributor who wants to contribute to Higress.",custom_edit_url:"https://github.com/higress-group/higress-group.github.io/blob/master/i18n/zh-cn/docusaurus-plugin-content-docs/current/developers/contributor-guide/reporting-security-issues_dev.md"},sidebar:"developers",previous:{title:"Test coverage guide",permalink:"/en-us/docs/developers/contributor-guide/test-coverage-guide_dev"},next:{title:"Contributing to Higress",permalink:"/en-us/docs/developers/guide_dev"}},c={},a=[{value:"REPORTING VULNERABILITY",id:"reporting-vulnerability",level:2},{value:"VULNERABILITY HANDLING",id:"vulnerability-handling",level:2}],l={toc:a},p="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reporting-security-issues"},"Reporting Security Issues"),(0,o.kt)("p",null,"The Higress Group takes a rigorous standpoint in annihilating the security issues in its software projects. Higress is highly sensitive and forthcoming to issues pertaining to its features and functionality."),(0,o.kt)("h2",{id:"reporting-vulnerability"},"REPORTING VULNERABILITY"),(0,o.kt)("p",null,"If you have apprehensions regarding Higress's security or you discover vulnerability or potential threat, don\u2019t\nhesitate to get in touch with the Higress Security Team by dropping a mail at ","[higress@googlegroups.com]","\n(mailto:",(0,o.kt)("a",{parentName:"p",href:"mailto:higress@googlegroups.com"},"higress@googlegroups.com"),"). In the mail, specify the description of the issue or potential threat. You are also urged to recommend the way to reproduce and replicate the issue. The Higress community will get back to you after assessing and analysing the findings."),(0,o.kt)("p",null,"PLEASE PAY ATTENTION to report the security issue on the security email before disclosing it on public domain."),(0,o.kt)("h2",{id:"vulnerability-handling"},"VULNERABILITY HANDLING"),(0,o.kt)("p",null,"An overview of the vulnerability handling process is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The reporter reports the vulnerability privately to Apache."),(0,o.kt)("li",{parentName:"ul"},"The appropriate project's security team works privately with the reporter to resolve the vulnerability."),(0,o.kt)("li",{parentName:"ul"},"A new release of the Apache product concerned is made that includes the fix."),(0,o.kt)("li",{parentName:"ul"},"The vulnerability is publically announced.")))}g.isMDXComponent=!0}}]);