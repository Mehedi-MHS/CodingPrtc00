//convert 12h time into 24h format

function format(str) {
  var unit = str.slice(str.length - 2);
  var time = str.slice(0, str.length - 2);
  var h = Number(time.split(":")[0]);
  if (unit.toUpperCase() == "PM") {
    var arr = time.split(":");
    var num;
    h == 12 ? (num = 0) : (num = 12);
    arr.splice(0, 1, h + num);
    return arr.join(":");
  } else if (unit.toUpperCase() == "AM") {
    var arr2 = time.split(":");
    var num2;
    h == 12 ? (num2 = 12) : (num2 = 0);
    arr2.splice(0, 1, h - num2 > 9 ? h - num2 : "0" + (h - num2));
    return arr2.join(":");
  }
}

console.log(format("12:34:11PM"));
console.log(format("12:00:00AM"));
