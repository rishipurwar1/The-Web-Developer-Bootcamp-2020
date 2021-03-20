// DEFINE YOUR FUNCTION:
function rant(message){
    for(let i = 0; i<3; i++){
        console.log(message.toUpperCase());
    }
}


This works too: 
function rant(message){
    message = message.toUpperCase();
    console.log(`${message}`);
    console.log(`${message}`);
    console.log(`${message}`);
    
}
