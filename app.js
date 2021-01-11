const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

let spans = document.querySelectorAll('span');
for(let i in colors){
    spans[i].style.color = colors[i];
}
