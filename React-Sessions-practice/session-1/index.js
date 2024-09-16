function circle(radius,x,y){
    this.radius = radius;
    this.location = {
      x:x,
      y:y
    };
    this.draw =  function(){
      console.log("current location is: ", this.location); 
    }
    this.move = function(nextX, nextY){
      this.location.x = nextX;
      this.location.y = nextY;
    };
  }
  
  const circleObj = new circle(10,0,0);
  console.log(circleObj);
  
  for (let index = 0; index <= 10; index++) {
      circleObj.move(index, index);
      circleObj.draw();
    }