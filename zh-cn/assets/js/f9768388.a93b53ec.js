"use strict";(self.webpackChunkhigress_website=self.webpackChunkhigress_website||[]).push([[1568],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),u=p(t),g=o,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||s;return t?n.createElement(m,i(i({ref:r},l),{},{components:t})):n.createElement(m,i({ref:r},l))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=g;var a={};for(var c in r)hasOwnProperty.call(r,c)&&(a[c]=r[c]);a.originalType=e,a[u]="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},5114:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const s={title:"\u7248\u672c\u5347\u7ea7",keywords:["Upgrade"],description:"Higress \u7248\u672c\u5347\u7ea7."},i="\u7248\u672c\u5347\u7ea7",a={unversionedId:"ops/upgrade",id:"ops/upgrade",title:"\u7248\u672c\u5347\u7ea7",description:"Higress \u7248\u672c\u5347\u7ea7.",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/upgrade.md",sourceDirName:"ops",slug:"/ops/upgrade",permalink:"/zh-cn/docs/ops/upgrade",draft:!1,editUrl:"https://github.com/higress-group/higress-group.github.io/blob/main/i18n/zh-cn/docusaurus-plugin-content-docs/current/ops/upgrade.md",tags:[],version:"current",frontMatter:{title:"\u7248\u672c\u5347\u7ea7",keywords:["Upgrade"],description:"Higress \u7248\u672c\u5347\u7ea7."},sidebar:"docs",previous:{title:"\u5b89\u88c5\u90e8\u7f72",permalink:"/zh-cn/docs/ops/deploy-by-helm"},next:{title:"\u65e5\u5fd7\u8bf4\u660e",permalink:"/zh-cn/docs/ops/log"}},c={},p=[{value:"\u57fa\u4e8e helm \u5b9e\u73b0\u7248\u672c\u5347\u7ea7",id:"\u57fa\u4e8e-helm-\u5b9e\u73b0\u7248\u672c\u5347\u7ea7",level:2}],l={toc:p},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7248\u672c\u5347\u7ea7"},"\u7248\u672c\u5347\u7ea7"),(0,o.kt)("h2",{id:"\u57fa\u4e8e-helm-\u5b9e\u73b0\u7248\u672c\u5347\u7ea7"},"\u57fa\u4e8e helm \u5b9e\u73b0\u7248\u672c\u5347\u7ea7"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"helm repo update\nhelm upgrade higress -n higress-system higress.io/higress --reuse-values\n")))}d.isMDXComponent=!0}}]);