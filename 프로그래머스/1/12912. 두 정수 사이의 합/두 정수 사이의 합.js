function solution(a, b) {
    let answer = 0;
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    for (min; min <= max; min++){
        answer+=min;
    }
    return answer;
}