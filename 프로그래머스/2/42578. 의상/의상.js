function solution(clothes) {
  const clothesObj = {};

  clothes.forEach(([item, cate]) => {
    if (clothesObj[cate]) {
      clothesObj[cate]++;
    } else {
      clothesObj[cate] = 1;
    }
  });

  let result = 1;
  for (const cate in clothesObj) {
    result *= clothesObj[cate] + 1;
  }

  return result - 1;
}