"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[230],{3398:function(e,t,r){r.d(t,{a1:function(){return f}});var n=r(7294),o=["size","strokeWidth","strokeLinecap","strokeLinejoin","theme","fill","className","spin"];function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a={size:"1em",strokeWidth:4,strokeLinecap:"round",strokeLinejoin:"round",rtl:!1,theme:"outline",colors:{outline:{fill:"#333",background:"transparent"},filled:{fill:"#333",background:"#FFF"},twoTone:{fill:"#333",twoTone:"#2F88FF"},multiColor:{outStrokeColor:"#333",outFillColor:"#2F88FF",innerStrokeColor:"#FFF",innerFillColor:"#43CCF8"}},prefix:"i"};function u(){return"icon-"+(4294967296*(1+Math.random())|0).toString(16).substring(1)}var p=(0,n.createContext)(a);p.Provider;function f(e,t,r){return function(l){var s=l.size,a=l.strokeWidth,f=l.strokeLinecap,b=l.strokeLinejoin,m=l.theme,C=l.fill,h=l.className,g=l.spin,d=c(l,o),k=(0,n.useContext)(p),x=function(e,t,r){var n="string"==typeof t.fill?[t.fill]:t.fill||[],o=[];switch(t.theme||r.theme){case"outline":o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("none"),o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("none");break;case"filled":o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("#FFF"),o.push("#FFF");break;case"two-tone":o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("string"==typeof n[1]?n[1]:r.colors.twoTone.twoTone),o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("string"==typeof n[1]?n[1]:r.colors.twoTone.twoTone);break;case"multi-color":o.push("string"==typeof n[0]?n[0]:"currentColor"),o.push("string"==typeof n[1]?n[1]:r.colors.multiColor.outFillColor),o.push("string"==typeof n[2]?n[2]:r.colors.multiColor.innerStrokeColor),o.push("string"==typeof n[3]?n[3]:r.colors.multiColor.innerFillColor)}return{size:t.size||r.size,strokeWidth:t.strokeWidth||r.strokeWidth,strokeLinecap:t.strokeLinecap||r.strokeLinecap,strokeLinejoin:t.strokeLinejoin||r.strokeLinejoin,colors:o,id:e}}((0,n.useMemo)(u,[]),{size:s,strokeWidth:a,strokeLinecap:f,strokeLinejoin:b,theme:m,fill:C},k),y=[k.prefix+"-icon"];return y.push(k.prefix+"-icon-"+e),t&&k.rtl&&y.push(k.prefix+"-icon-rtl"),g&&y.push(k.prefix+"-icon-spin"),h&&y.push(h),n.createElement("span",i(i({},d),{},{className:y.join(" ")}),r(x))}}},2033:function(e,t,r){r.r(t),r.d(t,{default:function(){return s}});var n=r(7294),o=(0,r(3398).a1)("github",!0,(function(e){return n.createElement("svg",{width:e.size,height:e.size,viewBox:"0 0 48 48",fill:"none"},n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4ZM0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24Z",fill:e.colors[0]}),n.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M19.1833 45.4716C18.9898 45.2219 18.9898 42.9973 19.1833 38.798C17.1114 38.8696 15.8024 38.7258 15.2563 38.3667C14.437 37.828 13.6169 36.1667 12.8891 34.9959C12.1614 33.8251 10.5463 33.64 9.89405 33.3783C9.24182 33.1165 9.07809 32.0496 11.6913 32.8565C14.3044 33.6634 14.4319 35.8607 15.2563 36.3745C16.0806 36.8883 18.0515 36.6635 18.9448 36.2519C19.8382 35.8403 19.7724 34.3078 19.9317 33.7007C20.1331 33.134 19.4233 33.0083 19.4077 33.0037C18.5355 33.0037 13.9539 32.0073 12.6955 27.5706C11.437 23.134 13.0581 20.2341 13.9229 18.9875C14.4995 18.1564 14.4485 16.3852 13.7699 13.6737C16.2335 13.3589 18.1347 14.1343 19.4734 16.0001C19.4747 16.0108 21.2285 14.9572 24.0003 14.9572C26.772 14.9572 27.7553 15.8154 28.5142 16.0001C29.2731 16.1848 29.88 12.7341 34.5668 13.6737C33.5883 15.5969 32.7689 18.0001 33.3943 18.9875C34.0198 19.9749 36.4745 23.1147 34.9666 27.5706C33.9614 30.5413 31.9853 32.3523 29.0384 33.0037C28.7005 33.1115 28.5315 33.2855 28.5315 33.5255C28.5315 33.8856 28.9884 33.9249 29.6465 35.6117C30.0853 36.7362 30.117 39.948 29.7416 45.247C28.7906 45.4891 28.0508 45.6516 27.5221 45.7347C26.5847 45.882 25.5669 45.9646 24.5669 45.9965C23.5669 46.0284 23.2196 46.0248 21.837 45.8961C20.9154 45.8103 20.0308 45.6688 19.1833 45.4716Z",fill:e.colors[0]}))})),l=function(){return n.createElement("section",{className:"relative hero bg-block2 bg-center bg-no-repeat bg-contain flex items-center"},n.createElement("div",{className:"px-4 py-8 flex flex-col items-center w-full"},n.createElement("p",{className:"text-4xl lg:text-6xl xl:text-8xl text-center mb-8 inline-block"},n.createElement("span",{className:"inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-clip-text text-transparent"},"ChunJun")," 纯钧"),n.createElement("p",{className:"inline-block xl:text-4xl font-mono text-xl text-center mb-6 font-bold"},"基于Flink之上提供稳定，高效，易用的 批流一体的数据集成工具"),n.createElement("div",{className:"flex items-center"},n.createElement("a",{className:"btn btn__black btn__large mr-4 text-base flex items-center xl:text-2xl",rel:"noreferrer",target:"_blank",href:"https://github.com/DTStack/chunjun"},n.createElement(o,{color:"#fff",className:"mr-2 text-base xl:text-2xl"}),"github"),n.createElement("a",{to:"/documents",className:"btn btn__blue btn__large text-base xl:text-2xl"},"快速开始"))))},i=r(5429),s=function(){return n.createElement("div",null,n.createElement(i.Z,null),n.createElement(l,null),n.createElement(AppCards,null),n.createElement(AppFooter,null))}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-7305d3fbfcc88ebf23ea.js.map