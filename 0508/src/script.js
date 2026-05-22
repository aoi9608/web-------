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


const myimg = document.getElementById("myimg");

let currentX,currentY;
let lastX = 0,lastY = 0;//初期値として0を設定​

const keyframeMyImg = {
    translate:[],
    rotate:['0deg','360deg'],
    scale:[1,1.5,1],
    opacity:[0.3,1]//都度、移動位置が変わる為[]は空にする。ここで㋐のように記載してもeventの値は反映されない​
}
const myImgMove = (e) => {//eはeventのオブジェクト​
    currentX = e.clientX;
    currentY = e.clientY;
    //次の行でtranslateを設定しないと値が反映されない。​
    keyframeMyImg.translate = [`${lastX}px ${lastY}px`,`${currentX}px ${currentY}px`];//㋐​
    myimg.animate(keyframeMyImg,options);
    lastX = currentX;
    lastY = currentY;
}

document.addEventListener("dblclick",myImgMove)