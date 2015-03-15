// Compiled by ClojureScript 0.0-3058 {}
goog.provide('ajax.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cognitect.transit');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrManager');
goog.require('goog.json');
goog.require('goog.Uri.QueryData');
goog.require('goog.net.EventType');
goog.require('goog.events');
goog.require('goog.structs');
goog.require('goog.json.Serializer');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('goog.net.ErrorCode');

ajax.core.AjaxImpl = (function (){var obj34078 = {};
return obj34078;
})();

ajax.core._js_ajax_request = (function ajax$core$_js_ajax_request(this$,uri,method,body,headers,handler,opts){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxImpl$_js_ajax_request$arity$7(this$,uri,method,body,headers,handler,opts);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._js_ajax_request[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._js_ajax_request["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxImpl.-js-ajax-request",this$);
}
}
})().call(null,this$,uri,method,body,headers,handler,opts);
}
});


ajax.core.AjaxRequest = (function (){var obj34080 = {};
return obj34080;
})();

ajax.core._abort = (function ajax$core$_abort(this$){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxRequest$_abort$arity$1;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxRequest$_abort$arity$1(this$);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._abort[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._abort["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxRequest.-abort",this$);
}
}
})().call(null,this$);
}
});


ajax.core.DirectlySubmittable = (function (){var obj34082 = {};
return obj34082;
})();


ajax.core.AjaxResponse = (function (){var obj34084 = {};
return obj34084;
})();

ajax.core._status = (function ajax$core$_status(this$){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxResponse$_status$arity$1;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status$arity$1(this$);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._status[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._status["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status",this$);
}
}
})().call(null,this$);
}
});

ajax.core._status_text = (function ajax$core$_status_text(this$){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxResponse$_status_text$arity$1;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_status_text$arity$1(this$);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._status_text[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._status_text["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-status-text",this$);
}
}
})().call(null,this$);
}
});

ajax.core._body = (function ajax$core$_body(this$){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxResponse$_body$arity$1;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_body$arity$1(this$);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._body[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._body["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-body",this$);
}
}
})().call(null,this$);
}
});

ajax.core._get_response_header = (function ajax$core$_get_response_header(this$,header){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_get_response_header$arity$2(this$,header);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._get_response_header[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._get_response_header["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-get-response-header",this$);
}
}
})().call(null,this$,header);
}
});

ajax.core._was_aborted = (function ajax$core$_was_aborted(this$){
if((function (){var and__20276__auto__ = this$;
if(and__20276__auto__){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1;
} else {
return and__20276__auto__;
}
})()){
return this$.ajax$core$AjaxResponse$_was_aborted$arity$1(this$);
} else {
var x__20932__auto__ = (((this$ == null))?null:this$);
return (function (){var or__20288__auto__ = (ajax.core._was_aborted[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (ajax.core._was_aborted["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"AjaxResponse.-was-aborted",this$);
}
}
})().call(null,this$);
}
});

if(typeof FormData !== 'undefined'){
FormData.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof ArrayBufferView !== 'undefined'){
ArrayBufferView.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Blob !== 'undefined'){
Blob.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}

if(typeof Document !== 'undefined'){
Document.prototype.ajax$core$DirectlySubmittable$ = true;
} else {
}
ajax.core.submittable_QMARK_ = (function ajax$core$submittable_QMARK_(params){
var or__20288__auto__ = (function (){var G__34088 = params;
if(G__34088){
var bit__20969__auto__ = null;
if(cljs.core.truth_((function (){var or__20288__auto__ = bit__20969__auto__;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return G__34088.ajax$core$DirectlySubmittable$;
}
})())){
return true;
} else {
if((!G__34088.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__34088);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,ajax.core.DirectlySubmittable,G__34088);
}
})();
if(or__20288__auto__){
return or__20288__auto__;
} else {
return typeof params === 'string';
}
});
goog.net.XhrIo.prototype.ajax$core$AjaxResponse$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getResponseText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatus();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getStatusText();
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

goog.net.XhrIo.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,this$__$1.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort(goog.net.ErrorCode.ABORT);
});

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrIo.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__34090){
var map__34091 = p__34090;
var map__34091__$1 = ((cljs.core.seq_QMARK_.call(null,map__34091))?cljs.core.apply.call(null,cljs.core.hash_map,map__34091):map__34091);
var with_credentials = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__34091__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var this$__$1 = this;
var G__34092 = this$__$1;
goog.events.listen(G__34092,goog.net.EventType.COMPLETE,((function (G__34092,this$__$1,map__34091,map__34091__$1,with_credentials,timeout){
return (function (p1__34089_SHARP_){
return handler.call(null,p1__34089_SHARP_.target);
});})(G__34092,this$__$1,map__34091,map__34091__$1,with_credentials,timeout))
);

G__34092.setTimeoutInterval(timeout);

G__34092.setWithCredentials(with_credentials);

G__34092.send(uri,method,body,cljs.core.clj__GT_js.call(null,headers));

return G__34092;
});
XMLHttpRequest.prototype.ajax$core$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$core$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

XMLHttpRequest.prototype.ajax$core$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$core$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__34093){
var map__34094 = p__34093;
var map__34094__$1 = ((cljs.core.seq_QMARK_.call(null,map__34094))?cljs.core.apply.call(null,cljs.core.hash_map,map__34094):map__34094);
var with_credentials = cljs.core.get.call(null,map__34094__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var timeout = cljs.core.get.call(null,map__34094__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var this$__$1 = this;
this$__$1.timeout = timeout;

this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__34094,map__34094__$1,with_credentials,timeout){
return (function (){
return handler.call(null,this$__$1);
});})(this$__$1,map__34094,map__34094__$1,with_credentials,timeout))
;

var G__34095 = this$__$1;
G__34095.open(method,uri,true);

