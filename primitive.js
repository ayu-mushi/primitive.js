function iif(p,a,b){return p?a:b}
function eq(a,b){return a===b}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
function get(a,i){return a[i]}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function id(a){return a}
function args(f,n){return function(){return f.apply(null,[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))}}
function curry(f){return args(function(a){return args(function(b){return f.apply(null,a.concat(b))},0)},0)}
const call_=curry(args(function(f,ctx,a){return f.apply(ctx,a)},2)),
flip=curry(args(function(f,a,b,rest){return f.apply(null,[b].concat([a],rest))},3)),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))},2)),
constant=curry(id),
partial=uncurry1(curry),
curry2nd=compose(curry,flip),
bind2nd=uncurry1(curry2nd),
justapp=bind2nd(call_,null),
wCombir=compose(curry(call_),fillArr),
pass=compose(curry(call_),bind2nd(call_([].slice),0)),
pam=compose(curry2nd(call_([].map)),curry2nd(justapp)),
itrate,
hook,
fork,
train,
uncurryAll=bind2nd(call_([].reduce),uncurry1),
compose2nary=compose(uncurry1,uncurry1(compose(curry(compose),curry))),
fpow=compose(bind2nd(call_([].reduce),compose),fillArr),
curryN=partial(fpow,curry),
inc=partial(add,1),
dec=partial(add,-1),
mapObj=compose(curry2nd(call_([].map))(),{}.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=bind2nd(get,0),
last=call_([].slice),
tail,
init,
zip,
zipWith,
repeatdCombi
