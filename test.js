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