var t_34102 = G__34095;
var t_34103__$1 = (function (){var seq__34096 = cljs.core.seq.call(null,headers);
var chunk__34097 = null;
var count__34098 = (0);
var i__34099 = (0);
while(true){
if((i__34099 < count__34098)){
var vec__34100 = cljs.core._nth.call(null,chunk__34097,i__34099);
var k = cljs.core.nth.call(null,vec__34100,(0),null);
var v = cljs.core.nth.call(null,vec__34100,(1),null);
t_34102.setRequestHeader(k,v);

var G__34104 = seq__34096;
var G__34105 = chunk__34097;
var G__34106 = count__34098;
var G__34107 = (i__34099 + (1));
seq__34096 = G__34104;
chunk__34097 = G__34105;
count__34098 = G__34106;
i__34099 = G__34107;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34096);
if(temp__4126__auto__){
var seq__34096__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34096__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__34096__$1);
var G__34108 = cljs.core.chunk_rest.call(null,seq__34096__$1);
var G__34109 = c__21075__auto__;
var G__34110 = cljs.core.count.call(null,c__21075__auto__);
var G__34111 = (0);
seq__34096 = G__34108;
chunk__34097 = G__34109;
count__34098 = G__34110;
i__34099 = G__34111;
continue;
} else {
var vec__34101 = cljs.core.first.call(null,seq__34096__$1);
var k = cljs.core.nth.call(null,vec__34101,(0),null);
var v = cljs.core.nth.call(null,vec__34101,(1),null);
t_34102.setRequestHeader(k,v);

var G__34112 = cljs.core.next.call(null,seq__34096__$1);
var G__34113 = null;
var G__34114 = (0);
var G__34115 = (0);
seq__34096 = G__34112;
chunk__34097 = G__34113;
count__34098 = G__34114;
i__34099 = G__34115;
continue;
}
} else {
return null;
}
}
break;
}
})();

G__34095.send((function (){var or__20288__auto__ = body;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "";
}
})());

return G__34095;
});
goog.net.XhrManager.prototype.ajax$core$AjaxImpl$ = true;

