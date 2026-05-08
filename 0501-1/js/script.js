const timerId1 = setTimeout(() => {
    alert("3秒経過");
    }, 3000);

const INTERVAL = 10;
let x = 0;
let animating = false;
let timerId2;

function move() {
    const fish = document.getElementById("fish");
    x = x + 5;
    fish.style.left = x + "px";
    if (x > 500) {
        x = 0;
    }
}

const sBtn = document.getElementById("sBtn");
sBtn.onclick = () => {
if (animating === false) {
        timerId2 = setInterval(move, INTERVAL);
        sBtn.textContent = "ストップ";
        animating = true;
    } else {
        clearInterval(timerId2);
        sBtn.textContent = "スタート";
        animating = false;
    }
};

