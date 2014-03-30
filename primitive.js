function iif(p,a,b){return p?a:b}
function get(i,a){return a[i]}
function set(i,e,a){a[i]=e;return a}
function apply_(f,ctx,a){return f.apply(ctx,a)}
function addReturn(f,a){f(a);return a}
function args(n,f){
	return function(){
		return f.apply(null,
			[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))}}
function curry(f){
	return function(){
		return f.bind.apply(f,[null].concat([].slice.call(arguments)))}}
function justapp(f,a){return f(a)}
function for_(f,p,n,a){while(p(n,a))a=f(a,n--);return a}
function while_(f,p,a){while(p(a))a=f(a);return a}
function whileNoRet(f,p,a){while(p(a))f(a);return a}
var flip=curry(
	args(3,
		function(f,a,b,rest){
			return f.apply(null,[b].concat([a],rest))})),
bind2nd=flip,
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
part=bind2nd(fromMember(alert.bind),null),
wrap=curry,
curry2nd=curry(bind2nd),
cflip=B(curry2nd,uncurry),
define,

op1=
	B(part(Function,"a"),
		bind2nd("".concat.bind("return "),"a")),
neg=op1("-"),not=op1("!"),bit_not=op1("~"),id=op1(""),

op2=
	B(part(Function,"a,b"),
		bind2nd("".concat.bind("return a"),"b")),
add=op2("+"),sub=op2("-"),mul=op2("*"),div=op2("/"),mod=op2("%"),
lt=op2("<"),gt=op2(">"),le=op2("<="),ge=op2(">="),
and=op2("&&"),or=op2("||"),eq=op2("==="),neq=op2("!=="),
bit_and=op2("&"),bit_or=op2("|"),bit_xor=op2("^"),
bit_shl=op2("<<"),bit_sar=op2(">>"),bit_shr=op2(">>>"),

constant=wrap(id),
arrapp=bind2nd(apply_,null),
B1st_c=B(curry(B),curry),
B1st=uncurry(B1st_c),
B2nd=uncurry(B(B1st_c,flip)),
mulapp=bind2nd(for_,id),
fpow=curry(mulapp),
unshift_=B1st(addReturn,curry2nd(fromMember([].unshift))),
push_c=B1st(addReturn,curry2nd(fromMember([].push))),
shift_=part(addReturn,fromMember([].shift)),
pop_=part(addReturn,fromMember([].pop)),

itrate/*mulapp push*/,
cB_c=B1st(B,curry(B)),
cB1st_c=B(cB_c,curry),
cB2nd_c=B(cB_c,flip),
pam__=
	B2nd(fromMember([].map),
		curry2nd(arrapp)),
pam_=flip(uncurry(pam__)),
pam= /* (&&&) */
	args(0,
		curry(args(1,pam_))),
hook_=part(pam,id),
fork=
	B(part(args,0),
		B1st(bind2nd(B,
				args(1,pam_)),
			curry(arrapp))),
cfork_c=B1st(B,fork),
hook=B(bind2nd(part,id),fork),
chook=B1st(B,hook),

addFillArray=B1st(mulapp,push_c),
head=part(get,0),
neck=part(get,1),
tail=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
drop=B2nd(take,neg),
init=bind2nd(drop,-1),
arg_op=B1st(B(part(args,0),justapp),
		B(cflip,
			part(B2nd,arrapp))),
reverseArg=arg_op(fromMember([].reverse)),
discard_c=B(arg_op,curry2nd(take)),
discardTail=bind2nd(B,id),
len=part(get,"length"),
turn,
zip=function(x,y){
	return x.map(function(e,i){return [e,y[i]]})},
get2d=B2nd(get,get),
unzip,
//zip=bind2nd(fromMember([].map)),
//zipWith,
zipapp=B(bind2nd(fromMember([].map),
		part(arrapp,justapp)),
	zip),
fappose=/* (***) */
	curry(zipapp),
converge=
	B(part(args,0),
		B1st(bind2nd(B,
			args(1,zipapp)),
		curry(arrapp))),
mknil=B(part(arrapp,Array),constant([])),
fillArray=
	converge(whileNoRet)
		(curry2nd(fromMember([].push)),
		cflip(B1st(neq,len)),
		mknil),
fillArg=B2nd(arrapp,fillArray),
dup=pam(id,id),
dupArg=cflip(B2nd(arrapp,dup)),

isDefined=part(neq,void 0),
defaultIdApp=
	hook(curry2nd(iif))(isDefined),
jcompose=
	B1st(bind2nd(B,
			args(1,flip(fromMember([].map)))),
		curry(arrapp)),
inc=part(add,1),
dec=part(add,-1),
lastIx=B(dec,len),
last=hook(flip(get))(lastIx),
swap,
swapArg,
double=part(mul,2),
half=part(mul,0.5),
center=
	hook(flip(get))
		(B(Math.floor,B(half,len))),
back=B(part(arrapp,get),fappose([sub,id])),
back=
	chook(flip(get))
		(B1st(sub,lastIx)),
ring_get=B(part(B,get),curry(mod)),
ring_set=B(part(arrapp,set),fappose([mod,id,id])),

/* objective */
mapObj,
merge,
extend,
//passThis=B1st(dup,curry(call_)),
addProto=part(set,"prototype"),

splat,
repeatdCombi,
cloneArray=[].concat.bind([]),
clone,
//values=hook()(Object.keys),
memoize=function(memo,f){
	return function(){
		var key=arguments;
		return memo[key]===void 0?memo[key]=arrapp(f,key):memo[key]}},
childLen=B(len,head),
//shape=bind2nd(whileNoRet,isDefined) childLen,
dimention,
toDeep,
flat=part(foldl,discard_c(2)(fromMember([].concat))),

/* bool */
nor=B(not,or),
nand=B(not,and),
xor=fork(and)(or,nand),
imp_c=B1st(or,not),
imp=uncurry(imp_c),
thenId=bind2nd(iif,id),
elseId_c=B1st(thenId,not),
thenIt=B(dupArg(B),part(B1st,iif)),//(p,a,b) -> p(a)?a:b
elseIt=B(thenIt,not)//(p,a,b) -> !p(a)?a:b
