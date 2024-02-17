function solution(s) {
    let answer = [];
    let result = [];
    for(let i = 0; i < s.length; i++){
        if(!result.includes(s[i])){
            result.push(s[i]);
            answer.push(-1);
        } else {
            answer.push(i - s.slice(0, i).lastIndexOf(s[i]));
        }
    }
    return answer;
}