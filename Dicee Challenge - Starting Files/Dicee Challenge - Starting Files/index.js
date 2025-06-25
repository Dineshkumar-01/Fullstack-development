var f=Math.ceil(Math.random()*6);
document.querySelector(".img1").setAttribute("src","./images/dice"+f+".png");
var s=Math.ceil(Math.random()*6);
document.querySelector(".img2").setAttribute("src","./images/dice"+s+".png");
if(f>s){
    document.querySelector("h1").textContent="Player 1 Wins 🎲";
}
else if(s>f){
    document.querySelector("h1").textContent="Player 2 Wins 🎲";
}
else{
    document.querySelector("h1").textContent="Refresh Me";
}