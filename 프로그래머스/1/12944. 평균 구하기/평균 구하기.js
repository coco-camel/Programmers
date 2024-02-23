function solution(arr) {
    let result = 0;
    result = (arr.reduce((acc, cur) => acc + cur)) / arr.length;
    return result;
};