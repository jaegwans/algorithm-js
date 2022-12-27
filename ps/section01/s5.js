//최솟값
function solution(i) {
    let answer;

    const arr = i.split(' ');

    answer = Math.min(...arr);

    return answer;
}

console.log(solution('5 3 7 11 2 15 17'));
