
const fs = require('fs');

const firstNamesMale = ['Michael', 'Robert', 'Manny', 'Floyd', 'Jan', 'Usain', 'Lionel']
const firstNamesFemale = ['Joanna', 'Serena', 'Lucy', 'Ginny', 'Iga', 'Daniela']
const lastNames = ['Lewandowski', 'Paquiao', 'Mayweather', 'Ryf', 'Bolt', 'Messi', 'Frodeno', 'Jordan']
const genders = [ 'M', 'F'];

const getRandomIndex = arr => Math.floor(Math.random() * (arr.length));

let identitiesArray = [];
const createIdentitiesArray = () => {

  for (let i = 0; i <= 20; i++) {
    let identity = {};
    identity.gender = genders[getRandomIndex(genders)];

    identity.firstName = (identity.gender === 'M') ?
      firstNamesMale[getRandomIndex(firstNamesMale)] :
      firstNamesFemale[getRandomIndex(firstNamesFemale)];

    identity.lastName = lastNames[getRandomIndex(lastNames)];
    identity.age = Math.floor(Math.random() * (78 - 18 + 1)) + 18;
    
    identitiesArray.push(identity);
  }
  return identitiesArray;
};

let data = createIdentitiesArray();
data = JSON.stringify(data);

fs.writeFile('people.json', data, (err) => {
  if (err) {
    console.log('Something went wrong');   
    throw err;
  }
  console.log('File has been successfully generated! Check people.json');
});