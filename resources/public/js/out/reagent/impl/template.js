// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent.impl.template');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.batching');
goog.require('clojure.string');
goog.require('reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 * from a tag name.
 */
reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;
reagent.impl.template.attr_aliases = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),"className",new cljs.core.Keyword(null,"for","for",-1323786319),"htmlFor",new cljs.core.Keyword(null,"charset","charset",-1063822193),"charSet"], null);
reagent.impl.template.hiccup_tag_QMARK_ = (function reagent$impl$template$hiccup_tag_QMARK_(x){
return ((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)) || (typeof x === 'string');
});
reagent.impl.template.valid_tag_QMARK_ = (function reagent$impl$template$valid_tag_QMARK_(x){
return (reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (reagent.impl.util.clj_ifn_QMARK_.call(null,x));
});
reagent.impl.template.to_js_val = (function reagent$impl$template$to_js_val(v){
if(typeof v === 'string'){
return v;
} else {
if(typeof v === 'number'){
return v;
} else {
if((v instanceof cljs.core.Keyword)){
return cljs.core.name.call(null,v);
} else {
if((v instanceof cljs.core.Symbol)){
return [cljs.core.str(v)].join('');
} else {
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs.core.clj__GT_js.call(null,v);
} else {
if(cljs.core.ifn_QMARK_.call(null,v)){
return (function() { 
var G__34526__delegate = function (args){
return cljs.core.apply.call(null,v,args);
};
var G__34526 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34527__i = 0, G__34527__a = new Array(arguments.length -  0);
while (G__34527__i < G__34527__a.length) {G__34527__a[G__34527__i] = arguments[G__34527__i + 0]; ++G__34527__i;}
  args = new cljs.core.IndexedSeq(G__34527__a,0);
} 
return G__34526__delegate.call(this,args);};
G__34526.cljs$lang$maxFixedArity = 0;
G__34526.cljs$lang$applyTo = (function (arglist__34528){
var args = cljs.core.seq(arglist__34528);
return G__34526__delegate(args);
});
G__34526.cljs$core$IFn$_invoke$arity$variadic = G__34526__delegate;
return G__34526;
})()
;
} else {
return v;

}
}
}
}
}
}
});
reagent.impl.template.undash_prop_name = (function reagent$impl$template$undash_prop_name(n){
var or__20288__auto__ = reagent.impl.template.attr_aliases.call(null,n);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return reagent.impl.util.dash_to_camel.call(null,n);
}
});
reagent.impl.template.cached_prop_name = reagent.impl.util.memoize_1.call(null,reagent.impl.template.undash_prop_name);
reagent.impl.template.cached_style_name = reagent.impl.util.memoize_1.call(null,reagent.impl.util.dash_to_camel);
reagent.impl.template.convert_prop_value = (function reagent$impl$template$convert_prop_value(x){
if(typeof x === 'string'){
return x;
} else {
if(typeof x === 'number'){
return x;
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,(function (o,k,v){
var G__34530 = o;
(G__34530[reagent.impl.template.cached_prop_name.call(null,k)] = reagent.impl.template.to_js_val.call(null,v));

return G__34530;
}),{},x);
} else {
return reagent.impl.template.to_js_val.call(null,x);

}
}
}
});
reagent.impl.template.set_id_class = (function reagent$impl$template$set_id_class(props,p__34531){
var vec__34533 = p__34531;
var id = cljs.core.nth.call(null,vec__34533,(0),null);
var class$ = cljs.core.nth.call(null,vec__34533,(1),null);
var pid = (props["id"]);
(props["id"] = ((!((pid == null)))?pid:id));

if((class$ == null)){
return null;
} else {
var old = (props["className"]);
return (props["className"] = ((!((old == null)))?[cljs.core.str(class$),cljs.core.str(" "),cljs.core.str(old)].join(''):class$));
}
});
reagent.impl.template.convert_props = (function reagent$impl$template$convert_props(props,id_class){
if((cljs.core.empty_QMARK_.call(null,props)) && ((id_class == null))){
return null;
} else {
if((cljs.core.type.call(null,props) === Object)){
return props;
} else {
var objprops = cljs.core.reduce_kv.call(null,(function (o,k,v){
var pname_34534 = reagent.impl.template.cached_prop_name.call(null,k);
if(!((pname_34534 === "key"))){
(o[pname_34534] = reagent.impl.template.convert_prop_value.call(null,v));
} else {
}

return o;
}),{},props);
if((id_class == null)){
} else {
reagent.impl.template.set_id_class.call(null,objprops,id_class);
}

return objprops;

}
}
});
reagent.impl.template.input_handle_change = (function reagent$impl$template$input_handle_change(this$,on_change,e){
var res = on_change.call(null,e);
reagent.impl.batching.queue_render.call(null,this$);

return res;
});
reagent.impl.template.input_did_update = (function reagent$impl$template$input_did_update(this$){
var value = (this$["cljsInputValue"]);
if((value == null)){
return null;
} else {
var node = (this$["getDOMNode"])();
if(cljs.core.not_EQ_.call(null,value,(node["value"]))){
return (node["value"] = value);
} else {
return null;
}
}
});
reagent.impl.template.input_render_setup = (function reagent$impl$template$input_render_setup(this$,jsprops){
var on_change = (jsprops["onChange"]);
var value = (((on_change == null))?null:(jsprops["value"]));
(this$["cljsInputValue"] = value);

if((value == null)){
return null;
} else {
reagent.impl.batching.mark_rendered.call(null,this$);

var G__34537 = jsprops;
(G__34537["defaultValue"] = value);

(G__34537["value"] = null);

(G__34537["onChange"] = ((function (G__34537,on_change,value){
return (function (p1__34535_SHARP_){
return reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__34535_SHARP_);
});})(G__34537,on_change,value))
);

return G__34537;
}
});
reagent.impl.template.input_component_QMARK_ = (function reagent$impl$template$input_component_QMARK_(x){
var DOM = (React["DOM"]);
return ((x === (DOM["input"]))) || ((x === (DOM["textarea"])));
});
reagent.impl.template.wrapped_render = (function reagent$impl$template$wrapped_render(this$,comp,id_class,input_setup){
var inprops = (this$["props"]);
var argv = (inprops["argv"]);
var props = cljs.core.nth.call(null,argv,(1),null);
var hasprops = ((props == null)) || (cljs.core.map_QMARK_.call(null,props));
var jsargs = reagent.impl.template.convert_args.call(null,argv,((hasprops)?(2):(1)),((inprops["level"]) + (1)));
var jsprops = reagent.impl.template.convert_props.call(null,((hasprops)?props:null),id_class);
if((input_setup == null)){
} else {
input_setup.call(null,this$,jsprops);
}

(jsargs[(0)] = jsprops);

return comp.apply(null,jsargs);
});
reagent.impl.template.wrapped_should_update = (function reagent$impl$template$wrapped_should_update(c,nextprops,nextstate){
var or__20288__auto__ = reagent.impl.util._STAR_always_update_STAR_;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
var a1 = (c["props"]["argv"]);
var a2 = (nextprops["argv"]);
return cljs.core.not.call(null,reagent.impl.util.equal_args.call(null,a1,a2));
}
});
reagent.impl.template.add_input_methods = (function reagent$impl$template$add_input_methods(spec){
var G__34539 = spec;
(G__34539["componentDidUpdate"] = ((function (G__34539){
return (function (){
var c = this;
return reagent.impl.template.input_did_update.call(null,c);
});})(G__34539))
);

(G__34539["componentWillUnmount"] = ((function (G__34539){
return (function (){
var c = this;
return reagent.impl.batching.dispose.call(null,c);
});})(G__34539))
);

return G__34539;
});
reagent.impl.template.wrap_component = (function reagent$impl$template$wrap_component(comp,extras,name){
var input_QMARK_ = reagent.impl.template.input_component_QMARK_.call(null,comp);
var input_setup = ((input_QMARK_)?reagent.impl.template.input_render_setup:null);
var spec = {"displayName": (function (){var or__20288__auto__ = name;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "ComponentWrapper";
}
})(), "shouldComponentUpdate": ((function (input_QMARK_,input_setup){
return (function (p1__34540_SHARP_,p2__34541_SHARP_){
var C = this;
return reagent.impl.template.wrapped_should_update.call(null,C,p1__34540_SHARP_,p2__34541_SHARP_);
});})(input_QMARK_,input_setup))
, "render": ((function (input_QMARK_,input_setup){
return (function (){
var C = this;
return reagent.impl.template.wrapped_render.call(null,C,comp,extras,input_setup);
});})(input_QMARK_,input_setup))
};
if(input_QMARK_){
reagent.impl.template.add_input_methods.call(null,spec);
} else {
}

return (React["createClass"])(spec);
});
reagent.impl.template.parse_tag = (function reagent$impl$template$parse_tag(hiccup_tag){
var vec__34543 = cljs.core.next.call(null,cljs.core.re_matches.call(null,reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__34543,(0),null);
var id = cljs.core.nth.call(null,vec__34543,(1),null);
var class$ = cljs.core.nth.call(null,vec__34543,(2),null);
var comp = ((React["DOM"])[tag]);
var class_SINGLEQUOTE_ = (cljs.core.truth_(class$)?clojure.string.replace.call(null,class$,/\./," "):null);
if(cljs.core.truth_(comp)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown tag: '"),cljs.core.str(hiccup_tag),cljs.core.str("'")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"comp","comp",-1462482139,null)))].join('')));
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,(cljs.core.truth_((function (){var or__20288__auto__ = id;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return class_SINGLEQUOTE_;
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,class_SINGLEQUOTE_], null):null)], null);
});
reagent.impl.template.get_wrapper = (function reagent$impl$template$get_wrapper(tag){
var vec__34545 = reagent.impl.template.parse_tag.call(null,tag);
var comp = cljs.core.nth.call(null,vec__34545,(0),null);
var id_class = cljs.core.nth.call(null,vec__34545,(1),null);
return reagent.impl.template.wrap_component.call(null,comp,id_class,[cljs.core.str(tag)].join(''));
});
reagent.impl.template.cached_wrapper = reagent.impl.util.memoize_1.call(null,reagent.impl.template.get_wrapper);
reagent.impl.template.fn_to_class = (function reagent$impl$template$fn_to_class(f){
var spec = cljs.core.meta.call(null,f);
var withrender = cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"component-function","component-function",654728922),f);
var res = reagent.impl.template.create_class.call(null,withrender);
var wrapf = reagent.impl.util.cached_react_class.call(null,res);
reagent.impl.util.cache_react_class.call(null,f,wrapf);

return wrapf;
});
reagent.impl.template.as_class = (function reagent$impl$template$as_class(tag){
if(reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
return reagent.impl.template.cached_wrapper.call(null,tag);
} else {
var cached_class = reagent.impl.util.cached_react_class.call(null,tag);
if(!((cached_class == null))){
return cached_class;
} else {
if(cljs.core.truth_((React["isValidClass"])(tag))){
return reagent.impl.util.cache_react_class.call(null,tag,reagent.impl.template.wrap_component.call(null,tag,null,null));
} else {
return reagent.impl.template.fn_to_class.call(null,tag);
}
}
}
});
reagent.impl.template.get_key = (function reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return null;
}
});
reagent.impl.template.vec_to_comp = (function reagent$impl$template$vec_to_comp(v,level){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Hiccup form should not be empty"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"v","v",1661996586,null)))))].join('')));
}

if(reagent.impl.template.valid_tag_QMARK_.call(null,cljs.core.nth.call(null,v,(0)))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Hiccup form: "),cljs.core.str(cljs.core.pr_str.call(null,v))].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"valid-tag?","valid-tag?",1243064160,null),cljs.core.list(new cljs.core.Symbol(null,"nth","nth",1529209554,null),new cljs.core.Symbol(null,"v","v",1661996586,null),(0)))))].join('')));
}

var c = reagent.impl.template.as_class.call(null,cljs.core.nth.call(null,v,(0)));
var jsprops = {"level": level, "argv": v};
var k_34546 = reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
var k_SINGLEQUOTE__34547 = (((k_34546 == null))?reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null)):k_34546);
if((k_SINGLEQUOTE__34547 == null)){
} else {
(jsprops["key"] = k_SINGLEQUOTE__34547);
}

