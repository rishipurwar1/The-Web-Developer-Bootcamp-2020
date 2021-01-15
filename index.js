function sumArray(arr) {
    let total = 0;
    for(let i=0; i<arr.length;i++){
        total = total+arr[i];
    }
    return total;
}

//Alternative solution
function sumArray(arr) {
    let total = 0;
    for(let all in arr) {
        total+= arr[all];
    }
    return total;
}
