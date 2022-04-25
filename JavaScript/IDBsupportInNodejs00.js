//window is not supported in nodejs.
//So indexedDB is also not supported
var flag = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB;
flag ? console.log("IndexedDB is supported") : console.log("Not supported");
