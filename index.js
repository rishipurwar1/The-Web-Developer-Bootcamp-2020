function validUserNames(strArr){
	const filterArr = strArr.filter(function(names) {
	    return names.length < 10;
        });
        return filterArr;
}

// Solution using arrow function
const validUserNames = (strArr) => {
    const filterArr = strArr.filter(names => {
	    return names.length < 10;
        });
        return filterArr;
}

// using implicit return 
const validUserNames = strArr =>  strArr.filter(names => names.length < 10);