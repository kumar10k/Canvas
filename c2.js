const canvas=document.querySelector('canvas');
canvas.height=innerHeight;
canvas.width=innerWidth;
const c=canvas.getContext('2d');

let mouse={
    x:innerWidth*Math.random(),
    y:innerHeight*Math.random()
}
addEventListener('mousemove',(e)=>{
    mouse.x=e.clientX
    mouse.y=e.clientY
   })
   array=["pink","red","yellow","blue","skyblue"]
let minmax=(min,max)=>{
return Math.floor(Math.random()*(max-min+1)+min)
}

let Circle=function(x,y,radius,color){
    this.x=x;
    this.y=y;
    this.color=color
    this.radius=radius;
    this.radian=Math.random()*Math.PI*2;
    this.velocity=0.05;
    this.mouselast={x:y,y:y}
    this.position={
        x:minmax(70,150),
           }
         
    this.draw=lastpoint=>{
        c.beginPath();
        c.strokeStyle=this.color
        c.lineWidth=this.radius
        c.moveTo(lastpoint.x,lastpoint.y)
        c.lineTo(this.x,this.y);
        c.stroke()
        c.closePath()
    }
    this.movement=()=>{
        const lastpoint={x:this.x,y:this.y}
        this.radian+=this.velocity;
        this.mouselast.x+=(mouse.x-this.mouselast.x)*0.05
        this.mouselast.y+=(mouse.y-this.mouselast.y)*0.05
        this.x=this.mouselast.x+Math.cos(this.radian)*this.position.x;
        this.y=this.mouselast.y+Math.sin(this.radian)*this.position.x;
        this.draw(lastpoint)   
     }
     
}


let arraycircle=[];

for(let i=0;i<100;i++){
    color=array[minmax(0,4)]
    arraycircle.push(new Circle(innerWidth/2,innerHeight/2,minmax(3,5),color))
}
let x=100;
let animate=()=>{
    c.fillStyle='rgba(255,255,255,0.1)';
    
    c.fillRect(0,0,innerWidth,innerHeight);
    requestAnimationFrame(animate);
  arraycircle.map((e)=>{
    e.movement();
    
  })
   

}

animate()