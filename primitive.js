function iif(q,a,b){return q?a:b}
function get(i,a){return a[i]}
function set(i,e,a){a[i]=e;return a}
function _aryapp(f,ctx,a){return f.apply(ctx,a)}
function addReturn(f,a){f(a);return a}
function dotail(n,f){
	return function(){
		return f.apply(null,
			[].slice.call(arguments,0,n).concat([[].slice.call(arguments,n)]))}}
function curry(f){
	return function(){
		[].unshift.call(arguments,null);return f.bind.apply(f,arguments)}}
function justapp(f,a){return f(a)}
function _while(f,p,a){while(p(a))a=f(a);return a}
function whileNoRet(f,p,a){while(p(a))f(a);return a}
function ifFn(p,f,g,a){return p(a)?f(a):g(a)}
function del(a,i){delete a[i];return a}
var
flip=curry(
	dotail(3,
		function(f,a,b,rest){
			return f.apply(null,[b].concat([a],rest))})),
bind2nd=flip,
B=curry(
	dotail(2,
		function(f,g,a){
			return f(g.apply(null,a))})),
_call=dotail(2,_aryapp),
fromMember=curry(_call),
part=bind2nd(fromMember(B.bind),null),
wrap=curry,
curry2nd=curry(bind2nd),
uncurry=curry(
	dotail(0,
		curry2nd(fromMember([].reduce))(justapp))),
flipc=B(curry2nd,uncurry),

op1=
	B(part(Function,"a"),
		bind2nd("".concat.bind("return "),"a")),
neg=op1("-"),not=op1("!"),bit_not=op1("~"),id=op1(""),type=op1("typeof "),

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
	dotail(0,
		curry(dotail(1,_pam))),
transparentPam=part(pam,id),
fork=
	B(part(dotail,0),
		c_B1st(bind2nd(B,
				dotail(1,_pam)))
			(curry(aryapp))),
hook=B(bind2nd(part,id),fork),
hook2nd=B(bind2nd(bind2nd,id),fork),
head=part(get,0),
postComposeHead=bind2nd(B,head),
c_isGettable=B(part(fork(and),part(le,0)),c_B1st(gt)(len)),
tail=bind2nd(fromMember([].slice),1),
take=bind2nd(fromMember([].slice),0),
c_drop=c_B2nd(take)(neg),
init=c_drop(1),
insert=function(i,e,a){
	a.splice(i,0,e);return a},
argsOp=c_B1st(B(part(dotail,0),justapp))
		(B(flipc,
			part(B2nd,aryapp))),
reverseArgs=argsOp(fromMember([].reverse)),
curryLast=B(curry,reverseArgs),
bindLast=uncurry(curryLast),
define=bindLast(set,this),
c_discard=B(argsOp,curry2nd(take)),
discardTail=bind2nd(B,id),
c_aryBond=c_B1st(B)(curry(aryapp)),
discardAll=flipc(c_aryBond)(constant([])),
len=part(get,"length"),
turn,
zip=function(x,y){
	return x.map(function(e,i){return [e,y[i]]})},
c_zip=
	c_B2nd(fromMember([].map))
		(B(transparentPam,
			B(flip,curry2nd(get)))),
unzip,
c_zipWith=
	B(bind2nd(B,curry(aryapp)),
		c_B1st(fromMember([].map))
			(zip)),
zipapp=B(bind2nd(fromMember([].map),
		part(aryapp,justapp)),
	zip),
fappose=curry(zipapp),// (***)
rt_fappose=dotail(0,fappose),
converge=
	B(part(dotail,0),
		c_B1st(bind2nd(B,
			dotail(1,zipapp)))
		(curry(aryapp))),
mkNil=discardAll(Array),
isEmpty,
fillAry=
	converge(whileNoRet)
		(curry2nd(fromMember([].push)),
		flipc(c_B1st(neq)(len)),
		mkNil),
fillArgs=B2nd(aryapp,fillAry),
dup=pam(id,id),
W=flipc(B2nd(aryapp,dup)),
twice=W(B),
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
			dotail(1,flip(fromMember([].map)))))
		(curry(aryapp)),
linearChainl=
	bind2nd(fromMember([].reduce),
		flip(fromMember(B.call))),
linearChainr=
	bind2nd(fromMember([].reduceRight),
		fromMember(B.call)),

inc=part(add,1),
dec=part(add,-1),
lastIx=B(dec,len),
last=hook2nd(get)(lastIx),
cp=
	fork(set)
		(reverseArgs(id),get,flip(id)),
swap=
	hook(set)
		(reverseArgs(get),cp),
swapLast,
dupLast=
	fork(justapp)
		(curry(fromMember([].push)),last),
rotate,
half=part(mul,0.5),
centerIx=B(Math.floor,B(half,len)),
center=hook2nd(get)(centerIx),
back=fork(function(f,a){return function(n){return a[f(n)]}})
		(B1st(sub,lastIx),id),
