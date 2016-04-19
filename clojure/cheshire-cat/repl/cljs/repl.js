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
var seq__11957_11971 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11958_11972 = null;
var count__11959_11973 = (0);
var i__11960_11974 = (0);
while(true){
if((i__11960_11974 < count__11959_11973)){
var f_11975 = cljs.core._nth.call(null,chunk__11958_11972,i__11960_11974);
cljs.core.println.call(null,"  ",f_11975);

var G__11976 = seq__11957_11971;
var G__11977 = chunk__11958_11972;
var G__11978 = count__11959_11973;
var G__11979 = (i__11960_11974 + (1));
seq__11957_11971 = G__11976;
chunk__11958_11972 = G__11977;
count__11959_11973 = G__11978;
i__11960_11974 = G__11979;
continue;
} else {
var temp__4425__auto___11980 = cljs.core.seq.call(null,seq__11957_11971);
if(temp__4425__auto___11980){
var seq__11957_11981__$1 = temp__4425__auto___11980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11957_11981__$1)){
var c__7652__auto___11982 = cljs.core.chunk_first.call(null,seq__11957_11981__$1);
var G__11983 = cljs.core.chunk_rest.call(null,seq__11957_11981__$1);
var G__11984 = c__7652__auto___11982;
var G__11985 = cljs.core.count.call(null,c__7652__auto___11982);
var G__11986 = (0);
seq__11957_11971 = G__11983;
chunk__11958_11972 = G__11984;
count__11959_11973 = G__11985;
i__11960_11974 = G__11986;
continue;
} else {
var f_11987 = cljs.core.first.call(null,seq__11957_11981__$1);
cljs.core.println.call(null,"  ",f_11987);

var G__11988 = cljs.core.next.call(null,seq__11957_11981__$1);
var G__11989 = null;
var G__11990 = (0);
var G__11991 = (0);
seq__11957_11971 = G__11988;
chunk__11958_11972 = G__11989;
count__11959_11973 = G__11990;
i__11960_11974 = G__11991;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_11992 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6841__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6841__auto__)){
return or__6841__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_11992);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_11992)))?cljs.core.second.call(null,arglists_11992):arglists_11992));
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
var seq__11961 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__11962 = null;
var count__11963 = (0);
var i__11964 = (0);
while(true){
if((i__11964 < count__11963)){
var vec__11965 = cljs.core._nth.call(null,chunk__11962,i__11964);
var name = cljs.core.nth.call(null,vec__11965,(0),null);
var map__11966 = cljs.core.nth.call(null,vec__11965,(1),null);
var map__11966__$1 = ((((!((map__11966 == null)))?((((map__11966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11966):map__11966);
var doc = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__11993 = seq__11961;
var G__11994 = chunk__11962;
var G__11995 = count__11963;
var G__11996 = (i__11964 + (1));
seq__11961 = G__11993;
chunk__11962 = G__11994;
count__11963 = G__11995;
i__11964 = G__11996;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__11961);
if(temp__4425__auto__){
var seq__11961__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11961__$1)){
var c__7652__auto__ = cljs.core.chunk_first.call(null,seq__11961__$1);
var G__11997 = cljs.core.chunk_rest.call(null,seq__11961__$1);
var G__11998 = c__7652__auto__;
var G__11999 = cljs.core.count.call(null,c__7652__auto__);
var G__12000 = (0);
seq__11961 = G__11997;
chunk__11962 = G__11998;
count__11963 = G__11999;
i__11964 = G__12000;
continue;
} else {
var vec__11968 = cljs.core.first.call(null,seq__11961__$1);
var name = cljs.core.nth.call(null,vec__11968,(0),null);
var map__11969 = cljs.core.nth.call(null,vec__11968,(1),null);
var map__11969__$1 = ((((!((map__11969 == null)))?((((map__11969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11969):map__11969);
var doc = cljs.core.get.call(null,map__11969__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__11969__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__12001 = cljs.core.next.call(null,seq__11961__$1);
var G__12002 = null;
var G__12003 = (0);
var G__12004 = (0);
seq__11961 = G__12001;
chunk__11962 = G__12002;
count__11963 = G__12003;
i__11964 = G__12004;
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
