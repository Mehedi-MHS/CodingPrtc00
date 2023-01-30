
  var inp=document.querySelector("#a");
  var txt;
  inp.addEventListener("input",function(){
    txt=document.querySelector("#a").value;
    var data="name="+txt;
    process(data);
  });
  function process(dat){
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
    if (xhr.readyState==4 && xhr.status==200){
      document.querySelector(".box").textContent=xhr.responseText;
    }
  }
  xhr.open("POST","http://localhost:3000/ajax",true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.send(dat);
  }



