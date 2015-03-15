// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent.core');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('reagent.debug');
reagent.core.is_client = reagent.impl.util.is_client;
/**
 * Turns a vector of Hiccup syntax into a React component. Returns form unchanged if it is not a vector.
 */
reagent.core.as_component = (function reagent$core$as_component(form){
return reagent.impl.template.as_component.call(null,form);
});
/**
 * Render a Reagent component into the DOM. The first argument may be either a
 * vector (using Reagent's Hiccup syntax), or a React component. The second argument should be a DOM node.
 * 
 * Optionally takes a callback that is called when the component is in place.
 * 
 * Returns the mounted component instance.
 */
reagent.core.render_component = (function() {
var reagent$core$render_component = null;
var reagent$core$render_component__2 = (function (comp,container){
return reagent$core$render_component.call(null,comp,container,null);
});
var reagent$core$render_component__3 = (function (comp,container,callback){
var f = (function (){
return reagent.core.as_component.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.impl.util.render_component.call(null,f,container,callback);
});
reagent$core$render_component = function(comp,container,callback){
switch(arguments.length){
case 2:
return reagent$core$render_component__2.call(this,comp,container);
case 3:
return reagent$core$render_component__3.call(this,comp,container,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$render_component.cljs$core$IFn$_invoke$arity$2 = reagent$core$render_component__2;
reagent$core$render_component.cljs$core$IFn$_invoke$arity$3 = reagent$core$render_component__3;
return reagent$core$render_component;
})()
;
/**
 * Remove a component from the given DOM node.
 */
reagent.core.unmount_component_at_node = (function reagent$core$unmount_component_at_node(container){
return reagent.impl.util.unmount_component_at_node.call(null,container);
});
/**
 * Turns a component into an HTML string.
 */
reagent.core.render_component_to_string = (function reagent$core$render_component_to_string(component){
return (React["renderComponentToString"])(reagent.core.as_component.call(null,component));
});
reagent.core.force_update_all = (function reagent$core$force_update_all(){
return reagent.impl.util.force_update_all.call(null);
});
goog.exportSymbol('reagent.core.force_update_all', reagent.core.force_update_all);
/**
 * Create a component, React style. Should be called with a map,
 * looking like this:
 * {:get-initial-state (fn [this])
 * :component-will-receive-props (fn [this new-argv])
 * :should-component-update (fn [this old-argv new-argv])
 * :component-will-mount (fn [this])
 * :component-did-mount (fn [this])
 * :component-will-update (fn [this new-argv])
 * :component-did-update (fn [this old-argv])
 * :component-will-unmount (fn [this])
 * :render (fn [this])}
 * 
 * Everything is optional, except :render.
 */
reagent.core.create_class = (function reagent$core$create_class(spec){
return reagent.impl.template.create_class.call(null,spec);
});
/**
 * Returns the current React component (a.k.a this) in a component
 * function.
 */
reagent.core.current_component = (function reagent$core$current_component(){
return reagent.impl.component._STAR_current_component_STAR_;
});
/**
 * Returns the state of a component, as set with replace-state or set-state.
 */
reagent.core.state = (function reagent$core$state(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.component.state.call(null,this$);
});
/**
 * Set state of a component.
 */
reagent.core.replace_state = (function reagent$core$replace_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return reagent.impl.component.replace_state.call(null,this$,new_state);
});
/**
 * Merge component state with new-state.
 */
reagent.core.set_state = (function reagent$core$set_state(this$,new_state){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

if(((new_state == null)) || (cljs.core.map_QMARK_.call(null,new_state))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)),cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"new-state","new-state",1150182315,null)))))].join('')));
}

return reagent.impl.component.set_state.call(null,this$,new_state);
});
/**
 * Returns the props passed to a component.
 */
reagent.core.props = (function reagent$core$props(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_props.call(null,this$);
});
/**
 * Returns the children passed to a component.
 */
reagent.core.children = (function reagent$core$children(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_children.call(null,this$);
});
/**
 * Returns the entire Hiccup form passed to the component.
 */
reagent.core.argv = (function reagent$core$argv(this$){
if(reagent.impl.util.reagent_component_QMARK_.call(null,this$)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol("util","reagent-component?","util/reagent-component?",1508385933,null),new cljs.core.Symbol(null,"this","this",1028897902,null))))].join('')));
}

return reagent.impl.util.get_argv.call(null,this$);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.core.dom_node = (function reagent$core$dom_node(this$){
return (this$["getDOMNode"])();
});
/**
 * Utility function that merges two maps, handling :class and :style
 * specially, like React's transferPropsTo.
 */
reagent.core.merge_props = (function reagent$core$merge_props(defaults,props){
return reagent.impl.util.merge_props.call(null,defaults,props);
});
/**
 * Render dirty components immediately to the DOM.
 * 
 * Note that this may not work in event handlers, since React.js does
 * batching of updates there.
 */
reagent.core.flush = (function reagent$core$flush(){
return reagent.impl.batching.flush.call(null);
});
/**
 * Like clojure.core/atom, except that it keeps track of derefs.
 * Reagent components that derefs one of these are automatically
 * re-rendered.
 * @param {...*} var_args
 */
