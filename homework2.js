function findWater(array) {
    var array = array
    let indexOfRock = [0]

    array.forEach(function (el, i, arr) {
        if (el > arr[i - 1]) {
            indexOfRock.push(i)
        }
    })
 
    let newIndexOfRock = [];
    let distance = null;

    indexOfRock.reduce(function (prev, current, i, arr) {
        if (arr[i + 1]) {
            distance = arr[i + 1] - current
        }
        if (current - arr[i + 1] === -1 || array[current] < array[prev] && array[current] < array[current + distance]) {

        } else {
            newIndexOfRock.push(current)
            return current
        }
    }, 0)
    console.log("distance", distance );
    console.log("newIndexOfRock", newIndexOfRock);
    for (let h = 0; h < newIndexOfRock.length; h++) {
        if (array[newIndexOfRock[h]] < array[newIndexOfRock[h - 1]] && array[newIndexOfRock[h]] < array[newIndexOfRock[h + 1]]) {
            newIndexOfRock.splice(h, 1)
        }
    }

    let arrdepht = []
    let arrStep = []

    for (var i = newIndexOfRock.length; i >= 0; i--) {
        arrStep = newIndexOfRock.slice(i -2, i)
        let oneStep = array.slice(arrStep[0], arrStep[1] + 1)
        if (oneStep.length !== 0) {
         arrdepht.push(oneStep)
        }
    }
    console.log("arrStep", arrStep );
    console.log("arrdepht", arrdepht);
    
    let water = 0

 arrdepht.forEach(function (el) {
        if (el[0] < el[el.length -1]) {
            for (let i = 0; i < el.length -2; i++) {
                water += el[0] - el[i + 1]
            }
        } else {
            for (let i = 0; i < el.length - 2; i++) {
                water += el[el.length - 1] - el[i + 1]
            }
        }
    })
    return water;
}

console.log(findWater([2, 5, 1, 3, 1, 2, 1, 7, 7, 6])) // 17
console.log(findWater([7, 0, 1, 3, 4, 1, 2, 1])) // 9
console.log(findWater([10, 0, 5, 5, 5, 0, 1, 5, 0, 0])) // 14
console.log(findWater([100, 0, 5, 6, 8, 0])) // 13
console.log(findWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])) // 10
console.log(findWater([7, 0, 1, 3, 4, 1, 2, 1])) // 9
console.log(findWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0])) // 10
console.log(findWater([2, 2, 1, 2, 2, 3, 0, 1, 2])) // 4
console.log(findWater([2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8])) // 24
console.log(findWater([2, 2, 2, 2, 2])) // 0