goog.net.XhrManager.prototype.ajax$core$AjaxImpl$_js_ajax_request$arity$7 = (function (this$,uri,method,body,headers,handler,p__34116){
var map__34117 = p__34116;
var map__34117__$1 = ((cljs.core.seq_QMARK_.call(null,map__34117))?cljs.core.apply.call(null,cljs.core.hash_map,map__34117):map__34117);
var max_retries = cljs.core.get.call(null,map__34117__$1,new cljs.core.Keyword(null,"max-retries","max-retries",-1933762121));
var priority = cljs.core.get.call(null,map__34117__$1,new cljs.core.Keyword(null,"priority","priority",1431093715));
var timeout = cljs.core.get.call(null,map__34117__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var id = cljs.core.get.call(null,map__34117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var this$__$1 = this;
return this$__$1.send(id,uri,method,body,cljs.core.clj__GT_js.call(null,headers),priority,handler,max_retries);
});
ajax.core.abort = (function ajax$core$abort(this$){
return ajax.core._abort.call(null,this$);
});
ajax.core.success_QMARK_ = (function ajax$core$success_QMARK_(status){
return cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([status], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(200),(201),(202),(204),(205),(206)], null));
});
ajax.core.read_edn = (function ajax$core$read_edn(xhrio){
return cljs.reader.read_string.call(null,ajax.core._body.call(null,xhrio));
});
ajax.core.edn_response_format = (function() {
var ajax$core$edn_response_format = null;
var ajax$core$edn_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.read_edn,new cljs.core.Keyword(null,"description","description",-1428560544),"EDN",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
var ajax$core$edn_response_format__1 = (function (opts){
return ajax$core$edn_response_format.call(null);
});
ajax$core$edn_response_format = function(opts){
switch(arguments.length){
case 0:
return ajax$core$edn_response_format__0.call(this);
case 1:
return ajax$core$edn_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$edn_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$edn_response_format__0;
ajax$core$edn_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$edn_response_format__1;
return ajax$core$edn_response_format;
})()
;
ajax.core.edn_request_format = (function ajax$core$edn_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),cljs.core.pr_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/edn"], null);
});
ajax.core.transit_content_type = "application/transit+json; charset=utf-8";
ajax.core.transit_write = (function() {
var ajax$core$transit_write = null;
var ajax$core$transit_write__1 = (function (writer){
return (function (params){
return cognitect.transit.write.call(null,writer,params);
});
});
var ajax$core$transit_write__2 = (function (writer,params){
return cognitect.transit.write.call(null,writer,params);
});
ajax$core$transit_write = function(writer,params){
switch(arguments.length){
case 1:
return ajax$core$transit_write__1.call(this,writer);
case 2:
return ajax$core$transit_write__2.call(this,writer,params);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_write.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_write__1;
ajax$core$transit_write.cljs$core$IFn$_invoke$arity$2 = ajax$core$transit_write__2;
return ajax$core$transit_write;
})()
;
ajax.core.transit_request_format = (function() {
var ajax$core$transit_request_format = null;
var ajax$core$transit_request_format__0 = (function (){
return ajax$core$transit_request_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$core$transit_request_format__1 = (function (p__34118){
var map__34120 = p__34118;
var map__34120__$1 = ((cljs.core.seq_QMARK_.call(null,map__34120))?cljs.core.apply.call(null,cljs.core.hash_map,map__34120):map__34120);
var opts = map__34120__$1;
var writer = cljs.core.get.call(null,map__34120__$1,new cljs.core.Keyword(null,"writer","writer",-277568236));
var type = cljs.core.get.call(null,map__34120__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var writer__$1 = (function (){var or__20288__auto__ = writer;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cognitect.transit.writer.call(null,(function (){var or__20288__auto____$1 = type;
if(cljs.core.truth_(or__20288__auto____$1)){
return or__20288__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.transit_write.call(null,writer__$1),new cljs.core.Keyword(null,"content-type","content-type",-508222634),ajax.core.transit_content_type], null);
});
ajax$core$transit_request_format = function(p__34118){
switch(arguments.length){
case 0:
return ajax$core$transit_request_format__0.call(this);
case 1:
return ajax$core$transit_request_format__1.call(this,p__34118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_request_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$transit_request_format__0;
ajax$core$transit_request_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_request_format__1;
return ajax$core$transit_request_format;
})()
;
ajax.core.transit_read = (function() {
var ajax$core$transit_read = null;
var ajax$core$transit_read__1 = (function (reader){
return (function (raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});
var ajax$core$transit_read__2 = (function (reader,raw){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
});
var ajax$core$transit_read__3 = (function (reader,raw,xhrio){
var text = ajax.core._body.call(null,xhrio);
var data = cognitect.transit.read.call(null,reader,text);
if(cljs.core.truth_(raw)){
return data;
} else {
return cljs.core.js__GT_clj.call(null,data);
}
});
ajax$core$transit_read = function(reader,raw,xhrio){
switch(arguments.length){
case 1:
return ajax$core$transit_read__1.call(this,reader);
case 2:
return ajax$core$transit_read__2.call(this,reader,raw);
case 3:
return ajax$core$transit_read__3.call(this,reader,raw,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_read.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_read__1;
ajax$core$transit_read.cljs$core$IFn$_invoke$arity$2 = ajax$core$transit_read__2;
ajax$core$transit_read.cljs$core$IFn$_invoke$arity$3 = ajax$core$transit_read__3;
return ajax$core$transit_read;
})()
;
ajax.core.transit_response_format = (function() {
var ajax$core$transit_response_format = null;
var ajax$core$transit_response_format__0 = (function (){
return ajax$core$transit_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$core$transit_response_format__1 = (function (p__34121){
var map__34123 = p__34121;
var map__34123__$1 = ((cljs.core.seq_QMARK_.call(null,map__34123))?cljs.core.apply.call(null,cljs.core.hash_map,map__34123):map__34123);
var opts = map__34123__$1;
var raw = cljs.core.get.call(null,map__34123__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var reader = cljs.core.get.call(null,map__34123__$1,new cljs.core.Keyword(null,"reader","reader",169660853));
var type = cljs.core.get.call(null,map__34123__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var reader__$1 = (function (){var or__20288__auto__ = reader;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cognitect.transit.reader.call(null,(function (){var or__20288__auto____$1 = type;
if(cljs.core.truth_(or__20288__auto____$1)){
return or__20288__auto____$1;
} else {
return new cljs.core.Keyword(null,"json","json",1279968570);
}
})(),opts);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.transit_read.call(null,reader__$1,raw),new cljs.core.Keyword(null,"description","description",-1428560544),"Transit",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/transit+json"], null);
});
ajax$core$transit_response_format = function(p__34121){
switch(arguments.length){
case 0:
return ajax$core$transit_response_format__0.call(this);
case 1:
return ajax$core$transit_response_format__1.call(this,p__34121);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transit_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$transit_response_format__0;
ajax$core$transit_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$transit_response_format__1;
return ajax$core$transit_response_format;
})()
;
ajax.core.params_to_str = (function ajax$core$params_to_str(params){
if(cljs.core.truth_(params)){
return goog.Uri.QueryData.createFromMap((new goog.structs.Map(cljs.core.clj__GT_js.call(null,params)))).toString();
} else {
return null;
}
});
ajax.core.url_request_format = (function ajax$core$url_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.params_to_str,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/x-www-form-urlencoded"], null);
});
ajax.core.raw_response_format = (function() {
var ajax$core$raw_response_format = null;
var ajax$core$raw_response_format__0 = (function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core._body,new cljs.core.Keyword(null,"description","description",-1428560544),"raw text",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
});
var ajax$core$raw_response_format__1 = (function (opts){
return ajax$core$raw_response_format.call(null);
});
ajax$core$raw_response_format = function(opts){
switch(arguments.length){
case 0:
return ajax$core$raw_response_format__0.call(this);
case 1:
return ajax$core$raw_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$raw_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$raw_response_format__0;
ajax$core$raw_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$raw_response_format__1;
return ajax$core$raw_response_format;
})()
;
ajax.core.write_json = (function ajax$core$write_json(data){
return (new goog.json.Serializer()).serialize(cljs.core.clj__GT_js.call(null,data));
});
ajax.core.json_request_format = (function ajax$core$json_request_format(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),ajax.core.write_json,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax.core.json_read = (function() {
var ajax$core$json_read = null;
var ajax$core$json_read__1 = (function (prefix){
return (function (raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__20276__auto__ = prefix;
if(cljs.core.truth_(and__20276__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__20276__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var ajax$core$json_read__2 = (function (prefix,raw){
return (function (keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__20276__auto__ = prefix;
if(cljs.core.truth_(and__20276__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__20276__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var ajax$core$json_read__3 = (function (prefix,raw,keywords_QMARK_){
return (function (xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__20276__auto__ = prefix;
if(cljs.core.truth_(and__20276__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__20276__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
});
var ajax$core$json_read__4 = (function (prefix,raw,keywords_QMARK_,xhrio){
var text = ajax.core._body.call(null,xhrio);
var text__$1 = (cljs.core.truth_((function (){var and__20276__auto__ = prefix;
if(cljs.core.truth_(and__20276__auto__)){
return cljs.core._EQ_.call(null,(0),text.indexOf(prefix));
} else {
return and__20276__auto__;
}
})())?text.substring(prefix.length()):text);
var json = goog.json.parse(text__$1);
if(cljs.core.truth_(raw)){
return json;
} else {
return cljs.core.js__GT_clj.call(null,json,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywords_QMARK_);
}
});
ajax$core$json_read = function(prefix,raw,keywords_QMARK_,xhrio){
switch(arguments.length){
case 1:
return ajax$core$json_read__1.call(this,prefix);
case 2:
return ajax$core$json_read__2.call(this,prefix,raw);
case 3:
return ajax$core$json_read__3.call(this,prefix,raw,keywords_QMARK_);
case 4:
return ajax$core$json_read__4.call(this,prefix,raw,keywords_QMARK_,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$json_read.cljs$core$IFn$_invoke$arity$1 = ajax$core$json_read__1;
ajax$core$json_read.cljs$core$IFn$_invoke$arity$2 = ajax$core$json_read__2;
ajax$core$json_read.cljs$core$IFn$_invoke$arity$3 = ajax$core$json_read__3;
ajax$core$json_read.cljs$core$IFn$_invoke$arity$4 = ajax$core$json_read__4;
return ajax$core$json_read;
})()
;
/**
 * Returns a JSON response format.  Options include
 * :keywords? Returns the keys as keywords
 * :prefix A prefix that needs to be stripped off.  This is to
 * combat JSON hijacking.  If you're using JSON with GET request,
 * you should think about using this.
 * http://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses
 * http://haacked.com/archive/2009/06/24/json-hijacking.aspx
 */
ajax.core.json_response_format = (function() {
var ajax$core$json_response_format = null;
var ajax$core$json_response_format__0 = (function (){
return ajax$core$json_response_format.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var ajax$core$json_response_format__1 = (function (p__34124){
var map__34126 = p__34124;
var map__34126__$1 = ((cljs.core.seq_QMARK_.call(null,map__34126))?cljs.core.apply.call(null,cljs.core.hash_map,map__34126):map__34126);
var raw = cljs.core.get.call(null,map__34126__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));
var keywords_QMARK_ = cljs.core.get.call(null,map__34126__$1,new cljs.core.Keyword(null,"keywords?","keywords?",764949733));
var prefix = cljs.core.get.call(null,map__34126__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.json_read.call(null,prefix,raw,keywords_QMARK_),new cljs.core.Keyword(null,"description","description",-1428560544),[cljs.core.str("JSON"),cljs.core.str((cljs.core.truth_(prefix)?[cljs.core.str(" prefix '"),cljs.core.str(prefix),cljs.core.str("'")].join(''):null)),cljs.core.str((cljs.core.truth_(keywords_QMARK_)?" keywordize":null))].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),"application/json"], null);
});
ajax$core$json_response_format = function(p__34124){
switch(arguments.length){
case 0:
return ajax$core$json_response_format__0.call(this);
case 1:
return ajax$core$json_response_format__1.call(this,p__34124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$json_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$json_response_format__0;
ajax$core$json_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$json_response_format__1;
return ajax$core$json_response_format;
})()
;
ajax.core.default_formats = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.json_response_format,ajax.core.edn_response_format,ajax.core.transit_response_format,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/plain",ajax.core.raw_response_format], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text/html",ajax.core.raw_response_format], null),ajax.core.raw_response_format], null);
ajax.core.get_format = (function() {
var ajax$core$get_format = null;
var ajax$core$get_format__1 = (function (opts){
return (function (format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax$core$get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
});
var ajax$core$get_format__2 = (function (opts,format_entry){
if(cljs.core.vector_QMARK_.call(null,format_entry)){
return ajax$core$get_format.call(null,opts,cljs.core.second.call(null,format_entry));
} else {
if(cljs.core.map_QMARK_.call(null,format_entry)){
return format_entry;
} else {
return format_entry.call(null,opts);

}
}
});
ajax$core$get_format = function(opts,format_entry){
switch(arguments.length){
case 1:
return ajax$core$get_format__1.call(this,opts);
case 2:
return ajax$core$get_format__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$get_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$get_format__1;
ajax$core$get_format.cljs$core$IFn$_invoke$arity$2 = ajax$core$get_format__2;
return ajax$core$get_format;
})()
;
ajax.core.accept_entry = (function() {
var ajax$core$accept_entry = null;
var ajax$core$accept_entry__1 = (function (opts){
return (function (format_entry){
var or__20288__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "*/*";
}
});
});
var ajax$core$accept_entry__2 = (function (opts,format_entry){
var or__20288__auto__ = ((cljs.core.vector_QMARK_.call(null,format_entry))?cljs.core.first.call(null,format_entry):new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(ajax.core.get_format.call(null,opts,format_entry)));
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "*/*";
}
});
ajax$core$accept_entry = function(opts,format_entry){
switch(arguments.length){
case 1:
return ajax$core$accept_entry__1.call(this,opts);
case 2:
return ajax$core$accept_entry__2.call(this,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$accept_entry.cljs$core$IFn$_invoke$arity$1 = ajax$core$accept_entry__1;
ajax$core$accept_entry.cljs$core$IFn$_invoke$arity$2 = ajax$core$accept_entry__2;
return ajax$core$accept_entry;
})()
;
ajax.core.detect_content_type = (function() {
var ajax$core$detect_content_type = null;
var ajax$core$detect_content_type__1 = (function (content_type){
return (function (opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var ajax$core$detect_content_type__2 = (function (content_type,opts){
return (function (format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
});
var ajax$core$detect_content_type__3 = (function (content_type,opts,format_entry){
var accept = ajax.core.accept_entry.call(null,opts,format_entry);
return (cljs.core._EQ_.call(null,accept,"*/*")) || ((content_type.indexOf(accept) >= (0)));
});
ajax$core$detect_content_type = function(content_type,opts,format_entry){
switch(arguments.length){
case 1:
return ajax$core$detect_content_type__1.call(this,content_type);
case 2:
return ajax$core$detect_content_type__2.call(this,content_type,opts);
case 3:
return ajax$core$detect_content_type__3.call(this,content_type,opts,format_entry);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$detect_content_type.cljs$core$IFn$_invoke$arity$1 = ajax$core$detect_content_type__1;
ajax$core$detect_content_type.cljs$core$IFn$_invoke$arity$2 = ajax$core$detect_content_type__2;
ajax$core$detect_content_type.cljs$core$IFn$_invoke$arity$3 = ajax$core$detect_content_type__3;
return ajax$core$detect_content_type;
})()
;
ajax.core.get_default_format = (function ajax$core$get_default_format(xhrio,p__34127){
var map__34129 = p__34127;
var map__34129__$1 = ((cljs.core.seq_QMARK_.call(null,map__34129))?cljs.core.apply.call(null,cljs.core.hash_map,map__34129):map__34129);
var opts = map__34129__$1;
var response_format = cljs.core.get.call(null,map__34129__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var f = ajax.core.detect_content_type.call(null,(function (){var or__20288__auto__ = ajax.core._get_response_header.call(null,xhrio,"Content-Type");
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "";
}
})(),opts);
return ajax.core.get_format.call(null,opts,cljs.core.first.call(null,cljs.core.filter.call(null,f,response_format)));
});
ajax.core.detect_response_format_read = (function() {
var ajax$core$detect_response_format_read = null;
var ajax$core$detect_response_format_read__1 = (function (opts){
return (function (xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
});
var ajax$core$detect_response_format_read__2 = (function (opts,xhrio){
return new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(ajax.core.get_default_format.call(null,xhrio,opts)).call(null,xhrio);
});
ajax$core$detect_response_format_read = function(opts,xhrio){
switch(arguments.length){
case 1:
return ajax$core$detect_response_format_read__1.call(this,opts);
case 2:
return ajax$core$detect_response_format_read__2.call(this,opts,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$detect_response_format_read.cljs$core$IFn$_invoke$arity$1 = ajax$core$detect_response_format_read__1;
ajax$core$detect_response_format_read.cljs$core$IFn$_invoke$arity$2 = ajax$core$detect_response_format_read__2;
return ajax$core$detect_response_format_read;
})()
;
ajax.core.accept_header = (function ajax$core$accept_header(p__34130){
var map__34132 = p__34130;
var map__34132__$1 = ((cljs.core.seq_QMARK_.call(null,map__34132))?cljs.core.apply.call(null,cljs.core.hash_map,map__34132):map__34132);
var opts = map__34132__$1;
var response_format = cljs.core.get.call(null,map__34132__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return clojure.string.join.call(null,", ",cljs.core.map.call(null,ajax.core.accept_entry.call(null,opts),response_format));
} else {
return ajax.core.accept_entry.call(null,opts,response_format);
}
});
ajax.core.detect_response_format = (function() {
var ajax$core$detect_response_format = null;
var ajax$core$detect_response_format__0 = (function (){
return ajax$core$detect_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.default_formats], null));
});
var ajax$core$detect_response_format__1 = (function (opts){
var accept = ajax.core.accept_header.call(null,opts);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),ajax.core.detect_response_format_read.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),[cljs.core.str("(from "),cljs.core.str(accept),cljs.core.str(")")].join(''),new cljs.core.Keyword(null,"content-type","content-type",-508222634),accept], null);
});
ajax$core$detect_response_format = function(opts){
switch(arguments.length){
case 0:
return ajax$core$detect_response_format__0.call(this);
case 1:
return ajax$core$detect_response_format__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$detect_response_format.cljs$core$IFn$_invoke$arity$0 = ajax$core$detect_response_format__0;
ajax$core$detect_response_format.cljs$core$IFn$_invoke$arity$1 = ajax$core$detect_response_format__1;
return ajax$core$detect_response_format;
})()
;
ajax.core.get_response_format = (function ajax$core$get_response_format(p__34133){
var map__34135 = p__34133;
var map__34135__$1 = ((cljs.core.seq_QMARK_.call(null,map__34135))?cljs.core.apply.call(null,cljs.core.hash_map,map__34135):map__34135);
var opts = map__34135__$1;
var response_format = cljs.core.get.call(null,map__34135__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(cljs.core.vector_QMARK_.call(null,response_format)){
return ajax.core.detect_response_format.call(null,opts);
} else {
if(cljs.core.map_QMARK_.call(null,response_format)){
return response_format;
} else {
if(cljs.core.ifn_QMARK_.call(null,response_format)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null);
} else {
throw (new Error([cljs.core.str("unrecognized response format: "),cljs.core.str(response_format)].join('')));

}
}
}
});
ajax.core.exception_response = (function ajax$core$exception_response(e,status,p__34136,xhrio){
var map__34138 = p__34136;
var map__34138__$1 = ((cljs.core.seq_QMARK_.call(null,map__34138))?cljs.core.apply.call(null,cljs.core.hash_map,map__34138):map__34138);
var description = cljs.core.get.call(null,map__34138__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str(e.message),cljs.core.str("  Format should have been "),cljs.core.str(description)].join('');
var parse_error = cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.core._body.call(null,xhrio));
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return parse_error;
} else {
return cljs.core.assoc.call(null,response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error);
}
});
/**
 * @param {...*} var_args
 */
ajax.core.fail = (function() { 
var ajax$core$fail__delegate = function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.call(null,cljs.core.conj,response,cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,(2),params)))], null);
};
var ajax$core$fail = function (status,status_text,failure,var_args){
var params = null;
if (arguments.length > 3) {
var G__34139__i = 0, G__34139__a = new Array(arguments.length -  3);
while (G__34139__i < G__34139__a.length) {G__34139__a[G__34139__i] = arguments[G__34139__i + 3]; ++G__34139__i;}
  params = new cljs.core.IndexedSeq(G__34139__a,0);
} 
return ajax$core$fail__delegate.call(this,status,status_text,failure,params);};
ajax$core$fail.cljs$lang$maxFixedArity = 3;
ajax$core$fail.cljs$lang$applyTo = (function (arglist__34140){
var status = cljs.core.first(arglist__34140);
arglist__34140 = cljs.core.next(arglist__34140);
var status_text = cljs.core.first(arglist__34140);
arglist__34140 = cljs.core.next(arglist__34140);
var failure = cljs.core.first(arglist__34140);
var params = cljs.core.rest(arglist__34140);
return ajax$core$fail__delegate(status,status_text,failure,params);
});
ajax$core$fail.cljs$core$IFn$_invoke$arity$variadic = ajax$core$fail__delegate;
return ajax$core$fail;
})()
;
ajax.core.interpret_response = (function ajax$core$interpret_response(p__34141,xhrio){
var map__34145 = p__34141;
var map__34145__$1 = ((cljs.core.seq_QMARK_.call(null,map__34145))?cljs.core.apply.call(null,cljs.core.hash_map,map__34145):map__34145);
var format = map__34145__$1;
var read = cljs.core.get.call(null,map__34145__$1,new cljs.core.Keyword(null,"read","read",1140058661));
try{var status = ajax.core._status.call(null,xhrio);
var fail = cljs.core.partial.call(null,ajax.core.fail,status);
if(cljs.core._EQ_.call(null,(-1),status)){
if(cljs.core.truth_(ajax.core._was_aborted.call(null,xhrio))){
return fail.call(null,"Request aborted by client.",new cljs.core.Keyword(null,"aborted","aborted",1775972619));
} else {
return fail.call(null,"Request timed out.",new cljs.core.Keyword(null,"timeout","timeout",-318625318));
}
} else {
try{var response = read.call(null,xhrio);
if(cljs.core.truth_(ajax.core.success_QMARK_.call(null,status))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
return fail.call(null,ajax.core._status_text.call(null,xhrio),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),response);
}
}catch (e34147){if((e34147 instanceof Object)){
var e = e34147;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.core.exception_response.call(null,e,status,format,xhrio)], null);
} else {
throw e34147;

}
}}
}catch (e34146){if((e34146 instanceof Object)){
var e = e34146;
return ajax.core.fail.call(null,(0),e.message,new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"exception","exception",-335277064),e);
} else {
throw e34146;

}
}});
ajax.core.no_format = (function ajax$core$no_format(xhrio){
throw (new Error("No response format was supplied."));
});
ajax.core.uri_with_params = (function ajax$core$uri_with_params(uri,params){
if(cljs.core.truth_(params)){
return [cljs.core.str(uri),cljs.core.str("?"),cljs.core.str(ajax.core.params_to_str.call(null,params))].join('');
} else {
return uri;
}
});
ajax.core.get_request_format = (function ajax$core$get_request_format(format){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.ifn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return null;

}
}
});
ajax.core.normalize_method = (function ajax$core$normalize_method(method){
if((method instanceof cljs.core.Keyword)){
return clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
} else {
return method;
}
});
ajax.core.process_inputs = (function ajax$core$process_inputs(p__34148,p__34149){
var map__34153 = p__34148;
var map__34153__$1 = ((cljs.core.seq_QMARK_.call(null,map__34153))?cljs.core.apply.call(null,cljs.core.hash_map,map__34153):map__34153);
var headers = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var params = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"params","params",710516235));
var format = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"method","method",55703592));
var uri = cljs.core.get.call(null,map__34153__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var map__34154 = p__34149;
var map__34154__$1 = ((cljs.core.seq_QMARK_.call(null,map__34154))?cljs.core.apply.call(null,cljs.core.hash_map,map__34154):map__34154);
var content_type = cljs.core.get.call(null,map__34154__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Accept",content_type], null),(function (){var or__20288__auto__ = headers;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
if(cljs.core._EQ_.call(null,ajax.core.normalize_method.call(null,method),"GET")){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [ajax.core.uri_with_params.call(null,uri,params),null,headers__$1], null);
} else {
var map__34155 = ajax.core.get_request_format.call(null,format);
var map__34155__$1 = ((cljs.core.seq_QMARK_.call(null,map__34155))?cljs.core.apply.call(null,cljs.core.hash_map,map__34155):map__34155);
var content_type__$1 = cljs.core.get.call(null,map__34155__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var write = cljs.core.get.call(null,map__34155__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var body = ((!((write == null)))?write.call(null,params):((ajax.core.submittable_QMARK_.call(null,params))?params:(function(){throw (new Error([cljs.core.str("unrecognized request format: "),cljs.core.str(format)].join('')))})()
));
var content_type__$2 = (cljs.core.truth_(content_type__$1)?new cljs.core.PersistentArrayMap(null, 1, ["Content-Type",content_type__$1], null):null);
var headers__$2 = cljs.core.merge.call(null,headers__$1,content_type__$2);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri,body,headers__$2], null);
}
});
ajax.core.js_handler = (function() {
var ajax$core$js_handler = null;
var ajax$core$js_handler__1 = (function (response_format){
return (function (handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});
var ajax$core$js_handler__2 = (function (response_format,handler){
return (function (xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
});
var ajax$core$js_handler__3 = (function (response_format,handler,xhrio){
var response = ajax.core.interpret_response.call(null,response_format,xhrio);
return handler.call(null,response);
});
ajax$core$js_handler = function(response_format,handler,xhrio){
switch(arguments.length){
case 1:
return ajax$core$js_handler__1.call(this,response_format);
case 2:
return ajax$core$js_handler__2.call(this,response_format,handler);
case 3:
return ajax$core$js_handler__3.call(this,response_format,handler,xhrio);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$js_handler.cljs$core$IFn$_invoke$arity$1 = ajax$core$js_handler__1;
ajax$core$js_handler.cljs$core$IFn$_invoke$arity$2 = ajax$core$js_handler__2;
ajax$core$js_handler.cljs$core$IFn$_invoke$arity$3 = ajax$core$js_handler__3;
return ajax$core$js_handler;
})()
;
ajax.core.base_handler = (function ajax$core$base_handler(response_format,p__34156){
var map__34158 = p__34156;
var map__34158__$1 = ((cljs.core.seq_QMARK_.call(null,map__34158))?cljs.core.apply.call(null,cljs.core.hash_map,map__34158):map__34158);
var handler = cljs.core.get.call(null,map__34158__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
if(cljs.core.truth_(handler)){
return ajax.core.js_handler.call(null,response_format,handler);
} else {
throw (new Error("No ajax handler provided."));
}
});
ajax.core.ajax_request = (function ajax$core$ajax_request(p__34159){
var map__34162 = p__34159;
var map__34162__$1 = ((cljs.core.seq_QMARK_.call(null,map__34162))?cljs.core.apply.call(null,cljs.core.hash_map,map__34162):map__34162);
var opts = map__34162__$1;
var api = cljs.core.get.call(null,map__34162__$1,new cljs.core.Keyword(null,"api","api",-899839580));
var method = cljs.core.get.call(null,map__34162__$1,new cljs.core.Keyword(null,"method","method",55703592));
var response_format = ajax.core.get_response_format.call(null,opts);
var method__$1 = ajax.core.normalize_method.call(null,method);
var vec__34163 = ajax.core.process_inputs.call(null,opts,response_format);
var uri = cljs.core.nth.call(null,vec__34163,(0),null);
var body = cljs.core.nth.call(null,vec__34163,(1),null);
var headers = cljs.core.nth.call(null,vec__34163,(2),null);
var handler = ajax.core.base_handler.call(null,response_format,opts);
var api__$1 = (function (){var or__20288__auto__ = api;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return (new goog.net.XhrIo());
}
})();
return ajax.core._js_ajax_request.call(null,api__$1,uri,method__$1,body,headers,handler,opts);
});
ajax.core.keyword_request_format = (function ajax$core$keyword_request_format(format,format_params){
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"write","write",-1857649168),format], null);
} else {
if((format == null)){
return ajax.core.transit_request_format.call(null,format_params);
} else {
var G__34165 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__34165) {
case "url":
return ajax.core.url_request_format.call(null);

break;
case "raw":
return ajax.core.url_request_format.call(null);

break;
case "edn":
return ajax.core.edn_request_format.call(null);

break;
case "json":
return ajax.core.json_request_format.call(null);

break;
case "transit":
return ajax.core.transit_request_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
});
ajax.core.keyword_response_format_2 = (function ajax$core$keyword_response_format_2(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,format),ajax$core$keyword_response_format_2.call(null,cljs.core.second.call(null,format),format_params)], null);
} else {
if(cljs.core.map_QMARK_.call(null,format)){
return format;
} else {
if(cljs.core.fn_QMARK_.call(null,format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read","read",1140058661),format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom"], null);
} else {
if((format == null)){
return ajax.core.detect_response_format.call(null);
} else {
var G__34168 = (((format instanceof cljs.core.Keyword))?format.fqn:null);
switch (G__34168) {
case "detect":
return ajax.core.detect_response_format.call(null);

break;
case "raw":
return ajax.core.raw_response_format.call(null);

break;
case "edn":
return ajax.core.edn_response_format.call(null);

break;
case "json":
return ajax.core.json_response_format.call(null,format_params);

break;
case "transit":
return ajax.core.transit_response_format.call(null,format_params);

break;
default:
return null;

}

}
}
}
}
});
ajax.core.keyword_response_format = (function ajax$core$keyword_response_format(format,format_params){
if(cljs.core.vector_QMARK_.call(null,format)){
return cljs.core.apply.call(null,cljs.core.vector,cljs.core.map.call(null,(function (p1__34170_SHARP_){
return ajax.core.keyword_response_format_2.call(null,p1__34170_SHARP_,format_params);
}),format));
} else {
return ajax.core.keyword_response_format_2.call(null,format,format_params);
}
});
ajax.core.transform_handler = (function() {
var ajax$core$transform_handler = null;
var ajax$core$transform_handler__1 = (function (p__34173){
var map__34181 = p__34173;
var map__34181__$1 = ((cljs.core.seq_QMARK_.call(null,map__34181))?cljs.core.apply.call(null,cljs.core.hash_map,map__34181):map__34181);
var finally$ = cljs.core.get.call(null,map__34181__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__34181__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__34181__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return ((function (map__34181,map__34181__$1,finally$,error_handler,handler){
return (function (p__34182){
var vec__34183 = p__34182;
var ok = cljs.core.nth.call(null,vec__34183,(0),null);
var result = cljs.core.nth.call(null,vec__34183,(1),null);
var temp__4124__auto___34184 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___34184)){
var h_34185 = temp__4124__auto___34184;
h_34185.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
;})(map__34181,map__34181__$1,finally$,error_handler,handler))
});
var ajax$core$transform_handler__2 = (function (p__34171,p__34172){
var map__34179 = p__34171;
var map__34179__$1 = ((cljs.core.seq_QMARK_.call(null,map__34179))?cljs.core.apply.call(null,cljs.core.hash_map,map__34179):map__34179);
var finally$ = cljs.core.get.call(null,map__34179__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var error_handler = cljs.core.get.call(null,map__34179__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var handler = cljs.core.get.call(null,map__34179__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var vec__34180 = p__34172;
var ok = cljs.core.nth.call(null,vec__34180,(0),null);
var result = cljs.core.nth.call(null,vec__34180,(1),null);
var temp__4124__auto___34186 = (cljs.core.truth_(ok)?handler:error_handler);
if(cljs.core.truth_(temp__4124__auto___34186)){
var h_34187 = temp__4124__auto___34186;
h_34187.call(null,result);
} else {
}

if(cljs.core.fn_QMARK_.call(null,finally$)){
return finally$.call(null);
} else {
return null;
}
});
ajax$core$transform_handler = function(p__34171,p__34172){
switch(arguments.length){
case 1:
return ajax$core$transform_handler__1.call(this,p__34171);
case 2:
return ajax$core$transform_handler__2.call(this,p__34171,p__34172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ajax$core$transform_handler.cljs$core$IFn$_invoke$arity$1 = ajax$core$transform_handler__1;
ajax$core$transform_handler.cljs$core$IFn$_invoke$arity$2 = ajax$core$transform_handler__2;
return ajax$core$transform_handler;
})()
;
ajax.core.transform_opts = (function ajax$core$transform_opts(p__34188){
var map__34190 = p__34188;
var map__34190__$1 = ((cljs.core.seq_QMARK_.call(null,map__34190))?cljs.core.apply.call(null,cljs.core.hash_map,map__34190):map__34190);
var opts = map__34190__$1;
var params = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"params","params",710516235));
var response_format = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var format = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var method = cljs.core.get.call(null,map__34190__$1,new cljs.core.Keyword(null,"method","method",55703592));

var needs_format = !((ajax.core.submittable_QMARK_.call(null,params)) || (cljs.core._EQ_.call(null,method,"GET")));
var rf = (cljs.core.truth_((function (){var or__20288__auto__ = format;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return needs_format;
}
})())?ajax.core.keyword_request_format.call(null,format,opts):null);
return cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"handler","handler",-195596612),ajax.core.transform_handler.call(null,opts),new cljs.core.Keyword(null,"format","format",-1306924766),rf,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.keyword_response_format.call(null,response_format,opts));
});
ajax.core.easy_ajax_request = (function ajax$core$easy_ajax_request(uri,method,opts){
return ajax.core.ajax_request.call(null,ajax.core.transform_opts.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"method","method",55703592),method)));
});
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.GET = (function() { 
var ajax$core$GET__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"GET",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$GET = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34191__i = 0, G__34191__a = new Array(arguments.length -  1);
while (G__34191__i < G__34191__a.length) {G__34191__a[G__34191__i] = arguments[G__34191__i + 1]; ++G__34191__i;}
  opts = new cljs.core.IndexedSeq(G__34191__a,0);
} 
return ajax$core$GET__delegate.call(this,uri,opts);};
ajax$core$GET.cljs$lang$maxFixedArity = 1;
ajax$core$GET.cljs$lang$applyTo = (function (arglist__34192){
var uri = cljs.core.first(arglist__34192);
var opts = cljs.core.rest(arglist__34192);
return ajax$core$GET__delegate(uri,opts);
});
ajax$core$GET.cljs$core$IFn$_invoke$arity$variadic = ajax$core$GET__delegate;
return ajax$core$GET;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.HEAD = (function() { 
var ajax$core$HEAD__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"HEAD",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$HEAD = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34193__i = 0, G__34193__a = new Array(arguments.length -  1);
while (G__34193__i < G__34193__a.length) {G__34193__a[G__34193__i] = arguments[G__34193__i + 1]; ++G__34193__i;}
  opts = new cljs.core.IndexedSeq(G__34193__a,0);
} 
return ajax$core$HEAD__delegate.call(this,uri,opts);};
ajax$core$HEAD.cljs$lang$maxFixedArity = 1;
ajax$core$HEAD.cljs$lang$applyTo = (function (arglist__34194){
var uri = cljs.core.first(arglist__34194);
var opts = cljs.core.rest(arglist__34194);
return ajax$core$HEAD__delegate(uri,opts);
});
ajax$core$HEAD.cljs$core$IFn$_invoke$arity$variadic = ajax$core$HEAD__delegate;
return ajax$core$HEAD;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.POST = (function() { 
var ajax$core$POST__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"POST",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$POST = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34195__i = 0, G__34195__a = new Array(arguments.length -  1);
while (G__34195__i < G__34195__a.length) {G__34195__a[G__34195__i] = arguments[G__34195__i + 1]; ++G__34195__i;}
  opts = new cljs.core.IndexedSeq(G__34195__a,0);
} 
return ajax$core$POST__delegate.call(this,uri,opts);};
ajax$core$POST.cljs$lang$maxFixedArity = 1;
ajax$core$POST.cljs$lang$applyTo = (function (arglist__34196){
var uri = cljs.core.first(arglist__34196);
var opts = cljs.core.rest(arglist__34196);
return ajax$core$POST__delegate(uri,opts);
});
ajax$core$POST.cljs$core$IFn$_invoke$arity$variadic = ajax$core$POST__delegate;
return ajax$core$POST;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.PUT = (function() { 
var ajax$core$PUT__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"PUT",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$PUT = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34197__i = 0, G__34197__a = new Array(arguments.length -  1);
while (G__34197__i < G__34197__a.length) {G__34197__a[G__34197__i] = arguments[G__34197__i + 1]; ++G__34197__i;}
  opts = new cljs.core.IndexedSeq(G__34197__a,0);
} 
return ajax$core$PUT__delegate.call(this,uri,opts);};
ajax$core$PUT.cljs$lang$maxFixedArity = 1;
ajax$core$PUT.cljs$lang$applyTo = (function (arglist__34198){
var uri = cljs.core.first(arglist__34198);
var opts = cljs.core.rest(arglist__34198);
return ajax$core$PUT__delegate(uri,opts);
});
ajax$core$PUT.cljs$core$IFn$_invoke$arity$variadic = ajax$core$PUT__delegate;
return ajax$core$PUT;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.DELETE = (function() { 
var ajax$core$DELETE__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"DELETE",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$DELETE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34199__i = 0, G__34199__a = new Array(arguments.length -  1);
while (G__34199__i < G__34199__a.length) {G__34199__a[G__34199__i] = arguments[G__34199__i + 1]; ++G__34199__i;}
  opts = new cljs.core.IndexedSeq(G__34199__a,0);
} 
return ajax$core$DELETE__delegate.call(this,uri,opts);};
ajax$core$DELETE.cljs$lang$maxFixedArity = 1;
ajax$core$DELETE.cljs$lang$applyTo = (function (arglist__34200){
var uri = cljs.core.first(arglist__34200);
var opts = cljs.core.rest(arglist__34200);
return ajax$core$DELETE__delegate(uri,opts);
});
ajax$core$DELETE.cljs$core$IFn$_invoke$arity$variadic = ajax$core$DELETE__delegate;
return ajax$core$DELETE;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.OPTIONS = (function() { 
var ajax$core$OPTIONS__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"OPTIONS",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$OPTIONS = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34201__i = 0, G__34201__a = new Array(arguments.length -  1);
while (G__34201__i < G__34201__a.length) {G__34201__a[G__34201__i] = arguments[G__34201__i + 1]; ++G__34201__i;}
  opts = new cljs.core.IndexedSeq(G__34201__a,0);
} 
return ajax$core$OPTIONS__delegate.call(this,uri,opts);};
ajax$core$OPTIONS.cljs$lang$maxFixedArity = 1;
ajax$core$OPTIONS.cljs$lang$applyTo = (function (arglist__34202){
var uri = cljs.core.first(arglist__34202);
var opts = cljs.core.rest(arglist__34202);
return ajax$core$OPTIONS__delegate(uri,opts);
});
ajax$core$OPTIONS.cljs$core$IFn$_invoke$arity$variadic = ajax$core$OPTIONS__delegate;
return ajax$core$OPTIONS;
})()
;
/**
 * accepts the URI and an optional map of options, options include:
 * :handler - the handler function for successful operation
 * should accept a single parameter which is the
 * deserialized response
 * :error-handler - the handler function for errors, should accept a
 * map with keys :status and :status-text
 * :format - the format for the request
 * :response-format - the format for the response
 * :params - a map of parameters that will be sent with the request
 * @param {...*} var_args
 */
ajax.core.TRACE = (function() { 
var ajax$core$TRACE__delegate = function (uri,opts){
var f__21545__auto__ = cljs.core.first.call(null,opts);
return ajax.core.easy_ajax_request.call(null,uri,"TRACE",(((f__21545__auto__ instanceof cljs.core.Keyword))?cljs.core.apply.call(null,cljs.core.hash_map,opts):f__21545__auto__));
};
var ajax$core$TRACE = function (uri,var_args){
var opts = null;
if (arguments.length > 1) {
var G__34203__i = 0, G__34203__a = new Array(arguments.length -  1);
while (G__34203__i < G__34203__a.length) {G__34203__a[G__34203__i] = arguments[G__34203__i + 1]; ++G__34203__i;}
  opts = new cljs.core.IndexedSeq(G__34203__a,0);
} 
return ajax$core$TRACE__delegate.call(this,uri,opts);};
ajax$core$TRACE.cljs$lang$maxFixedArity = 1;
ajax$core$TRACE.cljs$lang$applyTo = (function (arglist__34204){
var uri = cljs.core.first(arglist__34204);
var opts = cljs.core.rest(arglist__34204);
return ajax$core$TRACE__delegate(uri,opts);
});
ajax$core$TRACE.cljs$core$IFn$_invoke$arity$variadic = ajax$core$TRACE__delegate;
return ajax$core$TRACE;
})()
;

//# sourceMappingURL=core.js.map