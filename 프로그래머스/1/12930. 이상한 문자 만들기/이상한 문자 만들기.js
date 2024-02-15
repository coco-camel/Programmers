function solution(s) {
    var result = "";

    for (var word of s.split(" ")) {
        for (var i in word) {
            if (i % 2 === 0) {
                result += word[i].toUpperCase();
            } else {
                result += word[i].toLowerCase();
            }
        }
        result += " ";
    };

    return result.slice(0, -1);
}