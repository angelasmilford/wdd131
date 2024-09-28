const PI = 3.14;
let radius = 3; //changed from const to let to allow value to change or be reassigned
let area = 0;
function circleArea(radius){
    const area = radius * PI;
}
area = circleArea(3);
console.log(area);

area = radius * radius * PI; //'pi' isn't defined because it isn't an established variable
console.log("Area 1:", area);

radius = 4;
area = radius * radius * PI;
console.log("Area 2:", area);