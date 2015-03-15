// Compiled by ClojureScript 0.0-3058 {}
goog.provide('collab_board.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('reagent_forms.core');
goog.require('secretary.core');
goog.require('reagent.core');
collab_board.core.state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"is-drawing","is-drawing",-1879962614),false,new cljs.core.Keyword(null,"is-erasing","is-erasing",-34282220),false,new cljs.core.Keyword(null,"ctrl-down","ctrl-down",-500654113),false,new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"paths","paths",-1807389588),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),cljs.core.PersistentArrayMap.EMPTY], null));
collab_board.core.canvas = document.getElementById("collab-board");
collab_board.core.ctx = collab_board.core.canvas.getContext("2d");
collab_board.core.debug = (function collab_board$core$debug(s){
return console.debug(s);
});
collab_board.core.socket = (new WebSocket([cljs.core.str("ws://"),cljs.core.str(location.host),cljs.core.str("/path-updates")].join('')));
collab_board.core.get_uuid = (function collab_board$core$get_uuid(){
return window.uuid();
});
collab_board.core.send_path = (function collab_board$core$send_path(pth,id,action){
var msg = JSON.stringify(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, ["id",id,"path",pth,"action",action], null)));
collab_board.core.debug.call(null,[cljs.core.str("sending message "),cljs.core.str(msg)].join(''));

return collab_board.core.socket.send(msg);
});
collab_board.core.add_path = (function collab_board$core$add_path(id,pth){
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths","paths",-1807389588),id], null),pth);

var seq__52166 = cljs.core.seq.call(null,pth);
var chunk__52167 = null;
var count__52168 = (0);
var i__52169 = (0);
while(true){
if((i__52169 < count__52168)){
var p = cljs.core._nth.call(null,chunk__52167,i__52169);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null),cljs.core.set.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,collab_board.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null)))));

var G__52170 = seq__52166;
var G__52171 = chunk__52167;
var G__52172 = count__52168;
var G__52173 = (i__52169 + (1));
seq__52166 = G__52170;
chunk__52167 = G__52171;
count__52168 = G__52172;
i__52169 = G__52173;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__52166);
if(temp__4126__auto__){
var seq__52166__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52166__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__52166__$1);
var G__52174 = cljs.core.chunk_rest.call(null,seq__52166__$1);
var G__52175 = c__21075__auto__;
var G__52176 = cljs.core.count.call(null,c__21075__auto__);
var G__52177 = (0);
seq__52166 = G__52174;
chunk__52167 = G__52175;
count__52168 = G__52176;
i__52169 = G__52177;
continue;
} else {
var p = cljs.core.first.call(null,seq__52166__$1);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null),cljs.core.set.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,collab_board.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),p], null)))));

var G__52178 = cljs.core.next.call(null,seq__52166__$1);
var G__52179 = null;
var G__52180 = (0);
var G__52181 = (0);
seq__52166 = G__52178;
chunk__52167 = G__52179;
count__52168 = G__52180;
i__52169 = G__52181;
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

var seq__52186 = cljs.core.seq.call(null,points);
var chunk__52187 = null;
var count__52188 = (0);
var i__52189 = (0);
while(true){
if((i__52189 < count__52188)){
var p = cljs.core._nth.call(null,chunk__52187,i__52189);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),p));

var G__52190 = seq__52186;
var G__52191 = chunk__52187;
var G__52192 = count__52188;
var G__52193 = (i__52189 + (1));
seq__52186 = G__52190;
chunk__52187 = G__52191;
count__52188 = G__52192;
i__52189 = G__52193;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__52186);
if(temp__4126__auto__){
var seq__52186__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52186__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__52186__$1);
var G__52194 = cljs.core.chunk_rest.call(null,seq__52186__$1);
var G__52195 = c__21075__auto__;
var G__52196 = cljs.core.count.call(null,c__21075__auto__);
var G__52197 = (0);
seq__52186 = G__52194;
chunk__52187 = G__52195;
count__52188 = G__52196;
i__52189 = G__52197;
continue;
} else {
var p = cljs.core.first.call(null,seq__52186__$1);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676),cljs.core.dissoc.call(null,new cljs.core.Keyword(null,"paths-by-points","paths-by-points",-1846933676).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),p));

