// Compiled by ClojureScript 0.0-3058 {}
goog.provide('collab_board.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('reagent.core');
collab_board.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"is-drawing","is-drawing",-1879962614),false,new cljs.core.Keyword(null,"is-erasing","is-erasing",-34282220),false,new cljs.core.Keyword(null,"ctrl-down","ctrl-down",-500654113),false,new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),cljs.core.PersistentArrayMap.EMPTY], null));
collab_board.core.canvas = document.getElementById("collab-board");
collab_board.core.socket = reagent.core.atom.call(null,null);
collab_board.core.ctx = collab_board.core.canvas.getContext("2d");
collab_board.core.debug = (function collab_board$core$debug(s){
return console.debug(s);
});
collab_board.core.get_uuid = (function collab_board$core$get_uuid(){
return window.uuid();
});
collab_board.core.send_path = (function collab_board$core$send_path(pth,id,action){
var msg = JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["id",id,"path",pth,"action",action], null)));
collab_board.core.debug.call(null,[cljs.core.str("sending message "),cljs.core.str(msg)].join(''));

return cljs.core.deref.call(null,collab_board.core.socket).send(msg);
});
collab_board.core.add_path = (function collab_board$core$add_path(id,pth){
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths","paths",-1807389588),id], null),pth);

var seq__31883 = cljs.core.seq.call(null,pth);
var chunk__31884 = null;
var count__31885 = (0);
var i__31886 = (0);
while(true){
if((i__31886 < count__31885)){
var p = cljs.core._nth.call(null,chunk__31884,i__31886);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null),cljs.core.set.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,collab_board.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null)))));

var G__31887 = seq__31883;
var G__31888 = chunk__31884;
var G__31889 = count__31885;
var G__31890 = (i__31886 + (1));
seq__31883 = G__31887;
chunk__31884 = G__31888;
count__31885 = G__31889;
i__31886 = G__31890;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31883);
if(temp__4126__auto__){
var seq__31883__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31883__$1)){
var c__21128__auto__ = cljs.core.chunk_first.call(null,seq__31883__$1);
var G__31891 = cljs.core.chunk_rest.call(null,seq__31883__$1);
var G__31892 = c__21128__auto__;
var G__31893 = cljs.core.count.call(null,c__21128__auto__);
var G__31894 = (0);
seq__31883 = G__31891;
chunk__31884 = G__31892;
count__31885 = G__31893;
i__31886 = G__31894;
continue;
} else {
var p = cljs.core.first.call(null,seq__31883__$1);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null),cljs.core.set.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,collab_board.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null)))));

var G__31895 = cljs.core.next.call(null,seq__31883__$1);
var G__31896 = null;
var G__31897 = (0);
var G__31898 = (0);
seq__31883 = G__31895;
chunk__31884 = G__31896;
count__31885 = G__31897;
i__31886 = G__31898;
continue;
}
} else {
return null;
}
}
break;
}
});
collab_board.core.send_remove_path = (function collab_board$core$send_remove_path(id){
return collab_board.core.send_path.call(null,cljs.core.PersistentVector.EMPTY,id,"REMOVE");
});
collab_board.core.remove_path = (function collab_board$core$remove_path(id){
collab_board.core.debug.call(null,[cljs.core.str("Removing path "),cljs.core.str(id)].join(''));

var points = cljs.core.get_in.call(null,cljs.core.deref.call(null,collab_board.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths","paths",-1807389588),id], null));
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),id));

var seq__31903 = cljs.core.seq.call(null,points);
var chunk__31904 = null;
var count__31905 = (0);
var i__31906 = (0);
while(true){
if((i__31906 < count__31905)){
var p = cljs.core._nth.call(null,chunk__31904,i__31906);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),p));

var G__31907 = seq__31903;
var G__31908 = chunk__31904;
var G__31909 = count__31905;
var G__31910 = (i__31906 + (1));
seq__31903 = G__31907;
chunk__31904 = G__31908;
count__31905 = G__31909;
i__31906 = G__31910;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31903);
if(temp__4126__auto__){
var seq__31903__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31903__$1)){
var c__21128__auto__ = cljs.core.chunk_first.call(null,seq__31903__$1);
var G__31911 = cljs.core.chunk_rest.call(null,seq__31903__$1);
var G__31912 = c__21128__auto__;
var G__31913 = cljs.core.count.call(null,c__21128__auto__);
var G__31914 = (0);
seq__31903 = G__31911;
chunk__31904 = G__31912;
count__31905 = G__31913;
i__31906 = G__31914;
continue;
} else {
var p = cljs.core.first.call(null,seq__31903__$1);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),p));

