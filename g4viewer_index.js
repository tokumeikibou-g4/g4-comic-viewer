//variables
//const let var zenzen siranai 
const mangahako= document.getElementById("mangahako");
const mangahako2 = document.getElementById("mangahako2");
const hako= document.getElementById("hako");
const hako2= document.getElementById("hako2");
const hako2row1= document.getElementById("hako2row1");
const hako2row2= document.getElementById("hako2row2");
const ue= document.getElementById("ue");
const uebuttonleft= document.getElementById("uebuttonleft");
const uebuttonright= document.getElementById("uebuttonright");
const title= document.getElementById("title");
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
const imglist=[img1, img2, img3, img4];
const defsrc="https://i.imgur.com/wbEPdz9.png"
var deftitle="現４ビューワーへようこそ！！"

const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");
const pages=[page1, page2, page3, page4]
var mainpages=4;
var endpage=6;
var touchmovesitaflag=0;
var currentindex=0;

const nakaoverlay=document.getElementById("nakaoverlay");
const nakabutton1=document.getElementById("nakabutton1");
const nakabutton2=document.getElementById("nakabutton2");
const nakabutton3=document.getElementById("nakabutton3");
let nakabutton2flag=0;

const nextbutton1=document.getElementById("nextbutton1");
const nextbutton2=document.getElementById("nextbutton2");
const nextbutton3=document.getElementById("nextbutton3");
const nextbutton4=document.getElementById("nextbutton4");
const nextbuttons=[nextbutton1, nextbutton2, nextbutton3, nextbutton4];

const nextmangaimg1=document.getElementById("nextmangaimg1");
const nextmangaimg2=document.getElementById("nextmangaimg2");
const nextmangaimg3=document.getElementById("nextmangaimg3");
const nextmangaimg4=document.getElementById("nextmangaimg4");
const nextimgs = [nextmangaimg1, nextmangaimg2, nextmangaimg3, nextmangaimg4];

//styling
//id de dekiru no ha tabun js dake
//css nannka yada


window.onload = function(){  
  var style= mangahako.style;
  style.width= "60%";
  style.height="100%";
  style.setProperty("justify-content", "center");
  style.display="flex";
  style.float="left";
  var style= mangahako2.style;
  style.width= "40%";
  style.height="100%";
  style.setProperty("justify-content", "center");
  style.alignItems="center";
  style.display="flex";
  var style= hako.style;
  style.border="solid 0.5px "
  style.height= "80%";
  var w = hako.offsetHeight*64/91; //koko dake ChatGPT ni oshiete moratta
  style.width=parseInt(w)+"px";
  style.position= "relative";
  style.display="flex";
  style.overflow= "hidden";
  
  if (w>window.innerWidth*0.6){
    mangahako.style.float="none";
    mangahako.style.width= "100%";
    mangahako2.style.width= "100%";
  }
  var style= hako2.style;
  style.margin="20%"
  style.width= "60%";
  style.height=hako2.offsetWidth+"px";
  style.border="solid"
  style.position="relative";
  
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
  style.display= "flex";
  //style.alignItems="center";
  style.setProperty("justify-content", "space-between");
  style.width= "100%";
  style.height= "10%";
  style.setProperty("background", "linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8))");
  style.setProperty("z-index", "1");
    style.overflow="hidden";
  var style= uebuttonleft.style;
    style.width="10%"
    style.height=uebuttonleft.offsetWidth+"px";
    //style.padding="0"
    style.float="left"
    style.border="none";
    style.backgroundColor="inherit";
    style.color="white";
    style.overflow="hidden";
    style.setProperty("font-size", uebuttonleft.offsetHeight+"px")
  var style= uebuttonright.style;
    style.width="10%"
    //style.height="80%"
    style.border="none";
    style.backgroundColor="inherit";
    style.color="white";
   style.height=uebuttonright.offsetWidth+"px";
    style.setProperty("font-size", uebuttonright.offsetHeight+"px")
  var style= title.style;
    style.width="80%"
    style.height="60%"
    style.color="white";
    style.setProperty("font-size", title.offsetHeight+"px")
  
  
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
  //style.display="none";
  style.opacity="0.6";
  
  var style=drop1.style;
  style.width="17%"
  var style=drop2.style;
  style.width="33%"
  var style=drop3.style;
  style.width="33%"
  var style=drop4.style;
  style.width="17%"
  
  var style=sitabar.style;
  style.display= "flex";
  style.setProperty("justify-content", "space-between");
  
  pages.forEach(page => {
    var style=page.style;
    page.style.width="5%";
    page.style.height=page.offsetWidth+"px";
    style.backgroundColor= "white";
    style.border="4px solid #000";
    style.borderRadius="8px";
    style.position= "absolute";
    style.setProperty("z-index", "3");
    style.display="none"
    style.setProperty("float", "right");
  });
  var style=page1.style;
  style.right="2%";
  style.display="block"
  var style=page2.style;
  style.right="33%";
  var style=page3.style;
  style.right="66%";
  var style=page4.style;
  style.left="2%";
  
  var style= img1.style;
  img1.src=defsrc;
  style.width="100%"
  style.position= "absolute";
  style.setProperty("float", "right");
  style.right="0%"
  var style= img2.style;
  img2.src="https://i.imgur.com/jWGOFkP.png";
  style.width="100%"
  style.position= "absolute";
  style.right="100%"; 
  style.setProperty("float", "right");
  var style= img3.style;
  style.width="100%"
  style.position= "absolute";
  style.right="200%"; 
  img3.src="https://i.imgur.com/sE3XVlT.png";
  style.setProperty("float", "right");
  var style= img4.style;
  img4.src="https://i.imgur.com/4ISaQvC.png";
  style.width="100%"
  style.position= "absolute";
  style.right="300%";
  style.setProperty("float", "right");
  
  var style=hako2row1.style;
  style.width="100%";
  style.height="50%";
  var style=hako2row2.style;
  style.width="100%";
  style.height="50%";
  nextbuttons.forEach(nbutton =>{
    var style=nbutton.style;
    style.width="35%";
    style.height="35%";
    style.position="absolute"
  });
  var style=nextbutton1.style
  style.top="10%";
  style.left="10%";
  var style=nextbutton2.style
  style.top="10%";
  style.right="10%";
  var style=nextbutton3.style
  style.bottom="10%";
  style.left="10%";
  var style=nextbutton4.style
  style.bottom="10%";
  style.right="10%";
  nextimgs.forEach(nimg =>{
    var style=nimg.style;    
    style.width="100%";
    style.height="100%";
    style.border="6px solid #000";
    style.borderRadius="16px";
  });
  updatenextmangaimg();
}