var G__52198 = cljs.core.next.call(null,seq__52186__$1);
var G__52199 = null;
var G__52200 = (0);
var G__52201 = (0);
seq__52186 = G__52198;
chunk__52187 = G__52199;
count__52188 = G__52200;
i__52189 = G__52201;
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
var seq__52206_52210 = cljs.core.seq.call(null,paths);
var chunk__52207_52211 = null;
var count__52208_52212 = (0);
var i__52209_52213 = (0);
while(true){
if((i__52209_52213 < count__52208_52212)){
var pth_52214 = cljs.core._nth.call(null,chunk__52207_52211,i__52209_52213);
collab_board.core.remove_path.call(null,pth_52214);

collab_board.core.send_remove_path.call(null,pth_52214);

var G__52215 = seq__52206_52210;
var G__52216 = chunk__52207_52211;
var G__52217 = count__52208_52212;
var G__52218 = (i__52209_52213 + (1));
seq__52206_52210 = G__52215;
chunk__52207_52211 = G__52216;
count__52208_52212 = G__52217;
i__52209_52213 = G__52218;
continue;
} else {
var temp__4126__auto___52219 = cljs.core.seq.call(null,seq__52206_52210);
if(temp__4126__auto___52219){
var seq__52206_52220__$1 = temp__4126__auto___52219;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52206_52220__$1)){
var c__21075__auto___52221 = cljs.core.chunk_first.call(null,seq__52206_52220__$1);
var G__52222 = cljs.core.chunk_rest.call(null,seq__52206_52220__$1);
var G__52223 = c__21075__auto___52221;
var G__52224 = cljs.core.count.call(null,c__21075__auto___52221);
var G__52225 = (0);
seq__52206_52210 = G__52222;
chunk__52207_52211 = G__52223;
count__52208_52212 = G__52224;
i__52209_52213 = G__52225;
continue;
} else {
var pth_52226 = cljs.core.first.call(null,seq__52206_52220__$1);
collab_board.core.remove_path.call(null,pth_52226);

collab_board.core.send_remove_path.call(null,pth_52226);

var G__52227 = cljs.core.next.call(null,seq__52206_52220__$1);
var G__52228 = null;
var G__52229 = (0);
var G__52230 = (0);
seq__52206_52210 = G__52227;
chunk__52207_52211 = G__52228;
count__52208_52212 = G__52229;
i__52209_52213 = G__52230;
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
collab_board.core.move_to = (function collab_board$core$move_to(p__52231){
var vec__52233 = p__52231;
var x = cljs.core.nth.call(null,vec__52233,(0),null);
var y = cljs.core.nth.call(null,vec__52233,(1),null);
return collab_board.core.ctx.moveTo(x,y);
});
collab_board.core.line_to = (function collab_board$core$line_to(p__52234){
var vec__52236 = p__52234;
var x = cljs.core.nth.call(null,vec__52236,(0),null);
var y = cljs.core.nth.call(null,vec__52236,(1),null);
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

var seq__52241 = cljs.core.seq.call(null,cljs.core.drop.call(null,(1),pth));
var chunk__52242 = null;
var count__52243 = (0);
var i__52244 = (0);
while(true){
if((i__52244 < count__52243)){
var p = cljs.core._nth.call(null,chunk__52242,i__52244);
collab_board.core.line_to.call(null,p);

collab_board.core.stroke.call(null);

collab_board.core.move_to.call(null,p);

var G__52245 = seq__52241;
var G__52246 = chunk__52242;
var G__52247 = count__52243;
var G__52248 = (i__52244 + (1));
seq__52241 = G__52245;
chunk__52242 = G__52246;
count__52243 = G__52247;
i__52244 = G__52248;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__52241);
if(temp__4126__auto__){
var seq__52241__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52241__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__52241__$1);
var G__52249 = cljs.core.chunk_rest.call(null,seq__52241__$1);
var G__52250 = c__21075__auto__;
var G__52251 = cljs.core.count.call(null,c__21075__auto__);
var G__52252 = (0);
seq__52241 = G__52249;
chunk__52242 = G__52250;
count__52243 = G__52251;
i__52244 = G__52252;
continue;
} else {
var p = cljs.core.first.call(null,seq__52241__$1);
collab_board.core.line_to.call(null,p);

collab_board.core.stroke.call(null);

collab_board.core.move_to.call(null,p);

var G__52253 = cljs.core.next.call(null,seq__52241__$1);
var G__52254 = null;
var G__52255 = (0);
var G__52256 = (0);
seq__52241 = G__52253;
chunk__52242 = G__52254;
count__52243 = G__52255;
i__52244 = G__52256;
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

var paths = cljs.core.map.call(null,(function (p__52263){
var vec__52264 = p__52263;
var k = cljs.core.nth.call(null,vec__52264,(0),null);
var v = cljs.core.nth.call(null,vec__52264,(1),null);
return v;
}),new cljs.core.Keyword(null,"paths","paths",-1807389588).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)));
collab_board.core.debug.call(null,[cljs.core.str(paths)].join(''));

var seq__52265 = cljs.core.seq.call(null,paths);
var chunk__52266 = null;
var count__52267 = (0);
var i__52268 = (0);
while(true){
if((i__52268 < count__52267)){
var pth = cljs.core._nth.call(null,chunk__52266,i__52268);
collab_board.core.render_path.call(null,pth);

var G__52269 = seq__52265;
var G__52270 = chunk__52266;
var G__52271 = count__52267;
var G__52272 = (i__52268 + (1));
seq__52265 = G__52269;
chunk__52266 = G__52270;
count__52267 = G__52271;
i__52268 = G__52272;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__52265);
if(temp__4126__auto__){
var seq__52265__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52265__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__52265__$1);
var G__52273 = cljs.core.chunk_rest.call(null,seq__52265__$1);
var G__52274 = c__21075__auto__;
var G__52275 = cljs.core.count.call(null,c__21075__auto__);
var G__52276 = (0);
seq__52265 = G__52273;
chunk__52266 = G__52274;
count__52267 = G__52275;
i__52268 = G__52276;
continue;
} else {
var pth = cljs.core.first.call(null,seq__52265__$1);
collab_board.core.render_path.call(null,pth);

var G__52277 = cljs.core.next.call(null,seq__52265__$1);
var G__52278 = null;
var G__52279 = (0);
var G__52280 = (0);
seq__52265 = G__52277;
chunk__52266 = G__52278;
count__52267 = G__52279;
i__52268 = G__52280;
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
var xy_52307 = collab_board.core.get_xy.call(null,ev);
cljs.core.swap_BANG_.call(null,collab_board.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"current-path","current-path",-113759954),cljs.core.conj.call(null,new cljs.core.Keyword(null,"current-path","current-path",-113759954).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)),xy_52307));

collab_board.core.line_to.call(null,xy_52307);

collab_board.core.stroke.call(null);

collab_board.core.move_to.call(null,xy_52307);
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"is-erasing","is-erasing",-34282220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,collab_board.core.state)))){
var vec__52294 = collab_board.core.get_xy.call(null,ev);
var px = cljs.core.nth.call(null,vec__52294,(0),null);
var py = cljs.core.nth.call(null,vec__52294,(1),null);
return cljs.core.doall.call(null,(function (){var seq__52295 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (vec__52294,px,py){
return (function (i){
return (i + px);
});})(vec__52294,px,py))
,cljs.core.range.call(null,(-2),(2))));
var chunk__52300 = null;
var count__52301 = (0);
var i__52302 = (0);
while(true){
if((i__52302 < count__52301)){
var x = cljs.core._nth.call(null,chunk__52300,i__52302);
var seq__52303_52308 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (seq__52295,chunk__52300,count__52301,i__52302,x,vec__52294,px,py){
return (function (i){
return (i + py);
});})(seq__52295,chunk__52300,count__52301,i__52302,x,vec__52294,px,py))
,cljs.core.range.call(null,(-2),(2))));
var chunk__52304_52309 = null;
var count__52305_52310 = (0);
var i__52306_52311 = (0);
while(true){
if((i__52306_52311 < count__52305_52310)){
var y_52312 = cljs.core._nth.call(null,chunk__52304_52309,i__52306_52311);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_52312], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__52313 = seq__52303_52308;
var G__52314 = chunk__52304_52309;
var G__52315 = count__52305_52310;
var G__52316 = (i__52306_52311 + (1));
seq__52303_52308 = G__52313;
chunk__52304_52309 = G__52314;
count__52305_52310 = G__52315;
i__52306_52311 = G__52316;
continue;
} else {
var temp__4126__auto___52317 = cljs.core.seq.call(null,seq__52303_52308);
if(temp__4126__auto___52317){
var seq__52303_52318__$1 = temp__4126__auto___52317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52303_52318__$1)){
var c__21075__auto___52319 = cljs.core.chunk_first.call(null,seq__52303_52318__$1);
var G__52320 = cljs.core.chunk_rest.call(null,seq__52303_52318__$1);
var G__52321 = c__21075__auto___52319;
var G__52322 = cljs.core.count.call(null,c__21075__auto___52319);
var G__52323 = (0);
seq__52303_52308 = G__52320;
chunk__52304_52309 = G__52321;
count__52305_52310 = G__52322;
i__52306_52311 = G__52323;
continue;
} else {
var y_52324 = cljs.core.first.call(null,seq__52303_52318__$1);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_52324], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__52325 = cljs.core.next.call(null,seq__52303_52318__$1);
var G__52326 = null;
var G__52327 = (0);
var G__52328 = (0);
seq__52303_52308 = G__52325;
chunk__52304_52309 = G__52326;
count__52305_52310 = G__52327;
i__52306_52311 = G__52328;
continue;
}
} else {
}
}
break;
}

