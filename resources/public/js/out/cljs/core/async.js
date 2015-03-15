// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t36934 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36934 = (function (f,fn_handler,meta36935){
this.f = f;
this.fn_handler = fn_handler;
this.meta36935 = meta36935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36934.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t36934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t36934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36936){
var self__ = this;
var _36936__$1 = this;
return self__.meta36935;
});

cljs.core.async.t36934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36936,meta36935__$1){
var self__ = this;
var _36936__$1 = this;
return (new cljs.core.async.t36934(self__.f,self__.fn_handler,meta36935__$1));
});

cljs.core.async.t36934.cljs$lang$type = true;

cljs.core.async.t36934.cljs$lang$ctorStr = "cljs.core.async/t36934";

cljs.core.async.t36934.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t36934");
});

cljs.core.async.__GT_t36934 = (function cljs$core$async$fn_handler_$___GT_t36934(f__$1,fn_handler__$1,meta36935){
return (new cljs.core.async.t36934(f__$1,fn_handler__$1,meta36935));
});

}

return (new cljs.core.async.t36934(f,cljs$core$async$fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__36938 = buff;
if(G__36938){
var bit__20969__auto__ = null;
if(cljs.core.truth_((function (){var or__20288__auto__ = bit__20969__auto__;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return G__36938.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__36938.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36938);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__36938);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_36939 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_36939);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_36939,ret){
return (function (){
return fn1.call(null,val_36939);
});})(val_36939,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__21175__auto___36940 = n;
var x_36941 = (0);
while(true){
if((x_36941 < n__21175__auto___36940)){
(a[x_36941] = (0));

var G__36942 = (x_36941 + (1));
x_36941 = G__36942;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__36943 = (i + (1));
i = G__36943;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t36947 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36947 = (function (flag,alt_flag,meta36948){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta36948 = meta36948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36947.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t36947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t36947.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_36949){
var self__ = this;
var _36949__$1 = this;
return self__.meta36948;
});})(flag))
;

cljs.core.async.t36947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_36949,meta36948__$1){
var self__ = this;
var _36949__$1 = this;
return (new cljs.core.async.t36947(self__.flag,self__.alt_flag,meta36948__$1));
});})(flag))
;

cljs.core.async.t36947.cljs$lang$type = true;

cljs.core.async.t36947.cljs$lang$ctorStr = "cljs.core.async/t36947";

cljs.core.async.t36947.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t36947");
});})(flag))
;

cljs.core.async.__GT_t36947 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t36947(flag__$1,alt_flag__$1,meta36948){
return (new cljs.core.async.t36947(flag__$1,alt_flag__$1,meta36948));
});})(flag))
;

}

return (new cljs.core.async.t36947(flag,cljs$core$async$alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t36953 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36953 = (function (cb,flag,alt_handler,meta36954){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta36954 = meta36954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36953.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t36953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t36953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t36953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36955){
var self__ = this;
var _36955__$1 = this;
return self__.meta36954;
});

cljs.core.async.t36953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36955,meta36954__$1){
var self__ = this;
var _36955__$1 = this;
return (new cljs.core.async.t36953(self__.cb,self__.flag,self__.alt_handler,meta36954__$1));
});

cljs.core.async.t36953.cljs$lang$type = true;

cljs.core.async.t36953.cljs$lang$ctorStr = "cljs.core.async/t36953";

cljs.core.async.t36953.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t36953");
});

cljs.core.async.__GT_t36953 = (function cljs$core$async$alt_handler_$___GT_t36953(cb__$1,flag__$1,alt_handler__$1,meta36954){
return (new cljs.core.async.t36953(cb__$1,flag__$1,alt_handler__$1,meta36954));
});

}

