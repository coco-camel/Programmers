function solution(number) {
    const n = number.length;
    let count = 0;
    number.sort((a, b) => a - b);


    for (let i = 0; i < n - 2; i++) {
        let left = i + 1;
        let right = n - 1;

        while (left < right) {

            const sum = number[i] + number[left] + number[right];

            if (sum === 0) {
                count++;
                // left++;
                right--;
                if (left === right) {
                    right = n - 1;
                    left++;
                }
            } else {
                right--;
                if (left === right) {
                    right = n - 1;
                    left++;
                }
            }
        }
    }

    return count;
}
