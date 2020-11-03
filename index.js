const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"]; //DONT TOUCH THIS LINE!

// WRITE YOUR LOOP BELOW THIS LINE:
people.forEach(name => console.log(name.toUpperCase()));

// Alternative Solution
for (let i=0; i<people.length; i++) {
    console.log (people[i].toUpperCase());
}