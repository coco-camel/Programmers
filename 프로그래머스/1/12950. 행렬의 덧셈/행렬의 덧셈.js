function solution(arr1, arr2) {
    let answer = [];
    for (let i = 0; i < arr1.length; i++) {
        let newArr1 = [];
        for (let j = 0; j < arr1[i].length; j++) {
            newArr1.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(newArr1);
    }
    return answer;
}