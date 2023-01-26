//count digits from mixed strings like "12-2jd440444-432dsl";
let str = "1(555)555-5555";
let regex = /\d/g;
let length = str.match(regex).length;
console.log(length);
//11
