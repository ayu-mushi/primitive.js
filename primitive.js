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
		[].unshift.call(arguments,null);return f.bind.apply(f,arguments)}}
function justapp(f,a){return f(a)}
function _while(f,p,a){while(p(a))a=f(a);return a}
function whileNoRet(f,p,a){while(p(a))f(a);return a}
var
flip=curry(
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
part=bind2nd(fromMember(alert.bind),null),
wrap=curry,
curry2nd=curry(bind2nd),
uncurry=curry(
	args(0,
		curry2nd(fromMember([].reduce))(justapp))),
flipc=B(curry2nd,uncurry),

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
_unshift=B1st(addReturn,curry2nd(fromMember([].unshift))),
c_push=B1st(addReturn,curry2nd(fromMember([].push))),
_shift=part(addReturn,fromMember([].shift)),
_pop=part(addReturn,fromMember([].pop)),
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
hook=B(bind2nd(part,id),fork),
hook2nd=B(bind2nd(bind2nd,id),fork),
head=part(get,0),
tail=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
c_drop=c_B2nd(take)(neg),
init=c_drop(1),
argsOp=c_B1st(B(part(args,0),justapp))
		(B(flipc,
			part(B2nd,aryapp))),
reverseArgs=argsOp(fromMember([].reverse)),
curryLast=B(curry,reverseArgs),
bindLast=uncurry(curryLast),
define=bindLast(set,window),
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
unzip,
zipWith,
zipapp=B(bind2nd(fromMember([].map),
		part(aryapp,justapp)),
	zip),
fappose=curry(zipapp),// (***)
arity_fappose=args(0,fappose),
converge=
	B(part(args,0),
		c_B1st(bind2nd(B,
			args(1,zipapp)))
		(curry(aryapp))),
c_aryBond=c_B1st(B)(curry(aryapp)),
mknil=c_aryBond(Array)(constant([])),
fillAry=
	converge(whileNoRet)
		(curry2nd(fromMember([].push)),
		flipc(c_B1st(neq)(len)),
		mknil),
fillArgs=B2nd(aryapp,fillAry),
dup=pam(id,id),
W=flipc(B2nd(aryapp,dup)),
T=curry2nd(justapp),
isDefined=part(neq,void 0),
c_defaudApp=
	c_B1st(justapp)
		(hook(flip(iif))
			(isDefined,constant(id))),
defaudZipapp=
	B(bind2nd(fromMember([].map),
		part(aryapp,uncurry(c_defaudApp))),
	zip),
c_jcompose=
	c_B1st(bind2nd(B,
			args(1,flip(fromMember([].map)))))
		(curry(aryapp)),
inc=part(add,1),
dec=part(add,-1),
lastIx=B(dec,len),
last=hook2nd(get)(lastIx),
swap,
swapArgs,
half=part(mul,0.5),
centerIx=B(Math.floor,B(half,len)),
center=hook2nd(get)(centerIx),
back=fork(function(f,a){return function(n){return a[f(n)]}})
		(B1st(sub,lastIx),id),
ringGet,
ringSet,
c_foldl=c_B1stc(fromMember([].reduce))
	(_unshift),
foldl=uncurry(c_foldl),
mapObj=function(f,a){
	return c_foldl({})
		(Object.keys(a))
		(function(b,k,i){
			return set(k,f(a[k]),b)})},
dimmGet=bindLast(foldl,flip(get)),
merge,
cloneAry=[].concat.bind([]),
clone,
values=fork(fromMember([].map))
	(Object.keys,curry2nd(get)),
memoize=function(memo,f){
	return function(){
		var key=arguments;
		return memo.hasOwnProperty(key)?
			memo[key]:memo[key]=aryapp(f,key)}},
childLen=B(len,head),
height=len,
width=childLen,
zxyArgs=B(reverseArgs,flip),
xzyArgs=B(flip,zxyArgs),
_appElm=
	fork(curry(xzyArgs(B())))
		(curry(xzyArgs(set)),get),
appElm=reverseArgs(uncurry(curry(_appElm))),
incElm=part(appElm,inc),
incHead=bind2nd(incElm,0),
decElm=part(appElm,dec),
decHead=bind2nd(decElm,0),
count=
	B(bind2nd(bind2nd,0),
		B(part(args,1),
			B1st(_while,
				part(arity_fappose,inc)))),
_countDownFpow=
	B(part(B,part(get,1)),
		B1st(args(1,bind2nd(_while,head)),
			part(args(0,flipc(__pam)),dec))),
countDownFpow=uncurry(B(curry,_countDownFpow)),
_countUpFpow=
	B(part(get,1),
		converge(_while)
			(part(args(0,flipc(__pam)),inc),
			B(bind2nd(B,head),curry(neq)),
			part(Array,0))),
countUpFpow=curry(_countUpFpow),
_fpow=
	c_Bc(part(get,1))
		(B(part(args,0),
			B(bind2nd(part,head),
				B1st(_while,part(arity_fappose,dec))))),
c_fpow=B(curry,_fpow),
fpow=uncurry(c_fpow),
_2ndOrderFpow,
_alert=part(addReturn,alert),
idAll=args(0,id),
id2nd=flip(id),
fixdLen=
	bind2nd(converge(whileNoRet),
		flipc(c_B1st(neq)(len))),
fixdLenInitialVal=bind2nd(fixdLen,idAll),
iterate=
	fixdLenInitialVal(B(hook(fromMember([].push)),
			bind2nd(B,last))),
_2ndOrderIterate=
	fixdLen(B(hook(fromMember([].push)),
			B(bind2nd(B,
				pam(last,
					hook2nd(get)(B(part(add,-2),len)))),
			curry(aryapp))),
		id),
countIterate=
	fixdLenInitialVal(B(hook(fromMember([].push)),
		B(bind2nd(B,pam(len,last)),
			curry(aryapp)))),
hasHead=bind2nd(fromMember({}.hasOwnProperty),0),
dimension=
	B(head,
		part(count(head),
			B(hasHead,
				part(get,1)))),
shape=
	flip(args(0,
		B(head,
			part(_while,
				flipc(__pam)([converge(flip(uncurry(c_push)))(id,len),
					flip(head)]),
				B(hasHead,
					part(get,1)))))),
findIx=
	B(bind2nd(part(_while,inc),0),
		fork(fork(and))
			(converge(B)(id,curry2nd(get)),
			flip(c_B1st(neq)(len)))),
find=fork(get)(findIx,flip(id)),
match,
guard,
c_map2d=
	c_B2nd(fromMember([].map),
		curry2nd(fromMember([].map))),
c_extract=
	B(flipc(c_aryBond)(pam(id,add)),
		curry(fromMember([].slice))),
/*splat=
	B(flipc(c_foldl([])),
		c_extract),*/
takeWhile,
nub,
flat=
	bind2nd(fromMember([].reduce),
		c_discard(2)(fromMember([].concat))),
nor=B(not,or),
nand=B(not,and),
xor=fork(and)(or,nand),
c_imp=c_B1st(or)(not),
imp=uncurry(c_imp),
thenId=bind2nd(iif,id),
c_elseId=c_B1st(thenId)(not),
uncurryFor1_2=B(uncurry,part(B,curry)),
x_xyArgs=B(W,uncurryFor1_2),
thenIt=B(x_xyArgs,c_B1st(iif)),
elseIt=B(thenIt,part(B,not)),
defauVal=curry2nd(thenIt(isDefined))
