// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35299__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35299 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35300__i = 0, G__35300__a = new Array(arguments.length -  0);
while (G__35300__i < G__35300__a.length) {G__35300__a[G__35300__i] = arguments[G__35300__i + 0]; ++G__35300__i;}
  args = new cljs.core.IndexedSeq(G__35300__a,0);
} 
return G__35299__delegate.call(this,args);};
G__35299.cljs$lang$maxFixedArity = 0;
G__35299.cljs$lang$applyTo = (function (arglist__35301){
var args = cljs.core.seq(arglist__35301);
return G__35299__delegate(args);
});
G__35299.cljs$core$IFn$_invoke$arity$variadic = G__35299__delegate;
return G__35299;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__35302){
var map__35304 = p__35302;
var map__35304__$1 = ((cljs.core.seq_QMARK_.call(null,map__35304))?cljs.core.apply.call(null,cljs.core.hash_map,map__35304):map__35304);
var class$ = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var message = cljs.core.get.call(null,map__35304__$1,new cljs.core.Keyword(null,"message","message",-406056002));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__20288__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__20276__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__20276__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__20276__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__23370__auto___35433 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___35433,ch){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___35433,ch){
return (function (state_35407){
var state_val_35408 = (state_35407[(1)]);
if((state_val_35408 === (7))){
var inst_35403 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35409_35434 = state_35407__$1;
(statearr_35409_35434[(2)] = inst_35403);

(statearr_35409_35434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (1))){
var state_35407__$1 = state_35407;
var statearr_35410_35435 = state_35407__$1;
(statearr_35410_35435[(2)] = null);

(statearr_35410_35435[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (4))){
var inst_35371 = (state_35407[(7)]);
var inst_35371__$1 = (state_35407[(2)]);
var state_35407__$1 = (function (){var statearr_35411 = state_35407;
(statearr_35411[(7)] = inst_35371__$1);

return statearr_35411;
})();
if(cljs.core.truth_(inst_35371__$1)){
var statearr_35412_35436 = state_35407__$1;
(statearr_35412_35436[(1)] = (5));

} else {
var statearr_35413_35437 = state_35407__$1;
(statearr_35413_35437[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (13))){
var state_35407__$1 = state_35407;
var statearr_35414_35438 = state_35407__$1;
(statearr_35414_35438[(2)] = null);

(statearr_35414_35438[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (6))){
var state_35407__$1 = state_35407;
var statearr_35415_35439 = state_35407__$1;
(statearr_35415_35439[(2)] = null);

(statearr_35415_35439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (3))){
var inst_35405 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35407__$1,inst_35405);
} else {
if((state_val_35408 === (12))){
var inst_35378 = (state_35407[(8)]);
var inst_35391 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_35378);
var inst_35392 = cljs.core.first.call(null,inst_35391);
var inst_35393 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_35392);
var inst_35394 = console.warn("Figwheel: Not loading code with warnings - ",inst_35393);
var state_35407__$1 = state_35407;
var statearr_35416_35440 = state_35407__$1;
(statearr_35416_35440[(2)] = inst_35394);

(statearr_35416_35440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (2))){
var state_35407__$1 = state_35407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35407__$1,(4),ch);
} else {
if((state_val_35408 === (11))){
var inst_35387 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35417_35441 = state_35407__$1;
(statearr_35417_35441[(2)] = inst_35387);

(statearr_35417_35441[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (9))){
var inst_35377 = (state_35407[(9)]);
var inst_35389 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_35377,opts);
var state_35407__$1 = state_35407;
if(inst_35389){
var statearr_35418_35442 = state_35407__$1;
(statearr_35418_35442[(1)] = (12));

} else {
var statearr_35419_35443 = state_35407__$1;
(statearr_35419_35443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (5))){
var inst_35371 = (state_35407[(7)]);
var inst_35377 = (state_35407[(9)]);
var inst_35373 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_35374 = (new cljs.core.PersistentArrayMap(null,2,inst_35373,null));
var inst_35375 = (new cljs.core.PersistentHashSet(null,inst_35374,null));
var inst_35376 = figwheel.client.focus_msgs.call(null,inst_35375,inst_35371);
var inst_35377__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_35376);
var inst_35378 = cljs.core.first.call(null,inst_35376);
var inst_35379 = figwheel.client.reload_file_state_QMARK_.call(null,inst_35377__$1,opts);
var state_35407__$1 = (function (){var statearr_35420 = state_35407;
(statearr_35420[(8)] = inst_35378);

(statearr_35420[(9)] = inst_35377__$1);

return statearr_35420;
})();
if(cljs.core.truth_(inst_35379)){
var statearr_35421_35444 = state_35407__$1;
(statearr_35421_35444[(1)] = (8));

} else {
var statearr_35422_35445 = state_35407__$1;
(statearr_35422_35445[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (14))){
var inst_35397 = (state_35407[(2)]);
var state_35407__$1 = state_35407;
var statearr_35423_35446 = state_35407__$1;
(statearr_35423_35446[(2)] = inst_35397);

(statearr_35423_35446[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (10))){
var inst_35399 = (state_35407[(2)]);
var state_35407__$1 = (function (){var statearr_35424 = state_35407;
(statearr_35424[(10)] = inst_35399);

return statearr_35424;
})();
var statearr_35425_35447 = state_35407__$1;
(statearr_35425_35447[(2)] = null);

(statearr_35425_35447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35408 === (8))){
var inst_35378 = (state_35407[(8)]);
var inst_35381 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35382 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_35378);
var inst_35383 = cljs.core.async.timeout.call(null,(1000));
var inst_35384 = [inst_35382,inst_35383];
var inst_35385 = (new cljs.core.PersistentVector(null,2,(5),inst_35381,inst_35384,null));
var state_35407__$1 = state_35407;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35407__$1,(11),inst_35385);
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
});})(c__23370__auto___35433,ch))
;
return ((function (switch__23314__auto__,c__23370__auto___35433,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__23315__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__23315__auto____0 = (function (){
var statearr_35429 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35429[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__23315__auto__);

(statearr_35429[(1)] = (1));

return statearr_35429;
});
var figwheel$client$file_reloader_plugin_$_state_machine__23315__auto____1 = (function (state_35407){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_35407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e35430){if((e35430 instanceof Object)){
var ex__23318__auto__ = e35430;
var statearr_35431_35448 = state_35407;
(statearr_35431_35448[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35430;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35449 = state_35407;
state_35407 = G__35449;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__23315__auto__ = function(state_35407){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__23315__auto____1.call(this,state_35407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__23315__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__23315__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___35433,ch))
})();
var state__23372__auto__ = (function (){var statearr_35432 = f__23371__auto__.call(null);
(statearr_35432[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___35433);

return statearr_35432;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___35433,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__35450_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__35450_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_35459 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35452_SHARP_,p2__35451_SHARP_){
return [cljs.core.str(p2__35451_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_35459){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_35457 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_35458 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_35457,_STAR_print_newline_STAR_35458,base_path_35459){
return (function() { 
var G__35460__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__35460 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35461__i = 0, G__35461__a = new Array(arguments.length -  0);
while (G__35461__i < G__35461__a.length) {G__35461__a[G__35461__i] = arguments[G__35461__i + 0]; ++G__35461__i;}
  args = new cljs.core.IndexedSeq(G__35461__a,0);
} 
return G__35460__delegate.call(this,args);};
G__35460.cljs$lang$maxFixedArity = 0;
G__35460.cljs$lang$applyTo = (function (arglist__35462){
var args = cljs.core.seq(arglist__35462);
return G__35460__delegate(args);
});
G__35460.cljs$core$IFn$_invoke$arity$variadic = G__35460__delegate;
return G__35460;
})()
;})(_STAR_print_fn_STAR_35457,_STAR_print_newline_STAR_35458,base_path_35459))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_35458;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_35457;
}}catch (e35456){if((e35456 instanceof Error)){
var e = e35456;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_35459], null));
} else {
var e = e35456;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_35459))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__35463){
var map__35468 = p__35463;
var map__35468__$1 = ((cljs.core.seq_QMARK_.call(null,map__35468))?cljs.core.apply.call(null,cljs.core.hash_map,map__35468):map__35468);
var opts = map__35468__$1;
var build_id = cljs.core.get.call(null,map__35468__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__35468,map__35468__$1,opts,build_id){
return (function (p__35469){
var vec__35470 = p__35469;
var map__35471 = cljs.core.nth.call(null,vec__35470,(0),null);
var map__35471__$1 = ((cljs.core.seq_QMARK_.call(null,map__35471))?cljs.core.apply.call(null,cljs.core.hash_map,map__35471):map__35471);
var msg = map__35471__$1;
var msg_name = cljs.core.get.call(null,map__35471__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35470,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__35470,map__35471,map__35471__$1,msg,msg_name,_,map__35468,map__35468__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__35470,map__35471,map__35471__$1,msg,msg_name,_,map__35468,map__35468__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__35468,map__35468__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__35475){
var vec__35476 = p__35475;
var map__35477 = cljs.core.nth.call(null,vec__35476,(0),null);
var map__35477__$1 = ((cljs.core.seq_QMARK_.call(null,map__35477))?cljs.core.apply.call(null,cljs.core.hash_map,map__35477):map__35477);
var msg = map__35477__$1;
var msg_name = cljs.core.get.call(null,map__35477__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35476,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__35478){
var map__35486 = p__35478;
var map__35486__$1 = ((cljs.core.seq_QMARK_.call(null,map__35486))?cljs.core.apply.call(null,cljs.core.hash_map,map__35486):map__35486);
var on_compile_fail = cljs.core.get.call(null,map__35486__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
var on_compile_warning = cljs.core.get.call(null,map__35486__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
return ((function (map__35486,map__35486__$1,on_compile_fail,on_compile_warning){
return (function (p__35487){
var vec__35488 = p__35487;
var map__35489 = cljs.core.nth.call(null,vec__35488,(0),null);
var map__35489__$1 = ((cljs.core.seq_QMARK_.call(null,map__35489))?cljs.core.apply.call(null,cljs.core.hash_map,map__35489):map__35489);
var msg = map__35489__$1;
var msg_name = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__35488,(1));
var pred__35490 = cljs.core._EQ_;
var expr__35491 = msg_name;
if(cljs.core.truth_(pred__35490.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__35491))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__35490.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__35491))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__35486,map__35486__$1,on_compile_fail,on_compile_warning))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__,msg_hist,msg_names,msg){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__,msg_hist,msg_names,msg){
return (function (state_35688){
var state_val_35689 = (state_35688[(1)]);
if((state_val_35689 === (7))){
var inst_35624 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35690_35731 = state_35688__$1;
(statearr_35690_35731[(2)] = inst_35624);

(statearr_35690_35731[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (20))){
var inst_35650 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_35688__$1 = state_35688;
if(inst_35650){
var statearr_35691_35732 = state_35688__$1;
(statearr_35691_35732[(1)] = (22));

} else {
var statearr_35692_35733 = state_35688__$1;
(statearr_35692_35733[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (27))){
var inst_35662 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35663 = figwheel.client.heads_up.display_warning.call(null,inst_35662);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(30),inst_35663);
} else {
if((state_val_35689 === (1))){
var inst_35612 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35612)){
var statearr_35693_35734 = state_35688__$1;
(statearr_35693_35734[(1)] = (2));

} else {
var statearr_35694_35735 = state_35688__$1;
(statearr_35694_35735[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (24))){
var inst_35678 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35695_35736 = state_35688__$1;
(statearr_35695_35736[(2)] = inst_35678);

(statearr_35695_35736[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (4))){
var inst_35686 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35688__$1,inst_35686);
} else {
if((state_val_35689 === (15))){
var inst_35639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35640 = figwheel.client.format_messages.call(null,inst_35639);
var inst_35641 = figwheel.client.heads_up.display_error.call(null,inst_35640);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(18),inst_35641);
} else {
if((state_val_35689 === (21))){
var inst_35680 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35696_35737 = state_35688__$1;
(statearr_35696_35737[(2)] = inst_35680);

(statearr_35696_35737[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (31))){
var inst_35669 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(34),inst_35669);
} else {
if((state_val_35689 === (32))){
var state_35688__$1 = state_35688;
var statearr_35697_35738 = state_35688__$1;
(statearr_35697_35738[(2)] = null);

(statearr_35697_35738[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (33))){
var inst_35674 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35698_35739 = state_35688__$1;
(statearr_35698_35739[(2)] = inst_35674);

(statearr_35698_35739[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (13))){
var inst_35630 = (state_35688[(2)]);
var inst_35631 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35632 = figwheel.client.format_messages.call(null,inst_35631);
var inst_35633 = figwheel.client.heads_up.display_error.call(null,inst_35632);
var state_35688__$1 = (function (){var statearr_35699 = state_35688;
(statearr_35699[(7)] = inst_35630);

return statearr_35699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(14),inst_35633);
} else {
if((state_val_35689 === (22))){
var inst_35652 = figwheel.client.heads_up.clear.call(null);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(25),inst_35652);
} else {
if((state_val_35689 === (29))){
var inst_35676 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35700_35740 = state_35688__$1;
(statearr_35700_35740[(2)] = inst_35676);

(statearr_35700_35740[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (6))){
var inst_35620 = figwheel.client.heads_up.clear.call(null);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(9),inst_35620);
} else {
if((state_val_35689 === (28))){
var inst_35667 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_35688__$1 = state_35688;
if(inst_35667){
var statearr_35701_35741 = state_35688__$1;
(statearr_35701_35741[(1)] = (31));

} else {
var statearr_35702_35742 = state_35688__$1;
(statearr_35702_35742[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (25))){
var inst_35654 = (state_35688[(2)]);
var inst_35655 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35656 = figwheel.client.heads_up.display_warning.call(null,inst_35655);
var state_35688__$1 = (function (){var statearr_35703 = state_35688;
(statearr_35703[(8)] = inst_35654);

return statearr_35703;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(26),inst_35656);
} else {
if((state_val_35689 === (34))){
var inst_35671 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35704_35743 = state_35688__$1;
(statearr_35704_35743[(2)] = inst_35671);

(statearr_35704_35743[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (17))){
var inst_35682 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35705_35744 = state_35688__$1;
(statearr_35705_35744[(2)] = inst_35682);

(statearr_35705_35744[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (3))){
var inst_35626 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_35688__$1 = state_35688;
if(inst_35626){
var statearr_35706_35745 = state_35688__$1;
(statearr_35706_35745[(1)] = (10));

} else {
var statearr_35707_35746 = state_35688__$1;
(statearr_35707_35746[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (12))){
var inst_35684 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35708_35747 = state_35688__$1;
(statearr_35708_35747[(2)] = inst_35684);

(statearr_35708_35747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (2))){
var inst_35614 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_35688__$1 = state_35688;
if(cljs.core.truth_(inst_35614)){
var statearr_35709_35748 = state_35688__$1;
(statearr_35709_35748[(1)] = (5));

} else {
var statearr_35710_35749 = state_35688__$1;
(statearr_35710_35749[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (23))){
var inst_35660 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_35688__$1 = state_35688;
if(inst_35660){
var statearr_35711_35750 = state_35688__$1;
(statearr_35711_35750[(1)] = (27));

} else {
var statearr_35712_35751 = state_35688__$1;
(statearr_35712_35751[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (19))){
var inst_35647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_35648 = figwheel.client.heads_up.append_message.call(null,inst_35647);
var state_35688__$1 = state_35688;
var statearr_35713_35752 = state_35688__$1;
(statearr_35713_35752[(2)] = inst_35648);

(statearr_35713_35752[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (11))){
var inst_35637 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_35688__$1 = state_35688;
if(inst_35637){
var statearr_35714_35753 = state_35688__$1;
(statearr_35714_35753[(1)] = (15));

} else {
var statearr_35715_35754 = state_35688__$1;
(statearr_35715_35754[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (9))){
var inst_35622 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35716_35755 = state_35688__$1;
(statearr_35716_35755[(2)] = inst_35622);

(statearr_35716_35755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (5))){
var inst_35616 = figwheel.client.heads_up.flash_loaded.call(null);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(8),inst_35616);
} else {
if((state_val_35689 === (14))){
var inst_35635 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35717_35756 = state_35688__$1;
(statearr_35717_35756[(2)] = inst_35635);

(statearr_35717_35756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (26))){
var inst_35658 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35718_35757 = state_35688__$1;
(statearr_35718_35757[(2)] = inst_35658);

(statearr_35718_35757[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (16))){
var inst_35645 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_35688__$1 = state_35688;
if(inst_35645){
var statearr_35719_35758 = state_35688__$1;
(statearr_35719_35758[(1)] = (19));

} else {
var statearr_35720_35759 = state_35688__$1;
(statearr_35720_35759[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (30))){
var inst_35665 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35721_35760 = state_35688__$1;
(statearr_35721_35760[(2)] = inst_35665);

(statearr_35721_35760[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (10))){
var inst_35628 = figwheel.client.heads_up.clear.call(null);
var state_35688__$1 = state_35688;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35688__$1,(13),inst_35628);
} else {
if((state_val_35689 === (18))){
var inst_35643 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35722_35761 = state_35688__$1;
(statearr_35722_35761[(2)] = inst_35643);

(statearr_35722_35761[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35689 === (8))){
var inst_35618 = (state_35688[(2)]);
var state_35688__$1 = state_35688;
var statearr_35723_35762 = state_35688__$1;
(statearr_35723_35762[(2)] = inst_35618);

(statearr_35723_35762[(1)] = (7));


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
});})(c__23370__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__23314__auto__,c__23370__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto____0 = (function (){
var statearr_35727 = [null,null,null,null,null,null,null,null,null];
(statearr_35727[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto__);

(statearr_35727[(1)] = (1));

return statearr_35727;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto____1 = (function (state_35688){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_35688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e35728){if((e35728 instanceof Object)){
var ex__23318__auto__ = e35728;
var statearr_35729_35763 = state_35688;
(statearr_35729_35763[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35728;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35764 = state_35688;
state_35688 = G__35764;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto__ = function(state_35688){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto____1.call(this,state_35688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__,msg_hist,msg_names,msg))
})();
var state__23372__auto__ = (function (){var statearr_35730 = f__23371__auto__.call(null);
(statearr_35730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_35730;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__,msg_hist,msg_names,msg))
);

return c__23370__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__23370__auto___35827 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto___35827,ch){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto___35827,ch){
return (function (state_35810){
var state_val_35811 = (state_35810[(1)]);
if((state_val_35811 === (8))){
var inst_35802 = (state_35810[(2)]);
var state_35810__$1 = (function (){var statearr_35812 = state_35810;
(statearr_35812[(7)] = inst_35802);

return statearr_35812;
})();
var statearr_35813_35828 = state_35810__$1;
(statearr_35813_35828[(2)] = null);

(statearr_35813_35828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (7))){
var inst_35806 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
var statearr_35814_35829 = state_35810__$1;
(statearr_35814_35829[(2)] = inst_35806);

(statearr_35814_35829[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (6))){
var state_35810__$1 = state_35810;
var statearr_35815_35830 = state_35810__$1;
(statearr_35815_35830[(2)] = null);

(statearr_35815_35830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (5))){
var inst_35798 = (state_35810[(8)]);
var inst_35800 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_35798);
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35810__$1,(8),inst_35800);
} else {
if((state_val_35811 === (4))){
var inst_35798 = (state_35810[(8)]);
var inst_35798__$1 = (state_35810[(2)]);
var state_35810__$1 = (function (){var statearr_35816 = state_35810;
(statearr_35816[(8)] = inst_35798__$1);

return statearr_35816;
})();
if(cljs.core.truth_(inst_35798__$1)){
var statearr_35817_35831 = state_35810__$1;
(statearr_35817_35831[(1)] = (5));

} else {
var statearr_35818_35832 = state_35810__$1;
(statearr_35818_35832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35811 === (3))){
var inst_35808 = (state_35810[(2)]);
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35810__$1,inst_35808);
} else {
if((state_val_35811 === (2))){
var state_35810__$1 = state_35810;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35810__$1,(4),ch);
} else {
if((state_val_35811 === (1))){
var state_35810__$1 = state_35810;
var statearr_35819_35833 = state_35810__$1;
(statearr_35819_35833[(2)] = null);

(statearr_35819_35833[(1)] = (2));


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
});})(c__23370__auto___35827,ch))
;
return ((function (switch__23314__auto__,c__23370__auto___35827,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__23315__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__23315__auto____0 = (function (){
var statearr_35823 = [null,null,null,null,null,null,null,null,null];
(statearr_35823[(0)] = figwheel$client$heads_up_plugin_$_state_machine__23315__auto__);

(statearr_35823[(1)] = (1));

return statearr_35823;
});
var figwheel$client$heads_up_plugin_$_state_machine__23315__auto____1 = (function (state_35810){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_35810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e35824){if((e35824 instanceof Object)){
var ex__23318__auto__ = e35824;
var statearr_35825_35834 = state_35810;
(statearr_35825_35834[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35824;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35835 = state_35810;
state_35810 = G__35835;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__23315__auto__ = function(state_35810){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__23315__auto____1.call(this,state_35810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__23315__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__23315__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto___35827,ch))
})();
var state__23372__auto__ = (function (){var statearr_35826 = f__23371__auto__.call(null);
(statearr_35826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto___35827);

return statearr_35826;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto___35827,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_35856){
var state_val_35857 = (state_35856[(1)]);
if((state_val_35857 === (2))){
var inst_35853 = (state_35856[(2)]);
var inst_35854 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35856__$1 = (function (){var statearr_35858 = state_35856;
(statearr_35858[(7)] = inst_35853);

return statearr_35858;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35856__$1,inst_35854);
} else {
if((state_val_35857 === (1))){
var inst_35851 = cljs.core.async.timeout.call(null,(3000));
var state_35856__$1 = state_35856;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35856__$1,(2),inst_35851);
} else {
return null;
}
}
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__23315__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__23315__auto____0 = (function (){
var statearr_35862 = [null,null,null,null,null,null,null,null];
(statearr_35862[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__23315__auto__);

(statearr_35862[(1)] = (1));

return statearr_35862;
});
var figwheel$client$enforce_project_plugin_$_state_machine__23315__auto____1 = (function (state_35856){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_35856);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e35863){if((e35863 instanceof Object)){
var ex__23318__auto__ = e35863;
var statearr_35864_35866 = state_35856;
(statearr_35864_35866[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35856);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35867 = state_35856;
state_35856 = G__35867;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__23315__auto__ = function(state_35856){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__23315__auto____1.call(this,state_35856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__23315__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__23315__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_35865 = f__23371__auto__.call(null);
(statearr_35865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_35865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__20276__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__20276__auto__)){
return ("CustomEvent" in window);
} else {
return and__20276__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj35871 = {"detail":url};
return obj35871;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35872){
var map__35878 = p__35872;
var map__35878__$1 = ((cljs.core.seq_QMARK_.call(null,map__35878))?cljs.core.apply.call(null,cljs.core.hash_map,map__35878):map__35878);
var ed = map__35878__$1;
var exception_data = cljs.core.get.call(null,map__35878__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var formatted_exception = cljs.core.get.call(null,map__35878__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35879_35883 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35880_35884 = null;
var count__35881_35885 = (0);
var i__35882_35886 = (0);
while(true){
if((i__35882_35886 < count__35881_35885)){
var msg_35887 = cljs.core._nth.call(null,chunk__35880_35884,i__35882_35886);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35887);

var G__35888 = seq__35879_35883;
var G__35889 = chunk__35880_35884;
var G__35890 = count__35881_35885;
var G__35891 = (i__35882_35886 + (1));
seq__35879_35883 = G__35888;
chunk__35880_35884 = G__35889;
count__35881_35885 = G__35890;
i__35882_35886 = G__35891;
continue;
} else {
var temp__4126__auto___35892 = cljs.core.seq.call(null,seq__35879_35883);
if(temp__4126__auto___35892){
var seq__35879_35893__$1 = temp__4126__auto___35892;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35879_35893__$1)){
var c__21075__auto___35894 = cljs.core.chunk_first.call(null,seq__35879_35893__$1);
var G__35895 = cljs.core.chunk_rest.call(null,seq__35879_35893__$1);
var G__35896 = c__21075__auto___35894;
var G__35897 = cljs.core.count.call(null,c__21075__auto___35894);
var G__35898 = (0);
seq__35879_35883 = G__35895;
chunk__35880_35884 = G__35896;
count__35881_35885 = G__35897;
i__35882_35886 = G__35898;
continue;
} else {
var msg_35899 = cljs.core.first.call(null,seq__35879_35893__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35899);

var G__35900 = cljs.core.next.call(null,seq__35879_35893__$1);
var G__35901 = null;
var G__35902 = (0);
var G__35903 = (0);
seq__35879_35883 = G__35900;
chunk__35880_35884 = G__35901;
count__35881_35885 = G__35902;
i__35882_35886 = G__35903;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35904){
var map__35906 = p__35904;
var map__35906__$1 = ((cljs.core.seq_QMARK_.call(null,map__35906))?cljs.core.apply.call(null,cljs.core.hash_map,map__35906):map__35906);
var w = map__35906__$1;
var message = cljs.core.get.call(null,map__35906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__20276__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__20276__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__20276__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35913 = cljs.core.seq.call(null,plugins);
var chunk__35914 = null;
var count__35915 = (0);
var i__35916 = (0);
while(true){
if((i__35916 < count__35915)){
var vec__35917 = cljs.core._nth.call(null,chunk__35914,i__35916);
var k = cljs.core.nth.call(null,vec__35917,(0),null);
var plugin = cljs.core.nth.call(null,vec__35917,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35919 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35913,chunk__35914,count__35915,i__35916,pl_35919,vec__35917,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35919.call(null,msg_hist);
});})(seq__35913,chunk__35914,count__35915,i__35916,pl_35919,vec__35917,k,plugin))
);
} else {
}

var G__35920 = seq__35913;
var G__35921 = chunk__35914;
var G__35922 = count__35915;
var G__35923 = (i__35916 + (1));
seq__35913 = G__35920;
chunk__35914 = G__35921;
count__35915 = G__35922;
i__35916 = G__35923;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__35913);
if(temp__4126__auto__){
var seq__35913__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35913__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__35913__$1);
var G__35924 = cljs.core.chunk_rest.call(null,seq__35913__$1);
var G__35925 = c__21075__auto__;
var G__35926 = cljs.core.count.call(null,c__21075__auto__);
var G__35927 = (0);
seq__35913 = G__35924;
chunk__35914 = G__35925;
count__35915 = G__35926;
i__35916 = G__35927;
continue;
} else {
var vec__35918 = cljs.core.first.call(null,seq__35913__$1);
var k = cljs.core.nth.call(null,vec__35918,(0),null);
var plugin = cljs.core.nth.call(null,vec__35918,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35928 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35913,chunk__35914,count__35915,i__35916,pl_35928,vec__35918,k,plugin,seq__35913__$1,temp__4126__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35928.call(null,msg_hist);
});})(seq__35913,chunk__35914,count__35915,i__35916,pl_35928,vec__35918,k,plugin,seq__35913__$1,temp__4126__auto__))
);
} else {
}

var G__35929 = cljs.core.next.call(null,seq__35913__$1);
var G__35930 = null;
var G__35931 = (0);
var G__35932 = (0);
seq__35913 = G__35929;
chunk__35914 = G__35930;
count__35915 = G__35931;
i__35916 = G__35932;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__35933){
var map__35935 = p__35933;
var map__35935__$1 = ((cljs.core.seq_QMARK_.call(null,map__35935))?cljs.core.apply.call(null,cljs.core.hash_map,map__35935):map__35935);
var opts = map__35935__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__35933 = null;
if (arguments.length > 0) {
var G__35936__i = 0, G__35936__a = new Array(arguments.length -  0);
while (G__35936__i < G__35936__a.length) {G__35936__a[G__35936__i] = arguments[G__35936__i + 0]; ++G__35936__i;}
  p__35933 = new cljs.core.IndexedSeq(G__35936__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__35933);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__35937){
var p__35933 = cljs.core.seq(arglist__35937);
return figwheel$client$watch_and_reload__delegate(p__35933);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map