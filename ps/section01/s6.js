function solution(i) {
    let answer;
    // 1. 홀수만 있는 배열 만들기
    const oddArr = i.split(' ').filter((e) => e % 2 != 0);

    // 2.최솟값 추출하기
    const oddArrSum = oddArr.reduce((ac, cv) => Number(ac) + Number(cv));
    console.log(oddArrSum);
    console.log(Math.min(...oddArr));
    return answer;
}

console.log(solution('12 77 38 41 53 92 85'));
