function Pawn(square,col){
this.x = square.x+25
this.y = square.y+25
this.col = col
this.show = function (){
push();
if(this.col==1){
stroke(255);
fill(0);
}
else{
stroke(0);
fill(255);
}
//ellipse(this.x,this.y,30)
image(pawnImage,x,y)
   noFill();
   rect(x,y,50,50)
//radius(30);
pop();
 }
  }
  function rook(square,col){
    this.x = square.x+25
    this.y = square.y+25
    this.col = col
    this.show = function (){
    push();
    if(this.col==1){
    stroke(255);
    fill(0);
    }
    else{
    stroke(0);
    fill(255);
    }
    ellipse(this.x,this.y,30)
   // radius(30);
    pop();
     }
      }
      function bishop(square,col){
        this.x = square.x+25
        this.y = square.y+25
        this.col = col
        this.show = function (){
        push();
        if(this.col==1){
        stroke(255);
        fill(0);
        }
        else{
        stroke(0);
        fill(255);
        }
        ellipse(this.x,this.y,30)
        //radius(30);
        pop();
         }
          }
              function king(square,col){
                this.x = square.x+25
                this.y = square.y+25
                this.col = col
                this.show = function (){
                push();
                if(this.col==1){
                stroke(255);
                fill(0);
                }
                else{
                stroke(0);
                fill(255);
                }
                ellipse(this.x,this.y,30)
               // radius(30);
                pop();
                 }
                  }
                  function queen(square,col){
                    this.x = square.x+25
                    this.y = square.y+25
                    this.col = col
                    this.show = function (){
                    push();
                    if(this.col==1){
                    stroke(255);
                    fill(0);
                    }
                    else{
                    stroke(0);
                    fill(255);
                    }
                    ellipse(this.x,this.y,30)
                    //radius(30);
                    pop();
                     }
                      }
                      function knight(square,col){
                        this.x = square.x+25
                        this.y = square.y+25
                        this.col = col
                        this.show = function (){
                        push();
                        if(this.col==1){
                        stroke(255);
                        fill(0);
                        }
                        else{
                        stroke(0);
                        fill(255);
                        }
                        ellipse(this.x,this.y,30)
                        //radius(30);
                        pop();
                         }
                          }