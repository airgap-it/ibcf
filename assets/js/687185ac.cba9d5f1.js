"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92251:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=n(50941),i=n(44996);const l={title:"Crowdfunding",slug:"/examples/crowdfunding"},s=void 0,p={unversionedId:"developers/examples/blueprints/crowdfund",id:"developers/examples/blueprints/crowdfund",title:"Crowdfunding",description:"Demo Link",source:"@site/docs/developers/examples/blueprints/crowdfund.mdx",sourceDirName:"developers/examples/blueprints",slug:"/examples/crowdfunding",permalink:"/ibcf/examples/crowdfunding",draft:!1,editUrl:"https://github.com/airgap-it/ibcf/tree/main/apps/documentation/docs/developers/examples/blueprints/crowdfund.mdx",tags:[],version:"current",frontMatter:{title:"Crowdfunding",slug:"/examples/crowdfunding"},sidebar:"docs",previous:{title:"Generating Proofs",permalink:"/ibcf/examples/generate-proofs"},next:{title:"Bridge",permalink:"/ibcf/examples/bridge"}},c={},d=[{value:"Using the demo",id:"using-the-demo",level:3}],u={toc:d};function f(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ibcf.dev.gke.papers.tech/Crowdfund"},"Demo Link")),(0,o.kt)("p",null,"The Crowdfund blueprint serves as a base implementation for the following use cases:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Participating in activities by paying with tokens of a different chain;")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Contracts:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airgap-it/ibcf/blob/main/contracts/tezos/blueprints/IBCF_Crowdfunding.py"},"Tezos - IBCF_Crowdfunding.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/airgap-it/ibcf/blob/main/contracts/evm/blueprints/IBCF_Crowdfunding.sol"},"EVM - IBCF_Crowdfunding.sol"))),(0,o.kt)("h3",{id:"using-the-demo"},"Using the demo"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"First you need to have some Ether on Goerli testnet. You can get some from a ",(0,o.kt)("a",{parentName:"p",href:"https://goerli-faucet.pk910.de/"},"faucet"),";")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Once you have some Ether, you can call the EVM ",(0,o.kt)("a",{parentName:"p",href:"https://goerli.etherscan.io/address/0x79a20860c063a70EB483f5b6fb70b9CaDb022729"},"Crowdfunding")," contract as shown below:"))),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("video",{width:"80%",loop:!0,controls:!0,autoPlay:!0,muted:!0},(0,o.kt)("source",{src:n(61078).Z,type:"video/webm"}))),(0,o.kt)("div",{class:"padding-vert--md"}),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Then you wait for the next Ethereum state to get transmitted to Tezos;")),(0,o.kt)("center",null,(0,o.kt)(a.Z,{width:"520px",sources:{light:(0,i.Z)("/guides/tezos_validator.png"),dark:(0,i.Z)("/guides/tezos_validator.png")},mdxType:"ThemedImage"})),(0,o.kt)("div",{class:"padding-vert--md"}),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"To finalize, you just need to generate a proof for a snapshot and submit it on Tezos:")),(0,o.kt)("div",{style:{display:"flex",justifyContent:"center"}},(0,o.kt)("video",{width:"80%",loop:!0,controls:!0,autoPlay:!0,muted:!0},(0,o.kt)("source",{src:n(37943).Z,type:"video/webm"}))))}f.isMDXComponent=!0},37943:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/medias/confirm_fund-3cf3be406a8cc813867f7b259cb295fe.mp4"},61078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/medias/fund-b33d44eccbe7ee4efd8074a916654848.mp4"}}]);