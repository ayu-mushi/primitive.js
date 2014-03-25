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
			return f.bind.apply(f,[null].concat(a))})}
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
call_=args(2,apply_),
fromMember=curry(call_),
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
neg=op1("-"),not=op1("!"),bit_not=op1("~"),

op2=
	B(part(Function,"a,b"),
		bind2nd("".concat.bind("return a"),"b")),
add=op2("+"),sub=op2("-"),mul=op2("*"),div=op2("/"),mod=op2("%"),
lt=op2("<"),gt=op2(">"),le=op2("<="),ge=op2(">="),
and=op2("&&"),or=op2("||"),eq=op2("==="),neq=op2("!=="),
bit_and=op2("&"),bit_or=op2("|"),bit_xor=op2("^"),
bit_shl=op2("<<"),bit_sar=op2(">>"),bit_shr=op2(">>>"),

id=op1(""),
constant=wrap(id),
arrapp=bind2nd(apply_,null),
arrapp_c=curry(arrapp),
uncurryM=curry(
	args(0,
		part(foldl,arrapp))),
B1st=uncurry(B(curry(B),curry)),
B2nd=uncurry(B1st(B1st,flip)),
mulapp=bind2nd(for_,id),
fpow=curry(mulapp),
unshift_=B1st(addReturn,curry2nd(fromMember([].unshift))),
push_=B1st(addReturn,curry2nd(fromMember([].push))),
shift_=part(addReturn,fromMember([].shift)),
pop_=part(addReturn,fromMember([].pop)),
fillArray_c=B1st(mulapp,push_),
fillArray=uncurry(fillArray_c),
itrate=mulapp,
delaydB=uncurry(B2nd(B,uncurry)),
pam__=
	B2nd(fromMember([].map),
		curry2nd(arrapp)),
pam_=flip(uncurry(pam__)),
pam= /* (&&&) */
	args(0,
		curry(args(1,pam_))),
//function(f){return args(0,function(g,a){return f(g.apply(a))})}
hook_=part(pam,id),
fork=bind2nd(B,pam_),
hook=bind2nd(B,hook_),
head=part(get,0),
behead=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
init=B(take,[].reverse),
argop=B(cflip,part(B2nd,arrapp)),
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
		pam(lastIx,id)),
back,
ring,
//mapObj=B(curry2nd(fromMember([].map)),Object.keys),//function(f,a){return Object.keys(a).map(function(i){return f(a[i],i,a)})}
merge,
extend,
zip=function(x,y){return x.map(function(e,i){return [e,y[i]]})},
//zip=B2nd(fromMember([].map),pam_()),
splat,
repeatdCombi,
cloneArray=[].concat.bind([]),
clone,
//values=B(,pam(Object.keys,id)),
isDefined=part(neq,void 0),
memoize=function(f,memo){
	return function(){
		var key=arguments;
		return memo[key]===void 0?memo[key]=arrapp(f,key):memo[key]}},
memoizedFor=B(for_,bind2nd(B,memoize)),
memoizedFpow=bind2nd(memoizedFor,id),
/*shape=B2nd(for_,
	B(push_,
		B(head,len))),
	flip(isDefined))*/

/* bool */
nor=B(not,or),
nand=B(not,and),
xor,
imp_c=B1st(or,not),
imp=uncurry(imp_c)
