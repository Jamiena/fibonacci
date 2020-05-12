'use strict'
const memo = new Map();
memo.set(0,0);
memo.set(1,1);
// 0番目と1番目はこの値で固定されているため、先に宣言しておく

function fib(n) {
    if (memo.has(n)) {
        return memo.get(n);
        // memo配列の中にある数値はそのままreturn
    }

    const value = fib(n-1) + fib(n-2);
    memo.set(n,value);
    return value;
}

const length = 40;
for (let i=0; i <= length; i++) {
    console.log(fib(i));
}