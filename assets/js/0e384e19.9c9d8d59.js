"use strict";(self.webpackChunkdeployment_site=self.webpackChunkdeployment_site||[]).push([[9671],{3905:(A,e,t)=>{t.d(e,{Zo:()=>s,kt:()=>c});var r=t(7294);function n(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function i(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,r)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?i(Object(t),!0).forEach((function(e){n(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,r,n=function(A,e){if(null==A)return{};var t,r,n={},i=Object.keys(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(n[t]=A[t]);return n}(A,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(n[t]=A[t])}return n}var l=r.createContext({}),u=function(A){var e=r.useContext(l),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},s=function(A){var e=u(A.components);return r.createElement(l.Provider,{value:e},A.children)},p={inlineCode:"code",wrapper:function(A){var e=A.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(A,e){var t=A.components,n=A.mdxType,i=A.originalType,l=A.parentName,s=o(A,["components","mdxType","originalType","parentName"]),m=u(t),c=n,d=m["".concat(l,".").concat(c)]||m[c]||p[c]||i;return t?r.createElement(d,a(a({ref:e},s),{},{components:t})):r.createElement(d,a({ref:e},s))}));function c(A,e){var t=arguments,n=e&&e.mdxType;if("string"==typeof A||n){var i=t.length,a=new Array(i);a[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=A,o.mdxType="string"==typeof A?A:n,a[1]=o;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9881:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=t(7462),n=(t(7294),t(3905));const i={sidebar_position:1},a="Introduction",o={unversionedId:"intro",id:"intro",title:"Introduction",description:"Vous \xeates fier de votre site vitrine, vous avez h\xe2te d'\xe9pater votre client et lui en mettre plein les mirettes!",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/laravel-deploy/docs/intro",draft:!1,editUrl:"https://github.com/nicolasbonin/laravel-deploy/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Pr\xe9-requis",permalink:"/laravel-deploy/docs/pre-requies"}},l={},u=[{value:"It\xe9ration 1",id:"it\xe9ration-1",level:2},{value:"pr\xe9-requis",id:"pr\xe9-requis",level:3},{value:"Etapes",id:"etapes",level:3},{value:"It\xe9ration 2",id:"it\xe9ration-2",level:2},{value:"It\xe9ration 3",id:"it\xe9ration-3",level:2},{value:"It\xe9ration 4",id:"it\xe9ration-4",level:2},{value:"It\xe9ration 5",id:"it\xe9ration-5",level:2}],s={toc:u};function p(A){let{components:e,...i}=A;return(0,n.kt)("wrapper",(0,r.Z)({},s,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Vous \xeates fier de votre site vitrine, vous avez h\xe2te d'\xe9pater votre client et lui en mettre plein les mirettes!\n",(0,n.kt)("strong",{parentName:"p"},"Alors let's go for it now!")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Deploy my-site")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Aucun mot de passe ou cl\xe9 SSH utilis\xe9s en PRODUCTION ne doit \xeatre rendu public (Ex: Github)!")),(0,n.kt)("h2",{id:"it\xe9ration-1"},"It\xe9ration 1"),(0,n.kt)("p",null,'D\xe9ploiement "from scratch" sur un VPS (Virtual Private Server) ',(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://scaleway.com"},"scaleway")),".\n",(0,n.kt)("img",{parentName:"p",src:"https://www.scaleway.com/static/6a3ff135bd90b05124981ec237081fed/b0190/hero-floating-boy-frame.webp",alt:"scalway"})),(0,n.kt)("h3",{id:"pr\xe9-requis"},"pr\xe9-requis"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Une cl\xe9 SSH personnelle"),(0,n.kt)("li",{parentName:"ul"},"Un VPS par \xe9tudiant")),(0,n.kt)("h3",{id:"etapes"},"Etapes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://scaleway.com"},"Demander un acc\xe8s au Campus Numerique Scaleway")),(0,n.kt)("li",{parentName:"ul"},"Cr\xe9er un VPS depuis une image UNBUTU ou Debian"),(0,n.kt)("li",{parentName:"ul"},"Installer PHP et les packages pour Laravel"),(0,n.kt)("li",{parentName:"ul"},"D\xe9ployer votre application Laravel sur le serveur"),(0,n.kt)("li",{parentName:"ul"},"Configurer votre serveur de BDD"),(0,n.kt)("li",{parentName:"ul"},"Configurer NGinx"),(0,n.kt)("li",{parentName:"ul"},"Configurer votre site pour la production"),(0,n.kt)("li",{parentName:"ul"},"Automatiser le d\xe9ploiement et la configuration d'un serveur")),(0,n.kt)("h2",{id:"it\xe9ration-2"},"It\xe9ration 2"),(0,n.kt)("p",null,"Mettre en place votre domaine et activer l'encryption TLS sur votre site"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"let&#39;s Encrypt",src:t(8385).Z,width:"287",height:"86"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Acheter un nom de domaine"),(0,n.kt)("li",{parentName:"ul"},"Configurer les zones DNS"),(0,n.kt)("li",{parentName:"ul"},"Activer l'encryption de votre site"),(0,n.kt)("li",{parentName:"ul"},"Savoir mettre en place des sous-domaines"),(0,n.kt)("li",{parentName:"ul"},"S\xe9curiser un minimum son serveur")),(0,n.kt)("h2",{id:"it\xe9ration-3"},"It\xe9ration 3"),(0,n.kt)("p",null,"D\xe9ployer des mises \xe0 jour sur votre site"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"D\xe9ployer de nouvelles versions du site"),(0,n.kt)("li",{parentName:"ul"},"Pouvoir revenir \xe0 une version pr\xe9c\xe9dente"),(0,n.kt)("li",{parentName:"ul"},"Trouver une strag\xe9gie de d\xe9ploiement"),(0,n.kt)("li",{parentName:"ul"},"R\xe9fl\xe9chir \xe0 l'automatisation des diff\xe9rentes \xe9tapes")),(0,n.kt)("h2",{id:"it\xe9ration-4"},"It\xe9ration 4"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Automatisation",src:t(1150).Z,width:"1280",height:"755"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Automatisation des d\xe9ploiements"),(0,n.kt)("li",{parentName:"ul"},"Trouver des m\xe9thodes d'automatisation"),(0,n.kt)("li",{parentName:"ul"},"La mettre en oeuvre"),(0,n.kt)("li",{parentName:"ul"},"Comparer et peser les avantages et incov\xe9nients")),(0,n.kt)("h2",{id:"it\xe9ration-5"},"It\xe9ration 5"),(0,n.kt)("p",null,"Containeuriser son application et automatiser les d\xe9ploiement"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Docker",src:t(4700).Z,width:"900",height:"667"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Trouver la documentation pour conteuneriser une application Laravel"),(0,n.kt)("li",{parentName:"ul"},"R\xe9fl\xe9chir aux diff\xe9rentes solutions possibles"),(0,n.kt)("li",{parentName:"ul"},"Automatiser les mises \xe0 jour de votre site"),(0,n.kt)("li",{parentName:"ul"},'Faire des mises \xe0 jour avec "Z\xe9ro down-time"')))}p.isMDXComponent=!0},1150:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/automatisation-9d6c23360a73daa03f8b813731ac6819.jpg"},8385:(A,e,t)=>{t.d(e,{Z:()=>r});const r="data:image/gif;base64,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"},4700:(A,e,t)=>{t.d(e,{Z:()=>r});const r=t.p+"assets/images/moby-run-9d5910a3aee4af15a58bb24c8f0a0f13.png"}}]);