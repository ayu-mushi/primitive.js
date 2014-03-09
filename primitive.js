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
function justapp(f,a){return f(a)}
function for_(f,n,p,a){while(p(n,a))a=f(a,n++);return a}
var flip=curry(args(function(f,a,b,rest){return f.apply(null,[b].concat([a],rest))},3)),
B=compose=curry(args(function(f,g,a){return f(g.apply(null,a))},2)),
ctxToArg=curry(args(apply_,2)),
foldl=ctxToArg([].reduce),
foldr=ctxToArg([].reduceRight),
uncurry=curry(args(curry(flip(foldl))(justapp),0)),
partial=uncurry(curry),
wrap=curry,
curry2nd=B(curry,flip),
bind2nd=uncurry(curry2nd),
op1=B(partial(Function,"a"),bind2nd(ctxToArg("".concat,"return "),"a")),
op2=B(partial(Function,"a,b"),bind2nd(ctxToArg("".concat,"return a"),"b")),
op={},
toChurchn=B(curry2nd(bind2nd(for_,0)),curry(op2("!=="))),
fpow,
id=op1(""),
constant=wrap(id),
fillArr,
arrToArg=bind2nd(apply_,null),
W,
B1st=uncurry(B(curry(B),curry)),
B2nd=uncurry(B1st(B1st,flip)),
delaydB=uncurry(B2nd(B,uncurry)),
pam=B2nd(ctxToArg([].map),curry2nd(arrToArg)),
fork=B2nd(arrToArg,pam),
hook=partial(fork,id),
fillArg=B2nd(arrToArg,fillArr),
reverseArg=args(B2nd(arrToArg,ctxToArg([].reverse)),0),
pass=args(B2nd(arrToArg,bind2nd(ctxToArg([].slice),0)),0),
defaults,
itrate,
inc=partial(op2("+"),1),
dec=partial(op2("+"),-1),
len=bind2nd(get,"length"),
//mapObj=B(curry2nd(ctxToArg([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
head=bind2nd(get,0),
last,//reverse
tail=bind2nd(ctxToArg([].slice),1),
init=bind2nd(ctxToArg([].slice),-1),
zip,
zipWith,
repeatdcombi,
clone,
isDefined=partial(op2("!=="),void 0),
memoize
