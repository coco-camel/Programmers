function solution(nums) {
  let max = nums.length / 2;
  let uniqueNums = new Set(nums);
  return max > uniqueNums.size ? uniqueNums.size : max;
}
console.log(solution([3, 3, 3, 2, 2, 4]));
