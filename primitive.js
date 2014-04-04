function iif(p,a,b){return p?a:b}
function get(i,a){return a[i]}
function set(i,e,a){a[i]=e;return a}
function _aryapp(f,ctx,a){return f.apply(ctx,a)}
function addReturn(f,a){f(a);return a}
function args(n,f){
	return function(){
		return f.apply(null,
			[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))}}
function curry(f){
	return function(){
		return f.bind.apply(f,[null].concat([].slice.call(arguments)))}}
function justapp(f,a){return f(a)}
function _for(f,p,n,a){while(p(n,a))a=f(a,n--);return a}
function _while(f,p,a){while(p(a))a=f(a);return a}
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
_call=args(2,_aryapp),
fromMember=curry(_call),
uncurry=curry(
	args(0,
		curry(flip(fromMember([].reduce)))(justapp))),
part=bind2nd(fromMember(alert.bind),null),
wrap=curry,
curry2nd=curry(bind2nd),
flipc=B(curry2nd,uncurry),
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

constant=curry(id),
aryapp=bind2nd(_aryapp,null),
c_B1st=B(curry(B),curry),
B1st=uncurry(c_B1st),
c_B2nd=B(c_B1st,flip),
B2nd=uncurry(c_B2nd),
mulapp=bind2nd(_for,id),
fpow=curry(mulapp),
_unshift=B1st(addReturn,curry2nd(fromMember([].unshift))),
c_push=B1st(addReturn,curry2nd(fromMember([].push))),
_shift=part(addReturn,fromMember([].shift)),
_pop=part(addReturn,fromMember([].pop)),
itrate/*mulapp push*/,
c_Bc=B1st(B,curry(B)),
c_B1stc=B(c_Bc,curry),
c_B2ndc=B(c_Bc,flip),
__pam=
	B2nd(fromMember([].map),
		curry2nd(aryapp)),
_pam=flip(uncurry(__pam)),
pam= /* (&&&) */
	args(0,
		curry(args(1,_pam))),
_hook=part(pam,id),
fork=
	B(part(args,0),
		c_B1st(bind2nd(B,
				args(1,_pam)))
			(curry(aryapp))),
c_forkc=c_B1st(B)(fork),
hook=B(bind2nd(part,id),fork),
hookc=c_B1st(B)(hook),
addFillAry=c_B1st(mulapp)(c_push),
head=part(get,0),
tail=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
c_drop=c_B2nd(take)(neg),
init=c_drop(1),
argsOp=c_B1st(B(part(args,0),justapp))
		(B(flipc,
			part(B2nd,aryapp))),
reverseArgs=argsOp(fromMember([].reverse)),
c_discard=B(argsOp,curry2nd(take)),
discardTail=bind2nd(B,id),
len=part(get,"length"),
turn,
zip=function(x,y){
	return x.map(function(e,i){return [e,y[i]]})},
c_zip=
	c_B2nd(fromMember([].map))
		(B(_hook,
			B(flip,curry2nd(get)))),
get2d=B2nd(get,get),
unzip,
zipWith,
zipapp=B(bind2nd(fromMember([].map),
		part(aryapp,justapp)),
	zip),
fappose=/* (***) */
	curry(zipapp),
converge=
	B(part(args,0),
		c_B1st(bind2nd(B,
			args(1,zipapp)))
		(curry(aryapp))),
mknil=B(part(aryapp,Array),constant([])),
fillAry=
	converge(whileNoRet)
		(curry2nd(fromMember([].push)),
		flipc(c_B1st(neq)(len)),
		mknil),
fillArgs=B2nd(aryapp,fillAry),
dup=pam(id,id),
dupArgs=flipc(B2nd(aryapp,dup)),
isDefined=part(neq,void 0),
c_defauApp=
	c_B1st(justapp)
		(hook(flip(iif))(isDefined,constant(id))),
defauZipapp,
c_jcompose=
	c_B1st(bind2nd(B,
			args(1,flip(fromMember([].map)))))
		(curry(aryapp)),
inc=part(add,1),
dec=part(add,-1),
lastIx=B(dec,len),
last=hook(flip(get))(lastIx),
swap,
swapArg,
double=part(mul,2),
half=part(mul,0.5),
centerIx=B(Math.floor,B(half,len)),
center=hook(flip(get))(centerIx),
/*back=
	hookc(flip(get))
		(B1st(sub,lastIx)),*/
ringGet,
ringSet,

mapObj,
merge,

splat,
repeatdCombi,
cloneAry=[].concat.bind([]),
clone,
//values=hook()(Object.keys),
memoize=function(memo,f){
	return function(){
		var key=arguments;
		return memo[key]===void 0?memo[key]=aryapp(f,key):memo[key]}},
childLen=B(len,head),
//shape=bind2nd(whileNoRet,isDefined) head push len,
dimention,
toDeep,
flat=bind2nd(fromMember([].reduce),c_discard(2)(fromMember([].concat))),

/* bool */
nor=B(not,or),
nand=B(not,and),
xor=fork(and)(or,nand),
c_imp=c_B1st(or)(not),
imp=uncurry(c_imp),
thenId=bind2nd(iif,id),
c_elseId=c_B1st(thenId)(not)
/*thenIt=B(dupArgs,iif),//(p,a,b) -> p(a)?a:b
elseIt=B(thenIt,not)//(p,a,b) -> !p(a)?a:b*/
