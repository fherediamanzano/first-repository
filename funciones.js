/*alert("Hola Mundo")*/
/*
const deportista={
    nombre: "Messi",
    champions: 4,

};
console.log(deportista); 
*/
/*Ahi lo muestra comun en consola*/

/*si lo quiero mostrar como json*/
/*
const deportista={
    nombre: "Messi",
    champions: 4,

};
console.log(JSON.stringify(deportista)); 
*/
/*Ahi lo muestra comun en consola*/


fetch('http://127.0.0.1:5500/pasajero.json').then((response) => response.json()).then((data) => console.log(data));