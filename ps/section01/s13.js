function solution(i) {
    //대소문자 스왑
    var answer = '';

    for (x of i) {
        if (x === x.toUpperCase()) {
            answer += x.toLowerCase();
        } else {
            answer += x.toUpperCase();
        }
    }

    return answer;
}

console.log(solution('StuDY'));
