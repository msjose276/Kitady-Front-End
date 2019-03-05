!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t=!!e&&"length"in e&&e.length,n=Z.type(e)
return"function"!==n&&!Z.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function r(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,r){return!!t.call(e,r,e)!==n})
if(t.nodeType)return Z.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(le.test(t))return Z.filter(t,e,n)
t=Z.filter(t,e)}return Z.grep(e,function(e){return Y.call(t,e)>-1!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(){X.removeEventListener("DOMContentLoaded",o),e.removeEventListener("load",o),Z.ready()}function s(){this.expando=Z.expando+s.uid++}function a(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(we,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===n||"false"!==n&&("null"===n?null:+n+""===n?+n:be.test(n)?Z.parseJSON(n):n)}catch(i){}xe.set(e,t,n)}else n=void 0
return n}function u(e,t,n,r){var i,o=1,s=20,a=r?function(){return r.cur()}:function(){return Z.css(e,t,"")},u=a(),l=n&&n[3]||(Z.cssNumber[t]?"":"px"),c=(Z.cssNumber[t]||"px"!==l&&+u)&&Ce.exec(Z.css(e,t))
if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1
do{c/=o=o||".5",Z.style(e,t,c+l)}while(o!==(o=a()/u)&&1!==o&&--s)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function l(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function c(e,t){for(var n=0,r=e.length;r>n;n++)ye.set(e[n],"globalEval",!t||ye.get(t[n],"globalEval"))}function f(e,t,n,r,i){for(var o,s,a,u,f,p,d=t.createDocumentFragment(),h=[],g=0,v=e.length;v>g;g++)if((o=e[g])||0===o)if("object"===Z.type(o))Z.merge(h,o.nodeType?[o]:o)
else if(Ae.test(o)){for(s=s||d.appendChild(t.createElement("div")),a=(Se.exec(o)||["",""])[1].toLowerCase(),u=De[a]||De._default,s.innerHTML=u[1]+Z.htmlPrefilter(o)+u[2],p=u[0];p--;)s=s.lastChild
Z.merge(h,s.childNodes),(s=d.firstChild).textContent=""}else h.push(t.createTextNode(o))
for(d.textContent="",g=0;o=h[g++];)if(r&&Z.inArray(o,r)>-1)i&&i.push(o)
else if(f=Z.contains(o.ownerDocument,o),s=l(d.appendChild(o),"script"),f&&c(s),n)for(p=0;o=s[p++];)je.test(o.type||"")&&n.push(o)
return d}function p(){return!0}function d(){return!1}function h(){try{return X.activeElement}catch(e){}}function g(e,t,n,r,i,o){var s,a
if("object"==typeof t){for(a in"string"!=typeof n&&(r=r||n,n=void 0),t)g(e,a,n,r,t[a],o)
return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=d
else if(!i)return e
return 1===o&&(s=i,(i=function(e){return Z().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=Z.guid++)),e.each(function(){Z.event.add(this,t,i,r,n)})}function v(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function m(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function y(e){var t=Re.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function x(e,t){var n,r,i,o,s,a,u,l
if(1===t.nodeType){if(ye.hasData(e)&&(o=ye.access(e),s=ye.set(t,o),l=o.events))for(i in delete s.handle,s.events={},l)for(n=0,r=l[i].length;r>n;n++)Z.event.add(t,i,l[i][n])
xe.hasData(e)&&(a=xe.access(e),u=Z.extend({},a),xe.set(t,u))}}function b(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&Ne.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function w(e,t,n,r){t=U.apply([],t)
var i,o,s,a,u,c,p=0,d=e.length,h=d-1,g=t[0],v=Z.isFunction(g)
if(v||d>1&&"string"==typeof g&&!K.checkClone&&Pe.test(g))return e.each(function(i){var o=e.eq(i)
v&&(t[0]=g.call(this,i,o.html())),w(o,t,n,r)})
if(d&&(o=(i=f(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=o),o||r)){for(a=(s=Z.map(l(i,"script"),m)).length;d>p;p++)u=i,p!==h&&(u=Z.clone(u,!0,!0),a&&Z.merge(s,l(u,"script"))),n.call(e[p],u,p)
if(a)for(c=s[s.length-1].ownerDocument,Z.map(s,y),p=0;a>p;p++)u=s[p],je.test(u.type||"")&&!ye.access(u,"globalEval")&&Z.contains(c,u)&&(u.src?Z._evalUrl&&Z._evalUrl(u.src):Z.globalEval(u.textContent.replace(Me,"")))}return e}function T(e,t,n){for(var r,i=t?Z.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||Z.cleanData(l(r)),r.parentNode&&(n&&Z.contains(r.ownerDocument,r)&&c(l(r,"script")),r.parentNode.removeChild(r))
return e}function C(e,t){var n=Z(t.createElement(e)).appendTo(t.body),r=Z.css(n[0],"display")
return n.detach(),r}function k(e){var t=X,n=We[e]
return n||("none"!==(n=C(e,t))&&n||((t=(Ie=(Ie||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(),t.close(),n=C(e,t),Ie.detach()),We[e]=n),n}function E(e,t,n){var r,i,o,s,a=e.style
return""!==(s=(n=n||_e(e))?n.getPropertyValue(t)||n[t]:void 0)&&void 0!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),n&&!K.pixelMarginRight()&&Be.test(s)&&$e.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o),void 0!==s?s+"":s}function N(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function S(e){if(e in Qe)return e
for(var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;n--;)if((e=Ge[n]+t)in Qe)return e}function j(e,t,n){var r=Ce.exec(t)
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function D(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+ke[o],!0,i)),r?("content"===n&&(s-=Z.css(e,"padding"+ke[o],!0,i)),"margin"!==n&&(s-=Z.css(e,"border"+ke[o]+"Width",!0,i))):(s+=Z.css(e,"padding"+ke[o],!0,i),"padding"!==n&&(s+=Z.css(e,"border"+ke[o]+"Width",!0,i)))
return s}function A(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=_e(e),s="border-box"===Z.css(e,"boxSizing",!1,o)
if(0>=i||null==i){if((0>(i=E(e,t,o))||null==i)&&(i=e.style[t]),Be.test(i))return i
r=s&&(K.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+D(e,t,n||(s?"border":"content"),r,o)+"px"}function q(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)(r=e[s]).style&&(o[s]=ye.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Ee(r)&&(o[s]=ye.access(r,"olddisplay",k(r.nodeName)))):(i=Ee(r),"none"===n&&i||ye.set(r,"olddisplay",i?n:Z.css(r,"display"))))
for(s=0;a>s;s++)(r=e[s]).style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"))
return e}function L(e,t,n,r,i){return new L.prototype.init(e,t,n,r,i)}function H(){return e.setTimeout(function(){Je=void 0}),Je=Z.now()}function O(e,t){var n,r=0,i={height:e}
for(t=t?1:0;4>r;r+=2-t)i["margin"+(n=ke[r])]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function F(e,t,n){for(var r,i=(P.tweeners[t]||[]).concat(P.tweeners["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function P(e,t,n){var r,i,o=0,s=P.prefilters.length,a=Z.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1
for(var t=Je||H(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,s=l.tweens.length;s>o;o++)l.tweens[o].run(r)
return a.notifyWith(e,[l,r,n]),1>r&&s?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{},easing:Z.easing._default},n),originalProperties:t,originalOptions:n,startTime:Je||H(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Z.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;r>n;n++)l.tweens[n].run(1)
return t?(a.notifyWith(e,[l,1,0]),a.resolveWith(e,[l,t])):a.rejectWith(e,[l,t]),this}}),c=l.props
for(function(e,t){var n,r,i,o,s
for(n in e)if(i=t[r=Z.camelCase(n)],o=e[n],Z.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(s=Z.cssHooks[r])&&"expand"in s)for(n in o=s.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i)
else t[r]=i}(c,l.opts.specialEasing);s>o;o++)if(r=P.prefilters[o].call(l,e,c,l.opts))return Z.isFunction(r.stop)&&(Z._queueHooks(l.elem,l.opts.queue).stop=Z.proxy(r.stop,r)),r
return Z.map(c,F,l),Z.isFunction(l.opts.start)&&l.opts.start.call(e,l),Z.fx.timer(Z.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function R(e){return e.getAttribute&&e.getAttribute("class")||""}function M(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(ge)||[]
if(Z.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function I(e,t,n,r){function i(a){var u
return o[a]=!0,Z.each(e[a]||[],function(e,a){var l=a(t,n,r)
return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===yt
return i(t.dataTypes[0])||!o["*"]&&i("*")}function W(e,t){var n,r,i=Z.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&Z.extend(!0,e,r),e}function $(e,t,n,r){var i
if(Z.isArray(t))Z.each(t,function(t,i){n||Tt.test(e)?r(e,i):$(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)})
else if(n||"object"!==Z.type(t))r(e,t)
else for(i in t)$(e+"["+i+"]",t[i],n,r)}function B(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var _=[],X=e.document,z=_.slice,U=_.concat,V=_.push,Y=_.indexOf,G={},Q=G.toString,J=G.hasOwnProperty,K={},Z=function(e,t){return new Z.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,re=function(e,t){return t.toUpperCase()}
Z.fn=Z.prototype={jquery:"2.2.4",constructor:Z,selector:"",length:0,toArray:function(){return z.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:z.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e){return Z.each(this,e)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(z.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:V,sort:_.sort,splice:_.splice},Z.extend=Z.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1
for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(r=e[t])&&(l&&r&&(Z.isPlainObject(r)||(i=Z.isArray(r)))?(i?(i=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(l,o,r)):void 0!==r&&(s[t]=r))
return s},Z.extend({expando:"jQuery"+("2.2.4"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=e&&e.toString()
return!Z.isArray(e)&&t-parseFloat(t)+1>=0},isPlainObject:function(e){var t
if("object"!==Z.type(e)||e.nodeType||Z.isWindow(e))return!1
if(e.constructor&&!J.call(e,"constructor")&&!J.call(e.constructor.prototype||{},"isPrototypeOf"))return!1
for(t in e);return void 0===t||J.call(e,t)},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?G[Q.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;(e=Z.trim(e))&&(1===e.indexOf("use strict")?((t=X.createElement("script")).text=e,X.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,re)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var r,i=0
if(n(e))for(r=e.length;r>i&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break
return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var r=t||[]
return null!=e&&(n(Object(e))?Z.merge(r,"string"==typeof e?[e]:e):V.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:Y.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,s=!n;o>i;i++)!t(e[i],i)!==s&&r.push(e[i])
return r},map:function(e,t,r){var i,o,s=0,a=[]
if(n(e))for(i=e.length;i>s;s++)null!=(o=t(e[s],s,r))&&a.push(o)
else for(s in e)null!=(o=t(e[s],s,r))&&a.push(o)
return U.apply([],a)},guid:1,proxy:function(e,t){var n,r,i
return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(r=z.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(z.call(arguments)))}).guid=e.guid=e.guid||Z.guid++,i):void 0},now:Date.now,support:K}),"function"==typeof Symbol&&(Z.fn[Symbol.iterator]=_[Symbol.iterator]),Z.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()})
var ie=function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h=t&&t.ownerDocument,g=t?t.nodeType:9
if(n=n||[],"string"!=typeof e||!e||1!==g&&9!==g&&11!==g)return n
if(!r&&((t?t.ownerDocument||t:W)!==L&&q(t),t=t||L,O)){if(11!==g&&(l=ye.exec(e)))if(i=l[1]){if(9===g){if(!(s=t.getElementById(i)))return n
if(s.id===i)return n.push(s),n}else if(h&&(s=h.getElementById(i))&&M(t,s)&&s.id===i)return n.push(s),n}else{if(l[2])return K.apply(n,t.getElementsByTagName(e)),n
if((i=l[3])&&w.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(w.qsa&&!z[e+" "]&&(!F||!F.test(e))){if(1!==g)h=t,d=e
else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(be,"\\$&"):t.setAttribute("id",a=I),o=(f=E(e)).length,u=pe.test(a)?"#"+a:"[id='"+a+"']";o--;)f[o]=u+" "+p(f[o])
d=f.join(","),h=xe.test(e)&&c(t.parentNode)||t}if(d)try{return K.apply(n,h.querySelectorAll(d)),n}catch(v){}finally{a===I&&t.removeAttribute("id")}}}return S(e.replace(ae,"$1"),t,n,r)}function n(){var e=[]
return function t(n,r){return e.push(n+" ")>T.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function r(e){return e[I]=!0,e}function i(e){var t=L.createElement("div")
try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function a(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&void 0!==e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value
return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=B++
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l,c=[$,o]
if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if((a=(u=(l=t[I]||(t[I]={}))[t.uniqueID]||(l[t.uniqueID]={}))[r])&&a[0]===$&&a[1]===o)return c[2]=a[2]
if(u[r]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r)
return r}function v(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a))
return s}function m(e,t,n,i,o,s){return i&&!i[I]&&(i=m(i)),o&&!o[I]&&(o=m(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,m=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?m:v(m,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y
if(n&&n(y,x,a,u),i)for(l=v(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f))
if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f)
o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=v(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):K.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return ee(t,e)>-1},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))
return t=null,i}];i>a;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)]
else{if((n=T.filter[e[a].type].apply(null,e[a].matches))[I]){for(r=++a;i>r&&!T.relative[e[r].type];r++);return m(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ae,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],m=[],y=j,x=r||o&&T.find.TAG("*",l),b=$+=null==y?1:Math.random()||.1,w=x.length
for(l&&(j=s===L||s||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,s||c.ownerDocument===L||(q(c),a=!O);p=e[f++];)if(p(c,s||L,a)){u.push(c)
break}l&&($=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,m,s,a)
if(r){if(d>0)for(;h--;)g[h]||m[h]||(m[h]=Q.call(u))
m=v(m)}K.apply(u,m),l&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&($=b,j=y),g}
return i?r(s):s}var b,w,T,C,k,E,N,S,j,D,A,q,L,H,O,F,P,R,M,I="sizzle"+1*new Date,W=e.document,$=0,B=0,_=n(),X=n(),z=n(),U=function(e,t){return e===t&&(A=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,K=G.push,Z=G.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",se=new RegExp(ne+"+","g"),ae=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xe=/[+~]/,be=/'|\\/g,we=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),Te=function(e,t,n){var r="0x"+t-65536
return r!=r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){q()}
try{K.apply(G=Z.call(W.childNodes),W.childNodes),G[W.childNodes.length].nodeType}catch(ve){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}for(b in w=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return!!t&&"HTML"!==t.nodeName},q=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:W
return r!==L&&9===r.nodeType&&r.documentElement?(H=(L=r).documentElement,O=!k(L),(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=me.test(L.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=I,!L.getElementsByName||!L.getElementsByName(I).length}),w.getById?(T.find.ID=function(e,t){if(void 0!==t.getElementById&&O){var n=t.getElementById(e)
return n?[n]:[]}},T.filter.ID=function(e){var t=e.replace(we,Te)
return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(we,Te)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return void 0!==t.getElementsByClassName&&O?t.getElementsByClassName(e):void 0},P=[],F=[],(w.qsa=me.test(L.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=L.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=me.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),P.push("!=",oe)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),t=me.test(H.compareDocumentPosition),M=t||me.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},U=t?function(e,t){if(e===t)return A=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===W&&M(W,e)?-1:t===L||t.ownerDocument===W&&M(W,t)?1:D?ee(D,e)-ee(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0
var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],u=[t]
if(!i||!o)return e===L?-1:t===L?1:i?-1:o?1:D?ee(D,e)-ee(D,t):0
if(i===o)return s(e,t)
for(n=e;n=n.parentNode;)a.unshift(n)
for(n=t;n=n.parentNode;)u.unshift(n)
for(;a[r]===u[r];)r++
return r?s(a[r],u[r]):a[r]===W?-1:u[r]===W?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&q(e),n=n.replace(ce,"='$1']"),w.matchesSelector&&O&&!z[n+" "]&&(!P||!P.test(n))&&(!F||!F.test(n)))try{var r=R.call(e,n)
if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&q(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&q(e)
var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0
return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
if(A=!w.detectDuplicates,D=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i))
for(;r--;)e.splice(n[r],1)}return D=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t)
return n},(T=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "]
return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",v=t.parentNode,m=a&&t.nodeName.toLowerCase(),y=!u&&!a,x=!1
if(v){if(o){for(;g;){for(p=t;p=p[g];)if(a?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1
h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?v.firstChild:v.lastChild],s&&y){for(x=(d=(l=(c=(f=(p=v)[I]||(p[I]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===$&&l[1])&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[$,d,x]
break}}else if(y&&(x=d=(l=(c=(f=(p=t)[I]||(p[I]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===$&&l[1]),!1===x)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((a?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++x||(y&&((c=(f=p[I]||(p[I]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[$,x]),p!==t)););return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return o[I]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)e[r=ee(e,i[s])]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=N(e.replace(ae,"$1"))
return i[I]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n
do{if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return!1===e.disabled},disabled:function(e){return!0===e.disabled},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n)
return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n)
return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r)
return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r)
return e})}}).pseudos.nth=T.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b)
for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b)
return f.prototype=T.filters=T.pseudos,T.setFilters=new f,E=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=X[e+" "]
if(c)return n?0:c.slice(0)
for(a=e,u=[],l=T.preFilter;a;){for(s in(!r||(i=ue.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=le.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ae," ")}),a=a.slice(r.length)),T.filter)!(i=de[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length))
if(!r)break}return n?a.length:a?t.error(e):X(e,u).slice(0)},N=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "]
if(!o){for(t||(t=E(e)),n=t.length;n--;)(o=y(t[n]))[I]?r.push(o):i.push(o);(o=z(e,x(i,r))).selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&E(e=l.selector||e)
if(n=n||[],1===f.length){if((o=f[0]=f[0].slice(0)).length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(!(t=(T.find.ID(s.matches[0].replace(we,Te),t)||[])[0]))return n
l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(we,Te),xe.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&p(o)))return K.apply(n,r),n
break}}return(l||N(e,f))(r,t,!O,n,!t||xe.test(e)&&c(t.parentNode)||t),n},w.sortStable=I.split("").sort(U).join("")===I,w.detectDuplicates=!!A,q(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r
return n?void 0:!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e)
Z.find=ie,Z.expr=ie.selectors,Z.expr[":"]=Z.expr.pseudos,Z.uniqueSort=Z.unique=ie.uniqueSort,Z.text=ie.getText,Z.isXMLDoc=ie.isXML,Z.contains=ie.contains
var oe=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Z(e).is(n))break
r.push(e)}return r},se=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n},ae=Z.expr.match.needsContext,ue=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,le=/^.[^:#\[\.,]*$/
Z.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Z.find.matchesSelector(r,e)?[r]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,r=[],i=this
if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(i[t],this))return!0}))
for(t=0;n>t;t++)Z.find(e,i[t],r)
return(r=this.pushStack(n>1?Z.unique(r):r)).selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ae.test(e)?Z(e):e||[],!1).length}})
var ce,fe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(Z.fn.init=function(e,t,n){var r,i
if(!e)return this
if(n=n||ce,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:fe.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
if(r[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:X,!0)),ue.test(r[1])&&Z.isPlainObject(t))for(r in t)Z.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r])
return this}return(i=X.getElementById(r[2]))&&i.parentNode&&(this.length=1,this[0]=i),this.context=X,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?void 0!==n.ready?n.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))}).prototype=Z.fn,ce=Z(X)
var pe=/^(?:parents|prev(?:Until|All))/,de={children:!0,contents:!0,next:!0,prev:!0}
Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ae.test(e)||"string"!=typeof e?Z(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?Z.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?Y.call(Z(e),this[0]):Y.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.uniqueSort(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return oe(e,"parentNode")},parentsUntil:function(e,t,n){return oe(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return oe(e,"nextSibling")},prevAll:function(e){return oe(e,"previousSibling")},nextUntil:function(e,t,n){return oe(e,"nextSibling",n)},prevUntil:function(e,t,n){return oe(e,"previousSibling",n)},siblings:function(e){return se((e.parentNode||{}).firstChild,e)},children:function(e){return se(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,r){var i=Z.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Z.filter(r,i)),this.length>1&&(de[e]||Z.uniqueSort(i),pe.test(e)&&i.reverse()),this.pushStack(i)}})
var he,ge=/\S+/g
Z.Callbacks=function(e){e="string"==typeof e?function(e){var t={}
return Z.each(e.match(ge)||[],function(e,n){t[n]=!0}),t}(e):Z.extend({},e)
var t,n,r,i,o=[],s=[],a=-1,u=function(){for(i=e.once,r=t=!0;s.length;a=-1)for(n=s.shift();++a<o.length;)!1===o[a].apply(n[0],n[1])&&e.stopOnFalse&&(a=o.length,n=!1)
e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(a=o.length-1,s.push(n)),function t(n){Z.each(n,function(n,r){Z.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==Z.type(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,o,n))>-1;)o.splice(n,1),a>=n&&a--}),this},has:function(e){return e?Z.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],s.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}}
return l},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments
return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t]
i[o[1]](function(){var e=s&&s.apply(this,arguments)
e&&Z.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,r):r}},i={}
return r.pipe=r.then,Z.each(t,function(e,o){var s=o[2],a=o[3]
r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=z.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,u=1===a?e:Z.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?z.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}}
if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&Z.isFunction(o[i].promise)?o[i].promise().progress(l(i,n,t)).done(l(i,r,o)).fail(u.reject):--a
return a||u.resolveWith(r,o),u.promise()}}),Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(!0===e?--Z.readyWait:Z.isReady)||(Z.isReady=!0,!0!==e&&--Z.readyWait>0||(he.resolveWith(X,[Z]),Z.fn.triggerHandler&&(Z(X).triggerHandler("ready"),Z(X).off("ready"))))}}),Z.ready.promise=function(t){return he||(he=Z.Deferred(),"complete"===X.readyState||"loading"!==X.readyState&&!X.documentElement.doScroll?e.setTimeout(Z.ready):(X.addEventListener("DOMContentLoaded",o),e.addEventListener("load",o))),he.promise(t)},Z.ready.promise()
var ve=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n
if("object"===Z.type(n))for(a in i=!0,n)ve(e,t,a,n[a],!0,o,s)
else if(void 0!==r&&(i=!0,Z.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Z(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},me=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
s.uid=1,s.prototype={register:function(e,t){var n=t||{}
return e.nodeType?e[this.expando]=n:Object.defineProperty(e,this.expando,{value:n,writable:!0,configurable:!0}),e[this.expando]},cache:function(e){if(!me(e))return{}
var t=e[this.expando]
return t||(t={},me(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
if("string"==typeof t)i[t]=n
else for(r in t)i[r]=t[r]
return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][t]},access:function(e,t,n){var r
return void 0===t||t&&"string"==typeof t&&void 0===n?void 0!==(r=this.get(e,t))?r:this.get(e,Z.camelCase(t)):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=e[this.expando]
if(void 0!==o){if(void 0===t)this.register(e)
else{Z.isArray(t)?r=t.concat(t.map(Z.camelCase)):(i=Z.camelCase(t),t in o?r=[t,i]:r=(r=i)in o?[r]:r.match(ge)||[]),n=r.length
for(;n--;)delete o[r[n]]}(void 0===t||Z.isEmptyObject(o))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
return void 0!==t&&!Z.isEmptyObject(t)}}
var ye=new s,xe=new s,be=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/[A-Z]/g
Z.extend({hasData:function(e){return xe.hasData(e)||ye.hasData(e)},data:function(e,t,n){return xe.access(e,t,n)},removeData:function(e,t){xe.remove(e,t)},_data:function(e,t,n){return ye.access(e,t,n)},_removeData:function(e,t){ye.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes
if(void 0===e){if(this.length&&(i=xe.get(o),1===o.nodeType&&!ye.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(0===(r=s[n].name).indexOf("data-")&&(r=Z.camelCase(r.slice(5)),a(o,r,i[r])))
ye.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){xe.set(this,e)}):ve(this,function(t){var n,r
if(o&&void 0===t){if(void 0!==(n=xe.get(o,e)||xe.get(o,e.replace(we,"-$&").toLowerCase())))return n
if(r=Z.camelCase(e),void 0!==(n=xe.get(o,r)))return n
if(void 0!==(n=a(o,r,void 0)))return n}else r=Z.camelCase(e),this.each(function(){var n=xe.get(this,r)
xe.set(this,r,t),e.indexOf("-")>-1&&void 0!==n&&xe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){xe.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var r
return e?(t=(t||"fx")+"queue",r=ye.get(e,t),n&&(!r||Z.isArray(n)?r=ye.access(e,t,Z.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=Z.queue(e,t),r=n.length,i=n.shift(),o=Z._queueHooks(e,t)
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){Z.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ye.get(e,n)||ye.access(e,n,{empty:Z.Callbacks("once memory").add(function(){ye.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t)
Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Z.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)(n=ye.get(o[s],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(a))
return a(),i.promise(t)}})
var Te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ce=new RegExp("^(?:([+-])=|)("+Te+")([a-z%]*)$","i"),ke=["Top","Right","Bottom","Left"],Ee=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Ne=/^(?:checkbox|radio)$/i,Se=/<([\w:-]+)/,je=/^$|\/(?:java|ecma)script/i,De={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
De.optgroup=De.option,De.tbody=De.tfoot=De.colgroup=De.caption=De.thead,De.th=De.td
var Ae=/<|&#?\w+;/
!function(){var e=X.createDocumentFragment().appendChild(X.createElement("div")),t=X.createElement("input")
t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),K.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",K.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}()
var qe=/^key/,Le=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,He=/^([^.]*)(?:\.(.+)|)/
Z.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=ye.get(e)
if(v)for(n.handler&&(n=(o=n).handler,i=o.selector),n.guid||(n.guid=Z.guid++),(u=v.events)||(u=v.events={}),(s=v.handle)||(s=v.handle=function(t){return void 0!==Z&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(ge)||[""]).length;l--;)d=g=(a=He.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d&&(f=Z.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Z.event.special[d]||{},c=Z.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Z.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,s)||e.addEventListener&&e.addEventListener(d,s)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Z.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,v=ye.hasData(e)&&ye.get(e)
if(v&&(u=v.events)){for(l=(t=(t||"").match(ge)||[""]).length;l--;)if(d=g=(a=He.exec(t[l])||[])[1],h=(a[2]||"").split(".").sort(),d){for(f=Z.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
s&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||Z.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)Z.event.remove(e,d+t[l],n,r,!0)
Z.isEmptyObject(u)&&ye.remove(e,"handle events")}},dispatch:function(e){e=Z.event.fix(e)
var t,n,r,i,o,s=[],a=z.call(arguments),u=(ye.get(this,"events")||{})[e.type]||[],l=Z.event.special[e.type]||{}
if(a[0]=e,e.delegateTarget=this,!l.preDispatch||!1!==l.preDispatch.call(this,e)){for(s=Z.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.rnamespace||e.rnamespace.test(o.namespace))&&(e.handleObj=o,e.data=o.data,void 0!==(r=((Z.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a))&&!1===(e.result=r)&&(e.preventDefault(),e.stopPropagation()))
return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target
if(a&&u.nodeType&&("click"!==e.type||isNaN(e.button)||e.button<1))for(;u!==this;u=u.parentNode||this)if(1===u.nodeType&&(!0!==u.disabled||"click"!==e.type)){for(r=[],n=0;a>n;n++)void 0===r[i=(o=t[n]).selector+" "]&&(r[i]=o.needsContext?Z(i,this).index(u)>-1:Z.find(i,this,null,[u]).length),r[i]&&r.push(o)
r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button
return null==e.pageX&&null!=t.clientX&&(r=(n=e.target.ownerDocument||X).documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e
var t,n,r,i=e.type,o=e,s=this.fixHooks[i]
for(s||(this.fixHooks[i]=s=Le.test(i)?this.mouseHooks:qe.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=r.length;t--;)e[n=r[t]]=o[n]
return e.target||(e.target=X),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==h()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===h()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?p:d):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={constructor:Z.Event,isDefaultPrevented:d,isPropagationStopped:d,isImmediatePropagationStopped:d,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=p,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=p,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=p,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj
return(!r||r!==this&&!Z.contains(this,r))&&(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),Z.fn.extend({on:function(e,t,n,r){return g(this,e,t,n,r)},one:function(e,t,n,r){return g(this,e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Z(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=d),this.each(function(){Z.event.remove(this,e,n,t)})}})
var Oe=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,Fe=/<script|<style|<link/i,Pe=/checked\s*(?:[^=]|=\s*.checked.)/i,Re=/^true\/(.*)/,Me=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
Z.extend({htmlPrefilter:function(e){return e.replace(Oe,"<$1></$2>")},clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=Z.contains(e.ownerDocument,e)
if(!(K.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=l(a),r=0,i=(o=l(e)).length;i>r;r++)b(o[r],s[r])
if(t)if(n)for(o=o||l(e),s=s||l(a),r=0,i=o.length;i>r;r++)x(o[r],s[r])
else x(e,a)
return(s=l(a,"script")).length>0&&c(s,!u&&l(e,"script")),a},cleanData:function(e){for(var t,n,r,i=Z.event.special,o=0;void 0!==(n=e[o]);o++)if(me(n)){if(t=n[ye.expando]){if(t.events)for(r in t.events)i[r]?Z.event.remove(n,r):Z.removeEvent(n,r,t.handle)
n[ye.expando]=void 0}n[xe.expando]&&(n[xe.expando]=void 0)}}}),Z.fn.extend({domManip:w,detach:function(e){return T(this,e,!0)},remove:function(e){return T(this,e)},text:function(e){return ve(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return w(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||v(this,e).appendChild(e)})},prepend:function(){return w(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=v(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return w(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return w(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(l(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return ve(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Fe.test(e)&&!De[(Se.exec(e)||["",""])[1].toLowerCase()]){e=Z.htmlPrefilter(e)
try{for(;r>n;n++)1===(t=this[n]||{}).nodeType&&(Z.cleanData(l(t,!1)),t.innerHTML=e)
t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[]
return w(this,arguments,function(t){var n=this.parentNode
Z.inArray(this,e)<0&&(Z.cleanData(l(this)),n&&n.replaceChild(t,this))},e)}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,r=[],i=Z(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(i[s])[t](n),V.apply(r,n.get())
return this.pushStack(r)}})
var Ie,We={HTML:"block",BODY:"block"},$e=/^margin/,Be=new RegExp("^("+Te+")(?!px)[a-z%]+$","i"),_e=function(t){var n=t.ownerDocument.defaultView
return n&&n.opener||(n=e),n.getComputedStyle(t)},Xe=function(e,t,n,r){var i,o,s={}
for(o in t)s[o]=e.style[o],e.style[o]=t[o]
for(o in i=n.apply(e,r||[]),t)e.style[o]=s[o]
return i},ze=X.documentElement
!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",a.innerHTML="",ze.appendChild(s)
var t=e.getComputedStyle(a)
n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,a.style.marginRight="50%",i="4px"===t.marginRight,ze.removeChild(s)}var n,r,i,o,s=X.createElement("div"),a=X.createElement("div")
a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",K.clearCloneStyle="content-box"===a.style.backgroundClip,s.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",s.appendChild(a),Z.extend(K,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},pixelMarginRight:function(){return null==r&&t(),i},reliableMarginLeft:function(){return null==r&&t(),o},reliableMarginRight:function(){var t,n=a.appendChild(X.createElement("div"))
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",ze.appendChild(s),t=!parseFloat(e.getComputedStyle(n).marginRight),ze.removeChild(s),a.removeChild(n),t}}))}()
var Ue=/^(none|table(?!-c[ea]).+)/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ye={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","O","Moz","ms"],Qe=X.createElement("div").style
Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=E(e,"opacity")
return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z.camelCase(t),l=e.style
return t=Z.cssProps[a]||(Z.cssProps[a]=S(a)||a),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:l[t]:("string"===(o=typeof n)&&(i=Ce.exec(n))&&i[1]&&(n=u(e,t,i),o="number"),void(null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(Z.cssNumber[a]?"":"px")),K.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(l[t]=n))))}},css:function(e,t,n,r){var i,o,s,a=Z.camelCase(t)
return t=Z.cssProps[a]||(Z.cssProps[a]=S(a)||a),(s=Z.cssHooks[t]||Z.cssHooks[a])&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=E(e,t,r)),"normal"===i&&t in Ye&&(i=Ye[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,r){return n?Ue.test(Z.css(e,"display"))&&0===e.offsetWidth?Xe(e,Ve,function(){return A(e,t,r)}):A(e,t,r):void 0},set:function(e,n,r){var i,o=r&&_e(e),s=r&&D(e,t,r,"border-box"===Z.css(e,"boxSizing",!1,o),o)
return s&&(i=Ce.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=Z.css(e,t)),j(0,n,s)}}}),Z.cssHooks.marginLeft=N(K.reliableMarginLeft,function(e,t){return t?(parseFloat(E(e,"marginLeft"))||e.getBoundingClientRect().left-Xe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px":void 0}),Z.cssHooks.marginRight=N(K.reliableMarginRight,function(e,t){return t?Xe(e,{display:"inline-block"},E,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+ke[r]+t]=o[r]||o[r-2]||o[0]
return i}},$e.test(e)||(Z.cssHooks[e+t].set=j)}),Z.fn.extend({css:function(e,t){return ve(this,function(e,t,n){var r,i,o={},s=0
if(Z.isArray(t)){for(r=_e(e),i=t.length;i>s;s++)o[t[s]]=Z.css(e,t[s],!1,r)
return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return q(this,!0)},hide:function(){return q(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ee(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=L,L.prototype={constructor:L,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||Z.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=L.propHooks[this.prop]
return e&&e.get?e.get(this):L.propHooks._default.get(this)},run:function(e){var t,n=L.propHooks[this.prop]
return this.options.duration?this.pos=t=Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):L.propHooks._default.set(this),this}},L.prototype.init.prototype=L.prototype,L.propHooks={_default:{get:function(e){var t
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=Z.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[Z.cssProps[e.prop]]&&!Z.cssHooks[e.prop]?e.elem[e.prop]=e.now:Z.style(e.elem,e.prop,e.now+e.unit)}}},L.propHooks.scrollTop=L.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},Z.fx=L.prototype.init,Z.fx.step={}
var Je,Ke,Ze=/^(?:toggle|show|hide)$/,et=/queueHooks$/
Z.Animation=Z.extend(P,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
return u(n.elem,e,Ce.exec(t),n),n}]},tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.match(ge)
for(var n,r=0,i=e.length;i>r;r++)n=e[r],P.tweeners[n]=P.tweeners[n]||[],P.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,s,a,u,l,c=this,f={},p=e.style,d=e.nodeType&&Ee(e),h=ye.get(e,"fxshow")
for(r in n.queue||(null==(a=Z._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,c.always(function(){c.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===("none"===(l=Z.css(e,"display"))?ye.get(e,"olddisplay")||k(e.nodeName):l)&&"none"===Z.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",c.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]})),t)if(i=t[r],Ze.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(d?"hide":"show")){if("show"!==i||!h||void 0===h[r])continue
d=!0}f[r]=h&&h[r]||Z.style(e,r)}else l=void 0
if(Z.isEmptyObject(f))"inline"===("none"===l?k(e.nodeName):l)&&(p.display=l)
else for(r in h?"hidden"in h&&(d=h.hidden):h=ye.access(e,"fxshow",{}),o&&(h.hidden=!d),d?Z(e).show():c.done(function(){Z(e).hide()}),c.done(function(){var t
for(t in ye.remove(e,"fxshow"),f)Z.style(e,t,f[t])}),f)s=F(d?h[r]:0,r,c),r in h||(h[r]=s.start,d&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}],prefilter:function(e,t){t?P.prefilters.unshift(e):P.prefilters.push(e)}}),Z.speed=function(e,t,n){var r=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t}
return r.duration=Z.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Z.fx.speeds?Z.fx.speeds[r.duration]:Z.fx.speeds._default,(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Z.isFunction(r.old)&&r.old.call(this),r.queue&&Z.dequeue(this,r.queue)},r},Z.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ee).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Z.isEmptyObject(e),o=Z.speed(t,n,r),s=function(){var t=P(this,Z.extend({},e),o);(i||ye.get(this,"finish"))&&t.stop(!0)}
return s.finish=s,i||!1===o.queue?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Z.timers,s=ye.get(this)
if(i)s[i]&&s[i].stop&&r(s[i])
else for(i in s)s[i]&&s[i].stop&&et.test(i)&&r(s[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=ye.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Z.timers,s=r?r.length:0
for(n.finish=!0,Z.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t]
Z.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(O(t,!0),e,r,i)}}),Z.each({slideDown:O("show"),slideUp:O("hide"),slideToggle:O("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers
for(Je=Z.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1)
n.length||Z.fx.stop(),Je=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Ke||(Ke=e.setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){e.clearInterval(Ke),Ke=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(t,n){return t=Z.fx&&Z.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t)
r.stop=function(){e.clearTimeout(i)}})},function(){var e=X.createElement("input"),t=X.createElement("select"),n=t.appendChild(X.createElement("option"))
e.type="checkbox",K.checkOn=""!==e.value,K.optSelected=n.selected,t.disabled=!0,K.optDisabled=!n.disabled,(e=X.createElement("input")).value="t",e.type="radio",K.radioValue="t"===e.value}()
var tt,nt=Z.expr.attrHandle
Z.fn.extend({attr:function(e,t){return ve(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),i=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?tt:void 0)),void 0!==n?null===n?void Z.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=Z.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!K.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(ge)
if(o&&1===e.nodeType)for(;n=o[i++];)r=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)}}),tt={set:function(e,t,n){return!1===t?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=nt[t]||Z.find.attr
nt[t]=function(e,t,r){var i,o
return r||(o=nt[t],nt[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,nt[t]=o),i}})
var rt=/^(?:input|select|textarea|button)$/i,it=/^(?:a|area)$/i
Z.fn.extend({prop:function(e,t){return ve(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({prop:function(e,t,n){var r,i,o=e.nodeType
if(3!==o&&8!==o&&2!==o)return 1===o&&Z.isXMLDoc(e)||(t=Z.propFix[t]||t,i=Z.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=Z.find.attr(e,"tabindex")
return t?parseInt(t,10):rt.test(e.nodeName)||it.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),K.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this})
var ot=/[\t\r\n\f]/g
Z.fn.extend({addClass:function(e){var t,n,r,i,o,s,a,u=0
if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,R(this)))})
if("string"==typeof e&&e)for(t=e.match(ge)||[];n=this[u++];)if(i=R(n),r=1===n.nodeType&&(" "+i+" ").replace(ot," ")){for(s=0;o=t[s++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ")
i!==(a=Z.trim(r))&&n.setAttribute("class",a)}return this},removeClass:function(e){var t,n,r,i,o,s,a,u=0
if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,R(this)))})
if(!arguments.length)return this.attr("class","")
if("string"==typeof e&&e)for(t=e.match(ge)||[];n=this[u++];)if(i=R(n),r=1===n.nodeType&&(" "+i+" ").replace(ot," ")){for(s=0;o=t[s++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ")
i!==(a=Z.trim(r))&&n.setAttribute("class",a)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):Z.isFunction(e)?this.each(function(n){Z(this).toggleClass(e.call(this,n,R(this),t),t)}):this.each(function(){var t,r,i,o
if("string"===n)for(r=0,i=Z(this),o=e.match(ge)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else(void 0===e||"boolean"===n)&&((t=R(this))&&ye.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":ye.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0
for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+R(n)+" ").replace(ot," ").indexOf(t)>-1)return!0
return!1}})
var st=/\r/g,at=/[\x20\t\r\n\f]+/g
Z.fn.extend({val:function(e){var t,n,r,i=this[0]
return arguments.length?(r=Z.isFunction(e),this.each(function(n){var i
1===this.nodeType&&(null==(i=r?e.call(this,n,Z(this).val()):e)?i="":"number"==typeof i?i+="":Z.isArray(i)&&(i=Z.map(i,function(e){return null==e?"":e+""})),(t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=Z.valHooks[i.type]||Z.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(st,""):null==n?"":n:void 0}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value")
return null!=t?t:Z.trim(Z.text(e)).replace(at," ")}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(((n=r[u]).selected||u===i)&&(K.optDisabled?!n.disabled:null===n.getAttribute("disabled"))&&(!n.parentNode.disabled||!Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Z.makeArray(t),s=i.length;s--;)((r=i[s]).selected=Z.inArray(Z.valHooks.option.get(r),o)>-1)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>-1:void 0}},K.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})
var ut=/^(?:focusinfocus|focusoutblur)$/
Z.extend(Z.event,{trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||X],d=J.call(t,"type")?t.type:t,h=J.call(t,"namespace")?t.namespace.split("."):[]
if(s=a=r=r||X,3!==r.nodeType&&8!==r.nodeType&&!ut.test(d+Z.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,(t=t[Z.expando]?t:new Z.Event(d,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Z.makeArray(n,[t]),f=Z.event.special[d]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!Z.isWindow(r)){for(u=f.delegateType||d,ut.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s
a===(r.ownerDocument||X)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,(c=(ye.get(s,"events")||{})[t.type]&&ye.get(s,"handle"))&&c.apply(s,n),(c=l&&s[l])&&c.apply&&me(s)&&(t.result=c.apply(s,n),!1===t.result&&t.preventDefault())
return t.type=d,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(p.pop(),n)||!me(r)||l&&Z.isFunction(r[d])&&!Z.isWindow(r)&&((a=r[l])&&(r[l]=null),Z.event.triggered=d,r[d](),Z.event.triggered=void 0,a&&(r[l]=a)),t.result}},simulate:function(e,t,n){var r=Z.extend(new Z.Event,n,{type:e,isSimulated:!0})
Z.event.trigger(r,null,t)}}),Z.fn.extend({trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?Z.event.trigger(e,t,n,!0):void 0}}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),K.focusin="onfocusin"in e,K.focusin||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e))}
Z.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ye.access(r,t)
i||r.addEventListener(e,n,!0),ye.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ye.access(r,t)-1
i?ye.access(r,t,i):(r.removeEventListener(e,n,!0),ye.remove(r,t))}}})
var lt=e.location,ct=Z.now(),ft=/\?/
Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(t){var n
if(!t||"string"!=typeof t)return null
try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(r){n=void 0}return(!n||n.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+t),n}
var pt=/#.*$/,dt=/([?&])_=[^&]*/,ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,gt=/^(?:GET|HEAD)$/,vt=/^\/\//,mt={},yt={},xt="*/".concat("*"),bt=X.createElement("a")
bt.href=lt.href,Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:lt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(lt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":xt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?W(W(e,Z.ajaxSettings),t):W(Z.ajaxSettings,e)},ajaxPrefilter:M(mt),ajaxTransport:M(yt),ajax:function(t,n){function r(t,n,r,a){var l,f,y,x,w,T=n
2!==b&&(b=2,u&&e.clearTimeout(u),i=void 0,s=a||"",C.readyState=t>0?4:0,l=t>=200&&300>t||304===t,r&&(x=function(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}(p,C,r)),x=function(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice()
if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(!(s=l[u+" "+o]||l["* "+o]))for(i in l)if((a=i.split(" "))[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){!0===s?s=l[i]:!0!==l[i]&&(o=a[0],c.unshift(a[1]))
break}if(!0!==s)if(s&&e.throws)t=s(t)
else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(p,x,C,l),l?(p.ifModified&&((w=C.getResponseHeader("Last-Modified"))&&(Z.lastModified[o]=w),(w=C.getResponseHeader("etag"))&&(Z.etag[o]=w)),204===t||"HEAD"===p.type?T="nocontent":304===t?T="notmodified":(T=x.state,f=x.data,l=!(y=x.error))):(y=T,(t||!T)&&(T="error",0>t&&(t=0))),C.status=t,C.statusText=(n||T)+"",l?g.resolveWith(d,[f,T,C]):g.rejectWith(d,[C,T,y]),C.statusCode(m),m=void 0,c&&h.trigger(l?"ajaxSuccess":"ajaxError",[C,p,l?f:y]),v.fireWith(d,[C,T]),c&&(h.trigger("ajaxComplete",[C,p]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{}
var i,o,s,a,u,l,c,f,p=Z.ajaxSetup({},n),d=p.context||p,h=p.context&&(d.nodeType||d.jquery)?Z(d):Z.event,g=Z.Deferred(),v=Z.Callbacks("once memory"),m=p.statusCode||{},y={},x={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t
if(2===b){if(!a)for(a={};t=ht.exec(s);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?s:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return b||(e=x[n]=x[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]]
else C.always(e[C.status])
return this},abort:function(e){var t=e||w
return i&&i.abort(t),r(0,t),this}}
if(g.promise(C).complete=v.add,C.success=C.done,C.error=C.fail,p.url=((t||p.url||lt.href)+"").replace(pt,"").replace(vt,lt.protocol+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=Z.trim(p.dataType||"*").toLowerCase().match(ge)||[""],null==p.crossDomain){l=X.createElement("a")
try{l.href=p.url,l.href=l.href,p.crossDomain=bt.protocol+"//"+bt.host!=l.protocol+"//"+l.host}catch(T){p.crossDomain=!0}}if(p.data&&p.processData&&"string"!=typeof p.data&&(p.data=Z.param(p.data,p.traditional)),I(mt,p,n,C),2===b)return C
for(f in(c=Z.event&&p.global)&&0==Z.active++&&Z.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!gt.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(ft.test(o)?"&":"?")+p.data,delete p.data),!1===p.cache&&(p.url=dt.test(o)?o.replace(dt,"$1_="+ct++):o+(ft.test(o)?"&":"?")+"_="+ct++)),p.ifModified&&(Z.lastModified[o]&&C.setRequestHeader("If-Modified-Since",Z.lastModified[o]),Z.etag[o]&&C.setRequestHeader("If-None-Match",Z.etag[o])),(p.data&&p.hasContent&&!1!==p.contentType||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+xt+"; q=0.01":""):p.accepts["*"]),p.headers)C.setRequestHeader(f,p.headers[f])
if(p.beforeSend&&(!1===p.beforeSend.call(d,C,p)||2===b))return C.abort()
for(f in w="abort",{success:1,error:1,complete:1})C[f](p[f])
if(i=I(yt,p,n,C)){if(C.readyState=1,c&&h.trigger("ajaxSend",[C,p]),2===b)return C
p.async&&p.timeout>0&&(u=e.setTimeout(function(){C.abort("timeout")},p.timeout))
try{b=1,i.send(y,r)}catch(T){if(!(2>b))throw T
r(-1,T)}}else r(-1,"No Transport")
return C},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,r,i){return Z.isFunction(n)&&(i=i||r,r=n,n=void 0),Z.ajax(Z.extend({url:e,type:t,dataType:i,data:n,success:r},Z.isPlainObject(e)&&e))}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,throws:!0})},Z.fn.extend({wrapAll:function(e){var t
return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return Z.isFunction(e)?this.each(function(t){Z(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Z(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e)
return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return!Z.expr.filters.visible(e)},Z.expr.filters.visible=function(e){return e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0}
var wt=/%20/g,Tt=/\[\]$/,Ct=/\r?\n/g,kt=/^(?:submit|button|image|reset|file)$/i,Et=/^(?:input|select|textarea|keygen)/i
Z.param=function(e,t){var n,r=[],i=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){i(this.name,this.value)})
else for(n in e)$(n,e[n],t,i)
return r.join("&").replace(wt,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements")
return e?Z.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!Z(this).is(":disabled")&&Et.test(this.nodeName)&&!kt.test(e)&&(this.checked||!Ne.test(e))}).map(function(e,t){var n=Z(this).val()
return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(Ct,"\r\n")}}):{name:t.name,value:n.replace(Ct,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(t){}}
var Nt={0:200,1223:204},St=Z.ajaxSettings.xhr()
K.cors=!!St&&"withCredentials"in St,K.ajax=St=!!St,Z.ajaxTransport(function(t){var n,r
return K.cors||St&&!t.crossDomain?{send:function(i,o){var s,u=t.xhr()
if(u.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(s in t.xhrFields)u[s]=t.xhrFields[s]
for(s in t.mimeType&&u.overrideMimeType&&u.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)u.setRequestHeader(s,i[s])
n=function(e){return function(){n&&(n=r=u.onload=u.onerror=u.onabort=u.onreadystatechange=null,"abort"===e?u.abort():"error"===e?"number"!=typeof u.status?o(0,"error"):o(u.status,u.statusText):o(Nt[u.status]||u.status,u.statusText,"text"!==(u.responseType||"text")||"string"!=typeof u.responseText?{binary:u.response}:{text:u.responseText},u.getAllResponseHeaders()))}},u.onload=n(),r=u.onerror=n("error"),void 0!==u.onabort?u.onabort=r:u.onreadystatechange=function(){4===u.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort")
try{u.send(t.hasContent&&t.data||null)}catch(a){if(n)throw a}},abort:function(){n&&n()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){var t,n
if(e.crossDomain)return{send:function(r,i){t=Z("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),X.head.appendChild(t[0])},abort:function(){n&&n()}}})
var jt=[],Dt=/(=)\?(?=&|$)|\?\?/
Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=jt.pop()||Z.expando+"_"+ct++
return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=!1!==t.jsonp&&(Dt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dt.test(t.data)&&"data")
return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Dt,"$1"+i):!1!==t.jsonp&&(t.url+=(ft.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Z.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){void 0===o?Z(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,jt.push(i)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||X
var r=ue.exec(e),i=!n&&[]
return r?[t.createElement(r[1])]:(r=f([e],t,i),i&&i.length&&Z(i).remove(),Z.merge([],r.childNodes))}
var At=Z.fn.load
Z.fn.load=function(e,t,n){if("string"!=typeof e&&At)return At.apply(this,arguments)
var r,i,o,s=this,a=e.indexOf(" ")
return a>-1&&(r=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Z.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Z("<div>").append(Z.parseHTML(e)).find(r):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length},Z.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l=Z.css(e,"position"),c=Z(e),f={}
"static"===l&&(e.style.position="relative"),a=c.offset(),o=Z.css(e,"top"),u=Z.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(s=(r=c.position()).top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),Z.isFunction(t)&&(t=t.call(e,n,Z.extend({},a))),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):c.css(f)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)})
var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument
return o?(t=o.documentElement,Z.contains(t,r)?(i=r.getBoundingClientRect(),n=B(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i):void 0},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(r=e.offset()),r.top+=Z.css(e[0],"borderTopWidth",!0),r.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Z.css(n,"marginTop",!0),left:t.left-r.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===Z.css(e,"position");)e=e.offsetParent
return e||ze})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t
Z.fn[e]=function(r){return ve(this,function(e,r,i){var o=B(e)
return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=N(K.pixelPosition,function(e,n){return n?(n=E(e,t),Be.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Z.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(!0===r||!0===i?"margin":"border")
return ve(this,function(t,n,r){var i
return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Z.css(t,n,s):Z.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Z.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},size:function(){return this.length}}),Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z})
var qt=e.jQuery,Lt=e.$
return Z.noConflict=function(t){return e.$===Z&&(e.$=Lt),t&&e.jQuery===Z&&(e.jQuery=qt),Z},t||(e.jQuery=e.$=Z),Z})
