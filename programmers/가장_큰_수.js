function solution(numbers) {
    //첫자리가 가장 큰 수부터 정렬
       var answer = '';
         
    numbers.sort(
        (
            (a,b)=>(
                Number(String(b)+String(a))-Number(String(a)+String(b))
            )
        )
    )
                  
 

    //34 30  3

    numbers.map((x)=> answer = answer+x)
 
    return answer[0]!== '0' ? answer : '0';
}