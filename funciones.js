/*alert("Hola Mundo")
const deportista={
    nombre: "Messi",
    champions: 4,

};
console.log(JSON.stringify(deportista));
*/
fetch('http://127.0.0.1:5500/pasajero.json').then((response) => response.json()).then(data => console.log(data));