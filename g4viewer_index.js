//variables
//const let var zenzen siranai 
const hako= document.getElementById("hako");
const ue= document.getElementById("ue");
const dropzones= document.getElementById("dropzones");
const naka= document.getElementById("naka");
const migi= document.getElementById("migi");
const hidari= document.getElementById("hidari");
const sita= document.getElementById("sita");
const sitabar= document.getElementById("sitabar");
const scrollbar= document.getElementById("scrollbar");

const drop1=document.getElementById("drop1");
const drop2=document.getElementById("drop2");
const drop3=document.getElementById("drop3");
const drop4=document.getElementById("drop4");

const img1=document.getElementById("img1");
const img2=document.getElementById("img2");
const img3=document.getElementById("img3");
const img4=document.getElementById("img4");
const defsrc="https://i.imgur.com/wbEPdz9.png"

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");
const pages=[page1, page2, page3, page4]
var touchmovesitaflag=0;
var currentindex=0;

const nakaoverlay=document.getElementById("nakaoverlay");
const nakabutton1=document.getElementById("nakabutton1");
const nakabutton2=document.getElementById("nakabutton2");
const nakabutton3=document.getElementById("nakabutton3");
let nakabutton2flag=0;

//styling
//id de dekiru no ha tabun js dake
//css nannka yada
window.onload = function(){  
  var style= hako.style;
  //style.width= "100%";
  //var h = hako.offsetWidth*91/64
  //style.height= h + "px";
  style.height= "80%";
  var w = hako.offsetHeight*64/91; //koko dake ChatGPT ni oshiete moratta
  console.log(w);
  style.width=parseInt(w)+"px";
  style.position= "relative";
  style.display="flex";
  style.overflow= "hidden";
  var style = nakaoverlay.style;
  style.width= "100%";
  style.height= "100%";
  style.position="absolute";
  style.display="flex";
  var style = nakabutton1.style;
  style.width= "25%";
  style.height= "100%";
  style.display="flex";
  style.setProperty("z-index", "0");
  var style = nakabutton2.style;
  style.width= "50%";
  style.height= "100%";
  style.display="flex";
  style.setProperty("z-index", "0");
  var style = nakabutton3.style;
  style.width= "25%";
  style.height= "100%";
  style.display="flex";
  style.setProperty("z-index", "0");
  
  var style= naka.style;
  style.width= "100%";
  style.height= "100%";
  style.position= "absolute";
  style.display="flex";
  style.setProperty("z-index", "-1");
  var style= ue.style;
  style.position= "absolute";
  style.width= "100%";
  style.height= "10%";
  style.setProperty("background", "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))");
  style.setProperty("z-index", "1");
  var style= sita.style;
  style.width= "100%";
  style.height= "15%";
  style.position= "absolute";
  style.bottom="0";
  style.setProperty("z-index", "1");
  style.setProperty("background", "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9))");
  var style= dropzones.style;
  style.width= "100%";
  style.height= "100%";
  style.position= "absolute";
  style.display="flex";
  style.setProperty("z-index", "2");
 var style= scrollbar.style;
  style.width= "100%";
  style.height= "30%";
  style.backgroundColor= "gray";
  style.display="none";
  style.opacity="0.6";
  
  var style=drop1.style;
  style.width="17%"
  var style=drop2.style;
  style.width="33%"
  var style=drop3.style;
  style.width="33%"
  var style=drop4.style;
  style.width="17%"
  
  var style=page1.style;
  style.width="5%";
  style.height=page1.offsetWidth+"px"
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="2%";
  style.setProperty("z-index", "3");
  var style=page2.style;
  style.width="5%";
  style.height=page2.offsetWidth+"px"
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="33%";
  style.display="none"
  style.setProperty("z-index", "3");
  var style=page3.style;
  style.width="5%";
  style.height=page3.offsetWidth+"px"
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="66%";
  style.display="none"
  style.setProperty("z-index", "3");
  var style=page4.style;
  style.width="5%";
  style.height=page4.offsetWidth+"px"
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.left="2%";
  style.display="none"
  style.setProperty("z-index", "3");
  
  var style= img1.style;
  style.width="100%"
  img1.src=defsrc;
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="0%"
  
  var style= img2.style;
  style.width="100%"
  img2.src="https://i.imgur.com/jWGOFkP.png";
  style.position= "absolute";
 style.right="100%"; 
  style.setProperty("float", "right");
  
  var style= img3.style;
  style.width="100%"
  style.position= "absolute";
 style.right="200%"; img3.src="https://i.imgur.com/sE3XVlT.png";
  style.setProperty("float", "right");
  
  var style= img4.style;
  style.width="100%"
  style.position= "absolute";
  style.right="300%";
  img4.src="https://i.imgur.com/4ISaQvC.png";
  style.setProperty("float", "right");
  
}

