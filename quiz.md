Question-1
"Pajama Squid" is logged to the console because the animal variable is defined inside of the function's scope prior to being logged with console.log(). The function has no knowledge of the animal variable that is defined outside of it.

Question-2
"Spanish Dancer" is logged to the console for the same reason that "Pajama Squid" was logged in the first question.

Question-3
"Scorpionfish"
"Blue-Ringed Octopus"
are logged to the console because the console.log() inside of the function will execute first and use the deadlyAnimal variable defined within the scope of the function, then the console.log() outside of the function will execute and log the value of the deadlyAnimal variable that was defined outside of the function's scope.