torusGet,
torusSet,
c_foldl=c_B1stc(fromMember([].reduce))
	(_unshift),
foldl=uncurry(c_foldl),
mapObj=function(f,a){
	return c_foldl({})
		(Object.keys(a))
		(function(b,k,i){
			return set(k,f(a[k]),b)})},
inverseObject,
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
c_nonRecursive_hasOwnChildNode,
recursive_hasOwnChildNode,
memoizeAryFn=function(memo,f){
	return function(ary){
		return memo.hasOwnProperty(key)?
			memo[key]:memo[key]=f(ary)}},
childLen=B(len,head),
height=len,
width=childLen,
zxyArgs=B(reverseArgs,flip),
xzyArgs=B(flip,zxyArgs),
_appElm=
	fork(curry(xzyArgs(B())))
		(curry(xzyArgs(set)),get),
appElm=zxyArgs(uncurry(curry(_appElm))),
incElm=part(appElm,inc),
incHead=bind2nd(incElm,0),
decElm=part(appElm,dec),
decHead=bind2nd(decElm,0),
c_whileWithLimits=
	B(part(dotail,1),
		B1st(_while,
			part(rt_fappose,inc))),//ex. c_whileWithLimits(inc)(B(part(neq,5),head),0,0) -> [5,5]
count=
	B(bind2nd(bind2nd,0),
		B(part(dotail,1),
			B1st(_while,
				part(rt_fappose,inc)))),
toCountDownable_Iteratable=
	B(part(B,part(get,1)),
		B1st(dotail(1,bind2nd(_while,head)),
			part(dotail(0,flipc(__pam)),dec))),
countDownFpow=uncurry(B(curry,toCountDownable_Iteratable)),
countUpMulApp=
	B(part(get,1),
		converge(_while)
			(part(dotail(0,flipc(__pam)),inc),
			B(bind2nd(B,head),curry(neq)),
			part(Array,0))),
countUpFpow=curry(countUpMulApp),
partAryFunc,
toIteratable=
	c_Bc(part(get,1))
		(B(part(dotail,0),
			B(bind2nd(part,head),
				B1st(_while,part(rt_fappose,dec))))),
c_fpow=B(curry,toIteratable),
fpow=uncurry(c_fpow),
isPositive=part(lt,0),
isNegative=part(gt,0),
isNotPositive=part(le,0),
isNotNegative=part(ge,0),
c_inversibleFpow=
	fork(B)
		(c_B2nd(fpow)(Math.abs),
		c_B1st(iif)(isNotNegative)),
yzxArgs=B(flip,reverseArgs),
inversible_toIteratable=
	curry(yzxArgs(uncurry(c_inversibleFpow))),
_2ndOrderFpow,
//_alert=part(addReturn,alert),
idAll=dotail(0,id),
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
hasHead=bind2nd(fromMember(hasOwnProperty),0),


focus //for array. N (index) -> Array (target) -> Array (forcused).
	,
modify,
topMust,

dimension=
	B(head,
		part(count(head),
			B(hasHead,
				part(get,1)))),
/*takeWhile=
	converge(whileNoRet)
		(),*/
dropWhile,
whileInc=bind2nd(part(_while,inc),0),
isIn=function(e,a){for(var i=a.length;i;i--)if(a[i]===e){return true}return false},
isInRange=function(e,a,n,m){for(;n!=m;m--)if(a[m]===e){return true}return false},
findIx=
	B(whileInc,
		fork(fork(and))
			(converge(B)(part(B,not),curry2nd(get)),
			flip(c_B1st(neq)(len)))),
find=fork(get)(findIx,flip(id)),
/*c_findWithLimits=
	c_B1stc(c_whileWithLimits(id))
		(fork(fork(or))
		 	(B(bind2nd(B,head),curry(neq)),
			bind2nd(B,get))),*/
findWithLimits=c_whileWithLimits(),
	//part(rt_fappose,inc)()([0]) -> [1]
lastFindIx,
lastFind,
lastFindWithLimits,
mkTypeChecker=flipc(c_B1st(eq)(fromMember(toString))),
isNum=mkTypeChecker("[object Number]"),
isStr=mkTypeChecker("[object String]"),
isFn=mkTypeChecker("[object Function]"),
isBool,
c_bee=B(c_jcompose(justapp),curry(get)),
_1_2To2_1args=B(curry,uncurryFor1_2),
guard=
	hook2nd(c_B1st(justapp)(get))
		(c_B1st(findIx)(curry2nd(aryapp))),
c_map2d=
	c_B2nd(fromMember([].map),
		curry2nd(fromMember([].map))),
c_extract=
	B(flipc(c_aryBond)(pam(id,add)),
		curry(fromMember([].slice))),
/*splat=
	B(flipc(c_foldl([])),
		c_extract),*/
nub,
flat=
	bind2nd(fromMember([].reduce),
		c_discard(2)(fromMember([].concat))),
eqAry,
union,
meet,
logicOpForSet,
tautology=constant(true),
contradiction=constant(false),
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
