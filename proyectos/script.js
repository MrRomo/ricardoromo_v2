class barr {
  constructor(num,progress,colorBase,colorLight) {
    this.percent = progress
    this.num = num;
    this.progressValue = `${progress} %`
    this.top = document.getElementById(`top${num}`)
    this.bottom = document.getElementById(`bottom${num}`)
    this.progress = document.getElementById(`progress${num}`);
    this.colorbase = `#${colorBase}`
    this.colorLight = `#${colorLight}`
  }
}

const constRobot = new barr(0,70,'E74856','E81123')
const progRobot = new barr(1,40,'10893E','107C10')
const apiServer = new barr(2,90,'F7630C','FF8C00')
const mqttServer = new barr(3,50,'4C4A48','7A7574')
const mqttClient = new barr(4,20,'0063B1','0078D7')
const frontend = new barr(5,10,'881798','B146C2')
const deploy = new barr(6,30,'018574','00B294')
const $burgerButton =  document.getElementById('burguer-button');
const $menu =  document.getElementById('menu');
const $sidebar =  document.getElementById('sidebar');
const $logo =  document.getElementById('logo');
const $navButton = document.getElementById('navButton');

var bLazy = new Blazy({selector: 'img'});
var $body = document.body;
var gestos = new Hammer($body);
let barOpen = false;

window.matchMedia('(max-width:590px)').addListener(mediaQuery);
window.matchMedia('(max-width:780px)').addListener(resetResponsive);
$navButton.addEventListener('touchstart', toggleBar);

function toggleBar(){
  // $navButton.classList.toggle('icon-leftarrow')
  $navButton.classList.toggle('rotateArrow')
  $sidebar.classList.toggle('activeNav')
  barOpen = !barOpen
  console.log((barOpen)?'open':'close');
  checkbar()
}
function toggleMenu(){
  $menu.classList.toggle('active')
  $burgerButton.classList.toggle('icon-close')
  $burgerButton.classList.toggle('rotateMenu')
}
function resetResponsive(){
  console.log('removing');
  $sidebar.classList.remove('activeNav')
  $sidebar.classList.remove('activeNavTop')
  $navButton.classList.remove('moveArrow')
  $navButton.classList.remove('rotateArrow')
}
function mediaQuery() {
  if (window.matchMedia('(max-width:590px)').matches) {
    $burgerButton.addEventListener('touchstart', toggleMenu)
    $logo.src="../images/logo-white.jpg";
    $logo.width="100"
    $logo.height="100"
  }
  else {
    $burgerButton.removeEventListener('touchstart', toggleMenu)
    $logo.src="../images/logo.jpg";
    $logo.width="60"
    $logo.height="60"
  }
}
mediaQuery()
gestos.on('swipeleft', function(ev) {
  if (window.matchMedia('(max-width:590px)').matches) {
    $menu.classList.remove('active')
    $burgerButton.classList.remove('icon-close')
  }
});
gestos.on('swiperight', function(ev) {
  if (window.matchMedia('(max-width:590px)').matches) {
    $menu.classList.add('active')
    $burgerButton.classList.add('icon-close')
  }
});
$(function() {
  if (window.matchMedia('(max-width:780px)')) {
    $(window).scroll(()=>{checkbar()})
  }
});
function checkbar() {
  if(($(window).scrollTop() >80)) {
    if (barOpen) {
      $sidebar.classList.add('activeNavTop')
    }else {
      $sidebar.classList.remove('activeNavTop')
    }
    $navButton.classList.add('moveArrow')
  }
  else {
    $sidebar.classList.remove('activeNavTop')
    $navButton.classList.remove('moveArrow')
  }
}

 window.onload = setTimeout(()=>{
   if (document.title == 'Estado Rbot-Explorer - Ricardo Romo') {
     barCharge(constRobot)
     barCharge(progRobot)
     barCharge(apiServer)
     barCharge(mqttServer)
     barCharge(mqttClient)
     barCharge(frontend)
     barCharge(deploy)
   }
 },200)

 function barCharge(objectbarr) {
   objectbarr.top.classList.add('active')
   objectbarr.bottom.classList.add('active')
   objectbarr.progress.innerHTML = objectbarr.progressValue
   objectbarr.progress.style.marginLeft = "20px"
   objectbarr.progress.style.fontSize = "20px"
   objectbarr.bottom.style.width = `${objectbarr.percent}%`
   objectbarr.top.style.margin = `0`
   objectbarr.top.style.background = objectbarr.colorLight
   objectbarr.top.style.zIndex = "1"
   objectbarr.bottom.style.background =objectbarr.colorbase
 }
