// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__34345_34349 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__34346_34350 = null;
var count__34347_34351 = (0);
var i__34348_34352 = (0);
while(true){
if((i__34348_34352 < count__34347_34351)){
var k_34353 = cljs.core._nth.call(null,chunk__34346_34350,i__34348_34352);
var v_34354 = (b[k_34353]);
(a[k_34353] = v_34354);

var G__34355 = seq__34345_34349;
var G__34356 = chunk__34346_34350;
var G__34357 = count__34347_34351;
var G__34358 = (i__34348_34352 + (1));
seq__34345_34349 = G__34355;
chunk__34346_34350 = G__34356;
count__34347_34351 = G__34357;
i__34348_34352 = G__34358;
continue;
} else {
var temp__4126__auto___34359 = cljs.core.seq.call(null,seq__34345_34349);
if(temp__4126__auto___34359){
var seq__34345_34360__$1 = temp__4126__auto___34359;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34345_34360__$1)){
var c__21075__auto___34361 = cljs.core.chunk_first.call(null,seq__34345_34360__$1);
var G__34362 = cljs.core.chunk_rest.call(null,seq__34345_34360__$1);
var G__34363 = c__21075__auto___34361;
var G__34364 = cljs.core.count.call(null,c__21075__auto___34361);
var G__34365 = (0);
seq__34345_34349 = G__34362;
chunk__34346_34350 = G__34363;
count__34347_34351 = G__34364;
i__34348_34352 = G__34365;
continue;
} else {
var k_34366 = cljs.core.first.call(null,seq__34345_34360__$1);
var v_34367 = (b[k_34366]);
(a[k_34366] = v_34367);

var G__34368 = cljs.core.next.call(null,seq__34345_34360__$1);
var G__34369 = null;
var G__34370 = (0);
var G__34371 = (0);
seq__34345_34349 = G__34368;
chunk__34346_34350 = G__34369;
count__34347_34351 = G__34370;
i__34348_34352 = G__34371;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function() {
var cognitect$transit$reader = null;
var cognitect$transit$reader__1 = (function (type){
return cognitect$transit$reader.call(null,type,null);
});
var cognitect$transit$reader__2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__34372 = (i + (2));
var G__34373 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__34372;
ret = G__34373;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$reader = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$reader__1.call(this,type);
case 2:
return cognitect$transit$reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$reader__1;
cognitect$transit$reader.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$reader__2;
return cognitect$transit$reader;
})()
;
/**
 * Read a transit encoded string into ClojureScript values given a
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34374_34378 = cljs.core.seq.call(null,v);
var chunk__34375_34379 = null;
var count__34376_34380 = (0);
var i__34377_34381 = (0);
while(true){
if((i__34377_34381 < count__34376_34380)){
var x_34382 = cljs.core._nth.call(null,chunk__34375_34379,i__34377_34381);
ret.push(x_34382);

var G__34383 = seq__34374_34378;
var G__34384 = chunk__34375_34379;
var G__34385 = count__34376_34380;
var G__34386 = (i__34377_34381 + (1));
seq__34374_34378 = G__34383;
chunk__34375_34379 = G__34384;
count__34376_34380 = G__34385;
i__34377_34381 = G__34386;
continue;
} else {
var temp__4126__auto___34387 = cljs.core.seq.call(null,seq__34374_34378);
if(temp__4126__auto___34387){
var seq__34374_34388__$1 = temp__4126__auto___34387;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34374_34388__$1)){
var c__21075__auto___34389 = cljs.core.chunk_first.call(null,seq__34374_34388__$1);
var G__34390 = cljs.core.chunk_rest.call(null,seq__34374_34388__$1);
var G__34391 = c__21075__auto___34389;
var G__34392 = cljs.core.count.call(null,c__21075__auto___34389);
var G__34393 = (0);
seq__34374_34378 = G__34390;
chunk__34375_34379 = G__34391;
count__34376_34380 = G__34392;
i__34377_34381 = G__34393;
continue;
} else {
var x_34394 = cljs.core.first.call(null,seq__34374_34388__$1);
ret.push(x_34394);

var G__34395 = cljs.core.next.call(null,seq__34374_34388__$1);
var G__34396 = null;
var G__34397 = (0);
var G__34398 = (0);
seq__34374_34378 = G__34395;
chunk__34375_34379 = G__34396;
count__34376_34380 = G__34397;
i__34377_34381 = G__34398;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34399_34403 = cljs.core.seq.call(null,v);
var chunk__34400_34404 = null;
var count__34401_34405 = (0);
var i__34402_34406 = (0);
while(true){
if((i__34402_34406 < count__34401_34405)){
var x_34407 = cljs.core._nth.call(null,chunk__34400_34404,i__34402_34406);
ret.push(x_34407);

var G__34408 = seq__34399_34403;
var G__34409 = chunk__34400_34404;
var G__34410 = count__34401_34405;
var G__34411 = (i__34402_34406 + (1));
seq__34399_34403 = G__34408;
chunk__34400_34404 = G__34409;
count__34401_34405 = G__34410;
i__34402_34406 = G__34411;
continue;
} else {
var temp__4126__auto___34412 = cljs.core.seq.call(null,seq__34399_34403);
if(temp__4126__auto___34412){
var seq__34399_34413__$1 = temp__4126__auto___34412;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34399_34413__$1)){
var c__21075__auto___34414 = cljs.core.chunk_first.call(null,seq__34399_34413__$1);
var G__34415 = cljs.core.chunk_rest.call(null,seq__34399_34413__$1);
var G__34416 = c__21075__auto___34414;
var G__34417 = cljs.core.count.call(null,c__21075__auto___34414);
var G__34418 = (0);
seq__34399_34403 = G__34415;
chunk__34400_34404 = G__34416;
count__34401_34405 = G__34417;
i__34402_34406 = G__34418;
continue;
} else {
var x_34419 = cljs.core.first.call(null,seq__34399_34413__$1);
ret.push(x_34419);

var G__34420 = cljs.core.next.call(null,seq__34399_34413__$1);
var G__34421 = null;
var G__34422 = (0);
var G__34423 = (0);
seq__34399_34403 = G__34420;
chunk__34400_34404 = G__34421;
count__34401_34405 = G__34422;
i__34402_34406 = G__34423;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__34424_34428 = cljs.core.seq.call(null,v);
var chunk__34425_34429 = null;
var count__34426_34430 = (0);
var i__34427_34431 = (0);
while(true){
if((i__34427_34431 < count__34426_34430)){
var x_34432 = cljs.core._nth.call(null,chunk__34425_34429,i__34427_34431);
ret.push(x_34432);

var G__34433 = seq__34424_34428;
var G__34434 = chunk__34425_34429;
var G__34435 = count__34426_34430;
var G__34436 = (i__34427_34431 + (1));
seq__34424_34428 = G__34433;
chunk__34425_34429 = G__34434;
count__34426_34430 = G__34435;
i__34427_34431 = G__34436;
continue;
} else {
var temp__4126__auto___34437 = cljs.core.seq.call(null,seq__34424_34428);
if(temp__4126__auto___34437){
var seq__34424_34438__$1 = temp__4126__auto___34437;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34424_34438__$1)){
var c__21075__auto___34439 = cljs.core.chunk_first.call(null,seq__34424_34438__$1);
var G__34440 = cljs.core.chunk_rest.call(null,seq__34424_34438__$1);
var G__34441 = c__21075__auto___34439;
var G__34442 = cljs.core.count.call(null,c__21075__auto___34439);
var G__34443 = (0);
seq__34424_34428 = G__34440;
chunk__34425_34429 = G__34441;
count__34426_34430 = G__34442;
i__34427_34431 = G__34443;
continue;
} else {
var x_34444 = cljs.core.first.call(null,seq__34424_34438__$1);
ret.push(x_34444);

var G__34445 = cljs.core.next.call(null,seq__34424_34438__$1);
var G__34446 = null;
var G__34447 = (0);
var G__34448 = (0);
seq__34424_34428 = G__34445;
chunk__34425_34429 = G__34446;
count__34426_34430 = G__34447;
i__34427_34431 = G__34448;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 * opts is a map containing a :handlers entry. :handlers is a map of
 * type constructors to handler instances.
 */
cognitect.transit.writer = (function() {
var cognitect$transit$writer = null;
var cognitect$transit$writer__1 = (function (type){
return cognitect$transit$writer.call(null,type,null);
});
var cognitect$transit$writer__2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x34458 = cljs.core.clone.call(null,handlers);
x34458.forEach = ((function (x34458,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__34459 = cljs.core.seq.call(null,coll);
var chunk__34460 = null;
var count__34461 = (0);
var i__34462 = (0);
while(true){
if((i__34462 < count__34461)){
var vec__34463 = cljs.core._nth.call(null,chunk__34460,i__34462);
var k = cljs.core.nth.call(null,vec__34463,(0),null);
var v = cljs.core.nth.call(null,vec__34463,(1),null);
f.call(null,v,k);

var G__34465 = seq__34459;
var G__34466 = chunk__34460;
var G__34467 = count__34461;
var G__34468 = (i__34462 + (1));
seq__34459 = G__34465;
chunk__34460 = G__34466;
count__34461 = G__34467;
i__34462 = G__34468;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__34459);
if(temp__4126__auto__){
var seq__34459__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34459__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__34459__$1);
var G__34469 = cljs.core.chunk_rest.call(null,seq__34459__$1);
var G__34470 = c__21075__auto__;
var G__34471 = cljs.core.count.call(null,c__21075__auto__);
var G__34472 = (0);
seq__34459 = G__34469;
chunk__34460 = G__34470;
count__34461 = G__34471;
i__34462 = G__34472;
continue;
} else {
var vec__34464 = cljs.core.first.call(null,seq__34459__$1);
var k = cljs.core.nth.call(null,vec__34464,(0),null);
var v = cljs.core.nth.call(null,vec__34464,(1),null);
f.call(null,v,k);

var G__34473 = cljs.core.next.call(null,seq__34459__$1);
var G__34474 = null;
var G__34475 = (0);
var G__34476 = (0);
seq__34459 = G__34473;
chunk__34460 = G__34474;
count__34461 = G__34475;
i__34462 = G__34476;
continue;
}
} else {
return null;
}
}
break;
}
});})(x34458,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x34458;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__34457 = obj;
G__34457.push(kfn.call(null,k),vfn.call(null,v));

return G__34457;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
cognitect$transit$writer = function(type,opts){
switch(arguments.length){
case 1:
return cognitect$transit$writer__1.call(this,type);
case 2:
return cognitect$transit$writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$1 = cognitect$transit$writer__1;
cognitect$transit$writer.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$writer__2;
return cognitect$transit$writer;
})()
;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function() {
var cognitect$transit$write_handler = null;
var cognitect$transit$write_handler__2 = (function (tag_fn,rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,null,null);
});
var cognitect$transit$write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect$transit$write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var cognitect$transit$write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t34480 !== 'undefined'){
} else {

/**
* @constructor
*/
cognitect.transit.t34480 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta34481){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta34481 = meta34481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t34480.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t34480.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t34480.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t34480.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t34480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34482){
var self__ = this;
var _34482__$1 = this;
return self__.meta34481;
});

cognitect.transit.t34480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34482,meta34481__$1){
var self__ = this;
var _34482__$1 = this;
return (new cognitect.transit.t34480(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta34481__$1));
});

cognitect.transit.t34480.cljs$lang$type = true;

cognitect.transit.t34480.cljs$lang$ctorStr = "cognitect.transit/t34480";

cognitect.transit.t34480.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cognitect.transit/t34480");
});

cognitect.transit.__GT_t34480 = (function cognitect$transit$write_handler_$___GT_t34480(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta34481){
return (new cognitect.transit.t34480(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta34481));
});

}

return (new cognitect.transit.t34480(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,cognitect$transit$write_handler,cljs.core.PersistentArrayMap.EMPTY));
});
cognitect$transit$write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return cognitect$transit$write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return cognitect$transit$write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return cognitect$transit$write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$2 = cognitect$transit$write_handler__2;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$3 = cognitect$transit$write_handler__3;
cognitect$transit$write_handler.cljs$core$IFn$_invoke$arity$4 = cognitect$transit$write_handler__4;
return cognitect$transit$write_handler;
})()
;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 * in the 53bit integer range, a goog.math.Long instance if above. s
 * may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.integer.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 * range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map