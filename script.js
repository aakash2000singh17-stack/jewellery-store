var images = [

"https://images.unsplash.com/photo-1617038220319-276d3cfab638",

"https://images.unsplash.com/photo-1603561591411-07134e71a2a9",

"https://images.unsplash.com/photo-1611652022419-a9419f74343d",

"https://images.unsplash.com/photo-1588444837495-c6cfeb53b3a3",

"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"

];

var i = 0;

function slider(){

document.getElementById("slide").src = images[i];

i++;

if(i == images.length){

i = 0;

}

}

setInterval(slider,3000);
