const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

let spans = document.querySelectorAll('span');
for(let i in colors){
    spans[i].style.color = colors[i];
    console.log(i)
}

#Another Approach

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

for( let i=1;i<=colors.length;i++)
document.querySelector("span:nth-of-type("+i+")").style.color=colors[i-1];
