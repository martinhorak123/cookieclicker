
const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cookieMultiplier = document.getElementById("cookieMultiplier");
const cookieMultiplier2 = document.getElementById("cookieMultiplier2");
const info = document.getElementById("info");
const autoclickerButton =document.getElementById("autoclickerButton")

let numberOfCookie = 0;
let cookieIncrease = 1;
let autoclickerPrize=100;
let autoclickerIncrease=0;

cookie.onclick = () => {
 numberOfCookie += cookieIncrease;
counter.innerHTML = numberOfCookie;
};

cookieMultiplier.onclick = () => {
 if (numberOfCookie >= 50) {
numberOfCookie -= 50;
 cookieIncrease++;
counter.innerHTML = numberOfCookie;
let t =cookieIncrease -1;
     info.innerHTML=`You bought new upgrade ${t}x`
 }
};

autoclickerButton.onclick=() =>{
 if(numberOfCookie >=autoclickerPrize){
 numberOfCookie -= autoclickerPrize;
 counter.innerHTML=numberOfCookie;
 autoclickerPrize *= 2;
 autoclickerButton.innerHTML=`You bought new auto clicker ${autoclickerPrize}`

 if(autoclickerIncrease == 0){
    setInterval(() =>{
      numberOfCookie += autoclickerIncrease;
     counter.innerHTML=numberOfCookie;
 },1000 );
      }
     autoclickerIncrease++;
}
}





