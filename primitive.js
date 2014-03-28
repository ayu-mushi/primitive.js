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
B2nd=uncurry(B1st(B1st,flip)),
mulapp=bind2nd(for_,id),
fpow=curry(mulapp),
unshift_=B1st(addReturn,curry2nd(fromMember([].unshift))),
push_c=B1st(addReturn,curry2nd(fromMember([].push))),
shift_=part(addReturn,fromMember([].shift)),
pop_=part(addReturn,fromMember([].pop)),
fillArray=B1st(mulapp,push_c),
itrate/*=mulapp push*/,
delaydB=uncurry(B2nd(B,uncurry)),
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
hook=B(bind2nd(part,id),fork),
zip=function(x,y){return x.map(function(e,i){return [e,y[i]]})},
//zip=bind2nd(fromMember([].map)),
zipWith=
	B(bind2nd(fromMember([].map),
		part(arrapp,justapp)),
	zip),
fappose=zipWith(justapp),
jcompose=
	B1st(bind2nd(B,
			args(1,flip(fromMember([].map)))),
		curry(arrapp)),
head=part(get,0),
tail=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
drop=B2nd(take,neg),
init=bind2nd(drop,-1),
arg_op=B1st(B(part(args,0),justapp),
		B(cflip,
			part(B2nd,arrapp))),
bond=arg_op(curry2nd(fromMember([].map))),
reverseArg=arg_op(fromMember([].reverse)),
fillArg=arrapp(fillArray),
dup=part(fillArg,2),
discard=arg_op(take),
inc=part(add,1),
dec=part(add,-1),
len=part(get,"length"),
lastIx=B(dec,len),
last=hook(flip(get))(lastIx),
swap,
double=part(mul,2),
half=part(mul,0.5),
center=
	hook(flip(get))
		(B(Math.floor,B(half,len))),
back=B(part(arrapp,get),fappose([mod,id])),
/*back=
	hook(flip(get))
		(B2nd(sub,len)),*/
ring_get=B(part(arrapp,get),fappose([mod,id])),
ring_set=B(part(arrapp,set),fappose([mod,id,id])),

/* objective */
mapObj,
merge,
extend,
passThis=B1st(dup,curry(call_)),
addProto=part(set,"prototype"),

splat,
repeatdCombi,
cloneArray=[].concat.bind([]),
clone,
values,
isDefined=part(neq,void 0),
memoize=function(memo,f){
	return function(){
		var key=arguments;
		return memo[key]===void 0?memo[key]=arrapp(f,key):memo[key]}},
/*shape=B2nd(for_,
	B(push_c,
		B(head,len))),
	flip(isDefined))*/
dimention,

/* bool */
nor=B(not,or),
nand=B(not,and),
xor=fork(and)(or,nand),
imp_c=B1st(or,not),
imp=uncurry(imp_c)
