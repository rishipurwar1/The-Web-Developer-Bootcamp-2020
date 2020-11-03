const heading = document.querySelector('h1');
const input = document.querySelector('input');
 
input.addEventListener('input', function (e) {
    if (!this.value) {
        heading.innerText = `Enter Your Username`;
    } else {
        heading.innerText = `Welcome, ${this.value}`;
    }
});

// Alternative Solution
let header = document.querySelector('h1');
let input = document.querySelector('input');
 
input.addEventListener('input', () => {
   header.innerHTML =`Welcome, ${input.value}`;
   if (input.value === ""){
       header.innerHTML = 'Enter Your Username';
    }
});