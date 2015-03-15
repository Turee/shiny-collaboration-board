// Compiled by ClojureScript 0.0-3058 {}
goog.provide('reagent_forms.datepicker');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
reagent_forms.datepicker.dates = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"days","days",-1394072564),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], null),new cljs.core.Keyword(null,"days-short","days-short",-443486111),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"], null),new cljs.core.Keyword(null,"months","months",-45571637),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["January","February","March","April","May","June","July","August","September","October","November","December"], null),new cljs.core.Keyword(null,"month-short","month-short",-1531335142),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null)], null);
reagent_forms.datepicker.separator_matcher = (function reagent_forms$datepicker$separator_matcher(fmt){
var temp__4124__auto__ = (function (){var or__20288__auto__ = cljs.core.re_find.call(null,/[.\\/\-\s].*?/,fmt);
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return " ";
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var separator = temp__4124__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [separator,(function (){var pred__34889 = cljs.core._EQ_;
var expr__34890 = separator;
if(cljs.core.truth_(pred__34889.call(null,".",expr__34890))){
return /\./;
} else {
if(cljs.core.truth_(pred__34889.call(null," ",expr__34890))){
return /W+/;
} else {
return cljs.core.re_pattern.call(null,separator);
}
}
})()], null);
} else {
return null;
}
});
reagent_forms.datepicker.split_parts = (function reagent_forms$datepicker$split_parts(fmt,matcher){
return cljs.core.vec.call(null,cljs.core.map.call(null,cljs.core.keyword,clojure.string.split.call(null,fmt,matcher)));
});
reagent_forms.datepicker.parse_format = (function reagent_forms$datepicker$parse_format(fmt){
var fmt__$1 = (function (){var or__20288__auto__ = fmt;
if(cljs.core.truth_(or__20288__auto__)){
return or__20288__auto__;
} else {
return "mm/dd/yyyy";
}
})();
var vec__34893 = reagent_forms.datepicker.separator_matcher.call(null,fmt__$1);
var separator = cljs.core.nth.call(null,vec__34893,(0),null);
var matcher = cljs.core.nth.call(null,vec__34893,(1),null);
var parts = reagent_forms.datepicker.split_parts.call(null,fmt__$1,matcher);
if(cljs.core.empty_QMARK_.call(null,parts)){
throw (new Error("Invalid date format."));
} else {
}

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"separator","separator",-1628749125),separator,new cljs.core.Keyword(null,"matcher","matcher",-452768995),matcher,new cljs.core.Keyword(null,"parts","parts",849007691),parts], null);
});
reagent_forms.datepicker.leap_year_QMARK_ = (function reagent_forms$datepicker$leap_year_QMARK_(year){
return ((cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(4)))) && (cljs.core.not_EQ_.call(null,(0),cljs.core.mod.call(null,year,(100))))) || (cljs.core._EQ_.call(null,(0),cljs.core.mod.call(null,year,(400))));
});
reagent_forms.datepicker.days_in_month = (function reagent_forms$datepicker$days_in_month(year,month){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),((reagent_forms.datepicker.leap_year_QMARK_.call(null,year))?(29):(28)),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null).call(null,month);
});
reagent_forms.datepicker.blank_date = (function reagent_forms$datepicker$blank_date(){
var G__34895 = (new Date());
G__34895.setHours((0));

G__34895.setMinutes((0));

G__34895.setSeconds((0));

G__34895.setMilliseconds((0));

return G__34895;
});
reagent_forms.datepicker.parse_date = (function reagent_forms$datepicker$parse_date(date,fmt){
var parts = clojure.string.split.call(null,date,new cljs.core.Keyword(null,"matcher","matcher",-452768995).cljs$core$IFn$_invoke$arity$1(fmt));
var date__$1 = reagent_forms.datepicker.blank_date.call(null);
var fmt_parts = cljs.core.count.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt)),cljs.core.count.call(null,parts))){
var year = date__$1.getFullYear();
var month = date__$1.getMonth();
var day = date__$1.getDate();
var i = (0);
while(true){
if(cljs.core.not_EQ_.call(null,i,fmt_parts)){
var val = parseInt(parts.call(null,i),(10));
var val__$1 = (cljs.core.truth_(isNaN(val))?(1):val);
var part = new cljs.core.Keyword(null,"parts","parts",849007691).cljs$core$IFn$_invoke$arity$1(fmt).call(null,i);
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([part], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"dd","dd",-1340437629)], null)))){
var G__34896 = year;
var G__34897 = month;
var G__34898 = val__$1;
var G__34899 = (i + (1));
year = G__34896;
month = G__34897;
day = G__34898;
i = G__34899;
continue;
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([part], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"mm","mm",-1652850560)], null)))){
var G__34900 = year;
var G__34901 = (val__$1 - (1));
var G__34902 = day;
var G__34903 = (i + (1));
year = G__34900;
month = G__34901;
day = G__34902;
i = G__34903;
continue;
} else {
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword(null,"yy","yy",-1432012814))){
var G__34904 = ((2000) + val__$1);
var G__34905 = month;
var G__34906 = day;
var G__34907 = (i + (1));
year = G__34904;
month = G__34905;
day = G__34906;
i = G__34907;
continue;
} else {
if(cljs.core._EQ_.call(null,part,new cljs.core.Keyword(null,"yyyy","yyyy",2098225339))){
var G__34908 = val__$1;
var G__34909 = month;
var G__34910 = day;
var G__34911 = (i + (1));
year = G__34908;
month = G__34909;
day = G__34910;
i = G__34911;
continue;
} else {
return null;
}
}
}
}
} else {
return (new Date(year,month,day,(0),(0),(0)));
}
break;
}
} else {
return date__$1;
}
});
reagent_forms.datepicker.formatted_value = (function reagent_forms$datepicker$formatted_value(v){
return [cljs.core.str((((v < (10)))?"0":"")),cljs.core.str(v)].join('');
});
reagent_forms.datepicker.format_date = (function reagent_forms$datepicker$format_date(p__34913,p__34914){
var map__34917 = p__34913;
var map__34917__$1 = ((cljs.core.seq_QMARK_.call(null,map__34917))?cljs.core.apply.call(null,cljs.core.hash_map,map__34917):map__34917);
var day = cljs.core.get.call(null,map__34917__$1,new cljs.core.Keyword(null,"day","day",-274800446));
var month = cljs.core.get.call(null,map__34917__$1,new cljs.core.Keyword(null,"month","month",-1960248533));
var year = cljs.core.get.call(null,map__34917__$1,new cljs.core.Keyword(null,"year","year",335913393));
var map__34918 = p__34914;
var map__34918__$1 = ((cljs.core.seq_QMARK_.call(null,map__34918))?cljs.core.apply.call(null,cljs.core.hash_map,map__34918):map__34918);
var parts = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"parts","parts",849007691));
var separator = cljs.core.get.call(null,map__34918__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125));
return clojure.string.join.call(null,separator,cljs.core.map.call(null,((function (map__34917,map__34917__$1,day,month,year,map__34918,map__34918__$1,parts,separator){
return (function (p1__34912_SHARP_){
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__34912_SHARP_], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.Keyword(null,"dd","dd",-1340437629)], null)))){
return reagent_forms.datepicker.formatted_value.call(null,day);
} else {
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([p1__34912_SHARP_], true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m","m",1632677161),new cljs.core.Keyword(null,"mm","mm",-1652850560)], null)))){
return reagent_forms.datepicker.formatted_value.call(null,month);
} else {
if(cljs.core._EQ_.call(null,p1__34912_SHARP_,new cljs.core.Keyword(null,"yy","yy",-1432012814))){
return [cljs.core.str(year)].join('').substring((2));
} else {
if(cljs.core._EQ_.call(null,p1__34912_SHARP_,new cljs.core.Keyword(null,"yyyy","yyyy",2098225339))){
return year;
} else {
return null;
}
}
}
}
});})(map__34917,map__34917__$1,day,month,year,map__34918,map__34918__$1,parts,separator))
,parts));
});
reagent_forms.datepicker.first_day_of_week = (function reagent_forms$datepicker$first_day_of_week(year,month){
return (function (){var G__34920 = (new Date());
G__34920.setYear(year);

G__34920.setMonth(month);

G__34920.setDate((1));

return G__34920;
})().getDay();
});
reagent_forms.datepicker.gen_days = (function reagent_forms$datepicker$gen_days(current_date,get,save_BANG_,expanded_QMARK_,auto_close_QMARK_){
var vec__34926 = cljs.core.deref.call(null,current_date);
var year = cljs.core.nth.call(null,vec__34926,(0),null);
var month = cljs.core.nth.call(null,vec__34926,(1),null);
var day = cljs.core.nth.call(null,vec__34926,(2),null);
var num_days = reagent_forms.datepicker.days_in_month.call(null,year,month);
var last_month_days = (((month > (0)))?reagent_forms.datepicker.days_in_month.call(null,year,(month - (1))):null);
var first_day = reagent_forms.datepicker.first_day_of_week.call(null,year,month);
return cljs.core.map.call(null,((function (vec__34926,year,month,day,num_days,last_month_days,first_day){
return (function (week){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),week);
});})(vec__34926,year,month,day,num_days,last_month_days,first_day))
,cljs.core.partition.call(null,(7),(function (){var iter__21044__auto__ = ((function (vec__34926,year,month,day,num_days,last_month_days,first_day){
return (function reagent_forms$datepicker$gen_days_$_iter__34927(s__34928){
return (new cljs.core.LazySeq(null,((function (vec__34926,year,month,day,num_days,last_month_days,first_day){
return (function (){
var s__34928__$1 = s__34928;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34928__$1);
if(temp__4126__auto__){
var s__34928__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34928__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__34928__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__34930 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__34929 = (0);
while(true){
if((i__34929 < size__21043__auto__)){
var i = cljs.core._nth.call(null,c__21042__auto__,i__34929);
cljs.core.chunk_append.call(null,b__34930,(((i < first_day))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.old","td.day.old",1008935029),(cljs.core.truth_(last_month_days)?(last_month_days - ((first_day - i) - (1))):null)], null):(((i < (first_day + num_days)))?(function (){var day__$1 = ((i - first_day) + (1));
var date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(month + (1)),new cljs.core.Keyword(null,"day","day",-274800446),day__$1], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day","td.day",-943475874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4126__auto____$1 = get.call(null);
if(cljs.core.truth_(temp__4126__auto____$1)){
var doc_date = temp__4126__auto____$1;
if(cljs.core._EQ_.call(null,doc_date,date)){
return "active";
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34929,day__$1,date,i,c__21042__auto__,size__21043__auto__,b__34930,s__34928__$2,temp__4126__auto__,vec__34926,year,month,day,num_days,last_month_days,first_day){
return (function (){
cljs.core.swap_BANG_.call(null,current_date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),day__$1);

if(cljs.core._EQ_.call(null,get.call(null),date)){
save_BANG_.call(null,null);
} else {
save_BANG_.call(null,date);
}

if(cljs.core.truth_(auto_close_QMARK_)){
return cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);
} else {
return null;
}
});})(i__34929,day__$1,date,i,c__21042__auto__,size__21043__auto__,b__34930,s__34928__$2,temp__4126__auto__,vec__34926,year,month,day,num_days,last_month_days,first_day))
], null),day__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.new","td.day.new",500967295),(((month < (11)))?((i - (first_day + num_days)) + (1)):null)], null)
)));

var G__34931 = (i__34929 + (1));
i__34929 = G__34931;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34930),reagent_forms$datepicker$gen_days_$_iter__34927.call(null,cljs.core.chunk_rest.call(null,s__34928__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34930),null);
}
} else {
var i = cljs.core.first.call(null,s__34928__$2);
return cljs.core.cons.call(null,(((i < first_day))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.old","td.day.old",1008935029),(cljs.core.truth_(last_month_days)?(last_month_days - ((first_day - i) - (1))):null)], null):(((i < (first_day + num_days)))?(function (){var day__$1 = ((i - first_day) + (1));
var date = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),year,new cljs.core.Keyword(null,"month","month",-1960248533),(month + (1)),new cljs.core.Keyword(null,"day","day",-274800446),day__$1], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day","td.day",-943475874),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var temp__4126__auto____$1 = get.call(null);
if(cljs.core.truth_(temp__4126__auto____$1)){
var doc_date = temp__4126__auto____$1;
if(cljs.core._EQ_.call(null,doc_date,date)){
return "active";
} else {
return null;
}
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (day__$1,date,i,s__34928__$2,temp__4126__auto__,vec__34926,year,month,day,num_days,last_month_days,first_day){
return (function (){
cljs.core.swap_BANG_.call(null,current_date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2)], null),day__$1);

if(cljs.core._EQ_.call(null,get.call(null),date)){
save_BANG_.call(null,null);
} else {
save_BANG_.call(null,date);
}

if(cljs.core.truth_(auto_close_QMARK_)){
return cljs.core.reset_BANG_.call(null,expanded_QMARK_,false);
} else {
return null;
}
});})(day__$1,date,i,s__34928__$2,temp__4126__auto__,vec__34926,year,month,day,num_days,last_month_days,first_day))
], null),day__$1], null);
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.day.new","td.day.new",500967295),(((month < (11)))?((i - (first_day + num_days)) + (1)):null)], null)
)),reagent_forms$datepicker$gen_days_$_iter__34927.call(null,cljs.core.rest.call(null,s__34928__$2)));
}
} else {
return null;
}
break;
}
});})(vec__34926,year,month,day,num_days,last_month_days,first_day))
,null,null));
});})(vec__34926,year,month,day,num_days,last_month_days,first_day))
;
return iter__21044__auto__.call(null,cljs.core.range.call(null,(42)));
})()));
});
reagent_forms.datepicker.last_date = (function reagent_forms$datepicker$last_date(p__34932){
var vec__34934 = p__34932;
var year = cljs.core.nth.call(null,vec__34934,(0),null);
var month = cljs.core.nth.call(null,vec__34934,(1),null);
if((month > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,(month - (1))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(year - (1)),(11)], null);
}
});
reagent_forms.datepicker.next_date = (function reagent_forms$datepicker$next_date(p__34935){
var vec__34937 = p__34935;
var year = cljs.core.nth.call(null,vec__34937,(0),null);
var month = cljs.core.nth.call(null,vec__34937,(1),null);
if(cljs.core._EQ_.call(null,month,(11))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(year + (1)),(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,(month + (1))], null);
}
});
reagent_forms.datepicker.year_picker = (function reagent_forms$datepicker$year_picker(date,save_BANG_,view_selector){
var start_year = reagent.core.atom.call(null,(cljs.core.first.call(null,cljs.core.deref.call(null,date)) - (10)));
return ((function (start_year){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (start_year){
return (function (){
return cljs.core.swap_BANG_.call(null,start_year,cljs.core._,(10));
});})(start_year))
], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2)], null),[cljs.core.str(cljs.core.deref.call(null,start_year)),cljs.core.str(" - "),cljs.core.str((cljs.core.deref.call(null,start_year) + (10)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (start_year){
return (function (){
return cljs.core.swap_BANG_.call(null,start_year,cljs.core._PLUS_,(10));
});})(start_year))
], null),"\u203A"], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__21044__auto__ = ((function (start_year){
return (function reagent_forms$datepicker$year_picker_$_iter__34958(s__34959){
return (new cljs.core.LazySeq(null,((function (start_year){
return (function (){
var s__34959__$1 = s__34959;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34959__$1);
if(temp__4126__auto__){
var s__34959__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34959__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__34959__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__34961 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__34960 = (0);
while(true){
if((i__34960 < size__21043__auto__)){
var row = cljs.core._nth.call(null,c__21042__auto__,i__34960);
cljs.core.chunk_append.call(null,b__34961,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__21044__auto__ = ((function (i__34960,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year){
return (function reagent_forms$datepicker$year_picker_$_iter__34958_$_iter__34970(s__34971){
return (new cljs.core.LazySeq(null,((function (i__34960,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year){
return (function (){
var s__34971__$1 = s__34971;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34971__$1);
if(temp__4126__auto____$1){
var s__34971__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34971__$2)){
var c__21042__auto____$1 = cljs.core.chunk_first.call(null,s__34971__$2);
var size__21043__auto____$1 = cljs.core.count.call(null,c__21042__auto____$1);
var b__34973 = cljs.core.chunk_buffer.call(null,size__21043__auto____$1);
if((function (){var i__34972 = (0);
while(true){
if((i__34972 < size__21043__auto____$1)){
var year = cljs.core._nth.call(null,c__21042__auto____$1,i__34972);
cljs.core.chunk_append.call(null,b__34973,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34972,i__34960,year,c__21042__auto____$1,size__21043__auto____$1,b__34973,s__34971__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(i__34972,i__34960,year,c__21042__auto____$1,size__21043__auto____$1,b__34973,s__34971__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null));

var G__34978 = (i__34972 + (1));
i__34972 = G__34978;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34973),reagent_forms$datepicker$year_picker_$_iter__34958_$_iter__34970.call(null,cljs.core.chunk_rest.call(null,s__34971__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34973),null);
}
} else {
var year = cljs.core.first.call(null,s__34971__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34960,year,s__34971__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(i__34960,year,s__34971__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null),reagent_forms$datepicker$year_picker_$_iter__34958_$_iter__34970.call(null,cljs.core.rest.call(null,s__34971__$2)));
}
} else {
return null;
}
break;
}
});})(i__34960,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year))
,null,null));
});})(i__34960,row,c__21042__auto__,size__21043__auto__,b__34961,s__34959__$2,temp__4126__auto__,start_year))
;
return iter__21044__auto__.call(null,row);
})()));

var G__34979 = (i__34960 + (1));
i__34960 = G__34979;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34961),reagent_forms$datepicker$year_picker_$_iter__34958.call(null,cljs.core.chunk_rest.call(null,s__34959__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34961),null);
}
} else {
var row = cljs.core.first.call(null,s__34959__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__21044__auto__ = ((function (row,s__34959__$2,temp__4126__auto__,start_year){
return (function reagent_forms$datepicker$year_picker_$_iter__34958_$_iter__34974(s__34975){
return (new cljs.core.LazySeq(null,((function (row,s__34959__$2,temp__4126__auto__,start_year){
return (function (){
var s__34975__$1 = s__34975;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__34975__$1);
if(temp__4126__auto____$1){
var s__34975__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34975__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__34975__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__34977 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__34976 = (0);
while(true){
if((i__34976 < size__21043__auto__)){
var year = cljs.core._nth.call(null,c__21042__auto__,i__34976);
cljs.core.chunk_append.call(null,b__34977,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__34976,year,c__21042__auto__,size__21043__auto__,b__34977,s__34975__$2,temp__4126__auto____$1,row,s__34959__$2,temp__4126__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(i__34976,year,c__21042__auto__,size__21043__auto__,b__34977,s__34975__$2,temp__4126__auto____$1,row,s__34959__$2,temp__4126__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null));

var G__34980 = (i__34976 + (1));
i__34976 = G__34980;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34977),reagent_forms$datepicker$year_picker_$_iter__34958_$_iter__34974.call(null,cljs.core.chunk_rest.call(null,s__34975__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34977),null);
}
} else {
var year = cljs.core.first.call(null,s__34975__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.year","td.year",-1125580353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year,s__34975__$2,temp__4126__auto____$1,row,s__34959__$2,temp__4126__auto__,start_year){
return (function (){
cljs.core.swap_BANG_.call(null,date,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null),year);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
});})(year,s__34975__$2,temp__4126__auto____$1,row,s__34959__$2,temp__4126__auto__,start_year))
,new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.call(null,year,cljs.core.first.call(null,cljs.core.deref.call(null,date))))?"active":null)], null),year], null),reagent_forms$datepicker$year_picker_$_iter__34958_$_iter__34974.call(null,cljs.core.rest.call(null,s__34975__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__34959__$2,temp__4126__auto__,start_year))
,null,null));
});})(row,s__34959__$2,temp__4126__auto__,start_year))
;
return iter__21044__auto__.call(null,row);
})()),reagent_forms$datepicker$year_picker_$_iter__34958.call(null,cljs.core.rest.call(null,s__34959__$2)));
}
} else {
return null;
}
break;
}
});})(start_year))
,null,null));
});})(start_year))
;
return iter__21044__auto__.call(null,cljs.core.partition.call(null,(4),cljs.core.range.call(null,cljs.core.deref.call(null,start_year),(cljs.core.deref.call(null,start_year) + (12)))));
})())], null);
});
;})(start_year))
});
reagent_forms.datepicker.month_picker = (function reagent_forms$datepicker$month_picker(date,save_BANG_,view_selector){
var year = reagent.core.atom.call(null,cljs.core.first.call(null,cljs.core.deref.call(null,date)));
return ((function (year){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year){
return (function (){
return cljs.core.swap_BANG_.call(null,year,cljs.core.dec);
});})(year))
], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(2),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year){
return (function (){
return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"year","year",335913393));
});})(year))
], null),cljs.core.deref.call(null,year)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (year){
return (function (){
return cljs.core.swap_BANG_.call(null,year,cljs.core.inc);
});})(year))
], null),"\u203A"], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),(function (){var iter__21044__auto__ = ((function (year){
return (function reagent_forms$datepicker$month_picker_$_iter__35065(s__35066){
return (new cljs.core.LazySeq(null,((function (year){
return (function (){
var s__35066__$1 = s__35066;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35066__$1);
if(temp__4126__auto__){
var s__35066__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35066__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__35066__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__35068 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__35067 = (0);
while(true){
if((i__35067 < size__21043__auto__)){
var row = cljs.core._nth.call(null,c__21042__auto__,i__35067);
cljs.core.chunk_append.call(null,b__35068,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__21044__auto__ = ((function (i__35067,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year){
return (function reagent_forms$datepicker$month_picker_$_iter__35065_$_iter__35109(s__35110){
return (new cljs.core.LazySeq(null,((function (i__35067,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year){
return (function (){
var s__35110__$1 = s__35110;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__35110__$1);
if(temp__4126__auto____$1){
var s__35110__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35110__$2)){
var c__21042__auto____$1 = cljs.core.chunk_first.call(null,s__35110__$2);
var size__21043__auto____$1 = cljs.core.count.call(null,c__21042__auto____$1);
var b__35112 = cljs.core.chunk_buffer.call(null,size__21043__auto____$1);
if((function (){var i__35111 = (0);
while(true){
if((i__35111 < size__21043__auto____$1)){
var vec__35121 = cljs.core._nth.call(null,c__21042__auto____$1,i__35111);
var idx = cljs.core.nth.call(null,vec__35121,(0),null);
var month_name = cljs.core.nth.call(null,vec__35121,(1),null);
cljs.core.chunk_append.call(null,b__35112,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__35122 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__35122,(0),null);
var cur_month = cljs.core.nth.call(null,vec__35122,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35111,i__35067,vec__35121,idx,month_name,c__21042__auto____$1,size__21043__auto____$1,b__35112,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (i__35111,i__35067,vec__35121,idx,month_name,c__21042__auto____$1,size__21043__auto____$1,b__35112,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year){
return (function (p__35123){
var vec__35124 = p__35123;
var _ = cljs.core.nth.call(null,vec__35124,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35124,(1),null);
var day = cljs.core.nth.call(null,vec__35124,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(i__35111,i__35067,vec__35121,idx,month_name,c__21042__auto____$1,size__21043__auto____$1,b__35112,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(i__35111,i__35067,vec__35121,idx,month_name,c__21042__auto____$1,size__21043__auto____$1,b__35112,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year))
], null),month_name], null));

var G__35149 = (i__35111 + (1));
i__35111 = G__35149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35112),reagent_forms$datepicker$month_picker_$_iter__35065_$_iter__35109.call(null,cljs.core.chunk_rest.call(null,s__35110__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35112),null);
}
} else {
var vec__35125 = cljs.core.first.call(null,s__35110__$2);
var idx = cljs.core.nth.call(null,vec__35125,(0),null);
var month_name = cljs.core.nth.call(null,vec__35125,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__35126 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__35126,(0),null);
var cur_month = cljs.core.nth.call(null,vec__35126,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35067,vec__35125,idx,month_name,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (i__35067,vec__35125,idx,month_name,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year){
return (function (p__35127){
var vec__35128 = p__35127;
var _ = cljs.core.nth.call(null,vec__35128,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35128,(1),null);
var day = cljs.core.nth.call(null,vec__35128,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(i__35067,vec__35125,idx,month_name,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(i__35067,vec__35125,idx,month_name,s__35110__$2,temp__4126__auto____$1,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year))
], null),month_name], null),reagent_forms$datepicker$month_picker_$_iter__35065_$_iter__35109.call(null,cljs.core.rest.call(null,s__35110__$2)));
}
} else {
return null;
}
break;
}
});})(i__35067,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year))
,null,null));
});})(i__35067,row,c__21042__auto__,size__21043__auto__,b__35068,s__35066__$2,temp__4126__auto__,year))
;
return iter__21044__auto__.call(null,row);
})()));

var G__35150 = (i__35067 + (1));
i__35067 = G__35150;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35068),reagent_forms$datepicker$month_picker_$_iter__35065.call(null,cljs.core.chunk_rest.call(null,s__35066__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35068),null);
}
} else {
var row = cljs.core.first.call(null,s__35066__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646)], null),(function (){var iter__21044__auto__ = ((function (row,s__35066__$2,temp__4126__auto__,year){
return (function reagent_forms$datepicker$month_picker_$_iter__35065_$_iter__35129(s__35130){
return (new cljs.core.LazySeq(null,((function (row,s__35066__$2,temp__4126__auto__,year){
return (function (){
var s__35130__$1 = s__35130;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__35130__$1);
if(temp__4126__auto____$1){
var s__35130__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__35130__$2)){
var c__21042__auto__ = cljs.core.chunk_first.call(null,s__35130__$2);
var size__21043__auto__ = cljs.core.count.call(null,c__21042__auto__);
var b__35132 = cljs.core.chunk_buffer.call(null,size__21043__auto__);
if((function (){var i__35131 = (0);
while(true){
if((i__35131 < size__21043__auto__)){
var vec__35141 = cljs.core._nth.call(null,c__21042__auto__,i__35131);
var idx = cljs.core.nth.call(null,vec__35141,(0),null);
var month_name = cljs.core.nth.call(null,vec__35141,(1),null);
cljs.core.chunk_append.call(null,b__35132,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__35142 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__35142,(0),null);
var cur_month = cljs.core.nth.call(null,vec__35142,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__35131,vec__35141,idx,month_name,c__21042__auto__,size__21043__auto__,b__35132,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (i__35131,vec__35141,idx,month_name,c__21042__auto__,size__21043__auto__,b__35132,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year){
return (function (p__35143){
var vec__35144 = p__35143;
var _ = cljs.core.nth.call(null,vec__35144,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35144,(1),null);
var day = cljs.core.nth.call(null,vec__35144,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(i__35131,vec__35141,idx,month_name,c__21042__auto__,size__21043__auto__,b__35132,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(i__35131,vec__35141,idx,month_name,c__21042__auto__,size__21043__auto__,b__35132,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year))
], null),month_name], null));

var G__35151 = (i__35131 + (1));
i__35131 = G__35151;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35132),reagent_forms$datepicker$month_picker_$_iter__35065_$_iter__35129.call(null,cljs.core.chunk_rest.call(null,s__35130__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35132),null);
}
} else {
var vec__35145 = cljs.core.first.call(null,s__35130__$2);
var idx = cljs.core.nth.call(null,vec__35145,(0),null);
var month_name = cljs.core.nth.call(null,vec__35145,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.month","td.month",754894788),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var vec__35146 = cljs.core.deref.call(null,date);
var cur_year = cljs.core.nth.call(null,vec__35146,(0),null);
var cur_month = cljs.core.nth.call(null,vec__35146,(1),null);
if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,year),cur_year)) && (cljs.core._EQ_.call(null,idx,cur_month))){
return "active";
} else {
return null;
}
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__35145,idx,month_name,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year){
return (function (){
cljs.core.swap_BANG_.call(null,date,((function (vec__35145,idx,month_name,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year){
return (function (p__35147){
var vec__35148 = p__35147;
var _ = cljs.core.nth.call(null,vec__35148,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__35148,(1),null);
var day = cljs.core.nth.call(null,vec__35148,(2),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,year),idx,day], null);
});})(vec__35145,idx,month_name,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year))
);

save_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"year","year",335913393),cljs.core.deref.call(null,date).call(null,(0)),new cljs.core.Keyword(null,"month","month",-1960248533),(cljs.core.deref.call(null,date).call(null,(1)) + (1)),new cljs.core.Keyword(null,"day","day",-274800446),cljs.core.deref.call(null,date).call(null,(2))], null));

return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"day","day",-274800446));
});})(vec__35145,idx,month_name,s__35130__$2,temp__4126__auto____$1,row,s__35066__$2,temp__4126__auto__,year))
], null),month_name], null),reagent_forms$datepicker$month_picker_$_iter__35065_$_iter__35129.call(null,cljs.core.rest.call(null,s__35130__$2)));
}
} else {
return null;
}
break;
}
});})(row,s__35066__$2,temp__4126__auto__,year))
,null,null));
});})(row,s__35066__$2,temp__4126__auto__,year))
;
return iter__21044__auto__.call(null,row);
})()),reagent_forms$datepicker$month_picker_$_iter__35065.call(null,cljs.core.rest.call(null,s__35066__$2)));
}
} else {
return null;
}
break;
}
});})(year))
,null,null));
});})(year))
;
return iter__21044__auto__.call(null,cljs.core.partition.call(null,(4),cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"], null))));
})())], null);
});
;})(year))
});
reagent_forms.datepicker.day_picker = (function reagent_forms$datepicker$day_picker(date,get,save_BANG_,view_selector,expanded_QMARK_,auto_close_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table-condensed","table.table-condensed",-470847570),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.prev","th.prev",589654496),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,date,reagent_forms.datepicker.last_date);
})], null),"\u2039"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.switch","th.switch",1141621198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"col-span","col-span",-232603210),(5),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_.call(null,view_selector,new cljs.core.Keyword(null,"month","month",-1960248533));
})], null),[cljs.core.str(cljs.core.get_in.call(null,reagent_forms.datepicker.dates,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"months","months",-45571637),cljs.core.second.call(null,cljs.core.deref.call(null,date))], null))),cljs.core.str(" "),cljs.core.str(cljs.core.first.call(null,cljs.core.deref.call(null,date)))].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.next","th.next",345099302),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,date,reagent_forms.datepicker.next_date);
})], null),"\u203A"], null)], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Su"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Mo"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Tu"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"We"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Th"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Fr"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.dow","th.dow",-322111723),"Sa"], null)], null)], null),cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300)], null),reagent_forms.datepicker.gen_days.call(null,date,get,save_BANG_,expanded_QMARK_,auto_close_QMARK_))], null);
});
reagent_forms.datepicker.datepicker = (function reagent_forms$datepicker$datepicker(year,month,day,expanded_QMARK_,auto_close_QMARK_,get,save_BANG_,inline){
var date = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [year,month,day], null));
var view_selector = reagent.core.atom.call(null,new cljs.core.Keyword(null,"day","day",-274800446));
return ((function (date,view_selector){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str("datepicker"),cljs.core.str((cljs.core.truth_(cljs.core.deref.call(null,expanded_QMARK_))?null:" dropdown-menu")),cljs.core.str((cljs.core.truth_(inline)?" dp-inline":" dp-dropdown"))].join('')], null),(function (){var pred__35155 = cljs.core._EQ_;
var expr__35156 = cljs.core.deref.call(null,view_selector);
if(cljs.core.truth_(pred__35155.call(null,new cljs.core.Keyword(null,"day","day",-274800446),expr__35156))){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.day_picker,date,get,save_BANG_,view_selector,expanded_QMARK_,auto_close_QMARK_], null);
} else {
if(cljs.core.truth_(pred__35155.call(null,new cljs.core.Keyword(null,"month","month",-1960248533),expr__35156))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.month_picker,date,save_BANG_,view_selector], null);
} else {
if(cljs.core.truth_(pred__35155.call(null,new cljs.core.Keyword(null,"year","year",335913393),expr__35156))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_forms.datepicker.year_picker,date,save_BANG_,view_selector], null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__35156)].join('')));
}
}
}
})()], null);
});
;})(date,view_selector))
});

//# sourceMappingURL=datepicker.js.map