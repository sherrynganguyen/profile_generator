/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/





const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let array = []

rl.question(`what's your name? Nicnames are also acceptable :)`, (name) => {
  array.push(name);

  rl.question(`What's an activity you like doing?`, (activity) => {
    array.push(activity);
      
    rl.question(`What do you listen to while doing that?`, (music) => {
      array.push(music);
        
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (meal) => {
        array.push(meal);
          
         
        rl.question(`What's your favourite thing to eat for that meal?`, (food) => {
          array.push(food);
            
          rl.question(`Which sport is your absolute favourite?`, (sport) => {
            array.push(sport);
              
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superPower) => {
              array.push(superPower);
              
              console.log(`My name is ${array[0]}, My favourite activity is ${array[1]}, I like to listen to ${array[2]}, My favourite meal is ${array[3]} and my favourite food is ${array[4]}. My favourite sport is ${array[5]} and I am best at ${array[6]}`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
