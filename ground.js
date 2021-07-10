class Ground {
  constructor(x, y, w, h){
    let options = {
      isStatic:true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }
}