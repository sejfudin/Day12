function sumFibonacci(num) {
    if (num <= 0) {
        return 0;
    }
    if (num === 1) {
        return 1;
    }
    var sum = 0;

    function fib(counter) {
        if (counter === 2) {
            return [1, 1];
        } else {
            const countArray = fib(counter - 1);
            countArray.push(countArray[countArray.length - 2] + countArray[countArray.length - 1]);
            return countArray;
        }
    }

    var fibArray = fib(num);
    for (var i = 0; fibArray[i] <= num; i++) {
        if (fibArray[i] % 2 !== 0) {
            sum += fibArray[i];
        }
    }
    return sum;
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;