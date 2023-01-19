"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[937],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=n(87462),i=(n(67294),n(3905)),a=n(50941),o=n(44996);const c={title:"Introduction",slug:"/",hide_title:!0},s=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"IBCF is a building block allowing for general bidirectional message passing between Tezos and EVM networks.",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/",permalink:"/ibcf/",draft:!1,editUrl:"https://github.com/airgap-it/ibcf/tree/main/apps/documentation/docs/introduction.mdx",tags:[],version:"current",frontMatter:{title:"Introduction",slug:"/",hide_title:!0},sidebar:"docs",next:{title:"Getting Started",permalink:"/ibcf/get-started"}},d={},p=[],u={toc:p};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("meta",{name:"description",content:"IBCF Documentation - Introduction"})),(0,i.kt)("div",{class:"padding-vert--md"}),(0,i.kt)("h1",{id:"inter-blockchain-communication-framework"},"Inter Blockchain Communication Framework"),(0,i.kt)("p",null,"IBCF is a building block allowing for general bidirectional message passing between Tezos and EVM networks."),(0,i.kt)("p",null,"It allows smart contracts on a source chain to store \u2709\ufe0f states that are verifiable on a target chain. It provides a generic way for contracts to communicate between chains by means of validating Merkle proofs about these states stored in the source chain."),(0,i.kt)("h1",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"As an initial step, a trust anchor service is responsible for transmitting the Merkle root of snapshots between chains.\nIt means that for two chains (",(0,i.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"), that chain ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," will know the Merkle root of snapshots contained in chain ",(0,i.kt)("inlineCode",{parentName:"p"},"A"),", and\nchain ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will also know ones in ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,i.kt)("div",{class:"padding-vert--md"}),(0,i.kt)("center",null,(0,i.kt)(a.Z,{width:"480px",sources:{light:(0,o.Z)("/img/ibcf-relay.svg"),dark:(0,o.Z)("/img/ibcf-relay-dark.svg")},mdxType:"ThemedImage"})),(0,i.kt)("div",{class:"padding-vert--md"}),(0,i.kt)("p",null,"The Merkle roots transmitted in the step above allow smart contracts in a target chain to validate arbitrary states previously stored in a source chain by calling a validatior smart contract with a proof-of-inclusion for that given state."),(0,i.kt)("div",{class:"padding-vert--md"}),(0,i.kt)("center",null,(0,i.kt)(a.Z,{width:"520px",sources:{light:(0,o.Z)("/img/ibcf-client-interaction.svg"),dark:(0,o.Z)("/img/ibcf-client-interaction-dark.svg")},mdxType:"ThemedImage"})),(0,i.kt)("div",{class:"padding-vert--md"}),(0,i.kt)("p",null,"It enables interesting use cases for DApps. For example, intracting with a target chain by paying with the source chain token or verifying the onwership of an NFT minted in a different chain."))}m.isMDXComponent=!0}}]);