function nakaanimate(index){
  var rightPercent = index*-100+"%";
  naka.animate(
      [{ right: rightPercent }],
      { duration: 200, fill: "forwards" }
    );
    currentindex = index;
} 
function dragstart(index){
  return (event) => {
  touchmovesitaflag=1
  pages[index].style.opacity="0.7";
  scrollbar.style.display="block";
  }
}
function dragend(index){
  return (event) => {
  touchmovesitaflag=0
  pages[index].style.opacity="1";
  scrollbar.style.display="none";
  }
}
function indexrightpercent(index, rightPercent){
  return (event) => {
    event.preventDefault();
    pages.forEach(page => page.style.display = "none");
    pages[index].style.display = "block";
    nakaanimate(index)
  };
}


pages.forEach((page, i) => {
  page.addEventListener("dragstart", dragstart(i));
  page.addEventListener("dragend", dragend(i));
});
pages.forEach((page, i) => {
  page.addEventListener("touchstart", dragstart(i));
  page.addEventListener("touchend", dragend(i));
});
function touchmovesita(event){
  event.preventDefault();
  if(touchmovesitaflag===0) return;
    const touch = event.touches[0]; 
    const rect = hako.getBoundingClientRect();
    const x = touch.clientX - rect.left; // x position relative to hako
    const width = rect.width;
    
    // Determine which page index the touch is over
    let index, rightPercent;
    if (x < width * 0.17) {          // drop4 area
        index = 3;
        rightPercent = "-300%";
    } else if (x < width * 0.50) {   // drop3 area
        index = 2;
        rightPercent = "-200%";
    } else if (x < width * 0.83) {   // drop2 area
        index = 1;
        rightPercent = "-100%";
    } else {                         // drop1 area
        
        index = 0;
        rightPercent = "0%";
    }

    pages.forEach(page => page.style.display = "none");
    pages[index].style.display = "block";

    nakaanimate(index)
}
drop1.addEventListener("dragover", indexrightpercent(3, "-300%"));
drop2.addEventListener("dragover", indexrightpercent(2, "-200%"));
drop3.addEventListener("dragover", indexrightpercent(1, "-100%"));
drop4.addEventListener("dragover", indexrightpercent(0, "0%"));
//drop1.addEventListener("touchmove", indexrightpercent(3, "-300%"));
//drop2.addEventListener("touchmove", indexrightpercent(2, "-200%"));
//drop3.addEventListener("touchmove", indexrightpercent(1, "-100%"));
//drop4.addEventListener("touchmove", indexrightpercent(0, "0%"));
sita.addEventListener("touchmove", touchmovesita);
function nakabutton2func(a, b, c){
  return (event) => {
    ue.animate(  
    [{ top: a }],
    { duration: 500, fill: "forwards", easing: "ease-out"}
    );
    sita.animate(  
    [{ bottom: b }],
    { duration: 500, fill: "forwards", easing: "ease-out"}
    );
    nakabutton2flag=c;
  }
}
nakabutton2.addEventListener("click", (event) => {
  if (nakabutton2flag===1){
    nakabutton2func("0%", "0%", 0)(event);
  }else{
    nakabutton2func("-10%", "-15%", 1)(event);
  }
});
nakabutton2.addEventListener("touch", (event) => {
  if (nakabutton2flag===1){
    nakabutton2func("0%", "0%", 0)(event);
  }else{
    nakabutton2func("-10%", "-15%", 1)(event);
  }
});

nakabutton3.addEventListener("click", (event) => {
  if (currentindex != 0){
    currentindex= currentindex-1
  }
  nakaanimate(currentindex);
});
nakabutton3.addEventListener("touch", (event) => {
  if (currentindex != 0){
    currentindex= currentindex-1
  }
  nakaanimate(currentindex);
});
nakabutton1.addEventListener("click", (event) => {
  if (currentindex != 3){
    currentindex = currentindex+1
  }
  nakaanimate(currentindex);
});
nakabutton1.addEventListener("touch", (event) => {
  if (currentindex != 3){
    currentindex = currentindex+1
  }
  nakaanimate(currentindex);
});


