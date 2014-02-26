function iif(p,a,b){return p?a:b}
function get(a,i){return a[i]}
function set(a,i,e){a[i]=e;return a}
function apply_(f,ctx,a){return f.apply(ctx,a)}
function args(f,n){
	return function(){
		return f.apply(null,[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))
	}
}
function curry(f){
	return args(function(a){
		return args(function(b){
			return f.apply(null,a.concat(b))
		},0)
	},0)
}
function for_(f,n,p,a){while(p(n,a))a=f(a,n++);return a},
const C=curry(args(function(f,a,b,rest){return f.apply(null,[b].concat([a],rest))},3)),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
B=curry(args(function(f,g,a){return f(g.apply(null,a))},2)),
//fpow=curry(function(f,n,a){for(;n;n--)a=f(a,n);return a}),
call_=curry(args(apply_,2)),
partial=uncurry1(curry),
curry2nd=B(curry,C),
bind2nd=uncurry1(curry2nd),
op1=B(partial(Function,"a"),bind2nd(call_("".concat,"return "),"a")),
op2=B(partial(Function,"a,b"),bind2nd(call_("".concat,"return a"),"b")),
fpow=bind2nd(bind2nd(for_,0),curry(op2("!="))),
op={},
id=op1(""),
constant=curry(id),
//fillArr=B(fpow,curry3rd(set)),
justapp=bind2nd(apply_,null),
cloneArg=B(curry2nd(justapp),fillArr),
W,
reverseArg=args(B(curry2nd(justapp),call_([].reverse)),0),
pass=args(B(curry2nd(justapp),bind2nd(call_([].slice),0)),0),
defaultArg,
pam=B(curry2nd(call_([].map)),curry2nd(justapp)),
itrate,
hook,
fork,
train,
uncurryAll=args(bind2nd(call_([].reduce),uncurry1),0),
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
copy,
memoize
