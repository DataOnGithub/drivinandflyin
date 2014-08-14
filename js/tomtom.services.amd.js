var JSON;JSON||(JSON={}),function(){function f(e){return e<10?"0"+e:e}function quote(e){return escapable.lastIndex=0,escapable.test(e)?'"'+e.replace(escapable,function(e){var t=meta[e];return typeof t=="string"?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var n,r,i,s,o=gap,u,a=t[e];a&&typeof a=="object"&&typeof a.toJSON=="function"&&(a=a.toJSON(e)),typeof rep=="function"&&(a=rep.call(t,e,a));switch(typeof a){case"string":return quote(a);case"number":return isFinite(a)?String(a):"null";case"boolean":case"null":return String(a);case"object":if(!a)return"null";gap+=indent,u=[];if(Object.prototype.toString.apply(a)==="[object Array]"){s=a.length;for(n=0;n<s;n+=1)u[n]=str(n,a)||"null";return i=u.length===0?"[]":gap?"[\n"+gap+u.join(",\n"+gap)+"\n"+o+"]":"["+u.join(",")+"]",gap=o,i}if(rep&&typeof rep=="object"){s=rep.length;for(n=0;n<s;n+=1)typeof rep[n]=="string"&&(r=rep[n],i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i))}else for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(i=str(r,a),i&&u.push(quote(r)+(gap?": ":":")+i));return i=u.length===0?"{}":gap?"{\n"+gap+u.join(",\n"+gap)+"\n"+o+"}":"{"+u.join(",")+"}",gap=o,i}}typeof Date.prototype.toJSON!="function"&&(Date.prototype.toJSON=function(e){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(e){return this.valueOf()});var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;typeof JSON.stringify!="function"&&(JSON.stringify=function(e,t,n){var r;gap="",indent="";if(typeof n=="number")for(r=0;r<n;r+=1)indent+=" ";else typeof n=="string"&&(indent=n);rep=t;if(!t||typeof t=="function"||typeof t=="object"&&typeof t.length=="number")return str("",{"":e});throw new Error("JSON.stringify")}),typeof JSON.parse!="function"&&(JSON.parse=function(text,reviver){function walk(e,t){var n,r,i=e[t];if(i&&typeof i=="object")for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(r=walk(i,n),r!==undefined?i[n]=r:delete i[n]);return reviver.call(e,t,i)}var j;text=String(text),cx.lastIndex=0,cx.test(text)&&(text=text.replace(cx,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return j=eval("("+text+")"),typeof reviver=="function"?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}(),define("tomtom/lib/json2",function(){}),define("tomtom/Main",["./lib/json2"],function(){window.tomtom||(window.tomtom={}),window.tomtom.dom={},window.tomtom.layers={},window.tomtom.services={},window.tomtom.controls={},typeof String.prototype.trim!="function"&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")}),Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(n===0)return-1;var r=0;arguments.length>0&&(r=Number(arguments[1]),r!=r?r=0:r!=0&&r!=Infinity&&r!=-Infinity&&(r=(r>0||-1)*Math.floor(Math.abs(r))));if(r>=n)return-1;var i=r>=0?r:Math.max(n-Math.abs(r),0);for(;i<n;i++)if(i in t&&t[i]===e)return i;return-1}),Array.prototype.forEach||(Array.prototype.forEach=function(e,t){for(var n=0,r=this.length;n<r;++n)e.call(t,this[n],n,this)}),Array.prototype.some||(Array.prototype.some=function(e){if(this==null)throw new TypeError;var t=Object(this),n=t.length>>>0;if(typeof e!="function")throw new TypeError;var r=arguments[1];for(var i=0;i<n;i++)if(i in t&&e.call(r,t[i],i,t))return!0;return!1});var e=Object.prototype.toString,t=Array.toString();Array.isArray=Array.isArray||function(n){return typeof n=="object"&&(e.call(n)=="[object Array]"||"constructor"in n&&String(n.constructor)==t)},window.tomtom.setImagePath=function(e){e.lastIndexOf("/")!=e.length-1&&(e+="/"),tomtom.baseImagePath=e},tomtom.setImagePath("./images/"),window.tomtom.API_BASE_URL="https://api.tomtom.com/",window.tomtom.releaseInfo={version:"2.0.0-RELEASE",build:"84"},window.tomtom.isDebugMode=!1,window.tomtom.languages={en_US:{units:{distance:{meter:"m;; m",km:"km;; km",yard:"yd;; yds",mile:"mi;; mi"},time:{day:"day;; days",hour:"hour;; hours",minute:"min;; mins",type:"12"}},errors:{Unknown:"Sorry, an error occurred. Please try again or come back later"},IncidentItem:{from:"From",to:"To",delay:"Delay",length:"Length"},IncidentBalloon:{Cluster:{title:"Incidents in this area: ",listHeader:"{count} most severe incidents",orderedByLength:"(Ordered by length)",orderedByDelay:"(Ordered by delay)"},zoomIn:"Click to zoom in"}}}}),define("tomtom/Utils",["./Main"],function(){tomtom.Utils={hostIndex:0,hosts:[],getServiceUrl:function(e,t,n,r){var i=tomtom.API_BASE_URL;if(t){paramCount=0,e.indexOf("?")==-1&&(e+="?");for(var s in t)paramCount>0&&(e+="&"),e+=s+"="+t[s],paramCount++}return tomtom.proxyUrl&&(i=tomtom.proxyUrl),typeof r!="undefined"&&(r?i=i.replace(/https?:\/\//g,"https://"):i=i.replace(/https?:\/\//g,"https://")),n&&(i="https://"+this.getRandomHost(i)),e.indexOf("https://")==0||e.indexOf("https://")==0?e:i+e},getRandomHost:function(e){e=e.replace(/https?:\/\//g,"");if(typeof tomtom.enableHostCycling=="undefined"||tomtom.enableHostCycling)this.hosts.length==0&&this.initHosts(),e=this.hosts[this.hostIndex],this.hostIndex++,this.hostIndex>3&&(this.hostIndex=0);return e},isArray:function(e){return Array.isArray(e)},zeroPad:function(e,t){e=String(e);var n=[];for(var r=0;r<t;++r)n.push("0");return n.join("").substring(0,t-e.length)+e},setCookie:function(e,t,n){if(n){var r=new Date;r.setTime(r.getTime()+n*24*60*60*1e3);var i="; expires="+r.toGMTString()}else var i="";document.cookie=e+"="+t+i+"; path=/"},getCookie:function(e){var t=e+"=",n=document.cookie.split(";");for(var r=0;r<n.length;r++){var i=n[r];while(i.charAt(0)==" ")i=i.substring(1,i.length);if(i.indexOf(t)==0)return i.substring(t.length,i.length)}return null},removeCookie:function(e){this.setCookie(e,"",-1)},formatSeconds:function(e){if(e==0)return{value:0,suffix:"minute"};if(e<=3600)return{value:this.round(e/60,1),suffix:"minute"};if(e>=3600)return{value:this.round(e/3600,1),suffix:"hour"}},metersToMiles:function(t){return t*e/5280},round:function(e,t){return Math.round(e*Math.pow(10,t))/Math.pow(10,t)},getUniqueControlId:function(e){var t=e+"_"+n;return n++,t}};var e=3.28084,t=5280,n=0;return tomtom.Utils}),define("tomtom/BaseObject",["./Main","./Utils"],function(e,t){return tomtom.BaseObject=L.Class.extend({initialize:function(){},hitch:function(e){return L.Util.bind(e,this)}}),tomtom.BaseObject}),define("tomtom/Logger",["./Main"],function(){return tomtom.Logger=L.Class.extend({initialize:function(){},info:function(){this._log("info",arguments)},debug:function(){this._log("debug",arguments)},log:function(){this._log("log",arguments)},error:function(){this._log("error",arguments)},warn:function(){this._log("warn",arguments)},_log:function(e,t){if(!tomtom.isDebugMode&&(e=="log"||e=="debug"))return;if(typeof console!="undefined"){var n=console[e];n?n.apply?n.apply(console,t):n(t[0]):n!="log"&&this._log("log",t)}}}),tomtom.Logger}),define("tomtom/services/BaseService",["../BaseObject","../Logger"],function(e,t){return tomtom.services.BaseService=e.extend({initialize:function(n){this.log=new t,e.prototype.initialize.apply(this,[]),n?this.apiKey=n:this.apiKey=tomtom.apiKey,!this.apiKey&&!tomtom.proxyUrl&&this.log.warn('An API Key has not been specified.  TomTom services will not work without an API Key. Please specify an API key either via tomtom.apiKey OR by passing the apiKey to the service\'s constructor: var service = new tomtom.services.GeocodeService("your key here");')}}),tomtom.services.BaseService}),define("tomtom/AjaxUtil",["./Main"],function(){tomtom.AjaxUtil={getJSON:function(e){var t;window.XMLHttpRequest?t=new XMLHttpRequest:t=new ActiveXObject("Microsoft.XMLHTTP"),t.onreadystatechange=function(){t.readyState==4&&t.status==200&&e.callback(JSON.parse(t.responseText))},t.open("GET",e.url,!0),t.send()},getJSONP:function(t){e.get(t.url,t.data,t.callback,t.callbackParam)}};var e=function(){function o(e){var n=document.createElement("script"),r=!1;n.src=e,n.async=!0,n.onload=n.onreadystatechange=function(){!r&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")&&(r=!0,n.onload=n.onreadystatechange=null,n&&n.parentNode&&n.parentNode.removeChild(n))},t||(t=document.getElementsByTagName("head")[0]),t.appendChild(n)}function u(e){return encodeURIComponent(e)}function a(t,a,f,l){n=(t||"").indexOf("?")===-1?"?":"&",a=a||{};for(r in a)a.hasOwnProperty(r)&&(n+=u(r)+"="+u(a[r])+"&");var c="json"+ ++e;return i[c]=function(e){f(e);try{delete i[c]}catch(t){}i[c]=null},o(t+n+(l||s.callbackName||"callback")+"="+c),c}function f(e){s=e}var e=0,t,n,r,i=this,s={};return{get:a,init:f}}();return tomtom.AjaxUtil}),define("tomtom/services/GeocodingService",["./BaseService","../Utils","../AjaxUtil"],function(e,t,n){tomtom.services.GeocodingService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},geocode:function(e,i,s){typeof i=="function"&&(s=i,i={});var o={format:tomtom.proxyUrl?"json":"jsonp"};typeof e=="string"?o.query=e:o=L.Util.extend(o,e),this.apiKey&&(o.key=this.apiKey),o=L.Util.extend(o,i),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(r,o),callback:s}):n.getJSONP({url:t.getServiceUrl(r,o),callback:s,callbackParam:"callback"})},reverseGeocode:function(e,r,s,o){if(isNaN(r)){o=s,s=r;var u=L.latLng(e);e=u.lat,r=u.lng}typeof s=="function"&&(o=s,s={});var a={point:e+","+r,projection:"EPSG4326"};a=L.Util.extend(a,s),this.apiKey&&(a.key=this.apiKey),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(i,a),callback:o}):n.getJSONP({url:t.getServiceUrl(i+"p",a),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/geocode/4/geocode",i="lbs/services/reverseGeocode/3/json";return tomtom.services.GeocodingService}),function(e,t){function tt(e,t,n,r){n=n||[],t=t||m;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=q.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return E.apply(n,S.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Y&&t.getElementsByClassName)return E.apply(n,S.call(t.getElementsByClassName(f),0)),n}return dt(e.replace(B,"$1"),t,n,r,a)}function nt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function it(e){return T(function(t){return t=+t,T(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function st(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ot(e,t){var n,r,s,o,u,a,f,l=k[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=j.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=F.exec(u))s.push(n=new v(r.shift())),u=u.slice(n.length),n.type=r[0].replace(B," ");for(o in i.filter)(r=$[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new v(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?tt.error(e):k(e,a).slice(0)}function ut(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=b++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=y+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function at(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function ft(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function lt(e,t,n,r,i,s){return r&&!r[d]&&(r=lt(r)),i&&!i[d]&&(i=lt(i,s)),T(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||pt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?ft(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=ft(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?x.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=ft(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):E.apply(o,g)})}function ct(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=ut(function(e){return e===t},u,!0),l=ut(function(e){return x.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[ut(at(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return lt(a>1&&at(h),a>1&&e.slice(0,a-1).join("").replace(B,"$1"),n,a<r&&ct(e.slice(a,r)),r<s&&ct(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return at(h)}function ht(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,g=[],b=0,S="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=y+=N==null?1:Math.E;T&&(c=a!==m&&a,n=o.el);for(;(p=C[S])!=null;S++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(y=k,n=++o.el)}r&&((p=!v&&p)&&b--,u&&x.push(p))}b+=S;if(r&&S!==b){for(d=0;v=t[d];d++)v(x,g,a,f);if(u){if(b>0)while(S--)!x[S]&&!g[S]&&(g[S]=w.call(l));g=ft(g)}E.apply(l,g),T&&!u&&g.length>0&&b+t.length>1&&tt.uniqueSort(l)}return T&&(y=k,c=N),x};return o.el=0,r?T(o):o}function pt(e,t,n){var r=0,i=t.length;for(;r<i;r++)tt(e,t[r],n);return n}function dt(e,t,n,r,s){var o,u,f,l,c,h=ot(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace(V,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=$.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace(V,""),U.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return E.apply(n,S.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,U.test(e)),n}function vt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),v=String,m=e.document,g=m.documentElement,y=0,b=0,w=[].pop,E=[].push,S=[].slice,x=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},T=function(e,t){return e[d]=t==null||t,e},N=function(){var e={},t=[];return T(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},C=N(),k=N(),L=N(),A="[\\x20\\t\\r\\n\\f]",O="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",M=O.replace("w","w#"),_="([*^$|!~]?=)",D="\\["+A+"*("+O+")"+A+"*(?:"+_+A+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+M+")|)|)"+A+"*\\]",P=":("+O+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+D+")|[^:]|\\\\.)*|.*))\\)|)",H=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+A+"*((?:-\\d)?\\d*)"+A+"*\\)|)(?=[^-]|$)",B=new RegExp("^"+A+"+|((?:^|[^\\\\])(?:\\\\.)*)"+A+"+$","g"),j=new RegExp("^"+A+"*,"+A+"*"),F=new RegExp("^"+A+"*([\\x20\\t\\r\\n\\f>+~])"+A+"*"),I=new RegExp(P),q=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,R=/^:not/,U=/[\x20\t\r\n\f]*[+~]/,z=/:not\($/,W=/h\d/i,X=/input|select|textarea|button/i,V=/\\(?!\\)/g,$={ID:new RegExp("^#("+O+")"),CLASS:new RegExp("^\\.("+O+")"),NAME:new RegExp("^\\[name=['\"]?("+O+")['\"]?\\]"),TAG:new RegExp("^("+O.replace("w","w*")+")"),ATTR:new RegExp("^"+D),PSEUDO:new RegExp("^"+P),POS:new RegExp(H,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+A+"*(even|odd|(([+-]|)(\\d*)n|)"+A+"*(?:([+-]|)"+A+"*(\\d+)|))"+A+"*\\)|)","i"),needsContext:new RegExp("^"+A+"*[>+~]|"+H,"i")},J=function(e){var t=m.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},K=J(function(e){return e.appendChild(m.createComment("")),!e.getElementsByTagName("*").length}),Q=J(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),G=J(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Y=J(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),Z=J(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",g.insertBefore(e,g.firstChild);var t=m.getElementsByName&&m.getElementsByName(d).length===2+m.getElementsByName(d+0).length;return r=!m.getElementById(d),g.removeChild(e),t});try{S.call(g.childNodes,0)[0].nodeType}catch(et){S=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}tt.matches=function(e,t){return tt(e,null,null,t)},tt.matchesSelector=function(e,t){return tt(t,null,null,[e]).length>0},s=tt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=tt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=tt.contains=g.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:g.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},tt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||G?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=tt.selectors={cacheLength:50,createPseudo:T,match:$,attrHandle:Q?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:K?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:Z&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Y&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(V,""),e[3]=(e[4]||e[5]||"").replace(V,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||tt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&tt.error(e[0]),e},PSEUDO:function(e){var t,n;if($.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])I.test(t)&&(n=ot(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace(V,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace(V,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace(V,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=C[d][e+" "];return t||(t=new RegExp("(^|"+A+")"+e+"("+A+"|$)"))&&C(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=tt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||tt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?T(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=x.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:T(function(e){var t=[],n=[],r=a(e.replace(B,"$1"));return r[d]?T(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:T(function(e){return function(t){return tt(e,t).length>0}}),contains:T(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return W.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:nt("radio"),checkbox:nt("checkbox"),file:nt("file"),password:nt("password"),image:nt("image"),submit:rt("submit"),reset:rt("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return X.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:it(function(){return[0]}),last:it(function(e,t){return[t-1]}),eq:it(function(e,t,n){return[n<0?n+t:n]}),even:it(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:it(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:it(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:it(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=g.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return st(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return st(i[f],s[f]);return f===n?st(e,s[f],-1):st(i[f],t,1)},[0,0].sort(f),h=!l,tt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},tt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=tt.compile=function(e,t){var n,r=[],i=[],s=L[d][e+" "];if(!s){t||(t=ot(e)),n=t.length;while(n--)s=ct(t[n]),s[d]?r.push(s):i.push(s);s=L(e,ht(i,r))}return s},m.querySelectorAll&&function(){var e,t=dt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=g.matchesSelector||g.mozMatchesSelector||g.webkitMatchesSelector||g.oMatchesSelector||g.msMatchesSelector;J(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+A+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),J(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+A+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),dt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ot(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=U.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return E.apply(s,S.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(J(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",P)}catch(n){}}),s=new RegExp(s.join("|")),tt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return tt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=vt.prototype=i.pseudos,i.setFilters=new vt,typeof define=="function"&&define.amd?define("sizzle",[],function(){return tt}):e.Sizzle=tt}(window);var L={};L.Util={extend:function(e){var t=Array.prototype.slice.call(arguments,1);for(var n=0,r=t.length,i;n<r;n++){i=t[n]||{};for(var s in i)i.hasOwnProperty(s)&&(e[s]=i[s])}return e},bind:function(e,t){var n=arguments.length>2?Array.prototype.slice.call(arguments,2):null;return function(){return e.apply(t,n||arguments)}},stamp:function(){var e=0,t="_leaflet_id";return function(n){return n[t]=n[t]||++e,n[t]}}(),limitExecByInterval:function(e,t,n){var r,i;return function s(){var o=arguments;if(r){i=!0;return}r=!0,setTimeout(function(){r=!1,i&&(s.apply(n,o),i=!1)},t),e.apply(n,o)}},falseFn:function(){return!1},formatNum:function(e,t){var n=Math.pow(10,t||5);return Math.round(e*n)/n},splitWords:function(e){return e.replace(/^\s+|\s+$/g,"").split(/\s+/)},setOptions:function(e,t){return e.options=L.Util.extend({},e.options,t),e.options},getParamString:function(e){var t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+"="+e[n]);return"?"+t.join("&")},template:function(e,t){return e.replace(/\{ *([\w_]+) *\}/g,function(e,n){var r=t[n];if(!t.hasOwnProperty(n))throw new Error("No value provided for variable "+e);return r})},emptyImageUrl:"data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){var t,n,r=["webkit","moz","o","ms"];for(t=0;t<r.length&&!n;t++)n=window[r[t]+e];return n}function t(e){return window.setTimeout(e,1e3/60)}var n=window.requestAnimationFrame||e("RequestAnimationFrame")||t,r=window.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){window.clearTimeout(e)};L.Util.requestAnimFrame=function(e,r,i,s){e=L.Util.bind(e,r);if(!i||n!==t)return n.call(window,e,s);e()},L.Util.cancelAnimFrame=function(e){e&&r.call(window,e)}}(),L.Class=function(){},L.Class.extend=function(e){var t=function(){this.initialize&&this.initialize.apply(this,arguments)},n=function(){};n.prototype=this.prototype;var r=new n;r.constructor=t,t.prototype=r;for(var i in this)this.hasOwnProperty(i)&&i!=="prototype"&&(t[i]=this[i]);return e.statics&&(L.Util.extend(t,e.statics),delete e.statics),e.includes&&(L.Util.extend.apply(null,[r].concat(e.includes)),delete e.includes),e.options&&r.options&&(e.options=L.Util.extend({},r.options,e.options)),L.Util.extend(r,e),t},L.Class.include=function(e){L.Util.extend(this.prototype,e)},L.Class.mergeOptions=function(e){L.Util.extend(this.prototype.options,e)},L.LatLng=function(e,t,n){var r=parseFloat(e),i=parseFloat(t);if(isNaN(r)||isNaN(i))throw new Error("Invalid LatLng object: ("+e+", "+t+")");n!==!0&&(r=Math.max(Math.min(r,90),-90),i=(i+180)%360+(i<-180||i===180?180:-180)),this.lat=r,this.lng=i},L.Util.extend(L.LatLng,{DEG_TO_RAD:Math.PI/180,RAD_TO_DEG:180/Math.PI,MAX_MARGIN:1e-9}),L.LatLng.prototype={equals:function(e){if(!e)return!1;e=L.latLng(e);var t=Math.max(Math.abs(this.lat-e.lat),Math.abs(this.lng-e.lng));return t<=L.LatLng.MAX_MARGIN},toString:function(){return"LatLng("+L.Util.formatNum(this.lat)+", "+L.Util.formatNum(this.lng)+")"},distanceTo:function(e){e=L.latLng(e);var t=6378137,n=L.LatLng.DEG_TO_RAD,r=(e.lat-this.lat)*n,i=(e.lng-this.lng)*n,s=this.lat*n,o=e.lat*n,u=Math.sin(r/2),a=Math.sin(i/2),f=u*u+a*a*Math.cos(s)*Math.cos(o);return t*2*Math.atan2(Math.sqrt(f),Math.sqrt(1-f))}},L.latLng=function(e,t,n){return e instanceof L.LatLng?e:e instanceof Array?new L.LatLng(e[0],e[1]):isNaN(e)?e:new L.LatLng(e,t,n)},define("tomtom/lib/leaflet-base",function(){}),define("tomtom/services/LegacyGeocodingService",["./BaseService","../Utils","../AjaxUtil"],function(e,t,n){tomtom.services.LegacyGeocodingService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},geocode:function(e,i,s){typeof i=="function"&&(s=i,i={});var o={q:e};this.apiKey&&(o.key=this.apiKey),o=L.Util.extend(o,i),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(r+"/json",o),callback:s}):n.getJSONP({url:t.getServiceUrl(r+"/jsonp",o),callback:s,callbackParam:"jsonp"})},reverseGeocode:function(e,r,s,o){if(isNaN(r)){o=s,s=r;var u=L.latLng(e);e=u.lat,r=u.lng}typeof s=="function"&&(o=s,s={});var a={point:e+","+r,projection:"EPSG4326"};a=L.Util.extend(a,s),this.apiKey&&(a.key=this.apiKey),tomtom.proxyUrl?n.getJSON({url:t.getServiceUrl(i,a),callback:o}):n.getJSONP({url:t.getServiceUrl(i+"p",a),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/geocode/3/geocode",i="lbs/services/reverseGeocode/3/json";return tomtom.services.GeocodingService}),define("tomtom/services/RoutingService",["./BaseService","../AjaxUtil","../Utils"],function(e,t,n){tomtom.services.RoutingService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},getRoute:function(e,s,o){typeof s=="function"&&(o=s,s={}),this.apiKey&&(s.key=this.apiKey);var u=L.Util.extend({},s);u.routeType&&delete u.routeType,s.routeType||(s.routeType=i),u.language||(u.language=tomtom.LocaleManager.getPrimaryLanguage());var a=[];for(var f=0;f<e.length;f++){var l=L.latLng(e[f]);a.push(l.lat+","+l.lng)}var c={points:a.join(":"),routeType:s.routeType};tomtom.proxyUrl?t.getJSON({url:n.getServiceUrl(L.Util.template(r,c),u),callback:o}):t.getJSONP({url:n.getServiceUrl(L.Util.template(r+"p",c),u),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/route/3/{points}/{routeType}/json",i="Quickest";return tomtom.services.RoutingService}),define("tomtom/i18n",["./Utils","./Main"],function(e){function l(e,t){if(e&&e.indexOf(".")>-1){var n=e.split("."),r=n.length-1;for(var i=0;i<r&&t;i++)t=t[n[i]];return e=n[i],t&&t[e]||undefined}return t[e]}var t=/{([\w_]+)}/g,n=/^([a-z]{2})([-_])([a-z]{2})/i,r=/;; ?/,i=null,s={},o=null,u="en_US",a={_rules:[[1,function(e){return 0}],[2,function(e){return e!=1?1:0}],[2,function(e){return e>1?1:0}],[3,function(e){return e%10==1&&e%100!=11?1:e!=0?2:0}],[4,function(e){return e==1||e==11?0:e==2||e==12?1:e>0&&e<20?2:3}],[3,function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2}],[3,function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?2:1}],[3,function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2}],[3,function(e){return e==1?0:e>=2&&e<=4?1:2}],[3,function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2}],[4,function(e){return e%100==1?0:e%100==2?1:e%100==3||e%100==4?2:3}],[5,function(e){return e==1?0:e==2?1:e>=3&&e<=6?2:e>=7&&e<=10?3:4}],[6,function(e){return e==0?5:e==1?0:e==2?1:e%100>=3&&e%100<=10?2:e%100>=11&&e%100<=99?3:4}],[4,function(e){return e==1?0:e==0||e%100>0&&e%100<=10?1:e%100>10&&e%100<20?2:3}],[3,function(e){return e%10==1?0:e%10==2?1:2}],[2,function(e){return e%10==1&&e%100!=11?0:1}]],_languages:{"hu-HU":0,"id-ID":0,"ms-MY":0,"th-TH":0,"tr-TR":0,"zh-CN":0,"zh-TW":0,de:1,en:1,es:1,it:1,nl:1,pt:1,"af-ZA":1,"ca-ES":1,"da-DK":1,"de-DE":1,"en-GB":1,"en-US":1,"es-ES":1,"es-MX":1,"it-IT":1,"nl-BE":1,"nl-NL":1,"no-NO":1,"pt-BR":1,"pt-PT":1,"sv-SE":1,"et-EE":1,"fi-FI":1,"bg-BG":1,"el-GR":1,fr:2,"fr-CA":2,"fr-FR":2,"lv-LV":3,"lt-LT":6,"hr-HR":7,"ru-RU":7,"cs-CZ":8,"sk-SK":8,"pl-PL":9,"sl-SI":10},getPluralForm:function(e){var t=a._rules,i;if(isNaN(e)&&"string"==typeof e)if(e in a._languages)i=a._languages[e];else{var s=e.match(n);i=s&&a._languages[s[1]]}else i=Number(e);if(i==null||isNaN(i)||i<0||i>t.length)i=0;var o=t[i][1];return function(e,t){if("string"!=typeof e)return;t=isNaN(t)?1:t<0?0:t;var n=o(t),i=e?e.split(r):[""],s=n<i.length?i[n]:i[i.length-1];return s}}},f={_locale:"",getLocale:function(){return this._locale},setLocale:function(e){this._locale=e,o=a.getPluralForm(this._locale),i=tomtom.languages[this._locale]},getCountryCode:function(){var e=this._locale.match(n);return e&&e[3]||null},getPrimaryLanguage:function(){return this._locale.substr(0,2)},hasLocalizedStrings:function(){return"object"==typeof i&&i!=null},setLocaleRule:function(t,n,r){typeof r=="function"&&(e.isArray(t)||(t=[t]),t.forEach(function(e){s[e+"_"+n]=r},this))},getLocaleRule:function(e,t){typeof t=="undefined"&&(t=e,e=this.getLocale());var n=s[e+"_"+t];return n==null&&(n=s["*_"+t]),n}},c=L.Class.extend({initialize:function h(e,t){var n={},r,s;t&&(s=t._branch,this._pathKey=t._pathKey?t._pathKey+"."+e:e),s=s||i||h._branch||n,r=s==n?n:l(e,s),this._branch="object"==typeof r?r:null}});c._branch=null,c._pathKey="",c._pluralFormRule=null,c.getBranch=function(e){return new c(e,this)},c.getString=function(e,n,r){var s=this._branch||i||{},u=l(e,s),a=(this._pathKey?this._pathKey+".":"")+e,f=tomtom.LocaleManager.getLocaleRule(a);if(f)return f.apply(this.getBranch(a),[n,r]);var c=this._pluralFormRule||o;return c&&(u=c(u,r)),"string"==typeof u?(n&&(u=u.replace(t,function(e,t){return t in n?n[t]:"#"+t+"#"})),u):"#"+e+"#"},c.prototype._pathKey=c._pathKey,c.prototype._branch=c._branch,c.prototype.getBranch=c.getBranch,c.prototype.getString=c.getString,f.setLocale(u),f.setLocaleRule("*","units.distance",function(e,t){var n=t/1e3;return t<500?t+" "+this.getString("meter",null,t):n.toFixed(1)+" "+this.getString("km",null,n)}),f.setLocaleRule(["en_GB","en_US"],"units.distance",function(e,t){var n=Math.round(t*.10936133)*10,r=n/1760;return r<.5?Math.round(n)+" "+this.getString("yard",null,n):r.toFixed(1)+" "+this.getString("mile",null,r)}),f.setLocaleRule("*","common.TomTom.HDTraffic",function(){return"HD Traffic"}),tomtom.LocaleManager=f,tomtom.StringBundle=c,tomtom.PluralForm=a}),define("tomtom/services/TrafficService",["./BaseService","../AjaxUtil","../Utils","../i18n"],function(e,t,n){tomtom.services.TrafficService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},getTrafficModel:function(e,i,s,o){typeof s=="function"&&(o=s,s={}),s.projection||(s.projection="EPSG4326");var u=L.Util.extend({},s);s.trafficModelID||(s.trafficModelID=-1),delete u.trafficModelID,u.language||(u.language=tomtom.LocaleManager.getPrimaryLanguage()),s.zoom=i,s.minY=e.top,s.minX=e.left,s.maxY=e.bottom,s.maxX=e.right,this.apiKey&&(u.key=this.apiKey),u.expandCluster=!0,tomtom.proxyUrl?t.getJSON({url:n.getServiceUrl(L.Util.template(r,s),u),callback:o}):t.getJSONP({url:n.getServiceUrl(L.Util.template(r+"p",s),u),callback:o,callbackParam:"jsonp"})}});var r="lbs/services/trafficIcons/3/s2/{minY},{minX},{maxY},{maxX}/{zoom}/{trafficModelID}/json";return tomtom.services.TrafficService}),define("tomtom/services/HDTRegionsService",["./BaseService","../AjaxUtil","../Utils"],function(e,t,n){tomtom.services.HDTRegionsService=e.extend({initialize:function(t){e.prototype.initialize.apply(this,arguments)},getRegions:function(e,i){typeof e=="function"&&(i=e,e={}),this.apiKey&&(e.key=this.apiKey),tomtom.proxyUrl?t.getJSON({url:n.getServiceUrl(r,e),callback:i}):t.getJSONP({url:n.getServiceUrl(r+"p",e),callback:i,callbackParam:"jsonp"})}});var r="lbs/services/hdtRegions/3/json";return tomtom.services.HDTRegionsService})
