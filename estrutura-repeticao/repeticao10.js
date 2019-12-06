/*function Fibonacci(n){
let a = 0, b = 1, f = 1;
    for(let i = 2; i <= n; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    return f
}
console.log(Fibonacci(10))
*/

//OU

let fib = [0, 1];
for(let i=fib.length; i<5; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 
