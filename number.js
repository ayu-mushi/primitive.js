//primitive.js
var
double=part(mul,2),
/*sum=
	B1st(B(bind2nd(justapp,0),countDownFpow),
		B(uncurry,c_B1st(add))),
product=
	B1st(B(bind2nd(justapp,1),countDownFpow),
		B(uncurry,c_B1st(mul))),*/
fact=flipc(countDownFpow,mul)(1),
fib=bind2nd(part(_2ndOrderIterate,add),[0,1]),
upTo=part(iterate,inc),
downTo=part(iterate,dec),

bit_shl1=part(bit_shl,1),
bit_get=
	hook2nd(bit_sar)
		(hook(and)(bit_shl1)),
bit_set=
	B(hook(bit_or),
		c_B1st(bit_shl)(bind2nd(bit_and,1))),

addMat,mulMat,

mkCplx=Array,reCplx=head,imCplx=part(get,1),
addCplx,
mulCplx,

mkRat=Array,numer=head,denom=part(get,1),
invertRat,addRat,mulRat,

lcgsRand,
mtRand,
sfmtRand,
xorshiftRand
