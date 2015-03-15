// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent_forms.core');
goog.require('cljs.core');
goog.require('reagent_forms.datepicker');
goog.require('reagent.core');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.walk');
reagent_forms.core.value_of = (function reagent_forms$core$value_of(element){
return element.target.value;
});
reagent_forms.core.id__GT_path = cljs.core.memoize.call(null,(function (id){
return cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,cljs.core.name.call(null,id),/\./));
}));
reagent_forms.core.set_doc_value = (function reagent_forms$core$set_doc_value(doc,id,value,events){
var path = reagent_forms.core.id__GT_path.call(null,id);
return cljs.core.reduce.call(null,((function (path){
return (function (p1__34717_SHARP_,p2__34716_SHARP_){
var or__20288__auto__ = p2__34716_SHARP_.call(null,path,value,p1__34717_SHARP_);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return p1__34717_SHARP_;
}
});})(path))
,cljs.core.assoc_in.call(null,doc,path,value),events);
});
reagent_forms.core.mk_save_fn = (function reagent_forms$core$mk_save_fn(doc,events){
return (function (id,value){
return cljs.core.swap_BANG_.call(null,doc,reagent_forms.core.set_doc_value,id,value,events);
});
});
reagent_forms.core.wrap_get_fn = (function reagent_forms$core$wrap_get_fn(get,wrapper){
return (function (id){
return wrapper.call(null,get.call(null,id));
});
});
reagent_forms.core.wrap_save_fn = (function reagent_forms$core$wrap_save_fn(save_BANG_,wrapper){
return (function (id,value){
return save_BANG_.call(null,id,wrapper.call(null,value));
});
});
reagent_forms.core.wrap_fns = (function reagent_forms$core$wrap_fns(opts,node){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"get","get",1683182755),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"in-fn","in-fn",-1938980694).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var in_fn = temp__4124__auto__;
return reagent_forms.core.wrap_get_fn.call(null,new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts),in_fn);
} else {
return new cljs.core.Keyword(null,"get","get",1683182755).cljs$core$IFn$_invoke$arity$1(opts);
}
})(),new cljs.core.Keyword(null,"save!","save!",-1137373803),(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"out-fn","out-fn",747295447).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,node));
if(cljs.core.truth_(temp__4124__auto__)){
var out_fn = temp__4124__auto__;
return reagent_forms.core.wrap_save_fn.call(null,new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts),out_fn);
} else {
return new cljs.core.Keyword(null,"save!","save!",-1137373803).cljs$core$IFn$_invoke$arity$1(opts);
}
})()], null);
});
reagent_forms.core.format_type = (function (){var method_table__21185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21189__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","format-type"),((function (method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__){
return (function (field_type,_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field_type], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"numeric","numeric",-1495594714)], null)))){
return new cljs.core.Keyword(null,"numeric","numeric",-1495594714);
} else {
return field_type;
}
});})(method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21189__auto__,method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__));
})();
reagent_forms.core.valid_number_ending_QMARK_ = (function reagent_forms$core$valid_number_ending_QMARK_(n){
return ((cljs.core.not_EQ_.call(null,".",cljs.core.last.call(null,cljs.core.butlast.call(null,n)))) && (cljs.core._EQ_.call(null,".",cljs.core.last.call(null,n)))) || (cljs.core._EQ_.call(null,"0",cljs.core.last.call(null,n)));
});
reagent_forms.core.format_value = (function reagent_forms$core$format_value(fmt,value){
if(cljs.core.truth_((function (){var and__20276__auto__ = cljs.core.not.call(null,isNaN(parseFloat(value)));
if(and__20276__auto__){
return fmt;
} else {
return and__20276__auto__;
}
})())){
return goog.string.format(fmt,value);
} else {
return value;
}
});
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (_,n){
if(cljs.core.truth_(cljs.core.not_empty.call(null,n))){
var parsed = parseFloat(n);
if(cljs.core.truth_(isNaN(parsed))){
return null;
} else {
if(reagent_forms.core.valid_number_ending_QMARK_.call(null,n)){
return n;
} else {
return parsed;
}
}
} else {
return null;
}
}));
cljs.core._add_method.call(null,reagent_forms.core.format_type,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,value){
return value;
}));
reagent_forms.core.bind = (function (){var method_table__21185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21189__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","bind"),((function (method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__){
return (function (p__34718,_){
var map__34719 = p__34718;
var map__34719__$1 = ((cljs.core.seq_QMARK_.call(null,map__34719))?cljs.core.apply.call(null,cljs.core.hash_map,map__34719):map__34719);
var field = cljs.core.get.call(null,map__34719__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field], true),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"numeric","numeric",-1495594714),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field;
}
});})(method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21189__auto__,method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__34721,p__34722){
var map__34723 = p__34721;
var map__34723__$1 = ((cljs.core.seq_QMARK_.call(null,map__34723))?cljs.core.apply.call(null,cljs.core.hash_map,map__34723):map__34723);
var fmt = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__34723__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var map__34724 = p__34722;
var map__34724__$1 = ((cljs.core.seq_QMARK_.call(null,map__34724))?cljs.core.apply.call(null,cljs.core.hash_map,map__34724):map__34724);
var doc = cljs.core.get.call(null,map__34724__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var save_BANG_ = cljs.core.get.call(null,map__34724__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34724__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),(function (){var value = (function (){var or__20288__auto__ = get.call(null,id);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "";
}
})();
return reagent_forms.core.format_value.call(null,fmt,value);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__34723,map__34723__$1,fmt,id,field,map__34724,map__34724__$1,doc,save_BANG_,get){
return (function (p1__34720_SHARP_){
return save_BANG_.call(null,id,reagent_forms.core.format_type.call(null,field,reagent_forms.core.value_of.call(null,p1__34720_SHARP_)));
});})(map__34723,map__34723__$1,fmt,id,field,map__34724,map__34724__$1,doc,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__34725,p__34726){
var map__34727 = p__34725;
var map__34727__$1 = ((cljs.core.seq_QMARK_.call(null,map__34727))?cljs.core.apply.call(null,cljs.core.hash_map,map__34727):map__34727);
var id = cljs.core.get.call(null,map__34727__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__34728 = p__34726;
var map__34728__$1 = ((cljs.core.seq_QMARK_.call(null,map__34728))?cljs.core.apply.call(null,cljs.core.hash_map,map__34728):map__34728);
var save_BANG_ = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34728__$1,new cljs.core.Keyword(null,"get","get",1683182755));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"checked","checked",-50955819),get.call(null,id),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__34727,map__34727__$1,id,map__34728,map__34728__$1,save_BANG_,get){
return (function (){
return save_BANG_.call(null,id,cljs.core.not.call(null,get.call(null,id)));
});})(map__34727,map__34727__$1,id,map__34728,map__34728__$1,save_BANG_,get))
], null);
}));
cljs.core._add_method.call(null,reagent_forms.core.bind,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
 * @param {...*} var_args
 */
reagent_forms.core.set_attrs = (function() { 
var reagent_forms$core$set_attrs__delegate = function (p__34729,opts,p__34730){
var vec__34733 = p__34729;
var type = cljs.core.nth.call(null,vec__34733,(0),null);
var attrs = cljs.core.nth.call(null,vec__34733,(1),null);
var body = cljs.core.nthnext.call(null,vec__34733,(2));
var vec__34734 = p__34730;
var default_attrs = cljs.core.nth.call(null,vec__34734,(0),null);
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,default_attrs,reagent_forms.core.bind.call(null,attrs,opts),attrs)], null),body);
};
var reagent_forms$core$set_attrs = function (p__34729,opts,var_args){
var p__34730 = null;
if (arguments.length > 2) {
var G__34735__i = 0, G__34735__a = new Array(arguments.length -  2);
while (G__34735__i < G__34735__a.length) {G__34735__a[G__34735__i] = arguments[G__34735__i + 2]; ++G__34735__i;}
  p__34730 = new cljs.core.IndexedSeq(G__34735__a,0);
} 
return reagent_forms$core$set_attrs__delegate.call(this,p__34729,opts,p__34730);};
reagent_forms$core$set_attrs.cljs$lang$maxFixedArity = 2;
reagent_forms$core$set_attrs.cljs$lang$applyTo = (function (arglist__34736){
var p__34729 = cljs.core.first(arglist__34736);
arglist__34736 = cljs.core.next(arglist__34736);
var opts = cljs.core.first(arglist__34736);
var p__34730 = cljs.core.rest(arglist__34736);
return reagent_forms$core$set_attrs__delegate(p__34729,opts,p__34730);
});
reagent_forms$core$set_attrs.cljs$core$IFn$_invoke$arity$variadic = reagent_forms$core$set_attrs__delegate;
return reagent_forms$core$set_attrs;
})()
;
reagent_forms.core.init_field = (function (){var method_table__21185__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__21186__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__21187__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__21188__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__21189__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"reagent-forms.core","init-field"),((function (method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__){
return (function (p__34737,_){
var vec__34738 = p__34737;
var ___$1 = cljs.core.nth.call(null,vec__34738,(0),null);
var map__34739 = cljs.core.nth.call(null,vec__34738,(1),null);
var map__34739__$1 = ((cljs.core.seq_QMARK_.call(null,map__34739))?cljs.core.apply.call(null,cljs.core.hash_map,map__34739):map__34739);
var field = cljs.core.get.call(null,map__34739__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var field__$1 = cljs.core.keyword.call(null,field);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([field__$1], true),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"range","range",1639692286),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"password","password",417022471),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"textarea","textarea",-650375824)], null)))){
return new cljs.core.Keyword(null,"input-field","input-field",289353943);
} else {
return field__$1;
}
});})(method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__,hierarchy__21189__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__21189__auto__,method_table__21185__auto__,prefer_table__21186__auto__,method_cache__21187__auto__,cached_hierarchy__21188__auto__));
})();
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"container","container",-1736937707),(function (p__34740,p__34741){
var vec__34742 = p__34740;
var _ = cljs.core.nth.call(null,vec__34742,(0),null);
var attrs = cljs.core.nth.call(null,vec__34742,(1),null);
var component = vec__34742;
var map__34743 = p__34741;
var map__34743__$1 = ((cljs.core.seq_QMARK_.call(null,map__34743))?cljs.core.apply.call(null,cljs.core.hash_map,map__34743):map__34743);
var doc = cljs.core.get.call(null,map__34743__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34742,_,attrs,component,map__34743,map__34743__$1,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return component;
} else {
return null;
}
} else {
return component;
}
});
;})(vec__34742,_,attrs,component,map__34743,map__34743__$1,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"input-field","input-field",289353943),(function (p__34744,p__34745){
var vec__34746 = p__34744;
var _ = cljs.core.nth.call(null,vec__34746,(0),null);
var map__34747 = cljs.core.nth.call(null,vec__34746,(1),null);
var map__34747__$1 = ((cljs.core.seq_QMARK_.call(null,map__34747))?cljs.core.apply.call(null,cljs.core.hash_map,map__34747):map__34747);
var attrs = map__34747__$1;
var field = cljs.core.get.call(null,map__34747__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var component = vec__34746;
var map__34748 = p__34745;
var map__34748__$1 = ((cljs.core.seq_QMARK_.call(null,map__34748))?cljs.core.apply.call(null,cljs.core.hash_map,map__34748):map__34748);
var opts = map__34748__$1;
var doc = cljs.core.get.call(null,map__34748__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34746,_,map__34747,map__34747__$1,attrs,field,component,map__34748,map__34748__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__34746,_,map__34747,map__34747__$1,attrs,field,component,map__34748,map__34748__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),(function (p__34750,p__34751){
var vec__34752 = p__34750;
var type = cljs.core.nth.call(null,vec__34752,(0),null);
var map__34753 = cljs.core.nth.call(null,vec__34752,(1),null);
var map__34753__$1 = ((cljs.core.seq_QMARK_.call(null,map__34753))?cljs.core.apply.call(null,cljs.core.hash_map,map__34753):map__34753);
var attrs = map__34753__$1;
var fmt = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"fmt","fmt",332300772));
var id = cljs.core.get.call(null,map__34753__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__34754 = p__34751;
var map__34754__$1 = ((cljs.core.seq_QMARK_.call(null,map__34754))?cljs.core.apply.call(null,cljs.core.hash_map,map__34754):map__34754);
var save_BANG_ = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var display_value = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),false,new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id)], null));
return ((function (display_value,vec__34752,type,map__34753,map__34753__$1,attrs,fmt,id,map__34754,map__34754__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__20288__auto__ = get.call(null,id);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "";
}
})();
var map__34755 = cljs.core.deref.call(null,display_value);
var map__34755__$1 = ((cljs.core.seq_QMARK_.call(null,map__34755))?cljs.core.apply.call(null,cljs.core.hash_map,map__34755):map__34755);
var value = cljs.core.get.call(null,map__34755__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__34755__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__22095__auto__,temp__4124__auto__,display_value,vec__34752,type,map__34753,map__34753__$1,attrs,fmt,id,map__34754,map__34754__$1,save_BANG_,get,doc){
return (function (p1__34749_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__34749_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(visible__22095__auto__,temp__4124__auto__,display_value,vec__34752,type,map__34753,map__34753__$1,attrs,fmt,id,map__34754,map__34754__$1,save_BANG_,get,doc))
], null),attrs)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),(function (){var doc_value = (function (){var or__20288__auto__ = get.call(null,id);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "";
}
})();
var map__34756 = cljs.core.deref.call(null,display_value);
var map__34756__$1 = ((cljs.core.seq_QMARK_.call(null,map__34756))?cljs.core.apply.call(null,cljs.core.hash_map,map__34756):map__34756);
var value = cljs.core.get.call(null,map__34756__$1,new cljs.core.Keyword(null,"value","value",305978217));
var changed_self_QMARK_ = cljs.core.get.call(null,map__34756__$1,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));
var value__$1 = (cljs.core.truth_(changed_self_QMARK_)?value:doc_value);
cljs.core.swap_BANG_.call(null,display_value,cljs.core.dissoc,new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137));

