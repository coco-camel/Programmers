function solution(left, right) {
    var answer = 0;
    for (left; left <= right; left++) {
        answer += solution1(left);
    }
    return answer;
}

function solution1(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }
    return result.length % 2 === 0 ? num : -num;
}