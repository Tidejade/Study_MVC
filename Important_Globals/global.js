/*
Important Globals

1.console


2.Timers
*/
setTimeout(function(){
	console.log('timeout completed');
}, 1000);
//The setTimeout executes the callback function ONCE after the duration.
setInterval(function(){
	console.log('second passed')
}, 1000);
//The setInterval calls the callback repeatedly after every passing the specified duration.
/*


3.process
  argv.js
  process.nextTick//takes a callback function which is used to put the callback into the next cycle of Node.js event loop.

*/
process.nextTick(function(){
	console.log('next tick');
});
console.log('immediate');
/*
  result:
  immediate
  next tick
*/
//the immediate call is  executed  first .

/*
4.Buffer
Node.js supports all the popular encoding formats like ASCII,UTF8,UTF-16
*/
var str="Hello Buffer World"
var buffer=new Buffer(str,'utf-8');
var roundTrip=buffer.toString('utf-8');

/*
5.global
global.something=123;
make the something as the global variable.
*/