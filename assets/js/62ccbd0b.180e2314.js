(self.webpackChunkscalarhub_docs_api=self.webpackChunkscalarhub_docs_api||[]).push([[5329],{32271:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(74848),r=n(28453),a=(n(43905),n(51107));n(23397),n(19365),n(69016);const s={description:"Products API Documentation",hide_title:!0,custom_edit_url:null},i=void 0,l={id:"Endpoints/products/Products",title:"Products",description:"Products API Documentation",source:"@site/docs/Endpoints/products/Products.mdx",sourceDirName:"Endpoints/products",slug:"/Endpoints/products/",permalink:"/reference/Endpoints/products/",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{description:"Products API Documentation",hide_title:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Delete S_l_Nexus",permalink:"/reference/Endpoints/s_l_nexuses/delete-s-l-nexus"},next:{title:"Create Product",permalink:"/reference/Endpoints/products/create-product"}},u={},c=[];function d(e){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("span",{className:"theme-doc-version-badge badge badge--secondary",children:"Version: 1.0"}),"\n",(0,o.jsx)(a.default,{as:"h1",className:"openapi__heading",children:"Products"})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d()}},69016:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(96540)),a=o(n(4213));t.default=function(e){let{url:t,proxy:n}=e;return r.default.createElement("div",{style:{float:"right"},className:"dropdown dropdown--hoverable dropdown--right"},r.default.createElement("button",{className:"export-button button button--sm button--secondary"},"Export"),r.default.createElement("ul",{className:"export-dropdown dropdown__menu"},r.default.createElement("li",null,r.default.createElement("a",{onClick:e=>{e.preventDefault(),(e=>{let t;(e.endsWith("json")||e.endsWith("yaml")||e.endsWith("yml"))&&(t=e.substring(e.lastIndexOf("/")+1)),a.default.saveAs(e,t||"openapi.txt")})(`${t}`)},className:"dropdown__link",href:`${t}`},"OpenAPI Spec"))))}},43905:function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(96540)),a=n(42214),s=o(n(86025)),i=o(n(15626));t.default=function(e){const{colorMode:t}=(0,a.useColorMode)(),{logo:n,darkLogo:o}=e,l=()=>"dark"===t?o?.altText??n?.altText:n?.altText,u=(0,s.default)(n?.url),c=(0,s.default)(o?.url);return n&&o?r.default.createElement(i.default,{alt:l(),sources:{light:u,dark:c},className:"openapi__logo"}):n||o?r.default.createElement(i.default,{alt:l(),sources:{light:u??c,dark:u??c},className:"openapi__logo"}):void 0}},4213:function(e,t,n){var o,r,a,s=n(96763);r=[],void 0===(a="function"==typeof(o=function(){"use strict";function t(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(s.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}function o(e,t,n){var o=new XMLHttpRequest;o.open("GET",e),o.responseType="blob",o.onload=function(){u(o.response,t,n)},o.onerror=function(){s.error("could not download file")},o.send()}function r(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function a(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(o){var t=document.createEvent("MouseEvents");t.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(t)}}var i="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n.g&&n.g.global===n.g?n.g:void 0,l=i.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=i.saveAs||("object"!=typeof window||window!==i?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(e,t,n){var s=i.URL||i.webkitURL,l=document.createElement("a");t=t||e.name||"download",l.download=t,l.rel="noopener","string"==typeof e?(l.href=e,l.origin===location.origin?a(l):r(l.href)?o(e,t,n):a(l,l.target="_blank")):(l.href=s.createObjectURL(e),setTimeout((function(){s.revokeObjectURL(l.href)}),4e4),setTimeout((function(){a(l)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,n,s){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(t(e,s),n);else if(r(e))o(e,n,s);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){a(i)}))}}:function(e,t,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return o(e,t,n);var a="application/octet-stream"===e.type,s=/constructor/i.test(i.HTMLElement)||i.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||a&&s||l)&&"undefined"!=typeof FileReader){var c=new FileReader;c.onloadend=function(){var e=c.result;e=u?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},c.readAsDataURL(e)}else{var d=i.URL||i.webkitURL,p=d.createObjectURL(e);r?r.location=p:location.href=p,r=null,setTimeout((function(){d.revokeObjectURL(p)}),4e4)}});i.saveAs=u.saveAs=u,e.exports=u})?o.apply(t,r):o)||(e.exports=a)}}]);