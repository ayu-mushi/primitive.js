function iif(p,a,b){return p?a:b}
function eq(a,b){return a==b}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
function get(a,i){return a[i]}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function id(a){return a}
function args(f){return function(){return f.apply(null,[].slice.call(arguments,0,f.length),[[].slice.call(arguments,f.length)])}}
function curry(f){return args(function(a){return args(function(b){return f.apply(null,a,b)})})}
const apply_ctx=curry(args(function(f,ctx,a){return f.apply(ctx,a)})),
flip=curry(args(function(f,a,b,rest){return f.apply(null,[b],[a],rest)})),
constant=curry(id),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))})),
partial=uncurry1(curry),
flipCurry=compose(curry,flip),
flippar=uncurry1(flipCurry),
apply_=flippar(apply_ctx,null),
wCombir=compose(curry(apply_ctx),fillArr),
apply_ctxdMap=apply_ctx([].map),
apply_ctxdReduce=apply_ctx([].reduce),
pam=compose(flipCurry(apply_ctxdMap),flipCurry(apply_)),
itrate=pam,
hook,
fork=compose(),
train,
uncurryAll=compose(flipCurry(curry([].reduce)),uncurry1),
fpow=compose(flipCurry([].reduce)(compose),fillArr),
curryN=partial(fpow,curry),
inc=partial(add,1),
dec=partial(add,-1),
mapObj=compose(flipCurry(curry([].map))(),{}.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=flippar(get,0),
last=ctx(ctx([].slice)),
tail,
init,
zip,
zipWith,
repeatdCombi
