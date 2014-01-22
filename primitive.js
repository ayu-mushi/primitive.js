function getElm(a,i){return a[i]}
function args(f){return function(){return f.apply(null,[].slice.call(arguments,0,f.length),[[].slice.call(arguments,f.length))]}}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function curry(f){return args(function(a){return args(function(b){return f.apply(null,a,b)}))}}
function id(a){return a}
function iif(p,a,b){return p?a:b}
function eq(a,b){return a==b}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
const flip=curry(args(function(f,a,b,arr){return f.apply(null,[b],[a],arr)})),
ctxToArg=curry(args(function(f,ctx,args){return f.apply(ctx,args)})),
constant=curry(function(a){return a},
uncurry1=curry(function(f,a,b){return f(a)(b)}),
reduce_=curry(flip(pushCtx([].reduce))),
uncurryAll=compose(reduce_,uncurry1),
compose=curry(args(function(f,g,a){return f(g.apply(null,a))})),
partial=uncurry1(curry),
fpow=compose(reduce_(compose),fillArr),
inc=partial(add,1),
dec=partial(add,-1)
/*inc=curry(add)(1),
dec=curry(add)(-1),
makeArr=curry(fillArr)(0),
uncurry1=compose(cflip,cflip),
reduce_=curry(flip(pushCtx([].reduce))),
uncurryAll=compose(reduce_,uncurry1),
fpow=compose(reduce_(compose),fillArr)*/
