class redbox extends BaseClass {
  constructor(x,y,width,height){
    super(x,y,20,40);
  }

  display() {
    fill("red");
    if(this.body.speed < 3){
      super.display();
      console.log(this.Visiblity)
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 1;
       tint(255,this.Visiblity);      
       rect(this.image, this.body.position.x, this.body.position.y, 20, 40);
       pop();
     }
    
  }
}