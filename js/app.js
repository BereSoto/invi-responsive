var consulta= window.matchMedia("(max-width: 500px)")
consulta.addListener(mediaQuery);

var $burguerButton = document.getElementById("burguer-button");
var $menu = document.getElementById("menu");
function toggleMenu(){
  $menu.classList.toggle("active")
};
function showMenu(){
  $menu.classList.add("active");
};
function hideMenu(){
  $menu.classList.remove("active");
};

function mediaQuery(){
if(consulta.matches){
  console.log("se cumplio la condicion");
  $burguerButton.addEventListener("touchstart", toggleMenu);
}else{
  $burguerButton.removeEventListener("touchstart", toggleMenu);
  console.log("no se cumplio la condicion");
  }
}
mediaQuery();

//blazy
var bLazy = new Blazy({
    selector:'img'
});

//$burguerButton.addEventListener("touchstart", toggleMenu);

//function toggleMenu(){
//  $menu.classList.toggle("active")
//};

// gestos touch hammerjs
var $body = document.body;

var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on("swiperight", showMenu);
