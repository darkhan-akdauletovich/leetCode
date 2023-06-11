// 2660. Determine the Winner of a Bowling Game

/**
 * @param {number[]} player1
 * @param {number[]} player2
 * @return {number}
 */
const isWinner = (player1, player2) => {
    let foundTen1 = false
    let foundTen2 = false

    
    let result1 = player1.map((one) => {
        if(one === 10){
            foundTen1 = true;
        }
        if(foundTen1 && one !== 10){
            return one * 2
        } else {
            return one
        }
    })
    let result2 = player2.map((one) => {
        if(one === 10){
            foundTen2 = true;
        }
        if(foundTen2 && one !== 10){
            return one * 2
        } else {
            return one
        }
    })
    result1 = result1.reduce((acc, cur) => acc + cur)
    result2 = result2.reduce((acc, cur) => acc + cur)
    if ( result1 > result2){
        return 1
    } else if (result1 < result2){
        return 2
    } else {
        return 0
    }
    
};

console.log(isWinner([7,8,8,5,2], [10,1,4,2,6]))
