
var menuop=0;
function menu() {
  burger.classList.toggle("change");
  linksHolder.classList.toggle("changeHolder");
  headerLogo.classList.toggle("displayNone");
  menuop=!menuop;
}

function checkmenu(){
	if(menuop==1)
	menu();
}

function changeOpacity(op){
  scPhotoTint.style.backgroundColor="rgba(0,0,0,"+op+")";
}

function setload(){
	changePhoto(0);
  document.getElementById("mp0").style.borderColor="#ae0000";
}

var aut=0,bod=0,auto=0;
var stanje=0;

function resizeFun(){
	bod = document.body.getBoundingClientRect();
	aut=con1.getBoundingClientRect().top*0.8-bod.top;
	auto=scPhoto.getBoundingClientRect().top*1.1-bod.top;
}

var scrollScript = function(){

	resizeFun();

  if(stanje==0||stanje==1){

	var scr=window.scrollY*0.85+window.innerHeight;

  if(scr>auto&&stanje==0){
    scPhoto.style.opacity="1";
    scPhotoMask.style.opacity="1";
    setTimeout(function(){
      scPhotoTint.style.opacity="1";
			},1000);
      stanje=1
  }
  if(scr>aut&&stanje==1){
    for(let i=1;i<=7;i++)
    setTimeout(function(){
			document.getElementById("con"+i).style.opacity="1";
			},150*i);
      stanje=2;
  }
}
}

var currentPhoto=0;

function changePhoto(photoId){
  if(photoId==-2)
    photoId=(currentPhoto+1)%12;
  else if(photoId==-1)
  photoId=(currentPhoto+11)%12;
  leftPhoto.src="galerija/"+(photoId+11)%12+".jpeg";
  mainPhoto.src="galerija/"+photoId+".jpeg";
  rightPhoto.src="galerija/"+(photoId+1)%12+".jpeg";
  document.getElementById("mp"+photoId).style.borderColor="#ae0000";
  document.getElementById("mp"+currentPhoto).style.borderColor="#444";
  currentPhoto=photoId;
}

