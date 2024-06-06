function solution(priorities, location) {
  let answer = 0;
  let newObj = priorities.map((x, index) => ({ x, index }));

  while (newObj.length > 0) {
    let cur = newObj.shift();
    if (newObj.some((item) => item.x > cur.x)) {
      newObj.push(cur);
    } else {
      answer++;
      if (cur.index === location) {
        return answer;
      }
    }
  }

  return answer;
}