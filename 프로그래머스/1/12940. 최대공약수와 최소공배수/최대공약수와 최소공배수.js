function solution(min, max) {
    let ab = max * min;
    let r;
    
    function gcd(min, max) {
        r = max % min;
        if (r === 0) {
            return [min, ab / min];
        } else {
            return gcd(r, min);
        }
    }

    return gcd(min, max);
}
