// function doSomething()
// {
// for(let i=0;i<5;i++)
//     console.log(i);
// }
//let msg="hihi";
//doSomething();
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        console.log('Value of X:' + this.x + ', Value of Y : ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
    };
    return Point;
}());
var point = new Point();
point.x = 10;
point.y = 5;
point.draw();
