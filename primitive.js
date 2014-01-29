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
function args(f){return function(){return f.apply(null,[].slice.call(arguments,0,f.length),[[].slice.call(arguments,f.length)])}}
function curry(f){return args(function(a){return args(function(b){return f.apply(null,a,b)})})}
const appctx=curry(args(function(f,ctx,a){return f.apply(ctx,a)})),
flip=curry(args(function(f,a,b,rest){return f.apply(null,[b],[a],rest)})),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))})),
constant=curry(id),
partial=uncurry1(curry),
curry2nd=compose(curry,flip),
bind2nd=uncurry1(curry2nd),
apply_=bind2nd(appctx,null),
wCombir=compose(curry(appctx),fillArr),
map_=curry2nd(appctx([].map)),
reduce_=curry2nd(appctx([].reduce)),
pam=compose(map_,curry2nd(apply_)),
itrate,
hook,
fork,
train,
uncurryAll=reduce_(uncurry1),
fpow=compose(reduce_(compose),fillArr),
curryN=partial(fpow,curry),
inc=partial(add,1),
dec=partial(add,-1),
mapObj=compose(map_(),{}.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=bind2nd(get,0),
last=appctx([].slice),
tail,
init,
zip,
zipWith,
repeatdCombi
