// button click function
function clickFunction() {
     alert("Please spot the differences");
}

// draw circle by mouse click
function start() {
    mouseClickMethod(drawCircle);
}

function drawCircle(e) {
    var c = new Circle(10);
    circle.setPosition(e.getX(), e.getY());
    add(c);
}