reagent.core.atom = (function() {
var reagent$core$atom = null;
var reagent$core$atom__1 = (function (x){
return reagent.ratom.atom.call(null,x);
});
var reagent$core$atom__2 = (function() { 
var G__34485__delegate = function (x,rest){
return cljs.core.apply.call(null,reagent.ratom.atom,x,rest);
};
var G__34485 = function (x,var_args){
var rest = null;
if (arguments.length > 1) {
var G__34486__i = 0, G__34486__a = new Array(arguments.length -  1);
while (G__34486__i < G__34486__a.length) {G__34486__a[G__34486__i] = arguments[G__34486__i + 1]; ++G__34486__i;}
  rest = new cljs.core.IndexedSeq(G__34486__a,0);
} 
return G__34485__delegate.call(this,x,rest);};
G__34485.cljs$lang$maxFixedArity = 1;
G__34485.cljs$lang$applyTo = (function (arglist__34487){
var x = cljs.core.first(arglist__34487);
var rest = cljs.core.rest(arglist__34487);
return G__34485__delegate(x,rest);
});
G__34485.cljs$core$IFn$_invoke$arity$variadic = G__34485__delegate;
return G__34485;
})()
;
reagent$core$atom = function(x,var_args){
var rest = var_args;
switch(arguments.length){
case 1:
return reagent$core$atom__1.call(this,x);
default:
var G__34488 = null;
if (arguments.length > 1) {
var G__34489__i = 0, G__34489__a = new Array(arguments.length -  1);
while (G__34489__i < G__34489__a.length) {G__34489__a[G__34489__i] = arguments[G__34489__i + 1]; ++G__34489__i;}
G__34488 = new cljs.core.IndexedSeq(G__34489__a,0);
}
return reagent$core$atom__2.cljs$core$IFn$_invoke$arity$variadic(x, G__34488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$atom.cljs$lang$maxFixedArity = 1;
reagent$core$atom.cljs$lang$applyTo = reagent$core$atom__2.cljs$lang$applyTo;
reagent$core$atom.cljs$core$IFn$_invoke$arity$1 = reagent$core$atom__1;
reagent$core$atom.cljs$core$IFn$_invoke$arity$variadic = reagent$core$atom__2.cljs$core$IFn$_invoke$arity$variadic;
return reagent$core$atom;
})()
;
/**
 * Provide a cursor into a Reagent atom.
 * 
 * Behaves like a Reagent atom but focuses updates and derefs to
 * the specified path within the wrapped Reagent atom. e.g.,
 * (let [c (cursor [:nested :content] ra)]
 * ... @c ;; equivalent to (get-in @ra [:nested :content])
 * ... (reset! c 42) ;; equivalent to (swap! ra assoc-in [:nested :content] 42)
 * ... (swap! c inc) ;; equivalence to (swap! ra update-in [:nested :content] inc)
 * )
 */
reagent.core.cursor = (function() {
var reagent$core$cursor = null;
var reagent$core$cursor__1 = (function (path){
return (function (ra){
return reagent$core$cursor.call(null,path,ra);
});
});
var reagent$core$cursor__2 = (function (path,ra){
return reagent.ratom.cursor.call(null,path,ra);
});
reagent$core$cursor = function(path,ra){
switch(arguments.length){
case 1:
return reagent$core$cursor__1.call(this,path);
case 2:
return reagent$core$cursor__2.call(this,path,ra);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reagent$core$cursor.cljs$core$IFn$_invoke$arity$1 = reagent$core$cursor__1;
reagent$core$cursor.cljs$core$IFn$_invoke$arity$2 = reagent$core$cursor__2;
return reagent$core$cursor;
})()
;
/**
 * Run f using requestAnimationFrame or equivalent.
 */
reagent.core.next_tick = (function reagent$core$next_tick(f){
return reagent.impl.batching.next_tick.call(null,f);
});
/**
 * Works just like clojure.core/partial, except that it is an IFn, and
 * the result can be compared with =
 * @param {...*} var_args
 */
reagent.core.partial = (function() { 
var reagent$core$partial__delegate = function (f,args){
return (new reagent.impl.util.partial_ifn(f,args,null));
};
var reagent$core$partial = function (f,var_args){
var args = null;
if (arguments.length > 1) {
var G__34490__i = 0, G__34490__a = new Array(arguments.length -  1);
while (G__34490__i < G__34490__a.length) {G__34490__a[G__34490__i] = arguments[G__34490__i + 1]; ++G__34490__i;}
  args = new cljs.core.IndexedSeq(G__34490__a,0);
} 
return reagent$core$partial__delegate.call(this,f,args);};
reagent$core$partial.cljs$lang$maxFixedArity = 1;
reagent$core$partial.cljs$lang$applyTo = (function (arglist__34491){
var f = cljs.core.first(arglist__34491);
var args = cljs.core.rest(arglist__34491);
return reagent$core$partial__delegate(f,args);
});
reagent$core$partial.cljs$core$IFn$_invoke$arity$variadic = reagent$core$partial__delegate;
return reagent$core$partial;
})()
;

//# sourceMappingURL=core.js.map