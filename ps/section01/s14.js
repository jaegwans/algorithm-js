function solution(i) {
    // 가장 긴 문자열

    const indexArr = [];

    for (x of i) {
        indexArr.push(x.length);
    }
    const maxIdx = indexArr.indexOf(Math.max(...indexArr));

    return i[maxIdx];
}

console.log(solution(['5', 'teacher', 'time', 'student', 'beautiful', 'good']));
