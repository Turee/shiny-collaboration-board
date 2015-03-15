// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('clojure.string');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__35955_35963 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__35956_35964 = null;
var count__35957_35965 = (0);
var i__35958_35966 = (0);
while(true){
if((i__35958_35966 < count__35957_35965)){
var k_35967 = cljs.core._nth.call(null,chunk__35956_35964,i__35958_35966);
e.setAttribute(cljs.core.name.call(null,k_35967),cljs.core.get.call(null,attrs,k_35967));

var G__35968 = seq__35955_35963;
var G__35969 = chunk__35956_35964;
var G__35970 = count__35957_35965;
var G__35971 = (i__35958_35966 + (1));
seq__35955_35963 = G__35968;
chunk__35956_35964 = G__35969;
count__35957_35965 = G__35970;
i__35958_35966 = G__35971;
continue;
} else {
var temp__4126__auto___35972 = cljs.core.seq.call(null,seq__35955_35963);
if(temp__4126__auto___35972){
var seq__35955_35973__$1 = temp__4126__auto___35972;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35955_35973__$1)){
var c__21075__auto___35974 = cljs.core.chunk_first.call(null,seq__35955_35973__$1);
var G__35975 = cljs.core.chunk_rest.call(null,seq__35955_35973__$1);
var G__35976 = c__21075__auto___35974;
var G__35977 = cljs.core.count.call(null,c__21075__auto___35974);
var G__35978 = (0);
seq__35955_35963 = G__35975;
chunk__35956_35964 = G__35976;
count__35957_35965 = G__35977;
i__35958_35966 = G__35978;
continue;
} else {
var k_35979 = cljs.core.first.call(null,seq__35955_35973__$1);
e.setAttribute(cljs.core.name.call(null,k_35979),cljs.core.get.call(null,attrs,k_35979));

var G__35980 = cljs.core.next.call(null,seq__35955_35973__$1);
var G__35981 = null;
var G__35982 = (0);
var G__35983 = (0);
seq__35955_35963 = G__35980;
chunk__35956_35964 = G__35981;
count__35957_35965 = G__35982;
i__35958_35966 = G__35983;
continue;
}
} else {
}
}
break;
}

