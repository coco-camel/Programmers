function solution(food) {
    let answer = ''; 
    
    food.shift();
    
    food.forEach((x, y) => {
        x = ~~(x / 2);
        for(let i = 0; i < x; i++){  
        answer += y + 1;
    }})
    
    return answer+"0"+answer.split("").reverse().join("");
}