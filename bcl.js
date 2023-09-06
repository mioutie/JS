// var n;
// n = prompt("veuillez entrer un nombre n=");
// for( i=0; i<=10; i++){
//     document.write(n*1 + "<br>")
// }
var n;
var resultat;
var compteur= 0;
resultat=0;
n = prompt("veuillez entrer un nombre entier n=");
while(resultat < 1000){
    resultat = n*compteur;
    compteur= compteur +1;
    document.write(resultat + "<br>");
}