// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4126__auto__)){
var ns = temp__4126__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36192_36196 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36193_36197 = null;
var count__36194_36198 = (0);
var i__36195_36199 = (0);
while(true){
if((i__36195_36199 < count__36194_36198)){
var f_36200 = cljs.core._nth.call(null,chunk__36193_36197,i__36195_36199);
cljs.core.println.call(null,"  ",f_36200);

var G__36201 = seq__36192_36196;
var G__36202 = chunk__36193_36197;
var G__36203 = count__36194_36198;
var G__36204 = (i__36195_36199 + (1));
seq__36192_36196 = G__36201;
chunk__36193_36197 = G__36202;
count__36194_36198 = G__36203;
i__36195_36199 = G__36204;
continue;
} else {
var temp__4126__auto___36205 = cljs.core.seq.call(null,seq__36192_36196);
if(temp__4126__auto___36205){
var seq__36192_36206__$1 = temp__4126__auto___36205;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36192_36206__$1)){
var c__21075__auto___36207 = cljs.core.chunk_first.call(null,seq__36192_36206__$1);
var G__36208 = cljs.core.chunk_rest.call(null,seq__36192_36206__$1);
var G__36209 = c__21075__auto___36207;
var G__36210 = cljs.core.count.call(null,c__21075__auto___36207);
var G__36211 = (0);
seq__36192_36196 = G__36208;
chunk__36193_36197 = G__36209;
count__36194_36198 = G__36210;
i__36195_36199 = G__36211;
continue;
} else {
var f_36212 = cljs.core.first.call(null,seq__36192_36206__$1);
cljs.core.println.call(null,"  ",f_36212);

var G__36213 = cljs.core.next.call(null,seq__36192_36206__$1);
var G__36214 = null;
var G__36215 = (0);
var G__36216 = (0);
seq__36192_36196 = G__36213;
chunk__36193_36197 = G__36214;
count__36194_36198 = G__36215;
i__36195_36199 = G__36216;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__20288__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map