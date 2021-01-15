function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Alternative Solution
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

//Third Solution
function capitalize(str) {
    let text = "";
    return text+=str[0].toUpperCase() + str.slice(1);
}
