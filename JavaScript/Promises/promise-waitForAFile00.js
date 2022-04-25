//example using promise
let mypromise = new Promise(function (resolve, reject) {
  let req = new XMLHttpRequest();
  req.open("GET", "Promise-00.js");
  req.onload = function() {
    if (req.status == 200) {
      resolve(req.resp);
    } else {
      reject("Error! something went wrong");
    }
  };
  req.send();
});

mypromise.then(
  function(success) {
    console.log(success);
  },
  function(err) {
    console.log(err);
  });





//example using callback
function getfile(callback) {
  let req = new XMLHttpRequest();
  req.open("GET","Promise-00.js");
  req.onload=function(){
    if(req.status == 200){
      callback(req.response);
    }else{
      callback("Error! Somethig went wrong again");
    }
  };
  req.send();
}

getfile(mydisplayer);

function mydisplayer(data){
  console.log(data);
}