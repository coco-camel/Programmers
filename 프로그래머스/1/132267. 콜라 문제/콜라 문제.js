function solution(a, b, n) {
    let answer = 0;
    let coke = n;
    
    while(coke >= a){
        const change = Math.floor(coke / a);
        
        coke = coke - (change * a) + (change * b);

        answer += change * b;
    }
    
    return answer;
}