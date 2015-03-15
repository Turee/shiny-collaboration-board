// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__36231_SHARP_,p2__36232_SHARP_){
var and__20276__auto__ = p1__36231_SHARP_;
if(cljs.core.truth_(and__20276__auto__)){
return p2__36232_SHARP_;
} else {
return and__20276__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20288__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20288__auto__){
return or__20288__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__36234_SHARP_,p2__36233_SHARP_){
return [cljs.core.str(p2__36233_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__20288__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__20288__auto__){
return or__20288__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__20288__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
figwheel.client.file_reloading.resolve_url = (function (){var method_table__21185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21189__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21189__auto__,method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__36235){
var map__36236 = p__36235;
var map__36236__$1 = ((cljs.core.seq_QMARK_.call(null,map__36236))?cljs.core.apply.call(null,cljs.core.hash_map,map__36236):map__36236);
var file = cljs.core.get.call(null,map__36236__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__36237){
var map__36238 = p__36237;
var map__36238__$1 = ((cljs.core.seq_QMARK_.call(null,map__36238))?cljs.core.apply.call(null,cljs.core.hash_map,map__36238):map__36238);
var namespace = cljs.core.get.call(null,map__36238__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__21185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21189__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21189__auto__,method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e36239){if((e36239 instanceof Error)){
var e = e36239;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36239;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36240,callback){
var map__36242 = p__36240;
var map__36242__$1 = ((cljs.core.seq_QMARK_.call(null,map__36242))?cljs.core.apply.call(null,cljs.core.hash_map,map__36242):map__36242);
var file_msg = map__36242__$1;
var request_url = cljs.core.get.call(null,map__36242__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36242,map__36242__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36242,map__36242__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36243){
var map__36245 = p__36243;
var map__36245__$1 = ((cljs.core.seq_QMARK_.call(null,map__36245))?cljs.core.apply.call(null,cljs.core.hash_map,map__36245):map__36245);
var file_msg = map__36245__$1;
var meta_data = cljs.core.get.call(null,map__36245__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
var namespace = cljs.core.get.call(null,map__36245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_data__$1 = (function (){var or__20288__auto__ = meta_data;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__20276__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__20276__auto__){
var or__20288__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__20288__auto____$1)){
return or__20288__auto____$1;
} else {
var and__20276__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__20276__auto____$1){
var or__20288__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__20288__auto____$2){
return or__20288__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__20276__auto____$1;
}
}
}
} else {
return and__20276__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36246,callback){
var map__36248 = p__36246;
var map__36248__$1 = ((cljs.core.seq_QMARK_.call(null,map__36248))?cljs.core.apply.call(null,cljs.core.hash_map,map__36248):map__36248);
var file_msg = map__36248__$1;
var namespace = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = cljs.core.get.call(null,map__36248__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__23370__auto___36335 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___36335,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___36335,out){
return (function (state_36317){
var state_val_36318 = (state_36317[(1)]);
if((state_val_36318 === (7))){
var inst_36301 = (state_36317[(7)]);
var inst_36307 = (state_36317[(2)]);
var inst_36308 = cljs.core.async.put_BANG_.call(null,out,inst_36307);
var inst_36297 = inst_36301;
var state_36317__$1 = (function (){var statearr_36319 = state_36317;
(statearr_36319[(8)] = inst_36308);

(statearr_36319[(9)] = inst_36297);

return statearr_36319;
})();
var statearr_36320_36336 = state_36317__$1;
(statearr_36320_36336[(2)] = null);

(statearr_36320_36336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (6))){
var inst_36313 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
var statearr_36321_36337 = state_36317__$1;
(statearr_36321_36337[(2)] = inst_36313);

(statearr_36321_36337[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (5))){
var inst_36311 = cljs.core.async.close_BANG_.call(null,out);
var state_36317__$1 = state_36317;
var statearr_36322_36338 = state_36317__$1;
(statearr_36322_36338[(2)] = inst_36311);

(statearr_36322_36338[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (4))){
var inst_36300 = (state_36317[(10)]);
var inst_36305 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36300);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36317__$1,(7),inst_36305);
} else {
if((state_val_36318 === (3))){
var inst_36315 = (state_36317[(2)]);
var state_36317__$1 = state_36317;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36317__$1,inst_36315);
} else {
if((state_val_36318 === (2))){
var inst_36297 = (state_36317[(9)]);
var inst_36300 = (state_36317[(10)]);
var inst_36300__$1 = cljs.core.nth.call(null,inst_36297,(0),null);
var inst_36301 = cljs.core.nthnext.call(null,inst_36297,(1));
var inst_36302 = (inst_36300__$1 == null);
var inst_36303 = cljs.core.not.call(null,inst_36302);
var state_36317__$1 = (function (){var statearr_36323 = state_36317;
(statearr_36323[(7)] = inst_36301);

(statearr_36323[(10)] = inst_36300__$1);

return statearr_36323;
})();
if(inst_36303){
var statearr_36324_36339 = state_36317__$1;
(statearr_36324_36339[(1)] = (4));

} else {
var statearr_36325_36340 = state_36317__$1;
(statearr_36325_36340[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36318 === (1))){
var inst_36295 = cljs.core.nth.call(null,files,(0),null);
var inst_36296 = cljs.core.nthnext.call(null,files,(1));
var inst_36297 = files;
var state_36317__$1 = (function (){var statearr_36326 = state_36317;
(statearr_36326[(11)] = inst_36295);

(statearr_36326[(12)] = inst_36296);

(statearr_36326[(9)] = inst_36297);

return statearr_36326;
})();
var statearr_36327_36341 = state_36317__$1;
(statearr_36327_36341[(2)] = null);

(statearr_36327_36341[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__23370__auto___36335,out))
;
return ((function (switch__23314__auto__,c__23370__auto___36335,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto____0 = (function (){
var statearr_36331 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36331[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto__);

(statearr_36331[(1)] = (1));

return statearr_36331;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto____1 = (function (state_36317){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_36317);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e36332){if((e36332 instanceof Object)){
var ex__23318__auto__ = e36332;
var statearr_36333_36342 = state_36317;
(statearr_36333_36342[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36317);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36332;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36343 = state_36317;
state_36317 = G__36343;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___36335,out))
})();
var state__23372__auto__ = (function (){var statearr_36334 = f__23371__auto__.call(null);
(statearr_36334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___36335);

return statearr_36334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___36335,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__36344,p__36345){
var map__36348 = p__36344;
var map__36348__$1 = ((cljs.core.seq_QMARK_.call(null,map__36348))?cljs.core.apply.call(null,cljs.core.hash_map,map__36348):map__36348);
var opts = map__36348__$1;
var url_rewriter = cljs.core.get.call(null,map__36348__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__36349 = p__36345;
var map__36349__$1 = ((cljs.core.seq_QMARK_.call(null,map__36349))?cljs.core.apply.call(null,cljs.core.hash_map,map__36349):map__36349);
var file_msg = map__36349__$1;
var file = cljs.core.get.call(null,map__36349__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36350){
var map__36353 = p__36350;
var map__36353__$1 = ((cljs.core.seq_QMARK_.call(null,map__36353))?cljs.core.apply.call(null,cljs.core.hash_map,map__36353):map__36353);
var file = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var eval_body__$1 = cljs.core.get.call(null,map__36353__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
if(cljs.core.truth_((function (){var and__20276__auto__ = eval_body__$1;
if(cljs.core.truth_(and__20276__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__20276__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e36354){var e = e36354;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36359,p__36360){
var map__36561 = p__36359;
var map__36561__$1 = ((cljs.core.seq_QMARK_.call(null,map__36561))?cljs.core.apply.call(null,cljs.core.hash_map,map__36561):map__36561);
var opts = map__36561__$1;
var load_unchanged_files = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var on_jsload = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var before_jsload = cljs.core.get.call(null,map__36561__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var map__36562 = p__36360;
var map__36562__$1 = ((cljs.core.seq_QMARK_.call(null,map__36562))?cljs.core.apply.call(null,cljs.core.hash_map,map__36562):map__36562);
var msg = map__36562__$1;
var files = cljs.core.get.call(null,map__36562__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (state_36686){
var state_val_36687 = (state_36686[(1)]);
if((state_val_36687 === (7))){
var inst_36574 = (state_36686[(7)]);
var inst_36573 = (state_36686[(8)]);
var inst_36576 = (state_36686[(9)]);
var inst_36575 = (state_36686[(10)]);
var inst_36581 = cljs.core._nth.call(null,inst_36574,inst_36576);
var inst_36582 = figwheel.client.file_reloading.eval_body.call(null,inst_36581);
var inst_36583 = (inst_36576 + (1));
var tmp36688 = inst_36574;
var tmp36689 = inst_36573;
var tmp36690 = inst_36575;
var inst_36573__$1 = tmp36689;
var inst_36574__$1 = tmp36688;
var inst_36575__$1 = tmp36690;
var inst_36576__$1 = inst_36583;
var state_36686__$1 = (function (){var statearr_36691 = state_36686;
(statearr_36691[(7)] = inst_36574__$1);

(statearr_36691[(8)] = inst_36573__$1);

(statearr_36691[(9)] = inst_36576__$1);

(statearr_36691[(11)] = inst_36582);

(statearr_36691[(10)] = inst_36575__$1);

return statearr_36691;
})();
var statearr_36692_36761 = state_36686__$1;
(statearr_36692_36761[(2)] = null);

(statearr_36692_36761[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (20))){
var inst_36622 = (state_36686[(12)]);
var inst_36625 = (state_36686[(13)]);
var inst_36619 = (state_36686[(14)]);
var inst_36623 = (state_36686[(15)]);
var inst_36618 = (state_36686[(16)]);
var inst_36628 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36630 = (function (){var files_not_loaded = inst_36625;
var res = inst_36623;
var res_SINGLEQUOTE_ = inst_36622;
var files_SINGLEQUOTE_ = inst_36619;
var all_files = inst_36618;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36622,inst_36625,inst_36619,inst_36623,inst_36618,inst_36628,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (p__36629){
var map__36693 = p__36629;
var map__36693__$1 = ((cljs.core.seq_QMARK_.call(null,map__36693))?cljs.core.apply.call(null,cljs.core.hash_map,map__36693):map__36693);
var file = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var namespace = cljs.core.get.call(null,map__36693__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36622,inst_36625,inst_36619,inst_36623,inst_36618,inst_36628,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36631 = cljs.core.map.call(null,inst_36630,inst_36623);
var inst_36632 = cljs.core.pr_str.call(null,inst_36631);
var inst_36633 = figwheel.client.utils.log.call(null,inst_36632);
var inst_36634 = (function (){var files_not_loaded = inst_36625;
var res = inst_36623;
var res_SINGLEQUOTE_ = inst_36622;
var files_SINGLEQUOTE_ = inst_36619;
var all_files = inst_36618;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36622,inst_36625,inst_36619,inst_36623,inst_36618,inst_36628,inst_36630,inst_36631,inst_36632,inst_36633,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36622,inst_36625,inst_36619,inst_36623,inst_36618,inst_36628,inst_36630,inst_36631,inst_36632,inst_36633,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36635 = setTimeout(inst_36634,(10));
var state_36686__$1 = (function (){var statearr_36694 = state_36686;
(statearr_36694[(17)] = inst_36628);

(statearr_36694[(18)] = inst_36633);

return statearr_36694;
})();
var statearr_36695_36762 = state_36686__$1;
(statearr_36695_36762[(2)] = inst_36635);

(statearr_36695_36762[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (27))){
var inst_36645 = (state_36686[(19)]);
var state_36686__$1 = state_36686;
var statearr_36696_36763 = state_36686__$1;
(statearr_36696_36763[(2)] = inst_36645);

(statearr_36696_36763[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (1))){
var inst_36565 = (state_36686[(20)]);
var inst_36563 = before_jsload.call(null,files);
var inst_36564 = (function (){return ((function (inst_36565,inst_36563,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (p1__36355_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36355_SHARP_);
});
;})(inst_36565,inst_36563,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36565__$1 = cljs.core.filter.call(null,inst_36564,files);
var inst_36566 = cljs.core.not_empty.call(null,inst_36565__$1);
var state_36686__$1 = (function (){var statearr_36697 = state_36686;
(statearr_36697[(20)] = inst_36565__$1);

(statearr_36697[(21)] = inst_36563);

return statearr_36697;
})();
if(cljs.core.truth_(inst_36566)){
var statearr_36698_36764 = state_36686__$1;
(statearr_36698_36764[(1)] = (2));

} else {
var statearr_36699_36765 = state_36686__$1;
(statearr_36699_36765[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (24))){
var state_36686__$1 = state_36686;
var statearr_36700_36766 = state_36686__$1;
(statearr_36700_36766[(2)] = null);

(statearr_36700_36766[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (4))){
var inst_36610 = (state_36686[(2)]);
var inst_36611 = (function (){return ((function (inst_36610,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (p1__36356_SHARP_){
var and__20276__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36356_SHARP_);
if(cljs.core.truth_(and__20276__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36356_SHARP_));
} else {
return and__20276__auto__;
}
});
;})(inst_36610,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36612 = cljs.core.filter.call(null,inst_36611,files);
var state_36686__$1 = (function (){var statearr_36701 = state_36686;
(statearr_36701[(22)] = inst_36610);

(statearr_36701[(23)] = inst_36612);

return statearr_36701;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_36702_36767 = state_36686__$1;
(statearr_36702_36767[(1)] = (16));

} else {
var statearr_36703_36768 = state_36686__$1;
(statearr_36703_36768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (15))){
var inst_36600 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36704_36769 = state_36686__$1;
(statearr_36704_36769[(2)] = inst_36600);

(statearr_36704_36769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (21))){
var state_36686__$1 = state_36686;
var statearr_36705_36770 = state_36686__$1;
(statearr_36705_36770[(2)] = null);

(statearr_36705_36770[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (31))){
var inst_36653 = (state_36686[(24)]);
var inst_36663 = (state_36686[(2)]);
var inst_36664 = cljs.core.not_empty.call(null,inst_36653);
var state_36686__$1 = (function (){var statearr_36706 = state_36686;
(statearr_36706[(25)] = inst_36663);

return statearr_36706;
})();
if(cljs.core.truth_(inst_36664)){
var statearr_36707_36771 = state_36686__$1;
(statearr_36707_36771[(1)] = (32));

} else {
var statearr_36708_36772 = state_36686__$1;
(statearr_36708_36772[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (32))){
var inst_36653 = (state_36686[(24)]);
var inst_36666 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36653);
var inst_36667 = cljs.core.pr_str.call(null,inst_36666);
var inst_36668 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_36667)].join('');
var inst_36669 = figwheel.client.utils.log.call(null,inst_36668);
var state_36686__$1 = state_36686;
var statearr_36709_36773 = state_36686__$1;
(statearr_36709_36773[(2)] = inst_36669);

(statearr_36709_36773[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (33))){
var state_36686__$1 = state_36686;
var statearr_36710_36774 = state_36686__$1;
(statearr_36710_36774[(2)] = null);

(statearr_36710_36774[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (13))){
var inst_36586 = (state_36686[(26)]);
var inst_36590 = cljs.core.chunk_first.call(null,inst_36586);
var inst_36591 = cljs.core.chunk_rest.call(null,inst_36586);
var inst_36592 = cljs.core.count.call(null,inst_36590);
var inst_36573 = inst_36591;
var inst_36574 = inst_36590;
var inst_36575 = inst_36592;
var inst_36576 = (0);
var state_36686__$1 = (function (){var statearr_36711 = state_36686;
(statearr_36711[(7)] = inst_36574);

(statearr_36711[(8)] = inst_36573);

(statearr_36711[(9)] = inst_36576);

(statearr_36711[(10)] = inst_36575);

return statearr_36711;
})();
var statearr_36712_36775 = state_36686__$1;
(statearr_36712_36775[(2)] = null);

(statearr_36712_36775[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (22))){
var inst_36625 = (state_36686[(13)]);
var inst_36638 = (state_36686[(2)]);
var inst_36639 = cljs.core.not_empty.call(null,inst_36625);
var state_36686__$1 = (function (){var statearr_36713 = state_36686;
(statearr_36713[(27)] = inst_36638);

return statearr_36713;
})();
if(cljs.core.truth_(inst_36639)){
var statearr_36714_36776 = state_36686__$1;
(statearr_36714_36776[(1)] = (23));

} else {
var statearr_36715_36777 = state_36686__$1;
(statearr_36715_36777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (36))){
var state_36686__$1 = state_36686;
var statearr_36716_36778 = state_36686__$1;
(statearr_36716_36778[(2)] = null);

(statearr_36716_36778[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (29))){
var inst_36654 = (state_36686[(28)]);
var inst_36657 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36654);
var inst_36658 = cljs.core.pr_str.call(null,inst_36657);
var inst_36659 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_36658)].join('');
var inst_36660 = figwheel.client.utils.log.call(null,inst_36659);
var state_36686__$1 = state_36686;
var statearr_36717_36779 = state_36686__$1;
(statearr_36717_36779[(2)] = inst_36660);

(statearr_36717_36779[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (6))){
var inst_36607 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36718_36780 = state_36686__$1;
(statearr_36718_36780[(2)] = inst_36607);

(statearr_36718_36780[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (28))){
var inst_36654 = (state_36686[(28)]);
var inst_36651 = (state_36686[(2)]);
var inst_36652 = cljs.core.get.call(null,inst_36651,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36653 = cljs.core.get.call(null,inst_36651,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_36654__$1 = cljs.core.get.call(null,inst_36651,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36655 = cljs.core.not_empty.call(null,inst_36654__$1);
var state_36686__$1 = (function (){var statearr_36719 = state_36686;
(statearr_36719[(24)] = inst_36653);

(statearr_36719[(29)] = inst_36652);

(statearr_36719[(28)] = inst_36654__$1);

return statearr_36719;
})();
if(cljs.core.truth_(inst_36655)){
var statearr_36720_36781 = state_36686__$1;
(statearr_36720_36781[(1)] = (29));

} else {
var statearr_36721_36782 = state_36686__$1;
(statearr_36721_36782[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (25))){
var inst_36684 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36686__$1,inst_36684);
} else {
if((state_val_36687 === (34))){
var inst_36652 = (state_36686[(29)]);
var inst_36672 = (state_36686[(2)]);
var inst_36673 = cljs.core.not_empty.call(null,inst_36652);
var state_36686__$1 = (function (){var statearr_36722 = state_36686;
(statearr_36722[(30)] = inst_36672);

return statearr_36722;
})();
if(cljs.core.truth_(inst_36673)){
var statearr_36723_36783 = state_36686__$1;
(statearr_36723_36783[(1)] = (35));

} else {
var statearr_36724_36784 = state_36686__$1;
(statearr_36724_36784[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (17))){
var inst_36612 = (state_36686[(23)]);
var state_36686__$1 = state_36686;
var statearr_36725_36785 = state_36686__$1;
(statearr_36725_36785[(2)] = inst_36612);

(statearr_36725_36785[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (3))){
var state_36686__$1 = state_36686;
var statearr_36726_36786 = state_36686__$1;
(statearr_36726_36786[(2)] = null);

(statearr_36726_36786[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (12))){
var inst_36603 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36727_36787 = state_36686__$1;
(statearr_36727_36787[(2)] = inst_36603);

(statearr_36727_36787[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (2))){
var inst_36565 = (state_36686[(20)]);
var inst_36572 = cljs.core.seq.call(null,inst_36565);
var inst_36573 = inst_36572;
var inst_36574 = null;
var inst_36575 = (0);
var inst_36576 = (0);
var state_36686__$1 = (function (){var statearr_36728 = state_36686;
(statearr_36728[(7)] = inst_36574);

(statearr_36728[(8)] = inst_36573);

(statearr_36728[(9)] = inst_36576);

(statearr_36728[(10)] = inst_36575);

return statearr_36728;
})();
var statearr_36729_36788 = state_36686__$1;
(statearr_36729_36788[(2)] = null);

(statearr_36729_36788[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (23))){
var inst_36645 = (state_36686[(19)]);
var inst_36622 = (state_36686[(12)]);
var inst_36625 = (state_36686[(13)]);
var inst_36619 = (state_36686[(14)]);
var inst_36623 = (state_36686[(15)]);
var inst_36618 = (state_36686[(16)]);
var inst_36641 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36644 = (function (){var files_not_loaded = inst_36625;
var res = inst_36623;
var res_SINGLEQUOTE_ = inst_36622;
var files_SINGLEQUOTE_ = inst_36619;
var all_files = inst_36618;
return ((function (files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36645,inst_36622,inst_36625,inst_36619,inst_36623,inst_36618,inst_36641,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (p__36643){
var map__36730 = p__36643;
var map__36730__$1 = ((cljs.core.seq_QMARK_.call(null,map__36730))?cljs.core.apply.call(null,cljs.core.hash_map,map__36730):map__36730);
var meta_data = cljs.core.get.call(null,map__36730__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(files_not_loaded,res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36645,inst_36622,inst_36625,inst_36619,inst_36623,inst_36618,inst_36641,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36645__$1 = cljs.core.group_by.call(null,inst_36644,inst_36625);
var inst_36646 = cljs.core.seq_QMARK_.call(null,inst_36645__$1);
var state_36686__$1 = (function (){var statearr_36731 = state_36686;
(statearr_36731[(19)] = inst_36645__$1);

(statearr_36731[(31)] = inst_36641);

return statearr_36731;
})();
if(inst_36646){
var statearr_36732_36789 = state_36686__$1;
(statearr_36732_36789[(1)] = (26));

} else {
var statearr_36733_36790 = state_36686__$1;
(statearr_36733_36790[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (35))){
var inst_36652 = (state_36686[(29)]);
var inst_36675 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36652);
var inst_36676 = cljs.core.pr_str.call(null,inst_36675);
var inst_36677 = [cljs.core.str("not required: "),cljs.core.str(inst_36676)].join('');
var inst_36678 = figwheel.client.utils.log.call(null,inst_36677);
var state_36686__$1 = state_36686;
var statearr_36734_36791 = state_36686__$1;
(statearr_36734_36791[(2)] = inst_36678);

(statearr_36734_36791[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (19))){
var inst_36622 = (state_36686[(12)]);
var inst_36619 = (state_36686[(14)]);
var inst_36623 = (state_36686[(15)]);
var inst_36618 = (state_36686[(16)]);
var inst_36622__$1 = (state_36686[(2)]);
var inst_36623__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36622__$1);
var inst_36624 = (function (){var res = inst_36623__$1;
var res_SINGLEQUOTE_ = inst_36622__$1;
var files_SINGLEQUOTE_ = inst_36619;
var all_files = inst_36618;
return ((function (res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36622,inst_36619,inst_36623,inst_36618,inst_36622__$1,inst_36623__$1,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (p1__36358_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36358_SHARP_));
});
;})(res,res_SINGLEQUOTE_,files_SINGLEQUOTE_,all_files,inst_36622,inst_36619,inst_36623,inst_36618,inst_36622__$1,inst_36623__$1,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36625 = cljs.core.filter.call(null,inst_36624,inst_36622__$1);
var inst_36626 = cljs.core.not_empty.call(null,inst_36623__$1);
var state_36686__$1 = (function (){var statearr_36735 = state_36686;
(statearr_36735[(12)] = inst_36622__$1);

(statearr_36735[(13)] = inst_36625);

(statearr_36735[(15)] = inst_36623__$1);

return statearr_36735;
})();
if(cljs.core.truth_(inst_36626)){
var statearr_36736_36792 = state_36686__$1;
(statearr_36736_36792[(1)] = (20));

} else {
var statearr_36737_36793 = state_36686__$1;
(statearr_36737_36793[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (11))){
var state_36686__$1 = state_36686;
var statearr_36738_36794 = state_36686__$1;
(statearr_36738_36794[(2)] = null);

(statearr_36738_36794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (9))){
var inst_36605 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36739_36795 = state_36686__$1;
(statearr_36739_36795[(2)] = inst_36605);

(statearr_36739_36795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (5))){
var inst_36576 = (state_36686[(9)]);
var inst_36575 = (state_36686[(10)]);
var inst_36578 = (inst_36576 < inst_36575);
var inst_36579 = inst_36578;
var state_36686__$1 = state_36686;
if(cljs.core.truth_(inst_36579)){
var statearr_36740_36796 = state_36686__$1;
(statearr_36740_36796[(1)] = (7));

} else {
var statearr_36741_36797 = state_36686__$1;
(statearr_36741_36797[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (14))){
var inst_36586 = (state_36686[(26)]);
var inst_36595 = cljs.core.first.call(null,inst_36586);
var inst_36596 = figwheel.client.file_reloading.eval_body.call(null,inst_36595);
var inst_36597 = cljs.core.next.call(null,inst_36586);
var inst_36573 = inst_36597;
var inst_36574 = null;
var inst_36575 = (0);
var inst_36576 = (0);
var state_36686__$1 = (function (){var statearr_36742 = state_36686;
(statearr_36742[(7)] = inst_36574);

(statearr_36742[(8)] = inst_36573);

(statearr_36742[(9)] = inst_36576);

(statearr_36742[(32)] = inst_36596);

(statearr_36742[(10)] = inst_36575);

return statearr_36742;
})();
var statearr_36743_36798 = state_36686__$1;
(statearr_36743_36798[(2)] = null);

(statearr_36743_36798[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (26))){
var inst_36645 = (state_36686[(19)]);
var inst_36648 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36645);
var state_36686__$1 = state_36686;
var statearr_36744_36799 = state_36686__$1;
(statearr_36744_36799[(2)] = inst_36648);

(statearr_36744_36799[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (16))){
var inst_36612 = (state_36686[(23)]);
var inst_36614 = (function (){var all_files = inst_36612;
return ((function (all_files,inst_36612,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function (p1__36357_SHARP_){
return cljs.core.update_in.call(null,p1__36357_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_36612,state_val_36687,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var inst_36615 = cljs.core.map.call(null,inst_36614,inst_36612);
var state_36686__$1 = state_36686;
var statearr_36745_36800 = state_36686__$1;
(statearr_36745_36800[(2)] = inst_36615);

(statearr_36745_36800[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (30))){
var state_36686__$1 = state_36686;
var statearr_36746_36801 = state_36686__$1;
(statearr_36746_36801[(2)] = null);

(statearr_36746_36801[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (10))){
var inst_36586 = (state_36686[(26)]);
var inst_36588 = cljs.core.chunked_seq_QMARK_.call(null,inst_36586);
var state_36686__$1 = state_36686;
if(inst_36588){
var statearr_36747_36802 = state_36686__$1;
(statearr_36747_36802[(1)] = (13));

} else {
var statearr_36748_36803 = state_36686__$1;
(statearr_36748_36803[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (18))){
var inst_36619 = (state_36686[(14)]);
var inst_36618 = (state_36686[(16)]);
var inst_36618__$1 = (state_36686[(2)]);
var inst_36619__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_36618__$1);
var inst_36620 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36619__$1);
var state_36686__$1 = (function (){var statearr_36749 = state_36686;
(statearr_36749[(14)] = inst_36619__$1);

(statearr_36749[(16)] = inst_36618__$1);

return statearr_36749;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36686__$1,(19),inst_36620);
} else {
if((state_val_36687 === (37))){
var inst_36681 = (state_36686[(2)]);
var state_36686__$1 = state_36686;
var statearr_36750_36804 = state_36686__$1;
(statearr_36750_36804[(2)] = inst_36681);

(statearr_36750_36804[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36687 === (8))){
var inst_36573 = (state_36686[(8)]);
var inst_36586 = (state_36686[(26)]);
var inst_36586__$1 = cljs.core.seq.call(null,inst_36573);
var state_36686__$1 = (function (){var statearr_36751 = state_36686;
(statearr_36751[(26)] = inst_36586__$1);

return statearr_36751;
})();
if(inst_36586__$1){
var statearr_36752_36805 = state_36686__$1;
(statearr_36752_36805[(1)] = (10));

} else {
var statearr_36753_36806 = state_36686__$1;
(statearr_36753_36806[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
;
return ((function (switch__23314__auto__,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto____0 = (function (){
var statearr_36757 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36757[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto__);

(statearr_36757[(1)] = (1));

return statearr_36757;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto____1 = (function (state_36686){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_36686);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e36758){if((e36758 instanceof Object)){
var ex__23318__auto__ = e36758;
var statearr_36759_36807 = state_36686;
(statearr_36759_36807[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36686);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36808 = state_36686;
state_36686 = G__36808;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto__ = function(state_36686){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto____1.call(this,state_36686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
})();
var state__23372__auto__ = (function (){var statearr_36760 = f__23371__auto__.call(null);
(statearr_36760[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_36760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__,map__36561,map__36561__$1,opts,load_unchanged_files,on_jsload,before_jsload,map__36562,map__36562__$1,msg,files))
);

return c__23370__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36811,link){
var map__36813 = p__36811;
var map__36813__$1 = ((cljs.core.seq_QMARK_.call(null,map__36813))?cljs.core.apply.call(null,cljs.core.hash_map,map__36813):map__36813);
var file = cljs.core.get.call(null,map__36813__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4126__auto__ = link.href;
if(cljs.core.truth_(temp__4126__auto__)){
var link_href = temp__4126__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4126__auto__,map__36813,map__36813__$1,file){
return (function (p1__36809_SHARP_,p2__36810_SHARP_){
if(cljs.core._EQ_.call(null,p1__36809_SHARP_,p2__36810_SHARP_)){
return p1__36809_SHARP_;
} else {
return false;
}
});})(link_href,temp__4126__auto__,map__36813,map__36813__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36817){
var map__36818 = p__36817;
var map__36818__$1 = ((cljs.core.seq_QMARK_.call(null,map__36818))?cljs.core.apply.call(null,cljs.core.hash_map,map__36818):map__36818);
var current_url_length = cljs.core.get.call(null,map__36818__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
var match_length = cljs.core.get.call(null,map__36818__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36814_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36814_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4126__auto__)){
var res = temp__4126__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__36819){
var map__36821 = p__36819;
var map__36821__$1 = ((cljs.core.seq_QMARK_.call(null,map__36821))?cljs.core.apply.call(null,cljs.core.hash_map,map__36821):map__36821);
var f_data = map__36821__$1;
var request_url = cljs.core.get.call(null,map__36821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var file = cljs.core.get.call(null,map__36821__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4124__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4124__auto__)){
var link = temp__4124__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__20288__auto__ = request_url;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36822,files_msg){
var map__36844 = p__36822;
var map__36844__$1 = ((cljs.core.seq_QMARK_.call(null,map__36844))?cljs.core.apply.call(null,cljs.core.hash_map,map__36844):map__36844);
var opts = map__36844__$1;
var on_cssload = cljs.core.get.call(null,map__36844__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__36845_36865 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__36846_36866 = null;
var count__36847_36867 = (0);
var i__36848_36868 = (0);
while(true){
if((i__36848_36868 < count__36847_36867)){
var f_36869 = cljs.core._nth.call(null,chunk__36846_36866,i__36848_36868);
figwheel.client.file_reloading.reload_css_file.call(null,f_36869);

var G__36870 = seq__36845_36865;
var G__36871 = chunk__36846_36866;
var G__36872 = count__36847_36867;
var G__36873 = (i__36848_36868 + (1));
seq__36845_36865 = G__36870;
chunk__36846_36866 = G__36871;
count__36847_36867 = G__36872;
i__36848_36868 = G__36873;
continue;
} else {
var temp__4126__auto___36874 = cljs.core.seq.call(null,seq__36845_36865);
if(temp__4126__auto___36874){
var seq__36845_36875__$1 = temp__4126__auto___36874;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36845_36875__$1)){
var c__21075__auto___36876 = cljs.core.chunk_first.call(null,seq__36845_36875__$1);
var G__36877 = cljs.core.chunk_rest.call(null,seq__36845_36875__$1);
var G__36878 = c__21075__auto___36876;
var G__36879 = cljs.core.count.call(null,c__21075__auto___36876);
var G__36880 = (0);
seq__36845_36865 = G__36877;
chunk__36846_36866 = G__36878;
count__36847_36867 = G__36879;
i__36848_36868 = G__36880;
continue;
} else {
var f_36881 = cljs.core.first.call(null,seq__36845_36875__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_36881);

var G__36882 = cljs.core.next.call(null,seq__36845_36875__$1);
var G__36883 = null;
var G__36884 = (0);
var G__36885 = (0);
seq__36845_36865 = G__36882;
chunk__36846_36866 = G__36883;
count__36847_36867 = G__36884;
i__36848_36868 = G__36885;
continue;
}
} else {
}
}
break;
}

var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__,map__36844,map__36844__$1,opts,on_cssload){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__,map__36844,map__36844__$1,opts,on_cssload){
return (function (state_36855){
var state_val_36856 = (state_36855[(1)]);
if((state_val_36856 === (2))){
var inst_36851 = (state_36855[(2)]);
var inst_36852 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_36853 = on_cssload.call(null,inst_36852);
var state_36855__$1 = (function (){var statearr_36857 = state_36855;
(statearr_36857[(7)] = inst_36851);

return statearr_36857;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36855__$1,inst_36853);
} else {
if((state_val_36856 === (1))){
var inst_36849 = cljs.core.async.timeout.call(null,(100));
var state_36855__$1 = state_36855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36855__$1,(2),inst_36849);
} else {
return null;
}
}
});})(c__23370__auto__,map__36844,map__36844__$1,opts,on_cssload))
;
return ((function (switch__23314__auto__,c__23370__auto__,map__36844,map__36844__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto____0 = (function (){
var statearr_36861 = [null,null,null,null,null,null,null,null];
(statearr_36861[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto__);

(statearr_36861[(1)] = (1));

return statearr_36861;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto____1 = (function (state_36855){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_36855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e36862){if((e36862 instanceof Object)){
var ex__23318__auto__ = e36862;
var statearr_36863_36886 = state_36855;
(statearr_36863_36886[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36887 = state_36855;
state_36855 = G__36887;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto__ = function(state_36855){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto____1.call(this,state_36855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__,map__36844,map__36844__$1,opts,on_cssload))
})();
var state__23372__auto__ = (function (){var statearr_36864 = f__23371__auto__.call(null);
(statearr_36864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_36864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__,map__36844,map__36844__$1,opts,on_cssload))
);

return c__23370__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map