return reagent_forms.core.format_value.call(null,fmt,value__$1);
})(),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,display_value,vec__34752,type,map__34753,map__34753__$1,attrs,fmt,id,map__34754,map__34754__$1,save_BANG_,get,doc){
return (function (p1__34749_SHARP_){
var temp__4124__auto____$1 = reagent_forms.core.format_type.call(null,new cljs.core.Keyword(null,"numeric","numeric",-1495594714),reagent_forms.core.value_of.call(null,p1__34749_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
cljs.core.reset_BANG_.call(null,display_value,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changed-self?","changed-self?",-1042295137),true,new cljs.core.Keyword(null,"value","value",305978217),value], null));

return save_BANG_.call(null,id,parseFloat(value));
} else {
return save_BANG_.call(null,id,null);
}
});})(temp__4124__auto__,display_value,vec__34752,type,map__34753,map__34753__$1,attrs,fmt,id,map__34754,map__34754__$1,save_BANG_,get,doc))
], null),attrs)], null);
}
});
;})(display_value,vec__34752,type,map__34753,map__34753__$1,attrs,fmt,id,map__34754,map__34754__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"datepicker","datepicker",821741450),(function (p__34758,p__34759){
var vec__34760 = p__34758;
var _ = cljs.core.nth.call(null,vec__34760,(0),null);
var map__34761 = cljs.core.nth.call(null,vec__34760,(1),null);
var map__34761__$1 = ((cljs.core.seq_QMARK_.call(null,map__34761))?cljs.core.apply.call(null,cljs.core.hash_map,map__34761):map__34761);
var attrs = map__34761__$1;
var auto_close_QMARK_ = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"auto-close?","auto-close?",-1675434568));
var inline = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"inline","inline",1399884222));
var date_format = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"date-format","date-format",-557196721));
var id = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__34762 = p__34759;
var map__34762__$1 = ((cljs.core.seq_QMARK_.call(null,map__34762))?cljs.core.apply.call(null,cljs.core.hash_map,map__34762):map__34762);
var save_BANG_ = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34762__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var fmt = reagent_forms.datepicker.parse_format.call(null,date_format);
var today = (new Date());
var expanded_QMARK_ = reagent.core.atom.call(null,false);
return ((function (fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
,((function (visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (p1__34757_SHARP_){
return save_BANG_.call(null,id,p1__34757_SHARP_);
});})(visible__22095__auto__,temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
,inline], null)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.datepicker-wrapper","div.datepicker-wrapper",2036556212),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group.date","div.input-group.date",-987970676),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"value","value",305978217),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var date = temp__4126__auto__;
return reagent_forms.datepicker.format_date.call(null,date,fmt);
} else {
return null;
}
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.input-group-addon","span.input-group-addon",-1300181023),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.swap_BANG_.call(null,expanded_QMARK_,cljs.core.not);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.glyphicon.glyphicon-calendar","i.glyphicon.glyphicon-calendar",-1048928069)], null)], null)], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.datepicker,today.getFullYear(),today.getMonth(),today.getDate(),expanded_QMARK_,auto_close_QMARK_,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (){
return get.call(null,id);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
,((function (temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc){
return (function (p1__34757_SHARP_){
return save_BANG_.call(null,id,p1__34757_SHARP_);
});})(temp__4124__auto__,fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
,inline], null)], null);
}
});
;})(fmt,today,expanded_QMARK_,vec__34760,_,map__34761,map__34761__$1,attrs,auto_close_QMARK_,inline,date_format,id,map__34762,map__34762__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"checkbox","checkbox",1612615655),(function (p__34763,p__34764){
var vec__34765 = p__34763;
var _ = cljs.core.nth.call(null,vec__34765,(0),null);
var map__34766 = cljs.core.nth.call(null,vec__34765,(1),null);
var map__34766__$1 = ((cljs.core.seq_QMARK_.call(null,map__34766))?cljs.core.apply.call(null,cljs.core.hash_map,map__34766):map__34766);
var attrs = map__34766__$1;
var field = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var id = cljs.core.get.call(null,map__34766__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var component = vec__34765;
var map__34767 = p__34764;
var map__34767__$1 = ((cljs.core.seq_QMARK_.call(null,map__34767))?cljs.core.apply.call(null,cljs.core.hash_map,map__34767):map__34767);
var opts = map__34767__$1;
var get = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34765,_,map__34766,map__34766__$1,attrs,field,id,component,map__34767,map__34767__$1,opts,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
} else {
return null;
}
} else {
return reagent_forms.core.set_attrs.call(null,component,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),field], null));
}
});
;})(vec__34765,_,map__34766,map__34766__$1,attrs,field,id,component,map__34767,map__34767__$1,opts,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"label","label",1718410804),(function (p__34768,p__34769){
var vec__34770 = p__34768;
var type = cljs.core.nth.call(null,vec__34770,(0),null);
var map__34771 = cljs.core.nth.call(null,vec__34770,(1),null);
var map__34771__$1 = ((cljs.core.seq_QMARK_.call(null,map__34771))?cljs.core.apply.call(null,cljs.core.hash_map,map__34771):map__34771);
var attrs = map__34771__$1;
var placeholder = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var postamble = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"postamble","postamble",-500033366));
var preamble = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"preamble","preamble",1641040241));
var id = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__34772 = p__34769;
var map__34772__$1 = ((cljs.core.seq_QMARK_.call(null,map__34772))?cljs.core.apply.call(null,cljs.core.hash_map,map__34772):map__34772);
var get = cljs.core.get.call(null,map__34772__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34772__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34770,type,map__34771,map__34771__$1,attrs,placeholder,postamble,preamble,id,map__34772,map__34772__$1,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,preamble,(function (){var temp__4124__auto____$1 = get.call(null,id);
if(cljs.core.truth_(temp__4124__auto____$1)){
var value = temp__4124__auto____$1;
return [cljs.core.str(value),cljs.core.str(postamble)].join('');
} else {
return placeholder;
}
})()], null);
}
});
;})(vec__34770,type,map__34771,map__34771__$1,attrs,placeholder,postamble,preamble,id,map__34772,map__34772__$1,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"alert","alert",-571950580),(function (p__34773,p__34774){
var vec__34775 = p__34773;
var type = cljs.core.nth.call(null,vec__34775,(0),null);
var map__34776 = cljs.core.nth.call(null,vec__34775,(1),null);
var map__34776__$1 = ((cljs.core.seq_QMARK_.call(null,map__34776))?cljs.core.apply.call(null,cljs.core.hash_map,map__34776):map__34776);
var attrs = map__34776__$1;
var touch_event = cljs.core.get.call(null,map__34776__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var event = cljs.core.get.call(null,map__34776__$1,new cljs.core.Keyword(null,"event","event",301435442));
var id = cljs.core.get.call(null,map__34776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var body = cljs.core.nthnext.call(null,vec__34775,(2));
var map__34777 = p__34774;
var map__34777__$1 = ((cljs.core.seq_QMARK_.call(null,map__34777))?cljs.core.apply.call(null,cljs.core.hash_map,map__34777):map__34777);
var opts = map__34777__$1;
var save_BANG_ = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34777__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34775,type,map__34776,map__34776__$1,attrs,touch_event,event,id,body,map__34777,map__34777__$1,opts,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__20288__auto__ = touch_event;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,visible__22095__auto__,temp__4124__auto__,vec__34775,type,map__34776,map__34776__$1,attrs,touch_event,event,id,body,map__34777,map__34777__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,visible__22095__auto__,temp__4124__auto__,vec__34775,type,map__34776,map__34776__$1,attrs,touch_event,event,id,body,map__34777,map__34777__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
} else {
return null;
}
} else {
if(cljs.core.truth_(event)){
if(cljs.core.truth_(event.call(null,get.call(null,id)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.dissoc.call(null,attrs,event)], null),body);
} else {
return null;
}
} else {
var temp__4124__auto____$1 = cljs.core.not_empty.call(null,get.call(null,id));
if(cljs.core.truth_(temp__4124__auto____$1)){
var message = temp__4124__auto____$1;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.close","button.close",-1545560743),new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true,(function (){var or__20288__auto__ = touch_event;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),((function (message,temp__4124__auto____$1,temp__4124__auto__,vec__34775,type,map__34776,map__34776__$1,attrs,touch_event,event,id,body,map__34777,map__34777__$1,opts,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,id,null);
});})(message,temp__4124__auto____$1,temp__4124__auto__,vec__34775,type,map__34776,map__34776__$1,attrs,touch_event,event,id,body,map__34777,map__34777__$1,opts,save_BANG_,get,doc))
], true, false),"X"], null),message], null);
} else {
return null;
}
}
}
});
;})(vec__34775,type,map__34776,map__34776__$1,attrs,touch_event,event,id,body,map__34777,map__34777__$1,opts,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"radio","radio",1323726374),(function (p__34778,p__34779){
var vec__34780 = p__34778;
var type = cljs.core.nth.call(null,vec__34780,(0),null);
var map__34781 = cljs.core.nth.call(null,vec__34780,(1),null);
var map__34781__$1 = ((cljs.core.seq_QMARK_.call(null,map__34781))?cljs.core.apply.call(null,cljs.core.hash_map,map__34781):map__34781);
var attrs = map__34781__$1;
var value = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"value","value",305978217));
var name = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var field = cljs.core.get.call(null,map__34781__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var body = cljs.core.nthnext.call(null,vec__34780,(2));
var map__34782 = p__34779;
var map__34782__$1 = ((cljs.core.seq_QMARK_.call(null,map__34782))?cljs.core.apply.call(null,cljs.core.hash_map,map__34782):map__34782);
var save_BANG_ = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34780,type,map__34781,map__34781__$1,attrs,value,name,field,body,map__34782,map__34782__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__22095__auto__,temp__4124__auto__,vec__34780,type,map__34781,map__34781__$1,attrs,value,name,field,body,map__34782,map__34782__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(visible__22095__auto__,temp__4124__auto__,vec__34780,type,map__34781,map__34781__$1,attrs,value,name,field,body,map__34782,map__34782__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
} else {
return null;
}
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radio","radio",1323726374),new cljs.core.Keyword(null,"checked","checked",-50955819),cljs.core._EQ_.call(null,value,get.call(null,name)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,vec__34780,type,map__34781,map__34781__$1,attrs,value,name,field,body,map__34782,map__34782__$1,save_BANG_,get,doc){
return (function (){
return save_BANG_.call(null,name,value);
});})(temp__4124__auto__,vec__34780,type,map__34781,map__34781__$1,attrs,value,name,field,body,map__34782,map__34782__$1,save_BANG_,get,doc))
], null),attrs)], null),body);
}
});
;})(vec__34780,type,map__34781,map__34781__$1,attrs,value,name,field,body,map__34782,map__34782__$1,save_BANG_,get,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"typeahead","typeahead",-1364611797),(function (p__34784,p__34785){
var vec__34786 = p__34784;
var type = cljs.core.nth.call(null,vec__34786,(0),null);
var map__34787 = cljs.core.nth.call(null,vec__34786,(1),null);
var map__34787__$1 = ((cljs.core.seq_QMARK_.call(null,map__34787))?cljs.core.apply.call(null,cljs.core.hash_map,map__34787):map__34787);
var attrs = map__34787__$1;
var data_source = cljs.core.get.call(null,map__34787__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var id = cljs.core.get.call(null,map__34787__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__34788 = p__34785;
var map__34788__$1 = ((cljs.core.seq_QMARK_.call(null,map__34788))?cljs.core.apply.call(null,cljs.core.hash_map,map__34788):map__34788);
var save_BANG_ = cljs.core.get.call(null,map__34788__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34788__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34788__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var typeahead_hidden_QMARK_ = reagent.core.atom.call(null,true);
var mouse_on_list_QMARK_ = reagent.core.atom.call(null,false);
return ((function (typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (p1__34783_SHARP_){
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__34783_SHARP_));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = data_source.call(null,value.toLowerCase());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__20288__auto__ = cljs.core.empty_QMARK_.call(null,results);
if(or__20288__auto__){
return or__20288__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null),(function (){var iter__21044__auto__ = ((function (results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function reagent_forms$core$iter__34789(s__34790){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
var s__34790__$1 = s__34790;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34790__$1);
if(temp__4126__auto____$1){
var s__34790__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34790__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__34790__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__34792 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__34791 = (0);
while(true){
if((i__34791 < size__21043__auto__)){
var result = cljs.core._nth.call(null,c__21042__auto__,i__34791);
cljs.core.chunk_append.call(null,b__34792,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34791,result,c__21042__auto__,size__21043__auto__,b__34792,s__34790__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(i__34791,result,c__21042__auto__,size__21043__auto__,b__34792,s__34790__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null),result], null));

var G__34797 = (i__34791 + (1));
i__34791 = G__34797;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34792),reagent_forms$core$iter__34789.call(null,cljs.core.chunk_rest.call(null,s__34790__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34792),null);
}
} else {
var result = cljs.core.first.call(null,s__34790__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__34790__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(result,s__34790__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null),result], null),reagent_forms$core$iter__34789.call(null,cljs.core.rest.call(null,s__34790__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,visible__22095__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
;
return iter__21044__auto__.call(null,results);
})()], null);
} else {
return null;
}
})()], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"value","value",305978217),get.call(null,id),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
if(cljs.core.truth_(cljs.core.deref.call(null,mouse_on_list_QMARK_))){
return null;
} else {
return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);
}
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (p1__34783_SHARP_){
save_BANG_.call(null,id,reagent_forms.core.value_of.call(null,p1__34783_SHARP_));

return cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,false);
});})(temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null)], null),(function (){var temp__4126__auto__ = get.call(null,id);
if(cljs.core.truth_(temp__4126__auto__)){
var value = temp__4126__auto__;
var results = data_source.call(null,value.toLowerCase());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.typeahead","ul.typeahead",-1230632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),(function (){var or__20288__auto__ = cljs.core.empty_QMARK_.call(null,results);
if(or__20288__auto__){
return or__20288__auto__;
} else {
return cljs.core.deref.call(null,typeahead_hidden_QMARK_);
}
})(),new cljs.core.Keyword(null,"on-mouse-enter","on-mouse-enter",-1664921661),((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,true);
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
,new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
return cljs.core.reset_BANG_.call(null,mouse_on_list_QMARK_,false);
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null),(function (){var iter__21044__auto__ = ((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function reagent_forms$core$iter__34793(s__34794){
return (new cljs.core.LazySeq(null,((function (results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
var s__34794__$1 = s__34794;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34794__$1);
if(temp__4126__auto____$1){
var s__34794__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34794__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__34794__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__34796 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__34795 = (0);
while(true){
if((i__34795 < size__21043__auto__)){
var result = cljs.core._nth.call(null,c__21042__auto__,i__34795);
cljs.core.chunk_append.call(null,b__34796,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34795,result,c__21042__auto__,size__21043__auto__,b__34796,s__34794__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(i__34795,result,c__21042__auto__,size__21043__auto__,b__34796,s__34794__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null),result], null));

var G__34798 = (i__34795 + (1));
i__34795 = G__34798;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34796),reagent_forms$core$iter__34793.call(null,cljs.core.chunk_rest.call(null,s__34794__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34796),null);
}
} else {
var result = cljs.core.first.call(null,s__34794__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (result,s__34794__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc){
return (function (){
cljs.core.reset_BANG_.call(null,typeahead_hidden_QMARK_,true);

return save_BANG_.call(null,id,result);
});})(result,s__34794__$2,temp__4126__auto____$1,results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
], null),result], null),reagent_forms$core$iter__34793.call(null,cljs.core.rest.call(null,s__34794__$2)));
}
} else {
return null;
}
break;
}
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
,null,null));
});})(results,value,temp__4126__auto__,temp__4124__auto__,typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
;
return iter__21044__auto__.call(null,results);
})()], null);
} else {
return null;
}
})()], null);
}
});
;})(typeahead_hidden_QMARK_,mouse_on_list_QMARK_,vec__34786,type,map__34787,map__34787__$1,attrs,data_source,id,map__34788,map__34788__$1,save_BANG_,get,doc))
}));
reagent_forms.core.group_item = (function reagent_forms$core$group_item(p__34799,p__34800,selections,field,id){
var vec__34804 = p__34799;
var type = cljs.core.nth.call(null,vec__34804,(0),null);
var map__34805 = cljs.core.nth.call(null,vec__34804,(1),null);
var map__34805__$1 = ((cljs.core.seq_QMARK_.call(null,map__34805))?cljs.core.apply.call(null,cljs.core.hash_map,map__34805):map__34805);
var attrs = map__34805__$1;
var touch_event = cljs.core.get.call(null,map__34805__$1,new cljs.core.Keyword(null,"touch-event","touch-event",-1071581783));
var key = cljs.core.get.call(null,map__34805__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var body = cljs.core.nthnext.call(null,vec__34804,(2));
var map__34806 = p__34800;
var map__34806__$1 = ((cljs.core.seq_QMARK_.call(null,map__34806))?cljs.core.apply.call(null,cljs.core.hash_map,map__34806):map__34806);
var multi_select = cljs.core.get.call(null,map__34806__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var save_BANG_ = cljs.core.get.call(null,map__34806__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var handle_click_BANG_ = ((function (vec__34804,type,map__34805,map__34805__$1,attrs,touch_event,key,body,map__34806,map__34806__$1,multi_select,save_BANG_){
return (function reagent_forms$core$group_item_$_handle_click_BANG_(){
if(cljs.core.truth_(multi_select)){
cljs.core.swap_BANG_.call(null,selections,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.not);

return save_BANG_.call(null,id,cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,cljs.core.second,cljs.core.deref.call(null,selections))));
} else {
var value = cljs.core.get.call(null,cljs.core.deref.call(null,selections),key);
cljs.core.reset_BANG_.call(null,selections,new cljs.core.PersistentArrayMap.fromArray([key,cljs.core.not.call(null,value)], true, false));

return save_BANG_.call(null,id,(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?key:null));
}
});})(vec__34804,type,map__34805,map__34805__$1,attrs,touch_event,key,body,map__34806,map__34806__$1,multi_select,save_BANG_))
;
return ((function (vec__34804,type,map__34805,map__34805__$1,attrs,touch_event,key,body,map__34806,map__34806__$1,multi_select,save_BANG_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,selections),key))?"active":null),(function (){var or__20288__auto__ = touch_event;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543);
}
})(),handle_click_BANG_], true, false),attrs),body], null);
});
;})(vec__34804,type,map__34805,map__34805__$1,attrs,touch_event,key,body,map__34806,map__34806__$1,multi_select,save_BANG_))
});
reagent_forms.core.mk_selections = (function reagent_forms$core$mk_selections(id,selectors,p__34807){
var map__34812 = p__34807;
var map__34812__$1 = ((cljs.core.seq_QMARK_.call(null,map__34812))?cljs.core.apply.call(null,cljs.core.hash_map,map__34812):map__34812);
var multi_select = cljs.core.get.call(null,map__34812__$1,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287));
var get = cljs.core.get.call(null,map__34812__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var value = get.call(null,id);
return cljs.core.reduce.call(null,((function (value,map__34812,map__34812__$1,multi_select,get){
return (function (m,p__34813){
var vec__34814 = p__34813;
var _ = cljs.core.nth.call(null,vec__34814,(0),null);
var map__34815 = cljs.core.nth.call(null,vec__34814,(1),null);
var map__34815__$1 = ((cljs.core.seq_QMARK_.call(null,map__34815))?cljs.core.apply.call(null,cljs.core.hash_map,map__34815):map__34815);
var key = cljs.core.get.call(null,map__34815__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.assoc.call(null,m,key,cljs.core.boolean$.call(null,cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([key], true),(cljs.core.truth_(multi_select)?value:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [value], null)))));
});})(value,map__34812,map__34812__$1,multi_select,get))
,cljs.core.PersistentArrayMap.EMPTY,selectors);
});
/**
 * selectors might be passed in inline or as a collection
 */
