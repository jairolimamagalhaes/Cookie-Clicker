var Ps = 0.05,  FP = 100, CP = 15 , q = 1,a = 0
cookie();
var C = document.getElementById("Cursor")
C.addEventListener('mouseenter',infoCe)
C.addEventListener('mouseout',infoCs)
var CI = document.getElementById("InfoCursor")
var CB = document.getElementById("BuyCursor")
CB.addEventListener('click',buyC)
var N = document.getElementById("Num")
var d = document.getElementById("Area")
d.addEventListener('click',clica)
d.addEventListener('mouseenter',entra)
d.addEventListener('mouseout',sai)
d.addEventListener('mousedown',tam)
var F = document.getElementById("Func")
F.addEventListener('mouseenter',infoFe)
F.addEventListener('mouseout',infoFs)
var FI = document.getElementById("InfoFunc") 
var FB = document.getElementById("BuyFunc")
FB.addEventListener('click',buyF)

function cookie(){
    a = Number(localStorage.getItem("Cookie"))
}
const autoCookie = setInterval(() => {
    a += Ps
    N.innerText = `Cookies clicados : ${a.toFixed(1)}`
}, 1000)
function infoCe(){
    CI.innerHTML = "Comprando isso, você obterá 1.5X mais Cookies"
}
function infoCs(){
    C.style.float = "none";
    CI.innerHTML = ""
}
function buyC(){
    if(CP <= a){
        a -= CP;
        CP *= 3.5
        q *= 1.5
        CB.innerHTML = "Comprar : "
        CB.innerHTML += CP
        localStorage.setItem("ValorF",FP)
        localStorage.setItem("Ps",Ps)
        NvlCursor +=1
        localStorage.setItem("NvlC",NvlCursor)
    }
}
function infoFe(){
    FI.innerHTML = "Comprando isso, você obterá mais " + Ps*2 + " Cookies por segundo"
}
function infoFs(){
    
    FI.innerHTML = ""
}
function buyF(){
    if(FP <= a){
        a -= FP;
        FP *= 4
        Ps *= 2
        FB.innerHTML = "Comprar : "
        FB.innerHTML += FP
        
    }
}
function entra(){
    d.style.cursor = "grab"
}
function sai(){

    d.style.width = "350px";
}
function clica(){
    d.style.width = "500px";
    a += q
    localStorage.setItem("Cookie",a)
    N.innerText = `Cookies clicados : ${a.toFixed(1)}`
}
function tam(){
    d.style.width = "450px";
}
