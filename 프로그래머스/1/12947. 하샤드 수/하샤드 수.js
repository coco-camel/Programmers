function solution(x) {
    let answer = x.toString().split("").reduce((i,y) => i + parseInt(y), 0);
    return !(x % answer) ? true : false;
}