var G__31915 = cljs.core.next.call(null,seq__31903__$1);
var G__31916 = null;
var G__31917 = (0);
var G__31918 = (0);
seq__31903 = G__31915;
chunk__31904 = G__31916;
count__31905 = G__31917;
i__31906 = G__31918;
continue;
}
} else {
return null;
}
}
break;
}
});
collab_board.core.remove_paths_by_point = (function collab_board$core$remove_paths_by_point(p){
var paths = cljs.core.get_in.call(null,cljs.core.deref.call(null,collab_board.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null));
var seq__31923_31927 = cljs.core.seq.call(null,paths);
var chunk__31924_31928 = null;
var count__31925_31929 = (0);
var i__31926_31930 = (0);
while(true){
if((i__31926_31930 < count__31925_31929)){
var pth_31931 = cljs.core._nth.call(null,chunk__31924_31928,i__31926_31930);
collab_board.core.remove_path.call(null,pth_31931);

collab_board.core.send_remove_path.call(null,pth_31931);

var G__31932 = seq__31923_31927;
var G__31933 = chunk__31924_31928;
var G__31934 = count__31925_31929;
var G__31935 = (i__31926_31930 + (1));
seq__31923_31927 = G__31932;
chunk__31924_31928 = G__31933;
count__31925_31929 = G__31934;
i__31926_31930 = G__31935;
continue;
} else {
var temp__4126__auto___31936 = cljs.core.seq.call(null,seq__31923_31927);
if(temp__4126__auto___31936){
var seq__31923_31937__$1 = temp__4126__auto___31936;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31923_31937__$1)){
var c__21128__auto___31938 = cljs.core.chunk_first.call(null,seq__31923_31937__$1);
var G__31939 = cljs.core.chunk_rest.call(null,seq__31923_31937__$1);
var G__31940 = c__21128__auto___31938;
var G__31941 = cljs.core.count.call(null,c__21128__auto___31938);
var G__31942 = (0);
seq__31923_31927 = G__31939;
chunk__31924_31928 = G__31940;
count__31925_31929 = G__31941;
i__31926_31930 = G__31942;
continue;
} else {
var pth_31943 = cljs.core.first.call(null,seq__31923_31937__$1);
collab_board.core.remove_path.call(null,pth_31943);

collab_board.core.send_remove_path.call(null,pth_31943);

var G__31944 = cljs.core.next.call(null,seq__31923_31937__$1);
var G__31945 = null;
var G__31946 = (0);
var G__31947 = (0);
seq__31923_31927 = G__31944;
chunk__31924_31928 = G__31945;
count__31925_31929 = G__31946;
i__31926_31930 = G__31947;
continue;
}
} else {
}
}
break;
}

