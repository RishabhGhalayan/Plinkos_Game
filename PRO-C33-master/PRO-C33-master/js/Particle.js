class Particle {
    constructor(x, y,r) {

        var options ={
            restitution:0.4
        }
        this.r=r;
      
        this.body = Bodies.circle(x, y, this.r,options);       
        this.color=color(random(0, 255,255), random(0, 255,125), random(0, 255,59));
        World.add(world, this.body);
        this.visiblity = 255

    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill(this.color)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

        if(this.body.position.y>1170&&this.body.position.x < 80||this.body.position.y>1170&&this.body.position.x > 720){
        push()
       
        this.body.position.y = 1
      
           score=score+500
           pop()
         }
         if(this.body.position.y>1170&&this.body.position.x < 160||this.body.position.y>1170&&this.body.position.x > 660){
            push()
           
            this.body.position.y = -50
               score=score+400
               pop()
             }
             if(this.body.position.y>1170&&this.body.position.x < 240||this.body.position.y>1170&&this.body.position.x > 560){
                push()
               
                this.body.position.y = -50
                   score=score+300
                   pop()
                 }
                 if(this.body.position.y>1170&&this.body.position.x < 320||this.body.position.y>1170&&this.body.position.x > 480){
                    push()
                   
                    this.body.position.y = -50
                       score=score+200
                       pop()
                     }
                     if(this.body.position.y>1170&&this.body.position.x < 400||this.body.position.y>1170&&this.body.position.x > 400){
                        push()
                       
                        this.body.position.y = -50
                           score=score+100
                           pop()
                         }
         
 }   

    /*score(){
        if(this.visiblity<=254&&this.visiblity>-1746){
   
         
   
        }
      }*/

    
}
