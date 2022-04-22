"use strict";(self.webpackChunkdecentralized_funding=self.webpackChunkdecentralized_funding||[]).push([[347],{57776:function(e,t,n){n.d(t,{Q:function(){return o}});var r=n(47465),i=n(12591);var o=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var o=r.prototype;return o.emitUpdate=function(e){this.emit(i._.Update,e)},o.emitError=function(e){this.emit(i._.Error,e)},o.emitDeactivate=function(){this.emit(i._.Deactivate)},r}(r.EventEmitter)},36347:function(e,t,n){n.r(t),n.d(t,{PortisConnector:function(){return u}});var r=n(57776),i=n(56111);function o(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var s={1:"mainnet",3:"ropsten",4:"rinkeby",5:"goerli",42:"kovan",100:"xdai",30:"orchid",31:"orchidTestnet",99:"core",77:"sokol",61:"classic",8:"ubiq",108:"thundercore",18:"thundercoreTestnet",163:"lightstreams",122:"fuse",15001:"maticTestnet"},u=function(e){var t,r;function u(t){var n,r=t.dAppId,u=t.networks,c=t.config,a=void 0===c?{}:c,f=u.map((function(e){return"number"===typeof e?e:Number(e.chainId)}));return f.every((function(e){return!!s[e]}))||(0,i.Z)(!1),(n=e.call(this,{supportedChainIds:f})||this).dAppId=r,n.networks=u,n.config=a,n.handleOnLogout=n.handleOnLogout.bind(o(n)),n.handleOnActiveWalletChanged=n.handleOnActiveWalletChanged.bind(o(n)),n.handleOnError=n.handleOnError.bind(o(n)),n}r=e,(t=u).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var c=u.prototype;return c.handleOnLogout=function(){this.emitDeactivate()},c.handleOnActiveWalletChanged=function(e){this.emitUpdate({account:e})},c.handleOnError=function(e){this.emitError(e)},c.activate=function(){try{var e=function(){return t.portis.onLogout(t.handleOnLogout),t.portis.onActiveWalletChanged(t.handleOnActiveWalletChanged),t.portis.onError(t.handleOnError),Promise.resolve(t.portis.provider.enable().then((function(e){return e[0]}))).then((function(e){return{provider:t.portis.provider,account:e}}))},t=this,r=function(){if(!t.portis)return Promise.resolve(Promise.all([n.e(326),n.e(643)]).then(n.t.bind(n,85643,23)).then((function(e){var t;return null!=(t=null==e?void 0:e.default)?t:e}))).then((function(e){t.portis=new e(t.dAppId,"number"===typeof t.networks[0]?s[t.networks[0]]:t.networks[0],t.config)}))}();return Promise.resolve(r&&r.then?r.then(e):e())}catch(i){return Promise.reject(i)}},c.getProvider=function(){try{return Promise.resolve(this.portis.provider)}catch(e){return Promise.reject(e)}},c.getChainId=function(){try{return Promise.resolve(this.portis.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},c.getAccount=function(){try{return Promise.resolve(this.portis.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},c.deactivate=function(){this.portis.onLogout((function(){})),this.portis.onActiveWalletChanged((function(){})),this.portis.onError((function(){}))},c.changeNetwork=function(e,t){try{var n=this;return"number"===typeof e?(s[e]||(0,i.Z)(!1),n.portis.changeNetwork(s[e],t),n.emitUpdate({chainId:e})):(n.portis.changeNetwork(e,t),n.emitUpdate({chainId:Number(e.chainId)})),Promise.resolve()}catch(r){return Promise.reject(r)}},c.close=function(){try{var e=this;return Promise.resolve(e.portis.logout()).then((function(){e.emitDeactivate()}))}catch(t){return Promise.reject(t)}},u}(r.Q)},47465:function(e){var t,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var i=Number.isNaN||function(e){return e!==e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,r){function i(n){e.removeListener(t,o),r(n)}function o(){"function"===typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}d(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&d(e,"error",t,n)}(e,i,{once:!0})}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function u(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function a(e,t,n,r){var i,o,s,a;if(u(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"===typeof s?s=o[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(i=c(e))>0&&s.length>i&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,a=f,console&&console.warn&&console.warn(a)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function h(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},i=f.bind(r);return i.listener=n,r.wrapFn=i,i}function p(e,t,n){var r=e._events;if(void 0===r)return[];var i=r[t];return void 0===i?[]:"function"===typeof i?n?[i.listener||i]:[i]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(i):v(i,i.length)}function l(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function v(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function d(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function i(o){r.once&&e.removeEventListener(t,i),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||i(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var i="error"===e,o=this._events;if(void 0!==o)i=i&&void 0===o.error;else if(!i)return!1;if(i){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var u=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw u.context=s,u}var c=o[e];if(void 0===c)return!1;if("function"===typeof c)r(c,this,t);else{var a=c.length,f=v(c,a);for(n=0;n<a;++n)r(f[n],this,t)}return!0},o.prototype.addListener=function(e,t){return a(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return a(this,e,t,!0)},o.prototype.once=function(e,t){return u(t),this.on(e,h(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return u(t),this.prependListener(e,h(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,r,i,o,s;if(u(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(i=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,i=o;break}if(i<0)return this;0===i?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,i),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var i,o=Object.keys(n);for(r=0;r<o.length;++r)"removeListener"!==(i=o[r])&&this.removeAllListeners(i);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},o.prototype.listeners=function(e){return p(this,e,!0)},o.prototype.rawListeners=function(e){return p(this,e,!1)},o.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):l.call(e,t)},o.prototype.listenerCount=l,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}}]);
//# sourceMappingURL=347.a3e7f583.chunk.js.map