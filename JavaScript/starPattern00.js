//Upper left triangle->5 rows
//used extra term desing as console donot prints as like prinf
var row = 5;
var design = "";
for (var i = 0; i <= row; i++) {
  for (var j = 0; j < i; j++) {
    design += "*";
  }
  design += "\n"; //line break after completing each row
}
console.log(design);
//*
//**
//***
//****
//*****
