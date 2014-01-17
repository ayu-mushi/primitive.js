function getElm(a,i){return a[i]}
function call_(f,ctx,a,b){return f.call(ctx,a,b)}
function flip(f){return function(b,a){return f(a,b)}}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function curry(f,interval){
	return function _(args,i){
		return i<interval.length?
			function(){return _(args.concat([].slice.call(arguments,0,interval[i])),i+1)}:f.apply(null,args)
	}([],0)
}
/*function curryAll(f,interval){
	return
		fillArr(function(a){return function},interval.length).concat(function(a){return f.apply(null,a)})
			.reduce(function(f,g){return })
}*/
function partial(f,len,args){return curry(f,[args.length,len-args.length]).apply(null,args)}
function composeMul(f,g,fLen){return function(){return f.apply(null,[g.apply(null,[].slice.call(arguments,0,fLen))],[].slice.call(arguments,fLen))}}
function id(a){return a}
function iif(p,a,b){return p?a:b}
function eq(a,b){return a==b}
function opposite(x){return -x}
function add(x,y){return x+y}
function sub(x,y){return x-y}
function mul(x,y){return x*y}
function div(x,y){return x/y}
function mod(x,y){return x%y}
const pushCtx=curry(call_,[1,3]),
flippar=composeMul(partial,flip),
fpow=composeMul(fillArr,flippar(pushCtx([].reduce),composeMul),2)
