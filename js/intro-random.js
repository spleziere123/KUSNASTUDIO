const images = [
  "images/photography/photo-01.jpg",
  "images/architecture/arch-01.jpg",
  "images/urban/urban-01.jpg",
  "images/objects/obj-01.jpg",
  "images/photography/photo-06.jpg",
  "images/photography/photo-04-04.jpg",
  "images/photography/photo-08.jpg",
  "images/photography/photo-09.jpg",
  "images/photography/photo-11.jpg",
  "images/photography/photo-12.jpg",
  "images/photography/photo-13.jpg",
];

const img = document.getElementById("introImage");
if(img){

  img.src = images[Math.floor(Math.random() * images.length)];
  img.onclick = () => { window.location.href = "scales.html"; };
} else {
}
