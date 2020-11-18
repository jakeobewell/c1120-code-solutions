/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

 function isUnderFive(number) {
   if (number < 5) {
     return true;
   }
   else {
     return false;
   }
 }

 function isEven(number) {
   if (number %2 === 0) {
     return true;
   }
   else {
     return false;
   }
 }

 function startsWithJ(string) {
   if (string[0] === "J") {
     return true;
   }
   else {
     return false;
   }
 }

 function isOldEnoughToDrink(person) {
   if (person.age >= 21) {
     return true;
   }
   else {
     return false;
   }
 }

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  }
  else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH < 7 && pH >= 0) {
    pH = "acid";
  }
  else if (pH === 7) {
    pH = "neutral";
  }
  else if (pH > 7 && pH <= 14) {
    pH = "base";
  }
  else {
    pH = "invalid pH level";
  }
  return pH;
}

function introduceWarnerBro(name) {
  if (name === "yakko" || name === "wakko") {
    catchPhrase = "We're the warner brothers!";
  }
  else if (name === "dot") {
    catchPhrase = "I'm cute~";
  }
  else {
    catchPhrase = "Goodnight everybody!"
  }
  return catchPhrase;
}
