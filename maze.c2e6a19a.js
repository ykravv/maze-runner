parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t){var r;this._invoke=function(e,o){function i(){return new Promise(function(r,i){!function r(e,o,i,a){var c=h(t[e],t,o);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then(function(t){r("next",t,i,a)},function(t){r("throw",t,i,a)}):Promise.resolve(f).then(function(t){u.value=t,i(u)},function(t){return r("throw",t,i,a)})}a(c.arg)}(e,o,r,i)})}return r=r?r.then(i,i):i()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o){var i=new b(u(r,e,n,o));return t.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"Focm":[function(require,module,exports) {
"use strict";function e(e,r,t,n,a,o,u){try{var c=e[o](u),i=c.value}catch(s){return void t(s)}c.done?r(i):Promise.resolve(i).then(n,a)}function r(r){return function(){var t=this,n=arguments;return new Promise(function(a,o){var u=r.apply(t,n);function c(r){e(u,a,o,c,i,"next",r)}function i(r){e(u,a,o,c,i,"throw",r)}c(void 0)})}}function t(e,r){return o(e)||a(e,r)||n()}function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function a(e,r){var t=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}function o(e){if(Array.isArray(e))return e}require("regenerator-runtime/runtime");var u=[[1,0,0,0,0,0,1,1,1,0],[1,0,1,1,0,0,1,0,0,0],[1,1,1,0,0,0,1,1,0,0],[0,0,1,1,0,0,0,1,0,0],[0,0,0,1,1,1,1,1,0,0],[0,0,0,0,0,1,0,0,0,0],[1,0,1,1,1,1,0,0,0,0],[1,1,1,0,0,0,0,1,1,1],[0,1,0,1,0,0,1,1,0,1],[0,1,1,1,1,1,1,0,0,1]],c=[0,0],i=[9,9];function s(e,r,n){var a=document.querySelector(".maze");a.innerHTML="";var o=!0,u=!1,c=void 0;try{for(var i,s=e.entries()[Symbol.iterator]();!(o=(i=s.next()).done);o=!0){var l=t(i.value,2),d=l[0],f=l[1],v=document.createElement("div");v.classList.add("row");var p=!0,y=!1,m=void 0;try{for(var h,g=f.entries()[Symbol.iterator]();!(p=(h=g.next()).done);p=!0){var b=t(h.value,2),x=b[0],S=b[1],w=document.createElement("div");w.classList.add("cell"),w.dataset.coord=String([x,d]),0===S&&w.classList.add("disabled"),v.append(w)}}catch(L){y=!0,m=L}finally{try{p||null==g.return||g.return()}finally{if(y)throw m}}a.append(v)}}catch(L){u=!0,c=L}finally{try{o||null==s.return||s.return()}finally{if(u)throw c}}}var l=[0,-1],d=[0,1],f=[1,0],v=[-1,0],p=[];function y(e,r,t){return m.apply(this,arguments)}function m(){return(m=r(regeneratorRuntime.mark(function e(r,t,n){var a,o;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("start"),p.push(t),(a=document.querySelector('[data-coord="'.concat(String(t),'"]'))).classList.add("green"),a.dataset.visited=!0,a.innerHTML="S",document.querySelector('[data-coord="'.concat(String(n),'"]')).innerHTML="F",e.next=10,g(r,null,t,n);case 10:o=e.sent,console.log("RESULT",o),document.querySelector(".result").innerHTML=o,console.log(p);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function h(e){return new Promise(function(r){setTimeout(r,e)})}function g(e,r,t,n){return b.apply(this,arguments)}function b(){return(b=r(regeneratorRuntime.mark(function e(r,t,n,a){var o,u,c,i,s,y,m,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("go",n),!w(n,a)){e.next=3;break}return e.abrupt("return","Found Pass");case 3:o=0,u=[l,f,d,v];case 5:if(!(o<u.length)){e.next=36;break}if(c=u[o],i=x(n,c),!w(t,i)){e.next=10;break}return e.abrupt("continue",33);case 10:if(s=S(r,i),y=document.querySelector('[data-coord="'.concat(String(i),'"]')),1!==s||y.dataset.visited){e.next=33;break}return p.push(i),y.classList.add("green"),y.dataset.visited=!0,e.next=18,h(300);case 18:return e.next=20,g(r,n,i,a);case 20:if("Not Found"!==(m=e.sent)){e.next=31;break}return console.warn("No further passes"),b=p.pop(),document.querySelector('[data-coord="'.concat(String(b),'"]')).classList.remove("green"),e.next=28,h(300);case 28:return e.next=30,g(r,n,p[p.length-1],a);case 30:m=e.sent;case 31:if("Found Pass"!==m){e.next=33;break}return e.abrupt("return",m);case 33:o++,e.next=5;break;case 36:return e.abrupt("return","Not Found");case 37:case"end":return e.stop()}},e)}))).apply(this,arguments)}function x(e,r){return[e[0]+r[0],e[1]+r[1]]}function S(e,r){var n=t(r,2),a=n[0],o=n[1];return(e[o]?e[o][a]:null)||0}function w(e,r){return!(!e||!r)&&(e[0]===r[0]&&e[1]===r[1])}s(u,c,i),document.querySelector("#run-btn").addEventListener("click",function(){return y(u,c,i)}),document.querySelector("#clear-btn").addEventListener("click",function(){return s(u,c,i)});
},{"regenerator-runtime/runtime":"KA2S"}]},{},["Focm"], null)
//# sourceMappingURL=/maze.c2e6a19a.js.map