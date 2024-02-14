function solution(s) {
    let regex = /^[0-9]*$/;
    return s.length === 4 || s.length === 6 ? regex.test(s) : false;
}