return !(cljs.core.empty_QMARK_.call(null,paths));
});
collab_board.core.add_send_path = (function collab_board$core$add_send_path(pth){
var id = collab_board.core.get_uuid.call(null);
collab_board.core.add_path.call(null,id,pth);

return collab_board.core.send_path.call(null,pth,id,"ADD");
});
collab_board.core.begin_path = (function collab_board$core$begin_path(){
return collab_board.core.ctx.beginPath();
});
collab_board.core.move_to = (function collab_board$core$move_to(p__31948){
var vec__31950 = p__31948;
var x = cljs.core.nth.call(null,vec__31950,(0),null);
var y = cljs.core.nth.call(null,vec__31950,(1),null);
return collab_board.core.ctx.moveTo(x,y);
});
collab_board.core.line_to = (function collab_board$core$line_to(p__31951){
var vec__31953 = p__31951;
var x = cljs.core.nth.call(null,vec__31953,(0),null);
var y = cljs.core.nth.call(null,vec__31953,(1),null);
return collab_board.core.ctx.lineTo(x,y);
});
collab_board.core.stroke = (function collab_board$core$stroke(){
return collab_board.core.ctx.stroke();
});
collab_board.core.get_xy = (function collab_board$core$get_xy(ev){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ev.offsetX,ev.offsetY], null);
});
collab_board.core.render_path = (function collab_board$core$render_path(pth){
collab_board.core.begin_path.call(null);

collab_board.core.move_to.call(null,cljs.core.get.call(null,pth,(0)));

var seq__31958 = cljs.core.seq.call(null,cljs.core.drop.call(null,(1),pth));
var chunk__31959 = null;
var count__31960 = (0);
var i__31961 = (0);
while(true){
if((i__31961 < count__31960)){
var p = cljs.core._nth.call(null,chunk__31959,i__31961);
collab_board.core.line_to.call(null,p);

collab_board.core.stroke.call(null);

collab_board.core.move_to.call(null,p);

var G__31962 = seq__31958;
var G__31963 = chunk__31959;
var G__31964 = count__31960;
var G__31965 = (i__31961 + (1));
seq__31958 = G__31962;
chunk__31959 = G__31963;
count__31960 = G__31964;
i__31961 = G__31965;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31958);
if(temp__4126__auto__){
var seq__31958__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31958__$1)){
var c__21128__auto__ = cljs.core.chunk_first.call(null,seq__31958__$1);
var G__31966 = cljs.core.chunk_rest.call(null,seq__31958__$1);
var G__31967 = c__21128__auto__;
var G__31968 = cljs.core.count.call(null,c__21128__auto__);
var G__31969 = (0);
seq__31958 = G__31966;
chunk__31959 = G__31967;
count__31960 = G__31968;
i__31961 = G__31969;
continue;
} else {
var p = cljs.core.first.call(null,seq__31958__$1);
collab_board.core.line_to.call(null,p);

collab_board.core.stroke.call(null);

collab_board.core.move_to.call(null,p);

var G__31970 = cljs.core.next.call(null,seq__31958__$1);
var G__31971 = null;
var G__31972 = (0);
var G__31973 = (0);
seq__31958 = G__31970;
chunk__31959 = G__31971;
count__31960 = G__31972;
i__31961 = G__31973;
continue;
}
} else {
return null;
}
}
break;
}
});
collab_board.core.redraw = (function collab_board$core$redraw(){
collab_board.core.ctx.clearRect((0),(0),collab_board.core.canvas.width,collab_board.core.canvas.height);

var paths = cljs.core.map.call(null,(function (p__31980){
var vec__31981 = p__31980;
var k = cljs.core.nth.call(null,vec__31981,(0),null);
var v = cljs.core.nth.call(null,vec__31981,(1),null);
return v;
}),new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)));
collab_board.core.debug.call(null,[cljs.core.str(paths)].join(''));

var seq__31982 = cljs.core.seq.call(null,paths);
var chunk__31983 = null;
var count__31984 = (0);
var i__31985 = (0);
while(true){
if((i__31985 < count__31984)){
var pth = cljs.core._nth.call(null,chunk__31983,i__31985);
collab_board.core.render_path.call(null,pth);

var G__31986 = seq__31982;
var G__31987 = chunk__31983;
var G__31988 = count__31984;
var G__31989 = (i__31985 + (1));
seq__31982 = G__31986;
chunk__31983 = G__31987;
count__31984 = G__31988;
i__31985 = G__31989;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__31982);
if(temp__4126__auto__){
var seq__31982__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31982__$1)){
var c__21128__auto__ = cljs.core.chunk_first.call(null,seq__31982__$1);
var G__31990 = cljs.core.chunk_rest.call(null,seq__31982__$1);
var G__31991 = c__21128__auto__;
var G__31992 = cljs.core.count.call(null,c__21128__auto__);
var G__31993 = (0);
seq__31982 = G__31990;
chunk__31983 = G__31991;
count__31984 = G__31992;
i__31985 = G__31993;
continue;
} else {
var pth = cljs.core.first.call(null,seq__31982__$1);
collab_board.core.render_path.call(null,pth);

var G__31994 = cljs.core.next.call(null,seq__31982__$1);
var G__31995 = null;
var G__31996 = (0);
var G__31997 = (0);
seq__31982 = G__31994;
chunk__31983 = G__31995;
count__31984 = G__31996;
i__31985 = G__31997;
continue;
}
} else {
return null;
}
}
break;
}
});
collab_board.core.canvas_mousedown = (function collab_board$core$canvas_mousedown(ev){
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"ctrl-down","ctrl-down",-500654113).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)))){
return cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"is-drawing","is-drawing",-1879962614),true).call(null,collab_board.core.begin_path.call(null),collab_board.core.move_to.call(null,collab_board.core.get_xy.call(null,ev)));
} else {
return cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"is-erasing","is-erasing",-34282220),true);
}
});
collab_board.core.canvas_mouseup = (function collab_board$core$canvas_mouseup(ev){
var pth = new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state));
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-drawing","is-drawing",-1879962614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)))){
collab_board.core.add_send_path.call(null,pth);
} else {
}

cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY);

cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"is-drawing","is-drawing",-1879962614),false);

return cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"is-erasing","is-erasing",-34282220),false);
});
collab_board.core.on_path_update = (function collab_board$core$on_path_update(ev){
var data = ev.data;
var parsed = cljs.core.js__GT_clj.call(null,JSON.parse(data));
var pth = cljs.core.get.call(null,parsed,"path");
var id = cljs.core.get.call(null,parsed,"id");
var action = cljs.core.get.call(null,parsed,"action");
if(cljs.core._EQ_.call(null,action,"ADD")){
collab_board.core.add_path.call(null,id,pth);

collab_board.core.render_path.call(null,pth);
} else {
}

if(cljs.core._EQ_.call(null,action,"REMOVE")){
collab_board.core.remove_path.call(null,id);

return collab_board.core.redraw.call(null);
} else {
return null;
}
});
collab_board.core.canvas_mousemove = (function collab_board$core$canvas_mousemove(ev){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-drawing","is-drawing",-1879962614).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)))){
var xy_32024 = collab_board.core.get_xy.call(null,ev);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.conj.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),xy_32024));

collab_board.core.line_to.call(null,xy_32024);

collab_board.core.stroke.call(null);

collab_board.core.move_to.call(null,xy_32024);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"is-erasing","is-erasing",-34282220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)))){
var vec__32011 = collab_board.core.get_xy.call(null,ev);
var px = cljs.core.nth.call(null,vec__32011,(0),null);
var py = cljs.core.nth.call(null,vec__32011,(1),null);
return cljs.core.doall.call(null,(function (){var seq__32012 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__32011,px,py){
return (function (i){
return (i + px);
});})(vec__32011,px,py))
,cljs.core.range.call(null,(-2),(2))));
var chunk__32017 = null;
var count__32018 = (0);
var i__32019 = (0);
while(true){
if((i__32019 < count__32018)){
var x = cljs.core._nth.call(null,chunk__32017,i__32019);
var seq__32020_32025 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (seq__32012,chunk__32017,count__32018,i__32019,x,vec__32011,px,py){
return (function (i){
return (i + py);
});})(seq__32012,chunk__32017,count__32018,i__32019,x,vec__32011,px,py))
,cljs.core.range.call(null,(-2),(2))));
var chunk__32021_32026 = null;
var count__32022_32027 = (0);
var i__32023_32028 = (0);
while(true){
if((i__32023_32028 < count__32022_32027)){
var y_32029 = cljs.core._nth.call(null,chunk__32021_32026,i__32023_32028);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32029], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__32030 = seq__32020_32025;
var G__32031 = chunk__32021_32026;
var G__32032 = count__32022_32027;
var G__32033 = (i__32023_32028 + (1));
seq__32020_32025 = G__32030;
chunk__32021_32026 = G__32031;
count__32022_32027 = G__32032;
i__32023_32028 = G__32033;
continue;
} else {
var temp__4126__auto___32034 = cljs.core.seq.call(null,seq__32020_32025);
if(temp__4126__auto___32034){
var seq__32020_32035__$1 = temp__4126__auto___32034;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32020_32035__$1)){
var c__21128__auto___32036 = cljs.core.chunk_first.call(null,seq__32020_32035__$1);
var G__32037 = cljs.core.chunk_rest.call(null,seq__32020_32035__$1);
var G__32038 = c__21128__auto___32036;
var G__32039 = cljs.core.count.call(null,c__21128__auto___32036);
var G__32040 = (0);
seq__32020_32025 = G__32037;
chunk__32021_32026 = G__32038;
count__32022_32027 = G__32039;
i__32023_32028 = G__32040;
continue;
} else {
var y_32041 = cljs.core.first.call(null,seq__32020_32035__$1);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32041], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__32042 = cljs.core.next.call(null,seq__32020_32035__$1);
var G__32043 = null;
var G__32044 = (0);
var G__32045 = (0);
seq__32020_32025 = G__32042;
chunk__32021_32026 = G__32043;
count__32022_32027 = G__32044;
i__32023_32028 = G__32045;
continue;
}
} else {
}
}
break;
}

