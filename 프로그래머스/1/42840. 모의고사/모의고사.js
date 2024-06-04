function solution(answers) {
  const arr = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (answers[i] === arr[j][i % arr[j].length]) {
        scores[j]++;
      }
    }
  }

  const score = Math.max(...scores);
    
  const result = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] === score) {
      result.push(i + 1);
    }
  }

  return result;
}