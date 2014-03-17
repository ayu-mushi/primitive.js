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
fromMember=curry(args(apply_,2)),
flipCtx=B(flip,fromMember),
foldl=flipCtx([].reduce),
foldr=flipCtx([].reduceRight),
uncurry=curry(args(curry(foldl)(justapp),0)),
part=uncurry(curry),
wrap=curry,
curry2nd=B(curry,flip),
bind2nd=uncurry(curry2nd),
<<<<<<< HEAD
op1=B(part(Function,"a"),bind2nd(fromMember("".concat,"return "),"a")),
op2=B(part(Function,"a,b"),bind2nd(fromMember("".concat,"return a"),"b")),
=======
op1=B(part(Function,"a"),bind2nd(ctxToArg("".concat,"return "),"a")),
op2=B(part(Function,"a,b"),bind2nd(ctxToArg("".concat,"return a"),"b")),
>>>>>>> temp1
op={},
id=op1(""),
constant=wrap(id),
fillArray,
arrayToArg=bind2nd(apply_,null),
B1st=uncurry(B(curry(B),curry)),
B2nd=uncurry(B1st(B1st,flip)),
toChurchn=B2nd(bind2nd(for_,0),curry(op2("!=="))),
fpow,
delaydB=uncurry(B2nd(B,uncurry)),
pam=B2nd(fromMember([].map),curry2nd(arrayToArg)),
fork=B2nd(arrayToArg,flip(uncurry(pam))),
hook=part(fork,id),
fillArg=B2nd(arrayToArg,fillArray),
W=part(fillArg,2),
<<<<<<< HEAD
U,
=======
>>>>>>> temp1
head=bind2nd(get,0),
behead=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
init,
last,
tail,
<<<<<<< HEAD
argop=part(B2nd,arrayToArg),
bond=argop(curry2nd(fromMember([].map))),
reverseArg=argop(fromMember([].reverse)),
pass=argop(take),
=======
crackArg,
bond=part(crackArg,curry2nd(ctxToArg([].map))),
reverseArg=part(crackArg,ctxToArg([].reverse)),
pass=part(crackArg,take),
>>>>>>> temp1
defaults,
itrate,
inc=part(op2("+"),1),
dec=part(op2("+"),-1),
len=bind2nd(get,"length"),
ai_i_a,// (a,i,f) -> f(a[i],i,a)
//mapObj=B(curry2nd(fromMember([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
zip,
zipWith,
repeatdCombi,
clone,
isDefined=part(op2("!=="),void 0),
memoize,
define=part(set,window)
