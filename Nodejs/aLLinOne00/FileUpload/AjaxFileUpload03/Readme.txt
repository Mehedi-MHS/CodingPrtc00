here Code will be to retrieve the data from <form> using document.forms["formname"]

<form name="formname" id="f1">
<input type="file"........>
<input type="submit">
</form>

document.getElementById("f1").addEventListener("submit",function(event){

fdata=new FormData(document.forms["formname"]);
…………
event.preventDefault(); // cancels default form submission when clicked on 'submit' button
}