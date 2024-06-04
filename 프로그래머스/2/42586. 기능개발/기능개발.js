function solution(progresses, speeds) {
  let answer = [];
  let result = [];
  for (let i = 0; i < progresses.length; i++) {
    answer.push(Math.ceil((100 - progresses[i]) / speeds[i]));
  }

  for (let i = 0; i < answer.length; i++) {
    let count = 1;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[i] >= answer[j]) {
        count++;
      } else {
        break;
      }
    }
    result.push(count);
    i = i + count - 1;
  }

  return result;
}