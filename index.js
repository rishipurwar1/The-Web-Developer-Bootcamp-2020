// DEFINE YOUR FUNCTION BELOW:
function lastElement(arr) {
    if(arr.length === 0) {
        return null;
    } else {
        return arr[arr.length - 1];
    }
}

// Alternative Solution
const lastElement = arr => arr.length ? arr[arr.length - 1] : null;