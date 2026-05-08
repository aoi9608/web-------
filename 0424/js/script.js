const kuji = new Array(4);
        kuji[0] = "<h1 style='color:green'>大吉</h1>";
        kuji[1] = "<h2>中吉</h2>";
        kuji[2] = "<h3>小吉</h3>";
        kuji[3] = "<h4 style='color:red'>凶</h4>";


const uranauBtn = document.getElementById("uranau")
        uranauBtn.onclick = () => {
            const myArea = document.getElementById("myArea");
            myArea.style.textAlign = "left";
            myArea.style.backgroundImage = "url(images/back.jpg)";
            const num = Math.floor(kuji.length * Math.random());
            myArea.innerHTML = kuji[num];
            if  (num === 0) {
                uranauBtn.style.backgroundColor = "green";
                uranauBtn.style.color = "white";
            } else if (num === 1) {
                uranauBtn.style.backgroundColor = "white";
                uranauBtn.style.color = "black";
            } else if (num === 2) {
                uranauBtn.style.backgroundColor = "white";
                uranauBtn.style.color = "black";
            } else {
                uranauBtn.style.backgroundColor = "red";
                uranauBtn.style.color = "white";
            }
        }

const shBtn = document.getElementById("showBtn")
        shBtn.onclick = () => {
    if (myArea.style.visibility == "hidden") {
        myArea.style.visibility = "visible";
        showBtn.textContent = "隠す";
    } else {
        myArea.style.visibility = "hidden";
        showBtn.textContent = "表示";
    }
}