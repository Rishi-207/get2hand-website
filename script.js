// ===== IMAGE POPUP =====

const images = document.querySelectorAll(".clickable");

const popup = document.getElementById("popup");

const popupImg = document.getElementById("popup-img");

const closeBtn = document.getElementById("close");


// CLICK IMAGE

images.forEach(img => {

img.addEventListener("click", ()=>{

popup.style.display="flex";

popupImg.src = img.src;

});

});


// CLOSE BUTTON

closeBtn.onclick = ()=>{

popup.style.display="none";

};


// CLICK OUTSIDE CLOSE

popup.onclick = (e)=>{

if(e.target === popup){

popup.style.display="none";

}

};