return c.call(null,jsprops);
});
reagent.impl.template.seq_ctx = {};
reagent.impl.template.warn_on_deref = (function reagent$impl$template$warn_on_deref(x){
if(cljs.core.truth_((reagent.impl.template.seq_ctx["warned"]))){
return null;
} else {
if(typeof console !== 'undefined'){
console.log("Warning: Reactive deref not supported in seq in ",cljs.core.pr_str.call(null,x));
} else {
}

return (reagent.impl.template.seq_ctx["warned"] = true);
}
});
reagent.impl.template.as_component = (function() {
var reagent$impl$template$as_component = null;
var reagent$impl$template$as_component__1 = (function (x){
return reagent$impl$template$as_component.call(null,x,(0));
});
var reagent$impl$template$as_component__2 = (function (x,level){
if(typeof x === 'string'){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return reagent.impl.template.vec_to_comp.call(null,x,level);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
if(!((true) && ((reagent.ratom._STAR_ratom_context_STAR_ == null)))){
return reagent.impl.template.expand_seq.call(null,x,level);
} else {
var s = reagent.ratom.capture_derefed.call(null,(function (){
return reagent.impl.template.expand_seq.call(null,x,level);
}),reagent.impl.template.seq_ctx);
if(cljs.core.truth_(reagent.ratom.captured.call(null,reagent.impl.template.seq_ctx))){
reagent.impl.template.warn_on_deref.call(null,x);
} else {
}

return s;
}
} else {
return x;

}
}
}
});
reagent$impl$template$as_component = function(x,level){
switch(arguments.length){
case 1:
return reagent$impl$template$as_component__1.call(this,x);
case 2:
return reagent$impl$template$as_component__2.call(this,x,level);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$impl$template$as_component.cljs$core$IFn$_invoke$arity$1 = reagent$impl$template$as_component__1;
reagent$impl$template$as_component.cljs$core$IFn$_invoke$arity$2 = reagent$impl$template$as_component__2;
return reagent$impl$template$as_component;
})()
;
reagent.impl.template.create_class = (function reagent$impl$template$create_class(spec){
return reagent.impl.component.create_class.call(null,spec,reagent.impl.template.as_component);
});
reagent.impl.template.expand_seq = (function reagent$impl$template$expand_seq(s,level){
var a = cljs.core.into_array.call(null,s);
var level_SINGLEQUOTE_ = (level + (1));
var n__21175__auto___34548 = a.length;
var i_34549 = (0);
while(true){
if((i_34549 < n__21175__auto___34548)){
(a[i_34549] = reagent.impl.template.as_component.call(null,(a[i_34549]),level_SINGLEQUOTE_));

var G__34550 = (i_34549 + (1));
i_34549 = G__34550;
continue;
} else {
}
break;
}

return a;
});
reagent.impl.template.convert_args = (function reagent$impl$template$convert_args(argv,first_child,level){
if((cljs.core.count.call(null,argv) === (first_child + (1)))){
return [null,reagent.impl.template.as_component.call(null,cljs.core.nth.call(null,argv,first_child),level)];
} else {
return cljs.core.reduce_kv.call(null,(function (a,k,v){
if((k >= first_child)){
a.push(reagent.impl.template.as_component.call(null,v,level));
} else {
}

return a;
}),[null],argv);
}
});

//# sourceMappingURL=template.js.map