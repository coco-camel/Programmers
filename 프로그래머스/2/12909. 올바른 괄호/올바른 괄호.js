function solution(s) {
  let answer = true;
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    s[i] === "("
      ? arr.push(s[i])
      : s[i] === ")" && arr.length === 0
      ? (answer = false)
      : arr.pop();
  }

  return arr.length === 0 && answer;
}