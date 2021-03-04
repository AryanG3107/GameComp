var helper, startButton, menu, menuButton
function preload(){
helper = loadImage("Images/Robot.png")
startButton = loadImage("Images/Button1.gif")
menu = loadImage("Images/menu.jpg")
}

function setup(){
    createCanvas(1900,950)
    start = createSprite(936,795)
    start.addImage(startButton)
    menuButton = new Clickable()
}

function draw(){
    background("green")
    textAlign(CENTER, CENTER)
    textSize(50)
    fill("black")
    stroke("aqua")
    strokeWeight(5)
    text("Welcome to Computer Builder 2.0.", width/2, height/2)
    textSize(30)
    stroke("white")
    strokeWeight(2)
    text("I am Qbot, here to help.", width/2, height/2 + 70)
    //console.log(mouseX, mouseY)
    imageMode(CENTER)
    image(helper, 664,653, 300,250)
    if(mousePressedOver(start)){
        console.log("Hello")
        remove()
    }
    drawSprites()
}
function mouseReleased(){
    menuButton.locate(200,200)
    menuButton.text= "Click Here"
    menuButton.draw()
}