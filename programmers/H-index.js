// h번 이상 인용된 논문이 h편 이상
// h의 최댓값 : H-index
//즉 각 배열의 요소들 중 h값 이상의 요소가 h개 이상이다.니머지는 이하
//h는 최대값으로 h를 구하라
//5,4,3,2,1,
function solution(c) {
    var answer = 0;
    c.sort((a, b) => b - a);
    console.log(c);
    for (let i = c[0]; i != -1; i--) {
        let count = 0;
        for (y of c) {
            if (y >= i) {
                count++;
            }
        }
        if (count >= i) {
            return i;
        }
    }

    return answer;
}
