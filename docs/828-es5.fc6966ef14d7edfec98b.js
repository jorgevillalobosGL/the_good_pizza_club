!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,n)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}function a(e,t,n){return(a="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=c(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function o(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}function s(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}(self.webpackChunkthe_good_pizza_club=self.webpackChunkthe_good_pizza_club||[]).push([[828],{4828:function(t,r,s){s.r(r);var l=s(8239),d=s(4486),f=s(209),p=s(3854),v=(s(5452),s(5601),s(6034));function h(){return window}function g(){return(g=(0,l.Z)(regeneratorRuntime.mark(function e(t,n,r){var i,a,u,o,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=h(),u=a.BuildInfo,(0,f.ap)(n.sessionId,"AuthEvent did not contain a session ID"),e.next=4,k(n.sessionId);case 4:return o=e.sent,s={},e.abrupt("return",((0,f.aq)()?s.ibi=u.packageName:(0,f.ar)()?s.apn=u.packageName:(0,f.as)(t,"operation-not-supported-in-this-environment"),u.displayName&&(s.appDisplayName=u.displayName),s.sessionId=o,(0,f.at)(t,r,n.type,void 0,null!==(i=n.eventId)&&void 0!==i?i:void 0,s)));case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function m(){return(m=(0,l.Z)(regeneratorRuntime.mark(function e(t){var n,r,i;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=h(),r=n.BuildInfo,i={},(0,f.aq)()?i.iosBundleId=r.packageName:(0,f.ar)()?i.androidPackageName=r.packageName:(0,f.as)(t,"operation-not-supported-in-this-environment"),e.next=4,(0,f.au)(t,i);case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function y(){return(y=(0,l.Z)(regeneratorRuntime.mark(function e(t,n,r){var i,a,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return i=h(),a=i.cordova,u=function(){},e.prev=2,e.next=5,new Promise(function(e,i){var o=null;function s(){var t;e();var n=null===(t=a.plugins.browsertab)||void 0===t?void 0:t.close;"function"==typeof n&&n(),"function"==typeof(null==r?void 0:r.close)&&r.close()}function c(){o||(o=window.setTimeout(function(){i((0,f.av)(t,"redirect-cancelled-by-user"))},2e3))}function l(){"visible"===(null==document?void 0:document.visibilityState)&&c()}n.addPassiveListener(s),document.addEventListener("resume",c,!1),(0,f.ar)()&&document.addEventListener("visibilitychange",l,!1),u=function(){n.removePassiveListener(s),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",l,!1),o&&window.clearTimeout(o)}});case 5:return e.prev=5,u(),e.finish(5);case 8:case"end":return e.stop()}},e,null,[[2,,5,8]])}))).apply(this,arguments)}function k(e){return _.apply(this,arguments)}function _(){return(_=(0,l.Z)(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=R(t),e.next=3,crypto.subtle.digest("SHA-256",n);case 3:return r=e.sent,e.abrupt("return",Array.from(new Uint8Array(r)).map(function(e){return e.toString(16).padStart(2,"0")}).join(""));case 5:case"end":return e.stop()}},e)}))).apply(this,arguments)}function R(e){if((0,f.ap)(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!=typeof TextEncoder)return(new TextEncoder).encode(e);for(var t=new ArrayBuffer(e.length),n=new Uint8Array(t),r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(r,e);var t=o(r);function r(){var e;return n(this,r),(e=t.apply(this,arguments)).passiveListeners=new Set,e.initPromise=new Promise(function(t){e.resolveInialized=t}),e}return i(r,[{key:"addPassiveListener",value:function(e){this.passiveListeners.add(e)}},{key:"removePassiveListener",value:function(e){this.passiveListeners.delete(e)}},{key:"resetRedirect",value:function(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}},{key:"onEvent",value:function(e){return this.resolveInialized(),this.passiveListeners.forEach(function(t){return t(e)}),a(c(r.prototype),"onEvent",this).call(this,e)}},{key:"initialized",value:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.initPromise;case 2:case"end":return t.stop()}},t)}))()}}]),r}(f.az);function b(e){return I.apply(this,arguments)}function I(){return(I=(0,l.Z)(regeneratorRuntime.mark(function e(t){var n;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P()._get(A(t));case 2:if(n=e.sent,e.t0=n,!e.t0){e.next=7;break}return e.next=7,P()._remove(A(t));case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}function E(){for(var e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",n=0;n<20;n++){var r=Math.floor(Math.random()*t.length);e.push(t.charAt(r))}return e.join("")}function P(){return(0,f.ax)(f.b)}function A(e){return(0,f.ay)("authEvent",e.config.apiKey,e.name)}function x(t){if(!(null==t?void 0:t.includes("?")))return{};var n=e(t.split("?")),r=(n[0],n.slice(1));return(0,p.zd)(r.join("?"))}function N(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:(0,f.av)("no-auth-event")}}function S(){var e;return(null===(e=null==self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function O(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.z$)();return!("file:"!==S()&&"ionic:"!==S()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function C(){try{var e=self.localStorage,t=f.aG();if(e)return e.setItem(t,"1"),e.removeItem(t),!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.z$)();return(0,p.w1)()&&11===(null==document?void 0:document.documentMode)||function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,p.z$)();return/Edge\/\d+/.test(e)}(e)}()||(0,p.hl)()}catch(re){return L()&&(0,p.hl)()}return!1}function L(){return"undefined"!=typeof global&&"WorkerGlobalScope"in global&&"importScripts"in global}function T(){return("http:"===S()||"https:"===S()||(0,p.ru)()||O())&&!((0,p.b$)()||(0,p.UG)())&&C()&&!L()}function U(){return O()&&"undefined"!=typeof document}function Z(){return(Z=(0,l.Z)(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!!U()&&new Promise(function(e){var t=setTimeout(function(){e(!1)},1e3);document.addEventListener("deviceready",function(){clearTimeout(t),e(!0)})}));case 1:case"end":return e.stop()}},e)}))).apply(this,arguments)}var W={LOCAL:"local",NONE:"none",SESSION:"session"},M=f.aw,D="persistence";function V(e){return z.apply(this,arguments)}function z(){return(z=(0,l.Z)(regeneratorRuntime.mark(function e(t){var n,r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._initializationPromise;case 2:n=F(),r=f.ay(D,t.config.apiKey,t.name),(null==n?void 0:n.sessionStorage)&&n.sessionStorage.setItem(r,t._getPersistence());case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}function F(){return"undefined"!=typeof window?window:null}var j=f.aw,B=function(){function e(){n(this,e),this.browserResolver=f.ax(f.k),this.cordovaResolver=f.ax(function(){function e(){n(this,e),this._redirectPersistence=f.a,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=f.aA}return i(e,[{key:"_initialize",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){var r,i;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r=e._key(),i=t.eventManagers.get(r),n.abrupt("return",(i||(i=new w(e),t.eventManagers.set(r,i),t.attachCallbackListeners(e,i)),i));case 3:case"end":return n.stop()}},n)}))()}},{key:"_openPopup",value:function(e){(0,f.as)(e,"operation-not-supported-in-this-environment")}},{key:"_openRedirect",value:function(e,t,n,r){var i=this;return(0,l.Z)(regeneratorRuntime.mark(function a(){var u,o,s,c;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return function(e){var t,n,r,i,a,u,o,s,c,l,d=h();(0,f.aw)("function"==typeof(null===(t=null==d?void 0:d.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),(0,f.aw)(void 0!==(null===(n=null==d?void 0:d.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),(0,f.aw)("function"==typeof(null===(a=null===(i=null===(r=null==d?void 0:d.cordova)||void 0===r?void 0:r.plugins)||void 0===i?void 0:i.browsertab)||void 0===a?void 0:a.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,f.aw)("function"==typeof(null===(s=null===(o=null===(u=null==d?void 0:d.cordova)||void 0===u?void 0:u.plugins)||void 0===o?void 0:o.browsertab)||void 0===s?void 0:s.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),(0,f.aw)("function"==typeof(null===(l=null===(c=null==d?void 0:d.cordova)||void 0===c?void 0:c.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}(e),a.next=3,i._initialize(e);case 3:return u=a.sent,a.next=6,u.initialized();case 6:return u.resetRedirect(),(0,f.aB)(),a.next=10,i._originValidation(e);case 10:return o=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return{type:t,eventId:n,urlResponse:null,sessionId:E(),postBody:null,tenantId:e.tenantId,error:(0,f.av)(e,"no-auth-event")}}(e,n,r),a.next=13,function(e,t){return P()._set(A(e),t)}(e,o);case 13:return a.next=15,function(e,t,n){return g.apply(this,arguments)}(e,o,t);case 15:return s=a.sent,a.next=18,function(e){var t=h().cordova;return new Promise(function(n){t.plugins.browsertab.isAvailable(function(r){var i=null;r?t.plugins.browsertab.openUrl(e):i=t.InAppBrowser.open(e,(0,f.ao)()?"_blank":"_system","location=yes"),n(i)})})}(s);case 18:return c=a.sent,a.abrupt("return",function(e,t,n){return y.apply(this,arguments)}(e,u,c));case 20:case"end":return a.stop()}},a)}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){throw new Error("Method not implemented.")}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return m.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"attachCallbackListeners",value:function(e,t){var n,r=h(),i=r.universalLinks,a=r.handleOpenURL,u=r.BuildInfo,o=setTimeout((0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b(e);case 2:t.onEvent(N());case 3:case"end":return n.stop()}},n)})),500),s=(n=(0,l.Z)(regeneratorRuntime.mark(function n(r){var i,a;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return clearTimeout(o),n.next=3,b(e);case 3:i=n.sent,a=null,i&&(null==r?void 0:r.url)&&(a=function(e,t){var n,r,i=function(e){var t=x(e),n=t.link?decodeURIComponent(t.link):void 0,r=x(n).link,i=t.deep_link_id?decodeURIComponent(t.deep_link_id):void 0;return x(i).link||i||r||n||e}(t);if(i.includes("/__/auth/callback")){var a=x(i),u=a.firebaseError?function(e){try{return JSON.parse(e)}catch(t){return null}}(decodeURIComponent(a.firebaseError)):null,o=null===(r=null===(n=null==u?void 0:u.code)||void 0===n?void 0:n.split("auth/"))||void 0===r?void 0:r[1],s=o?(0,f.av)(o):null;return s?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:s,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:i,postBody:null}}return null}(i,r.url)),t.onEvent(a||N());case 6:case"end":return n.stop()}},n)})),function(e){return n.apply(this,arguments)});void 0!==i&&"function"==typeof i.subscribe&&i.subscribe(null,s);var c=a,d="".concat(u.packageName.toLowerCase(),"://");h().handleOpenURL=function(){var e=(0,l.Z)(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.toLowerCase().startsWith(d)&&s({url:t}),"function"==typeof c)try{c(t)}catch(n){console.error(n)}case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}}]),e}()),this.underlyingResolver=null,this._redirectPersistence=f.a,this._completeRedirectFn=f.aA}return i(e,[{key:"_initialize",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.selectUnderlyingResolver();case 2:return n.abrupt("return",t.assertedUnderlyingResolver._initialize(e));case 3:case"end":return n.stop()}},n)}))()}},{key:"_openPopup",value:function(e,t,n,r){var i=this;return(0,l.Z)(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.selectUnderlyingResolver();case 2:return a.abrupt("return",i.assertedUnderlyingResolver._openPopup(e,t,n,r));case 3:case"end":return a.stop()}},a)}))()}},{key:"_openRedirect",value:function(e,t,n,r){var i=this;return(0,l.Z)(regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,i.selectUnderlyingResolver();case 2:return a.abrupt("return",i.assertedUnderlyingResolver._openRedirect(e,t,n,r));case 3:case"end":return a.stop()}},a)}))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}},{key:"_originValidation",value:function(e){return this.assertedUnderlyingResolver._originValidation(e)}},{key:"_shouldInitProactively",get:function(){return U()||this.browserResolver._shouldInitProactively}},{key:"assertedUnderlyingResolver",get:function(){return j(this.underlyingResolver,"internal-error"),this.underlyingResolver}},{key:"selectUnderlyingResolver",value:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.underlyingResolver){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,function(){return Z.apply(this,arguments)}();case 4:n=t.sent,e.underlyingResolver=n?e.cordovaResolver:e.browserResolver;case 6:case"end":return t.stop()}},t)}))()}}]),e}();function G(e){return e.unwrap()}function H(e){return K(e)}function K(e){var t=(e instanceof p.ZR?e.customData:e)._tokenResponse;if(!t)return null;if(!(e instanceof p.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return f.P.credentialFromResult(e);var n,r=t.providerId;if(!r||r===f.o.PASSWORD)return null;switch(r){case f.o.GOOGLE:n=f.N;break;case f.o.FACEBOOK:n=f.M;break;case f.o.GITHUB:n=f.Q;break;case f.o.TWITTER:n=f.V;break;default:var i=t.oauthIdToken,a=t.oauthAccessToken,u=t.oauthTokenSecret,o=t.pendingToken,s=t.nonce;return a||u||i||o?o?r.startsWith("saml.")?f.aJ._create(r,o):f.I._fromParams({providerId:r,signInMethod:r,pendingToken:o,idToken:i,accessToken:a}):new f.T(r).credential({idToken:i,accessToken:a,rawNonce:s}):null}return e instanceof p.ZR?n.credentialFromError(e):n.credentialFromResult(e)}function Y(e,t){return t.catch(function(t){throw t instanceof p.ZR&&function(e,t){var n,r=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===t.code)t.resolver=new J(e,f.am(e,t));else if(r){var i=K(t),a=t;i&&(a.credential=i,a.tenantId=r.tenantId||void 0,a.email=r.email||void 0,a.phoneNumber=r.phoneNumber||void 0)}}(e,t),t}).then(function(e){var t=e.user;return{operationType:e.operationType,credential:H(e),additionalUserInfo:f.ak(e),user:Q.getOrCreate(t)}})}function $(e,t){return q.apply(this,arguments)}function q(){return(q=(0,l.Z)(regeneratorRuntime.mark(function e(t,n){var r;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n;case 2:return r=e.sent,e.abrupt("return",{verificationId:r.verificationId,confirm:function(e){return Y(t,r.confirm(e))}});case 4:case"end":return e.stop()}},e)}))).apply(this,arguments)}var J=function(){function e(t,r){n(this,e),this.resolver=r,this.auth=t.wrapped()}return i(e,[{key:"session",get:function(){return this.resolver.session}},{key:"hints",get:function(){return this.resolver.hints}},{key:"resolveSignIn",value:function(e){return Y(G(this.auth),this.resolver.resolveSignIn(e))}}]),e}(),Q=function(){function e(t){n(this,e),this._delegate=t,this.multiFactor=f.an(t)}return i(e,[{key:"delete",value:function(){return this._delegate.delete()}},{key:"reload",value:function(){return this._delegate.reload()}},{key:"toJSON",value:function(){return this._delegate.toJSON()}},{key:"getIdTokenResult",value:function(e){return this._delegate.getIdTokenResult(e)}},{key:"getIdToken",value:function(e){return this._delegate.getIdToken(e)}},{key:"linkAndRetrieveDataWithCredential",value:function(e){return this.linkWithCredential(e)}},{key:"linkWithCredential",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Y(t.auth,f.Y(t._delegate,e)));case 1:case"end":return n.stop()}},n)}))()}},{key:"linkWithPhoneNumber",value:function(e,t){var n=this;return(0,l.Z)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",$(n.auth,f.l(n._delegate,e,t)));case 1:case"end":return r.stop()}},r)}))()}},{key:"linkWithPopup",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Y(t.auth,f.d(t._delegate,e,B)));case 1:case"end":return n.stop()}},n)}))()}},{key:"linkWithRedirect",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V(f.aC(t.auth));case 2:return n.abrupt("return",f.g(t._delegate,e,B));case 3:case"end":return n.stop()}},n)}))()}},{key:"reauthenticateAndRetrieveDataWithCredential",value:function(e){return this.reauthenticateWithCredential(e)}},{key:"reauthenticateWithCredential",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",Y(t.auth,f.Z(t._delegate,e)));case 1:case"end":return n.stop()}},n)}))()}},{key:"reauthenticateWithPhoneNumber",value:function(e,t){return $(this.auth,f.r(this._delegate,e,t))}},{key:"reauthenticateWithPopup",value:function(e){return Y(this.auth,f.e(this._delegate,e,B))}},{key:"reauthenticateWithRedirect",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,V(f.aC(t.auth));case 2:return n.abrupt("return",f.h(t._delegate,e,B));case 3:case"end":return n.stop()}},n)}))()}},{key:"sendEmailVerification",value:function(e){return f.aa(this._delegate,e)}},{key:"unlink",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,f.aj(t._delegate,e);case 2:return n.abrupt("return",t);case 3:case"end":return n.stop()}},n)}))()}},{key:"updateEmail",value:function(e){return f.af(this._delegate,e)}},{key:"updatePassword",value:function(e){return f.ag(this._delegate,e)}},{key:"updatePhoneNumber",value:function(e){return f.u(this._delegate,e)}},{key:"updateProfile",value:function(e){return f.ae(this._delegate,e)}},{key:"verifyBeforeUpdateEmail",value:function(e,t){return f.ab(this._delegate,e,t)}},{key:"emailVerified",get:function(){return this._delegate.emailVerified}},{key:"isAnonymous",get:function(){return this._delegate.isAnonymous}},{key:"metadata",get:function(){return this._delegate.metadata}},{key:"phoneNumber",get:function(){return this._delegate.phoneNumber}},{key:"providerData",get:function(){return this._delegate.providerData}},{key:"refreshToken",get:function(){return this._delegate.refreshToken}},{key:"tenantId",get:function(){return this._delegate.tenantId}},{key:"displayName",get:function(){return this._delegate.displayName}},{key:"email",get:function(){return this._delegate.email}},{key:"photoURL",get:function(){return this._delegate.photoURL}},{key:"providerId",get:function(){return this._delegate.providerId}},{key:"uid",get:function(){return this._delegate.uid}},{key:"auth",get:function(){return this._delegate.auth}}],[{key:"getOrCreate",value:function(t){return e.USER_MAP.has(t)||e.USER_MAP.set(t,new e(t)),e.USER_MAP.get(t)}}]),e}();Q.USER_MAP=new WeakMap;var X=f.aw,ee=function(){var e=function(){function e(t,r){if(n(this,e),this.app=t,r.isInitialized())return this._delegate=r.getImmediate(),void this.linkUnderlyingAuth();var i=t.options.apiKey;X(i,"invalid-api-key",{appName:t.name});var a=[f.K];if("undefined"!=typeof window){a=function(e,t){var n=F();if(!(null==n?void 0:n.sessionStorage))return[];var r=f.ay(D,e,t);switch(n.sessionStorage.getItem(r)){case W.NONE:return[f.K];case W.LOCAL:return[f.i,f.a];case W.SESSION:return[f.a];default:return[]}}(i,t.name);for(var u=0,o=[f.i,f.b,f.a];u<o.length;u++){var s=o[u];a.includes(s)||a.push(s)}}X(i,"invalid-api-key",{appName:t.name});var c="undefined"!=typeof window?B:void 0;this._delegate=r.initialize({options:{persistence:a,popupRedirectResolver:c}}),this._delegate._updateErrorMap(f.z),this.linkUnderlyingAuth()}return i(e,[{key:"emulatorConfig",get:function(){return this._delegate.emulatorConfig}},{key:"currentUser",get:function(){return this._delegate.currentUser?Q.getOrCreate(this._delegate.currentUser):null}},{key:"languageCode",get:function(){return this._delegate.languageCode},set:function(e){this._delegate.languageCode=e}},{key:"settings",get:function(){return this._delegate.settings}},{key:"tenantId",get:function(){return this._delegate.tenantId},set:function(e){this._delegate.tenantId=e}},{key:"useDeviceLanguage",value:function(){this._delegate.useDeviceLanguage()}},{key:"signOut",value:function(){return this._delegate.signOut()}},{key:"useEmulator",value:function(e,t){f.E(this._delegate,e,t)}},{key:"applyActionCode",value:function(e){return f.a1(this._delegate,e)}},{key:"checkActionCode",value:function(e){return f.a2(this._delegate,e)}},{key:"confirmPasswordReset",value:function(e,t){return f.a0(this._delegate,e,t)}},{key:"createUserWithEmailAndPassword",value:function(e,t){var n=this;return(0,l.Z)(regeneratorRuntime.mark(function r(){return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Y(n._delegate,f.a4(n._delegate,e,t)));case 1:case"end":return r.stop()}},r)}))()}},{key:"fetchProvidersForEmail",value:function(e){return this.fetchSignInMethodsForEmail(e)}},{key:"fetchSignInMethodsForEmail",value:function(e){return f.a9(this._delegate,e)}},{key:"isSignInWithEmailLink",value:function(e){return f.a7(this._delegate,e)}},{key:"getRedirectResult",value:function(){var e=this;return(0,l.Z)(regeneratorRuntime.mark(function t(){var n;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return X(T(),e._delegate,"operation-not-supported-in-this-environment"),t.next=3,f.j(e._delegate,B);case 3:return n=t.sent,t.abrupt("return",n?Y(e._delegate,Promise.resolve(n)):{credential:null,user:null});case 5:case"end":return t.stop()}},t)}))()}},{key:"addFrameworkForLogging",value:function(e){!function(e,t){(0,f.aC)(e)._logFramework(t)}(this._delegate,e)}},{key:"onAuthStateChanged",value:function(e,t,n){var r=te(e,t,n),i=r.next,a=r.error,u=r.complete;return this._delegate.onAuthStateChanged(i,a,u)}},{key:"onIdTokenChanged",value:function(e,t,n){var r=te(e,t,n),i=r.next,a=r.error,u=r.complete;return this._delegate.onIdTokenChanged(i,a,u)}},{key:"sendSignInLinkToEmail",value:function(e,t){return f.a6(this._delegate,e,t)}},{key:"sendPasswordResetEmail",value:function(e,t){return f.$(this._delegate,e,t||void 0)}},{key:"setPersistence",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){var r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:n.t0=(function(e,t){M(Object.values(W).includes(t),e,"invalid-persistence-type"),(0,p.b$)()?M(t!==W.SESSION,e,"unsupported-persistence-type"):(0,p.UG)()?M(t===W.NONE,e,"unsupported-persistence-type"):L()?M(t===W.NONE||t===W.LOCAL&&(0,p.hl)(),e,"unsupported-persistence-type"):M(t===W.NONE||C(),e,"unsupported-persistence-type")}(t._delegate,e),e),n.next=n.t0===W.SESSION?3:n.t0===W.LOCAL?5:n.t0===W.NONE?14:16;break;case 3:return r=f.a,n.abrupt("break",17);case 5:return n.next=7,f.ax(f.i)._isAvailable();case 7:if(!n.sent){n.next=11;break}n.t1=f.i,n.next=12;break;case 11:n.t1=f.b;case 12:return r=n.t1,n.abrupt("break",17);case 14:return r=f.K,n.abrupt("break",17);case 16:return n.abrupt("return",f.as("argument-error",{appName:t._delegate.name}));case 17:return n.abrupt("return",t._delegate.setPersistence(r));case 18:case"end":return n.stop()}},n)}))()}},{key:"signInAndRetrieveDataWithCredential",value:function(e){return this.signInWithCredential(e)}},{key:"signInAnonymously",value:function(){return Y(this._delegate,f.W(this._delegate))}},{key:"signInWithCredential",value:function(e){return Y(this._delegate,f.X(this._delegate,e))}},{key:"signInWithCustomToken",value:function(e){return Y(this._delegate,f._(this._delegate,e))}},{key:"signInWithEmailAndPassword",value:function(e,t){return Y(this._delegate,f.a5(this._delegate,e,t))}},{key:"signInWithEmailLink",value:function(e,t){return Y(this._delegate,f.a8(this._delegate,e,t))}},{key:"signInWithPhoneNumber",value:function(e,t){return $(this._delegate,f.s(this._delegate,e,t))}},{key:"signInWithPopup",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(X(T(),t._delegate,"operation-not-supported-in-this-environment"),Y(t._delegate,f.c(t._delegate,e,B))));case 1:case"end":return n.stop()}},n)}))()}},{key:"signInWithRedirect",value:function(e){var t=this;return(0,l.Z)(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return X(T(),t._delegate,"operation-not-supported-in-this-environment"),n.next=3,V(t._delegate);case 3:return n.abrupt("return",f.f(t._delegate,e,B));case 4:case"end":return n.stop()}},n)}))()}},{key:"updateCurrentUser",value:function(e){return this._delegate.updateCurrentUser(e)}},{key:"verifyPasswordResetCode",value:function(e){return f.a3(this._delegate,e)}},{key:"unwrap",value:function(){return this._delegate}},{key:"_delete",value:function(){return this._delegate._delete()}},{key:"linkUnderlyingAuth",value:function(){var e=this;this._delegate.wrapped=function(){return e}}}]),e}();return e.Persistence=W,e}();function te(e,t,n){var r,i=e;"function"!=typeof e&&(i=(r=e).next,t=r.error,n=r.complete);var a=i;return{next:function(e){return a(e&&Q.getOrCreate(e))},error:t,complete:n}}var ne=function(){function e(){n(this,e),this.providerId="phone",this._delegate=new f.P(G(d.Z.auth()))}return i(e,[{key:"verifyPhoneNumber",value:function(e,t){return this._delegate.verifyPhoneNumber(e,t)}},{key:"unwrap",value:function(){return this._delegate}}],[{key:"credential",value:function(e,t){return f.P.credential(e,t)}}]),e}();ne.PHONE_SIGN_IN_METHOD=f.P.PHONE_SIGN_IN_METHOD,ne.PROVIDER_ID=f.P.PROVIDER_ID;var re,ie=f.aw;(re=d.Z).INTERNAL.registerComponent(new v.wA("auth-compat",function(e){var t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new ee(t,n)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:f.A.EMAIL_SIGNIN,PASSWORD_RESET:f.A.PASSWORD_RESET,RECOVER_EMAIL:f.A.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:f.A.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:f.A.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:f.A.VERIFY_EMAIL}},EmailAuthProvider:f.L,FacebookAuthProvider:f.M,GithubAuthProvider:f.Q,GoogleAuthProvider:f.N,OAuthProvider:f.T,PhoneAuthProvider:ne,PhoneMultiFactorGenerator:f.m,RecaptchaVerifier:function(){function e(t,r){var i,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.Z.app();n(this,e),ie(null===(i=a.options)||void 0===i?void 0:i.apiKey,"invalid-api-key",{appName:a.name}),this._delegate=new f.R(t,r,a.auth()),this.type=this._delegate.type}return i(e,[{key:"clear",value:function(){this._delegate.clear()}},{key:"render",value:function(){return this._delegate.render()}},{key:"verify",value:function(){return this._delegate.verify()}}]),e}(),TwitterAuthProvider:f.V,Auth:ee,AuthCredential:f.G,Error:p.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),re.registerVersion("@firebase/auth-compat","0.2.0")}}])}();