var G__52329 = seq__52295;
var G__52330 = chunk__52300;
var G__52331 = count__52301;
var G__52332 = (i__52302 + (1));
seq__52295 = G__52329;
chunk__52300 = G__52330;
count__52301 = G__52331;
i__52302 = G__52332;
continue;
} else {
var temp__4126__auto__ = cljs.core.seq.call(null,seq__52295);
if(temp__4126__auto__){
var seq__52295__$1 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52295__$1)){
var c__21075__auto__ = cljs.core.chunk_first.call(null,seq__52295__$1);
var G__52333 = cljs.core.chunk_rest.call(null,seq__52295__$1);
var G__52334 = c__21075__auto__;
var G__52335 = cljs.core.count.call(null,c__21075__auto__);
var G__52336 = (0);
seq__52295 = G__52333;
chunk__52300 = G__52334;
count__52301 = G__52335;
i__52302 = G__52336;
continue;
} else {
var x = cljs.core.first.call(null,seq__52295__$1);
var seq__52296_52337 = cljs.core.seq.call(null,cljs.core.map.call(null,((function (seq__52295,chunk__52300,count__52301,i__52302,x,seq__52295__$1,temp__4126__auto__,vec__52294,px,py){
return (function (i){
return (i + py);
});})(seq__52295,chunk__52300,count__52301,i__52302,x,seq__52295__$1,temp__4126__auto__,vec__52294,px,py))
,cljs.core.range.call(null,(-2),(2))));
var chunk__52297_52338 = null;
var count__52298_52339 = (0);
var i__52299_52340 = (0);
while(true){
if((i__52299_52340 < count__52298_52339)){
var y_52341 = cljs.core._nth.call(null,chunk__52297_52338,i__52299_52340);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_52341], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__52342 = seq__52296_52337;
var G__52343 = chunk__52297_52338;
var G__52344 = count__52298_52339;
var G__52345 = (i__52299_52340 + (1));
seq__52296_52337 = G__52342;
chunk__52297_52338 = G__52343;
count__52298_52339 = G__52344;
i__52299_52340 = G__52345;
continue;
} else {
var temp__4126__auto___52346__$1 = cljs.core.seq.call(null,seq__52296_52337);
if(temp__4126__auto___52346__$1){
var seq__52296_52347__$1 = temp__4126__auto___52346__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52296_52347__$1)){
var c__21075__auto___52348 = cljs.core.chunk_first.call(null,seq__52296_52347__$1);
var G__52349 = cljs.core.chunk_rest.call(null,seq__52296_52347__$1);
var G__52350 = c__21075__auto___52348;
var G__52351 = cljs.core.count.call(null,c__21075__auto___52348);
var G__52352 = (0);
seq__52296_52337 = G__52349;
chunk__52297_52338 = G__52350;
count__52298_52339 = G__52351;
i__52299_52340 = G__52352;
continue;
} else {
var y_52353 = cljs.core.first.call(null,seq__52296_52347__$1);
if(collab_board.core.remove_paths_by_point.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y_52353], null))){
collab_board.core.redraw.call(null);
} else {
}

