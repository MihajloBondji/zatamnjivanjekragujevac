var currentPhotoA=0;

var forobjects="";

function changePhoto1(photoIdA){
  if(photoIdA==-2)
  photoIdA=(currentPhotoA+1)%9;
  else if(photoIdA==-1)
  photoIdA=(currentPhotoA+8)%9;
  leftPhotoA.src="atestgalerija/"+forobjects+(photoIdA+8)%9+".jpg";
  mainPhotoA.src="atestgalerija/"+forobjects+photoIdA+".jpg";
  rightPhotoA.src="atestgalerija/"+forobjects+(photoIdA+1)%9+".jpg";
  document.getElementById("ap"+photoIdA).style.borderColor="#ae0000";
  document.getElementById("ap"+currentPhotoA).style.borderColor="#444";
  currentPhotoA=photoIdA;
}

function setload(){
    changePhoto1(0);
    document.getElementById("ap0").style.borderColor="#ae0000";
}