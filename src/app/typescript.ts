// function doSomething()
// {
    
// for(let i=0;i<5;i++)
//     console.log(i);
// }
//let msg="hihi";
 //doSomething();


   class Point{
     x:number;
     y:number;
    draw(){
        console.log('Value of X:'+ this.x + ', Value of Y : ' + this.y);
    }
    getDistance(another:Point){
 
    }
 }
 
 let point =new Point();
 point.x = 10;
 point.y = 5;
 point.draw();