function iif(p,a,b){return p?a:b}
function get(i,a){return a[i]}
function set(i,e,a){a[i]=e;return a}
function apply_(f,ctx,a){return f.apply(ctx,a)}
function addReturn(f,a){f(a);return a}
function args0(f){return function(){return f(arguments)}}
function args(n,f){
	return function(){
		return f.apply(null,
			[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))}}
function curry(f){
	return args(0,
		function(a){
			return alert.bind.apply(f,[null].concat(a))})}
function justapp(f,a){return f(a)}
function for_(f,p,n,a){while(p(n,a))a=f(a,n--);return a}
var flip=curry(
	args(3,
		function(f,a,b,rest){
			return f.apply(null,[b].concat([a],rest))})),
B=curry(
	args(2,
		function(f,g,a){
			return f(g.apply(null,a))})),
fromMember=curry(args(2,apply_)),
flipCtx=B(flip,fromMember),
foldl=flipCtx([].reduce),
foldr=flipCtx([].reduceRight),
uncurry=curry(
	args(0,
		curry(foldl)(justapp))),
part=uncurry(curry),
wrap=curry,
curry2nd=B(curry,flip),
bind2nd=uncurry(curry2nd),
cflip=B(curry,B(flip,uncurry)),
define,

op1=
	B(part(Function,"a"),
		bind2nd("".concat.bind("return "),"a")),
neg=op1("-"),not=op1("!"),

op2=
	B(part(Function,"a,b"),
		bind2nd("".concat.bind("return a"),"b")),
add=op2("+"),sub=op2("-"),mul=op2("*"),div=op2("/"),mod=op2("%"),
lt=op2("<"),gt=op2(">"),le=op2("<="),ge=op2(">="),
and=op2("&&"),or=op2("||"),eq=op2("==="),neq=op2("!=="),

op={},
id=op1(""),
constant=wrap(id),
arrapp=bind2nd(apply_,null),
uncurryM=curry(
	args(0,
		part(foldl,arrapp))),
B1st=uncurry(B(curry(B),curry)),
B2nd=uncurry(B1st(B1st,flip)),
fpow_=bind2nd(for_,id),
fpow=curry(fpow_),
unshift_=B1st(addReturn,curry2nd(fromMember([].unshift))),
push_=B1st(addReturn,curry2nd(fromMember([].push))),
shift_=part(addReturn,fromMember([].shift)),
pop_=part(addReturn,fromMember([].pop)),
fillArray_=B1st(fpow,push_),
fillArray=uncurry(fillArray_),
itrate=B1st(fpow,B(push_,fpow)),
delaydB=uncurry(B2nd(B,uncurry)),
pam=
	B2nd(fromMember([].map),
		curry2nd(arrapp)),
pam_= /* (&&&) */
	args(0,
		curry(args(1,flip(uncurry(pam))))),
fork=cflip(B2nd(arrapp,cflip(pam))),
hook=part(fork,id),
head=part(get,0),
behead=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
init=B(take,[].reverse),
argop=part(B2nd,arrapp),
bond=argop(curry2nd(fromMember([].map))),
reverseArg=argop(fromMember([].reverse)),
fillArg=B2nd(arrapp,fillArray),
W=part(fillArg,2),
U=part(W,justapp),
pass=argop(take),
defaults,
inc=part(add,1),
dec=part(add,-1),
len=part(get,"length"),
lastIx=B(dec,len),
last= /* hook(flip(get),lastIx) */
	B(part(arrapp,get),
		pam_(lastIx,id)),
back,
ai_i_a,/* (a,i,f) -> f(a[i],i,a) */
//mapObj=B(curry2nd(fromMember([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
zip=function(x,y){return x.map(function(e,i){return [e,y[i]]})},
//zip=B2nd(fromMember([].map),pam()),
splat,
repeatdCombi,
cloneArray=[].concat.bind([]),
clone,
//values=B(,pam_(Object.keys,id)),
isDefined=part(neq,void 0),
memoize=function(f,memo){
	return function(){
		var key=arguments;
		return memo[key]===void 0?memo[key]=arrapp(f,key):memo[key]}},
memoizedFor=B(for_,bind2nd(B,memoize)),
memoizedFpow=bind2nd(memoizedFor,id),
shape,

/* bool */
xor,
nor=B(not,or),
nand=B(not,and),
imp=uncurry(B1st(or,not))
