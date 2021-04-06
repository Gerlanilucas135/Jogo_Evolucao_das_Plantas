var textInst = ("- O objetivo do jogo é que por meio do quiz os usuários consigam compreender de forma interativa quais as principais características de cada fase na evolução das plantas." + "\n" + "- O jogo conterá 5 níveis" + "\n" + "- Será necessário apenas o uso do mouse para que o usuário consiga jogar"  + "\n" + " - Para voltar à tela inicial poderá apenas apertar o botão “Esc”  do teclado.") 
var font;
var imgeduc;
var imgpro;
var imgmenu2;
var imgfase1;
var imgvidas;

var xMinBot1 = 25;
var largurabot = 220;
var xMaxBot1 = xMinBot1 + largurabot
var yMinBot = 340;
var alturabot = 50;
var yMaxBot = yMinBot + alturabot;

var xMinBot2 = 270;
var xMaxBot2 = xMinBot2 + largurabot;

var xMinBot3 = 505;
var xMaxBot3 = xMinBot3 + largurabot;

var xMinBotVol = 500;
var xMaxBotVol = xMinBotVol + largurabot;
var yMinBotVol = 349;
var yMaxBotVol = yMinBotVol + alturabot;
var alturabotVol = 35;

var nivel = 1;

var tela = 0; 
//Tela = 1 é a tela de instruções, tela = 2 é créditos e tela == 3 é fase1

var pontos = 0;



function preload(){
font = loadFont("Audiowide-Regular.ttf")
imgeduc = loadImage("Malu_jogo1.png")
imgpro = loadImage("gerlani_jogo.png")
imgmenu2 = loadImage("Background_Menu2.png")
imgfase1 = loadImage("Background_fase1.png")
imgvidas = loadImage("vidas.png")
}


function setup() {
  createCanvas(736, 414); 
}


function menuBotao(texto, xMin, xMax, opcao){
    //Botão1 - Instruções
    if(mouseX >xMin && mouseX < xMax && mouseY > yMinBot && mouseY < yMaxBot){
      noFill();
      if(mouseIsPressed){
        tela = opcao;
      }
    }
    else {
      fill(177,217,186)
    }
    rect(xMin, yMinBot, largurabot, alturabot, 10);
    textSize(36);
    textFont(font);
    fill(0)
    text(texto, xMin+5, yMinBot, largurabot, alturabot);
}

function botaoVoltar(xMin, xMax, yMin, yMax, opcao){

  if(mouseX >xMin && mouseX < xMax && mouseY > yMin && mouseY < yMax){
    noFill();
    if(mouseIsPressed){
      tela = opcao;
    }
  }
  else {
    fill(102,42,37)
  }
  rect(xMin, yMin, largurabot - 100, alturabotVol, 10);
  textSize(28);
  textFont(font);
  fill(238,241,241)
  text("Voltar", xMin+5, yMin, largurabot - 100, alturabotVol);
}

function telamenu(){
  background(imgmenu2);
  textSize(48);
  fill(66, 37, 34);
  textFont(font);
  text("Evolução das plantas", 190, 60, 380);
  textAlign(CENTER)

menuBotao("Instrução", xMinBot1, xMaxBot1, 1);
menuBotao("Céditos", xMinBot2, xMaxBot2, 2);
menuBotao("Iniciar", xMinBot3, xMaxBot3, 3);
}

function telainst() {
  background(77, 189, 95);
  textSize(48);
  fill(66, 37, 34);
  textFont(font);
  text("INSTRUÇÕES", 360, 78);
  textSize(18);
  fill(66, 37, 34);
  textFont(font);
  textLeading(30);
  text(textInst, 40, 130, 647);
  textAlign(CENTER);

  botaoVoltar(xMinBotVol, xMaxBotVol, yMinBotVol, yMaxBotVol, 0)
}

function telacred(){
  background(77, 189, 95);
  textSize(48);
  fill(66, 37, 34);
  textFont(font);
  text("CRÉDITOS", 420, 78);
  textStyle(BOLD)
  textSize(24);
  fill(66, 37, 34);
  textFont(font);
  text("Marialuysa de Araújo Soares", 420, 125);
  textSize(13);
  fill(255, 255, 255);
  textFont(font);
  text("FUNÇÃO: Educadora", 420, 150);
  textSize(12);
  fill(255, 255, 255);
  textFont(font);
  text("Está cursando sua licenciatura em Ciências Biólogicas na Universidade Federal do Rio  Grande do Norte, já fez parte do Programa de Bolsa de Iniciação à Docência (PIBID Biologia). Além disso, a sua formação  profissional para a área da botânica, biologia marinha e biologia forence.  É   apaixonada pela docência e possui isso como sua prioridade.", 180, 165, 470);
  image(imgeduc, 10, 95,);
  textSize(24);
  fill(66, 37, 34);
  textFont(font);
  text("Gerlani da Silva Lucas", 420, 290);
  textSize(13);
  fill(255, 255, 255);
  textFont(font);
  text("FUNÇÃO: Progamadora", 420, 315);
  textSize(12);
  fill(255, 255, 255);
  textFont(font);
  text("Está cursando sua o Bacharelado Interdisciplinar em ciências  e  Tecnologia na Universidade Federal do Rio grande do Norte.", 180, 330, 470);
  image(imgpro, 10, 250)

  botaoVoltar(xMinBotVol, xMaxBotVol, yMinBotVol+10, yMaxBotVol, 0)
}

function fase1() {
  background(imgfase1);
  image(imgvidas, 188, 60);
  image(imgvidas, 222, 60);
  image(imgvidas, 257, 60);
  textSize(24)
  fill(66, 37, 34)
  text(pontos, 450, 85, 25)
  fill("rgba(66, 37, 34, 0.7)")
  rect(45, 141, 656, 123, 20);
  textLeading(50);
  textSize(22);
  fill(238,241,241);
  textFont(font);
  text("Nesta fase, vamos olhar para suas características  morfológicas. Você é conhecida por fazer parte de uma classificação de vegetais mais simples" + "\n" + "Por quê?", 56, 170, 630);
  textAlign(CENTER); 

  botaoVoltar(20, xMaxBotVol, 2, 15, 0)

// botão da resposta1
  fill(177,217,186)
  rect(45, 290, 178, 98, 10)
  textSize(14);
  fill(0);
  textFont(font);
  text("por possuir apenas um tipo de vaso" + "\n" + "condutor", 55, 325, 158)
// botão da resposta2
  fill(177,217,186)
  rect(279, 290, 178, 98, 10)
  textSize(14);
  fill(0);
  textFont(font);
  text("por ser avascular e de pequeno porte,  com pequenos" + "\n" + "cloroplastos", 290, 320, 158)
// botão da resposta3
  fill(177,217,186)
  rect(512, 290, 178, 98, 10)
  textSize(14);
  fill(0);
  textFont(font);
  text("por somente" + "\n"+ "produzir" + "\n" + "sementes para se  reproduzir", 530, 320, 150)
}

function draw() {
  if(tela == 0){
   telamenu()
  }
 if(tela == 1){
    telainst();
  }
  if(tela == 2){
    telacred();
  }
  if(tela == 3){
    if(nivel == 1){
      fase1();
    }
  }
 
}