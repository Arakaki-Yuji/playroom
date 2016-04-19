// Compiled by ClojureScript 1.8.40 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14097_14111 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14098_14112 = null;
var count__14099_14113 = (0);
var i__14100_14114 = (0);
while(true){
if((i__14100_14114 < count__14099_14113)){
var f_14115 = cljs.core._nth.call(null,chunk__14098_14112,i__14100_14114);
cljs.core.println.call(null,"  ",f_14115);

var G__14116 = seq__14097_14111;
var G__14117 = chunk__14098_14112;
var G__14118 = count__14099_14113;
var G__14119 = (i__14100_14114 + (1));
seq__14097_14111 = G__14116;
chunk__14098_14112 = G__14117;
count__14099_14113 = G__14118;
i__14100_14114 = G__14119;
continue;
} else {
var temp__4425__auto___14120 = cljs.core.seq.call(null,seq__14097_14111);
if(temp__4425__auto___14120){
var seq__14097_14121__$1 = temp__4425__auto___14120;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14097_14121__$1)){
var c__7652__auto___14122 = cljs.core.chunk_first.call(null,seq__14097_14121__$1);
var G__14123 = cljs.core.chunk_rest.call(null,seq__14097_14121__$1);
var G__14124 = c__7652__auto___14122;
var G__14125 = cljs.core.count.call(null,c__7652__auto___14122);
var G__14126 = (0);
seq__14097_14111 = G__14123;
chunk__14098_14112 = G__14124;
count__14099_14113 = G__14125;
i__14100_14114 = G__14126;
continue;
} else {
var f_14127 = cljs.core.first.call(null,seq__14097_14121__$1);
cljs.core.println.call(null,"  ",f_14127);

var G__14128 = cljs.core.next.call(null,seq__14097_14121__$1);
var G__14129 = null;
var G__14130 = (0);
var G__14131 = (0);
seq__14097_14111 = G__14128;
chunk__14098_14112 = G__14129;
count__14099_14113 = G__14130;
i__14100_14114 = G__14131;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14132 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6841__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6841__auto__)){
return or__6841__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14132);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14132)))?cljs.core.second.call(null,arglists_14132):arglists_14132));
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

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14101 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14102 = null;
var count__14103 = (0);
var i__14104 = (0);
while(true){
if((i__14104 < count__14103)){
var vec__14105 = cljs.core._nth.call(null,chunk__14102,i__14104);
var name = cljs.core.nth.call(null,vec__14105,(0),null);
var map__14106 = cljs.core.nth.call(null,vec__14105,(1),null);
var map__14106__$1 = ((((!((map__14106 == null)))?((((map__14106.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14106.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14106):map__14106);
var doc = cljs.core.get.call(null,map__14106__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14106__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14133 = seq__14101;
var G__14134 = chunk__14102;
var G__14135 = count__14103;
var G__14136 = (i__14104 + (1));
seq__14101 = G__14133;
chunk__14102 = G__14134;
count__14103 = G__14135;
i__14104 = G__14136;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14101);
if(temp__4425__auto__){
var seq__14101__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14101__$1)){
var c__7652__auto__ = cljs.core.chunk_first.call(null,seq__14101__$1);
var G__14137 = cljs.core.chunk_rest.call(null,seq__14101__$1);
var G__14138 = c__7652__auto__;
var G__14139 = cljs.core.count.call(null,c__7652__auto__);
var G__14140 = (0);
seq__14101 = G__14137;
chunk__14102 = G__14138;
count__14103 = G__14139;
i__14104 = G__14140;
continue;
} else {
var vec__14108 = cljs.core.first.call(null,seq__14101__$1);
var name = cljs.core.nth.call(null,vec__14108,(0),null);
var map__14109 = cljs.core.nth.call(null,vec__14108,(1),null);
var map__14109__$1 = ((((!((map__14109 == null)))?((((map__14109.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14109.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14109):map__14109);
var doc = cljs.core.get.call(null,map__14109__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__14109__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__14141 = cljs.core.next.call(null,seq__14101__$1);
var G__14142 = null;
var G__14143 = (0);
var G__14144 = (0);
seq__14101 = G__14141;
chunk__14102 = G__14142;
count__14103 = G__14143;
i__14104 = G__14144;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map