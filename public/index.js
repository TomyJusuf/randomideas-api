/*! For license information please see index.js.LICENSE.txt */
(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}const r=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._modal=document.getElementById("modal"),this._modalBtn=document.getElementById("modal-btn"),this.addEventListener()}var r,n;return r=t,(n=[{key:"addEventListener",value:function(){this._modalBtn.addEventListener("click",this.open.bind(this)),window.addEventListener("click",this.outSideClick.bind(this))}},{key:"open",value:function(){this._modal.style.display="block"}},{key:"close",value:function(){this._modal.style.display="none"}},{key:"outSideClick",value:function(t){t.target===this._modal&&this.close()}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),c=new I(n||[]);return i(a,"_invoke",{value:S(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=h;var d={};function p(){}function v(){}function y(){}var m={};l(m,c,(function(){return this}));var g=Object.getPrototypeOf,b=g&&g(g(P([])));b&&b!==e&&r.call(b,c)&&(m=b);var w=y.prototype=p.prototype=Object.create(m);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,u){var s=f(t[i],t,a);if("throw"!==s.type){var l=s.arg,h=l.value;return h&&"object"==n(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,c,u)}),(function(t){o("throw",t,c,u)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,u)}))}u(s.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function S(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function k(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function P(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:_}}function _(){return{value:void 0,done:!0}}return v.prototype=y,i(w,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:v,configurable:!0}),v.displayName=l(y,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,l(t,s,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},E(x.prototype),l(x.prototype,u,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(h(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(w),l(w,s,"Generator"),l(w,c,(function(){return this})),l(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=P,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:P(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},t}function i(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function c(t){i(a,n,o,c,u,"next",t)}function u(t){i(a,n,o,c,u,"throw",t)}c(void 0)}))}}function c(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}function u(t,e){!function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}(t,e),e.add(t)}function s(t,e,r){if(!e.has(t))throw new TypeError("attempted to get private field on non-instance");return r}var l=new WeakSet,h=new WeakSet;function f(t){var e=document.getElementById(t);e&&e.remove()}function d(){var t=[];return""===this.tag.value?"blog":(this.tag.value.split(",").forEach((function(e){t.push(e.trim())})),t)}const p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),u(this,h),u(this,l),this.userName=document.getElementById("username"),this.textArea=document.getElementById("idea-text"),this.tag=document.getElementById("tag"),this.submitBtn=document.getElementById("submit"),this.delete=document.querySelector(".delete"),this.card=document.querySelectorAll(".card"),this.ideas=document.querySelector(".ideas"),this.url="http://localhost:5000/api/ideas",this.addEventListener()}var e,r,n,i,p;return e=t,r=[{key:"addEventListener",value:function(){this.submitBtn.addEventListener("click",this.handleSubmit.bind(this)),window.addEventListener("load",this.getIdeas.bind(this)),this.ideas.addEventListener("click",this.deleteIdea.bind(this))}},{key:"handleSubmit",value:(p=a(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),localStorage.getItem("username")||localStorage.setItem("username",this.userName.value),this.userName.value&&localStorage.setItem("username",this.userName.value),(r=this.userName.value||localStorage.getItem("username"))&&""!==this.textArea.value.trim()){t.next=7;break}return alert("Please fill all inputs."),t.abrupt("return");case 7:return n={username:r,text:this.textArea.value,tags:s(this,h,d).call(this),date:(new Date).toISOString().split("T")[0],author:this.userName.value.trim()},t.prev=8,this.textArea.value="",this.userName.value=localStorage.getItem("username"),this.tag.value="",t.next=14,fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});case 14:if(t.sent.ok){t.next=17;break}throw new Error("Failed to suibmit to idea");case 17:return t.next=19,this.getIdeas();case 19:t.next=25;break;case 21:t.prev=21,t.t0=t.catch(8),console.error("Error submitting the idea:",t.t0),alert("An error occurred while submitting the idea. Please try again.");case 25:case"end":return t.stop()}}),t,this,[[8,21]])}))),function(t){return p.apply(this,arguments)})},{key:"getIdeas",value:(i=a(o().mark((function t(){var e,r,n,i,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(this.url);case 3:if((e=t.sent).ok){t.next=6;break}throw new Error("Failed to fetch ideas");case 6:return t.next=8,e.json();case 8:r=t.sent,n=r.data,(i=document.getElementById("idea-list")).innerHTML="",a="",n.forEach((function(t){var e=t._id,r=t.text,n=t.username,o=t.date,c=t.tags,u=new Date(o).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}),s=Array.isArray(c)?c.join(", "):c;a='\n          <div class="card" id="'.concat(e,'">\n            ').concat(localStorage.getItem("username")===n?'<button class="delete"> <i class="fas fa-times"></i></button>':"","\n            <h3>").concat(r,'</h3>\n            <p class="tag tag-').concat(c,'">').concat(s,'</p>\n          <p>\n          Posted on <span class="date">').concat(u,'</span> by\n          <span class="author">').concat(n,"</span>\n          </p>\n          </div>\n          "),i.innerHTML+=a})),t.next=20;break;case 16:t.prev=16,t.t0=t.catch(0),console.error("Error submitting the idea:",t.t0),alert("An error occurred while submitting the idea. Please try again.");case 20:case"end":return t.stop()}}),t,this,[[0,16]])}))),function(){return i.apply(this,arguments)})},{key:"deleteIdea",value:(n=a(o().mark((function t(e){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),"fa-times"!==e.target.classList[1]&&"delete"!==e.target.parentElement.classList[1]){t.next=12;break}return t.prev=2,r=e.target.parentElement.parentElement.id,t.next=6,fetch("".concat(this.url,"/").concat(r),{method:"DELETE"});case 6:return t.abrupt("return",s(this,l,f).call(this,r));case 9:t.prev=9,t.t0=t.catch(2),console.error("Error deleting idea with ID ".concat(id,":"),t.t0);case 12:case"end":return t.stop()}}),t,this,[[2,9]])}))),function(t){return n.apply(this,arguments)})}],r&&c(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();new r,new p})();