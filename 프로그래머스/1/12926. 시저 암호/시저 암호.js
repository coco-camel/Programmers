function solution(s, n) {
    let answer = '';
    for (let i = 0; i < s.length; i++) {
        let num = 0;
        if (s[i] === " ") {
            answer += " ";
        }
        num = s[i].charCodeAt();
        if (num >= 97 && num <= 122) {
            num = s[i].charCodeAt() + n;
            if (num > 122) {
                answer += String.fromCharCode(num - 26);
            } else {
                answer += String.fromCharCode(num);
            }
        }
        if (num >= 64 && num <= 90) {
            num = s[i].charCodeAt() + n;
            if (num > 90) {
                answer += String.fromCharCode(num - 26);
            } else {
                answer += String.fromCharCode(num);
            }
        }
    }
    return answer;
}