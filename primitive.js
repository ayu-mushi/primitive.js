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
cflip=B(curry,B(flip,uncurry)),
op1=B(part(Function,"a"),bind2nd(fromMember("".concat,"return "),"a")),
op2=B(part(Function,"a,b"),bind2nd(fromMember("".concat,"return a"),"b")),
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
pam_=args(curry(args(flip(uncurry(pam)),1)),0),
fork=cflip(B2nd(arrayToArg,cflip(pam))),
hook=part(fork,id),
head=bind2nd(get,0),
behead=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
init,
tail,
argop=part(B2nd,arrayToArg),
bond=argop(curry2nd(fromMember([].map))),
reverseArg=argop(fromMember([].reverse)),
fillArg=B2nd(arrayToArg,fillArray),
W=part(fillArg,2),
U,
pass=argop(take),
defaults,
itrate,
inc=part(op2("+"),1),
dec=part(op2("+"),-1),
len=bind2nd(get,"length"),
lastIx=B(dec,len),
last=B(part(arrayToArg,get),pam_(id,lastIx)),
ai_i_a,// (a,i,f) -> f(a[i],i,a)
//mapObj=B(curry2nd(fromMember([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
zip,
zipWith,
repeatdCombi,
cloneArray=[].concat,
clone,
values,
isDefined=part(op2("!=="),void 0),
memoize,
define=part(set,window),
shape
