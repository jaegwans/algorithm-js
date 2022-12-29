function solution(i) {
    const carLastNum = 0;
    const prohibitionList = i.split(' ').filter((e) => e[1] == carLastNum);

    let answer = prohibitionList.length;

    return answer;
}

console.log(solution('12 20 54 30 87 91 30'));
