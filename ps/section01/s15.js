function solution(i) {
    // 가운데 문자 출력

    const middle = Math.floor(i.length / 2);

    if (i.length % 2 === 1) {
        return i[middle];
    } else {
        return i[middle - 1] + i[middle];
    }
}

console.log(solution('good'));