var seq__35959_35984 = cljs.core.seq.call(null,children);
var chunk__35960_35985 = null;
var count__35961_35986 = (0);
var i__35962_35987 = (0);
while(true){
if((i__35962_35987 < count__35961_35986)){
var ch_35988 = cljs.core._nth.call(null,chunk__35960_35985,i__35962_35987);
e.appendChild(ch_35988);

var G__35989 = seq__35959_35984;
var G__35990 = chunk__35960_35985;
var G__35991 = count__35961_35986;
var G__35992 = (i__35962_35987 + (1));
seq__35959_35984 = G__35989;
chunk__35960_35985 = G__35990;
count__35961_35986 = G__35991;
i__35962_35987 = G__35992;
continue;
} else {
var temp__4126__auto___35993 = cljs.core.seq.call(null,seq__35959_35984);
if(temp__4126__auto___35993){
var seq__35959_35994__$1 = temp__4126__auto___35993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35959_35994__$1)){
var c__21075__auto___35995 = cljs.core.chunk_first.call(null,seq__35959_35994__$1);
var G__35996 = cljs.core.chunk_rest.call(null,seq__35959_35994__$1);
var G__35997 = c__21075__auto___35995;
var G__35998 = cljs.core.count.call(null,c__21075__auto___35995);
var G__35999 = (0);
seq__35959_35984 = G__35996;
chunk__35960_35985 = G__35997;
count__35961_35986 = G__35998;
i__35962_35987 = G__35999;
continue;
} else {
var ch_36000 = cljs.core.first.call(null,seq__35959_35994__$1);
e.appendChild(ch_36000);

var G__36001 = cljs.core.next.call(null,seq__35959_35994__$1);
var G__36002 = null;
var G__36003 = (0);
var G__36004 = (0);
seq__35959_35984 = G__36001;
chunk__35960_35985 = G__36002;
count__35961_35986 = G__36003;
i__35962_35987 = G__36004;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__36005__i = 0, G__36005__a = new Array(arguments.length -  2);
while (G__36005__i < G__36005__a.length) {G__36005__a[G__36005__i] = arguments[G__36005__i + 2]; ++G__36005__i;}
  children = new cljs.core.IndexedSeq(G__36005__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__36006){
var t = cljs.core.first(arglist__36006);
arglist__36006 = cljs.core.next(arglist__36006);
var attrs = cljs.core.first(arglist__36006);
var children = cljs.core.rest(arglist__36006);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__21185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21189__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21189__auto__,method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_36007 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_36007.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_36007.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_36007.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_36007);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__36008,st_map){
var map__36012 = p__36008;
var map__36012__$1 = ((cljs.core.seq_QMARK_.call(null,map__36012))?cljs.core.apply.call(null,cljs.core.hash_map,map__36012):map__36012);
var container_el = cljs.core.get.call(null,map__36012__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__36012,map__36012__$1,container_el){
return (function (p__36013){
var vec__36014 = p__36013;
var k = cljs.core.nth.call(null,vec__36014,(0),null);
var v = cljs.core.nth.call(null,vec__36014,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__36012,map__36012__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__36015,dom_str){
var map__36017 = p__36015;
var map__36017__$1 = ((cljs.core.seq_QMARK_.call(null,map__36017))?cljs.core.apply.call(null,cljs.core.hash_map,map__36017):map__36017);
var c = map__36017__$1;
var content_area_el = cljs.core.get.call(null,map__36017__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__36018){
var map__36020 = p__36018;
var map__36020__$1 = ((cljs.core.seq_QMARK_.call(null,map__36020))?cljs.core.apply.call(null,cljs.core.hash_map,map__36020):map__36020);
var content_area_el = cljs.core.get.call(null,map__36020__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_36062){
var state_val_36063 = (state_36062[(1)]);
if((state_val_36063 === (2))){
var inst_36047 = (state_36062[(7)]);
var inst_36056 = (state_36062[(2)]);
var inst_36057 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_36058 = ["auto"];
var inst_36059 = cljs.core.PersistentHashMap.fromArrays(inst_36057,inst_36058);
var inst_36060 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36047,inst_36059);
var state_36062__$1 = (function (){var statearr_36064 = state_36062;
(statearr_36064[(8)] = inst_36056);

return statearr_36064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36062__$1,inst_36060);
} else {
if((state_val_36063 === (1))){
var inst_36047 = (state_36062[(7)]);
var inst_36047__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36048 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36049 = ["10px","10px","100%","68px","1.0"];
var inst_36050 = cljs.core.PersistentHashMap.fromArrays(inst_36048,inst_36049);
var inst_36051 = cljs.core.merge.call(null,inst_36050,style);
var inst_36052 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36047__$1,inst_36051);
var inst_36053 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36047__$1,msg);
var inst_36054 = cljs.core.async.timeout.call(null,(300));
var state_36062__$1 = (function (){var statearr_36065 = state_36062;
(statearr_36065[(9)] = inst_36052);

(statearr_36065[(10)] = inst_36053);

(statearr_36065[(7)] = inst_36047__$1);

return statearr_36065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36062__$1,(2),inst_36054);
} else {
return null;
}
}
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto____0 = (function (){
var statearr_36069 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36069[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto__);

(statearr_36069[(1)] = (1));

return statearr_36069;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto____1 = (function (state_36062){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_36062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e36070){if((e36070 instanceof Object)){
var ex__23318__auto__ = e36070;
var statearr_36071_36073 = state_36062;
(statearr_36071_36073[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36070;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36074 = state_36062;
state_36062 = G__36074;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto__ = function(state_36062){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto____1.call(this,state_36062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_36072 = f__23371__auto__.call(null);
(statearr_36072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_36072;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4124__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__36076 = temp__4124__auto__;
var f = cljs.core.nth.call(null,vec__36076,(0),null);
var ln = cljs.core.nth.call(null,vec__36076,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__36079 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__36079,(0),null);
var file_line = cljs.core.nth.call(null,vec__36079,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__36079,file_name,file_line){
return (function (p1__36077_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__36077_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__36079,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__36081 = figwheel.client.heads_up.ensure_container.call(null);
var map__36081__$1 = ((cljs.core.seq_QMARK_.call(null,map__36081))?cljs.core.apply.call(null,cljs.core.hash_map,map__36081):map__36081);
var content_area_el = cljs.core.get.call(null,map__36081__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_36128){
var state_val_36129 = (state_36128[(1)]);
if((state_val_36129 === (3))){
var inst_36111 = (state_36128[(7)]);
var inst_36125 = (state_36128[(2)]);
var inst_36126 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36111,"");
var state_36128__$1 = (function (){var statearr_36130 = state_36128;
(statearr_36130[(8)] = inst_36125);

return statearr_36130;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36128__$1,inst_36126);
} else {
if((state_val_36129 === (2))){
var inst_36111 = (state_36128[(7)]);
var inst_36118 = (state_36128[(2)]);
var inst_36119 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_36120 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_36121 = cljs.core.PersistentHashMap.fromArrays(inst_36119,inst_36120);
var inst_36122 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36111,inst_36121);
var inst_36123 = cljs.core.async.timeout.call(null,(200));
var state_36128__$1 = (function (){var statearr_36131 = state_36128;
(statearr_36131[(9)] = inst_36122);

(statearr_36131[(10)] = inst_36118);

return statearr_36131;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36128__$1,(3),inst_36123);
} else {
if((state_val_36129 === (1))){
var inst_36111 = (state_36128[(7)]);
var inst_36111__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36112 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36113 = ["0.0"];
var inst_36114 = cljs.core.PersistentHashMap.fromArrays(inst_36112,inst_36113);
var inst_36115 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36111__$1,inst_36114);
var inst_36116 = cljs.core.async.timeout.call(null,(300));
var state_36128__$1 = (function (){var statearr_36132 = state_36128;
(statearr_36132[(11)] = inst_36115);

(statearr_36132[(7)] = inst_36111__$1);

return statearr_36132;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36128__$1,(2),inst_36116);
} else {
return null;
}
}
}
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__23315__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__23315__auto____0 = (function (){
var statearr_36136 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36136[(0)] = figwheel$client$heads_up$clear_$_state_machine__23315__auto__);

(statearr_36136[(1)] = (1));

return statearr_36136;
});
var figwheel$client$heads_up$clear_$_state_machine__23315__auto____1 = (function (state_36128){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_36128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e36137){if((e36137 instanceof Object)){
var ex__23318__auto__ = e36137;
var statearr_36138_36140 = state_36128;
(statearr_36138_36140[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36141 = state_36128;
state_36128 = G__36141;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__23315__auto__ = function(state_36128){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__23315__auto____1.call(this,state_36128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__23315__auto____0;
figwheel$client$heads_up$clear_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__23315__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_36139 = f__23371__auto__.call(null);
(statearr_36139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_36139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__23370__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__23370__auto__){
return (function (){
var f__23371__auto__ = (function (){var switch__23314__auto__ = ((function (c__23370__auto__){
return (function (state_36173){
var state_val_36174 = (state_36173[(1)]);
if((state_val_36174 === (4))){
var inst_36171 = (state_36173[(2)]);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36173__$1,inst_36171);
} else {
if((state_val_36174 === (3))){
var inst_36168 = (state_36173[(2)]);
var inst_36169 = figwheel.client.heads_up.clear.call(null);
var state_36173__$1 = (function (){var statearr_36175 = state_36173;
(statearr_36175[(7)] = inst_36168);

return statearr_36175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36173__$1,(4),inst_36169);
} else {
if((state_val_36174 === (2))){
var inst_36165 = (state_36173[(2)]);
var inst_36166 = cljs.core.async.timeout.call(null,(400));
var state_36173__$1 = (function (){var statearr_36176 = state_36173;
(statearr_36176[(8)] = inst_36165);

return statearr_36176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36173__$1,(3),inst_36166);
} else {
if((state_val_36174 === (1))){
var inst_36163 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_36173__$1 = state_36173;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36173__$1,(2),inst_36163);
} else {
return null;
}
}
}
}
});})(c__23370__auto__))
;
return ((function (switch__23314__auto__,c__23370__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto____0 = (function (){
var statearr_36180 = [null,null,null,null,null,null,null,null,null];
(statearr_36180[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto__);

(statearr_36180[(1)] = (1));

return statearr_36180;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto____1 = (function (state_36173){
while(true){
var ret_value__23316__auto__ = (function (){try{while(true){
var result__23317__auto__ = switch__23314__auto__.call(null,state_36173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__23317__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__23317__auto__;
}
break;
}
}catch (e36181){if((e36181 instanceof Object)){
var ex__23318__auto__ = e36181;
var statearr_36182_36184 = state_36173;
(statearr_36182_36184[(5)] = ex__23318__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23316__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36185 = state_36173;
state_36173 = G__36185;
continue;
} else {
return ret_value__23316__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto__ = function(state_36173){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto____1.call(this,state_36173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__23315__auto__;
})()
;})(switch__23314__auto__,c__23370__auto__))
})();
var state__23372__auto__ = (function (){var statearr_36183 = f__23371__auto__.call(null);
(statearr_36183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23370__auto__);

return statearr_36183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23372__auto__);
});})(c__23370__auto__))
);

return c__23370__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map