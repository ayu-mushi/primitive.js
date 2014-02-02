function iif(p,a,b){return p?a:b}
function eq(a,b){return a===b}
function neq(a,b){return a!==b}
function not(p){return !p}
function and(p,q){return p&&q}
function or(p,q){return p||q}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
function lt(x,y){return x<y}
function gt(x,y){return x>y}
function lte(x,y){return x<=y}
function gte(x,y){return x>=y}
function get(a,i){return a[i]}
function set(a,i,e){a[i]=e;return a}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function id(a){return a}
function apply_(f,ctx,a){return f.apply(ctx,a)}
function args(f,n){return function(){return f.apply(null,[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))}}
function curry(f){return args(function(a){return args(function(b){return f.apply(null,a.concat(b))},0)},0)}
const flip=curry(args(function(f,a,b,rest){return f.apply(null,[b].concat([a],rest))},3)),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))},2)),
call_=curry(args(apply_,2)),
constant=curry(id),
partial=uncurry1(curry),
curry2nd=compose(curry,flip),
bind2nd=uncurry1(curry2nd),
justapp=uncurry1(bind2nd(call_,null)),
wCombir=compose(curry2nd(apply_),fillArr),
pass=compose(curry2nd(justapp),bind2nd(call_([].slice),0)),
pam=compose(curry2nd(call_([].map)),curry2nd(justapp)),
itrate,
hook,
fork,
train,
uncurryAll=args(bind2nd(call_([].reduce),uncurry1),0),
compose2nary,
fpow=compose(bind2nd(call_([].reduce),compose),fillArr),
curryN=partial(fpow,curry),
inc=partial(add,1),
dec=partial(add,-1),
len=bind2nd(get,"length"),
mapObj=compose(curry2nd(call_([].map))(),{}.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=bind2nd(get,0),
last,
tail,
init,
zip,
zipWith,
repeatdCombi
