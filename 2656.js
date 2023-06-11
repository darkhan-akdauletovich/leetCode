// 2656. Maximum Sum With Exactly K Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maximizeSum = (nums, k) => {
    let arr = []
    let cur = 0
    for(let i = 1; i <= k;i++){
        cur = nums.sort((a,b) => a - b).pop()
        arr.push(cur)
        nums.push(cur+ 1)

    }
    return arr.reduce((acc, cur) => acc + cur)

    // let b = nums.sort((a,b) => a - b).pop().push()
    // return b
};

// console.log(maximizeSum([5,5,5], 2))
// let d = [1,2,3,4,5]
// let c = []
// let b = d.pop()
// c.push(b)
// d.push(b+1)
// console.log(d)