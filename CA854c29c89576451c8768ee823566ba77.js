(function(window){window.ringba_known_numbers = [{"int":"+18009569166","loc":"(800) 956-9166","jstag":"JS2985e340c4104e60bd8f5eb7d0f4ec2e","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18009598423","loc":"(800) 959-8423","jstag":"JS84e5fb0cc5b7460f89790fe4065c287e","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18007598413","loc":"(800) 759-8413","jstag":"JS4b76527299b54865a77b0f0d83d24e78","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18008679412","loc":"(800) 867-9412","jstag":"JS464751d2e63b4a56b27aa00ef8c17f25","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18004838070","loc":"(800) 483-8070","jstag":"JS8182a0511a9846c19f46d8431277d8ef","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18004989113","loc":"(800) 498-9113","jstag":"JS870995e104a348a2855321decece3d04","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18005901670","loc":"(800) 590-1670","jstag":"JS83e7d0a9b5cd446e806f39bbe36b1d19","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18009069795","loc":"(800) 906-9795","jstag":"JSedca7ab20a1341f8a5a67131aa2cd74d","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false},{"int":"+18006375233","loc":"(800) 637-5233","jstag":"JS59fa666bf81b4fa69e58114c934682d4","replaceWithInt":null,"replaceWithLoc":null,"replaceLeftToRight":false}];!function(e){function n(){this.tagId="",this.id="",this.displayNumber="",this.phoneNumber="",this.impressionQueryPath="",this.maxEpoch=0,this.timeBetweenTicks=0,this.heartBeatMs=0,this.exp=0,this.displayFmt=0,this.heartBeatTimeout=null,this.ready=!0}var t=function(){function n(e){return JSON.stringify(e)}return{postRequest:function(t,r,a,i){if("XDomainRequest"in e&&null!==e.XDomainRequest){var o=new XDomainRequest;o.open("POST",t),o.onload=function(){result=o.responseText,a(result)},o.onerror=function(){i&&i()},o.send(n(r))}else{if(navigator.userAgent.indexOf("MSIE")!=-1&&parseInt(navigator.userAgent.match(/MSIE ([\d.]+)/)[1],10)<8)return!1;var u=new XMLHttpRequest;u.onreadystatechange=function(){4==u.readyState&&(200==u.status?a(u.responseText):i&&i())},u.open("POST",t,!0),u.setRequestHeader("Content-type","text/plain"),u.send(n(r))}}}};"undefined"!=typeof e.localStorage&&"undefined"!=typeof e.sessionStorage||function(){var n=function(n){function t(e,n,t){var r,a;t?(r=new Date,r.setTime(r.getTime()+24*t*60*60*1e3),a="; expires="+r.toGMTString()):a="",document.cookie=e+"="+n+a+"; path=/"}function r(e){var n,t,r=e+"=",a=document.cookie.split(";");for(n=0;n<a.length;n++){for(t=a[n];" "==t.charAt(0);)t=t.substring(1,t.length);if(0==t.indexOf(r))return t.substring(r.length,t.length)}return null}function a(r){r=JSON.stringify(r),"session"==n?e.name=r:t("localStorage",r,365)}function i(){"session"==n?e.name="":t("localStorage","",365)}function o(){var t="session"==n?e.name:r("localStorage");return t?JSON.parse(t):{}}var u=o();return{length:0,clear:function(){u={},this.length=0,i()},getItem:function(e){return void 0===u[e]?null:u[e]},key:function(e){var n=0;for(var t in u){if(n==e)return t;n++}return null},removeItem:function(e){delete u[e],this.length--,a(u)},setItem:function(e,n){u[e]=n+"",this.length++,a(u)}}};"undefined"==typeof e.localStorage&&(e.localStorage=new n("local"))}(),n.getNumberFromResult=function(e,t){var r=new n;return r.tagId=e,r.id=t.id,r.displayNumber=t.displayNumber,r.phoneNumber=t.phoneNumber,r.phoneNumberLocal=t.phoneNumberLocal,r.impressionQueryPath=t.impressionQueryPath,r.maxEpoch=t.maxEpoch||0,r.timeBetweenTicks=t.expireMs,r.heartBeatMs=t.heartBeatMs,r.exp=(new Date).getTime()+r.timeBetweenTicks,r.displayFmt=t.displayFmt,r.ready=!0,r},n.getFromStorage=function(e){var t=localStorage.getItem("ringbaNumber_"+e)||null;if(t){var r=JSON.parse(t),a=new n;return a.tagId=e,a.id=r.id,a.displayNumber=r.displayNumber,a.phoneNumber=r.phoneNumber,a.phoneNumberLocal=r.phoneNumberLocal,a.impressionQueryPath=r.impressionQueryPath,a.maxEpoch=r.maxEpoch,a.timeBetweenTicks=r.timeBetweenTicks,a.heartBeatMs=r.heartBeatMs,a.exp=r.exp,a.displayFmt=r.displayFmt,a.ready=!0,a}},n.prototype.getFmtNumber=function(e){if(e=e||this.displayFmt){var n=this.phoneNumber.length-1,t="";for(i=e.length-1;i>-1&&n>-1;i--){var r=e.charAt(i);t="n"==r||"N"==r?this.phoneNumber.charAt(n--)+t:r+t}return t}return this.displayNumber},n.prototype.save=function(){var e=JSON.parse(JSON.stringify(this));delete e.ready,delete e.heartBeatTimeout,localStorage.setItem("ringbaNumber_"+this.tagId,JSON.stringify(e))},n.prototype.isExpired=function(){var e=(new Date).getTime();return e>this.exp||this.maxEpoch>0&&e>this.maxEpoch},n.prototype.incrementExp=function(){this.exp=(new Date).getTime()+this.timeBetweenTicks,this.save()};var r=function(r){function a(e){if(""==e)return{};for(var n=[],t=0;t<e.length;++t){var r=e[t].split("=",2);1==r.length?n.push({key:r[0],value:""}):n.push({key:r[0],value:decodeURIComponent(r[1].replace(/\+/g," "))})}return n}function o(e){var t=e.tag;if(t){null==I[t]&&(I[t]=[]),I[t].push(e);var r=S[t];null==r&&(r=n.getFromStorage(t),!r||r.isExpired()?(r=new n,r.ready=!1,r.tagId=t,S[t]=r,d(t)):(S[t]=r,v(r),O.push(t))),h(r)}}function u(e){for(null!=e&&e.length>0&&!x&&p();null!=e&&e.length>0;){var n=e.pop();o(n)}M.length?b():l()}function s(e,n){if(e&&e.length){var t=JSON.parse(n);e.forEach(function(e){var n=t[e];n&&(c(e,n),O.push(e))})}l()}function l(){if(O&&O.length){var e=[];q&&O.forEach(function(n){var t=S[n];t&&e.push({tagId:n,number:t.phoneNumber,numberLocal:t.phoneNumberLocal,displayNumber:t.displayNumber})}),O=[],q&&setTimeout(function(){q(e)},0)}}function c(e,t){var r=n.getNumberFromResult(e,t);r.save(),S[e]=r,h(r),y(r)}function f(e,n){return e.getFmtNumber(n)}function h(e){var n=e.tagId,t=I[n];if(null!=t)for(var r=0;r<t.length;r++){var a=t[r],i=a.script,o=e.ready?f(e,a.format):null,u=o||a.placeholderText||"‌";if(a.render!==!1)if(null==a.numberDisplayTag){var s=document.createTextNode(u);i.parentElement.insertBefore(s,i.nextSibling||i),a.numberDisplayTag=s}else a.numberDisplayTag.nodeValue=u;if(null!=a.numberClass){var l;l=document.getElementsByClassName?document.getElementsByClassName(a.numberClass):document.querySelectorAll("."+a.numberClass);for(var c=0;c<l.length;c++)l[c].innerHTML=u}if(null!=o){var h=R[n];if(R[n]=o,h!=o&&null!=a.cb){var p=a,g=null==h;setTimeout(function(){p.cb(o,n,g,e.phoneNumber,e.phoneNumberLocal)},0)}}}}function p(){x=!0,g(),m()}function g(){E.push({type:"Display",width:screen.width}),E.push({type:"Display",height:screen.height}),E.push({type:"Display",availWidth:screen.availWidth}),E.push({type:"Display",availHeight:screen.availHeight}),E.push({type:"Display",pixelDepth:screen.pixelDepth}),E.push({type:"Display",colorDepth:screen.colorDepth})}function m(){E.push({type:"Request",referrer:document.referrer})}function d(e){M.push(e)}function b(){if(M&&M.length){var e=M.slice(),n={JsTagIds:M,currentEpoch:(new Date).getTime(),tags:E,queryPaths:D};L.postRequest(_+"/v2/nis/gnbulk",n,function(n){s(e,n)},function(e){}),M=[]}}function v(e){setTimeout(function(){N(e)},0)}function y(e){e.heartBeatTimeout=setTimeout(function(){N(e)},e.heartBeatMs)}function N(e){if(!e.isExpired()){var n={ImpressionId:e.impressionQueryPath,Tags:E};L.postRequest(_+"/v1/nis/hb",n,function(){e.incrementExp(),y(e)},null)}}function T(e){if(e)for(x||p(),i=0;i<e.length;i++)e[i].type="user",E.push(e[i])}function w(){for(var e in S){var n=S[e];null!=n&&null!=n.heartBeatTimeout&&clearTimeout(n.heartBeatTimeout)}}var I={},S={},E=[],x=!1,_=r.baseUrl,L=t(),D=a(e.location.search.substr(1).split("&")),R={},M=[],O=[],q=null;return u(r.queue),{processOutstandingRequests:function(e){u(e)},addTags:function(e){T(e)},release:function(){w()},setBulkNumbersCallback:function(e){if(e&&"function"!=typeof e)throw"The callback has to be a function or null";q=e}}};"undefined"==typeof e.ringba&&(e._rgba=e._rgba||{},e._rgba.q=e._rgba.q||[],e.ringba=r({baseUrl:"https://display.ringba.com/",queue:e._rgba.q}),e._rgba.q.pushBase=e._rgba.q.push,e._rgba.q.push=function(n){e._rgba.q.pushBase(n),e.ringba.processOutstandingRequests(e._rgba.q)},e._rgba_tags=e._rgba_tags||[],e._rgba_tags.push=function(n){e.ringba.addTags([n])},e._rgba_tags.length&&e.ringba.addTags(e._rgba_tags))}(window),function(e,n){function t(e,n,t,r){if("string"!=typeof e)throw"Supplied jstag is not a string";if(!e||0==e.length)throw"jstag cannot be empty";if("string"!=typeof n)throw"Supplied numberInternational is not a string";if(!n||0==n.length)throw"numberInternational cannot be empty";if("+"!=n.charAt(0))throw"numberInternational must start from '+'";if("string"!=typeof t)throw"Supplied numberLocal is not a string";if(!t||0==t.length)throw"numberLocal cannot be empty";this.jstag=e,this.numberInternational=n,this.numberLocal=t,this.formatLeftToRight=void 0===r||!!r}function r(n){if(e.ringba&&e.ringba.replacer&&n&&n.length){var r=[];n.forEach(function(e){r.push(new t(e.tagId,e.number,e.numberLocal||e.number,(!!e.numberLocal)))}),e.ringba.replacer.SetNumberInfoAndFollowup(r)}}function a(n){if(n&&n.length){var t=[];n.forEach(function(e){t.push({tag:e,render:!1})}),e.ringba.processOutstandingRequests(t)}}function i(){if(e.ringba&&e.ringba_known_numbers&&e.ringba_known_numbers.length&&"undefined"==typeof e.ringba.replacer){var t=e.ringba.replacer=o(e.ringba_known_numbers);e.ringba.setBulkNumbersCallback(r),t.SetNewTagCallback(a),t.InitialPass(n.body),t.SetupObserver(n.body)}}var o=function(r){function a(e){for(var n,t=/(?:(?:[_\.\(\)\+\-~\*•–‑\t \v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]|(?:&nbsp;))*\d+)+/g,r=[];null!=(n=t.exec(e));){var a=n[0],o=i(a,!1),u=a.replace(/\d/g,"n"),s=_[o];null!=s&&r.push({number:s.number,str:a,digits:o,format:u,isInternational:s.isInternational})}return r}function i(e,n){return e&&e.replace?n?e.replace(/[^\d+]/g,""):e.replace(/[^\d]/g,""):e}function o(e,n,t){for(var r=t?0:n.length-1,a=n.length,i=e.lastIndexOf("n"),o="",u=0;u<e.length;u++){var s=t?u:e.length-u-1,l=e.charAt(s);"n"==l&&(a>0?(l=n[r],r+=t?1:-1,a--,u==i&&t&&a>0&&(l+=n.slice(-a))):l=" "),o=t?o+l:l+o}return o}function u(e){var n={replacement:null,foundMatch:!1,missingReplacements:!1,missingNumbers:null};if(!e)return n;var t=a(e);return t.forEach(function(t){var r=s(n.replacement||e,t);r?n.replacement=r:(n.missingReplacements=!0,(n.missingNumbers=n.missingNumbers||[]).push(t))}),n.foundMatch=t.length>0,n}function s(e,n){var t=n.isInternational,r=t?n.number.replaceWithInt:n.number.replaceWithLoc,a=null;return r&&(r=r.replace("+",""),r=o(n.format,r,n.number.replaceLeftToRight),a=e.replace(n.str,r)),a}function l(){return{Text_Data:{get:function(e){return e&&e.data},set:function(e,n){e&&e.data!=n&&(e.data=n)}},IMG_Alt:{get:function(e){return e&&e.alt},set:function(e,n){e&&e.alt!=n&&(e.alt=n)}},Anchor_HRef:{get:function(e){return e&&e.href},set:function(e,n){e&&e.href!=n&&(e.href=n)}}}}function c(e,n){var t=n.get(e),r=u(t);return r.replacement&&n.set(e,r.replacement),r.missingNumbers}function f(e,n,t){this.node=e,this.actionsGetSet=n,this.missingNumbers=t}function h(e,n){var t=c(e,n);return t&&t.length>0?new f(e,n,t):null}function p(e){var n=[],t=null;if(e){var r=e.nodeType;if(8==r)return n;if(3==r)t=h(e,O.Text_Data);else if(1==r&&!(e.className&&e.className.toString().indexOf("rb-ignore-number")>=0)){"IMG"==e.tagName?t=h(e,O.IMG_Alt):"A"==e.tagName&&(t=h(e,O.Anchor_HRef));var a=e.childNodes;if(a)for(var i=a.length;i--;i>=0){var o=a[i],u=p(o);u.forEach(function(e){n.push(e)})}}return t&&n.push(t),n}}function g(e){var n=[];return e?(e.forEach(function(e){var t=h(e.node,e.actionsGetSet);t&&n.push(t)}),n):n}function m(e){var n={},t=[];return e.forEach(function(e){e.missingNumbers.forEach(function(e){var r=e.number.jstag;n[r]||(n[r]=!0,t.push(e.number.jstag))})}),t}function d(e){return D=p(e||n.body),T(D)}function b(){return D=g(D),T(D)}function v(e){y(e),b()}function y(e){e.forEach(function(e){N(e)})}function N(e){if(!(e instanceof t))throw"'numberInfo' should be an instance of 'JSTagNumberInfo'";var n=L[e.jstag];if(!n)throw"Unknown jstag";n.replaceWithInt=i(e.numberInternational,!0),n.replaceWithLoc=i(e.numberLocal),n.replaceLeftToRight=e.formatLeftToRight}function T(e){if(!e)return null;var n=m(e);return w(n),n}function w(e){e&&e.forEach(function(e){I(e)}),S()}function I(e){var n=L[e];n&&(n.infoRequested||(n.infoRequested=!0,M.push(e)))}function S(){M.length>0&&R&&(R(M),M=[])}function E(e){if(null!=e&&"function"!=typeof e)throw"'cbFunction' should be a function";R=e,S()}var x=[];r&&r.length&&r.forEach(function(e){x.push({"int":i(e["int"],!0),loc:i(e.loc),jstag:e.jstag,replaceWithInt:i(e.replaceWithInt,!0),replaceWithLoc:i(e.replaceWithLoc),replaceLeftToRight:e.replaceLeftToRight})});var _={},L={},D=null,R=null,M=[];x.forEach(function(e){_[e["int"].replace("+","")]={number:e,isInternational:!0},_[e.loc]={number:e,isInternational:!1},L[e.jstag]=e});var O=l(),q=function(){var n=e.MutationObserver||e.WebKitMutationObserver||e.MozMutationObserver,t=e.addEventListener;return function(e,r){var a=!1,i=function(){a||(a=!0,setTimeout(function(){a=!1,r()},0))};if(n){var o=new n(function(e,n){(e[0].addedNodes.length||e[0].removedNodes.length||e[0].target)&&i()});o.observe(e,{childList:!0,subtree:!0,characterData:!0,attributes:!0})}else t&&(e.addEventListener("DOMNodeInserted",i,!1),e.addEventListener("DOMNodeRemoved",i,!1),e.addEventListener("DOMCharacterDataModified",i,!1),e.addEventListener("DOMAttrModified",i,!1))}}();return{InitialPass:d,FollowUp:b,SetNumberInfoAndFollowup:v,SetNewTagCallback:E,SetupObserver:function(e){q(e||n.body,function(){d()})}}};e.ringba&&(e.ringba.SetupNumberReplacement=i),n&&n.body?i():n.addEventListener("DOMContentLoaded",i)}(window,document);})(window);