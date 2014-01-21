function getElm(a,i){return a[i]}
function pushCtx(f){return function(ctx,args){return f.apply(ctx,args)}}
function flip(f){return function(b,a){return f(a,b)}}
function cflip(f){return function(b,a){return f(b)(a)}}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function curry(f){return function _(args,i){return i?function(a){return _(args.concat([a]),i-1)}:f.apply(null,args)}([],f.length)}
function compose(f,g){return function(){return f(g.apply(null,arguments))}}
function id(a){return a}
function iif(p,a,b){return p?a:b}
function eq(a,b){return a==b}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
const inc=curry(inc)(1),
dec=curry(flip(sub))(1),
makeArr=curry(fillArr)(0),
uncurry1=compose(cflip,cflip),
reduce_=curry(flip(pushCtx([].reduce))),
uncurryAll=compose(reduce_,uncurry1),
fpow=compose(reduce_(compose),fillArr)