reagent_forms.core.extract_selectors = (function reagent_forms$core$extract_selectors(selectors){
if((cljs.core.ffirst.call(null,selectors) instanceof cljs.core.Keyword)){
return selectors;
} else {
return cljs.core.first.call(null,selectors);
}
});
reagent_forms.core.selection_group = (function reagent_forms$core$selection_group(p__34818,p__34819){
var vec__34825 = p__34818;
var type = cljs.core.nth.call(null,vec__34825,(0),null);
var map__34826 = cljs.core.nth.call(null,vec__34825,(1),null);
var map__34826__$1 = ((cljs.core.seq_QMARK_.call(null,map__34826))?cljs.core.apply.call(null,cljs.core.hash_map,map__34826):map__34826);
var attrs = map__34826__$1;
var id = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__34826__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var selection_items = cljs.core.nthnext.call(null,vec__34825,(2));
var map__34827 = p__34819;
var map__34827__$1 = ((cljs.core.seq_QMARK_.call(null,map__34827))?cljs.core.apply.call(null,cljs.core.hash_map,map__34827):map__34827);
var opts = map__34827__$1;
var get = cljs.core.get.call(null,map__34827__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var selection_items__$1 = reagent_forms.core.extract_selectors.call(null,selection_items);
var selections = reagent.core.atom.call(null,reagent_forms.core.mk_selections.call(null,id,selection_items__$1,opts));
var selectors = cljs.core.map.call(null,((function (selection_items__$1,selections,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get){
return (function (item){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,item)),new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.group_item.call(null,item,opts,selections,field,id)], null)], null);
});})(selection_items__$1,selections,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get))
,selection_items__$1);
return ((function (selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get){
return (function (){
if(cljs.core.truth_(get.call(null,id))){
} else {
cljs.core.swap_BANG_.call(null,selections,((function (selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get){
return (function (p1__34816_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get){
return (function (p__34828){
var vec__34829 = p__34828;
var k = cljs.core.nth.call(null,vec__34829,(0),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,false], null);
});})(selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get))
,p1__34816_SHARP_));
});})(selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get))
);
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,attrs,cljs.core.doall.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"selector","selector",762528866),cljs.core.filter.call(null,((function (selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get){
return (function (p1__34817_SHARP_){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(p1__34817_SHARP_);
if(cljs.core.truth_(temp__4124__auto__)){
var visible_QMARK_ = temp__4124__auto__;
return visible_QMARK_.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(opts)));
} else {
return true;
}
});})(selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get))
,selectors)))], null);
});
;})(selection_items__$1,selections,selectors,vec__34825,type,map__34826,map__34826__$1,attrs,id,field,selection_items,map__34827,map__34827__$1,opts,get))
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"single-select","single-select",1327691774),(function (p__34830,p__34831){
var vec__34832 = p__34830;
var _ = cljs.core.nth.call(null,vec__34832,(0),null);
var attrs = cljs.core.nth.call(null,vec__34832,(1),null);
var field = vec__34832;
var map__34833 = p__34831;
var map__34833__$1 = ((cljs.core.seq_QMARK_.call(null,map__34833))?cljs.core.apply.call(null,cljs.core.hash_map,map__34833):map__34833);
var opts = map__34833__$1;
var doc = cljs.core.get.call(null,map__34833__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34832,_,attrs,field,map__34833,map__34833__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,opts], null);
}
});
;})(vec__34832,_,attrs,field,map__34833,map__34833__$1,opts,doc))
}));
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),(function (p__34834,p__34835){
var vec__34836 = p__34834;
var _ = cljs.core.nth.call(null,vec__34836,(0),null);
var attrs = cljs.core.nth.call(null,vec__34836,(1),null);
var field = vec__34836;
var map__34837 = p__34835;
var map__34837__$1 = ((cljs.core.seq_QMARK_.call(null,map__34837))?cljs.core.apply.call(null,cljs.core.hash_map,map__34837):map__34837);
var opts = map__34837__$1;
var doc = cljs.core.get.call(null,map__34837__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
return ((function (vec__34836,_,attrs,field,map__34837,map__34837__$1,opts,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.core.selection_group,field,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"multi-select","multi-select",-1298511287),true)], null);
}
});
;})(vec__34836,_,attrs,field,map__34837,map__34837__$1,opts,doc))
}));
reagent_forms.core.map_options = (function reagent_forms$core$map_options(options){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__21044__auto__ = (function reagent_forms$core$map_options_$_iter__34850(s__34851){
return (new cljs.core.LazySeq(null,(function (){
var s__34851__$1 = s__34851;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34851__$1);
if(temp__4126__auto__){
var s__34851__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34851__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__34851__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__34853 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__34852 = (0);
while(true){
if((i__34852 < size__21043__auto__)){
var vec__34858 = cljs.core._nth.call(null,c__21042__auto__,i__34852);
var _ = cljs.core.nth.call(null,vec__34858,(0),null);
var map__34859 = cljs.core.nth.call(null,vec__34858,(1),null);
var map__34859__$1 = ((cljs.core.seq_QMARK_.call(null,map__34859))?cljs.core.apply.call(null,cljs.core.hash_map,map__34859):map__34859);
var key = cljs.core.get.call(null,map__34859__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__34858,(2),null);
cljs.core.chunk_append.call(null,b__34853,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null));

var G__34862 = (i__34852 + (1));
i__34852 = G__34862;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34853),reagent_forms$core$map_options_$_iter__34850.call(null,cljs.core.chunk_rest.call(null,s__34851__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34853),null);
}
} else {
var vec__34860 = cljs.core.first.call(null,s__34851__$2);
var _ = cljs.core.nth.call(null,vec__34860,(0),null);
var map__34861 = cljs.core.nth.call(null,vec__34860,(1),null);
var map__34861__$1 = ((cljs.core.seq_QMARK_.call(null,map__34861))?cljs.core.apply.call(null,cljs.core.hash_map,map__34861):map__34861);
var key = cljs.core.get.call(null,map__34861__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var label = cljs.core.nth.call(null,vec__34860,(2),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(label)].join(''),key], null),reagent_forms$core$map_options_$_iter__34850.call(null,cljs.core.rest.call(null,s__34851__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21044__auto__.call(null,options);
})());
});
reagent_forms.core.default_selection = (function reagent_forms$core$default_selection(options,v){
return cljs.core.last.call(null,cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34863_SHARP_){
return cljs.core._EQ_.call(null,v,cljs.core.get_in.call(null,p1__34863_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null)));
}),options)));
});
cljs.core._add_method.call(null,reagent_forms.core.init_field,new cljs.core.Keyword(null,"list","list",765357683),(function (p__34866,p__34867){
var vec__34868 = p__34866;
var type = cljs.core.nth.call(null,vec__34868,(0),null);
var map__34869 = cljs.core.nth.call(null,vec__34868,(1),null);
var map__34869__$1 = ((cljs.core.seq_QMARK_.call(null,map__34869))?cljs.core.apply.call(null,cljs.core.hash_map,map__34869):map__34869);
var attrs = map__34869__$1;
var id = cljs.core.get.call(null,map__34869__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var field = cljs.core.get.call(null,map__34869__$1,new cljs.core.Keyword(null,"field","field",-1302436500));
var options = cljs.core.nthnext.call(null,vec__34868,(2));
var map__34870 = p__34867;
var map__34870__$1 = ((cljs.core.seq_QMARK_.call(null,map__34870))?cljs.core.apply.call(null,cljs.core.hash_map,map__34870):map__34870);
var save_BANG_ = cljs.core.get.call(null,map__34870__$1,new cljs.core.Keyword(null,"save!","save!",-1137373803));
var get = cljs.core.get.call(null,map__34870__$1,new cljs.core.Keyword(null,"get","get",1683182755));
var doc = cljs.core.get.call(null,map__34870__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var options__$1 = reagent_forms.core.extract_selectors.call(null,options);
var options_lookup = reagent_forms.core.map_options.call(null,options__$1);
var selection = reagent.core.atom.call(null,(function (){var or__20288__auto__ = get.call(null,id);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return cljs.core.get_in.call(null,cljs.core.first.call(null,options__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),new cljs.core.Keyword(null,"key","key",-1516042587)], null));
}
})());
save_BANG_.call(null,id,cljs.core.deref.call(null,selection));

return ((function (options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc){
return (function (){
var temp__4124__auto__ = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(attrs);
if(cljs.core.truth_(temp__4124__auto__)){
var visible__22095__auto__ = temp__4124__auto__;
if(cljs.core.truth_(visible__22095__auto__.call(null,cljs.core.deref.call(null,doc)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (visible__22095__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc){
return (function (p1__34864_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__34864_SHARP_)));
});})(visible__22095__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (visible__22095__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc){
return (function (p1__34865_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34865_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(visible__22095__auto__,temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc))
,options__$1))], null);
} else {
return null;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [type,cljs.core.merge.call(null,attrs,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-value","default-value",232220170),reagent_forms.core.default_selection.call(null,options__$1,cljs.core.deref.call(null,selection)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc){
return (function (p1__34864_SHARP_){
return save_BANG_.call(null,id,cljs.core.get.call(null,options_lookup,reagent_forms.core.value_of.call(null,p1__34864_SHARP_)));
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc))
], null)),cljs.core.doall.call(null,cljs.core.filter.call(null,((function (temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc){
return (function (p1__34865_SHARP_){
var temp__4124__auto____$1 = new cljs.core.Keyword(null,"visible?","visible?",2129863715).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,p1__34865_SHARP_));
if(cljs.core.truth_(temp__4124__auto____$1)){
var visible_QMARK_ = temp__4124__auto____$1;
return visible_QMARK_.call(null,cljs.core.deref.call(null,doc));
} else {
return true;
}
});})(temp__4124__auto__,options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc))
,options__$1))], null);
}
});
;})(options__$1,options_lookup,selection,vec__34868,type,map__34869,map__34869__$1,attrs,id,field,options,map__34870,map__34870__$1,save_BANG_,get,doc))
}));
reagent_forms.core.field_QMARK_ = (function reagent_forms$core$field_QMARK_(node){
return (cljs.core.coll_QMARK_.call(null,node)) && (cljs.core.map_QMARK_.call(null,cljs.core.second.call(null,node))) && (cljs.core.contains_QMARK_.call(null,cljs.core.second.call(null,node),new cljs.core.Keyword(null,"field","field",-1302436500)));
});
/**
 * creates data bindings between the form fields and the supplied atom
 * form - the form template with the fields
 * doc - the document that the fields will be bound to
 * events - any events that should be triggered when the document state changes
 * @param {...*} var_args
 */
