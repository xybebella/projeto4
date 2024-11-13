let palavra;

function setup() {
  createCanvas(400, 400);
 palavra = palavraAleatoria();
 
}

function palavraAleatoria(){
   let palavras = ["oceano", "natureza", "sol"];
  return random(palavras);

 }


function inicializaCores(){
background("rgba(245,115,138,0.87)");
  fill ("black");
  textSize(64);
  textAlign(CENTER, CENTER);
  
}

function palavraParcial(minimo, maximo){
   let quantidade = map(mouseX, minimo, maximo, 1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
 }

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  

  
  
  
  
  
  
  
  
  
  
  
  /* if(mouseX < 50){
  let palavra = "o"
  text(palavra, 200, 200);
  } else if (mouseX <100) {
    let palavra = "oc";
    text(palavra, 200, 200);
  }  else if (mouseX <150) {
    let palavra = "oce";
    text(palavra, 200, 200);
}  else if (mouseX <200) {
    let palavra = "ocea";
    text(palavra, 200, 200);
 }  else if (mouseX <250) {
    let palavra = "ocean";
    text(palavra, 200, 200);
}  else if (mouseX <300) {
    let palavra = "oceano";
    text(palavra, 200, 200);
}*/    
}
