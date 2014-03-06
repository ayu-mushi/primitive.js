function iif(p,a,b){return p?a:b}
function get(a,i){return a[i]}
function set(a,i,e){a[i]=e;return a}
function apply_(f,ctx,a){return f.apply(ctx,a)}
function addReturn(f,a){f(a);return a}
function args(f,n){
	return function(){
		return f.apply(null,[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))
	}
}
function curry(f){
	return args(function(a){
		return Function.prototype.bind.apply(f,[null].concat(a))
	},0)
}
function for_(f,n,p,a){while(p(n,a))a=f(a,n++);return a}
var C=curry(args(function(f,a,b,rest){return f.apply(null,[b].concat([a],rest))},3)),
B=curry(args(function(f,g,a){return f(g.apply(null,a))},2)),
//fpow=curry(function(f,n,a){for(;n;n--)a=f(a,n);return a}),
call_=curry(args(apply_,2)),
partial=uncurry1(curry),
wrap=curry,
curry2nd=B(curry,C),
bind2nd=uncurry1(curry2nd),
op1=B(partial(Function,"a"),bind2nd(call_("".concat,"return "),"a")),
op2=B(partial(Function,"a,b"),bind2nd(call_("".concat,"return a"),"b")),
fpow=B(curry2nd(bind2nd(for_,0)),curry(op2("!="))),
op={},
id=op1(""),
constant=wrap(id),
//fillArr=B(fpow,curry3rd(set)),
justapp=bind2nd(apply_,null),
fillArg=B(curry2nd(justapp),fillArr),
W,
Bmul=B(curry(B),curry),
B1st,
B2nd,
reverseArg=args(B(curry2nd(justapp),call_([].reverse)),0),
pass=args(B(curry2nd(justapp),bind2nd(call_([].slice),0)),0),
defaultArg,
pam=B(curry2nd(call_([].map)),curry2nd(justapp)),
itrate,
hook,
fork,
train,
uncurry=curry(args(flip(call_([].reduce)),1)),
inc=partial(op2("+"),1),
dec=partial(op2("+"),-1),
len=bind2nd(get,"length"),
//mapObj=B(curry2nd(call_([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=bind2nd(get,0),
last,//reverse
tail=bind2nd(call_([].slice),1),
init=bind2nd(call_([].slice),-1),
zip,
zipWith,
repeatdCombi,
clone,
memoize
