!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype
return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[]
return-1==n.indexOf(t)&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t)
var i=this._onceEvents=this._onceEvents||{}
return(i[e]=i[e]||{})[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e]
if(i&&i.length){var n=i.indexOf(t)
return-1!=n&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e]
if(i&&i.length){var n=0,o=i[n]
t=t||[]
for(var s=this._onceEvents&&this._onceEvents[e];o;){var r=s&&s[o]
r&&(this.off(e,o),delete s[o]),o.apply(this,t),o=i[n+=r?0:1]}return this}},t.allOff=t.removeAllListeners=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict"
"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i]
return e}function n(e,t,o){return this instanceof n?("string"==typeof e&&(e=document.querySelectorAll(e)),this.elements=function(e){var t=[]
if(Array.isArray(e))t=e
else if("number"==typeof e.length)for(var i=0;i<e.length;i++)t.push(e[i])
else t.push(e)
return t}(e),this.options=i({},this.options),"function"==typeof t?o=t:i(this.options,t),o&&this.on("always",o),this.getImages(),r&&(this.jqDeferred=new r.Deferred),void setTimeout(function(){this.check()}.bind(this))):new n(e,t,o)}function o(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var r=e.jQuery,h=e.console
n.prototype=Object.create(t.prototype),n.prototype.options={},n.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},n.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),!0===this.options.background&&this.addElementBackgroundImages(e)
var t=e.nodeType
if(t&&a[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n]
this.addImage(o)}if("string"==typeof this.options.background){var s=e.querySelectorAll(this.options.background)
for(n=0;n<s.length;n++){var r=s[n]
this.addElementBackgroundImages(r)}}}}
var a={1:!0,9:!0,11:!0}
return n.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e)
if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2]
o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},n.prototype.addImage=function(e){var t=new o(e)
this.images.push(t)},n.prototype.addBackground=function(e,t){var i=new s(e,t)
this.images.push(i)},n.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this
return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},n.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&h&&h.log("progress: "+i,e,t)},n.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done"
if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve"
this.jqDeferred[t](this)}},o.prototype=Object.create(t.prototype),o.prototype.check=function(){return this.getIsImageComplete()?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},o.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},o.prototype.handleEvent=function(e){var t="on"+e.type
this[t]&&this[t](e)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(o.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},n.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((r=t).fn.imagesLoaded=function(e,t){return new n(this,e,t).jqDeferred.promise(r(this))})},n.makeJQueryPlugin(),n})
