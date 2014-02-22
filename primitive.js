function iif(p,a,b){return p?a:b}
function eq(a,b){return a===b}
function neq(a,b){return a!==b}
function not(p){return !p}
function and(p,q){return p&&q}
function or(p,q){return p||q}
function neg(n){return -n}
function add(n,m){return n+m}
function sub(n,m){return n-m}
function mul(n,m){return n*m}
function div(n,m){return n/m}
function mod(n,m){return n%m}
function lt(n,m){return n<m}
function gt(n,m){return n>m}
function le(n,m){return n<=m}
function ge(n,m){return n>=m}
function get(a,i){return a[i]}
function set(a,i,e){a[i]=e;return a}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function id(a){return a}
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
const flip=curry(args(function(f,a,b,rest){return f.apply(null,[b].concat([a],rest))},3)),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))},2)),
fpow=curry(args(function(f,n,a){for(;n+1;n--)a=f(a,n);return a},2)),
call_=curry(args(apply_,2)),
constant=curry(id),
partial=uncurry1(curry),
curry2nd=compose(curry,flip),
bind2nd=uncurry1(curry2nd),
justapp=bind2nd(apply_,null),
wcate=compose(curry2nd(justapp),fillArr),
pass=compose(curry2nd(justapp),bind2nd(call_([].slice),0)),
pam=compose(curry2nd(call_([].map)),curry2nd(justapp)),
itrate,
hook,
fork,
train,
uncurry=args(bind2nd(call_([].reduce),uncurry1),0),
//fpow=compose(bind2nd(call_([].reduce),pass(compose,2)),fillArr),
inc=partial(add,1),
dec=partial(add,-1),
len=bind2nd(get,"length"),
//mapObj=compose(curry2nd(call_([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=bind2nd(get,0),
last,
tail=bind2nd(call_([].slice),1),
init=bind2nd(call_([].slice),-1),
zip,
zipWith,
repeatdCombi,
clone,
defaultArg
