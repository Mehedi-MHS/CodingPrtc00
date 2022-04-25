//Array can contain objects

function Point(x, y) {
  this.x = x;
  this.y = y;
}
function displayPoints(arr) {
  var len = arr.length;
  for (var i = 0; i < len; ++i) {
    console.log(arr[i].x + ", " + arr[i].y);
  }
}
var p1 = new Point(1, 2),
  p2 = new Point(3, 5),
  p3 = new Point(6, 4),
  p4 = new Point(4, 4);
var points = [p1, p2, p3, p4];
for (var i = 0; i < points.length; ++i) {
  console.log(
    "Points " + parseInt(i + 1) + ": " + points[i].x + "," + points[i].y
  );
}
var p5 = new Point(5, 6);
points.push(p5);
console.log("After push:");
displayPoints(points);
points.shift();
console.log("After Shift");
displayPoints(points);
/*
 Points 1: 1,2
Points 2: 3,5                           
Points 3: 6,4
Points 4: 4,4
After push:
1, 2                                    
3, 5                                     
6, 4                                     
4, 4
5, 6                            
After Shift
3, 5                                     
6, 4
4, 4
5, 6
*/
