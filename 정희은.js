// # 1. 본 예제는 Python 에서 연습하는 고전문제중 하나입니다.
// # 2. def는 javascript에서 function을 의미합니다.
// # 3. print()는 javascript에서 console.log()를 의미합니다.

// # 4. 해당 코드를 유추하여 javascript 방식으로 작성하세요.
// # 5. 해당 코드가 동작하는 의의는 무엇인지 판단하세요.
//* flatten
const example =[[1,2,3 ] , [4,[5,6]],7, [8,9]] ;
function flatten(data){
  let output =[];
  for( let item of data){
    if (Array.isArray(item)) {
      output = output.concat(flatten(item));
      // output = [...output, ...flatten(item)];
    } else {
    output.push(item);
    }
    }
    return output;
    }
    console.log(flatten(example));

