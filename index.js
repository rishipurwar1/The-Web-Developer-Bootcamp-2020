function cleanNames(arr){
    const newArr = arr.map(function(str){
      return str.trim(); 
   })
   return newArr;
}

// Alternative Solution
const cleanNames = arr => {
    return arr.map(name => name.trim())
};

// More cleaner syntax
const cleanNames = arr => arr.map(name => name.trim());