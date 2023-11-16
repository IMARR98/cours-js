// exercice du jour 2 niveau 1

let challenge = '30 Days Of JavaScript';
console.log(challenge)
console.log(challenge.length) // longueur de la chaine
console.log(challenge.toUpperCase()) // la chaine en majuscule
console.log(challenge.toLowerCase()) // miniscule
console.log(challenge.substring(0,2)) //coupez tout
console.log(challenge.substring(3,21))
console.log(challenge.includes('Script'))
console.log(challenge.split(''))
console.log(challenge.split(' '))
console.log(challenge.replace('JavaScript', 'python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))

let mot = "Vous ne pouvez pas terminer une phrase par parce que parce que parce que c'est une conjonction"
console.log(mot.indexOf('parce que'))
console.log(mot.lastIndexOf('parce que'))
console.log(mot.search('parce que'))
console.log(challenge.trim())
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('t'))
console.log(challenge.match('a'))
console.log(challenge.repeat(2))


// exercice du jour 2 niveau 2

console.log('There is no exercise better for the heart than reaching down and lifting people up.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

let nombre = '10'
let resu = +nombre
console.log(resu)

let nombr = '9.85'
let res = parseFloat(nombr)
console.log(res)


function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(getRandomIntInclusive(0, 100))
