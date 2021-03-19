function sumFibonacci(num, total = [1, 1]) {
    const n = total[total.length - 1] + total[total.length - 2];

    if (n > num) {
        var answer = total
            .filter((item) => {
                return item % 2 != 0;
            })
            .reduce((totalII, filteredItems) => {
                return totalII + filteredItems;
            }, 0);

        return answer;
    }

    total.push(n);

    return sumFibonacci(num, total);
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;