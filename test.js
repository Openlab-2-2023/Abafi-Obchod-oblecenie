function najstSlovo (text, znak) {
    var i = 0
    for(var i=0;i < text.length;i++){
        
        if(text===znak) console.log("Znak"+znak + "sa nenasiel na pozicii -"+ i)

        
    }
    
    

              return "znak sa nenasiel"; 
}


function poZadu(slovo){
    var slovoOdzadu = "";
    for(var i =  slovo.length - 1;i >= 0;i--){
        slovoOdzadu += slovo[i];
    }
    return slovoOdzadu ;
}
console.log(poZadu("miro"))