var G__52354 = cljs.core.next.call(null,seq__52296_52347__$1);
var G__52355 = null;
var G__52356 = (0);
var G__52357 = (0);
seq__52296_52337 = G__52354;
chunk__52297_52338 = G__52355;
count__52298_52339 = G__52356;
i__52299_52340 = G__52357;
continue;
}
} else {
}
}
break;
}

var G__52358 = cljs.core.next.call(null,seq__52295__$1);
var G__52359 = null;
var G__52360 = (0);
var G__52361 = (0);
seq__52295 = G__52358;
chunk__52300 = G__52359;
count__52301 = G__52360;
i__52302 = G__52361;
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
collab_board.core.init_BANG_ = (function collab_board$core$init_BANG_(){
collab_board.core.debug.call(null,"Initializing");

collab_board.core.canvas.addEventListener("mousedown",collab_board.core.canvas_mousedown);

collab_board.core.canvas.addEventListener("mouseup",collab_board.core.canvas_mouseup);

collab_board.core.canvas.addEventListener("mousemove",collab_board.core.canvas_mousemove);

collab_board.core.socket.addEventListener("message",collab_board.core.on_path_update);

collab_board.core.canvas.addEventListener("contextmenu",(function (ev){
return false;
}));

window.addEventListener("keydown",collab_board.core.key_down);

return window.addEventListener("keyup",collab_board.core.key_up);
});

//# sourceMappingURL=core.js.map