const FiBtn = document.getElementById("FiBtn");
const img = document.getElementById("photo");
const FoBtn = document.getElementById("FoBtn");

const keyframesin = { opacity:[0,1],translate: [0,"150px 150px"]};
const options = {duration:1000,fill:"forwards"};
const keyframesout = { opacity:[1,0],translate: ["150px 150px",0]};

FiBtn.onclick = () => {
    img.animate(keyframesin, options);
};

FoBtn.onclick = () => {
    img.animate(keyframesout, options);
};
