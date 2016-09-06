//JavaScript Document

var Points = 0;

function KPS(number){
  Points = Points + number;
  document.getElementById('Points').innerHTML = Points;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

var AntsKilled = 0;
var AntsKPS = 0;
var AntsKPSShow = 0;
var AntsKPSUpgrade = 0;

function StartAnts(){
  var AntsCost = Math.floor(10 * Math.pow(1.05,AntsKPSShow)); //CHANGE VALUES FOR BALANCE

    if(Points >= AntsCost){
      AntsKPS = AntsKPS+1;
      AntsKPSShow = AntsKPSShow+1;
      Points = Points - AntsCost;
      document.getElementById('AntsKPSShow').innerHTML = prettify(AntsKPSShow);
      document.getElementById('Points').innerHTML = Points;
    }
  var NextAntsCost = Math.floor(10 * Math.pow(1.1,AntsKPSShow));//CHANGE VALUES FOR BALANCE
  document.getElementById('AntsCost').innerHTML = NextAntsCost;
}

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
  return output;
}

// KPS counter and action
window.setInterval(function(){
  KPS(AntsKPS *(AntsKPSUpgrade));

}, 1000);
  window.setInterval(function(){
    var KPSShow = (AntsKPS * AntsKPSUpgrade);

    document.getElementById('KPS').innerHTML = prettify(KPSShow);
  }, 10);
