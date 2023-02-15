// variable initialization
var x;
var y; // x and y coordinate upon mouse click
var r      = 20;
var dif    = [1];
var index  = 0;
var max    = 1;
var img1   = $("#img1");
var img2   = $("#img2");
let coord1 = [
    [50, 50]
];
let imgArr = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"]

// button click
function clickInstruction() {
     alert("Please spot the differences. Click to circle the difference.");
}

function clickNext() {
    index ++;
    if (index > max) {
        this.end();
    }
    this.showNew();
}

// mouse click
window.addEventListener('click', function(e) {
    x = e.x;
    y = e.y;
    for (let i = 0; i < num_dif; i ++) {
        if (x <= (coord1[i][0] + r) && x >= (coord1[i][0] - r) && y <= (coord1[i][1] + r) && y <= (coord1[i][1] - r)) {
            alert("draw");
            this.drawCircle(coord1[i][0], coord1[i][1]);
        }
    }
})

// draw circle
function drawCircle(x, y) {
    
}

// helper functions
function showNew() {
    document.getElementById("img1").src = "img3.jpg";
    document.getElementById("img2").src = "img4.jpg";
}

function end() {
    var myDiv = document.getElementById("h");
    myDiv.innerHTML = "Thank you for your participation!";
    var myImg = document.getElementById("img");
    myImg.style.display = "none";
    var myBtn = document.getElementById("btn");
    myBtn.style.display = "none";
}

