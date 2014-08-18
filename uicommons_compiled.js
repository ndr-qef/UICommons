if(!lt.util.load.provided_QMARK_('lt.plugins.uicommons.utilia')) {
goog.provide('lt.plugins.uicommons.utilia');
goog.require('cljs.core');
goog.require('crate.core');
goog.require('crate.core');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.object');
goog.require('lt.object');
/**
* @param {...*} var_args
*/
lt.plugins.uicommons.utilia.deep_merge = (function() { 
var deep_merge__delegate = function (xs){var ms = cljs.core.map.call(null,(function (p1__10626_SHARP_){var or__8666__auto__ = p1__10626_SHARP_;if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
}),xs);return cljs.core.apply.call(null,((function (ms){
return (function() { 
var f__delegate = function (ys){if(cljs.core.every_QMARK_.call(null,cljs.core.map_QMARK_,ys))
{return cljs.core.apply.call(null,cljs.core.merge_with,f,ys);
} else
{return cljs.core.last.call(null,ys);
}
};
var f = function (var_args){
var ys = null;if (arguments.length > 0) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return f__delegate.call(this,ys);};
f.cljs$lang$maxFixedArity = 0;
f.cljs$lang$applyTo = (function (arglist__10632){
var ys = cljs.core.seq(arglist__10632);
return f__delegate(ys);
});
f.cljs$core$IFn$_invoke$arity$variadic = f__delegate;
return f;
})()
;})(ms))
,ms);
};
var deep_merge = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return deep_merge__delegate.call(this,xs);};
deep_merge.cljs$lang$maxFixedArity = 0;
deep_merge.cljs$lang$applyTo = (function (arglist__10633){
var xs = cljs.core.seq(arglist__10633);
return deep_merge__delegate(xs);
});
deep_merge.cljs$core$IFn$_invoke$arity$variadic = deep_merge__delegate;
return deep_merge;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.uicommons.utilia.deep_merge_BANG_ = (function() { 
var deep_merge_BANG___delegate = function (obj,xs){return cljs.core.swap_BANG_.call(null,obj,lt.plugins.uicommons.utilia.deep_merge,xs);
};
var deep_merge_BANG_ = function (obj,var_args){
var xs = null;if (arguments.length > 1) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return deep_merge_BANG___delegate.call(this,obj,xs);};
deep_merge_BANG_.cljs$lang$maxFixedArity = 1;
deep_merge_BANG_.cljs$lang$applyTo = (function (arglist__10634){
var obj = cljs.core.first(arglist__10634);
var xs = cljs.core.rest(arglist__10634);
return deep_merge_BANG___delegate(obj,xs);
});
deep_merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = deep_merge_BANG___delegate;
return deep_merge_BANG_;
})()
;
lt.plugins.uicommons.utilia.atom_QMARK_ = (function atom_QMARK_(x){var G__10628 = x;if(G__10628)
{var bit__9316__auto__ = (G__10628.cljs$lang$protocol_mask$partition0$ & 32768);if((bit__9316__auto__) || (G__10628.cljs$core$IDeref$))
{return true;
} else
{if((!G__10628.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__10628);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,G__10628);
}
});
lt.plugins.uicommons.utilia.__GT_content = (function __GT_content(x){if(lt.plugins.uicommons.utilia.atom_QMARK_.call(null,x))
{return lt.object.__GT_content.call(null,x);
} else
{return x;
}
});
lt.plugins.uicommons.utilia.merge_content = (function merge_content(obj,content){return lt.object.merge_BANG_.call(null,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"content","content",1965434859),((cljs.core.vector_QMARK_.call(null,content))?crate.core.html.call(null,content):content)], null));
});
/**
* @param {...*} var_args
*/
lt.plugins.uicommons.utilia.re_template = (function() { 
var re_template__delegate = function (obj,template,p__10629){var vec__10631 = p__10629;var opts = cljs.core.nth.call(null,vec__10631,0,null);var new_content = crate.core.html.call(null,template,obj);return lt.plugins.uicommons.utilia.merge_content.call(null,obj,new_content);
};
var re_template = function (obj,template,var_args){
var p__10629 = null;if (arguments.length > 2) {
  p__10629 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return re_template__delegate.call(this,obj,template,p__10629);};
re_template.cljs$lang$maxFixedArity = 2;
re_template.cljs$lang$applyTo = (function (arglist__10635){
var obj = cljs.core.first(arglist__10635);
arglist__10635 = cljs.core.next(arglist__10635);
var template = cljs.core.first(arglist__10635);
var p__10629 = cljs.core.rest(arglist__10635);
return re_template__delegate(obj,template,p__10629);
});
re_template.cljs$core$IFn$_invoke$arity$variadic = re_template__delegate;
return re_template;
})()
;
lt.plugins.uicommons.utilia.append_obj = (function append_obj(parent,child){return lt.util.dom.append.call(null,lt.plugins.uicommons.utilia.__GT_content.call(null,parent),lt.plugins.uicommons.utilia.__GT_content.call(null,child));
});
/**
* @param {...*} var_args
*/
lt.plugins.uicommons.utilia.cssel = (function() { 
var cssel__delegate = function (xs){return cljs.core.keyword.call(null,cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,cljs.core.name,xs)));
};
var cssel = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return cssel__delegate.call(this,xs);};
cssel.cljs$lang$maxFixedArity = 0;
cssel.cljs$lang$applyTo = (function (arglist__10636){
var xs = cljs.core.seq(arglist__10636);
return cssel__delegate(xs);
});
cssel.cljs$core$IFn$_invoke$arity$variadic = cssel__delegate;
return cssel;
})()
;
/**
* @param {...*} var_args
*/
lt.plugins.uicommons.utilia.__GT_class_str = (function() { 
var __GT_class_str__delegate = function (strings){return cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null," ",cljs.core.filter.call(null,cljs.core.identity,cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,strings))));
};
var __GT_class_str = function (var_args){
var strings = null;if (arguments.length > 0) {
  strings = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return __GT_class_str__delegate.call(this,strings);};
__GT_class_str.cljs$lang$maxFixedArity = 0;
__GT_class_str.cljs$lang$applyTo = (function (arglist__10637){
var strings = cljs.core.seq(arglist__10637);
return __GT_class_str__delegate(strings);
});
__GT_class_str.cljs$core$IFn$_invoke$arity$variadic = __GT_class_str__delegate;
return __GT_class_str;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.uicommons.selector')) {
goog.provide('lt.plugins.uicommons.selector');
goog.require('cljs.core');
goog.require('lt.plugins.uicommons.utilia');
goog.require('lt.plugins.uicommons.utilia');
goog.require('lt.plugins.uicommons.utilia');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.sidebar.command');
goog.require('lt.objs.sidebar.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.uicommons.selector.raise_selection = (function raise_selection(this$,item,event){lt.util.dom.prevent.call(null,event);
lt.util.dom.stop_propagation.call(null,event);
lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"set-selection!","set-selection!",4610208210),item);
return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"select!","select!",2992004631),item);
});
lt.plugins.uicommons.selector.__GT_list_node = (function __GT_list_node(this$,itemize,size){var iter__9383__auto__ = (function iter__10539(s__10540){return (new cljs.core.LazySeq(null,(function (){var s__10540__$1 = s__10540;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10540__$1);if(temp__4092__auto__)
{var s__10540__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10540__$2))
{var c__9381__auto__ = cljs.core.chunk_first.call(null,s__10540__$2);var size__9382__auto__ = cljs.core.count.call(null,c__9381__auto__);var b__10542 = cljs.core.chunk_buffer.call(null,size__9382__auto__);if((function (){var i__10541 = 0;while(true){
if((i__10541 < size__9382__auto__))
{var x = cljs.core._nth.call(null,c__9381__auto__,i__10541);cljs.core.chunk_append.call(null,b__10542,itemize.call(null,this$,x));
{
var G__10587 = (i__10541 + 1);
i__10541 = G__10587;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),iter__10539.call(null,cljs.core.chunk_rest.call(null,s__10540__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10542),null);
}
} else
{var x = cljs.core.first.call(null,s__10540__$2);return cljs.core.cons.call(null,itemize.call(null,this$,x),iter__10539.call(null,cljs.core.rest.call(null,s__10540__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9383__auto__.call(null,cljs.core.range.call(null,size));
});
lt.plugins.uicommons.selector.default_template = (function default_template(this$,p__10543){var map__10545 = p__10543;var map__10545__$1 = ((cljs.core.seq_QMARK_.call(null,map__10545))?cljs.core.apply.call(null,cljs.core.hash_map,map__10545):map__10545);var list_node = cljs.core.get.call(null,map__10545__$1,new cljs.core.Keyword("lt.plugins.uicommons.selector","list-node","lt.plugins.uicommons.selector/list-node",2321625889));var templates = cljs.core.get.call(null,map__10545__$1,new cljs.core.Keyword(null,"templates","templates",2995631787));var size = cljs.core.get.call(null,map__10545__$1,new cljs.core.Keyword(null,"size","size",1017434995));var input = new cljs.core.Keyword(null,"input","input",1114262332).cljs$core$IFn$_invoke$arity$1(templates);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-list.uicommons_selector.empty","div.filter-list.uicommons_selector.empty",4699760051),input.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),list_node], null)], null);
});
lt.plugins.uicommons.selector.defaults = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1017434995),100,new cljs.core.Keyword(null,"templates","templates",2995631787),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selector","selector",2205476689),lt.plugins.uicommons.selector.default_template,new cljs.core.Keyword(null,"input","input",1114262332),lt.objs.sidebar.command.input,new cljs.core.Keyword(null,"item","item",1017147013),lt.objs.sidebar.command.item], null)], null);
lt.plugins.uicommons.selector.init_flist = (function init_flist(this$,p__10546){var map__10548 = p__10546;var map__10548__$1 = ((cljs.core.seq_QMARK_.call(null,map__10548))?cljs.core.apply.call(null,cljs.core.hash_map,map__10548):map__10548);var opts = map__10548__$1;var templates = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"templates","templates",2995631787));var size = cljs.core.get.call(null,map__10548__$1,new cljs.core.Keyword(null,"size","size",1017434995));var template = new cljs.core.Keyword(null,"selector","selector",2205476689).cljs$core$IFn$_invoke$arity$1(templates);var item = new cljs.core.Keyword(null,"item","item",1017147013).cljs$core$IFn$_invoke$arity$1(templates);var list_node = lt.plugins.uicommons.selector.__GT_list_node.call(null,this$,item,size);lt.object.merge_BANG_.call(null,this$,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"lis","lis",1014011400),cljs.core.vec.call(null,list_node)], null),opts));
return template.call(null,this$,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.uicommons.selector","list-node","lt.plugins.uicommons.selector/list-node",2321625889),list_node], null)));
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.selector","selector","lt.plugins.uicommons.selector/selector",2954910007),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uicommons.selector","uicommons.selector",4498854187),null,new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null], null), null),new cljs.core.Keyword(null,"selected","selected",2205476365),0,new cljs.core.Keyword(null,"items","items",1114430258),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"placeholder","placeholder",1612151013),"search",new cljs.core.Keyword(null,"search","search",4402534682),"",new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,opts){return lt.plugins.uicommons.selector.init_flist.call(null,this$,lt.plugins.uicommons.utilia.deep_merge.call(null,lt.plugins.uicommons.selector.defaults,opts));
}));
lt.plugins.uicommons.selector.selector = (function selector(opts){var sel = lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.uicommons.selector","selector","lt.plugins.uicommons.selector/selector",2954910007),opts);var refresh_BANG_ = (function (){var or__8666__auto__ = new cljs.core.Keyword(null,"refresh-trigger","refresh-trigger",2355278904).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__8666__auto__))
{return or__8666__auto__;
} else
{return new cljs.core.Keyword(null,"refresh!","refresh!",4597922840);
}
})();var G__10550 = sel;lt.object.refresh_BANG_.call(null,G__10550);
lt.object.raise.call(null,G__10550,refresh_BANG_);
return G__10550;
});
lt.plugins.uicommons.selector.extended_selector = (function extended_selector(opts,ext_tags){return lt.plugins.uicommons.selector.selector.call(null,cljs.core.assoc_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1017456523)], null),cljs.core.apply.call(null,cljs.core.conj,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uicommons.selector","uicommons.selector",4498854187),null,new cljs.core.Keyword(null,"filter-list","filter-list",4372522309),null], null), null),ext_tags)));
});
lt.plugins.uicommons.selector.exec_selector = (function exec_selector(opts){return lt.plugins.uicommons.selector.extended_selector.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uicommons.selector.exec","uicommons.selector.exec",984183576)], null));
});
lt.plugins.uicommons.selector.__BEH__exec_selected_BANG_ = (function __BEH__exec_selected_BANG_(this$,item){return lt.objs.sidebar.command.exec_active_BANG_.call(null,item);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.selector","exec-selected!","lt.plugins.uicommons.selector/exec-selected!",3978133612),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.selector.__BEH__exec_selected_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"select","select",4402849902),null], null), null));
lt.plugins.uicommons.selector.order_comparison = (function order_comparison(x,y){var x_priority = new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(x);var y_priority = new cljs.core.Keyword(null,"order","order",1119910592).cljs$core$IFn$_invoke$arity$1(y);var comparison = cljs.core.compare.call(null,x_priority,y_priority);if(!((comparison === 0)))
{return comparison;
} else
{return cljs.core.compare.call(null,x,y);
}
});
lt.plugins.uicommons.selector.css_mode_prefix = "uicommons_selector-search-by-";
lt.plugins.uicommons.selector.mode_button = (function mode_button(this$,mode){var e__10063__auto__ = crate.core.html.call(null,(function (){var default_QMARK_ = new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(mode);var button_text = new cljs.core.Keyword(null,"button-text","button-text",3503284826).cljs$core$IFn$_invoke$arity$1(mode);var id = new cljs.core.Keyword("lt.plugins.uicommons.selector","id","lt.plugins.uicommons.selector/id",4146752987).cljs$core$IFn$_invoke$arity$1(mode);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",1013907597),id,new cljs.core.Keyword(null,"class","class",1108647146),lt.plugins.uicommons.utilia.__GT_class_str.call(null,"button","mode-selector",(cljs.core.truth_(default_QMARK_)?"active-mode":null))], null),button_text], null);
})());var seq__10557_10588 = cljs.core.seq.call(null,cljs.core.partition.call(null,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"click","click",1108654330),((function (e__10063__auto__){
return (function (){return lt.object.raise.call(null,this$,new cljs.core.Keyword(null,"search-by","search-by",2792063502),mode);
});})(e__10063__auto__))
], null)));var chunk__10558_10589 = null;var count__10559_10590 = 0;var i__10560_10591 = 0;while(true){
if((i__10560_10591 < count__10559_10590))
{var vec__10561_10592 = cljs.core._nth.call(null,chunk__10558_10589,i__10560_10591);var ev__10064__auto___10593 = cljs.core.nth.call(null,vec__10561_10592,0,null);var func__10065__auto___10594 = cljs.core.nth.call(null,vec__10561_10592,1,null);lt.util.dom.on.call(null,e__10063__auto__,ev__10064__auto___10593,func__10065__auto___10594);
{
var G__10595 = seq__10557_10588;
var G__10596 = chunk__10558_10589;
var G__10597 = count__10559_10590;
var G__10598 = (i__10560_10591 + 1);
seq__10557_10588 = G__10595;
chunk__10558_10589 = G__10596;
count__10559_10590 = G__10597;
i__10560_10591 = G__10598;
continue;
}
} else
{var temp__4092__auto___10599 = cljs.core.seq.call(null,seq__10557_10588);if(temp__4092__auto___10599)
{var seq__10557_10600__$1 = temp__4092__auto___10599;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10557_10600__$1))
{var c__9414__auto___10601 = cljs.core.chunk_first.call(null,seq__10557_10600__$1);{
var G__10602 = cljs.core.chunk_rest.call(null,seq__10557_10600__$1);
var G__10603 = c__9414__auto___10601;
var G__10604 = cljs.core.count.call(null,c__9414__auto___10601);
var G__10605 = 0;
seq__10557_10588 = G__10602;
chunk__10558_10589 = G__10603;
count__10559_10590 = G__10604;
i__10560_10591 = G__10605;
continue;
}
} else
{var vec__10562_10606 = cljs.core.first.call(null,seq__10557_10600__$1);var ev__10064__auto___10607 = cljs.core.nth.call(null,vec__10562_10606,0,null);var func__10065__auto___10608 = cljs.core.nth.call(null,vec__10562_10606,1,null);lt.util.dom.on.call(null,e__10063__auto__,ev__10064__auto___10607,func__10065__auto___10608);
{
var G__10609 = cljs.core.next.call(null,seq__10557_10600__$1);
var G__10610 = null;
var G__10611 = 0;
var G__10612 = 0;
seq__10557_10588 = G__10609;
chunk__10558_10589 = G__10610;
count__10559_10590 = G__10611;
i__10560_10591 = G__10612;
continue;
}
}
} else
{}
}
break;
}
return e__10063__auto__;
});
lt.plugins.uicommons.selector.multimode_template = (function multimode_template(this$,p__10564){var map__10567 = p__10564;var map__10567__$1 = ((cljs.core.seq_QMARK_.call(null,map__10567))?cljs.core.apply.call(null,cljs.core.hash_map,map__10567):map__10567);var list_node = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword("lt.plugins.uicommons.selector","list-node","lt.plugins.uicommons.selector/list-node",2321625889));var templates = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"templates","templates",2995631787));var modes = cljs.core.get.call(null,map__10567__$1,new cljs.core.Keyword(null,"modes","modes",1117974178));var map__10568 = templates;var map__10568__$1 = ((cljs.core.seq_QMARK_.call(null,map__10568))?cljs.core.apply.call(null,cljs.core.hash_map,map__10568):map__10568);var mode_button = cljs.core.get.call(null,map__10568__$1,new cljs.core.Keyword(null,"mode-button","mode-button",1855176206));var input = cljs.core.get.call(null,map__10568__$1,new cljs.core.Keyword(null,"input","input",1114262332));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filter-list.uicommons_selector.empty","div.filter-list.uicommons_selector.empty",4699760051),input.call(null,this$),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.mode-selection","div.mode-selection",4735357009),cljs.core.map.call(null,((function (map__10568,map__10568__$1,mode_button,input,map__10567,map__10567__$1,list_node,templates,modes){
return (function (p1__10563_SHARP_){return mode_button.call(null,this$,p1__10563_SHARP_);
});})(map__10568,map__10568__$1,mode_button,input,map__10567,map__10567__$1,list_node,templates,modes))
,modes)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),list_node], null)], null);
});
lt.plugins.uicommons.selector.multimode_defaults = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"templates","templates",2995631787),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selector","selector",2205476689),lt.plugins.uicommons.selector.multimode_template,new cljs.core.Keyword(null,"mode-button","mode-button",1855176206),lt.plugins.uicommons.selector.mode_button], null)], null);
lt.plugins.uicommons.selector.complementary_modes = (function complementary_modes(selector,new_mode){var modes = new cljs.core.Keyword(null,"modes","modes",1117974178).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,selector));return cljs.core.remove.call(null,((function (modes){
return (function (p1__10569_SHARP_){return cljs.core._EQ_.call(null,new_mode,p1__10569_SHARP_);
});})(modes))
,modes);
});
lt.plugins.uicommons.selector.__GT_str_id = (function __GT_str_id(val_id){return [cljs.core.str("#"),cljs.core.str(val_id)].join('');
});
lt.plugins.uicommons.selector.emphasize_mode = (function emphasize_mode(msel,mode){var active_id = lt.plugins.uicommons.selector.__GT_str_id.call(null,new cljs.core.Keyword("lt.plugins.uicommons.selector","id","lt.plugins.uicommons.selector/id",4146752987).cljs$core$IFn$_invoke$arity$1(mode));var inactive_ids = cljs.core.map.call(null,((function (active_id){
return (function (p1__10570_SHARP_){return lt.plugins.uicommons.selector.__GT_str_id.call(null,new cljs.core.Keyword("lt.plugins.uicommons.selector","id","lt.plugins.uicommons.selector/id",4146752987).cljs$core$IFn$_invoke$arity$1(p1__10570_SHARP_));
});})(active_id))
,lt.plugins.uicommons.selector.complementary_modes.call(null,msel,mode));lt.util.dom.add_class.call(null,lt.util.dom.$.call(null,active_id),new cljs.core.Keyword(null,"active-mode","active-mode",4211164028));
var seq__10575 = cljs.core.seq.call(null,inactive_ids);var chunk__10576 = null;var count__10577 = 0;var i__10578 = 0;while(true){
if((i__10578 < count__10577))
{var id = cljs.core._nth.call(null,chunk__10576,i__10578);lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,id),new cljs.core.Keyword(null,"active-mode","active-mode",4211164028));
{
var G__10613 = seq__10575;
var G__10614 = chunk__10576;
var G__10615 = count__10577;
var G__10616 = (i__10578 + 1);
seq__10575 = G__10613;
chunk__10576 = G__10614;
count__10577 = G__10615;
i__10578 = G__10616;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__10575);if(temp__4092__auto__)
{var seq__10575__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__10575__$1))
{var c__9414__auto__ = cljs.core.chunk_first.call(null,seq__10575__$1);{
var G__10617 = cljs.core.chunk_rest.call(null,seq__10575__$1);
var G__10618 = c__9414__auto__;
var G__10619 = cljs.core.count.call(null,c__9414__auto__);
var G__10620 = 0;
seq__10575 = G__10617;
chunk__10576 = G__10618;
count__10577 = G__10619;
i__10578 = G__10620;
continue;
}
} else
{var id = cljs.core.first.call(null,seq__10575__$1);lt.util.dom.remove_class.call(null,lt.util.dom.$.call(null,id),new cljs.core.Keyword(null,"active-mode","active-mode",4211164028));
{
var G__10621 = cljs.core.next.call(null,seq__10575__$1);
var G__10622 = null;
var G__10623 = 0;
var G__10624 = 0;
seq__10575 = G__10621;
chunk__10576 = G__10622;
count__10577 = G__10623;
i__10578 = G__10624;
continue;
}
}
} else
{return null;
}
}
break;
}
});
lt.plugins.uicommons.selector.__BEH__search_by = (function __BEH__search_by(this$,search_mode){lt.object.merge_BANG_.call(null,this$,search_mode);
return lt.plugins.uicommons.selector.emphasize_mode.call(null,this$,search_mode);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.selector","search-by","lt.plugins.uicommons.selector/search-by",3577082998),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.selector.__BEH__search_by,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"search-by","search-by",2792063502),null], null), null));
lt.plugins.uicommons.selector.add_id = (function add_id(modes){var iter__9383__auto__ = (function iter__10583(s__10584){return (new cljs.core.LazySeq(null,(function (){var s__10584__$1 = s__10584;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__10584__$1);if(temp__4092__auto__)
{var s__10584__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__10584__$2))
{var c__9381__auto__ = cljs.core.chunk_first.call(null,s__10584__$2);var size__9382__auto__ = cljs.core.count.call(null,c__9381__auto__);var b__10586 = cljs.core.chunk_buffer.call(null,size__9382__auto__);if((function (){var i__10585 = 0;while(true){
if((i__10585 < size__9382__auto__))
{var n = cljs.core._nth.call(null,c__9381__auto__,i__10585);cljs.core.chunk_append.call(null,b__10586,cljs.core.merge.call(null,cljs.core.nth.call(null,modes,n),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.uicommons.selector","id","lt.plugins.uicommons.selector/id",4146752987),[cljs.core.str(lt.plugins.uicommons.selector.css_mode_prefix),cljs.core.str(n)].join('')], null)));
{
var G__10625 = (i__10585 + 1);
i__10585 = G__10625;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10586),iter__10583.call(null,cljs.core.chunk_rest.call(null,s__10584__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10586),null);
}
} else
{var n = cljs.core.first.call(null,s__10584__$2);return cljs.core.cons.call(null,cljs.core.merge.call(null,cljs.core.nth.call(null,modes,n),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("lt.plugins.uicommons.selector","id","lt.plugins.uicommons.selector/id",4146752987),[cljs.core.str(lt.plugins.uicommons.selector.css_mode_prefix),cljs.core.str(n)].join('')], null)),iter__10583.call(null,cljs.core.rest.call(null,s__10584__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__9383__auto__.call(null,cljs.core.range.call(null,cljs.core.count.call(null,modes)));
});
lt.plugins.uicommons.selector.multimode_selector = (function multimode_selector(opts){var opts__$1 = lt.plugins.uicommons.utilia.deep_merge.call(null,lt.plugins.uicommons.selector.multimode_defaults,cljs.core.update_in.call(null,opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modes","modes",1117974178)], null),lt.plugins.uicommons.selector.add_id));return lt.plugins.uicommons.selector.extended_selector.call(null,opts__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uicommons.selector.multimode","uicommons.selector.multimode",3841530841)], null));
});
}
if(!lt.util.load.provided_QMARK_('lt.plugins.uicommons.palette')) {
goog.provide('lt.plugins.uicommons.palette');
goog.require('cljs.core');
goog.require('lt.plugins.uicommons.utilia');
goog.require('crate.binding');
goog.require('lt.plugins.uicommons.utilia');
goog.require('lt.plugins.uicommons.utilia');
goog.require('crate.binding');
goog.require('lt.util.dom');
goog.require('lt.util.dom');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.uicommons.palette.__GT_class = (function __GT_class(palette,opts){var map__10515 = palette;var map__10515__$1 = ((cljs.core.seq_QMARK_.call(null,map__10515))?cljs.core.apply.call(null,cljs.core.hash_map,map__10515):map__10515);var visible_QMARK_ = cljs.core.get.call(null,map__10515__$1,new cljs.core.Keyword(null,"visible?","visible?",2598048127));var classes = cljs.core.get.call(null,map__10515__$1,new cljs.core.Keyword(null,"classes","classes",1867525016));return cljs.core.apply.call(null,lt.plugins.uicommons.utilia.__GT_class_str,cljs.core.conj.call(null,classes,(cljs.core.truth_(visible_QMARK_)?"visible":null)));
});
lt.plugins.uicommons.palette.classes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["overlay",null,"palette auto",null,"uicommons",null], null), null);
lt.plugins.uicommons.palette.palette_template = (function palette_template(this$,obj_BAR_node,opts){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1014003715),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),crate.binding.bound.call(null,this$,(function (p1__10516_SHARP_){return lt.plugins.uicommons.palette.__GT_class.call(null,p1__10516_SHARP_,opts);
}))], null),lt.plugins.uicommons.utilia.__GT_content.call(null,obj_BAR_node)], null);
});
lt.plugins.uicommons.palette.statuses = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"collapsed","collapsed",2894087625),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",1867525016),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["collapsed",null], null), null),new cljs.core.Keyword(null,"template","template",3987324908),new cljs.core.Keyword(null,"palette","palette",4509960685)], null),new cljs.core.Keyword(null,"mini","mini",1017255881),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",1867525016),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["small",null], null), null),new cljs.core.Keyword(null,"template","template",3987324908),new cljs.core.Keyword(null,"palette","palette",4509960685)], null),new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",1867525016),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["normal",null], null), null),new cljs.core.Keyword(null,"template","template",3987324908),new cljs.core.Keyword(null,"palette","palette",4509960685)], null),new cljs.core.Keyword(null,"auto","auto",1016910113),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",1867525016),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["auto",null], null), null),new cljs.core.Keyword(null,"template","template",3987324908),new cljs.core.Keyword(null,"palette","palette",4509960685)], null)], null);
lt.plugins.uicommons.palette.defaults = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",1867525016),lt.plugins.uicommons.palette.classes,new cljs.core.Keyword(null,"templates","templates",2995631787),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"palette","palette",4509960685),lt.plugins.uicommons.palette.palette_template], null),new cljs.core.Keyword(null,"statuses","statuses",2332597138),lt.plugins.uicommons.palette.statuses], null);
lt.plugins.uicommons.palette.__BEH__show = (function __BEH__show(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible?","visible?",2598048127),true], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.palette","show","lt.plugins.uicommons.palette/show",1621943429),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.palette.__BEH__show,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show!","show!",1123317814),null], null), null));
lt.plugins.uicommons.palette.__BEH__hide = (function __BEH__hide(this$){return lt.object.merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible?","visible?",2598048127),false], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.palette","hide","lt.plugins.uicommons.palette/hide",1673649604),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.palette.__BEH__hide,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hide!","hide!",1113177745),null], null), null));
lt.plugins.uicommons.palette.__BEH__toggle = (function __BEH__toggle(this$){return lt.object.update_BANG_.call(null,this$,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2598048127)], null),cljs.core.not);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.palette","toggle","lt.plugins.uicommons.palette/toggle",2494809038),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.palette.__BEH__toggle,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"toggle!","toggle!",4161249983),null], null), null));
lt.plugins.uicommons.palette.status_BANG_ = (function status_BANG_(palette,status){var status_map = new cljs.core.Keyword(null,"statuses","statuses",2332597138).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palette));var old = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,palette)).call(null,status_map);var new$ = status.call(null,status_map);var minus = new cljs.core.Keyword(null,"classes","classes",1867525016).cljs$core$IFn$_invoke$arity$1(old);var plus = new cljs.core.Keyword(null,"classes","classes",1867525016).cljs$core$IFn$_invoke$arity$1(new$);var tpl = new cljs.core.Keyword(null,"template","template",3987324908).cljs$core$IFn$_invoke$arity$1(new$);var tpl_old = new cljs.core.Keyword(null,"template","template",3987324908).cljs$core$IFn$_invoke$arity$1(old);lt.object.merge_BANG_.call(null,palette,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"status","status",4416389988),status], null));
lt.object.update_BANG_.call(null,palette,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"classes","classes",1867525016)], null),((function (status_map,old,new$,minus,plus,tpl,tpl_old){
return (function (p1__10517_SHARP_){return cljs.core.apply.call(null,cljs.core.conj,cljs.core.apply.call(null,cljs.core.disj,p1__10517_SHARP_,minus),plus);
});})(status_map,old,new$,minus,plus,tpl,tpl_old))
);
if(cljs.core.keyword_identical_QMARK_.call(null,tpl,tpl_old))
{return null;
} else
{return lt.plugins.uicommons.utilia.re_template.call(null,palette,tpl);
}
});
lt.plugins.uicommons.palette.__BEH__status_BANG_ = (function __BEH__status_BANG_(this$,status_key){return lt.plugins.uicommons.palette.status_BANG_.call(null,this$,status_key);
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.palette","status!","lt.plugins.uicommons.palette/status!",3540406583),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.palette.__BEH__status_BANG_,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"set-status!","set-status!",2158509942),null], null), null));
lt.plugins.uicommons.palette.init_palette = (function init_palette(this$,content,p__10518){var map__10520 = p__10518;var map__10520__$1 = ((cljs.core.seq_QMARK_.call(null,map__10520))?cljs.core.apply.call(null,cljs.core.hash_map,map__10520):map__10520);var opts = map__10520__$1;var templates = cljs.core.get.call(null,map__10520__$1,new cljs.core.Keyword(null,"templates","templates",2995631787));var template = new cljs.core.Keyword(null,"palette","palette",4509960685).cljs$core$IFn$_invoke$arity$1(templates);return template.call(null,this$,content,opts);
});
lt.object.object_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons.palette","palette","lt.plugins.uicommons.palette/palette",2425432363),new cljs.core.Keyword(null,"tags","tags",1017456523),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uicommons.palette","uicommons.palette",3198467283),null], null), null),new cljs.core.Keyword(null,"visible?","visible?",2598048127),false,new cljs.core.Keyword(null,"minifiers","minifiers",1826000702),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"status","status",4416389988),new cljs.core.Keyword(null,"normal","normal",4269125721),new cljs.core.Keyword(null,"defaults","defaults",1658185156),lt.plugins.uicommons.palette.defaults,new cljs.core.Keyword(null,"init","init",1017141378),(function (this$,content,opts){var opts__$1 = lt.plugins.uicommons.utilia.deep_merge.call(null,lt.plugins.uicommons.palette.defaults,opts);lt.object.merge_BANG_.call(null,this$,opts__$1);
return lt.plugins.uicommons.palette.init_palette.call(null,this$,content,opts__$1);
}));
/**
* @param {...*} var_args
*/
lt.plugins.uicommons.palette.palette = (function() { 
var palette__delegate = function (content,p__10521){var vec__10523 = p__10521;var opts = cljs.core.nth.call(null,vec__10523,0,null);return lt.object.create.call(null,new cljs.core.Keyword("lt.plugins.uicommons.palette","palette","lt.plugins.uicommons.palette/palette",2425432363),content,opts);
};
var palette = function (content,var_args){
var p__10521 = null;if (arguments.length > 1) {
  p__10521 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return palette__delegate.call(this,content,p__10521);};
palette.cljs$lang$maxFixedArity = 1;
palette.cljs$lang$applyTo = (function (arglist__10534){
var content = cljs.core.first(arglist__10534);
var p__10521 = cljs.core.rest(arglist__10534);
return palette__delegate(content,p__10521);
});
palette.cljs$core$IFn$_invoke$arity$variadic = palette__delegate;
return palette;
})()
;
}
if(!lt.util.load.provided_QMARK_('lt.plugins.uicommons')) {
goog.provide('lt.plugins.uicommons');
goog.require('cljs.core');
goog.require('lt.plugins.uicommons.utilia');
goog.require('lt.plugins.uicommons.utilia');
goog.require('lt.plugins.uicommons.selector');
goog.require('lt.plugins.uicommons.selector');
goog.require('lt.objs.command');
goog.require('lt.objs.command');
goog.require('lt.object');
goog.require('lt.object');
lt.plugins.uicommons.__BEH__overrule_defaults_BANG_ = (function __BEH__overrule_defaults_BANG_(this$,defaults){return lt.plugins.uicommons.utilia.deep_merge_BANG_.call(null,this$,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"defaults","defaults",1658185156),defaults], null));
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.uicommons","overrule-defaults!","lt.plugins.uicommons/overrule-defaults!",2494806700),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.uicommons.__BEH__overrule_defaults_BANG_,new cljs.core.Keyword(null,"type","type",1017479852),new cljs.core.Keyword(null,"user","user",1017503549),new cljs.core.Keyword(null,"trigger","trigger",4248979754),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"object.instant","object.instant",773332388),new cljs.core.Keyword(null,"overrule-defaults!","overrule-defaults!",3547362244)], null));
}
if(!lt.util.load.provided_QMARK_('')) {
}

//# sourceMappingURL=uicommons_compiled.js.map