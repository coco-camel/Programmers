function solution(arr) {
    let answer = [];
    arr.splice(arr.indexOf(Math.min(...arr)), 1);

    return arr.length <= 1 ? answer = [-1] : answer = arr;
}