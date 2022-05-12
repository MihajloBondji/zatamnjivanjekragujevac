
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
  changePhoto1(0);
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
var forobjects="";
var currentPhoto=0;

function changePhoto(photoId){
  if(photoId==-2)
    photoId=(currentPhoto+1)%12;
  else if(photoId==-1)
  photoId=(currentPhoto+11)%12;
  leftPhoto.src="galerija/"+forobjects+(photoId+11)%12+".jpeg";
  mainPhoto.src="galerija/"+forobjects+photoId+".jpeg";
  rightPhoto.src="galerija/"+forobjects+(photoId+1)%12+".jpeg";
  document.getElementById("mp"+photoId).style.borderColor="#ae0000";
  document.getElementById("mp"+currentPhoto).style.borderColor="#444";
  currentPhoto=photoId;
}

var currentPhotoA=0;
function changePhoto1(photoIdA){
  if(photoIdA==-2)
  photoIdA=(currentPhotoA+1)%8;
  else if(photoIdA==-1)
  photoIdA=(currentPhotoA+7)%8;
  leftPhotoA.src="atestgalerija/"+forobjects+(photoIdA+7)%8+".jpg";
  mainPhotoA.src="atestgalerija/"+forobjects+photoIdA+".jpg";
  rightPhotoA.src="atestgalerija/"+forobjects+(photoIdA+1)%8+".jpg";
  document.getElementById("ap"+photoIdA).style.borderColor="#ae0000";
  document.getElementById("ap"+photoIdA).style.borderColor="#444";
  currentPhotoA=photoIdA;
}
var currentGallery=0;

function changeGallery(){
    autgal.classList.toggle("selectedOption");
    objgal.classList.toggle("selectedOption");
    if(currentGallery)
    forobjects="";
    else forobjects="o";
    for(let i=0;i<12;i++){
      document.getElementById("mpp"+i).src="galerija/"+forobjects+i+".jpeg";
    }
    changePhoto(0);
    currentGallery=!currentGallery;
}