/*
function najstSlovo (text, znak) {
    var i = 0
    for(var i=0;i < text.length;i++){
        
        if(text[i]=== znak) 
        return("Znak"+ znak + "sa nasiel na pozicii -" + i);

        
    }
    
    return "znak sa nenasiel";

            
}
    console.log(najstSlovo("jaro" , "r"))

function poZadu(slovo){
    var slovoOdzadu = "";
    for(var i =  slovo.length - 1;i >= 0;i--){
        slovoOdzadu += slovo[i];
    }
    return slovoOdzadu ;
}
console.log(poZadu("miro"))

function vyskyt(text ,znak){
var o = 0;
for(var i = 0;i< text.length;i++){
if(text[i]===znak){
o++;
}

}    
return o;
}
console.log(vyskyt("jojo"))

function factorial (cislo){
    var vypocet = 1;
    for ( var i= cislo-1; i<= cislo; i++){
        vypocet = cislo * i;
    }
    return vypocet
}
console.log(factorial(5))

function postupnost(x){
let a = 0; b=1;
console.log("")
for(var i = 0; b <= cislo; i++){
    var newA = b;
    b= a+b;
    console.log(b);
    a= newA
}
}


async function countdown(odpocitaj){
    while (odpocitaj > 0){
        console.log(odpocitaj--);
        await delay(1000)

    }
}
countdown(10);
*/
function guessNumber(cislo){
var userInput = 0;
while(userInput !== cislo){
    userInput = parseInt(prompt("Zadajte cislo:"))
    if(userInput > cislo) console.log()
}
}

guessNumber(10);

function hangman(word) {
    var guessedWord = Array(word.length).fill('_'), lives = word.length, guessedLetters = new Set();
    while (lives > 0 && guessedWord.join('') !== word) {
        var guess = prompt(`Slovo: ${guessedWord.join(' ')}\nZadajte znak:`);
        if (!guess || guess.length !== 1 || guessedLetters.has(guess)) continue;
        guessedLetters.add(guess);
        if (word.includes(guess)) word.split('').forEach((c, i) => c === guess && (guessedWord[i] = c));
        else lives--;
        alert(guessedWord.join('') === word ? `Gratulujem! Slovo: ${word}` : `Životy: ${lives}`);
    }
    alert(`Koniec! Slovo bolo: ${word}`);
}

hangman("javascript");

function sumaa(numbers) {
    var suma = 0;
    for (let i = 0; i < numbers.length; i++) {
        suma += numbers[i];
    }
    return suma;
}

console.log(sumArray([5, 10, 15, 20]));

function najdlhsieSlovo(words) {
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}

let words = ["apple", "banana", "strawberry", "kiwi"];
console.log(findLongestWord(words));

function filter(cislo){
    var userInput = 0;
    while(userInput !== cislo){
        userInput = parseInt(prompt("Zadajte cislo:"));
        if(userInput > cislo) {
            console.log("Zadané číslo je väčšie ako hľadané.");
        } else if (userInput < cislo) {
            console.log("Zadané číslo je menšie ako hľadané.");
        } else {
            console.log("Správne! Zadané číslo je: " + cislo);
        }
    }
}

filter(10);

function odstranit(numbers) {
    var uniqueNumbers = [];
    for(var i = 0; i < numbers.length; i++){
        var found = false;
        for(var j = 0; j < uniqueNumbers.length; j++){
            if(numbers[i] === uniqueNumbers[j]){
                found = true;
                break;
            }
        }
        if(!found) uniqueNumbers.push(numbers[i]);
    }
    return uniqueNumbers;
}

console.log(odstranit([1, 2, 2, 3, 4, 4, 5])); 
