function get(a,i){return a[i]}
function args(f){return function(){return f.apply(null,[].slice.call(arguments,0,f.length),[[].slice.call(arguments,f.length))]}}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function curry(f){return args(function(a){return args(function(b){return f.apply(null,a,b)}))}}
function iif(p,a,b){return p?a:b}
function eq(a,b){return a==b}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
const flip=curry(args(function(f,a,b,arr){return f.apply(null,[b],[a],arr)})),
ctxToArg=curry(args(function(f,ctx,a){return f.apply(ctx,a)})),
constant=curry(function(a){return a}),
uncurry1=curry(function(f,a,b){return f(a)(b)}),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))})),
hook=,
fork=compose(),
train,
flipCurry=compose(curry,flip),
uncurryAll=compose(flipCurry(ctxToArg([].reduce)),uncurry1),
partial=uncurry1(curry),
id=constant(),
fpow=compose(reduce_(compose),fillArr),
inc=partial(add,1),
dec=partial(add,-1),
mapObj=compose(flipCurry(ctxToArg([].map))(),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge=,
zip,
zipWith,
repeatdCombi
