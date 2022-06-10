const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

let spans = document.querySelectorAll('span');
for(let i in colors){
    spans[i].style.color = colors[i];
    console.log(i)
}
//Second Methord
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

for(let i=0; i<colors.length;i++){
   (document.querySelectorAll('span'))[i].style.color=colors[i]; 
}