function nakaanimate(index){
  var rightPercent = index*-100+"%";
  naka.animate(
      [{ right: rightPercent }],
      { duration: 200, fill: "forwards" }
    );
  
  pages.forEach(page => page.style.display = "none");
  if (index<4){
    pages[index].style.display = "block";
  };
    
  currentindex = index;
} 
function dragstart(index){
  return (event) => {
  touchmovesitaflag=1
  pages[index].style.opacity="0.7";
  //scrollbar.style.display="block";
  }
}
function dragend(index){
  return (event) => {
  touchmovesitaflag=0
  pages[index].style.opacity="1";
  //scrollbar.style.display="none";
  }
}
function indexrightpercent(index, rightPercent){
  return (event) => {
    event.preventDefault();
    
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
  if (currentindex <mainpages){
    nakabutton2func("0%", "0%", 0)(event);
    scrollbar.style.display="block";
  }
});
nakabutton3.addEventListener("touch", (event) => {
  if (currentindex != 0){
    currentindex= currentindex-1
  }
  nakaanimate(currentindex);
  if (currentindex <mainpages){
    nakabutton2func("0%", "0%", 0)(event);
    scrollbar.style.display="block";
  }
});
nakabutton1.addEventListener("click", (event) => {
  if (currentindex < endpage-1){
    currentindex = currentindex+1
  }
  nakaanimate(currentindex);
  if (currentindex >=mainpages){
    nakabutton2func("-10%", "-15%", 1)(event);
    scrollbar.style.display="none";
  }
});
nakabutton1.addEventListener("touch", (event) => {
  if (currentindex != endpage-1){
    currentindex = currentindex+1
  }
  nakaanimate(currentindex);
  if (currentindex >=mainpages){
    nakabutton2func("-10%", "-15%", 1)(event);
    scrollbar.style.display="none";
  }
});


function updatenextmangaimg(){
  nextmangaimg1.src="https://i.imgur.com/oPSkZxa.png";
  nextmangaimg2.src="https://i.imgur.com/0ViUKWm.png";
  nextmangaimg3.src="https://i.imgur.com/sCULIpP.png";
  nextmangaimg4.src="https://i.imgur.com/K5HS79J.png";
};

nextbuttons.forEach((nbutton) => {
  nbutton.addEventListener("click", async (event) => {
    var readrow=await fetchtool(nbutton.dataset.row);
    imglist.forEach((imgs, i) => {
      imgs.src=readrow[2+i];
      title.textContent=readrow[0];
    });
  });
  nbutton.addEventListener("touch", async (event) => {
    var readrow=await fetchtool(nbutton.dataset.row);
    imglist.forEach((imgs, i) => {
      imgs.src=readrow[2+i];
      title.textContent=readrow[0];
    });
  });
});


async function fetchtool(index) {
  // if we haven't fetched yet, do it
  const text = await fetch("title_thumbail_4pages.txt").then(res => res.text())

  var cachedRows = text
      .split("\n")                         // split into rows
      .map(line => line.trim())            // trim whitespace
      .filter(line => line.length > 0);    // skip empty rows
  
  // if index out of bounds, return null
  if (index < 0 || index >= cachedRows.length) {
    return null;
  }

  // return that row split by commas
  return cachedRows[index].split(",").map(item => item.trim());
}
