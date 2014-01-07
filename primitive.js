function getElm(a,i){return a[i]}
function call_(f,ctx,a,b){return f.call(ctx,a,b)}
function flip(f){return function(b,a){return f(a,b)}}
function fillArr(e,len){var a=[];for(var i=len-1;i+1;i--)a[i]=e;return a}
function curry(f){
	var interval=[].slice.call(arguments,1);
	return function _(args,i){
		return i<interval.length?
			function(){return _(args.concat([].slice.call(arguments,0,interval[i])),i+1)}:f.apply(null,args)
	}([],0)
}
function partial(f,len,args){return curry(f,args.length,len-args.length).apply(null,args)}
function id(a){return a}
function iif(q,x,y){return q?x:y}
function eq(a,b){return a==b}
function opposite(x){return -x}
function add(y,x){return x+y}
function sub(y,x){return x-y}
function mul(y,x){return x*y}
function div(y,x){return x/y}
function mod(y,x){return x%y}
const pushCtx=curry(call_,[1,3])