var G__32046 = seq__32012;
var G__32047 = chunk__32017;
var G__32048 = count__32018;
var G__32049 = (i__32019 + (1));
seq__32012 = G__32046;
chunk__32017 = G__32047;
count__32018 = G__32048;
i__32019 = G__32049;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__32012);
if(temp__4126__auto__){
var seq__32012__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32012__$1)){
var c__21128__auto__ = cljs.core.chunk_first.call(null,seq__32012__$1);
var G__32050 = cljs.core.chunk_rest.call(null,seq__32012__$1);
var G__32051 = c__21128__auto__;
var G__32052 = cljs.core.count.call(null,c__21128__auto__);
var G__32053 = (0);
seq__32012 = G__32050;
chunk__32017 = G__32051;
count__32018 = G__32052;
i__32019 = G__32053;
continue;
} else {
var x = cljs.core.first.call(null,seq__32012__$1);
var seq__32013_32054 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (seq__32012,chunk__32017,count__32018,i__32019,x,seq__32012__$1,temp__4126__auto__,vec__32011,px,py){
return (function (i){
return (i + py);
});})(seq__32012,chunk__32017,count__32018,i__32019,x,seq__32012__$1,temp__4126__auto__,vec__32011,px,py))
,cljs.core.range.call(null,(-2),(2))));
var chunk__32014_32055 = null;
var count__32015_32056 = (0);
var i__32016_32057 = (0);
while(true){
if((i__32016_32057 < count__32015_32056)){
var y_32058 = cljs.core._nth.call(null,chunk__32014_32055,i__32016_32057);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32058], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__32059 = seq__32013_32054;
var G__32060 = chunk__32014_32055;
var G__32061 = count__32015_32056;
var G__32062 = (i__32016_32057 + (1));
seq__32013_32054 = G__32059;
chunk__32014_32055 = G__32060;
count__32015_32056 = G__32061;
i__32016_32057 = G__32062;
continue;
} else {
var temp__4126__auto___32063__$1 = cljs.core.seq.call(null,seq__32013_32054);
if(temp__4126__auto___32063__$1){
var seq__32013_32064__$1 = temp__4126__auto___32063__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32013_32064__$1)){
var c__21128__auto___32065 = cljs.core.chunk_first.call(null,seq__32013_32064__$1);
var G__32066 = cljs.core.chunk_rest.call(null,seq__32013_32064__$1);
var G__32067 = c__21128__auto___32065;
var G__32068 = cljs.core.count.call(null,c__21128__auto___32065);
var G__32069 = (0);
seq__32013_32054 = G__32066;
chunk__32014_32055 = G__32067;
count__32015_32056 = G__32068;
i__32016_32057 = G__32069;
continue;
} else {
var y_32070 = cljs.core.first.call(null,seq__32013_32064__$1);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_32070], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__32071 = cljs.core.next.call(null,seq__32013_32064__$1);
var G__32072 = null;
var G__32073 = (0);
var G__32074 = (0);
seq__32013_32054 = G__32071;
chunk__32014_32055 = G__32072;
count__32015_32056 = G__32073;
i__32016_32057 = G__32074;
continue;
}
} else {
}
}
break;
}

var G__32075 = cljs.core.next.call(null,seq__32012__$1);
var G__32076 = null;
var G__32077 = (0);
var G__32078 = (0);
seq__32012 = G__32075;
chunk__32017 = G__32076;
count__32018 = G__32077;
i__32019 = G__32078;
continue;
}
} else {
return null;
}
}
break;
}
})());
} else {
return null;
}
});
collab_board.core.key_down = (function collab_board$core$key_down(ev){
if(cljs.core._EQ_.call(null,ev.which,(17))){
return cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"ctrl-down","ctrl-down",-500654113),true);
} else {
return null;
}
});
collab_board.core.key_up = (function collab_board$core$key_up(ev){
if(cljs.core._EQ_.call(null,ev.which,(17))){
return cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"ctrl-down","ctrl-down",-500654113),false);
} else {
return null;
}
});
collab_board.core.init_socket = (function collab_board$core$init_socket(){
collab_board.core.debug.call(null,"Initialzing socket");

var s = (new WebSocket([cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/path-updates")].join('')));
s.addEventListener("close",collab_board$core$init_socket);

return cljs.core.reset_BANG_.call(null,collab_board.core.socket,s);
});
collab_board.core.init_BANG_ = (function collab_board$core$init_BANG_(){
collab_board.core.debug.call(null,"Initializing");

collab_board.core.init_socket.call(null);

collab_board.core.canvas.addEventListener("mousedown",collab_board.core.canvas_mousedown);

collab_board.core.canvas.addEventListener("mouseup",collab_board.core.canvas_mouseup);

collab_board.core.canvas.addEventListener("mousemove",collab_board.core.canvas_mousemove);

cljs.core.deref.call(null,collab_board.core.socket).addEventListener("message",collab_board.core.on_path_update);

collab_board.core.canvas.addEventListener("contextmenu",(function (ev){
return false;
}));

window.addEventListener("keydown",collab_board.core.key_down);

return window.addEventListener("keyup",collab_board.core.key_up);
});

//# sourceMappingURL=core.js.map