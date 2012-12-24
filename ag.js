/*! asyncGate.js
    v0.6.0 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
(function(e){function n(e){return Object.prototype.toString.call(e)=="[object Function]"}function r(e){return Object.prototype.toString.call(e)=="[object Array]"}function i(e){for(var t=0;t<e.length;){if(r(e[t])){e.splice.apply(e,[t,1].concat(e[t]));continue}t++}return e}function s(){var r;return r=function(){function t(){for(var e=0;e<a.length;e++)if(!a[e])return!1;return!0}function r(){var e;if(p)return;l!==!0&&l.length&&(l=[]),a=[];if(f!==!0&&f.length){while(f&&(e=f.shift()))c.length>0?(e.apply(null,c),c=[]):e();f=!0}}function s(){var e;if(p)return;f=!0,a=[];if(l!==!0&&l.length){while(l&&(e=l.shift()))c.length>0?(e.apply(null,c),c=[]):e();l=!0}}function o(){var n=a.length,i,o;return a[n]=!1,i=function(){o&&(o.abort(),o=null),!h&&!p&&(arguments.length>0&&c.push([].slice.call(arguments)),a[n]=!0,t()&&r())},i.fail=function(){o&&(o.abort(),o=null),!h&&!p&&(arguments.length>0&&c.push([].slice.call(arguments)),h=!0,s())},i.abort=function(){o&&(o.abort(),o=null),u.abort()},i.defer=function(){if(o)throw new Error("defer() already called.");if(arguments.length==0)throw new Error("Missing argument to defer().");o=e.$AG.apply(null,arguments).then(function(){o=null,i.apply(null,arguments)}).or(function(){o=null,i.fail.apply(null,arguments)})},i}var u,a=[],f=[],l=[],c=[],h=!1,p=!1;return u={and:function(){if(h||p)return u;if(f===!0)throw new Error("Wrong: gate has already been activated.");var e,t;if(arguments.length==0)return o();e=i([].slice.call(arguments));for(t=0;t<e.length;t++){if(!n(e[t]))throw new Error("Wrong: non-function parameter passed in.");e[t](o())}return u},then:function(e){if(h||p)return u;if(!n(e))throw new Error("Wrong: non-function parameter passed in.");return f!==!0?(f.push(e),t()&&r()):(l=[],e.apply(null,c),c=[]),u},or:function(e){if(p)return u;if(!n(e))throw new Error("Wrong: non-function parameter passed in.");return h||l===!0?(e.apply(null,c),c=[]):l.push(e),u},abort:function(){p=!0,a=f=l=messages=null}},arguments.length>0&&u.and.apply(null,arguments),u},r.noConflict=function(){var n=e.$AG;return e.$AG=t,n},r.sandbox=function(){return s()},r}var t=e.$AG;e.$AG=s()})(this);