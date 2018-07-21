
function createEvenArray(highestNum) {
    var result = [];
    for(var i = 2; i <= highestNum; i++){
        if(i % 2 === 0){
            result.push(i);
        }
    }
    return result;
}

function addOdds(evensOnlyArray){
    var result = [];
    for(var i = 0; i < evensOnlyArray.length; i++){
        result.push(evensOnlyArray[i] + 1);
    }
    if(evensOnlyArray.length > 0 && evensOnlyArray[0] === 2){
        evensOnlyArray.unshift(1);
    }
    return evensOnlyArray.concat(result);
}

function sortNum(nums) {
    return nums.sort(function(a, b) {return (a-b)})
}
var arr = createEvenArray(10);
var arr1 = addOdds(arr);
arr1 = sortNum(arr1);
console.log(arr1);