reagent_forms.core.bind_fields = (function() { 
var reagent_forms$core$bind_fields__delegate = function (form,doc,events){
var opts = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"doc","doc",1913296891),doc,new cljs.core.Keyword(null,"get","get",1683182755),(function (p1__34871_SHARP_){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,doc),reagent_forms.core.id__GT_path.call(null,p1__34871_SHARP_));
}),new cljs.core.Keyword(null,"save!","save!",-1137373803),reagent_forms.core.mk_save_fn.call(null,doc,events)], null);
var form__$1 = clojure.walk.postwalk.call(null,((function (opts){
return (function (node){
if(reagent_forms.core.field_QMARK_.call(null,node)){
var opts__$1 = reagent_forms.core.wrap_fns.call(null,opts,node);
var field = reagent_forms.core.init_field.call(null,node,opts__$1);
if(cljs.core.fn_QMARK_.call(null,field)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null);
} else {
return field;
}
} else {
return node;
}
});})(opts))
,form);
return ((function (opts,form__$1){
return (function (){
return form__$1;
});
;})(opts,form__$1))
};
var reagent_forms$core$bind_fields = function (form,doc,var_args){
var events = null;
if (arguments.length > 2) {
var G__34872__i = 0, G__34872__a = new Array(arguments.length -  2);
while (G__34872__i < G__34872__a.length) {G__34872__a[G__34872__i] = arguments[G__34872__i + 2]; ++G__34872__i;}
  events = new cljs.core.IndexedSeq(G__34872__a,0);
} 
return reagent_forms$core$bind_fields__delegate.call(this,form,doc,events);};
reagent_forms$core$bind_fields.cljs$lang$maxFixedArity = 2;
reagent_forms$core$bind_fields.cljs$lang$applyTo = (function (arglist__34873){
var form = cljs.core.first(arglist__34873);
arglist__34873 = cljs.core.next(arglist__34873);
var doc = cljs.core.first(arglist__34873);
var events = cljs.core.rest(arglist__34873);
return reagent_forms$core$bind_fields__delegate(form,doc,events);
});
reagent_forms$core$bind_fields.cljs$core$IFn$_invoke$arity$variadic = reagent_forms$core$bind_fields__delegate;
return reagent_forms$core$bind_fields;
})()
;

//# sourceMappingURL=core.js.map