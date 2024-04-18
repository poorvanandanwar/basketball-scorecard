homeEl=document.getElementById("home-btn")
guestEl=document.getElementById("guest-btn")
homeCountEl=document.getElementById("home-count")
guestCountEl=document.getElementById("guest-count")
let homeCount=0
let guestCount=0
function plusone(){
    homeCount+=1;
    homeEl.textContent=homeCount;
}
function plustwo(){
    homeCount+=2;
    homeEl.textContent=homeCount;
}
function plusthree(){
    homeCount+=3;
    homeEl.textContent=homeCount;
}
function plusoneg(){
    guestCount+=1;
    guestEl.textContent=guestCount;
}
function plustwog(){
    guestCount+=2;
    guestEl.textContent=guestCount;
}
function plusthreeg(){
    guestCount+=3;
    guestEl.textContent=guestCount;
}
function save(){
    homeCountEl.textContent+=" "+homeCount+" --"
    guestCountEl.textContent+=" "+guestCount+" --"
    homeCount=0
    guestCount=0
    homeEl.textContent=0
    guestEl.textContent=0
}