return (new cljs.core.async.t36953(cb,flag,cljs$core$async$alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36956_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36956_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__36957_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__36957_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__20288__auto__ = wport;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return port;
}
})()], null));
} else {
var G__36958 = (i + (1));
i = G__36958;
continue;
}
} else {
return null;
}
break;
}
})();
var or__20288__auto__ = ret;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__20276__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__20276__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__20276__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__36959){
var map__36961 = p__36959;
var map__36961__$1 = ((cljs.core.seq_QMARK_.call(null,map__36961))?cljs.core.apply.call(null,cljs.core.hash_map,map__36961):map__36961);
var opts = map__36961__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__36959 = null;
if (arguments.length > 1) {
var G__36962__i = 0, G__36962__a = new Array(arguments.length -  1);
while (G__36962__i < G__36962__a.length) {G__36962__a[G__36962__i] = arguments[G__36962__i + 1]; ++G__36962__i;}
  p__36959 = new cljs.core.IndexedSeq(G__36962__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__36959);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__36963){
var ports = cljs.core.first(arglist__36963);
var p__36959 = cljs.core.rest(arglist__36963);
return cljs$core$async$alts_BANG___delegate(ports,p__36959);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__23370__auto___37058 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___37058){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___37058){
return (function (state_37034){
var state_val_37035 = (state_37034[(1)]);
if((state_val_37035 === (7))){
var inst_37030 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37036_37059 = state_37034__$1;
(statearr_37036_37059[(2)] = inst_37030);

(statearr_37036_37059[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (1))){
var state_37034__$1 = state_37034;
var statearr_37037_37060 = state_37034__$1;
(statearr_37037_37060[(2)] = null);

(statearr_37037_37060[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (4))){
var inst_37013 = (state_37034[(7)]);
var inst_37013__$1 = (state_37034[(2)]);
var inst_37014 = (inst_37013__$1 == null);
var state_37034__$1 = (function (){var statearr_37038 = state_37034;
(statearr_37038[(7)] = inst_37013__$1);

return statearr_37038;
})();
if(cljs.core.truth_(inst_37014)){
var statearr_37039_37061 = state_37034__$1;
(statearr_37039_37061[(1)] = (5));

} else {
var statearr_37040_37062 = state_37034__$1;
(statearr_37040_37062[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (13))){
var state_37034__$1 = state_37034;
var statearr_37041_37063 = state_37034__$1;
(statearr_37041_37063[(2)] = null);

(statearr_37041_37063[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (6))){
var inst_37013 = (state_37034[(7)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37034__$1,(11),to,inst_37013);
} else {
if((state_val_37035 === (3))){
var inst_37032 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37034__$1,inst_37032);
} else {
if((state_val_37035 === (12))){
var state_37034__$1 = state_37034;
var statearr_37042_37064 = state_37034__$1;
(statearr_37042_37064[(2)] = null);

(statearr_37042_37064[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (2))){
var state_37034__$1 = state_37034;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37034__$1,(4),from);
} else {
if((state_val_37035 === (11))){
var inst_37023 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
if(cljs.core.truth_(inst_37023)){
var statearr_37043_37065 = state_37034__$1;
(statearr_37043_37065[(1)] = (12));

} else {
var statearr_37044_37066 = state_37034__$1;
(statearr_37044_37066[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (9))){
var state_37034__$1 = state_37034;
var statearr_37045_37067 = state_37034__$1;
(statearr_37045_37067[(2)] = null);

(statearr_37045_37067[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (5))){
var state_37034__$1 = state_37034;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37046_37068 = state_37034__$1;
(statearr_37046_37068[(1)] = (8));

} else {
var statearr_37047_37069 = state_37034__$1;
(statearr_37047_37069[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (14))){
var inst_37028 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37048_37070 = state_37034__$1;
(statearr_37048_37070[(2)] = inst_37028);

(statearr_37048_37070[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (10))){
var inst_37020 = (state_37034[(2)]);
var state_37034__$1 = state_37034;
var statearr_37049_37071 = state_37034__$1;
(statearr_37049_37071[(2)] = inst_37020);

(statearr_37049_37071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37035 === (8))){
var inst_37017 = cljs.core.async.close_BANG_.call(null,to);
var state_37034__$1 = state_37034;
var statearr_37050_37072 = state_37034__$1;
(statearr_37050_37072[(2)] = inst_37017);

(statearr_37050_37072[(1)] = (10));


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
});})(c__23370__auto___37058))
;
return ((function (switch__23314__auto__,c__23370__auto___37058){
return (function() {
var cljs$core$async$pipe_$_state_machine__23315__auto__ = null;
var cljs$core$async$pipe_$_state_machine__23315__auto____0 = (function (){
var statearr_37054 = [null,null,null,null,null,null,null,null];
(statearr_37054[(0)] = cljs$core$async$pipe_$_state_machine__23315__auto__);

(statearr_37054[(1)] = (1));

return statearr_37054;
});
var cljs$core$async$pipe_$_state_machine__23315__auto____1 = (function (state_37034){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37034);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37055){if((e37055 instanceof Object)){
var ex__23318__auto__ = e37055;
var statearr_37056_37073 = state_37034;
(statearr_37056_37073[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37034);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37074 = state_37034;
state_37034 = G__37074;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__23315__auto__ = function(state_37034){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__23315__auto____1.call(this,state_37034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__23315__auto____0;
cljs$core$async$pipe_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__23315__auto____1;
return cljs$core$async$pipe_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___37058))
})();
var state__23372__auto__ = (function (){var statearr_37057 = f__23371__auto__.call(null);
(statearr_37057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___37058);

return statearr_37057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___37058))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__37258){
var vec__37259 = p__37258;
var v = cljs.core.nth.call(null,vec__37259,(0),null);
var p = cljs.core.nth.call(null,vec__37259,(1),null);
var job = vec__37259;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__23370__auto___37441 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___37441,res,vec__37259,v,p,job,jobs,results){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___37441,res,vec__37259,v,p,job,jobs,results){
return (function (state_37264){
var state_val_37265 = (state_37264[(1)]);
if((state_val_37265 === (2))){
var inst_37261 = (state_37264[(2)]);
var inst_37262 = cljs.core.async.close_BANG_.call(null,res);
var state_37264__$1 = (function (){var statearr_37266 = state_37264;
(statearr_37266[(7)] = inst_37261);

return statearr_37266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37264__$1,inst_37262);
} else {
if((state_val_37265 === (1))){
var state_37264__$1 = state_37264;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37264__$1,(2),res,v);
} else {
return null;
}
}
});})(c__23370__auto___37441,res,vec__37259,v,p,job,jobs,results))
;
return ((function (switch__23314__auto__,c__23370__auto___37441,res,vec__37259,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0 = (function (){
var statearr_37270 = [null,null,null,null,null,null,null,null];
(statearr_37270[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__);

(statearr_37270[(1)] = (1));

return statearr_37270;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1 = (function (state_37264){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37264);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37271){if((e37271 instanceof Object)){
var ex__23318__auto__ = e37271;
var statearr_37272_37442 = state_37264;
(statearr_37272_37442[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37264);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37271;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37443 = state_37264;
state_37264 = G__37443;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = function(state_37264){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1.call(this,state_37264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___37441,res,vec__37259,v,p,job,jobs,results))
})();
var state__23372__auto__ = (function (){var statearr_37273 = f__23371__auto__.call(null);
(statearr_37273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___37441);

return statearr_37273;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___37441,res,vec__37259,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__37274){
var vec__37275 = p__37274;
var v = cljs.core.nth.call(null,vec__37275,(0),null);
var p = cljs.core.nth.call(null,vec__37275,(1),null);
var job = vec__37275;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__21175__auto___37444 = n;
var __37445 = (0);
while(true){
if((__37445 < n__21175__auto___37444)){
var G__37276_37446 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__37276_37446) {
case "async":
var c__23370__auto___37448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37445,c__23370__auto___37448,G__37276_37446,n__21175__auto___37444,jobs,results,process,async){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (__37445,c__23370__auto___37448,G__37276_37446,n__21175__auto___37444,jobs,results,process,async){
return (function (state_37289){
var state_val_37290 = (state_37289[(1)]);
if((state_val_37290 === (7))){
var inst_37285 = (state_37289[(2)]);
var state_37289__$1 = state_37289;
var statearr_37291_37449 = state_37289__$1;
(statearr_37291_37449[(2)] = inst_37285);

(statearr_37291_37449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (6))){
var state_37289__$1 = state_37289;
var statearr_37292_37450 = state_37289__$1;
(statearr_37292_37450[(2)] = null);

(statearr_37292_37450[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (5))){
var state_37289__$1 = state_37289;
var statearr_37293_37451 = state_37289__$1;
(statearr_37293_37451[(2)] = null);

(statearr_37293_37451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (4))){
var inst_37279 = (state_37289[(2)]);
var inst_37280 = async.call(null,inst_37279);
var state_37289__$1 = state_37289;
if(cljs.core.truth_(inst_37280)){
var statearr_37294_37452 = state_37289__$1;
(statearr_37294_37452[(1)] = (5));

} else {
var statearr_37295_37453 = state_37289__$1;
(statearr_37295_37453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37290 === (3))){
var inst_37287 = (state_37289[(2)]);
var state_37289__$1 = state_37289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37289__$1,inst_37287);
} else {
if((state_val_37290 === (2))){
var state_37289__$1 = state_37289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37289__$1,(4),jobs);
} else {
if((state_val_37290 === (1))){
var state_37289__$1 = state_37289;
var statearr_37296_37454 = state_37289__$1;
(statearr_37296_37454[(2)] = null);

(statearr_37296_37454[(1)] = (2));


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
});})(__37445,c__23370__auto___37448,G__37276_37446,n__21175__auto___37444,jobs,results,process,async))
;
return ((function (__37445,switch__23314__auto__,c__23370__auto___37448,G__37276_37446,n__21175__auto___37444,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0 = (function (){
var statearr_37300 = [null,null,null,null,null,null,null];
(statearr_37300[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__);

(statearr_37300[(1)] = (1));

return statearr_37300;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1 = (function (state_37289){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37301){if((e37301 instanceof Object)){
var ex__23318__auto__ = e37301;
var statearr_37302_37455 = state_37289;
(statearr_37302_37455[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37456 = state_37289;
state_37289 = G__37456;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = function(state_37289){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1.call(this,state_37289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__;
})()
;})(__37445,switch__23314__auto__,c__23370__auto___37448,G__37276_37446,n__21175__auto___37444,jobs,results,process,async))
})();
var state__23372__auto__ = (function (){var statearr_37303 = f__23371__auto__.call(null);
(statearr_37303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___37448);

return statearr_37303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(__37445,c__23370__auto___37448,G__37276_37446,n__21175__auto___37444,jobs,results,process,async))
);


break;
case "compute":
var c__23370__auto___37457 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__37445,c__23370__auto___37457,G__37276_37446,n__21175__auto___37444,jobs,results,process,async){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (__37445,c__23370__auto___37457,G__37276_37446,n__21175__auto___37444,jobs,results,process,async){
return (function (state_37316){
var state_val_37317 = (state_37316[(1)]);
if((state_val_37317 === (7))){
var inst_37312 = (state_37316[(2)]);
var state_37316__$1 = state_37316;
var statearr_37318_37458 = state_37316__$1;
(statearr_37318_37458[(2)] = inst_37312);

(statearr_37318_37458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37317 === (6))){
var state_37316__$1 = state_37316;
var statearr_37319_37459 = state_37316__$1;
(statearr_37319_37459[(2)] = null);

(statearr_37319_37459[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37317 === (5))){
var state_37316__$1 = state_37316;
var statearr_37320_37460 = state_37316__$1;
(statearr_37320_37460[(2)] = null);

(statearr_37320_37460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37317 === (4))){
var inst_37306 = (state_37316[(2)]);
var inst_37307 = process.call(null,inst_37306);
var state_37316__$1 = state_37316;
if(cljs.core.truth_(inst_37307)){
var statearr_37321_37461 = state_37316__$1;
(statearr_37321_37461[(1)] = (5));

} else {
var statearr_37322_37462 = state_37316__$1;
(statearr_37322_37462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37317 === (3))){
var inst_37314 = (state_37316[(2)]);
var state_37316__$1 = state_37316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37316__$1,inst_37314);
} else {
if((state_val_37317 === (2))){
var state_37316__$1 = state_37316;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37316__$1,(4),jobs);
} else {
if((state_val_37317 === (1))){
var state_37316__$1 = state_37316;
var statearr_37323_37463 = state_37316__$1;
(statearr_37323_37463[(2)] = null);

(statearr_37323_37463[(1)] = (2));


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
});})(__37445,c__23370__auto___37457,G__37276_37446,n__21175__auto___37444,jobs,results,process,async))
;
return ((function (__37445,switch__23314__auto__,c__23370__auto___37457,G__37276_37446,n__21175__auto___37444,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0 = (function (){
var statearr_37327 = [null,null,null,null,null,null,null];
(statearr_37327[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__);

(statearr_37327[(1)] = (1));

return statearr_37327;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1 = (function (state_37316){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37328){if((e37328 instanceof Object)){
var ex__23318__auto__ = e37328;
var statearr_37329_37464 = state_37316;
(statearr_37329_37464[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37465 = state_37316;
state_37316 = G__37465;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = function(state_37316){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1.call(this,state_37316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__;
})()
;})(__37445,switch__23314__auto__,c__23370__auto___37457,G__37276_37446,n__21175__auto___37444,jobs,results,process,async))
})();
var state__23372__auto__ = (function (){var statearr_37330 = f__23371__auto__.call(null);
(statearr_37330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___37457);

return statearr_37330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(__37445,c__23370__auto___37457,G__37276_37446,n__21175__auto___37444,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__37466 = (__37445 + (1));
__37445 = G__37466;
continue;
} else {
}
break;
}

var c__23370__auto___37467 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___37467,jobs,results,process,async){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___37467,jobs,results,process,async){
return (function (state_37352){
var state_val_37353 = (state_37352[(1)]);
if((state_val_37353 === (9))){
var inst_37345 = (state_37352[(2)]);
var state_37352__$1 = (function (){var statearr_37354 = state_37352;
(statearr_37354[(7)] = inst_37345);

return statearr_37354;
})();
var statearr_37355_37468 = state_37352__$1;
(statearr_37355_37468[(2)] = null);

(statearr_37355_37468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (8))){
var inst_37338 = (state_37352[(8)]);
var inst_37343 = (state_37352[(2)]);
var state_37352__$1 = (function (){var statearr_37356 = state_37352;
(statearr_37356[(9)] = inst_37343);

return statearr_37356;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37352__$1,(9),results,inst_37338);
} else {
if((state_val_37353 === (7))){
var inst_37348 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
var statearr_37357_37469 = state_37352__$1;
(statearr_37357_37469[(2)] = inst_37348);

(statearr_37357_37469[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (6))){
var inst_37333 = (state_37352[(10)]);
var inst_37338 = (state_37352[(8)]);
var inst_37338__$1 = cljs.core.async.chan.call(null,(1));
var inst_37339 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37340 = [inst_37333,inst_37338__$1];
var inst_37341 = (new cljs.core.PersistentVector(null,2,(5),inst_37339,inst_37340,null));
var state_37352__$1 = (function (){var statearr_37358 = state_37352;
(statearr_37358[(8)] = inst_37338__$1);

return statearr_37358;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37352__$1,(8),jobs,inst_37341);
} else {
if((state_val_37353 === (5))){
var inst_37336 = cljs.core.async.close_BANG_.call(null,jobs);
var state_37352__$1 = state_37352;
var statearr_37359_37470 = state_37352__$1;
(statearr_37359_37470[(2)] = inst_37336);

(statearr_37359_37470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (4))){
var inst_37333 = (state_37352[(10)]);
var inst_37333__$1 = (state_37352[(2)]);
var inst_37334 = (inst_37333__$1 == null);
var state_37352__$1 = (function (){var statearr_37360 = state_37352;
(statearr_37360[(10)] = inst_37333__$1);

return statearr_37360;
})();
if(cljs.core.truth_(inst_37334)){
var statearr_37361_37471 = state_37352__$1;
(statearr_37361_37471[(1)] = (5));

} else {
var statearr_37362_37472 = state_37352__$1;
(statearr_37362_37472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37353 === (3))){
var inst_37350 = (state_37352[(2)]);
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37352__$1,inst_37350);
} else {
if((state_val_37353 === (2))){
var state_37352__$1 = state_37352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37352__$1,(4),from);
} else {
if((state_val_37353 === (1))){
var state_37352__$1 = state_37352;
var statearr_37363_37473 = state_37352__$1;
(statearr_37363_37473[(2)] = null);

(statearr_37363_37473[(1)] = (2));


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
});})(c__23370__auto___37467,jobs,results,process,async))
;
return ((function (switch__23314__auto__,c__23370__auto___37467,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0 = (function (){
var statearr_37367 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37367[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__);

(statearr_37367[(1)] = (1));

return statearr_37367;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1 = (function (state_37352){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37368){if((e37368 instanceof Object)){
var ex__23318__auto__ = e37368;
var statearr_37369_37474 = state_37352;
(statearr_37369_37474[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37368;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37475 = state_37352;
state_37352 = G__37475;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = function(state_37352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1.call(this,state_37352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___37467,jobs,results,process,async))
})();
var state__23372__auto__ = (function (){var statearr_37370 = f__23371__auto__.call(null);
(statearr_37370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___37467);

return statearr_37370;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___37467,jobs,results,process,async))
);


var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__,jobs,results,process,async){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__,jobs,results,process,async){
return (function (state_37408){
var state_val_37409 = (state_37408[(1)]);
if((state_val_37409 === (7))){
var inst_37404 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
var statearr_37410_37476 = state_37408__$1;
(statearr_37410_37476[(2)] = inst_37404);

(statearr_37410_37476[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (20))){
var state_37408__$1 = state_37408;
var statearr_37411_37477 = state_37408__$1;
(statearr_37411_37477[(2)] = null);

(statearr_37411_37477[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (1))){
var state_37408__$1 = state_37408;
var statearr_37412_37478 = state_37408__$1;
(statearr_37412_37478[(2)] = null);

(statearr_37412_37478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (4))){
var inst_37373 = (state_37408[(7)]);
var inst_37373__$1 = (state_37408[(2)]);
var inst_37374 = (inst_37373__$1 == null);
var state_37408__$1 = (function (){var statearr_37413 = state_37408;
(statearr_37413[(7)] = inst_37373__$1);

return statearr_37413;
})();
if(cljs.core.truth_(inst_37374)){
var statearr_37414_37479 = state_37408__$1;
(statearr_37414_37479[(1)] = (5));

} else {
var statearr_37415_37480 = state_37408__$1;
(statearr_37415_37480[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (15))){
var inst_37386 = (state_37408[(8)]);
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37408__$1,(18),to,inst_37386);
} else {
if((state_val_37409 === (21))){
var inst_37399 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
var statearr_37416_37481 = state_37408__$1;
(statearr_37416_37481[(2)] = inst_37399);

(statearr_37416_37481[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (13))){
var inst_37401 = (state_37408[(2)]);
var state_37408__$1 = (function (){var statearr_37417 = state_37408;
(statearr_37417[(9)] = inst_37401);

return statearr_37417;
})();
var statearr_37418_37482 = state_37408__$1;
(statearr_37418_37482[(2)] = null);

(statearr_37418_37482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (6))){
var inst_37373 = (state_37408[(7)]);
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37408__$1,(11),inst_37373);
} else {
if((state_val_37409 === (17))){
var inst_37394 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
if(cljs.core.truth_(inst_37394)){
var statearr_37419_37483 = state_37408__$1;
(statearr_37419_37483[(1)] = (19));

} else {
var statearr_37420_37484 = state_37408__$1;
(statearr_37420_37484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (3))){
var inst_37406 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37408__$1,inst_37406);
} else {
if((state_val_37409 === (12))){
var inst_37383 = (state_37408[(10)]);
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37408__$1,(14),inst_37383);
} else {
if((state_val_37409 === (2))){
var state_37408__$1 = state_37408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37408__$1,(4),results);
} else {
if((state_val_37409 === (19))){
var state_37408__$1 = state_37408;
var statearr_37421_37485 = state_37408__$1;
(statearr_37421_37485[(2)] = null);

(statearr_37421_37485[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (11))){
var inst_37383 = (state_37408[(2)]);
var state_37408__$1 = (function (){var statearr_37422 = state_37408;
(statearr_37422[(10)] = inst_37383);

return statearr_37422;
})();
var statearr_37423_37486 = state_37408__$1;
(statearr_37423_37486[(2)] = null);

(statearr_37423_37486[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (9))){
var state_37408__$1 = state_37408;
var statearr_37424_37487 = state_37408__$1;
(statearr_37424_37487[(2)] = null);

(statearr_37424_37487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (5))){
var state_37408__$1 = state_37408;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37425_37488 = state_37408__$1;
(statearr_37425_37488[(1)] = (8));

} else {
var statearr_37426_37489 = state_37408__$1;
(statearr_37426_37489[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (14))){
var inst_37386 = (state_37408[(8)]);
var inst_37388 = (state_37408[(11)]);
var inst_37386__$1 = (state_37408[(2)]);
var inst_37387 = (inst_37386__$1 == null);
var inst_37388__$1 = cljs.core.not.call(null,inst_37387);
var state_37408__$1 = (function (){var statearr_37427 = state_37408;
(statearr_37427[(8)] = inst_37386__$1);

(statearr_37427[(11)] = inst_37388__$1);

return statearr_37427;
})();
if(inst_37388__$1){
var statearr_37428_37490 = state_37408__$1;
(statearr_37428_37490[(1)] = (15));

} else {
var statearr_37429_37491 = state_37408__$1;
(statearr_37429_37491[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (16))){
var inst_37388 = (state_37408[(11)]);
var state_37408__$1 = state_37408;
var statearr_37430_37492 = state_37408__$1;
(statearr_37430_37492[(2)] = inst_37388);

(statearr_37430_37492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (10))){
var inst_37380 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
var statearr_37431_37493 = state_37408__$1;
(statearr_37431_37493[(2)] = inst_37380);

(statearr_37431_37493[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (18))){
var inst_37391 = (state_37408[(2)]);
var state_37408__$1 = state_37408;
var statearr_37432_37494 = state_37408__$1;
(statearr_37432_37494[(2)] = inst_37391);

(statearr_37432_37494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37409 === (8))){
var inst_37377 = cljs.core.async.close_BANG_.call(null,to);
var state_37408__$1 = state_37408;
var statearr_37433_37495 = state_37408__$1;
(statearr_37433_37495[(2)] = inst_37377);

(statearr_37433_37495[(1)] = (10));


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
});})(c__23370__auto__,jobs,results,process,async))
;
return ((function (switch__23314__auto__,c__23370__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0 = (function (){
var statearr_37437 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37437[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__);

(statearr_37437[(1)] = (1));

return statearr_37437;
});
var cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1 = (function (state_37408){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37438){if((e37438 instanceof Object)){
var ex__23318__auto__ = e37438;
var statearr_37439_37496 = state_37408;
(statearr_37439_37496[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37438;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37497 = state_37408;
state_37408 = G__37497;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__ = function(state_37408){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1.call(this,state_37408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__23315__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__,jobs,results,process,async))
})();
var state__23372__auto__ = (function (){var statearr_37440 = f__23371__auto__.call(null);
(statearr_37440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_37440;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__,jobs,results,process,async))
);

return c__23370__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__23370__auto___37598 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___37598,tc,fc){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___37598,tc,fc){
return (function (state_37573){
var state_val_37574 = (state_37573[(1)]);
if((state_val_37574 === (7))){
var inst_37569 = (state_37573[(2)]);
var state_37573__$1 = state_37573;
var statearr_37575_37599 = state_37573__$1;
(statearr_37575_37599[(2)] = inst_37569);

(statearr_37575_37599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (1))){
var state_37573__$1 = state_37573;
var statearr_37576_37600 = state_37573__$1;
(statearr_37576_37600[(2)] = null);

(statearr_37576_37600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (4))){
var inst_37550 = (state_37573[(7)]);
var inst_37550__$1 = (state_37573[(2)]);
var inst_37551 = (inst_37550__$1 == null);
var state_37573__$1 = (function (){var statearr_37577 = state_37573;
(statearr_37577[(7)] = inst_37550__$1);

return statearr_37577;
})();
if(cljs.core.truth_(inst_37551)){
var statearr_37578_37601 = state_37573__$1;
(statearr_37578_37601[(1)] = (5));

} else {
var statearr_37579_37602 = state_37573__$1;
(statearr_37579_37602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (13))){
var state_37573__$1 = state_37573;
var statearr_37580_37603 = state_37573__$1;
(statearr_37580_37603[(2)] = null);

(statearr_37580_37603[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (6))){
var inst_37550 = (state_37573[(7)]);
var inst_37556 = p.call(null,inst_37550);
var state_37573__$1 = state_37573;
if(cljs.core.truth_(inst_37556)){
var statearr_37581_37604 = state_37573__$1;
(statearr_37581_37604[(1)] = (9));

} else {
var statearr_37582_37605 = state_37573__$1;
(statearr_37582_37605[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (3))){
var inst_37571 = (state_37573[(2)]);
var state_37573__$1 = state_37573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37573__$1,inst_37571);
} else {
if((state_val_37574 === (12))){
var state_37573__$1 = state_37573;
var statearr_37583_37606 = state_37573__$1;
(statearr_37583_37606[(2)] = null);

(statearr_37583_37606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (2))){
var state_37573__$1 = state_37573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37573__$1,(4),ch);
} else {
if((state_val_37574 === (11))){
var inst_37550 = (state_37573[(7)]);
var inst_37560 = (state_37573[(2)]);
var state_37573__$1 = state_37573;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37573__$1,(8),inst_37560,inst_37550);
} else {
if((state_val_37574 === (9))){
var state_37573__$1 = state_37573;
var statearr_37584_37607 = state_37573__$1;
(statearr_37584_37607[(2)] = tc);

(statearr_37584_37607[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (5))){
var inst_37553 = cljs.core.async.close_BANG_.call(null,tc);
var inst_37554 = cljs.core.async.close_BANG_.call(null,fc);
var state_37573__$1 = (function (){var statearr_37585 = state_37573;
(statearr_37585[(8)] = inst_37553);

return statearr_37585;
})();
var statearr_37586_37608 = state_37573__$1;
(statearr_37586_37608[(2)] = inst_37554);

(statearr_37586_37608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (14))){
var inst_37567 = (state_37573[(2)]);
var state_37573__$1 = state_37573;
var statearr_37587_37609 = state_37573__$1;
(statearr_37587_37609[(2)] = inst_37567);

(statearr_37587_37609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (10))){
var state_37573__$1 = state_37573;
var statearr_37588_37610 = state_37573__$1;
(statearr_37588_37610[(2)] = fc);

(statearr_37588_37610[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37574 === (8))){
var inst_37562 = (state_37573[(2)]);
var state_37573__$1 = state_37573;
if(cljs.core.truth_(inst_37562)){
var statearr_37589_37611 = state_37573__$1;
(statearr_37589_37611[(1)] = (12));

} else {
var statearr_37590_37612 = state_37573__$1;
(statearr_37590_37612[(1)] = (13));

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
});})(c__23370__auto___37598,tc,fc))
;
return ((function (switch__23314__auto__,c__23370__auto___37598,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__23315__auto__ = null;
var cljs$core$async$split_$_state_machine__23315__auto____0 = (function (){
var statearr_37594 = [null,null,null,null,null,null,null,null,null];
(statearr_37594[(0)] = cljs$core$async$split_$_state_machine__23315__auto__);

(statearr_37594[(1)] = (1));

return statearr_37594;
});
var cljs$core$async$split_$_state_machine__23315__auto____1 = (function (state_37573){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37595){if((e37595 instanceof Object)){
var ex__23318__auto__ = e37595;
var statearr_37596_37613 = state_37573;
(statearr_37596_37613[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37595;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37614 = state_37573;
state_37573 = G__37614;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__23315__auto__ = function(state_37573){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__23315__auto____1.call(this,state_37573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__23315__auto____0;
cljs$core$async$split_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__23315__auto____1;
return cljs$core$async$split_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___37598,tc,fc))
})();
var state__23372__auto__ = (function (){var statearr_37597 = f__23371__auto__.call(null);
(statearr_37597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___37598);

return statearr_37597;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___37598,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_37661){
var state_val_37662 = (state_37661[(1)]);
if((state_val_37662 === (7))){
var inst_37657 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
var statearr_37663_37679 = state_37661__$1;
(statearr_37663_37679[(2)] = inst_37657);

(statearr_37663_37679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (6))){
var inst_37650 = (state_37661[(7)]);
var inst_37647 = (state_37661[(8)]);
var inst_37654 = f.call(null,inst_37647,inst_37650);
var inst_37647__$1 = inst_37654;
var state_37661__$1 = (function (){var statearr_37664 = state_37661;
(statearr_37664[(8)] = inst_37647__$1);

return statearr_37664;
})();
var statearr_37665_37680 = state_37661__$1;
(statearr_37665_37680[(2)] = null);

(statearr_37665_37680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (5))){
var inst_37647 = (state_37661[(8)]);
var state_37661__$1 = state_37661;
var statearr_37666_37681 = state_37661__$1;
(statearr_37666_37681[(2)] = inst_37647);

(statearr_37666_37681[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (4))){
var inst_37650 = (state_37661[(7)]);
var inst_37650__$1 = (state_37661[(2)]);
var inst_37651 = (inst_37650__$1 == null);
var state_37661__$1 = (function (){var statearr_37667 = state_37661;
(statearr_37667[(7)] = inst_37650__$1);

return statearr_37667;
})();
if(cljs.core.truth_(inst_37651)){
var statearr_37668_37682 = state_37661__$1;
(statearr_37668_37682[(1)] = (5));

} else {
var statearr_37669_37683 = state_37661__$1;
(statearr_37669_37683[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37662 === (3))){
var inst_37659 = (state_37661[(2)]);
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37661__$1,inst_37659);
} else {
if((state_val_37662 === (2))){
var state_37661__$1 = state_37661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37661__$1,(4),ch);
} else {
if((state_val_37662 === (1))){
var inst_37647 = init;
var state_37661__$1 = (function (){var statearr_37670 = state_37661;
(statearr_37670[(8)] = inst_37647);

return statearr_37670;
})();
var statearr_37671_37684 = state_37661__$1;
(statearr_37671_37684[(2)] = null);

(statearr_37671_37684[(1)] = (2));


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
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__23315__auto__ = null;
var cljs$core$async$reduce_$_state_machine__23315__auto____0 = (function (){
var statearr_37675 = [null,null,null,null,null,null,null,null,null];
(statearr_37675[(0)] = cljs$core$async$reduce_$_state_machine__23315__auto__);

(statearr_37675[(1)] = (1));

return statearr_37675;
});
var cljs$core$async$reduce_$_state_machine__23315__auto____1 = (function (state_37661){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37676){if((e37676 instanceof Object)){
var ex__23318__auto__ = e37676;
var statearr_37677_37685 = state_37661;
(statearr_37677_37685[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37686 = state_37661;
state_37661 = G__37686;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__23315__auto__ = function(state_37661){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__23315__auto____1.call(this,state_37661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__23315__auto____0;
cljs$core$async$reduce_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__23315__auto____1;
return cljs$core$async$reduce_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_37678 = f__23371__auto__.call(null);
(statearr_37678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_37678;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_37760){
var state_val_37761 = (state_37760[(1)]);
if((state_val_37761 === (7))){
var inst_37742 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
var statearr_37762_37785 = state_37760__$1;
(statearr_37762_37785[(2)] = inst_37742);

(statearr_37762_37785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (1))){
var inst_37736 = cljs.core.seq.call(null,coll);
var inst_37737 = inst_37736;
var state_37760__$1 = (function (){var statearr_37763 = state_37760;
(statearr_37763[(7)] = inst_37737);

return statearr_37763;
})();
var statearr_37764_37786 = state_37760__$1;
(statearr_37764_37786[(2)] = null);

(statearr_37764_37786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (4))){
var inst_37737 = (state_37760[(7)]);
var inst_37740 = cljs.core.first.call(null,inst_37737);
var state_37760__$1 = state_37760;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37760__$1,(7),ch,inst_37740);
} else {
if((state_val_37761 === (13))){
var inst_37754 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
var statearr_37765_37787 = state_37760__$1;
(statearr_37765_37787[(2)] = inst_37754);

(statearr_37765_37787[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (6))){
var inst_37745 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
if(cljs.core.truth_(inst_37745)){
var statearr_37766_37788 = state_37760__$1;
(statearr_37766_37788[(1)] = (8));

} else {
var statearr_37767_37789 = state_37760__$1;
(statearr_37767_37789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (3))){
var inst_37758 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37760__$1,inst_37758);
} else {
if((state_val_37761 === (12))){
var state_37760__$1 = state_37760;
var statearr_37768_37790 = state_37760__$1;
(statearr_37768_37790[(2)] = null);

(statearr_37768_37790[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (2))){
var inst_37737 = (state_37760[(7)]);
var state_37760__$1 = state_37760;
if(cljs.core.truth_(inst_37737)){
var statearr_37769_37791 = state_37760__$1;
(statearr_37769_37791[(1)] = (4));

} else {
var statearr_37770_37792 = state_37760__$1;
(statearr_37770_37792[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (11))){
var inst_37751 = cljs.core.async.close_BANG_.call(null,ch);
var state_37760__$1 = state_37760;
var statearr_37771_37793 = state_37760__$1;
(statearr_37771_37793[(2)] = inst_37751);

(statearr_37771_37793[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (9))){
var state_37760__$1 = state_37760;
if(cljs.core.truth_(close_QMARK_)){
var statearr_37772_37794 = state_37760__$1;
(statearr_37772_37794[(1)] = (11));

} else {
var statearr_37773_37795 = state_37760__$1;
(statearr_37773_37795[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (5))){
var inst_37737 = (state_37760[(7)]);
var state_37760__$1 = state_37760;
var statearr_37774_37796 = state_37760__$1;
(statearr_37774_37796[(2)] = inst_37737);

(statearr_37774_37796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (10))){
var inst_37756 = (state_37760[(2)]);
var state_37760__$1 = state_37760;
var statearr_37775_37797 = state_37760__$1;
(statearr_37775_37797[(2)] = inst_37756);

(statearr_37775_37797[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37761 === (8))){
var inst_37737 = (state_37760[(7)]);
var inst_37747 = cljs.core.next.call(null,inst_37737);
var inst_37737__$1 = inst_37747;
var state_37760__$1 = (function (){var statearr_37776 = state_37760;
(statearr_37776[(7)] = inst_37737__$1);

return statearr_37776;
})();
var statearr_37777_37798 = state_37760__$1;
(statearr_37777_37798[(2)] = null);

(statearr_37777_37798[(1)] = (2));


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
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__23315__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__23315__auto____0 = (function (){
var statearr_37781 = [null,null,null,null,null,null,null,null];
(statearr_37781[(0)] = cljs$core$async$onto_chan_$_state_machine__23315__auto__);

(statearr_37781[(1)] = (1));

return statearr_37781;
});
var cljs$core$async$onto_chan_$_state_machine__23315__auto____1 = (function (state_37760){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_37760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e37782){if((e37782 instanceof Object)){
var ex__23318__auto__ = e37782;
var statearr_37783_37799 = state_37760;
(statearr_37783_37799[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37782;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37800 = state_37760;
state_37760 = G__37800;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__23315__auto__ = function(state_37760){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__23315__auto____1.call(this,state_37760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__23315__auto____0;
cljs$core$async$onto_chan_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__23315__auto____1;
return cljs$core$async$onto_chan_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_37784 = f__23371__auto__.call(null);
(statearr_37784[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_37784;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj37802 = {};
return obj37802;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__20276__auto__ = _;
if(and__20276__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__20276__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__20932__auto__ = (((_ == null))?null:_);
return (function (){var or__20288__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj37804 = {};
return obj37804;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t38026 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38026 = (function (cs,ch,mult,meta38027){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38027 = meta38027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38026.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t38026.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t38026.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t38026.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t38026.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t38026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38028){
var self__ = this;
var _38028__$1 = this;
return self__.meta38027;
});})(cs))
;

cljs.core.async.t38026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38028,meta38027__$1){
var self__ = this;
var _38028__$1 = this;
return (new cljs.core.async.t38026(self__.cs,self__.ch,self__.mult,meta38027__$1));
});})(cs))
;

cljs.core.async.t38026.cljs$lang$type = true;

cljs.core.async.t38026.cljs$lang$ctorStr = "cljs.core.async/t38026";

cljs.core.async.t38026.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t38026");
});})(cs))
;

cljs.core.async.__GT_t38026 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t38026(cs__$1,ch__$1,mult__$1,meta38027){
return (new cljs.core.async.t38026(cs__$1,ch__$1,mult__$1,meta38027));
});})(cs))
;

}

return (new cljs.core.async.t38026(cs,ch,cljs$core$async$mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__23370__auto___38247 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___38247,cs,m,dchan,dctr,done){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___38247,cs,m,dchan,dctr,done){
return (function (state_38159){
var state_val_38160 = (state_38159[(1)]);
if((state_val_38160 === (7))){
var inst_38155 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38161_38248 = state_38159__$1;
(statearr_38161_38248[(2)] = inst_38155);

(statearr_38161_38248[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (20))){
var inst_38060 = (state_38159[(7)]);
var inst_38070 = cljs.core.first.call(null,inst_38060);
var inst_38071 = cljs.core.nth.call(null,inst_38070,(0),null);
var inst_38072 = cljs.core.nth.call(null,inst_38070,(1),null);
var state_38159__$1 = (function (){var statearr_38162 = state_38159;
(statearr_38162[(8)] = inst_38071);

return statearr_38162;
})();
if(cljs.core.truth_(inst_38072)){
var statearr_38163_38249 = state_38159__$1;
(statearr_38163_38249[(1)] = (22));

} else {
var statearr_38164_38250 = state_38159__$1;
(statearr_38164_38250[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (27))){
var inst_38100 = (state_38159[(9)]);
var inst_38102 = (state_38159[(10)]);
var inst_38031 = (state_38159[(11)]);
var inst_38107 = (state_38159[(12)]);
var inst_38107__$1 = cljs.core._nth.call(null,inst_38100,inst_38102);
var inst_38108 = cljs.core.async.put_BANG_.call(null,inst_38107__$1,inst_38031,done);
var state_38159__$1 = (function (){var statearr_38165 = state_38159;
(statearr_38165[(12)] = inst_38107__$1);

return statearr_38165;
})();
if(cljs.core.truth_(inst_38108)){
var statearr_38166_38251 = state_38159__$1;
(statearr_38166_38251[(1)] = (30));

} else {
var statearr_38167_38252 = state_38159__$1;
(statearr_38167_38252[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (1))){
var state_38159__$1 = state_38159;
var statearr_38168_38253 = state_38159__$1;
(statearr_38168_38253[(2)] = null);

(statearr_38168_38253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (24))){
var inst_38060 = (state_38159[(7)]);
var inst_38077 = (state_38159[(2)]);
var inst_38078 = cljs.core.next.call(null,inst_38060);
var inst_38040 = inst_38078;
var inst_38041 = null;
var inst_38042 = (0);
var inst_38043 = (0);
var state_38159__$1 = (function (){var statearr_38169 = state_38159;
(statearr_38169[(13)] = inst_38042);

(statearr_38169[(14)] = inst_38041);

(statearr_38169[(15)] = inst_38040);

(statearr_38169[(16)] = inst_38043);

(statearr_38169[(17)] = inst_38077);

return statearr_38169;
})();
var statearr_38170_38254 = state_38159__$1;
(statearr_38170_38254[(2)] = null);

(statearr_38170_38254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (39))){
var state_38159__$1 = state_38159;
var statearr_38174_38255 = state_38159__$1;
(statearr_38174_38255[(2)] = null);

(statearr_38174_38255[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (4))){
var inst_38031 = (state_38159[(11)]);
var inst_38031__$1 = (state_38159[(2)]);
var inst_38032 = (inst_38031__$1 == null);
var state_38159__$1 = (function (){var statearr_38175 = state_38159;
(statearr_38175[(11)] = inst_38031__$1);

return statearr_38175;
})();
if(cljs.core.truth_(inst_38032)){
var statearr_38176_38256 = state_38159__$1;
(statearr_38176_38256[(1)] = (5));

} else {
var statearr_38177_38257 = state_38159__$1;
(statearr_38177_38257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (15))){
var inst_38042 = (state_38159[(13)]);
var inst_38041 = (state_38159[(14)]);
var inst_38040 = (state_38159[(15)]);
var inst_38043 = (state_38159[(16)]);
var inst_38056 = (state_38159[(2)]);
var inst_38057 = (inst_38043 + (1));
var tmp38171 = inst_38042;
var tmp38172 = inst_38041;
var tmp38173 = inst_38040;
var inst_38040__$1 = tmp38173;
var inst_38041__$1 = tmp38172;
var inst_38042__$1 = tmp38171;
var inst_38043__$1 = inst_38057;
var state_38159__$1 = (function (){var statearr_38178 = state_38159;
(statearr_38178[(13)] = inst_38042__$1);

(statearr_38178[(14)] = inst_38041__$1);

(statearr_38178[(15)] = inst_38040__$1);

(statearr_38178[(16)] = inst_38043__$1);

(statearr_38178[(18)] = inst_38056);

return statearr_38178;
})();
var statearr_38179_38258 = state_38159__$1;
(statearr_38179_38258[(2)] = null);

(statearr_38179_38258[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (21))){
var inst_38081 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38183_38259 = state_38159__$1;
(statearr_38183_38259[(2)] = inst_38081);

(statearr_38183_38259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (31))){
var inst_38107 = (state_38159[(12)]);
var inst_38111 = done.call(null,null);
var inst_38112 = cljs.core.async.untap_STAR_.call(null,m,inst_38107);
var state_38159__$1 = (function (){var statearr_38184 = state_38159;
(statearr_38184[(19)] = inst_38111);

return statearr_38184;
})();
var statearr_38185_38260 = state_38159__$1;
(statearr_38185_38260[(2)] = inst_38112);

(statearr_38185_38260[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (32))){
var inst_38100 = (state_38159[(9)]);
var inst_38102 = (state_38159[(10)]);
var inst_38101 = (state_38159[(20)]);
var inst_38099 = (state_38159[(21)]);
var inst_38114 = (state_38159[(2)]);
var inst_38115 = (inst_38102 + (1));
var tmp38180 = inst_38100;
var tmp38181 = inst_38101;
var tmp38182 = inst_38099;
var inst_38099__$1 = tmp38182;
var inst_38100__$1 = tmp38180;
var inst_38101__$1 = tmp38181;
var inst_38102__$1 = inst_38115;
var state_38159__$1 = (function (){var statearr_38186 = state_38159;
(statearr_38186[(9)] = inst_38100__$1);

(statearr_38186[(10)] = inst_38102__$1);

(statearr_38186[(20)] = inst_38101__$1);

(statearr_38186[(22)] = inst_38114);

(statearr_38186[(21)] = inst_38099__$1);

return statearr_38186;
})();
var statearr_38187_38261 = state_38159__$1;
(statearr_38187_38261[(2)] = null);

(statearr_38187_38261[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (40))){
var inst_38127 = (state_38159[(23)]);
var inst_38131 = done.call(null,null);
var inst_38132 = cljs.core.async.untap_STAR_.call(null,m,inst_38127);
var state_38159__$1 = (function (){var statearr_38188 = state_38159;
(statearr_38188[(24)] = inst_38131);

return statearr_38188;
})();
var statearr_38189_38262 = state_38159__$1;
(statearr_38189_38262[(2)] = inst_38132);

(statearr_38189_38262[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (33))){
var inst_38118 = (state_38159[(25)]);
var inst_38120 = cljs.core.chunked_seq_QMARK_.call(null,inst_38118);
var state_38159__$1 = state_38159;
if(inst_38120){
var statearr_38190_38263 = state_38159__$1;
(statearr_38190_38263[(1)] = (36));

} else {
var statearr_38191_38264 = state_38159__$1;
(statearr_38191_38264[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (13))){
var inst_38050 = (state_38159[(26)]);
var inst_38053 = cljs.core.async.close_BANG_.call(null,inst_38050);
var state_38159__$1 = state_38159;
var statearr_38192_38265 = state_38159__$1;
(statearr_38192_38265[(2)] = inst_38053);

(statearr_38192_38265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (22))){
var inst_38071 = (state_38159[(8)]);
var inst_38074 = cljs.core.async.close_BANG_.call(null,inst_38071);
var state_38159__$1 = state_38159;
var statearr_38193_38266 = state_38159__$1;
(statearr_38193_38266[(2)] = inst_38074);

(statearr_38193_38266[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (36))){
var inst_38118 = (state_38159[(25)]);
var inst_38122 = cljs.core.chunk_first.call(null,inst_38118);
var inst_38123 = cljs.core.chunk_rest.call(null,inst_38118);
var inst_38124 = cljs.core.count.call(null,inst_38122);
var inst_38099 = inst_38123;
var inst_38100 = inst_38122;
var inst_38101 = inst_38124;
var inst_38102 = (0);
var state_38159__$1 = (function (){var statearr_38194 = state_38159;
(statearr_38194[(9)] = inst_38100);

(statearr_38194[(10)] = inst_38102);

(statearr_38194[(20)] = inst_38101);

(statearr_38194[(21)] = inst_38099);

return statearr_38194;
})();
var statearr_38195_38267 = state_38159__$1;
(statearr_38195_38267[(2)] = null);

(statearr_38195_38267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (41))){
var inst_38118 = (state_38159[(25)]);
var inst_38134 = (state_38159[(2)]);
var inst_38135 = cljs.core.next.call(null,inst_38118);
var inst_38099 = inst_38135;
var inst_38100 = null;
var inst_38101 = (0);
var inst_38102 = (0);
var state_38159__$1 = (function (){var statearr_38196 = state_38159;
(statearr_38196[(9)] = inst_38100);

(statearr_38196[(10)] = inst_38102);

(statearr_38196[(27)] = inst_38134);

(statearr_38196[(20)] = inst_38101);

(statearr_38196[(21)] = inst_38099);

return statearr_38196;
})();
var statearr_38197_38268 = state_38159__$1;
(statearr_38197_38268[(2)] = null);

(statearr_38197_38268[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (43))){
var state_38159__$1 = state_38159;
var statearr_38198_38269 = state_38159__$1;
(statearr_38198_38269[(2)] = null);

(statearr_38198_38269[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (29))){
var inst_38143 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38199_38270 = state_38159__$1;
(statearr_38199_38270[(2)] = inst_38143);

(statearr_38199_38270[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (44))){
var inst_38152 = (state_38159[(2)]);
var state_38159__$1 = (function (){var statearr_38200 = state_38159;
(statearr_38200[(28)] = inst_38152);

return statearr_38200;
})();
var statearr_38201_38271 = state_38159__$1;
(statearr_38201_38271[(2)] = null);

(statearr_38201_38271[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (6))){
var inst_38091 = (state_38159[(29)]);
var inst_38090 = cljs.core.deref.call(null,cs);
var inst_38091__$1 = cljs.core.keys.call(null,inst_38090);
var inst_38092 = cljs.core.count.call(null,inst_38091__$1);
var inst_38093 = cljs.core.reset_BANG_.call(null,dctr,inst_38092);
var inst_38098 = cljs.core.seq.call(null,inst_38091__$1);
var inst_38099 = inst_38098;
var inst_38100 = null;
var inst_38101 = (0);
var inst_38102 = (0);
var state_38159__$1 = (function (){var statearr_38202 = state_38159;
(statearr_38202[(30)] = inst_38093);

(statearr_38202[(29)] = inst_38091__$1);

(statearr_38202[(9)] = inst_38100);

(statearr_38202[(10)] = inst_38102);

(statearr_38202[(20)] = inst_38101);

(statearr_38202[(21)] = inst_38099);

return statearr_38202;
})();
var statearr_38203_38272 = state_38159__$1;
(statearr_38203_38272[(2)] = null);

(statearr_38203_38272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (28))){
var inst_38099 = (state_38159[(21)]);
var inst_38118 = (state_38159[(25)]);
var inst_38118__$1 = cljs.core.seq.call(null,inst_38099);
var state_38159__$1 = (function (){var statearr_38204 = state_38159;
(statearr_38204[(25)] = inst_38118__$1);

return statearr_38204;
})();
if(inst_38118__$1){
var statearr_38205_38273 = state_38159__$1;
(statearr_38205_38273[(1)] = (33));

} else {
var statearr_38206_38274 = state_38159__$1;
(statearr_38206_38274[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (25))){
var inst_38102 = (state_38159[(10)]);
var inst_38101 = (state_38159[(20)]);
var inst_38104 = (inst_38102 < inst_38101);
var inst_38105 = inst_38104;
var state_38159__$1 = state_38159;
if(cljs.core.truth_(inst_38105)){
var statearr_38207_38275 = state_38159__$1;
(statearr_38207_38275[(1)] = (27));

} else {
var statearr_38208_38276 = state_38159__$1;
(statearr_38208_38276[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (34))){
var state_38159__$1 = state_38159;
var statearr_38209_38277 = state_38159__$1;
(statearr_38209_38277[(2)] = null);

(statearr_38209_38277[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (17))){
var state_38159__$1 = state_38159;
var statearr_38210_38278 = state_38159__$1;
(statearr_38210_38278[(2)] = null);

(statearr_38210_38278[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (3))){
var inst_38157 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38159__$1,inst_38157);
} else {
if((state_val_38160 === (12))){
var inst_38086 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38211_38279 = state_38159__$1;
(statearr_38211_38279[(2)] = inst_38086);

(statearr_38211_38279[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (2))){
var state_38159__$1 = state_38159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38159__$1,(4),ch);
} else {
if((state_val_38160 === (23))){
var state_38159__$1 = state_38159;
var statearr_38212_38280 = state_38159__$1;
(statearr_38212_38280[(2)] = null);

(statearr_38212_38280[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (35))){
var inst_38141 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38213_38281 = state_38159__$1;
(statearr_38213_38281[(2)] = inst_38141);

(statearr_38213_38281[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (19))){
var inst_38060 = (state_38159[(7)]);
var inst_38064 = cljs.core.chunk_first.call(null,inst_38060);
var inst_38065 = cljs.core.chunk_rest.call(null,inst_38060);
var inst_38066 = cljs.core.count.call(null,inst_38064);
var inst_38040 = inst_38065;
var inst_38041 = inst_38064;
var inst_38042 = inst_38066;
var inst_38043 = (0);
var state_38159__$1 = (function (){var statearr_38214 = state_38159;
(statearr_38214[(13)] = inst_38042);

(statearr_38214[(14)] = inst_38041);

(statearr_38214[(15)] = inst_38040);

(statearr_38214[(16)] = inst_38043);

return statearr_38214;
})();
var statearr_38215_38282 = state_38159__$1;
(statearr_38215_38282[(2)] = null);

(statearr_38215_38282[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (11))){
var inst_38060 = (state_38159[(7)]);
var inst_38040 = (state_38159[(15)]);
var inst_38060__$1 = cljs.core.seq.call(null,inst_38040);
var state_38159__$1 = (function (){var statearr_38216 = state_38159;
(statearr_38216[(7)] = inst_38060__$1);

return statearr_38216;
})();
if(inst_38060__$1){
var statearr_38217_38283 = state_38159__$1;
(statearr_38217_38283[(1)] = (16));

} else {
var statearr_38218_38284 = state_38159__$1;
(statearr_38218_38284[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (9))){
var inst_38088 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38219_38285 = state_38159__$1;
(statearr_38219_38285[(2)] = inst_38088);

(statearr_38219_38285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (5))){
var inst_38038 = cljs.core.deref.call(null,cs);
var inst_38039 = cljs.core.seq.call(null,inst_38038);
var inst_38040 = inst_38039;
var inst_38041 = null;
var inst_38042 = (0);
var inst_38043 = (0);
var state_38159__$1 = (function (){var statearr_38220 = state_38159;
(statearr_38220[(13)] = inst_38042);

(statearr_38220[(14)] = inst_38041);

(statearr_38220[(15)] = inst_38040);

(statearr_38220[(16)] = inst_38043);

return statearr_38220;
})();
var statearr_38221_38286 = state_38159__$1;
(statearr_38221_38286[(2)] = null);

(statearr_38221_38286[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (14))){
var state_38159__$1 = state_38159;
var statearr_38222_38287 = state_38159__$1;
(statearr_38222_38287[(2)] = null);

(statearr_38222_38287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (45))){
var inst_38149 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38223_38288 = state_38159__$1;
(statearr_38223_38288[(2)] = inst_38149);

(statearr_38223_38288[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (26))){
var inst_38091 = (state_38159[(29)]);
var inst_38145 = (state_38159[(2)]);
var inst_38146 = cljs.core.seq.call(null,inst_38091);
var state_38159__$1 = (function (){var statearr_38224 = state_38159;
(statearr_38224[(31)] = inst_38145);

return statearr_38224;
})();
if(inst_38146){
var statearr_38225_38289 = state_38159__$1;
(statearr_38225_38289[(1)] = (42));

} else {
var statearr_38226_38290 = state_38159__$1;
(statearr_38226_38290[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (16))){
var inst_38060 = (state_38159[(7)]);
var inst_38062 = cljs.core.chunked_seq_QMARK_.call(null,inst_38060);
var state_38159__$1 = state_38159;
if(inst_38062){
var statearr_38227_38291 = state_38159__$1;
(statearr_38227_38291[(1)] = (19));

} else {
var statearr_38228_38292 = state_38159__$1;
(statearr_38228_38292[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (38))){
var inst_38138 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38229_38293 = state_38159__$1;
(statearr_38229_38293[(2)] = inst_38138);

(statearr_38229_38293[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (30))){
var state_38159__$1 = state_38159;
var statearr_38230_38294 = state_38159__$1;
(statearr_38230_38294[(2)] = null);

(statearr_38230_38294[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (10))){
var inst_38041 = (state_38159[(14)]);
var inst_38043 = (state_38159[(16)]);
var inst_38049 = cljs.core._nth.call(null,inst_38041,inst_38043);
var inst_38050 = cljs.core.nth.call(null,inst_38049,(0),null);
var inst_38051 = cljs.core.nth.call(null,inst_38049,(1),null);
var state_38159__$1 = (function (){var statearr_38231 = state_38159;
(statearr_38231[(26)] = inst_38050);

return statearr_38231;
})();
if(cljs.core.truth_(inst_38051)){
var statearr_38232_38295 = state_38159__$1;
(statearr_38232_38295[(1)] = (13));

} else {
var statearr_38233_38296 = state_38159__$1;
(statearr_38233_38296[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (18))){
var inst_38084 = (state_38159[(2)]);
var state_38159__$1 = state_38159;
var statearr_38234_38297 = state_38159__$1;
(statearr_38234_38297[(2)] = inst_38084);

(statearr_38234_38297[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (42))){
var state_38159__$1 = state_38159;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38159__$1,(45),dchan);
} else {
if((state_val_38160 === (37))){
var inst_38127 = (state_38159[(23)]);
var inst_38031 = (state_38159[(11)]);
var inst_38118 = (state_38159[(25)]);
var inst_38127__$1 = cljs.core.first.call(null,inst_38118);
var inst_38128 = cljs.core.async.put_BANG_.call(null,inst_38127__$1,inst_38031,done);
var state_38159__$1 = (function (){var statearr_38235 = state_38159;
(statearr_38235[(23)] = inst_38127__$1);

return statearr_38235;
})();
if(cljs.core.truth_(inst_38128)){
var statearr_38236_38298 = state_38159__$1;
(statearr_38236_38298[(1)] = (39));

} else {
var statearr_38237_38299 = state_38159__$1;
(statearr_38237_38299[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38160 === (8))){
var inst_38042 = (state_38159[(13)]);
var inst_38043 = (state_38159[(16)]);
var inst_38045 = (inst_38043 < inst_38042);
var inst_38046 = inst_38045;
var state_38159__$1 = state_38159;
if(cljs.core.truth_(inst_38046)){
var statearr_38238_38300 = state_38159__$1;
(statearr_38238_38300[(1)] = (10));

} else {
var statearr_38239_38301 = state_38159__$1;
(statearr_38239_38301[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__23370__auto___38247,cs,m,dchan,dctr,done))
;
return ((function (switch__23314__auto__,c__23370__auto___38247,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__23315__auto__ = null;
var cljs$core$async$mult_$_state_machine__23315__auto____0 = (function (){
var statearr_38243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38243[(0)] = cljs$core$async$mult_$_state_machine__23315__auto__);

(statearr_38243[(1)] = (1));

return statearr_38243;
});
var cljs$core$async$mult_$_state_machine__23315__auto____1 = (function (state_38159){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_38159);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e38244){if((e38244 instanceof Object)){
var ex__23318__auto__ = e38244;
var statearr_38245_38302 = state_38159;
(statearr_38245_38302[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38303 = state_38159;
state_38159 = G__38303;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__23315__auto__ = function(state_38159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__23315__auto____1.call(this,state_38159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__23315__auto____0;
cljs$core$async$mult_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__23315__auto____1;
return cljs$core$async$mult_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___38247,cs,m,dchan,dctr,done))
})();
var state__23372__auto__ = (function (){var statearr_38246 = f__23371__auto__.call(null);
(statearr_38246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___38247);

return statearr_38246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___38247,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj38305 = {};
return obj38305;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__20276__auto__ = m;
if(and__20276__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__20276__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__20932__auto__ = (((m == null))?null:m);
return (function (){var or__20288__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__38306){
var map__38311 = p__38306;
var map__38311__$1 = ((cljs.core.seq_QMARK_.call(null,map__38311))?cljs.core.apply.call(null,cljs.core.hash_map,map__38311):map__38311);
var opts = map__38311__$1;
var statearr_38312_38315 = state;
(statearr_38312_38315[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__38311,map__38311__$1,opts){
return (function (val){
var statearr_38313_38316 = state;
(statearr_38313_38316[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__38311,map__38311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_38314_38317 = state;
(statearr_38314_38317[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__38306 = null;
if (arguments.length > 3) {
var G__38318__i = 0, G__38318__a = new Array(arguments.length -  3);
while (G__38318__i < G__38318__a.length) {G__38318__a[G__38318__i] = arguments[G__38318__i + 3]; ++G__38318__i;}
  p__38306 = new cljs.core.IndexedSeq(G__38318__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__38306);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__38319){
var state = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var cont_block = cljs.core.first(arglist__38319);
arglist__38319 = cljs.core.next(arglist__38319);
var ports = cljs.core.first(arglist__38319);
var p__38306 = cljs.core.rest(arglist__38319);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__38306);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t38439 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38439 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38440){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta38440 = meta38440;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38439.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t38439.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38441){
var self__ = this;
var _38441__$1 = this;
return self__.meta38440;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38441,meta38440__$1){
var self__ = this;
var _38441__$1 = this;
return (new cljs.core.async.t38439(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38440__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t38439.cljs$lang$type = true;

cljs.core.async.t38439.cljs$lang$ctorStr = "cljs.core.async/t38439";

cljs.core.async.t38439.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t38439");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t38439 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t38439(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38440){
return (new cljs.core.async.t38439(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38440));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t38439(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23370__auto___38558 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___38558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___38558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_38511){
var state_val_38512 = (state_38511[(1)]);
if((state_val_38512 === (7))){
var inst_38455 = (state_38511[(7)]);
var inst_38460 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38455);
var state_38511__$1 = state_38511;
var statearr_38513_38559 = state_38511__$1;
(statearr_38513_38559[(2)] = inst_38460);

(statearr_38513_38559[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (20))){
var inst_38470 = (state_38511[(8)]);
var state_38511__$1 = state_38511;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38511__$1,(23),out,inst_38470);
} else {
if((state_val_38512 === (1))){
var inst_38445 = (state_38511[(9)]);
var inst_38445__$1 = calc_state.call(null);
var inst_38446 = cljs.core.seq_QMARK_.call(null,inst_38445__$1);
var state_38511__$1 = (function (){var statearr_38514 = state_38511;
(statearr_38514[(9)] = inst_38445__$1);

return statearr_38514;
})();
if(inst_38446){
var statearr_38515_38560 = state_38511__$1;
(statearr_38515_38560[(1)] = (2));

} else {
var statearr_38516_38561 = state_38511__$1;
(statearr_38516_38561[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (24))){
var inst_38463 = (state_38511[(10)]);
var inst_38455 = inst_38463;
var state_38511__$1 = (function (){var statearr_38517 = state_38511;
(statearr_38517[(7)] = inst_38455);

return statearr_38517;
})();
var statearr_38518_38562 = state_38511__$1;
(statearr_38518_38562[(2)] = null);

(statearr_38518_38562[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (4))){
var inst_38445 = (state_38511[(9)]);
var inst_38451 = (state_38511[(2)]);
var inst_38452 = cljs.core.get.call(null,inst_38451,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38453 = cljs.core.get.call(null,inst_38451,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38454 = cljs.core.get.call(null,inst_38451,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_38455 = inst_38445;
var state_38511__$1 = (function (){var statearr_38519 = state_38511;
(statearr_38519[(11)] = inst_38452);

(statearr_38519[(12)] = inst_38453);

(statearr_38519[(13)] = inst_38454);

(statearr_38519[(7)] = inst_38455);

return statearr_38519;
})();
var statearr_38520_38563 = state_38511__$1;
(statearr_38520_38563[(2)] = null);

(statearr_38520_38563[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (15))){
var state_38511__$1 = state_38511;
var statearr_38521_38564 = state_38511__$1;
(statearr_38521_38564[(2)] = null);

(statearr_38521_38564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (21))){
var inst_38463 = (state_38511[(10)]);
var inst_38455 = inst_38463;
var state_38511__$1 = (function (){var statearr_38522 = state_38511;
(statearr_38522[(7)] = inst_38455);

return statearr_38522;
})();
var statearr_38523_38565 = state_38511__$1;
(statearr_38523_38565[(2)] = null);

(statearr_38523_38565[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (13))){
var inst_38507 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
var statearr_38524_38566 = state_38511__$1;
(statearr_38524_38566[(2)] = inst_38507);

(statearr_38524_38566[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (22))){
var inst_38505 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
var statearr_38525_38567 = state_38511__$1;
(statearr_38525_38567[(2)] = inst_38505);

(statearr_38525_38567[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (6))){
var inst_38509 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38511__$1,inst_38509);
} else {
if((state_val_38512 === (25))){
var state_38511__$1 = state_38511;
var statearr_38526_38568 = state_38511__$1;
(statearr_38526_38568[(2)] = null);

(statearr_38526_38568[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (17))){
var inst_38485 = (state_38511[(14)]);
var state_38511__$1 = state_38511;
var statearr_38527_38569 = state_38511__$1;
(statearr_38527_38569[(2)] = inst_38485);

(statearr_38527_38569[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (3))){
var inst_38445 = (state_38511[(9)]);
var state_38511__$1 = state_38511;
var statearr_38528_38570 = state_38511__$1;
(statearr_38528_38570[(2)] = inst_38445);

(statearr_38528_38570[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (12))){
var inst_38466 = (state_38511[(15)]);
var inst_38485 = (state_38511[(14)]);
var inst_38471 = (state_38511[(16)]);
var inst_38485__$1 = inst_38466.call(null,inst_38471);
var state_38511__$1 = (function (){var statearr_38529 = state_38511;
(statearr_38529[(14)] = inst_38485__$1);

return statearr_38529;
})();
if(cljs.core.truth_(inst_38485__$1)){
var statearr_38530_38571 = state_38511__$1;
(statearr_38530_38571[(1)] = (17));

} else {
var statearr_38531_38572 = state_38511__$1;
(statearr_38531_38572[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (2))){
var inst_38445 = (state_38511[(9)]);
var inst_38448 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38445);
var state_38511__$1 = state_38511;
var statearr_38532_38573 = state_38511__$1;
(statearr_38532_38573[(2)] = inst_38448);

(statearr_38532_38573[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (23))){
var inst_38496 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
if(cljs.core.truth_(inst_38496)){
var statearr_38533_38574 = state_38511__$1;
(statearr_38533_38574[(1)] = (24));

} else {
var statearr_38534_38575 = state_38511__$1;
(statearr_38534_38575[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (19))){
var inst_38493 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
if(cljs.core.truth_(inst_38493)){
var statearr_38535_38576 = state_38511__$1;
(statearr_38535_38576[(1)] = (20));

} else {
var statearr_38536_38577 = state_38511__$1;
(statearr_38536_38577[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (11))){
var inst_38470 = (state_38511[(8)]);
var inst_38476 = (inst_38470 == null);
var state_38511__$1 = state_38511;
if(cljs.core.truth_(inst_38476)){
var statearr_38537_38578 = state_38511__$1;
(statearr_38537_38578[(1)] = (14));

} else {
var statearr_38538_38579 = state_38511__$1;
(statearr_38538_38579[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (9))){
var inst_38463 = (state_38511[(10)]);
var inst_38463__$1 = (state_38511[(2)]);
var inst_38464 = cljs.core.get.call(null,inst_38463__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_38465 = cljs.core.get.call(null,inst_38463__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_38466 = cljs.core.get.call(null,inst_38463__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_38511__$1 = (function (){var statearr_38539 = state_38511;
(statearr_38539[(17)] = inst_38465);

(statearr_38539[(15)] = inst_38466);

(statearr_38539[(10)] = inst_38463__$1);

return statearr_38539;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_38511__$1,(10),inst_38464);
} else {
if((state_val_38512 === (5))){
var inst_38455 = (state_38511[(7)]);
var inst_38458 = cljs.core.seq_QMARK_.call(null,inst_38455);
var state_38511__$1 = state_38511;
if(inst_38458){
var statearr_38540_38580 = state_38511__$1;
(statearr_38540_38580[(1)] = (7));

} else {
var statearr_38541_38581 = state_38511__$1;
(statearr_38541_38581[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (14))){
var inst_38471 = (state_38511[(16)]);
var inst_38478 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38471);
var state_38511__$1 = state_38511;
var statearr_38542_38582 = state_38511__$1;
(statearr_38542_38582[(2)] = inst_38478);

(statearr_38542_38582[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (26))){
var inst_38501 = (state_38511[(2)]);
var state_38511__$1 = state_38511;
var statearr_38543_38583 = state_38511__$1;
(statearr_38543_38583[(2)] = inst_38501);

(statearr_38543_38583[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (16))){
var inst_38481 = (state_38511[(2)]);
var inst_38482 = calc_state.call(null);
var inst_38455 = inst_38482;
var state_38511__$1 = (function (){var statearr_38544 = state_38511;
(statearr_38544[(18)] = inst_38481);

(statearr_38544[(7)] = inst_38455);

return statearr_38544;
})();
var statearr_38545_38584 = state_38511__$1;
(statearr_38545_38584[(2)] = null);

(statearr_38545_38584[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (10))){
var inst_38470 = (state_38511[(8)]);
var inst_38471 = (state_38511[(16)]);
var inst_38469 = (state_38511[(2)]);
var inst_38470__$1 = cljs.core.nth.call(null,inst_38469,(0),null);
var inst_38471__$1 = cljs.core.nth.call(null,inst_38469,(1),null);
var inst_38472 = (inst_38470__$1 == null);
var inst_38473 = cljs.core._EQ_.call(null,inst_38471__$1,change);
var inst_38474 = (inst_38472) || (inst_38473);
var state_38511__$1 = (function (){var statearr_38546 = state_38511;
(statearr_38546[(8)] = inst_38470__$1);

(statearr_38546[(16)] = inst_38471__$1);

return statearr_38546;
})();
if(cljs.core.truth_(inst_38474)){
var statearr_38547_38585 = state_38511__$1;
(statearr_38547_38585[(1)] = (11));

} else {
var statearr_38548_38586 = state_38511__$1;
(statearr_38548_38586[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (18))){
var inst_38465 = (state_38511[(17)]);
var inst_38466 = (state_38511[(15)]);
var inst_38471 = (state_38511[(16)]);
var inst_38488 = cljs.core.empty_QMARK_.call(null,inst_38466);
var inst_38489 = inst_38465.call(null,inst_38471);
var inst_38490 = cljs.core.not.call(null,inst_38489);
var inst_38491 = (inst_38488) && (inst_38490);
var state_38511__$1 = state_38511;
var statearr_38549_38587 = state_38511__$1;
(statearr_38549_38587[(2)] = inst_38491);

(statearr_38549_38587[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38512 === (8))){
var inst_38455 = (state_38511[(7)]);
var state_38511__$1 = state_38511;
var statearr_38550_38588 = state_38511__$1;
(statearr_38550_38588[(2)] = inst_38455);

(statearr_38550_38588[(1)] = (9));


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
});})(c__23370__auto___38558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__23314__auto__,c__23370__auto___38558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__23315__auto__ = null;
var cljs$core$async$mix_$_state_machine__23315__auto____0 = (function (){
var statearr_38554 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38554[(0)] = cljs$core$async$mix_$_state_machine__23315__auto__);

(statearr_38554[(1)] = (1));

return statearr_38554;
});
var cljs$core$async$mix_$_state_machine__23315__auto____1 = (function (state_38511){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_38511);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e38555){if((e38555 instanceof Object)){
var ex__23318__auto__ = e38555;
var statearr_38556_38589 = state_38511;
(statearr_38556_38589[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38511);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38590 = state_38511;
state_38511 = G__38590;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__23315__auto__ = function(state_38511){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__23315__auto____1.call(this,state_38511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__23315__auto____0;
cljs$core$async$mix_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__23315__auto____1;
return cljs$core$async$mix_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___38558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__23372__auto__ = (function (){var statearr_38557 = f__23371__auto__.call(null);
(statearr_38557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___38558);

return statearr_38557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___38558,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj38592 = {};
return obj38592;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__20276__auto__ = p;
if(and__20276__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__20276__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__20932__auto__ = (((p == null))?null:p);
return (function (){var or__20288__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__20276__auto__ = p;
if(and__20276__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__20276__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__20932__auto__ = (((p == null))?null:p);
return (function (){var or__20288__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__20276__auto__ = p;
if(and__20276__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__20276__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__20932__auto__ = (((p == null))?null:p);
return (function (){var or__20288__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__20276__auto__ = p;
if(and__20276__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__20276__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__20932__auto__ = (((p == null))?null:p);
return (function (){var or__20288__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__20932__auto__)]);
if(or__20288__auto__){
return or__20288__auto__;
} else {
var or__20288__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__20288__auto____$1){
return or__20288__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__20288__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__20288__auto__,mults){
return (function (p1__38593_SHARP_){
if(cljs.core.truth_(p1__38593_SHARP_.call(null,topic))){
return p1__38593_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__38593_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__20288__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t38716 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38716 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38717){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38717 = meta38717;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38716.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t38716.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t38716.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t38716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t38716.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t38716.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t38716.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t38716.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38718){
var self__ = this;
var _38718__$1 = this;
return self__.meta38717;
});})(mults,ensure_mult))
;

cljs.core.async.t38716.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38718,meta38717__$1){
var self__ = this;
var _38718__$1 = this;
return (new cljs.core.async.t38716(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38717__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t38716.cljs$lang$type = true;

cljs.core.async.t38716.cljs$lang$ctorStr = "cljs.core.async/t38716";

cljs.core.async.t38716.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t38716");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t38716 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t38716(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38717){
return (new cljs.core.async.t38716(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38717));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t38716(ensure_mult,mults,buf_fn,topic_fn,ch,cljs$core$async$pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__23370__auto___38838 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___38838,mults,ensure_mult,p){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___38838,mults,ensure_mult,p){
return (function (state_38790){
var state_val_38791 = (state_38790[(1)]);
if((state_val_38791 === (7))){
var inst_38786 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38792_38839 = state_38790__$1;
(statearr_38792_38839[(2)] = inst_38786);

(statearr_38792_38839[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (20))){
var state_38790__$1 = state_38790;
var statearr_38793_38840 = state_38790__$1;
(statearr_38793_38840[(2)] = null);

(statearr_38793_38840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (1))){
var state_38790__$1 = state_38790;
var statearr_38794_38841 = state_38790__$1;
(statearr_38794_38841[(2)] = null);

(statearr_38794_38841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (24))){
var inst_38769 = (state_38790[(7)]);
var inst_38778 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38769);
var state_38790__$1 = state_38790;
var statearr_38795_38842 = state_38790__$1;
(statearr_38795_38842[(2)] = inst_38778);

(statearr_38795_38842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (4))){
var inst_38721 = (state_38790[(8)]);
var inst_38721__$1 = (state_38790[(2)]);
var inst_38722 = (inst_38721__$1 == null);
var state_38790__$1 = (function (){var statearr_38796 = state_38790;
(statearr_38796[(8)] = inst_38721__$1);

return statearr_38796;
})();
if(cljs.core.truth_(inst_38722)){
var statearr_38797_38843 = state_38790__$1;
(statearr_38797_38843[(1)] = (5));

} else {
var statearr_38798_38844 = state_38790__$1;
(statearr_38798_38844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (15))){
var inst_38763 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38799_38845 = state_38790__$1;
(statearr_38799_38845[(2)] = inst_38763);

(statearr_38799_38845[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (21))){
var inst_38783 = (state_38790[(2)]);
var state_38790__$1 = (function (){var statearr_38800 = state_38790;
(statearr_38800[(9)] = inst_38783);

return statearr_38800;
})();
var statearr_38801_38846 = state_38790__$1;
(statearr_38801_38846[(2)] = null);

(statearr_38801_38846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (13))){
var inst_38745 = (state_38790[(10)]);
var inst_38747 = cljs.core.chunked_seq_QMARK_.call(null,inst_38745);
var state_38790__$1 = state_38790;
if(inst_38747){
var statearr_38802_38847 = state_38790__$1;
(statearr_38802_38847[(1)] = (16));

} else {
var statearr_38803_38848 = state_38790__$1;
(statearr_38803_38848[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (22))){
var inst_38775 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38775)){
var statearr_38804_38849 = state_38790__$1;
(statearr_38804_38849[(1)] = (23));

} else {
var statearr_38805_38850 = state_38790__$1;
(statearr_38805_38850[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (6))){
var inst_38769 = (state_38790[(7)]);
var inst_38721 = (state_38790[(8)]);
var inst_38771 = (state_38790[(11)]);
var inst_38769__$1 = topic_fn.call(null,inst_38721);
var inst_38770 = cljs.core.deref.call(null,mults);
var inst_38771__$1 = cljs.core.get.call(null,inst_38770,inst_38769__$1);
var state_38790__$1 = (function (){var statearr_38806 = state_38790;
(statearr_38806[(7)] = inst_38769__$1);

(statearr_38806[(11)] = inst_38771__$1);

return statearr_38806;
})();
if(cljs.core.truth_(inst_38771__$1)){
var statearr_38807_38851 = state_38790__$1;
(statearr_38807_38851[(1)] = (19));

} else {
var statearr_38808_38852 = state_38790__$1;
(statearr_38808_38852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (25))){
var inst_38780 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38809_38853 = state_38790__$1;
(statearr_38809_38853[(2)] = inst_38780);

(statearr_38809_38853[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (17))){
var inst_38745 = (state_38790[(10)]);
var inst_38754 = cljs.core.first.call(null,inst_38745);
var inst_38755 = cljs.core.async.muxch_STAR_.call(null,inst_38754);
var inst_38756 = cljs.core.async.close_BANG_.call(null,inst_38755);
var inst_38757 = cljs.core.next.call(null,inst_38745);
var inst_38731 = inst_38757;
var inst_38732 = null;
var inst_38733 = (0);
var inst_38734 = (0);
var state_38790__$1 = (function (){var statearr_38810 = state_38790;
(statearr_38810[(12)] = inst_38756);

(statearr_38810[(13)] = inst_38731);

(statearr_38810[(14)] = inst_38732);

(statearr_38810[(15)] = inst_38733);

(statearr_38810[(16)] = inst_38734);

return statearr_38810;
})();
var statearr_38811_38854 = state_38790__$1;
(statearr_38811_38854[(2)] = null);

(statearr_38811_38854[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (3))){
var inst_38788 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38790__$1,inst_38788);
} else {
if((state_val_38791 === (12))){
var inst_38765 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38812_38855 = state_38790__$1;
(statearr_38812_38855[(2)] = inst_38765);

(statearr_38812_38855[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (2))){
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38790__$1,(4),ch);
} else {
if((state_val_38791 === (23))){
var state_38790__$1 = state_38790;
var statearr_38813_38856 = state_38790__$1;
(statearr_38813_38856[(2)] = null);

(statearr_38813_38856[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (19))){
var inst_38721 = (state_38790[(8)]);
var inst_38771 = (state_38790[(11)]);
var inst_38773 = cljs.core.async.muxch_STAR_.call(null,inst_38771);
var state_38790__$1 = state_38790;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38790__$1,(22),inst_38773,inst_38721);
} else {
if((state_val_38791 === (11))){
var inst_38745 = (state_38790[(10)]);
var inst_38731 = (state_38790[(13)]);
var inst_38745__$1 = cljs.core.seq.call(null,inst_38731);
var state_38790__$1 = (function (){var statearr_38814 = state_38790;
(statearr_38814[(10)] = inst_38745__$1);

return statearr_38814;
})();
if(inst_38745__$1){
var statearr_38815_38857 = state_38790__$1;
(statearr_38815_38857[(1)] = (13));

} else {
var statearr_38816_38858 = state_38790__$1;
(statearr_38816_38858[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (9))){
var inst_38767 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38817_38859 = state_38790__$1;
(statearr_38817_38859[(2)] = inst_38767);

(statearr_38817_38859[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (5))){
var inst_38728 = cljs.core.deref.call(null,mults);
var inst_38729 = cljs.core.vals.call(null,inst_38728);
var inst_38730 = cljs.core.seq.call(null,inst_38729);
var inst_38731 = inst_38730;
var inst_38732 = null;
var inst_38733 = (0);
var inst_38734 = (0);
var state_38790__$1 = (function (){var statearr_38818 = state_38790;
(statearr_38818[(13)] = inst_38731);

(statearr_38818[(14)] = inst_38732);

(statearr_38818[(15)] = inst_38733);

(statearr_38818[(16)] = inst_38734);

return statearr_38818;
})();
var statearr_38819_38860 = state_38790__$1;
(statearr_38819_38860[(2)] = null);

(statearr_38819_38860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (14))){
var state_38790__$1 = state_38790;
var statearr_38823_38861 = state_38790__$1;
(statearr_38823_38861[(2)] = null);

(statearr_38823_38861[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (16))){
var inst_38745 = (state_38790[(10)]);
var inst_38749 = cljs.core.chunk_first.call(null,inst_38745);
var inst_38750 = cljs.core.chunk_rest.call(null,inst_38745);
var inst_38751 = cljs.core.count.call(null,inst_38749);
var inst_38731 = inst_38750;
var inst_38732 = inst_38749;
var inst_38733 = inst_38751;
var inst_38734 = (0);
var state_38790__$1 = (function (){var statearr_38824 = state_38790;
(statearr_38824[(13)] = inst_38731);

(statearr_38824[(14)] = inst_38732);

(statearr_38824[(15)] = inst_38733);

(statearr_38824[(16)] = inst_38734);

return statearr_38824;
})();
var statearr_38825_38862 = state_38790__$1;
(statearr_38825_38862[(2)] = null);

(statearr_38825_38862[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (10))){
var inst_38731 = (state_38790[(13)]);
var inst_38732 = (state_38790[(14)]);
var inst_38733 = (state_38790[(15)]);
var inst_38734 = (state_38790[(16)]);
var inst_38739 = cljs.core._nth.call(null,inst_38732,inst_38734);
var inst_38740 = cljs.core.async.muxch_STAR_.call(null,inst_38739);
var inst_38741 = cljs.core.async.close_BANG_.call(null,inst_38740);
var inst_38742 = (inst_38734 + (1));
var tmp38820 = inst_38731;
var tmp38821 = inst_38732;
var tmp38822 = inst_38733;
var inst_38731__$1 = tmp38820;
var inst_38732__$1 = tmp38821;
var inst_38733__$1 = tmp38822;
var inst_38734__$1 = inst_38742;
var state_38790__$1 = (function (){var statearr_38826 = state_38790;
(statearr_38826[(17)] = inst_38741);

(statearr_38826[(13)] = inst_38731__$1);

(statearr_38826[(14)] = inst_38732__$1);

(statearr_38826[(15)] = inst_38733__$1);

(statearr_38826[(16)] = inst_38734__$1);

return statearr_38826;
})();
var statearr_38827_38863 = state_38790__$1;
(statearr_38827_38863[(2)] = null);

(statearr_38827_38863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (18))){
var inst_38760 = (state_38790[(2)]);
var state_38790__$1 = state_38790;
var statearr_38828_38864 = state_38790__$1;
(statearr_38828_38864[(2)] = inst_38760);

(statearr_38828_38864[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38791 === (8))){
var inst_38733 = (state_38790[(15)]);
var inst_38734 = (state_38790[(16)]);
var inst_38736 = (inst_38734 < inst_38733);
var inst_38737 = inst_38736;
var state_38790__$1 = state_38790;
if(cljs.core.truth_(inst_38737)){
var statearr_38829_38865 = state_38790__$1;
(statearr_38829_38865[(1)] = (10));

} else {
var statearr_38830_38866 = state_38790__$1;
(statearr_38830_38866[(1)] = (11));

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
});})(c__23370__auto___38838,mults,ensure_mult,p))
;
return ((function (switch__23314__auto__,c__23370__auto___38838,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__23315__auto__ = null;
var cljs$core$async$pub_$_state_machine__23315__auto____0 = (function (){
var statearr_38834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38834[(0)] = cljs$core$async$pub_$_state_machine__23315__auto__);

(statearr_38834[(1)] = (1));

return statearr_38834;
});
var cljs$core$async$pub_$_state_machine__23315__auto____1 = (function (state_38790){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_38790);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e38835){if((e38835 instanceof Object)){
var ex__23318__auto__ = e38835;
var statearr_38836_38867 = state_38790;
(statearr_38836_38867[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38790);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38835;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38868 = state_38790;
state_38790 = G__38868;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__23315__auto__ = function(state_38790){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__23315__auto____1.call(this,state_38790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__23315__auto____0;
cljs$core$async$pub_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__23315__auto____1;
return cljs$core$async$pub_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___38838,mults,ensure_mult,p))
})();
var state__23372__auto__ = (function (){var statearr_38837 = f__23371__auto__.call(null);
(statearr_38837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___38838);

return statearr_38837;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___38838,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__23370__auto___39005 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_38975){
var state_val_38976 = (state_38975[(1)]);
if((state_val_38976 === (7))){
var state_38975__$1 = state_38975;
var statearr_38977_39006 = state_38975__$1;
(statearr_38977_39006[(2)] = null);

(statearr_38977_39006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (1))){
var state_38975__$1 = state_38975;
var statearr_38978_39007 = state_38975__$1;
(statearr_38978_39007[(2)] = null);

(statearr_38978_39007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (4))){
var inst_38939 = (state_38975[(7)]);
var inst_38941 = (inst_38939 < cnt);
var state_38975__$1 = state_38975;
if(cljs.core.truth_(inst_38941)){
var statearr_38979_39008 = state_38975__$1;
(statearr_38979_39008[(1)] = (6));

} else {
var statearr_38980_39009 = state_38975__$1;
(statearr_38980_39009[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (15))){
var inst_38971 = (state_38975[(2)]);
var state_38975__$1 = state_38975;
var statearr_38981_39010 = state_38975__$1;
(statearr_38981_39010[(2)] = inst_38971);

(statearr_38981_39010[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (13))){
var inst_38964 = cljs.core.async.close_BANG_.call(null,out);
var state_38975__$1 = state_38975;
var statearr_38982_39011 = state_38975__$1;
(statearr_38982_39011[(2)] = inst_38964);

(statearr_38982_39011[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (6))){
var state_38975__$1 = state_38975;
var statearr_38983_39012 = state_38975__$1;
(statearr_38983_39012[(2)] = null);

(statearr_38983_39012[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (3))){
var inst_38973 = (state_38975[(2)]);
var state_38975__$1 = state_38975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38975__$1,inst_38973);
} else {
if((state_val_38976 === (12))){
var inst_38961 = (state_38975[(8)]);
var inst_38961__$1 = (state_38975[(2)]);
var inst_38962 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38961__$1);
var state_38975__$1 = (function (){var statearr_38984 = state_38975;
(statearr_38984[(8)] = inst_38961__$1);

return statearr_38984;
})();
if(cljs.core.truth_(inst_38962)){
var statearr_38985_39013 = state_38975__$1;
(statearr_38985_39013[(1)] = (13));

} else {
var statearr_38986_39014 = state_38975__$1;
(statearr_38986_39014[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (2))){
var inst_38938 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_38939 = (0);
var state_38975__$1 = (function (){var statearr_38987 = state_38975;
(statearr_38987[(9)] = inst_38938);

(statearr_38987[(7)] = inst_38939);

return statearr_38987;
})();
var statearr_38988_39015 = state_38975__$1;
(statearr_38988_39015[(2)] = null);

(statearr_38988_39015[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (11))){
var inst_38939 = (state_38975[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38975,(10),Object,null,(9));
var inst_38948 = chs__$1.call(null,inst_38939);
var inst_38949 = done.call(null,inst_38939);
var inst_38950 = cljs.core.async.take_BANG_.call(null,inst_38948,inst_38949);
var state_38975__$1 = state_38975;
var statearr_38989_39016 = state_38975__$1;
(statearr_38989_39016[(2)] = inst_38950);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38975__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (9))){
var inst_38939 = (state_38975[(7)]);
var inst_38952 = (state_38975[(2)]);
var inst_38953 = (inst_38939 + (1));
var inst_38939__$1 = inst_38953;
var state_38975__$1 = (function (){var statearr_38990 = state_38975;
(statearr_38990[(10)] = inst_38952);

(statearr_38990[(7)] = inst_38939__$1);

return statearr_38990;
})();
var statearr_38991_39017 = state_38975__$1;
(statearr_38991_39017[(2)] = null);

(statearr_38991_39017[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (5))){
var inst_38959 = (state_38975[(2)]);
var state_38975__$1 = (function (){var statearr_38992 = state_38975;
(statearr_38992[(11)] = inst_38959);

return statearr_38992;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38975__$1,(12),dchan);
} else {
if((state_val_38976 === (14))){
var inst_38961 = (state_38975[(8)]);
var inst_38966 = cljs.core.apply.call(null,f,inst_38961);
var state_38975__$1 = state_38975;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38975__$1,(16),out,inst_38966);
} else {
if((state_val_38976 === (16))){
var inst_38968 = (state_38975[(2)]);
var state_38975__$1 = (function (){var statearr_38993 = state_38975;
(statearr_38993[(12)] = inst_38968);

return statearr_38993;
})();
var statearr_38994_39018 = state_38975__$1;
(statearr_38994_39018[(2)] = null);

(statearr_38994_39018[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (10))){
var inst_38943 = (state_38975[(2)]);
var inst_38944 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_38975__$1 = (function (){var statearr_38995 = state_38975;
(statearr_38995[(13)] = inst_38943);

return statearr_38995;
})();
var statearr_38996_39019 = state_38975__$1;
(statearr_38996_39019[(2)] = inst_38944);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38975__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38976 === (8))){
var inst_38957 = (state_38975[(2)]);
var state_38975__$1 = state_38975;
var statearr_38997_39020 = state_38975__$1;
(statearr_38997_39020[(2)] = inst_38957);

(statearr_38997_39020[(1)] = (5));


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
});})(c__23370__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__23314__auto__,c__23370__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__23315__auto__ = null;
var cljs$core$async$map_$_state_machine__23315__auto____0 = (function (){
var statearr_39001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39001[(0)] = cljs$core$async$map_$_state_machine__23315__auto__);

(statearr_39001[(1)] = (1));

return statearr_39001;
});
var cljs$core$async$map_$_state_machine__23315__auto____1 = (function (state_38975){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_38975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39002){if((e39002 instanceof Object)){
var ex__23318__auto__ = e39002;
var statearr_39003_39021 = state_38975;
(statearr_39003_39021[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39022 = state_38975;
state_38975 = G__39022;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__23315__auto__ = function(state_38975){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__23315__auto____1.call(this,state_38975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__23315__auto____0;
cljs$core$async$map_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__23315__auto____1;
return cljs$core$async$map_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__23372__auto__ = (function (){var statearr_39004 = f__23371__auto__.call(null);
(statearr_39004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___39005);

return statearr_39004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___39005,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23370__auto___39130 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___39130,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___39130,out){
return (function (state_39106){
var state_val_39107 = (state_39106[(1)]);
if((state_val_39107 === (7))){
var inst_39085 = (state_39106[(7)]);
var inst_39086 = (state_39106[(8)]);
var inst_39085__$1 = (state_39106[(2)]);
var inst_39086__$1 = cljs.core.nth.call(null,inst_39085__$1,(0),null);
var inst_39087 = cljs.core.nth.call(null,inst_39085__$1,(1),null);
var inst_39088 = (inst_39086__$1 == null);
var state_39106__$1 = (function (){var statearr_39108 = state_39106;
(statearr_39108[(7)] = inst_39085__$1);

(statearr_39108[(9)] = inst_39087);

(statearr_39108[(8)] = inst_39086__$1);

return statearr_39108;
})();
if(cljs.core.truth_(inst_39088)){
var statearr_39109_39131 = state_39106__$1;
(statearr_39109_39131[(1)] = (8));

} else {
var statearr_39110_39132 = state_39106__$1;
(statearr_39110_39132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (1))){
var inst_39077 = cljs.core.vec.call(null,chs);
var inst_39078 = inst_39077;
var state_39106__$1 = (function (){var statearr_39111 = state_39106;
(statearr_39111[(10)] = inst_39078);

return statearr_39111;
})();
var statearr_39112_39133 = state_39106__$1;
(statearr_39112_39133[(2)] = null);

(statearr_39112_39133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (4))){
var inst_39078 = (state_39106[(10)]);
var state_39106__$1 = state_39106;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39106__$1,(7),inst_39078);
} else {
if((state_val_39107 === (6))){
var inst_39102 = (state_39106[(2)]);
var state_39106__$1 = state_39106;
var statearr_39113_39134 = state_39106__$1;
(statearr_39113_39134[(2)] = inst_39102);

(statearr_39113_39134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (3))){
var inst_39104 = (state_39106[(2)]);
var state_39106__$1 = state_39106;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39106__$1,inst_39104);
} else {
if((state_val_39107 === (2))){
var inst_39078 = (state_39106[(10)]);
var inst_39080 = cljs.core.count.call(null,inst_39078);
var inst_39081 = (inst_39080 > (0));
var state_39106__$1 = state_39106;
if(cljs.core.truth_(inst_39081)){
var statearr_39115_39135 = state_39106__$1;
(statearr_39115_39135[(1)] = (4));

} else {
var statearr_39116_39136 = state_39106__$1;
(statearr_39116_39136[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (11))){
var inst_39078 = (state_39106[(10)]);
var inst_39095 = (state_39106[(2)]);
var tmp39114 = inst_39078;
var inst_39078__$1 = tmp39114;
var state_39106__$1 = (function (){var statearr_39117 = state_39106;
(statearr_39117[(10)] = inst_39078__$1);

(statearr_39117[(11)] = inst_39095);

return statearr_39117;
})();
var statearr_39118_39137 = state_39106__$1;
(statearr_39118_39137[(2)] = null);

(statearr_39118_39137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (9))){
var inst_39086 = (state_39106[(8)]);
var state_39106__$1 = state_39106;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39106__$1,(11),out,inst_39086);
} else {
if((state_val_39107 === (5))){
var inst_39100 = cljs.core.async.close_BANG_.call(null,out);
var state_39106__$1 = state_39106;
var statearr_39119_39138 = state_39106__$1;
(statearr_39119_39138[(2)] = inst_39100);

(statearr_39119_39138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (10))){
var inst_39098 = (state_39106[(2)]);
var state_39106__$1 = state_39106;
var statearr_39120_39139 = state_39106__$1;
(statearr_39120_39139[(2)] = inst_39098);

(statearr_39120_39139[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39107 === (8))){
var inst_39085 = (state_39106[(7)]);
var inst_39087 = (state_39106[(9)]);
var inst_39078 = (state_39106[(10)]);
var inst_39086 = (state_39106[(8)]);
var inst_39090 = (function (){var c = inst_39087;
var v = inst_39086;
var vec__39083 = inst_39085;
var cs = inst_39078;
return ((function (c,v,vec__39083,cs,inst_39085,inst_39087,inst_39078,inst_39086,state_val_39107,c__23370__auto___39130,out){
return (function (p1__39023_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__39023_SHARP_);
});
;})(c,v,vec__39083,cs,inst_39085,inst_39087,inst_39078,inst_39086,state_val_39107,c__23370__auto___39130,out))
})();
var inst_39091 = cljs.core.filterv.call(null,inst_39090,inst_39078);
var inst_39078__$1 = inst_39091;
var state_39106__$1 = (function (){var statearr_39121 = state_39106;
(statearr_39121[(10)] = inst_39078__$1);

return statearr_39121;
})();
var statearr_39122_39140 = state_39106__$1;
(statearr_39122_39140[(2)] = null);

(statearr_39122_39140[(1)] = (2));


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
});})(c__23370__auto___39130,out))
;
return ((function (switch__23314__auto__,c__23370__auto___39130,out){
return (function() {
var cljs$core$async$merge_$_state_machine__23315__auto__ = null;
var cljs$core$async$merge_$_state_machine__23315__auto____0 = (function (){
var statearr_39126 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39126[(0)] = cljs$core$async$merge_$_state_machine__23315__auto__);

(statearr_39126[(1)] = (1));

return statearr_39126;
});
var cljs$core$async$merge_$_state_machine__23315__auto____1 = (function (state_39106){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39106);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39127){if((e39127 instanceof Object)){
var ex__23318__auto__ = e39127;
var statearr_39128_39141 = state_39106;
(statearr_39128_39141[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39142 = state_39106;
state_39106 = G__39142;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__23315__auto__ = function(state_39106){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__23315__auto____1.call(this,state_39106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__23315__auto____0;
cljs$core$async$merge_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__23315__auto____1;
return cljs$core$async$merge_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___39130,out))
})();
var state__23372__auto__ = (function (){var statearr_39129 = f__23371__auto__.call(null);
(statearr_39129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___39130);

return statearr_39129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___39130,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23370__auto___39235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___39235,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___39235,out){
return (function (state_39212){
var state_val_39213 = (state_39212[(1)]);
if((state_val_39213 === (7))){
var inst_39194 = (state_39212[(7)]);
var inst_39194__$1 = (state_39212[(2)]);
var inst_39195 = (inst_39194__$1 == null);
var inst_39196 = cljs.core.not.call(null,inst_39195);
var state_39212__$1 = (function (){var statearr_39214 = state_39212;
(statearr_39214[(7)] = inst_39194__$1);

return statearr_39214;
})();
if(inst_39196){
var statearr_39215_39236 = state_39212__$1;
(statearr_39215_39236[(1)] = (8));

} else {
var statearr_39216_39237 = state_39212__$1;
(statearr_39216_39237[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (1))){
var inst_39189 = (0);
var state_39212__$1 = (function (){var statearr_39217 = state_39212;
(statearr_39217[(8)] = inst_39189);

return statearr_39217;
})();
var statearr_39218_39238 = state_39212__$1;
(statearr_39218_39238[(2)] = null);

(statearr_39218_39238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (4))){
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39212__$1,(7),ch);
} else {
if((state_val_39213 === (6))){
var inst_39207 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
var statearr_39219_39239 = state_39212__$1;
(statearr_39219_39239[(2)] = inst_39207);

(statearr_39219_39239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (3))){
var inst_39209 = (state_39212[(2)]);
var inst_39210 = cljs.core.async.close_BANG_.call(null,out);
var state_39212__$1 = (function (){var statearr_39220 = state_39212;
(statearr_39220[(9)] = inst_39209);

return statearr_39220;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39212__$1,inst_39210);
} else {
if((state_val_39213 === (2))){
var inst_39189 = (state_39212[(8)]);
var inst_39191 = (inst_39189 < n);
var state_39212__$1 = state_39212;
if(cljs.core.truth_(inst_39191)){
var statearr_39221_39240 = state_39212__$1;
(statearr_39221_39240[(1)] = (4));

} else {
var statearr_39222_39241 = state_39212__$1;
(statearr_39222_39241[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (11))){
var inst_39189 = (state_39212[(8)]);
var inst_39199 = (state_39212[(2)]);
var inst_39200 = (inst_39189 + (1));
var inst_39189__$1 = inst_39200;
var state_39212__$1 = (function (){var statearr_39223 = state_39212;
(statearr_39223[(10)] = inst_39199);

(statearr_39223[(8)] = inst_39189__$1);

return statearr_39223;
})();
var statearr_39224_39242 = state_39212__$1;
(statearr_39224_39242[(2)] = null);

(statearr_39224_39242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (9))){
var state_39212__$1 = state_39212;
var statearr_39225_39243 = state_39212__$1;
(statearr_39225_39243[(2)] = null);

(statearr_39225_39243[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (5))){
var state_39212__$1 = state_39212;
var statearr_39226_39244 = state_39212__$1;
(statearr_39226_39244[(2)] = null);

(statearr_39226_39244[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (10))){
var inst_39204 = (state_39212[(2)]);
var state_39212__$1 = state_39212;
var statearr_39227_39245 = state_39212__$1;
(statearr_39227_39245[(2)] = inst_39204);

(statearr_39227_39245[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39213 === (8))){
var inst_39194 = (state_39212[(7)]);
var state_39212__$1 = state_39212;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39212__$1,(11),out,inst_39194);
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
});})(c__23370__auto___39235,out))
;
return ((function (switch__23314__auto__,c__23370__auto___39235,out){
return (function() {
var cljs$core$async$take_$_state_machine__23315__auto__ = null;
var cljs$core$async$take_$_state_machine__23315__auto____0 = (function (){
var statearr_39231 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39231[(0)] = cljs$core$async$take_$_state_machine__23315__auto__);

(statearr_39231[(1)] = (1));

return statearr_39231;
});
var cljs$core$async$take_$_state_machine__23315__auto____1 = (function (state_39212){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39212);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39232){if((e39232 instanceof Object)){
var ex__23318__auto__ = e39232;
var statearr_39233_39246 = state_39212;
(statearr_39233_39246[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39212);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39247 = state_39212;
state_39212 = G__39247;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__23315__auto__ = function(state_39212){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__23315__auto____1.call(this,state_39212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__23315__auto____0;
cljs$core$async$take_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__23315__auto____1;
return cljs$core$async$take_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___39235,out))
})();
var state__23372__auto__ = (function (){var statearr_39234 = f__23371__auto__.call(null);
(statearr_39234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___39235);

return statearr_39234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___39235,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t39255 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39255 = (function (ch,f,map_LT_,meta39256){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta39256 = meta39256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t39258 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39258 = (function (fn1,_,meta39256,map_LT_,f,ch,meta39259){
this.fn1 = fn1;
this._ = _;
this.meta39256 = meta39256;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta39259 = meta39259;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39258.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t39258.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t39258.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__39248_SHARP_){
return f1.call(null,(((p1__39248_SHARP_ == null))?null:self__.f.call(null,p1__39248_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t39258.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_39260){
var self__ = this;
var _39260__$1 = this;
return self__.meta39259;
});})(___$1))
;

cljs.core.async.t39258.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_39260,meta39259__$1){
var self__ = this;
var _39260__$1 = this;
return (new cljs.core.async.t39258(self__.fn1,self__._,self__.meta39256,self__.map_LT_,self__.f,self__.ch,meta39259__$1));
});})(___$1))
;

cljs.core.async.t39258.cljs$lang$type = true;

cljs.core.async.t39258.cljs$lang$ctorStr = "cljs.core.async/t39258";

cljs.core.async.t39258.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t39258");
});})(___$1))
;

cljs.core.async.__GT_t39258 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t39258(fn1__$1,___$2,meta39256__$1,map_LT___$1,f__$1,ch__$1,meta39259){
return (new cljs.core.async.t39258(fn1__$1,___$2,meta39256__$1,map_LT___$1,f__$1,ch__$1,meta39259));
});})(___$1))
;

}

return (new cljs.core.async.t39258(fn1,___$1,self__.meta39256,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__20276__auto__ = ret;
if(cljs.core.truth_(and__20276__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__20276__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39255.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t39255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39257){
var self__ = this;
var _39257__$1 = this;
return self__.meta39256;
});

cljs.core.async.t39255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39257,meta39256__$1){
var self__ = this;
var _39257__$1 = this;
return (new cljs.core.async.t39255(self__.ch,self__.f,self__.map_LT_,meta39256__$1));
});

cljs.core.async.t39255.cljs$lang$type = true;

cljs.core.async.t39255.cljs$lang$ctorStr = "cljs.core.async/t39255";

cljs.core.async.t39255.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t39255");
});

cljs.core.async.__GT_t39255 = (function cljs$core$async$map_LT__$___GT_t39255(ch__$1,f__$1,map_LT___$1,meta39256){
return (new cljs.core.async.t39255(ch__$1,f__$1,map_LT___$1,meta39256));
});

}

return (new cljs.core.async.t39255(ch,f,cljs$core$async$map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t39264 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39264 = (function (ch,f,map_GT_,meta39265){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta39265 = meta39265;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t39264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t39264.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39266){
var self__ = this;
var _39266__$1 = this;
return self__.meta39265;
});

cljs.core.async.t39264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39266,meta39265__$1){
var self__ = this;
var _39266__$1 = this;
return (new cljs.core.async.t39264(self__.ch,self__.f,self__.map_GT_,meta39265__$1));
});

cljs.core.async.t39264.cljs$lang$type = true;

cljs.core.async.t39264.cljs$lang$ctorStr = "cljs.core.async/t39264";

cljs.core.async.t39264.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t39264");
});

cljs.core.async.__GT_t39264 = (function cljs$core$async$map_GT__$___GT_t39264(ch__$1,f__$1,map_GT___$1,meta39265){
return (new cljs.core.async.t39264(ch__$1,f__$1,map_GT___$1,meta39265));
});

}

return (new cljs.core.async.t39264(ch,f,cljs$core$async$map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t39270 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t39270 = (function (ch,p,filter_GT_,meta39271){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta39271 = meta39271;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t39270.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t39270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_39272){
var self__ = this;
var _39272__$1 = this;
return self__.meta39271;
});

cljs.core.async.t39270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_39272,meta39271__$1){
var self__ = this;
var _39272__$1 = this;
return (new cljs.core.async.t39270(self__.ch,self__.p,self__.filter_GT_,meta39271__$1));
});

cljs.core.async.t39270.cljs$lang$type = true;

cljs.core.async.t39270.cljs$lang$ctorStr = "cljs.core.async/t39270";

cljs.core.async.t39270.cljs$lang$ctorPrWriter = (function (this__20875__auto__,writer__20876__auto__,opt__20877__auto__){
return cljs.core._write.call(null,writer__20876__auto__,"cljs.core.async/t39270");
});

cljs.core.async.__GT_t39270 = (function cljs$core$async$filter_GT__$___GT_t39270(ch__$1,p__$1,filter_GT___$1,meta39271){
return (new cljs.core.async.t39270(ch__$1,p__$1,filter_GT___$1,meta39271));
});

}

return (new cljs.core.async.t39270(ch,p,cljs$core$async$filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23370__auto___39355 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___39355,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___39355,out){
return (function (state_39334){
var state_val_39335 = (state_39334[(1)]);
if((state_val_39335 === (7))){
var inst_39330 = (state_39334[(2)]);
var state_39334__$1 = state_39334;
var statearr_39336_39356 = state_39334__$1;
(statearr_39336_39356[(2)] = inst_39330);

(statearr_39336_39356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (1))){
var state_39334__$1 = state_39334;
var statearr_39337_39357 = state_39334__$1;
(statearr_39337_39357[(2)] = null);

(statearr_39337_39357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (4))){
var inst_39316 = (state_39334[(7)]);
var inst_39316__$1 = (state_39334[(2)]);
var inst_39317 = (inst_39316__$1 == null);
var state_39334__$1 = (function (){var statearr_39338 = state_39334;
(statearr_39338[(7)] = inst_39316__$1);

return statearr_39338;
})();
if(cljs.core.truth_(inst_39317)){
var statearr_39339_39358 = state_39334__$1;
(statearr_39339_39358[(1)] = (5));

} else {
var statearr_39340_39359 = state_39334__$1;
(statearr_39340_39359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (6))){
var inst_39316 = (state_39334[(7)]);
var inst_39321 = p.call(null,inst_39316);
var state_39334__$1 = state_39334;
if(cljs.core.truth_(inst_39321)){
var statearr_39341_39360 = state_39334__$1;
(statearr_39341_39360[(1)] = (8));

} else {
var statearr_39342_39361 = state_39334__$1;
(statearr_39342_39361[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (3))){
var inst_39332 = (state_39334[(2)]);
var state_39334__$1 = state_39334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39334__$1,inst_39332);
} else {
if((state_val_39335 === (2))){
var state_39334__$1 = state_39334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39334__$1,(4),ch);
} else {
if((state_val_39335 === (11))){
var inst_39324 = (state_39334[(2)]);
var state_39334__$1 = state_39334;
var statearr_39343_39362 = state_39334__$1;
(statearr_39343_39362[(2)] = inst_39324);

(statearr_39343_39362[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (9))){
var state_39334__$1 = state_39334;
var statearr_39344_39363 = state_39334__$1;
(statearr_39344_39363[(2)] = null);

(statearr_39344_39363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (5))){
var inst_39319 = cljs.core.async.close_BANG_.call(null,out);
var state_39334__$1 = state_39334;
var statearr_39345_39364 = state_39334__$1;
(statearr_39345_39364[(2)] = inst_39319);

(statearr_39345_39364[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (10))){
var inst_39327 = (state_39334[(2)]);
var state_39334__$1 = (function (){var statearr_39346 = state_39334;
(statearr_39346[(8)] = inst_39327);

return statearr_39346;
})();
var statearr_39347_39365 = state_39334__$1;
(statearr_39347_39365[(2)] = null);

(statearr_39347_39365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39335 === (8))){
var inst_39316 = (state_39334[(7)]);
var state_39334__$1 = state_39334;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39334__$1,(11),out,inst_39316);
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
});})(c__23370__auto___39355,out))
;
return ((function (switch__23314__auto__,c__23370__auto___39355,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__23315__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__23315__auto____0 = (function (){
var statearr_39351 = [null,null,null,null,null,null,null,null,null];
(statearr_39351[(0)] = cljs$core$async$filter_LT__$_state_machine__23315__auto__);

(statearr_39351[(1)] = (1));

return statearr_39351;
});
var cljs$core$async$filter_LT__$_state_machine__23315__auto____1 = (function (state_39334){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39352){if((e39352 instanceof Object)){
var ex__23318__auto__ = e39352;
var statearr_39353_39366 = state_39334;
(statearr_39353_39366[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39352;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39367 = state_39334;
state_39334 = G__39367;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__23315__auto__ = function(state_39334){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__23315__auto____1.call(this,state_39334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__23315__auto____0;
cljs$core$async$filter_LT__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__23315__auto____1;
return cljs$core$async$filter_LT__$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___39355,out))
})();
var state__23372__auto__ = (function (){var statearr_39354 = f__23371__auto__.call(null);
(statearr_39354[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___39355);

return statearr_39354;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___39355,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_39533){
var state_val_39534 = (state_39533[(1)]);
if((state_val_39534 === (7))){
var inst_39529 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
var statearr_39535_39576 = state_39533__$1;
(statearr_39535_39576[(2)] = inst_39529);

(statearr_39535_39576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (20))){
var inst_39499 = (state_39533[(7)]);
var inst_39510 = (state_39533[(2)]);
var inst_39511 = cljs.core.next.call(null,inst_39499);
var inst_39485 = inst_39511;
var inst_39486 = null;
var inst_39487 = (0);
var inst_39488 = (0);
var state_39533__$1 = (function (){var statearr_39536 = state_39533;
(statearr_39536[(8)] = inst_39487);

(statearr_39536[(9)] = inst_39510);

(statearr_39536[(10)] = inst_39488);

(statearr_39536[(11)] = inst_39485);

(statearr_39536[(12)] = inst_39486);

return statearr_39536;
})();
var statearr_39537_39577 = state_39533__$1;
(statearr_39537_39577[(2)] = null);

(statearr_39537_39577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (1))){
var state_39533__$1 = state_39533;
var statearr_39538_39578 = state_39533__$1;
(statearr_39538_39578[(2)] = null);

(statearr_39538_39578[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (4))){
var inst_39474 = (state_39533[(13)]);
var inst_39474__$1 = (state_39533[(2)]);
var inst_39475 = (inst_39474__$1 == null);
var state_39533__$1 = (function (){var statearr_39539 = state_39533;
(statearr_39539[(13)] = inst_39474__$1);

return statearr_39539;
})();
if(cljs.core.truth_(inst_39475)){
var statearr_39540_39579 = state_39533__$1;
(statearr_39540_39579[(1)] = (5));

} else {
var statearr_39541_39580 = state_39533__$1;
(statearr_39541_39580[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (15))){
var state_39533__$1 = state_39533;
var statearr_39545_39581 = state_39533__$1;
(statearr_39545_39581[(2)] = null);

(statearr_39545_39581[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (21))){
var state_39533__$1 = state_39533;
var statearr_39546_39582 = state_39533__$1;
(statearr_39546_39582[(2)] = null);

(statearr_39546_39582[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (13))){
var inst_39487 = (state_39533[(8)]);
var inst_39488 = (state_39533[(10)]);
var inst_39485 = (state_39533[(11)]);
var inst_39486 = (state_39533[(12)]);
var inst_39495 = (state_39533[(2)]);
var inst_39496 = (inst_39488 + (1));
var tmp39542 = inst_39487;
var tmp39543 = inst_39485;
var tmp39544 = inst_39486;
var inst_39485__$1 = tmp39543;
var inst_39486__$1 = tmp39544;
var inst_39487__$1 = tmp39542;
var inst_39488__$1 = inst_39496;
var state_39533__$1 = (function (){var statearr_39547 = state_39533;
(statearr_39547[(8)] = inst_39487__$1);

(statearr_39547[(10)] = inst_39488__$1);

(statearr_39547[(11)] = inst_39485__$1);

(statearr_39547[(14)] = inst_39495);

(statearr_39547[(12)] = inst_39486__$1);

return statearr_39547;
})();
var statearr_39548_39583 = state_39533__$1;
(statearr_39548_39583[(2)] = null);

(statearr_39548_39583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (22))){
var state_39533__$1 = state_39533;
var statearr_39549_39584 = state_39533__$1;
(statearr_39549_39584[(2)] = null);

(statearr_39549_39584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (6))){
var inst_39474 = (state_39533[(13)]);
var inst_39483 = f.call(null,inst_39474);
var inst_39484 = cljs.core.seq.call(null,inst_39483);
var inst_39485 = inst_39484;
var inst_39486 = null;
var inst_39487 = (0);
var inst_39488 = (0);
var state_39533__$1 = (function (){var statearr_39550 = state_39533;
(statearr_39550[(8)] = inst_39487);

(statearr_39550[(10)] = inst_39488);

(statearr_39550[(11)] = inst_39485);

(statearr_39550[(12)] = inst_39486);

return statearr_39550;
})();
var statearr_39551_39585 = state_39533__$1;
(statearr_39551_39585[(2)] = null);

(statearr_39551_39585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (17))){
var inst_39499 = (state_39533[(7)]);
var inst_39503 = cljs.core.chunk_first.call(null,inst_39499);
var inst_39504 = cljs.core.chunk_rest.call(null,inst_39499);
var inst_39505 = cljs.core.count.call(null,inst_39503);
var inst_39485 = inst_39504;
var inst_39486 = inst_39503;
var inst_39487 = inst_39505;
var inst_39488 = (0);
var state_39533__$1 = (function (){var statearr_39552 = state_39533;
(statearr_39552[(8)] = inst_39487);

(statearr_39552[(10)] = inst_39488);

(statearr_39552[(11)] = inst_39485);

(statearr_39552[(12)] = inst_39486);

return statearr_39552;
})();
var statearr_39553_39586 = state_39533__$1;
(statearr_39553_39586[(2)] = null);

(statearr_39553_39586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (3))){
var inst_39531 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39533__$1,inst_39531);
} else {
if((state_val_39534 === (12))){
var inst_39519 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
var statearr_39554_39587 = state_39533__$1;
(statearr_39554_39587[(2)] = inst_39519);

(statearr_39554_39587[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (2))){
var state_39533__$1 = state_39533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39533__$1,(4),in$);
} else {
if((state_val_39534 === (23))){
var inst_39527 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
var statearr_39555_39588 = state_39533__$1;
(statearr_39555_39588[(2)] = inst_39527);

(statearr_39555_39588[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (19))){
var inst_39514 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
var statearr_39556_39589 = state_39533__$1;
(statearr_39556_39589[(2)] = inst_39514);

(statearr_39556_39589[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (11))){
var inst_39499 = (state_39533[(7)]);
var inst_39485 = (state_39533[(11)]);
var inst_39499__$1 = cljs.core.seq.call(null,inst_39485);
var state_39533__$1 = (function (){var statearr_39557 = state_39533;
(statearr_39557[(7)] = inst_39499__$1);

return statearr_39557;
})();
if(inst_39499__$1){
var statearr_39558_39590 = state_39533__$1;
(statearr_39558_39590[(1)] = (14));

} else {
var statearr_39559_39591 = state_39533__$1;
(statearr_39559_39591[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (9))){
var inst_39521 = (state_39533[(2)]);
var inst_39522 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_39533__$1 = (function (){var statearr_39560 = state_39533;
(statearr_39560[(15)] = inst_39521);

return statearr_39560;
})();
if(cljs.core.truth_(inst_39522)){
var statearr_39561_39592 = state_39533__$1;
(statearr_39561_39592[(1)] = (21));

} else {
var statearr_39562_39593 = state_39533__$1;
(statearr_39562_39593[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (5))){
var inst_39477 = cljs.core.async.close_BANG_.call(null,out);
var state_39533__$1 = state_39533;
var statearr_39563_39594 = state_39533__$1;
(statearr_39563_39594[(2)] = inst_39477);

(statearr_39563_39594[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (14))){
var inst_39499 = (state_39533[(7)]);
var inst_39501 = cljs.core.chunked_seq_QMARK_.call(null,inst_39499);
var state_39533__$1 = state_39533;
if(inst_39501){
var statearr_39564_39595 = state_39533__$1;
(statearr_39564_39595[(1)] = (17));

} else {
var statearr_39565_39596 = state_39533__$1;
(statearr_39565_39596[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (16))){
var inst_39517 = (state_39533[(2)]);
var state_39533__$1 = state_39533;
var statearr_39566_39597 = state_39533__$1;
(statearr_39566_39597[(2)] = inst_39517);

(statearr_39566_39597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39534 === (10))){
var inst_39488 = (state_39533[(10)]);
var inst_39486 = (state_39533[(12)]);
var inst_39493 = cljs.core._nth.call(null,inst_39486,inst_39488);
var state_39533__$1 = state_39533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39533__$1,(13),out,inst_39493);
} else {
if((state_val_39534 === (18))){
var inst_39499 = (state_39533[(7)]);
var inst_39508 = cljs.core.first.call(null,inst_39499);
var state_39533__$1 = state_39533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39533__$1,(20),out,inst_39508);
} else {
if((state_val_39534 === (8))){
var inst_39487 = (state_39533[(8)]);
var inst_39488 = (state_39533[(10)]);
var inst_39490 = (inst_39488 < inst_39487);
var inst_39491 = inst_39490;
var state_39533__$1 = state_39533;
if(cljs.core.truth_(inst_39491)){
var statearr_39567_39598 = state_39533__$1;
(statearr_39567_39598[(1)] = (10));

} else {
var statearr_39568_39599 = state_39533__$1;
(statearr_39568_39599[(1)] = (11));

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
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__23315__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__23315__auto____0 = (function (){
var statearr_39572 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39572[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__23315__auto__);

(statearr_39572[(1)] = (1));

return statearr_39572;
});
var cljs$core$async$mapcat_STAR__$_state_machine__23315__auto____1 = (function (state_39533){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39573){if((e39573 instanceof Object)){
var ex__23318__auto__ = e39573;
var statearr_39574_39600 = state_39533;
(statearr_39574_39600[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39573;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39601 = state_39533;
state_39533 = G__39601;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__23315__auto__ = function(state_39533){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__23315__auto____1.call(this,state_39533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__23315__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__23315__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_39575 = f__23371__auto__.call(null);
(statearr_39575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_39575;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23370__auto___39698 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___39698,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___39698,out){
return (function (state_39673){
var state_val_39674 = (state_39673[(1)]);
if((state_val_39674 === (7))){
var inst_39668 = (state_39673[(2)]);
var state_39673__$1 = state_39673;
var statearr_39675_39699 = state_39673__$1;
(statearr_39675_39699[(2)] = inst_39668);

(statearr_39675_39699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (1))){
var inst_39650 = null;
var state_39673__$1 = (function (){var statearr_39676 = state_39673;
(statearr_39676[(7)] = inst_39650);

return statearr_39676;
})();
var statearr_39677_39700 = state_39673__$1;
(statearr_39677_39700[(2)] = null);

(statearr_39677_39700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (4))){
var inst_39653 = (state_39673[(8)]);
var inst_39653__$1 = (state_39673[(2)]);
var inst_39654 = (inst_39653__$1 == null);
var inst_39655 = cljs.core.not.call(null,inst_39654);
var state_39673__$1 = (function (){var statearr_39678 = state_39673;
(statearr_39678[(8)] = inst_39653__$1);

return statearr_39678;
})();
if(inst_39655){
var statearr_39679_39701 = state_39673__$1;
(statearr_39679_39701[(1)] = (5));

} else {
var statearr_39680_39702 = state_39673__$1;
(statearr_39680_39702[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (6))){
var state_39673__$1 = state_39673;
var statearr_39681_39703 = state_39673__$1;
(statearr_39681_39703[(2)] = null);

(statearr_39681_39703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (3))){
var inst_39670 = (state_39673[(2)]);
var inst_39671 = cljs.core.async.close_BANG_.call(null,out);
var state_39673__$1 = (function (){var statearr_39682 = state_39673;
(statearr_39682[(9)] = inst_39670);

return statearr_39682;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39673__$1,inst_39671);
} else {
if((state_val_39674 === (2))){
var state_39673__$1 = state_39673;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39673__$1,(4),ch);
} else {
if((state_val_39674 === (11))){
var inst_39653 = (state_39673[(8)]);
var inst_39662 = (state_39673[(2)]);
var inst_39650 = inst_39653;
var state_39673__$1 = (function (){var statearr_39683 = state_39673;
(statearr_39683[(10)] = inst_39662);

(statearr_39683[(7)] = inst_39650);

return statearr_39683;
})();
var statearr_39684_39704 = state_39673__$1;
(statearr_39684_39704[(2)] = null);

(statearr_39684_39704[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (9))){
var inst_39653 = (state_39673[(8)]);
var state_39673__$1 = state_39673;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39673__$1,(11),out,inst_39653);
} else {
if((state_val_39674 === (5))){
var inst_39653 = (state_39673[(8)]);
var inst_39650 = (state_39673[(7)]);
var inst_39657 = cljs.core._EQ_.call(null,inst_39653,inst_39650);
var state_39673__$1 = state_39673;
if(inst_39657){
var statearr_39686_39705 = state_39673__$1;
(statearr_39686_39705[(1)] = (8));

} else {
var statearr_39687_39706 = state_39673__$1;
(statearr_39687_39706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (10))){
var inst_39665 = (state_39673[(2)]);
var state_39673__$1 = state_39673;
var statearr_39688_39707 = state_39673__$1;
(statearr_39688_39707[(2)] = inst_39665);

(statearr_39688_39707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39674 === (8))){
var inst_39650 = (state_39673[(7)]);
var tmp39685 = inst_39650;
var inst_39650__$1 = tmp39685;
var state_39673__$1 = (function (){var statearr_39689 = state_39673;
(statearr_39689[(7)] = inst_39650__$1);

return statearr_39689;
})();
var statearr_39690_39708 = state_39673__$1;
(statearr_39690_39708[(2)] = null);

(statearr_39690_39708[(1)] = (2));


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
});})(c__23370__auto___39698,out))
;
return ((function (switch__23314__auto__,c__23370__auto___39698,out){
return (function() {
var cljs$core$async$unique_$_state_machine__23315__auto__ = null;
var cljs$core$async$unique_$_state_machine__23315__auto____0 = (function (){
var statearr_39694 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39694[(0)] = cljs$core$async$unique_$_state_machine__23315__auto__);

(statearr_39694[(1)] = (1));

return statearr_39694;
});
var cljs$core$async$unique_$_state_machine__23315__auto____1 = (function (state_39673){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39673);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39695){if((e39695 instanceof Object)){
var ex__23318__auto__ = e39695;
var statearr_39696_39709 = state_39673;
(statearr_39696_39709[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39673);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39710 = state_39673;
state_39673 = G__39710;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__23315__auto__ = function(state_39673){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__23315__auto____1.call(this,state_39673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__23315__auto____0;
cljs$core$async$unique_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__23315__auto____1;
return cljs$core$async$unique_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___39698,out))
})();
var state__23372__auto__ = (function (){var statearr_39697 = f__23371__auto__.call(null);
(statearr_39697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___39698);

return statearr_39697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___39698,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23370__auto___39845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___39845,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___39845,out){
return (function (state_39815){
var state_val_39816 = (state_39815[(1)]);
if((state_val_39816 === (7))){
var inst_39811 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39817_39846 = state_39815__$1;
(statearr_39817_39846[(2)] = inst_39811);

(statearr_39817_39846[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (1))){
var inst_39778 = (new Array(n));
var inst_39779 = inst_39778;
var inst_39780 = (0);
var state_39815__$1 = (function (){var statearr_39818 = state_39815;
(statearr_39818[(7)] = inst_39780);

(statearr_39818[(8)] = inst_39779);

return statearr_39818;
})();
var statearr_39819_39847 = state_39815__$1;
(statearr_39819_39847[(2)] = null);

(statearr_39819_39847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (4))){
var inst_39783 = (state_39815[(9)]);
var inst_39783__$1 = (state_39815[(2)]);
var inst_39784 = (inst_39783__$1 == null);
var inst_39785 = cljs.core.not.call(null,inst_39784);
var state_39815__$1 = (function (){var statearr_39820 = state_39815;
(statearr_39820[(9)] = inst_39783__$1);

return statearr_39820;
})();
if(inst_39785){
var statearr_39821_39848 = state_39815__$1;
(statearr_39821_39848[(1)] = (5));

} else {
var statearr_39822_39849 = state_39815__$1;
(statearr_39822_39849[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (15))){
var inst_39805 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39823_39850 = state_39815__$1;
(statearr_39823_39850[(2)] = inst_39805);

(statearr_39823_39850[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (13))){
var state_39815__$1 = state_39815;
var statearr_39824_39851 = state_39815__$1;
(statearr_39824_39851[(2)] = null);

(statearr_39824_39851[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (6))){
var inst_39780 = (state_39815[(7)]);
var inst_39801 = (inst_39780 > (0));
var state_39815__$1 = state_39815;
if(cljs.core.truth_(inst_39801)){
var statearr_39825_39852 = state_39815__$1;
(statearr_39825_39852[(1)] = (12));

} else {
var statearr_39826_39853 = state_39815__$1;
(statearr_39826_39853[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (3))){
var inst_39813 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39815__$1,inst_39813);
} else {
if((state_val_39816 === (12))){
var inst_39779 = (state_39815[(8)]);
var inst_39803 = cljs.core.vec.call(null,inst_39779);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39815__$1,(15),out,inst_39803);
} else {
if((state_val_39816 === (2))){
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39815__$1,(4),ch);
} else {
if((state_val_39816 === (11))){
var inst_39795 = (state_39815[(2)]);
var inst_39796 = (new Array(n));
var inst_39779 = inst_39796;
var inst_39780 = (0);
var state_39815__$1 = (function (){var statearr_39827 = state_39815;
(statearr_39827[(7)] = inst_39780);

(statearr_39827[(8)] = inst_39779);

(statearr_39827[(10)] = inst_39795);

return statearr_39827;
})();
var statearr_39828_39854 = state_39815__$1;
(statearr_39828_39854[(2)] = null);

(statearr_39828_39854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (9))){
var inst_39779 = (state_39815[(8)]);
var inst_39793 = cljs.core.vec.call(null,inst_39779);
var state_39815__$1 = state_39815;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39815__$1,(11),out,inst_39793);
} else {
if((state_val_39816 === (5))){
var inst_39788 = (state_39815[(11)]);
var inst_39780 = (state_39815[(7)]);
var inst_39783 = (state_39815[(9)]);
var inst_39779 = (state_39815[(8)]);
var inst_39787 = (inst_39779[inst_39780] = inst_39783);
var inst_39788__$1 = (inst_39780 + (1));
var inst_39789 = (inst_39788__$1 < n);
var state_39815__$1 = (function (){var statearr_39829 = state_39815;
(statearr_39829[(11)] = inst_39788__$1);

(statearr_39829[(12)] = inst_39787);

return statearr_39829;
})();
if(cljs.core.truth_(inst_39789)){
var statearr_39830_39855 = state_39815__$1;
(statearr_39830_39855[(1)] = (8));

} else {
var statearr_39831_39856 = state_39815__$1;
(statearr_39831_39856[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (14))){
var inst_39808 = (state_39815[(2)]);
var inst_39809 = cljs.core.async.close_BANG_.call(null,out);
var state_39815__$1 = (function (){var statearr_39833 = state_39815;
(statearr_39833[(13)] = inst_39808);

return statearr_39833;
})();
var statearr_39834_39857 = state_39815__$1;
(statearr_39834_39857[(2)] = inst_39809);

(statearr_39834_39857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (10))){
var inst_39799 = (state_39815[(2)]);
var state_39815__$1 = state_39815;
var statearr_39835_39858 = state_39815__$1;
(statearr_39835_39858[(2)] = inst_39799);

(statearr_39835_39858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39816 === (8))){
var inst_39788 = (state_39815[(11)]);
var inst_39779 = (state_39815[(8)]);
var tmp39832 = inst_39779;
var inst_39779__$1 = tmp39832;
var inst_39780 = inst_39788;
var state_39815__$1 = (function (){var statearr_39836 = state_39815;
(statearr_39836[(7)] = inst_39780);

(statearr_39836[(8)] = inst_39779__$1);

return statearr_39836;
})();
var statearr_39837_39859 = state_39815__$1;
(statearr_39837_39859[(2)] = null);

(statearr_39837_39859[(1)] = (2));


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
});})(c__23370__auto___39845,out))
;
return ((function (switch__23314__auto__,c__23370__auto___39845,out){
return (function() {
var cljs$core$async$partition_$_state_machine__23315__auto__ = null;
var cljs$core$async$partition_$_state_machine__23315__auto____0 = (function (){
var statearr_39841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39841[(0)] = cljs$core$async$partition_$_state_machine__23315__auto__);

(statearr_39841[(1)] = (1));

return statearr_39841;
});
var cljs$core$async$partition_$_state_machine__23315__auto____1 = (function (state_39815){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e39842){if((e39842 instanceof Object)){
var ex__23318__auto__ = e39842;
var statearr_39843_39860 = state_39815;
(statearr_39843_39860[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39861 = state_39815;
state_39815 = G__39861;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__23315__auto__ = function(state_39815){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__23315__auto____1.call(this,state_39815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__23315__auto____0;
cljs$core$async$partition_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__23315__auto____1;
return cljs$core$async$partition_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___39845,out))
})();
var state__23372__auto__ = (function (){var statearr_39844 = f__23371__auto__.call(null);
(statearr_39844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___39845);

return statearr_39844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___39845,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__23370__auto___40004 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___40004,out){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___40004,out){
return (function (state_39974){
var state_val_39975 = (state_39974[(1)]);
if((state_val_39975 === (7))){
var inst_39970 = (state_39974[(2)]);
var state_39974__$1 = state_39974;
var statearr_39976_40005 = state_39974__$1;
(statearr_39976_40005[(2)] = inst_39970);

(statearr_39976_40005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (1))){
var inst_39933 = [];
var inst_39934 = inst_39933;
var inst_39935 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_39974__$1 = (function (){var statearr_39977 = state_39974;
(statearr_39977[(7)] = inst_39934);

(statearr_39977[(8)] = inst_39935);

return statearr_39977;
})();
var statearr_39978_40006 = state_39974__$1;
(statearr_39978_40006[(2)] = null);

(statearr_39978_40006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (4))){
var inst_39938 = (state_39974[(9)]);
var inst_39938__$1 = (state_39974[(2)]);
var inst_39939 = (inst_39938__$1 == null);
var inst_39940 = cljs.core.not.call(null,inst_39939);
var state_39974__$1 = (function (){var statearr_39979 = state_39974;
(statearr_39979[(9)] = inst_39938__$1);

return statearr_39979;
})();
if(inst_39940){
var statearr_39980_40007 = state_39974__$1;
(statearr_39980_40007[(1)] = (5));

} else {
var statearr_39981_40008 = state_39974__$1;
(statearr_39981_40008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (15))){
var inst_39964 = (state_39974[(2)]);
var state_39974__$1 = state_39974;
var statearr_39982_40009 = state_39974__$1;
(statearr_39982_40009[(2)] = inst_39964);

(statearr_39982_40009[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (13))){
var state_39974__$1 = state_39974;
var statearr_39983_40010 = state_39974__$1;
(statearr_39983_40010[(2)] = null);

(statearr_39983_40010[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (6))){
var inst_39934 = (state_39974[(7)]);
var inst_39959 = inst_39934.length;
var inst_39960 = (inst_39959 > (0));
var state_39974__$1 = state_39974;
if(cljs.core.truth_(inst_39960)){
var statearr_39984_40011 = state_39974__$1;
(statearr_39984_40011[(1)] = (12));

} else {
var statearr_39985_40012 = state_39974__$1;
(statearr_39985_40012[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (3))){
var inst_39972 = (state_39974[(2)]);
var state_39974__$1 = state_39974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39974__$1,inst_39972);
} else {
if((state_val_39975 === (12))){
var inst_39934 = (state_39974[(7)]);
var inst_39962 = cljs.core.vec.call(null,inst_39934);
var state_39974__$1 = state_39974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39974__$1,(15),out,inst_39962);
} else {
if((state_val_39975 === (2))){
var state_39974__$1 = state_39974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39974__$1,(4),ch);
} else {
if((state_val_39975 === (11))){
var inst_39942 = (state_39974[(10)]);
var inst_39938 = (state_39974[(9)]);
var inst_39952 = (state_39974[(2)]);
var inst_39953 = [];
var inst_39954 = inst_39953.push(inst_39938);
var inst_39934 = inst_39953;
var inst_39935 = inst_39942;
var state_39974__$1 = (function (){var statearr_39986 = state_39974;
(statearr_39986[(7)] = inst_39934);

(statearr_39986[(8)] = inst_39935);

(statearr_39986[(11)] = inst_39954);

(statearr_39986[(12)] = inst_39952);

return statearr_39986;
})();
var statearr_39987_40013 = state_39974__$1;
(statearr_39987_40013[(2)] = null);

(statearr_39987_40013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (9))){
var inst_39934 = (state_39974[(7)]);
var inst_39950 = cljs.core.vec.call(null,inst_39934);
var state_39974__$1 = state_39974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39974__$1,(11),out,inst_39950);
} else {
if((state_val_39975 === (5))){
var inst_39942 = (state_39974[(10)]);
var inst_39938 = (state_39974[(9)]);
var inst_39935 = (state_39974[(8)]);
var inst_39942__$1 = f.call(null,inst_39938);
var inst_39943 = cljs.core._EQ_.call(null,inst_39942__$1,inst_39935);
var inst_39944 = cljs.core.keyword_identical_QMARK_.call(null,inst_39935,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_39945 = (inst_39943) || (inst_39944);
var state_39974__$1 = (function (){var statearr_39988 = state_39974;
(statearr_39988[(10)] = inst_39942__$1);

return statearr_39988;
})();
if(cljs.core.truth_(inst_39945)){
var statearr_39989_40014 = state_39974__$1;
(statearr_39989_40014[(1)] = (8));

} else {
var statearr_39990_40015 = state_39974__$1;
(statearr_39990_40015[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (14))){
var inst_39967 = (state_39974[(2)]);
var inst_39968 = cljs.core.async.close_BANG_.call(null,out);
var state_39974__$1 = (function (){var statearr_39992 = state_39974;
(statearr_39992[(13)] = inst_39967);

return statearr_39992;
})();
var statearr_39993_40016 = state_39974__$1;
(statearr_39993_40016[(2)] = inst_39968);

(statearr_39993_40016[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (10))){
var inst_39957 = (state_39974[(2)]);
var state_39974__$1 = state_39974;
var statearr_39994_40017 = state_39974__$1;
(statearr_39994_40017[(2)] = inst_39957);

(statearr_39994_40017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39975 === (8))){
var inst_39942 = (state_39974[(10)]);
var inst_39938 = (state_39974[(9)]);
var inst_39934 = (state_39974[(7)]);
var inst_39947 = inst_39934.push(inst_39938);
var tmp39991 = inst_39934;
var inst_39934__$1 = tmp39991;
var inst_39935 = inst_39942;
var state_39974__$1 = (function (){var statearr_39995 = state_39974;
(statearr_39995[(7)] = inst_39934__$1);

(statearr_39995[(8)] = inst_39935);

(statearr_39995[(14)] = inst_39947);

return statearr_39995;
})();
var statearr_39996_40018 = state_39974__$1;
(statearr_39996_40018[(2)] = null);

(statearr_39996_40018[(1)] = (2));


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
});})(c__23370__auto___40004,out))
;
return ((function (switch__23314__auto__,c__23370__auto___40004,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__23315__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__23315__auto____0 = (function (){
var statearr_40000 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40000[(0)] = cljs$core$async$partition_by_$_state_machine__23315__auto__);

(statearr_40000[(1)] = (1));

return statearr_40000;
});
var cljs$core$async$partition_by_$_state_machine__23315__auto____1 = (function (state_39974){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_39974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e40001){if((e40001 instanceof Object)){
var ex__23318__auto__ = e40001;
var statearr_40002_40019 = state_39974;
(statearr_40002_40019[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40001;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40020 = state_39974;
state_39974 = G__40020;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__23315__auto__ = function(state_39974){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__23315__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__23315__auto____1.call(this,state_39974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__23315__auto____0;
cljs$core$async$partition_by_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__23315__auto____1;
return cljs$core$async$partition_by_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___40004,out))
})();
var state__23372__auto__ = (function (){var statearr_40003 = f__23371__auto__.call(null);
(statearr_40003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___40004);

return statearr_40003;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___40004,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map