// 2652. Sum Multiples

/**
 * @param {number} n
 * @return {number}
 */
const sumOfMultiples = n =>{
    let arr = []
    for (let i = 1; i<= n;i++){
        if(i % 3 === 0 || i % 5 === 0 || i % 7 === 0){
            arr.push(i)
        }
    }
    let init = 0
    return arr.reduce((acc, cur) => acc + cur, init)
};

console.log(sumOfMultiples())
