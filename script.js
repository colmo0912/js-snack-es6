//esercizio uno
//creo un array con 5 oggetti bici

const gruppoBici = [

    
    {nome: "bici1" , peso: 30},
    {nome: "bici2" , peso: 33},
    {nome: "bici2" , peso: 28},
    {nome: "bici3" , peso: 31},
    {nome: "bici4" , peso: 27},
]

console.log(gruppoBici)

//creo un ciclo for per recuperare 
//poi aggiungo i singoli pesi in un array
var pesiBici = [];

for (let i=0; i<gruppoBici.length; i++){

    var pesoBiciSingola = (gruppoBici[i].peso)
    pesiBici.push(pesoBiciSingola)

}

//ordino i numeri dal più piccolo al più grande


pesiBici.sort();
console.log(pesiBici)

//recupero il più piccolo usando la posizione 0
const pesoPiuBasso = pesiBici[0]
console.log(`Il peso più basso tra tutte le bici è ${pesoPiuBasso} kg`)


//esercizio due
//creo array di 5 squadre 

var gruppoSquadre = [

    
    {nome: "squadra1" , punti: 0, falliSubiti: 0},
    {nome: "squadra2" , punti: 0, falliSubiti: 0},
    {nome: "squadra3" , punti: 0, falliSubiti: 0},
    {nome: "squadra4" , punti: 0, falliSubiti: 0},
    {nome: "squadra5" , punti: 0, falliSubiti: 0},

]

//ciclo per prendere gli indici di punti al quale assegno un valore random

for (let i = 0; i<gruppoSquadre.length; i++){
     var puntiSingolaSquadra = Math.floor(Math.random() * 40) + 20
        gruppoSquadre[i].punti = puntiSingolaSquadra 
    
}

//ciclo per prendere gli indici di fallisubiti al quale assegno un valore random

for (let i = 0; i<gruppoSquadre.length; i++){
       var falliSingolaSquadra = Math.floor(Math.random() * 20) + 5
        gruppoSquadre[i].falliSubiti = falliSingolaSquadra 
    
}

var nomi_Squadre = [];
for (let i =0; i<gruppoSquadre.length; i++) {
    var nome = gruppoSquadre[i].nome;
    var falliSubiti = gruppoSquadre[i].falliSubiti;
    console.log(nome);
    console.log(falliSubiti);

    nomi_Squadre.push({nome: nome , falliSubiti: falliSubiti})

}


console.log(nomi_Squadre)




