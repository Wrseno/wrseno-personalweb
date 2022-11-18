(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return c}});var r=n(7294);let o=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,r.createContext)(void 0),l={setTheme(e){},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:l},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:l="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:m="data-theme",value:b,children:y,nonce:v})=>{let[w,S]=(0,r.useState)(()=>f(l,c)),[k,x]=(0,r.useState)(()=>f(l)),T=b?Object.values(b):u,O=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let s=b?b[r]:r,i=t?h():null,l=document.documentElement;if("class"===m?(l.classList.remove(...T),s&&l.classList.add(s)):s?l.setAttribute(m,s):l.removeAttribute(m),a){let u=o.includes(c)?c:null,d=o.includes(r)?r:u;l.style.colorScheme=d}null==i||i()},[]),C=(0,r.useCallback)(e=>{S(e);try{localStorage.setItem(l,e)}catch(t){}},[e]),E=(0,r.useCallback)(t=>{let r=g(t);x(r),"system"===w&&n&&!e&&O("system")},[w,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(E),E(e),()=>e.removeListener(E)},[E]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&C(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[C]),(0,r.useEffect)(()=>{O(null!=e?e:w)},[e,w]);let $=(0,r.useMemo)(()=>({theme:w,setTheme:C,forcedTheme:e,resolvedTheme:"system"===w?k:w,themes:n?[...u,"system"]:u,systemTheme:n?k:void 0}),[w,C,e,k,n,u]);return r.createElement(i.Provider,{value:$},r.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:l,themes:u,defaultTheme:c,attribute:m,value:b,children:y,attrs:T,nonce:v}),y)},p=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:u,attrs:c,nonce:d})=>{let m="system"===l,p="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,r=!0)=>{let s=u?u[e]:e,a=t?e+"|| ''":`'${s}'`,l="";return i&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||s?`c.add(${a})`:"null":s&&(l+=`d[s](n,${a})`),l},g=e?`!function(){${p}${h(e)}}()`:a?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}${m?"":"else{"+h(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}else{${h(l,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),f=(e,t)=>{if(a)return;let n;try{n=localStorage.getItem(e)||void 0}catch(r){}return n||t},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7571)}])},7571:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.r(t),n.d(t,{default:function(){return l}});var o=n(5893);n(906);var s=n(3457),a=n.n(s),i=n(2010),l=function(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a(),{color:"#ad081b",height:8}),(0,o.jsx)(i.f,{enableSystem:!0,attribute:"class",children:(0,o.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){r(e,t,n[t])})}return e}({},n))})]})}},906:function(){},1163:function(e,t,n){e.exports=n(387)},3457:function(e,t,n){var r,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=e=>s(e,"__esModule",{value:!0}),d=(e,t)=>s(e,"name",{value:t,configurable:!0}),m=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))!u.call(e,o)&&(n||"default"!==o)&&s(e,o,{get:()=>t[o],enumerable:!(r=a(t,o))||r.enumerable});return e},p=(e,t)=>m(c(s(null!=e?o(l(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),f=(r="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>r&&r.get(e)||(t=m(c({}),e,1),r&&r.set(e,t),t)),h={};((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})(h,{default:()=>w});var g=p(n(1163)),b=p(n(4865)),y=p(n(5697)),v=p(n(7294));function w({color:e="#29D",startPosition:t=.3,stopDelayMs:n=200,height:r=3,showOnShallow:o=!0,options:s,nonce:a}){let i=null;v.useEffect(()=>(s&&b.configure(s),g.default.events.on("routeChangeStart",l),g.default.events.on("routeChangeComplete",u),g.default.events.on("routeChangeError",c),()=>{g.default.events.off("routeChangeStart",l),g.default.events.off("routeChangeComplete",u),g.default.events.off("routeChangeError",c)}),[]);let l=d((e,{shallow:n})=>{(!n||o)&&(b.set(t),b.start())},"routeChangeStart"),u=d((e,{shallow:t})=>{(!t||o)&&(i&&clearTimeout(i),i=setTimeout(()=>{b.done(!0)},n))},"routeChangeEnd"),c=d((e,t,{shallow:r})=>{(!r||o)&&(i&&clearTimeout(i),i=setTimeout(()=>{b.done(!0)},n))},"routeChangeError");return v.createElement("style",{nonce:a},`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${e};
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        width: 100%;
        height: ${r}px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${e}, 0 0 5px ${e};
        opacity: 1;
        -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
        transform: rotate(3deg) translate(0px, -4px);
      }
      #nprogress .spinner {
        display: block;
        position: fixed;
        z-index: 1031;
        top: 15px;
        right: 15px;
      }
      #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;
        border: solid 2px transparent;
        border-top-color: ${e};
        border-left-color: ${e};
        border-radius: 50%;
        -webkit-animation: nprogresss-spinner 400ms linear infinite;
        animation: nprogress-spinner 400ms linear infinite;
      }
      .nprogress-custom-parent {
        overflow: hidden;
        position: relative;
      }
      .nprogress-custom-parent #nprogress .spinner,
      .nprogress-custom-parent #nprogress .bar {
        position: absolute;
      }
      @-webkit-keyframes nprogress-spinner {
        0% {
          -webkit-transform: rotate(0deg);
        }
        100% {
          -webkit-transform: rotate(360deg);
        }
      }
      @keyframes nprogress-spinner {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `)}d(w,"NextNProgress"),w.propTypes={color:y.string,startPosition:y.number,stopDelayMs:y.number,height:y.number,showOnShallow:y.bool,options:y.object,nonce:y.string},e.exports=f(h)},4865:function(e,t,n){var r,o,s; /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */ s=function(){var e={};e.version="0.2.0";var t,n,r=e.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function o(e,t,n){return e<t?t:e>n?n:e}function s(e){return(-1+e)*100}e.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(r[t]=n);return this},e.status=null,e.set=function(t){var n=e.isStarted();t=o(t,r.minimum,1),e.status=1===t?null:t;var a=e.render(!n),u=a.querySelector(r.barSelector),c=r.speed,d=r.easing;return a.offsetWidth,i(function(n){var o,i,m,p;""===r.positionUsing&&(r.positionUsing=e.getPositioningCSS()),l(u,(o=t,i=c,m=d,(p="translate3d"===r.positionUsing?{transform:"translate3d("+s(o)+"%,0,0)"}:"translate"===r.positionUsing?{transform:"translate("+s(o)+"%,0)"}:{"margin-left":s(o)+"%"}).transition="all "+i+"ms "+m,p)),1===t?(l(a,{transition:"none",opacity:1}),a.offsetWidth,setTimeout(function(){l(a,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){e.remove(),n()},c)},c)):setTimeout(n,c)}),this},e.isStarted=function(){return"number"==typeof e.status},e.start=function(){e.status||e.set(0);var t=function(){setTimeout(function(){e.status&&(e.trickle(),t())},r.trickleSpeed)};return r.trickle&&t(),this},e.done=function(t){return t||e.status?e.inc(.3+.5*Math.random()).set(1):this},e.inc=function(t){var n=e.status;return n?("number"!=typeof t&&(t=(1-n)*o(Math.random()*n,.1,.95)),n=o(n+t,0,.994),e.set(n)):e.start()},e.trickle=function(){return e.inc(Math.random()*r.trickleRate)},t=0,n=0,e.promise=function(r){return r&&"resolved"!==r.state()&&(0===n&&e.start(),t++,n++,r.always(function(){0==--n?(t=0,e.done()):e.set((t-n)/t)})),this},e.render=function(t){if(e.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var n=document.createElement("div");n.id="nprogress",n.innerHTML=r.template;var o,a=n.querySelector(r.barSelector),i=t?"-100":s(e.status||0),u=document.querySelector(r.parent);return l(a,{transition:"all 0 linear",transform:"translate3d("+i+"%,0,0)"}),!r.showSpinner&&(o=n.querySelector(r.spinnerSelector))&&p(o),u!=document.body&&c(u,"nprogress-custom-parent"),u.appendChild(n),n},e.remove=function(){d(document.documentElement,"nprogress-busy"),d(document.querySelector(r.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&p(e)},e.isRendered=function(){return!!document.getElementById("nprogress")},e.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a,i=(a=[],function(e){a.push(e),1==a.length&&function e(){var t=a.shift();t&&t(e)}()}),l=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var s,a;r=t[s=(a=s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+s)in n)return r;return t}(s)),n.style[r]=o}return function(e,t){var r,o,s=arguments;if(2==s.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,s[1],s[2])}}();function u(e,t){return("string"==typeof e?e:m(e)).indexOf(" "+t+" ")>=0}function c(e,t){var n=m(e);u(n,t)||(e.className=(n+t).substring(1))}function d(e,t){var n,r=m(e);u(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function m(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function p(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return e},void 0!==(o=s.call(t,n,t,e))&&(e.exports=o)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(387)}),_N_E=e.O()}]);