(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[755],{6086:function(e){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},6691:function(e,t){"use strict";var r,o,n,l;Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{ACTION_FAST_REFRESH:function(){return d},ACTION_NAVIGATE:function(){return a},ACTION_PREFETCH:function(){return u},ACTION_REFRESH:function(){return i},ACTION_RESTORE:function(){return s},ACTION_SERVER_ACTION:function(){return f},ACTION_SERVER_PATCH:function(){return c},PrefetchCacheEntryStatus:function(){return o},PrefetchKind:function(){return r},isThenable:function(){return p}});let i="refresh",a="navigate",s="restore",c="server-patch",u="prefetch",d="fast-refresh",f="server-action";function p(e){return e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then}(n=r||(r={})).AUTO="auto",n.FULL="full",n.TEMPORARY="temporary",(l=o||(o={})).fresh="fresh",l.reusable="reusable",l.expired="expired",l.stale="stale",("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4318:function(e,t,r){"use strict";function o(e,t,r,o){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return o}}),r(8364),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9577:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return w}});let o=r(8754),n=r(5893),l=o._(r(7294)),i=r(1401),a=r(2045),s=r(7420),c=r(7201),u=r(1443),d=r(9953),f=r(5320),p=r(2905),b=r(4318),m=r(953),y=r(6691),h=new Set;function g(e,t,r,o,n,l){if(l||(0,a.isLocalURL)(t)){if(!o.bypassPrefetchedCheck){let n=t+"%"+r+"%"+(void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0);if(h.has(n))return;h.add(n)}(async()=>l?e.prefetch(t,n):e.prefetch(t,r,o))().catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,s.formatUrl)(e)}let w=l.default.forwardRef(function(e,t){let r,o;let{href:s,as:h,children:w,prefetch:x=null,passHref:k,replace:_,shallow:j,scroll:O,locale:C,onClick:P,onMouseEnter:E,onTouchStart:S,legacyBehavior:z=!1,...R}=e;r=w,z&&("string"==typeof r||"number"==typeof r)&&(r=(0,n.jsx)("a",{children:r}));let M=l.default.useContext(d.RouterContext),I=l.default.useContext(f.AppRouterContext),A=null!=M?M:I,T=!M,$=!1!==x,N=null===x?y.PrefetchKind.AUTO:y.PrefetchKind.FULL,{href:L,as:U}=l.default.useMemo(()=>{if(!M){let e=v(s);return{href:e,as:h?v(h):e}}let[e,t]=(0,i.resolveHref)(M,s,!0);return{href:e,as:h?(0,i.resolveHref)(M,h):t||e}},[M,s,h]),D=l.default.useRef(L),F=l.default.useRef(U);z&&(o=l.default.Children.only(r));let G=z?o&&"object"==typeof o&&o.ref:t,[q,H,K]=(0,p.useIntersection)({rootMargin:"200px"}),V=l.default.useCallback(e=>{(F.current!==U||D.current!==L)&&(K(),F.current=U,D.current=L),q(e),G&&("function"==typeof G?G(e):"object"==typeof G&&(G.current=e))},[U,G,L,K,q]);l.default.useEffect(()=>{A&&H&&$&&g(A,L,U,{locale:C},{kind:N},T)},[U,L,H,C,$,null==M?void 0:M.locale,A,T,N]);let W={ref:V,onClick(e){z||"function"!=typeof P||P(e),z&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),A&&!e.defaultPrevented&&function(e,t,r,o,n,i,s,c,u){let{nodeName:d}=e.currentTarget;if("A"===d.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!u&&!(0,a.isLocalURL)(r)))return;e.preventDefault();let f=()=>{let e=null==s||s;"beforePopState"in t?t[n?"replace":"push"](r,o,{shallow:i,locale:c,scroll:e}):t[n?"replace":"push"](o||r,{scroll:e})};u?l.default.startTransition(f):f()}(e,A,L,U,_,j,O,C,T)},onMouseEnter(e){z||"function"!=typeof E||E(e),z&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),A&&($||!T)&&g(A,L,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T)},onTouchStart:function(e){z||"function"!=typeof S||S(e),z&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),A&&($||!T)&&g(A,L,U,{locale:C,priority:!0,bypassPrefetchedCheck:!0},{kind:N},T)}};if((0,c.isAbsoluteUrl)(U))W.href=U;else if(!z||k||"a"===o.type&&!("href"in o.props)){let e=void 0!==C?C:null==M?void 0:M.locale,t=(null==M?void 0:M.isLocaleDomain)&&(0,b.getDomainLocale)(U,e,null==M?void 0:M.locales,null==M?void 0:M.domainLocales);W.href=t||(0,m.addBasePath)((0,u.addLocale)(U,e,null==M?void 0:M.defaultLocale))}return z?l.default.cloneElement(o,W):(0,n.jsx)("a",{...R,...W,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2905:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return s}});let o=r(7294),n=r(3815),l="function"==typeof IntersectionObserver,i=new Map,a=[];function s(e){let{rootRef:t,rootMargin:r,disabled:s}=e,c=s||!l,[u,d]=(0,o.useState)(!1),f=(0,o.useRef)(null),p=(0,o.useCallback)(e=>{f.current=e},[]);return(0,o.useEffect)(()=>{if(l){if(c||u)return;let e=f.current;if(e&&e.tagName)return function(e,t,r){let{id:o,observer:n,elements:l}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===r.root&&e.margin===r.margin);if(o&&(t=i.get(o)))return t;let n=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:n},a.push(r),i.set(r,t),t}(r);return l.set(e,t),n.observe(e),function(){if(l.delete(e),n.unobserve(e),0===l.size){n.disconnect(),i.delete(o);let e=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);e>-1&&a.splice(e,1)}}}(e,e=>e&&d(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!u){let e=(0,n.requestIdleCallback)(()=>d(!0));return()=>(0,n.cancelIdleCallback)(e)}},[c,r,t,u,f.current]),[p,u,(0,o.useCallback)(()=>{d(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1664:function(e,t,r){e.exports=r(9577)},238:function(e,t,r){"use strict";var o=r(6086),n=60103,l=60106;t.Fragment=60107,t.StrictMode=60108,t.Profiler=60114;var i=60109,a=60110,s=60112;t.Suspense=60113;var c=60115,u=60116;if("function"==typeof Symbol&&Symbol.for){var d=Symbol.for;n=d("react.element"),l=d("react.portal"),t.Fragment=d("react.fragment"),t.StrictMode=d("react.strict_mode"),t.Profiler=d("react.profiler"),i=d("react.provider"),a=d("react.context"),s=d("react.forward_ref"),t.Suspense=d("react.suspense"),c=d("react.memo"),u=d("react.lazy")}var f="function"==typeof Symbol&&Symbol.iterator;function p(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m={};function y(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}function h(){}function g(e,t,r){this.props=e,this.context=t,this.refs=m,this.updater=r||b}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(p(85));this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=y.prototype;var v=g.prototype=new h;v.constructor=g,o(v,y.prototype),v.isPureReactComponent=!0;var w={current:null},x=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,r){var o,l={},i=null,a=null;if(null!=t)for(o in void 0!==t.ref&&(a=t.ref),void 0!==t.key&&(i=""+t.key),t)x.call(t,o)&&!k.hasOwnProperty(o)&&(l[o]=t[o]);var s=arguments.length-2;if(1===s)l.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];l.children=c}if(e&&e.defaultProps)for(o in s=e.defaultProps)void 0===l[o]&&(l[o]=s[o]);return{$$typeof:n,type:e,key:i,ref:a,props:l,_owner:w.current}}function j(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function C(e,t){var r,o;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,o={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return o[e]})):t.toString(36)}function P(e,t,r){if(null==e)return e;var o=[],i=0;return!function e(t,r,o,i,a){var s,c,u,d=typeof t;("undefined"===d||"boolean"===d)&&(t=null);var b=!1;if(null===t)b=!0;else switch(d){case"string":case"number":b=!0;break;case"object":switch(t.$$typeof){case n:case l:b=!0}}if(b)return a=a(b=t),t=""===i?"."+C(b,0):i,Array.isArray(a)?(o="",null!=t&&(o=t.replace(O,"$&/")+"/"),e(a,r,o,"",function(e){return e})):null!=a&&(j(a)&&(s=a,c=o+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+t,a={$$typeof:n,type:s.type,key:c,ref:s.ref,props:s.props,_owner:s._owner}),r.push(a)),1;if(b=0,i=""===i?".":i+":",Array.isArray(t))for(var m=0;m<t.length;m++){var y=i+C(d=t[m],m);b+=e(d,r,o,y,a)}else if("function"==typeof(y=null===(u=t)||"object"!=typeof u?null:"function"==typeof(u=f&&u[f]||u["@@iterator"])?u:null))for(t=y.call(t),m=0;!(d=t.next()).done;)y=i+C(d=d.value,m++),b+=e(d,r,o,y,a);else if("object"===d)throw Error(p(31,"[object Object]"==(r=""+t)?"object with keys {"+Object.keys(t).join(", ")+"}":r));return b}(e,o,"","",function(e){return t.call(r,e,i++)}),o}function E(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then(function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)},function(t){0===e._status&&(e._status=2,e._result=t)})}if(1===e._status)return e._result;throw e._result}var S={current:null};function z(){var e=S.current;if(null===e)throw Error(p(321));return e}t.Children={map:P,forEach:function(e,t,r){P(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return P(e,function(){t++}),t},toArray:function(e){return P(e,function(e){return e})||[]},only:function(e){if(!j(e))throw Error(p(143));return e}},t.Component=y,t.PureComponent=g,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:S,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:o},t.cloneElement=function(e,t,r){if(null==e)throw Error(p(267,e));var l=o({},e.props),i=e.key,a=e.ref,s=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,s=w.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)x.call(t,u)&&!k.hasOwnProperty(u)&&(l[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)l.children=r;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];l.children=c}return{$$typeof:n,type:e.type,key:i,ref:a,props:l,_owner:s}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:a,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=j,t.lazy=function(e){return{$$typeof:u,_payload:{_status:-1,_result:e},_init:E}},t.memo=function(e,t){return{$$typeof:c,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return z().useCallback(e,t)},t.useContext=function(e,t){return z().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return z().useEffect(e,t)},t.useImperativeHandle=function(e,t,r){return z().useImperativeHandle(e,t,r)},t.useLayoutEffect=function(e,t){return z().useLayoutEffect(e,t)},t.useMemo=function(e,t){return z().useMemo(e,t)},t.useReducer=function(e,t,r){return z().useReducer(e,t,r)},t.useRef=function(e){return z().useRef(e)},t.useState=function(e){return z().useState(e)},t.version="17.0.2"},171:function(e,t,r){"use strict";e.exports=r(238)},512:function(e,t,r){"use strict";function o(){for(var e,t,r=0,o="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=function e(t){var r,o,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t){if(Array.isArray(t)){var l=t.length;for(r=0;r<l;r++)t[r]&&(o=e(t[r]))&&(n&&(n+=" "),n+=o)}else for(o in t)t[o]&&(n&&(n+=" "),n+=o)}return n}(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{W:function(){return o}})},8388:function(e,t,r){"use strict";r.d(t,{m6:function(){return Y}});let o=e=>{let t=a(e),{conflictingClassGroups:r,conflictingClassGroupModifiers:o}=e;return{getClassGroupId:e=>{let r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),n(r,t)||i(e)},getConflictingClassGroupIds:(e,t)=>{let n=r[e]||[];return t&&o[e]?[...n,...o[e]]:n}}},n=(e,t)=>{if(0===e.length)return t.classGroupId;let r=e[0],o=t.nextPart.get(r),l=o?n(e.slice(1),o):void 0;if(l)return l;if(0===t.validators.length)return;let i=e.join("-");return t.validators.find(({validator:e})=>e(i))?.classGroupId},l=/^\[(.+)\]$/,i=e=>{if(l.test(e)){let t=l.exec(e)[1],r=t?.substring(0,t.indexOf(":"));if(r)return"arbitrary.."+r}},a=e=>{let{theme:t,prefix:r}=e,o={nextPart:new Map,validators:[]};return d(Object.entries(e.classGroups),r).forEach(([e,r])=>{s(r,o,e,t)}),o},s=(e,t,r,o)=>{e.forEach(e=>{if("string"==typeof e){(""===e?t:c(t,e)).classGroupId=r;return}if("function"==typeof e){if(u(e)){s(e(o),t,r,o);return}t.validators.push({validator:e,classGroupId:r});return}Object.entries(e).forEach(([e,n])=>{s(n,c(t,e),r,o)})})},c=(e,t)=>{let r=e;return t.split("-").forEach(e=>{r.nextPart.has(e)||r.nextPart.set(e,{nextPart:new Map,validators:[]}),r=r.nextPart.get(e)}),r},u=e=>e.isThemeGetter,d=(e,t)=>t?e.map(([e,r])=>[e,r.map(e=>"string"==typeof e?t+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(([e,r])=>[t+e,r])):e)]):e,f=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,r=new Map,o=new Map,n=(n,l)=>{r.set(n,l),++t>e&&(t=0,o=r,r=new Map)};return{get(e){let t=r.get(e);return void 0!==t?t:void 0!==(t=o.get(e))?(n(e,t),t):void 0},set(e,t){r.has(e)?r.set(e,t):n(e,t)}}},p=e=>{let{separator:t,experimentalParseClassName:r}=e,o=1===t.length,n=t[0],l=t.length,i=e=>{let r;let i=[],a=0,s=0;for(let c=0;c<e.length;c++){let u=e[c];if(0===a){if(u===n&&(o||e.slice(c,c+l)===t)){i.push(e.slice(s,c)),s=c+l;continue}if("/"===u){r=c;continue}}"["===u?a++:"]"===u&&a--}let c=0===i.length?e:e.substring(s),u=c.startsWith("!"),d=u?c.substring(1):c;return{modifiers:i,hasImportantModifier:u,baseClassName:d,maybePostfixModifierPosition:r&&r>s?r-s:void 0}};return r?e=>r({className:e,parseClassName:i}):i},b=e=>{if(e.length<=1)return e;let t=[],r=[];return e.forEach(e=>{"["===e[0]?(t.push(...r.sort(),e),r=[]):r.push(e)}),t.push(...r.sort()),t},m=e=>({cache:f(e.cacheSize),parseClassName:p(e),...o(e)}),y=/\s+/,h=(e,t)=>{let{parseClassName:r,getClassGroupId:o,getConflictingClassGroupIds:n}=t,l=[],i=e.trim().split(y),a="";for(let e=i.length-1;e>=0;e-=1){let t=i[e],{modifiers:s,hasImportantModifier:c,baseClassName:u,maybePostfixModifierPosition:d}=r(t),f=!!d,p=o(f?u.substring(0,d):u);if(!p){if(!f||!(p=o(u))){a=t+(a.length>0?" "+a:a);continue}f=!1}let m=b(s).join(":"),y=c?m+"!":m,h=y+p;if(l.includes(h))continue;l.push(h);let g=n(p,f);for(let e=0;e<g.length;++e){let t=g[e];l.push(y+t)}a=t+(a.length>0?" "+a:a)}return a};function g(){let e,t,r=0,o="";for(;r<arguments.length;)(e=arguments[r++])&&(t=v(e))&&(o&&(o+=" "),o+=t);return o}let v=e=>{let t;if("string"==typeof e)return e;let r="";for(let o=0;o<e.length;o++)e[o]&&(t=v(e[o]))&&(r&&(r+=" "),r+=t);return r},w=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},x=/^\[(?:([a-z-]+):)?(.+)\]$/i,k=/^\d+\/\d+$/,_=new Set(["px","full","screen"]),j=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,O=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,C=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,P=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,E=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,S=e=>R(e)||_.has(e)||k.test(e),z=e=>H(e,"length",K),R=e=>!!e&&!Number.isNaN(Number(e)),M=e=>H(e,"number",R),I=e=>!!e&&Number.isInteger(Number(e)),A=e=>e.endsWith("%")&&R(e.slice(0,-1)),T=e=>x.test(e),$=e=>j.test(e),N=new Set(["length","size","percentage"]),L=e=>H(e,N,V),U=e=>H(e,"position",V),D=new Set(["image","url"]),F=e=>H(e,D,B),G=e=>H(e,"",W),q=()=>!0,H=(e,t,r)=>{let o=x.exec(e);return!!o&&(o[1]?"string"==typeof t?o[1]===t:t.has(o[1]):r(o[2]))},K=e=>O.test(e)&&!C.test(e),V=()=>!1,W=e=>P.test(e),B=e=>E.test(e),Y=function(e,...t){let r,o,n;let l=function(a){return o=(r=m(t.reduce((e,t)=>t(e),e()))).cache.get,n=r.cache.set,l=i,i(a)};function i(e){let t=o(e);if(t)return t;let l=h(e,r);return n(e,l),l}return function(){return l(g.apply(null,arguments))}}(()=>{let e=w("colors"),t=w("spacing"),r=w("blur"),o=w("brightness"),n=w("borderColor"),l=w("borderRadius"),i=w("borderSpacing"),a=w("borderWidth"),s=w("contrast"),c=w("grayscale"),u=w("hueRotate"),d=w("invert"),f=w("gap"),p=w("gradientColorStops"),b=w("gradientColorStopPositions"),m=w("inset"),y=w("margin"),h=w("opacity"),g=w("padding"),v=w("saturate"),x=w("scale"),k=w("sepia"),_=w("skew"),j=w("space"),O=w("translate"),C=()=>["auto","contain","none"],P=()=>["auto","hidden","clip","visible","scroll"],E=()=>["auto",T,t],N=()=>[T,t],D=()=>["",S,z],H=()=>["auto",R,T],K=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],V=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],B=()=>["start","end","center","between","around","evenly","stretch"],Y=()=>["","0",T],J=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Q=()=>[R,T];return{cacheSize:500,separator:":",theme:{colors:[q],spacing:[S,z],blur:["none","",$,T],brightness:Q(),borderColor:[e],borderRadius:["none","","full",$,T],borderSpacing:N(),borderWidth:D(),contrast:Q(),grayscale:Y(),hueRotate:Q(),invert:Y(),gap:N(),gradientColorStops:[e],gradientColorStopPositions:[A,z],inset:E(),margin:E(),opacity:Q(),padding:N(),saturate:Q(),scale:Q(),sepia:Y(),skew:Q(),space:N(),translate:N()},classGroups:{aspect:[{aspect:["auto","square","video",T]}],container:["container"],columns:[{columns:[$]}],"break-after":[{"break-after":J()}],"break-before":[{"break-before":J()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...K(),T]}],overflow:[{overflow:P()}],"overflow-x":[{"overflow-x":P()}],"overflow-y":[{"overflow-y":P()}],overscroll:[{overscroll:C()}],"overscroll-x":[{"overscroll-x":C()}],"overscroll-y":[{"overscroll-y":C()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[m]}],"inset-x":[{"inset-x":[m]}],"inset-y":[{"inset-y":[m]}],start:[{start:[m]}],end:[{end:[m]}],top:[{top:[m]}],right:[{right:[m]}],bottom:[{bottom:[m]}],left:[{left:[m]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",I,T]}],basis:[{basis:E()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",T]}],grow:[{grow:Y()}],shrink:[{shrink:Y()}],order:[{order:["first","last","none",I,T]}],"grid-cols":[{"grid-cols":[q]}],"col-start-end":[{col:["auto",{span:["full",I,T]},T]}],"col-start":[{"col-start":H()}],"col-end":[{"col-end":H()}],"grid-rows":[{"grid-rows":[q]}],"row-start-end":[{row:["auto",{span:[I,T]},T]}],"row-start":[{"row-start":H()}],"row-end":[{"row-end":H()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",T]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",T]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal",...B()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...B(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...B(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[g]}],px:[{px:[g]}],py:[{py:[g]}],ps:[{ps:[g]}],pe:[{pe:[g]}],pt:[{pt:[g]}],pr:[{pr:[g]}],pb:[{pb:[g]}],pl:[{pl:[g]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",T,t]}],"min-w":[{"min-w":[T,t,"min","max","fit"]}],"max-w":[{"max-w":[T,t,"none","full","min","max","fit","prose",{screen:[$]},$]}],h:[{h:[T,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[T,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[T,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[T,t,"auto","min","max","fit"]}],"font-size":[{text:["base",$,z]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",M]}],"font-family":[{font:[q]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",T]}],"line-clamp":[{"line-clamp":["none",R,M]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",S,T]}],"list-image":[{"list-image":["none",T]}],"list-style-type":[{list:["none","disc","decimal",T]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[h]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[h]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...V(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",S,z]}],"underline-offset":[{"underline-offset":["auto",S,T]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:N()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",T]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",T]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[h]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...K(),U]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",L]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},F]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[b]}],"gradient-via-pos":[{via:[b]}],"gradient-to-pos":[{to:[b]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[l]}],"rounded-s":[{"rounded-s":[l]}],"rounded-e":[{"rounded-e":[l]}],"rounded-t":[{"rounded-t":[l]}],"rounded-r":[{"rounded-r":[l]}],"rounded-b":[{"rounded-b":[l]}],"rounded-l":[{"rounded-l":[l]}],"rounded-ss":[{"rounded-ss":[l]}],"rounded-se":[{"rounded-se":[l]}],"rounded-ee":[{"rounded-ee":[l]}],"rounded-es":[{"rounded-es":[l]}],"rounded-tl":[{"rounded-tl":[l]}],"rounded-tr":[{"rounded-tr":[l]}],"rounded-br":[{"rounded-br":[l]}],"rounded-bl":[{"rounded-bl":[l]}],"border-w":[{border:[a]}],"border-w-x":[{"border-x":[a]}],"border-w-y":[{"border-y":[a]}],"border-w-s":[{"border-s":[a]}],"border-w-e":[{"border-e":[a]}],"border-w-t":[{"border-t":[a]}],"border-w-r":[{"border-r":[a]}],"border-w-b":[{"border-b":[a]}],"border-w-l":[{"border-l":[a]}],"border-opacity":[{"border-opacity":[h]}],"border-style":[{border:[...V(),"hidden"]}],"divide-x":[{"divide-x":[a]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[a]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[h]}],"divide-style":[{divide:V()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:["",...V()]}],"outline-offset":[{"outline-offset":[S,T]}],"outline-w":[{outline:[S,z]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[h]}],"ring-offset-w":[{"ring-offset":[S,z]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",$,G]}],"shadow-color":[{shadow:[q]}],opacity:[{opacity:[h]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[r]}],brightness:[{brightness:[o]}],contrast:[{contrast:[s]}],"drop-shadow":[{"drop-shadow":["","none",$,T]}],grayscale:[{grayscale:[c]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[v]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[r]}],"backdrop-brightness":[{"backdrop-brightness":[o]}],"backdrop-contrast":[{"backdrop-contrast":[s]}],"backdrop-grayscale":[{"backdrop-grayscale":[c]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[h]}],"backdrop-saturate":[{"backdrop-saturate":[v]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[i]}],"border-spacing-x":[{"border-spacing-x":[i]}],"border-spacing-y":[{"border-spacing-y":[i]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",T]}],duration:[{duration:Q()}],ease:[{ease:["linear","in","out","in-out",T]}],delay:[{delay:Q()}],animate:[{animate:["none","spin","ping","pulse","bounce",T]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[x]}],"scale-x":[{"scale-x":[x]}],"scale-y":[{"scale-y":[x]}],rotate:[{rotate:[I,T]}],"translate-x":[{"translate-x":[O]}],"translate-y":[{"translate-y":[O]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",T]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",T]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":N()}],"scroll-mx":[{"scroll-mx":N()}],"scroll-my":[{"scroll-my":N()}],"scroll-ms":[{"scroll-ms":N()}],"scroll-me":[{"scroll-me":N()}],"scroll-mt":[{"scroll-mt":N()}],"scroll-mr":[{"scroll-mr":N()}],"scroll-mb":[{"scroll-mb":N()}],"scroll-ml":[{"scroll-ml":N()}],"scroll-p":[{"scroll-p":N()}],"scroll-px":[{"scroll-px":N()}],"scroll-py":[{"scroll-py":N()}],"scroll-ps":[{"scroll-ps":N()}],"scroll-pe":[{"scroll-pe":N()}],"scroll-pt":[{"scroll-pt":N()}],"scroll-pr":[{"scroll-pr":N()}],"scroll-pb":[{"scroll-pb":N()}],"scroll-pl":[{"scroll-pl":N()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",T]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[S,z,M]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}})},2713:function(e,t,r){"use strict";r.d(t,{w_:function(){return u}});var o=r(171),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=o.createContext&&o.createContext(n),i=["attr","size","title"];function a(){return(a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e}).apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach(function(t){var o,n;o=t,n=r[t],(o=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(o))in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>o.createElement(d,a({attr:c({},e.attr)},t),function e(t){return t&&t.map((t,r)=>o.createElement(t.tag,c({key:r},t.attr),e(t.child)))}(e.child))}function d(e){var t=t=>{var r,{attr:n,size:l,title:s}=e,u=function(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r={};for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){if(t.indexOf(o)>=0)continue;r[o]=e[o]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,i),d=l||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),o.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,u,{className:r,style:c(c({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&o.createElement("title",null,s),e.children)};return void 0!==l?o.createElement(l.Consumer,null,e=>t(e)):t(n)}}}]);