(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2010:function(e,t,n){"use strict";n.d(t,{F:function(){return u},f:function(){return c}});var r=n(7294);let o=["light","dark"],s="(prefers-color-scheme: dark)",a="undefined"==typeof window,i=(0,r.createContext)(void 0),l={setTheme:e=>{},themes:[]},u=()=>{var e;return null!==(e=(0,r.useContext)(i))&&void 0!==e?e:l},c=e=>(0,r.useContext)(i)?r.createElement(r.Fragment,null,e.children):r.createElement(m,e),d=["light","dark"],m=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:a=!0,storageKey:l="theme",themes:u=d,defaultTheme:c=n?"system":"light",attribute:m="data-theme",value:v,children:y,nonce:b})=>{let[S,w]=(0,r.useState)(()=>f(l,c)),[x,k]=(0,r.useState)(()=>f(l)),T=v?Object.values(v):u,C=(0,r.useCallback)(e=>{let r=e;if(!r)return;"system"===e&&n&&(r=g());let s=v?v[r]:r,i=t?h():null,l=document.documentElement;if("class"===m?(l.classList.remove(...T),s&&l.classList.add(s)):s?l.setAttribute(m,s):l.removeAttribute(m),a){let e=o.includes(c)?c:null,t=o.includes(r)?r:e;l.style.colorScheme=t}null==i||i()},[]),E=(0,r.useCallback)(e=>{w(e);try{localStorage.setItem(l,e)}catch(e){}},[e]),O=(0,r.useCallback)(t=>{let r=g(t);k(r),"system"===S&&n&&!e&&C("system")},[S,e]);(0,r.useEffect)(()=>{let e=window.matchMedia(s);return e.addListener(O),O(e),()=>e.removeListener(O)},[O]),(0,r.useEffect)(()=>{let e=e=>{e.key===l&&E(e.newValue||c)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[E]),(0,r.useEffect)(()=>{C(null!=e?e:S)},[e,S]);let $=(0,r.useMemo)(()=>({theme:S,setTheme:E,forcedTheme:e,resolvedTheme:"system"===S?x:S,themes:n?[...u,"system"]:u,systemTheme:n?x:void 0}),[S,E,e,x,n,u]);return r.createElement(i.Provider,{value:$},r.createElement(p,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:a,storageKey:l,themes:u,defaultTheme:c,attribute:m,value:v,children:y,attrs:T,nonce:b}),y)},p=(0,r.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:a,enableColorScheme:i,defaultTheme:l,value:u,attrs:c,nonce:d})=>{let m="system"===l,p="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${c.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,f=i?o.includes(l)&&l?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${l}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",h=(e,t=!1,r=!0)=>{let s=u?u[e]:e,a=t?e+"|| ''":`'${s}'`,l="";return i&&r&&!t&&o.includes(e)&&(l+=`d.style.colorScheme = '${e}';`),"class"===n?l+=t||s?`c.add(${a})`:"null":s&&(l+=`d[s](n,${a})`),l},g=e?`!function(){${p}${h(e)}}()`:a?`!function(){try{${p}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${m})){var t='${s}',m=window.matchMedia(t);if(m.media!==t||m.matches){${h("dark")}}else{${h("light")}}}else if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}${m?"":"else{"+h(l,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${p}var e=localStorage.getItem('${t}');if(e){${u?`var x=${JSON.stringify(u)};`:""}${h(u?"x[e]":"e",!0)}}else{${h(l,!1,!1)};}${f}}catch(t){}}();`;return r.createElement("script",{nonce:d,dangerouslySetInnerHTML:{__html:g}})},()=>!0),f=(e,t)=>{let n;if(!a){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},h=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},g=e=>(e||(e=window.matchMedia(s)),e.matches?"dark":"light")},6840:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(4178)}])},4178:function(e,t,n){"use strict";n.r(t);var r=n(5893);n(7294),n(3814);var o=n(3457),s=n.n(o),a=n(2010);t.default=function(e){let{Component:t,pageProps:n}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s(),{color:"#ad081b",height:4}),(0,r.jsx)(a.f,{enableSystem:!0,attribute:"class",children:(0,r.jsx)(t,{...n})})]})}},3814:function(){},1163:function(e,t,n){e.exports=n(6885)},3457:function(e,t,n){var r,o=Object.create,s=Object.defineProperty,a=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,c=e=>s(e,"__esModule",{value:!0}),d=(e,t)=>s(e,"name",{value:t,configurable:!0}),m=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let o of i(t))!u.call(e,o)&&(n||"default"!==o)&&s(e,o,{get:()=>t[o],enumerable:!(r=a(t,o))||r.enumerable});return e},p=(e,t)=>m(c(s(null!=e?o(l(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),f=(r="undefined"!=typeof WeakMap?new WeakMap:0,(e,t)=>r&&r.get(e)||(t=m(c({}),e,1),r&&r.set(e,t),t)),h={};((e,t)=>{for(var n in t)s(e,n,{get:t[n],enumerable:!0})})(h,{default:()=>S});var g=p(n(1163)),v=p(n(4865)),y=p(n(5697)),b=p(n(7294));function S({color:e="#29D",startPosition:t=.3,stopDelayMs:n=200,height:r=3,showOnShallow:o=!0,options:s,nonce:a}){let i=null;b.useEffect(()=>(s&&v.configure(s),g.default.events.on("routeChangeStart",l),g.default.events.on("routeChangeComplete",u),g.default.events.on("routeChangeError",c),()=>{g.default.events.off("routeChangeStart",l),g.default.events.off("routeChangeComplete",u),g.default.events.off("routeChangeError",c)}),[]);let l=d((e,{shallow:n})=>{(!n||o)&&(v.set(t),v.start())},"routeChangeStart"),u=d((e,{shallow:t})=>{(!t||o)&&(i&&clearTimeout(i),i=setTimeout(()=>{v.done(!0)},n))},"routeChangeEnd"),c=d((e,t,{shallow:r})=>{(!r||o)&&(i&&clearTimeout(i),i=setTimeout(()=>{v.done(!0)},n))},"routeChangeError");return b.createElement("style",{nonce:a},`
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
    `)}d(S,"NextNProgress"),S.propTypes={color:y.string,startPosition:y.number,stopDelayMs:y.number,height:y.number,showOnShallow:y.bool,options:y.object,nonce:y.string},e.exports=f(h)},4865:function(e,t,n){var r,o;void 0!==(o="function"==typeof(r=function(){var e,t,n,r={};r.version="0.2.0";var o=r.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function s(e,t,n){return e<t?t:e>n?n:e}r.configure=function(e){var t,n;for(t in e)void 0!==(n=e[t])&&e.hasOwnProperty(t)&&(o[t]=n);return this},r.status=null,r.set=function(e){var t=r.isStarted();e=s(e,o.minimum,1),r.status=1===e?null:e;var n=r.render(!t),l=n.querySelector(o.barSelector),u=o.speed,c=o.easing;return n.offsetWidth,a(function(t){var s,a;""===o.positionUsing&&(o.positionUsing=r.getPositioningCSS()),i(l,(s=e,(a="translate3d"===o.positionUsing?{transform:"translate3d("+(-1+s)*100+"%,0,0)"}:"translate"===o.positionUsing?{transform:"translate("+(-1+s)*100+"%,0)"}:{"margin-left":(-1+s)*100+"%"}).transition="all "+u+"ms "+c,a)),1===e?(i(n,{transition:"none",opacity:1}),n.offsetWidth,setTimeout(function(){i(n,{transition:"all "+u+"ms linear",opacity:0}),setTimeout(function(){r.remove(),t()},u)},u)):setTimeout(t,u)}),this},r.isStarted=function(){return"number"==typeof r.status},r.start=function(){r.status||r.set(0);var e=function(){setTimeout(function(){r.status&&(r.trickle(),e())},o.trickleSpeed)};return o.trickle&&e(),this},r.done=function(e){return e||r.status?r.inc(.3+.5*Math.random()).set(1):this},r.inc=function(e){var t=r.status;return t?("number"!=typeof e&&(e=(1-t)*s(Math.random()*t,.1,.95)),t=s(t+e,0,.994),r.set(t)):r.start()},r.trickle=function(){return r.inc(Math.random()*o.trickleRate)},e=0,t=0,r.promise=function(n){return n&&"resolved"!==n.state()&&(0===t&&r.start(),e++,t++,n.always(function(){0==--t?(e=0,r.done()):r.set((e-t)/e)})),this},r.render=function(e){if(r.isRendered())return document.getElementById("nprogress");u(document.documentElement,"nprogress-busy");var t=document.createElement("div");t.id="nprogress",t.innerHTML=o.template;var n,s,a=t.querySelector(o.barSelector),l=e?"-100":(-1+(r.status||0))*100,c=document.querySelector(o.parent);return i(a,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),!o.showSpinner&&(s=t.querySelector(o.spinnerSelector))&&m(s),c!=document.body&&u(c,"nprogress-custom-parent"),c.appendChild(t),t},r.remove=function(){c(document.documentElement,"nprogress-busy"),c(document.querySelector(o.parent),"nprogress-custom-parent");var e=document.getElementById("nprogress");e&&m(e)},r.isRendered=function(){return!!document.getElementById("nprogress")},r.getPositioningCSS=function(){var e=document.body.style,t="WebkitTransform"in e?"Webkit":"MozTransform"in e?"Moz":"msTransform"in e?"ms":"OTransform"in e?"O":"";return t+"Perspective" in e?"translate3d":t+"Transform" in e?"translate":"margin"};var a=(n=[],function(e){n.push(e),1==n.length&&function e(){var t=n.shift();t&&t(e)}()}),i=function(){var e=["Webkit","O","Moz","ms"],t={};function n(n,r,o){var s;r=t[s=(s=r).replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(e,t){return t.toUpperCase()})]||(t[s]=function(t){var n=document.body.style;if(t in n)return t;for(var r,o=e.length,s=t.charAt(0).toUpperCase()+t.slice(1);o--;)if((r=e[o]+s)in n)return r;return t}(s)),n.style[r]=o}return function(e,t){var r,o,s=arguments;if(2==s.length)for(r in t)void 0!==(o=t[r])&&t.hasOwnProperty(r)&&n(e,r,o);else n(e,s[1],s[2])}}();function l(e,t){return("string"==typeof e?e:d(e)).indexOf(" "+t+" ")>=0}function u(e,t){var n=d(e),r=n+t;l(n,t)||(e.className=r.substring(1))}function c(e,t){var n,r=d(e);l(e,t)&&(n=r.replace(" "+t+" "," "),e.className=n.substring(1,n.length-1))}function d(e){return(" "+(e.className||"")+" ").replace(/\s+/gi," ")}function m(e){e&&e.parentNode&&e.parentNode.removeChild(e)}return r})?r.call(t,n,t,e):r)&&(e.exports=o)},2703:function(e,t,n){"use strict";var r=n(414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,a){if(a!==r){var i=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],function(){return t(6840),t(6885)}),_N_E=e.O()}]);