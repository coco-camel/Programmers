function solution(phone_number) {
    let slicenum = phone_number.slice(-4);
    let answer = slicenum.padStart(phone_number.length, "*");
    return answer;
}