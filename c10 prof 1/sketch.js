// array e matrizes é uma variiavel que permite armazenar varios valores
//indice/index    [0]        [1]        [2]      [3]                  
var jogarBola=["chutar","fazer gol","defender","cabeçear"]
console.log(jogarBola)
console.log(jogarBola[1])
/// push para acrescentar novos elementos no array
jogarBola.push("falta");
jogarBola.push("driblar");
jogarBola.push("correr")
console.log(jogarBola)
//pop para remover o ultimo elemento do array
jogarBola.pop();
console.log(jogarBola);
//delete remove um elemento mais continua com o espaço no array
delete jogarBola[3];
console.log(jogarBola)
//splice deleta totalmente o elemento do array
jogarBola.splice(4,1);
console.log(jogarBola);
// acrescenta um elemento especifico no array
jogarBola[3]="cortar";
console.log(jogarBola);


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  dawSprites();
}































