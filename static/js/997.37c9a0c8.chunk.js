(self.webpackChunkdecentralized_funding=self.webpackChunkdecentralized_funding||[]).push([[997],{23646:function(e,t,n){var r=n(67228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.__esModule=!0,e.exports.default=e.exports},46860:function(e){e.exports=function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},98206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,n){var r=n(23646),o=n(46860),i=n(60379),s=n(98206);e.exports=function(e){return r(e)||o(e)||i(e)||s()},e.exports.__esModule=!0,e.exports.default=e.exports},57776:function(e,t,n){"use strict";n.d(t,{Q:function(){return i}});var r=n(47465),o=n(12591);var i=function(e){var t,n;function r(t){var n,r=(void 0===t?{}:t).supportedChainIds;return(n=e.call(this)||this).supportedChainIds=r,n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=r.prototype;return i.emitUpdate=function(e){this.emit(o._.Update,e)},i.emitError=function(e){this.emit(o._.Error,e)},i.emitDeactivate=function(){this.emit(o._.Deactivate)},r}(r.EventEmitter)},87997:function(e,t,n){"use strict";n.r(t),n.d(t,{FrameConnector:function(){return v},UserRejectedRequestError:function(){return p}});var r=n(57776),o=n(40549),i=n.n(o),s=n(56111);function c(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function u(e){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},u(e)}function a(e,t){return a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},a(e,t)}function f(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function d(e,t,n){return d=f()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var o=new(Function.bind.apply(e,r));return n&&a(o,n.prototype),o},d.apply(null,arguments)}function l(e){var t="function"===typeof Map?new Map:void 0;return l=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return d(e,arguments,u(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),a(r,e)},l(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(){var t;return(t=e.call(this)||this).name=t.constructor.name,t.message="The user rejected the request.",t}return c(t,e),t}(l(Error)),v=function(e){function t(t){var n;return 1!==t.supportedChainIds.length&&(0,s.Z)(!1),(n=e.call(this,t)||this).handleNetworkChanged=n.handleNetworkChanged.bind(h(n)),n.handleChainChanged=n.handleChainChanged.bind(h(n)),n.handleAccountsChanged=n.handleAccountsChanged.bind(h(n)),n.handleClose=n.handleClose.bind(h(n)),n}c(t,e);var n=t.prototype;return n.handleNetworkChanged=function(e){this.emitUpdate({provider:this.provider,chainId:e})},n.handleChainChanged=function(e){this.emitUpdate({chainId:e})},n.handleAccountsChanged=function(e){this.emitUpdate({account:0===e.length?null:e[0]})},n.handleClose=function(e,t){this.emitDeactivate()},n.activate=function(){try{var e=this;return e.provider||(e.provider=i()("frame")),e.provider.on("networkChanged",e.handleNetworkChanged).on("chainChanged",e.handleChainChanged).on("accountsChanged",e.handleAccountsChanged).on("close",e.handleClose),Promise.resolve(e.provider.enable().then((function(e){return e[0]})).catch((function(e){throw e&&4001===e.code?new p:e}))).then((function(t){return{provider:e.provider,account:t}}))}catch(t){return Promise.reject(t)}},n.getProvider=function(){try{return Promise.resolve(this.provider)}catch(e){return Promise.reject(e)}},n.getChainId=function(){try{return Promise.resolve(this.provider.send("eth_chainId"))}catch(e){return Promise.reject(e)}},n.getAccount=function(){try{return Promise.resolve(this.provider.send("eth_accounts").then((function(e){return e[0]})))}catch(e){return Promise.reject(e)}},n.deactivate=function(){this.provider.removeListener("networkChanged",this.handleNetworkChanged).removeListener("chainChanged",this.handleChainChanged).removeListener("accountsChanged",this.handleAccountsChanged).removeListener("close",this.handleClose)},t}(r.Q)},96162:function(e,t,n){var r=n(34575).default,o=n(93913).default,i=n(2205).default,s=n(99842).default,c=n(47465),u=!1,a=function(e){"use strict";i(n,e);var t=s(n);function n(e,o,i){var s;return r(this,n),(s=t.call(this)).targets=o,s.connections=e,s.connected=!1,s.status="loading",s.interval=i.interval||5e3,s.name=i.name||"default",s.inSetup=!0,s.connect(),s}return o(n,[{key:"connect",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(this.connection&&"connected"===this.connection.status&&t>=this.connection.index)u;else if(0===this.targets.length)u;else{var n=this.targets[t],r=n.protocol,o=n.location;this.connection=this.connections[r](o),this.connection.on("error",(function(n){return e.connected?e.listenerCount("error")?e.emit("error",n):void console.warn("eth-provider - Uncaught connection error: "+n.message):e.connectionError(t,n)})),this.connection.on("close",(function(t){e.connected=!1,e.emit("close"),e.closing||e.refresh()})),this.connection.on("connect",(function(){e.connection.target=e.targets[t],e.connection.index=t,e.targets[t].status=e.connection.status,e.connected=!0,e.inSetup=!1,e.emit("connect")})),this.connection.on("data",(function(t){return e.emit("data",t)})),this.connection.on("payload",(function(t){return e.emit("payload",t)}))}}},{key:"refresh",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.interval;clearTimeout(this.connectTimer),this.connectTimer=setTimeout((function(){return e.connect()}),t)}},{key:"connectionError",value:function(e,t){this.targets[e].status=t,this.targets.length-1===e?(this.inSetup=!1,this.refresh()):this.connect(++e)}},{key:"close",value:function(){this.closing=!0,this.connection?this.connection.close():this.emit("close"),clearTimeout(this.connectTimer)}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e){var t=this;this.inSetup?setTimeout((function(){return t.send(e)}),100):this.connection.closed?this.error(e,"Not connected"):this.connection.send(e)}}]),n}(c);e.exports=a},40549:function(e,t,n){var r=n(19132),o=n(49551),i=n(72054),s={ethereum:"undefined"!==typeof window&&"undefined"!==typeof window.ethereum?window.ethereum:null,web3:"undefined"!==typeof window&&"undefined"!==typeof window.web3?window.web3.currentProvider:null},c="undefined"!==typeof window&&"undefined"!==typeof window.WebSocket?window.WebSocket:null,u="undefined"!==typeof window&&"undefined"!==typeof window.XMLHttpRequest?window.XMLHttpRequest:null;s.ethereum&&(s.ethereum.__isProvider=!0);var a={injected:s.ethereum||n(92720)(s.web3),ipc:n(12937)("IPC connections are unavliable in the browser"),ws:n(13861)(c),http:n(15815)(u)};e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["injected","frame"],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(a,r(e,i),t)}},15815:function(e,t,n){var r,o=n(34575).default,i=n(93913).default,s=n(2205).default,c=n(99842).default,u=n(47465),a=n(27389),f=function(e){"use strict";s(n,e);var t=c(n);function n(e,i,s){var c;return o(this,n),c=t.call(this),r=e,c.connected=!1,c.subscriptions=!1,c.status="loading",c.url=i,c.pollId=a(),setTimeout((function(){return c.create()}),0),c}return i(n,[{key:"create",value:function(){var e=this;if(!r)return this.emit("error",new Error("No HTTP transport available"));this.on("error",(function(){e.connected&&e.close()})),this.init()}},{key:"init",value:function(){var e=this;this.send({jsonrpc:"2.0",method:"eth_syncing",params:[],id:1},(function(t,n){if(t)return e.emit("error",t);e.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[e.pollId,"immediate"]},(function(t,n){t||(e.subscriptions=!0,e.pollSubscriptions()),e.connected=!0,e.emit("connect")}))}))}},{key:"pollSubscriptions",value:function(){var e=this;this.send({jsonrpc:"2.0",id:1,method:"eth_pollSubscriptions",params:[this.pollId]},(function(t,n){if(t)return e.subscriptionTimeout=setTimeout((function(){return e.pollSubscriptions()}),1e4),e.emit("error",t);e.closed||(e.subscriptionTimeout=e.pollSubscriptions()),n&&n.map((function(e){var t;try{t=JSON.parse(e)}catch(n){t=!1}return t})).filter((function(e){return e})).forEach((function(t){return e.emit("payload",t)}))}))}},{key:"close",value:function(){this.closed=!0,this.emit("close"),clearTimeout(this.subscriptionTimeout),this.removeAllListeners()}},{key:"filterStatus",value:function(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.res=e,t.message}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e,t){var n=this;if(this.closed)return this.error(e,"Not connected");if("eth_subscribe"===e.method){if(!this.subscriptions)return this.error(e,"Subscriptions are not supported by this HTTP endpoint");e.pollId=this.pollId}var o=new r,i=!1,s=function(r,s){if(!i)if(o.abort(),i=!0,t)t(r,s);else{var c=e.id,u=e.jsonrpc,a=r?{id:c,jsonrpc:u,error:{message:r.message,code:r.code}}:{id:c,jsonrpc:u,result:s};n.emit("payload",a)}};o.open("POST",this.url,!0),o.setRequestHeader("Content-Type","application/json"),o.timeout=6e4,o.onerror=s,o.ontimeout=s,o.onreadystatechange=function(){if(4===o.readyState)try{var e=JSON.parse(o.responseText);s(e.error,e.result)}catch(t){s(t)}},o.send(JSON.stringify(e))}}]),n}(u);e.exports=function(e){return function(t,n){return new f(e,t,n)}}},92720:function(e,t,n){var r=n(93913).default,o=n(34575).default,i=n(2205).default,s=n(99842).default,c=function(e){"use strict";i(n,e);var t=s(n);function n(e,r){var i;return o(this,n),i=t.call(this),e?setTimeout((function(){return i.emit("error",new Error("Injected web3 provider is not currently supported"))}),0):setTimeout((function(){return i.emit("error",new Error("No injected provider found"))}),0),i}return r(n)}(n(47465));e.exports=function(e){return function(t){return new c(e,t)}}},12937:function(e,t,n){var r=n(93913).default,o=n(34575).default,i=n(2205).default,s=n(99842).default,c=function(e){"use strict";i(n,e);var t=s(n);function n(e){var r;return o(this,n),r=t.call(this),setTimeout((function(){return r.emit("error",new Error(e))}),0),r}return r(n)}(n(47465));e.exports=function(e){return function(){return new c(e)}}},13861:function(e,t,n){var r,o=n(34575).default,i=n(93913).default,s=n(2205).default,c=n(99842).default,u=n(47465),a=n(39055),f=function(e){"use strict";s(n,e);var t=c(n);function n(e,i,s){var c;return o(this,n),c=t.call(this),r=e,setTimeout((function(){return c.create(i,s)}),0),c}return i(n,[{key:"create",value:function(e,t){var n=this;r||this.emit("error",new Error("No WebSocket transport available"));try{this.socket=new r(e)}catch(o){return this.emit("error",o)}this.socket.addEventListener("error",(function(e){return n.emit("error",e)})),this.socket.addEventListener("open",(function(){n.emit("connect"),n.socket.addEventListener("message",(function(e){var t="string"===typeof e.data?e.data:"";a(t,(function(e,t){e||t.forEach((function(e){Array.isArray(e)?e.forEach((function(e){return n.emit("payload",e)})):n.emit("payload",e)}))}))})),n.socket.addEventListener("close",(function(){return n.onClose()}))}))}},{key:"onClose",value:function(){this.socket=null,this.closed=!0,this.emit("close"),this.removeAllListeners()}},{key:"close",value:function(){this.socket?this.socket.close():this.onClose()}},{key:"error",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:-1;this.emit("payload",{id:e.id,jsonrpc:e.jsonrpc,error:{message:t,code:n}})}},{key:"send",value:function(e){var t=this;this.socket&&this.socket.readyState===this.socket.CONNECTING?setTimeout((function(n){return t.send(e)}),10):!this.socket||this.socket.readyState>1?(this.connected=!1,this.error(e,"Not connected")):this.socket.send(JSON.stringify(e))}}]),n}(u);e.exports=function(e){return function(t,n){return new f(e,t,n)}}},60946:function(e){for(var t=[],n=0;n<256;++n)t[n]=(n+256).toString(16).substr(1);e.exports=function(e,n){var r=n||0,o=t;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},99788:function(e){var t="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(t){var n=new Uint8Array(16);e.exports=function(){return t(n),n}}else{var r=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0===(3&t)&&(e=4294967296*Math.random()),r[t]=e>>>((3&t)<<3)&255;return r}}},27389:function(e,t,n){var r=n(99788),o=n(60946);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var s=(e=e||{}).random||(e.rng||r)();if(s[6]=15&s[6]|64,s[8]=63&s[8]|128,t)for(var c=0;c<16;++c)t[i+c]=s[c];return t||o(s)}},39055:function(e){var t,n;e.exports=function(e,r){var o=[];e.replace(/\}[\n\r]?\{/g,"}|--|{").replace(/\}\][\n\r]?\[\{/g,"}]|--|[{").replace(/\}[\n\r]?\[\{/g,"}|--|[{").replace(/\}\][\n\r]?\{/g,"}]|--|{").split("|--|").forEach((function(e){var i;t&&(e=t+e);try{i=JSON.parse(e)}catch(s){return t=e,clearTimeout(n),void(n=setTimeout((function(){return r(new Error("Parse response timeout"))}),15e3))}clearTimeout(n),t=null,i&&o.push(i)})),r(null,o)}},72054:function(e){e.exports={injected:["injected"],frame:["ws://127.0.0.1:1248","http://127.0.0.1:1248"],direct:["ws://127.0.0.1:8546","http://127.0.0.1:8545"],infura:["wss://mainnet.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://mainnet.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRopsten:["wss://ropsten.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://ropsten.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraRinkeby:["wss://rinkeby.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://rinkeby.infura.io/v3/786ade30f36244469480aa5c2bf0743b"],infuraKovan:["wss://kovan.infura.io/ws/v3/786ade30f36244469480aa5c2bf0743b","https://kovan.infura.io/v3/786ade30f36244469480aa5c2bf0743b"]}},49551:function(e,t,n){var r=n(87757),o=n(48926).default,i=n(47465),s=n(87793),c=n(96162),u=function(e){function t(t){e.status=t,e instanceof i&&e.emit("status",t)}function n(){return s.apply(this,arguments)}function s(){return(s=o(r.mark((function o(){return r.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(!e.inSetup){r.next=2;break}return r.abrupt("return",setTimeout(n,1e3));case 2:return r.prev=2,r.next=5,e.send("eth_syncing");case 5:if(!r.sent){r.next=10;break}t("syncing"),setTimeout((function(){return n()}),5e3),r.next=11;break;case 10:t("connected");case 11:r.next=16;break;case 13:r.prev=13,r.t0=r.catch(2),t("disconnected");case 16:case"end":return r.stop()}}),o,null,[[2,13]])})))).apply(this,arguments)}return t("loading"),n(),e.on("connect",(function(){return n()})),e.on("close",(function(){return t("disconnected")})),e};e.exports=function(e,t,n){if(e.injected.__isProvider&&t.map((function(e){return e.type})).indexOf("injected")>-1)return delete e.injected.__isProvider,u(e.injected);var r=new s(new c(e,t,n));return r.setMaxListeners(128),u(r)}},19132:function(e,t,n){var r=n(319).default,o=function(e){return"injected"===e?"injected":e.endsWith(".ipc")?"ipc":e.startsWith("wss://")||e.startsWith("ws://")?"ws":e.startsWith("https://")||e.startsWith("http://")?"http":""};e.exports=function(e,t){var n;return(n=[]).concat.apply(n,r([].concat(e).map((function(e){return t[e]?t[e].map((function(t){return{type:e,location:t,protocol:o(t)}})):{type:"custom",location:e,protocol:o(e)}})))).filter((function(e){return!(!e.protocol&&"injected"!==e.type)||(console.log('eth-provider | Invalid provider preset/location: "'+e.location+'"'),!1)}))}},87793:function(e,t,n){var r=n(319).default,o=n(87757),i=n(48926).default,s=n(34575).default,c=n(93913).default,u=n(2205).default,a=n(99842).default,f=function(e){"use strict";u(n,e);var t=a(n);function n(e){var r;return s(this,n),(r=t.call(this)).connected=!1,r.nextId=0,r.promises={},r.subscriptions=[],r.connection=e,r.connection.on("connect",(function(){return r.checkConnection()})),r.connection.on("close",(function(){return r.emit("close")})),r.connection.on("payload",(function(e){var t=e.id,n=e.method,o=e.error,i=e.result;"undefined"!==typeof t?r.promises[t]&&(e.error?r.promises[t].reject(o):r.promises[t].resolve(i),delete r.promises[t]):n&&n.indexOf("_subscription")>-1&&(r.emit(e.params.subscription,e.params.result),r.emit(n,e.params),r.emit("data",e))})),r.on("newListener",(function(e,t){"networkChanged"===e?!r.attemptedNetworkSubscription&&r.connected&&r.startNetworkSubscription():"accountsChanged"===e&&!r.attemptedAccountsSubscription&&r.connected&&r.startAccountsSubscription()})),r}return c(n,[{key:"checkConnection",value:function(){var e=i(o.mark((function e(){return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.t0=this,e.next=4,this._send("net_version");case 4:e.t1=e.sent,e.t0.emit.call(e.t0,"connect",e.t1),this.connected=!0,this.listenerCount("networkChanged")&&!this.attemptedNetworkSubscription&&this.startNetworkSubscription(),this.listenerCount("accountsChanged")&&!this.attemptedAccountsSubscription&&this.startAccountsSubscription(),e.next=14;break;case 11:e.prev=11,e.t2=e.catch(0),this.connected=!1;case 14:case"end":return e.stop()}}),e,this,[[0,11]])})));return function(){return e.apply(this,arguments)}}()},{key:"startNetworkSubscription",value:function(){var e=i(o.mark((function e(){var t,n=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.attemptedNetworkSubscription=!0,e.prev=1,e.next=4,this.subscribe("eth_subscribe","networkChanged");case 4:t=e.sent,this.on(t,(function(e){return n.emit("networkChanged",e)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn("Unable to subscribe to networkChanged",e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"startAccountsSubscription",value:function(){var e=i(o.mark((function e(){var t,n=this;return o.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.attemptedAccountsSubscription=!0,e.prev=1,e.next=4,this.subscribe("eth_subscribe","accountsChanged");case 4:t=e.sent,this.on(t,(function(e){return n.emit("accountsChanged",e)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.warn("Unable to subscribe to accountsChanged",e.t0);case 11:case"end":return e.stop()}}),e,this,[[1,8]])})));return function(){return e.apply(this,arguments)}}()},{key:"enable",value:function(){var e=this;return new Promise((function(t,n){e._send("eth_accounts").then((function(r){if(r.length>0)e.accounts=r,e.coinbase=r[0],e.emit("enable"),t(r);else{var o=new Error("User Denied Full Provider");o.code=4001,n(o)}})).catch(n)}))}},{key:"_send",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(!e||"string"!==typeof e)return new Error("Method is not a valid string.");if(!(n instanceof Array))return new Error("Params is not a valid array.");var r={jsonrpc:"2.0",id:this.nextId++,method:e,params:n},o=new Promise((function(e,n){t.promises[r.id]={resolve:e,reject:n}}));return this.connection.send(r),o}},{key:"send",value:function(){return this._send.apply(this,arguments)}},{key:"_sendBatch",value:function(e){var t=this;return Promise.all(e.map((function(e){return t._send(e.method,e.params)})))}},{key:"subscribe",value:function(e,t){var n=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return this._send(e,[t].concat(r(o))).then((function(e){return n.subscriptions.push(e),e}))}},{key:"unsubscribe",value:function(e,t){var n=this;return this._send(e,[t]).then((function(e){if(e)return n.subscriptions=n.subscriptions.filter((function(e){return e!==t})),n.removeAllListeners(t),e}))}},{key:"sendAsync",value:function(e,t){return t&&"function"===typeof t?e?e instanceof Array?this.sendAsyncBatch(e,t):this._send(e.method,e.params).then((function(n){t(null,{id:e.id,jsonrpc:e.jsonrpc,result:n})})).catch((function(e){t(e)})):t(new Error("Invalid Payload")):t(new Error("Invalid or undefined callback provided to sendAsync"))}},{key:"sendAsyncBatch",value:function(e,t){return this._sendBatch(e).then((function(n){var r=n.map((function(t,n){return{id:e[n].id,jsonrpc:e[n].jsonrpc,result:t}}));t(null,r)})).catch((function(e){t(e)}))}},{key:"isConnected",value:function(){return this.connected}},{key:"close",value:function(){var e=this;this.connection.close(),this.connected=!1;var t=new Error("Provider closed, subscription lost, please subscribe again.");this.subscriptions.forEach((function(n){return e.emit(n,t)})),this.subscriptions=[]}}]),n}(n(47465));e.exports=f},47465:function(e){"use strict";var t,n="object"===typeof Reflect?Reflect:null,r=n&&"function"===typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"===typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var o=Number.isNaN||function(e){return e!==e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise((function(n,r){function o(n){e.removeListener(t,i),r(n)}function i(){"function"===typeof e.removeListener&&e.removeListener("error",o),n([].slice.call(arguments))}v(e,t,i,{once:!0}),"error"!==t&&function(e,t,n){"function"===typeof e.on&&v(e,"error",t,n)}(e,o,{once:!0})}))},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var s=10;function c(e){if("function"!==typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function a(e,t,n,r){var o,i,s,a;if(c(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),s=i[t]),void 0===s)s=i[t]=n,++e._eventsCount;else if("function"===typeof s?s=i[t]=r?[n,s]:[s,n]:r?s.unshift(n):s.push(n),(o=u(e))>0&&s.length>o&&!s.warned){s.warned=!0;var f=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");f.name="MaxListenersExceededWarning",f.emitter=e,f.type=t,f.count=s.length,a=f,console&&console.warn&&console.warn(a)}return e}function f(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function d(e,t,n){var r={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},o=f.bind(r);return o.listener=n,r.wrapFn=o,o}function l(e,t,n){var r=e._events;if(void 0===r)return[];var o=r[t];return void 0===o?[]:"function"===typeof o?n?[o.listener||o]:[o]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(o):p(o,o.length)}function h(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"===typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=new Array(t),r=0;r<t;++r)n[r]=e[r];return n}function v(e,t,n,r){if("function"===typeof e.on)r.once?e.once(t,n):e.on(t,n);else{if("function"!==typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function o(i){r.once&&e.removeEventListener(t,o),n(i)}))}}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!==typeof e||e<0||o(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),i.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!==typeof e||e<0||o(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var o="error"===e,i=this._events;if(void 0!==i)o=o&&void 0===i.error;else if(!o)return!1;if(o){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var c=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw c.context=s,c}var u=i[e];if(void 0===u)return!1;if("function"===typeof u)r(u,this,t);else{var a=u.length,f=p(u,a);for(n=0;n<a;++n)r(f[n],this,t)}return!0},i.prototype.addListener=function(e,t){return a(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return a(this,e,t,!0)},i.prototype.once=function(e,t){return c(t),this.on(e,d(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return c(t),this.prependListener(e,d(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,r,o,i,s;if(c(t),void 0===(r=this._events))return this;if(void 0===(n=r[e]))return this;if(n===t||n.listener===t)0===--this._eventsCount?this._events=Object.create(null):(delete r[e],r.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!==typeof n){for(o=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){s=n[i].listener,o=i;break}if(o<0)return this;0===o?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,o),1===n.length&&(r[e]=n[0]),void 0!==r.removeListener&&this.emit("removeListener",e,s||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,r;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0===--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var o,i=Object.keys(n);for(r=0;r<i.length;++r)"removeListener"!==(o=i[r])&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"===typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(r=t.length-1;r>=0;r--)this.removeListener(e,t[r]);return this},i.prototype.listeners=function(e){return l(this,e,!0)},i.prototype.rawListeners=function(e){return l(this,e,!1)},i.listenerCount=function(e,t){return"function"===typeof e.listenerCount?e.listenerCount(t):h.call(e,t)},i.prototype.listenerCount=h,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}}]);
//# sourceMappingURL=997.37c9a0c8.chunk.js.map