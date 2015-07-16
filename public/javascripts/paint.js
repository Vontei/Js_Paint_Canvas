var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var color = document.getElementById('color')
var button = document.getElementById('button')
var select = document.getElementById('select')
var random = document.getElementById('random')
var clear = document.getElementById('clearBoth')
var circ = document.getElementById('countCircles')
var sqr = document.getElementById('countSquares')
var changeColor = document.getElementById('changeColor')

var squares = []
var circles = []


function Shape(x,y,color){
  this.x = x
  this.y = y
  this.color = color
}

function Square(height,width,color){
  Shape.call(this, event.x, event.y, color)
  this.height = height
  this.width = width
  this.x -= canvas.offsetLeft + (this.height/2)
  this.y -= canvas.offsetTop + (this.width/2)
  // ctx.fillStyle = color
  // ctx.fillRect(this.x,this.y,this.height,this.width)
}
Square.prototype = new Shape();
Square.prototype.draw = function(color){
  ctx.fillStyle = color
  ctx.fillRect(this.x,this.y,this.height,this.width)
}
function Circle(color, width){
  Shape.call(this)
  this.x = event.x -60
  this.y = event.y -60
  this.width = width
  // ctx.beginPath()
  // ctx.arc(this.x,this.y,this.width,0,2*Math.PI, false);
  // ctx.fillStyle = color
  // ctx.fill()
}
Circle.prototype = new Shape();
Circle.prototype.draw = function(color){
  ctx.beginPath()
  ctx.arc(this.x,this.y,this.width,0,2*Math.PI, false);
  ctx.fillStyle = color
  ctx.fill()
}
var square = ''
var pick = function(){
  console.log(squares.length, circles.length)
  if(select.value === 'Square'){
    var square = new Square(100,100,color.value)
    square.draw(color.value)
    squares.push(square)
  }
  if(select.value  === 'Circle'){
    var circle = new Circle(color.value,100)
    circle.draw(color.value)
    circles.push(circle)
  }

  circ.innerHTML = circles.length
  sqr.innerHTML = squares.length

}

canvas.addEventListener('click', pick)


changeColor.addEventListener('click', function(){
  for(i=0; i<squares.length;i++){
    squares[i].draw("#" + Math.floor(Math.random()*16777215).toString(16))
  }
  for(i=0; i<circles.length;i++){
    circles[i].draw("#" + Math.floor(Math.random()*16777215).toString(16))
  }
})



random.addEventListener('click', function(){

  for(i=0;i<1000;i++){
    if(select.value === 'Square'){
      var news = new Square(20,20)
      squares.push(news)

    }
    else if(select.value  === 'Circle'){
      var news = new Circle("#" + Math.floor(Math.random()*16777215).toString(16),10)
      circles.push(news)
    }
    news.x = (Math.floor(Math.random() * 900))
    news.y = (Math.floor(Math.random() * 500))
    news.color = "#" + Math.floor(Math.random()*16777215).toString(16)
    console.log(news)
    news.draw("#" + Math.floor(Math.random()*16777215).toString(16))

    function render(){
    requestAnimationFrame(render);
  }
  render()
  }
  circ.innerHTML = circles.length
  sqr.innerHTML = squares.length
})


clear.addEventListener('click', function(){
  var clear = new Square(2000,2000,'white')
  clear.draw('white')
  squares = []
  circles = []
  circ.innerHTML = circles.length
  sqr.innerHTML = squares.length
})
