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
var seq__9770_9784 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9771_9785 = null;
var count__9772_9786 = (0);
var i__9773_9787 = (0);
while(true){
if((i__9773_9787 < count__9772_9786)){
var f_9788 = cljs.core._nth.call(null,chunk__9771_9785,i__9773_9787);
cljs.core.println.call(null,"  ",f_9788);

var G__9789 = seq__9770_9784;
var G__9790 = chunk__9771_9785;
var G__9791 = count__9772_9786;
var G__9792 = (i__9773_9787 + (1));
seq__9770_9784 = G__9789;
chunk__9771_9785 = G__9790;
count__9772_9786 = G__9791;
i__9773_9787 = G__9792;
continue;
} else {
var temp__4425__auto___9793 = cljs.core.seq.call(null,seq__9770_9784);
if(temp__4425__auto___9793){
var seq__9770_9794__$1 = temp__4425__auto___9793;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9770_9794__$1)){
var c__7555__auto___9795 = cljs.core.chunk_first.call(null,seq__9770_9794__$1);
var G__9796 = cljs.core.chunk_rest.call(null,seq__9770_9794__$1);
var G__9797 = c__7555__auto___9795;
var G__9798 = cljs.core.count.call(null,c__7555__auto___9795);
var G__9799 = (0);
seq__9770_9784 = G__9796;
chunk__9771_9785 = G__9797;
count__9772_9786 = G__9798;
i__9773_9787 = G__9799;
continue;
} else {
var f_9800 = cljs.core.first.call(null,seq__9770_9794__$1);
cljs.core.println.call(null,"  ",f_9800);

var G__9801 = cljs.core.next.call(null,seq__9770_9794__$1);
var G__9802 = null;
var G__9803 = (0);
var G__9804 = (0);
seq__9770_9784 = G__9801;
chunk__9771_9785 = G__9802;
count__9772_9786 = G__9803;
i__9773_9787 = G__9804;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_9805 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__6744__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__6744__auto__)){
return or__6744__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_9805);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_9805)))?cljs.core.second.call(null,arglists_9805):arglists_9805));
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
var seq__9774 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__9775 = null;
var count__9776 = (0);
var i__9777 = (0);
while(true){
if((i__9777 < count__9776)){
var vec__9778 = cljs.core._nth.call(null,chunk__9775,i__9777);
var name = cljs.core.nth.call(null,vec__9778,(0),null);
var map__9779 = cljs.core.nth.call(null,vec__9778,(1),null);
var map__9779__$1 = ((((!((map__9779 == null)))?((((map__9779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9779):map__9779);
var doc = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9779__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9806 = seq__9774;
var G__9807 = chunk__9775;
var G__9808 = count__9776;
var G__9809 = (i__9777 + (1));
seq__9774 = G__9806;
chunk__9775 = G__9807;
count__9776 = G__9808;
i__9777 = G__9809;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9774);
if(temp__4425__auto__){
var seq__9774__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9774__$1)){
var c__7555__auto__ = cljs.core.chunk_first.call(null,seq__9774__$1);
var G__9810 = cljs.core.chunk_rest.call(null,seq__9774__$1);
var G__9811 = c__7555__auto__;
var G__9812 = cljs.core.count.call(null,c__7555__auto__);
var G__9813 = (0);
seq__9774 = G__9810;
chunk__9775 = G__9811;
count__9776 = G__9812;
i__9777 = G__9813;
continue;
} else {
var vec__9781 = cljs.core.first.call(null,seq__9774__$1);
var name = cljs.core.nth.call(null,vec__9781,(0),null);
var map__9782 = cljs.core.nth.call(null,vec__9781,(1),null);
var map__9782__$1 = ((((!((map__9782 == null)))?((((map__9782.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9782.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9782):map__9782);
var doc = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__9782__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__9814 = cljs.core.next.call(null,seq__9774__$1);
var G__9815 = null;
var G__9816 = (0);
var G__9817 = (0);
seq__9774 = G__9814;
chunk__9775 = G__9815;
count__9776 = G__9816;
i__9777 = G__9817;
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