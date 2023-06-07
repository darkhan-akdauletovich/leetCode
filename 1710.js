// 1710. Maximum Units on a Truck

/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    boxTypes = boxTypes.sort(([a, b], [c, d]) => d - b)
    const rep = []
    const count = 0
    boxTypes.forEach(([i,j]) => {
        return rep.push(Array(i).fill(j))
    })
    let rep2 = rep.flat().slice(0, truckSize).reduce((a,b) => a + b, count)
    return rep2
};

// let boxTypes = [[1,3],[2,2],[3,1]];
// let b = [[5,10],[2,5],[4,7],[3,9]];

// let a = b.sort(([a, b], [c, d]) => d - b)
// // console.log(a)

// const rep = []
// a.forEach(([i,j]) => {
//     return rep.push(Array(i).fill(j))
// })

// let rep2 = rep.flat().slice(0, 10)
// const d = 0
// console.log(rep2.reduce((a,b) => a + b, d))

