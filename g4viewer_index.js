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

//styling
//id de dekiru no ha tabun js dake
//css nannka yada
window.onload = function(){  
  var style= hako.style;
  //style.width= "100%";
  //var h = hako.offsetWidth*91/64
  //style.height= h + "px";
  style.height= "90%";
  var w = hako.offsetHeight*64/91; //koko dake ChatGPT ni oshiete moratta
  console.log(w);
  style.width=parseInt(w)+"px";
  style.position= "relative";
  style.display="flex";
  style.overflow= "hidden";
  var style= naka.style;
  style.width= "100%";
  style.height= "100%";
  style.position= "absolute";
  style.display="flex";
  style.setProperty("z-index", "-1");
  var style= ue.style;
  style.position= "absolute";
  style.width= "100%";
  style.height= "5%";
  style.setProperty("background", "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))");
  style.setProperty("z-index", "1");
  var style= sita.style;
  style.width= "100%";
  style.height= "5%";
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
  style.height= "16px";
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
  style.width="16px";
  style.height="16px";
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="2%";
  style.setProperty("z-index", "3");
  var style=page2.style;
  style.width="16px";
  style.height="16px";
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="33%";
  style.display="none"
  style.setProperty("z-index", "3");
  var style=page3.style;
  style.width="16px";
  style.height="16px";
  style.backgroundColor= "white";
  style.border="4px solid #000";
  style.borderRadius="8px";
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="66%";
  style.display="none"
  style.setProperty("z-index", "3");
  var style=page4.style;
  style.width="16px";
  style.height="16px";
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


function dragstart(index){
  return (event) => {
  pages[index].style.opacity="0.7";
  scrollbar.style.display="block";
  }
}
function dragend(index){
  return (event) => {
  pages[index].style.opacity="1";
  scrollbar.style.display="none";
  }
}
function indexrightpercent(index, rightp){
  return (event) => {
    event.preventDefault();
    pages.forEach(page => page.style.display = "none");
    pages[index].style.display = "block";
    naka.animate(
      [{ right: rightp }],
      { duration: 200, fill: "forwards" }
    );
  };
}

page1.addEventListener("dragstart", dragstart(0));
page2.addEventListener("dragstart", dragstart(1));
page3.addEventListener("dragstart", dragstart(2));
page4.addEventListener("dragstart", dragstart(3));
page1.addEventListener("touchstart", dragstart(0));
page2.addEventListener("touchstart", dragstart(1));
page3.addEventListener("touchstart", dragstart(2));
page4.addEventListener("touchstart", dragstart(3));

page1.addEventListener("dragend", dragend(0));
page2.addEventListener("dragend", dragend(1));
page3.addEventListener("dragend", dragend(2));
page4.addEventListener("dragend", dragend(3));
page1.addEventListener("touchend", dragend(0));
page2.addEventListener("touchend", dragend(1));
page3.addEventListener("touchend", dragend(2));
page4.addEventListener("touchend", dragend(3));
drop1.addEventListener("dragover", indexrightpercent(3, "-300%"));
drop2.addEventListener("dragover", indexrightpercent(2, "-200%"));
drop3.addEventListener("dragover", indexrightpercent(1, "-100%"));
drop4.addEventListener("dragover", indexrightpercent(0, "0%"));
drop1.addEventListener("touchmove", indexrightpercent(3, "-300%"));
drop2.addEventListener("touchmove", indexrightpercent(2, "-200%"));
drop3.addEventListener("touchmove", indexrightpercent(1, "-100%"));

drop4.addEventListener("touchmove", indexrightpercent(0, "0%"));

