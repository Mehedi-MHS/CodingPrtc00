//indexedDB inspired from  mdn.github.io (example 02)

//create an instance of a DB object for us to store the open database in

let db;
const resultBtn = document.querySelector("#getResult");
const resultDiv = document.querySelector("#result");
const openRequest = window.indexedDB.open("studentDB", 1);

openRequest.addEventListener("error", () => alert("failed to open database"));

openRequest.addEventListener("success", () => {
  alert("Database opened successfully");

  //store the opened database object in the db variable.
  //This is used a lot below
  db = openRequest.result;
  //Run the displayData() function to display the notes already in the IDB
  displayData();
});

//Setup the database tables if this has not already been done

openRequest.addEventListener("upgradeneeded", (e) => {
  //grab the reference to the opened database
  db = e.target.result;
  //create an empty object store to store out notes in (basically like a single table)
  //including a auto increment key
  const objectStore = db.createObjectStore("student_info", {
    keyPath: "id",
    autoIncrement: true,
  });

  //Define what data items the objectStore will contain

  objectStore.createIndex("name", "name", { unique: false });
  alert("Database setup complete");
});

//The getResult button click handler
resultBtn.addEventListener("click", addData);

//Define addData()  function
function addData() {
  const studentData = {
    name: "Scheild mdm",
    age: 33,
    country: "United Kingdom",
  };

  //open an read/write db transaction , ready for adding the data
  const transaction = db.transaction(["student_info"], "readwrite");

  //call an object store that's already been added to the database
  const objectStore = transaction.objectStore("student_info");
  //shortcut
  //  const objectStore = db
  //    .transaction(["student_info"], "readwrite")
  //    .objectStore("student_info");
  const addRequest = objectStore.add(studentData);
  addRequest.addEventListener("success", () => {
    alert("Data added successfully");
  });
  //Report on the success of the transaction completing,when everything is done.

  transaction.addEventListener("complete", () => {
    alert("Transaction completed . Database modification finished");

    //   Update the display of data to show the newly added itemm, by running displayData() again.
    displayData();
  });

  transaction.addEventListener("error", () => {
    alert("Transaction not opened due to error");
  });
}

//define displayData() function
function displayData() {
  //Open our objectStore and then get a cursor which iterates through all the different data items in the store
  const objectStore = db
    .transaction("student_info")
    .objectStore("student_info");

  //clear previous old results from result div to stop duplicating results
  resultDiv.innerHTML = ""; //removes all the child of resultDiv
  objectStore.openCursor().addEventListener("success", (e) => {
    //Get a reference to the cursor
    const cursor = e.target.result;
    //if there  is still another data item to iterate through, keep running this code
    if (cursor) {
      const str = `Name : ${cursor.value.name} - Age : ${cursor.value.age} - Country : ${cursor.value.country}`;
      const p = document.createElement("p");
      p.textContent = str;
      resultDiv.appendChild(p);

      cursor.continue();
    } else {
      alert("All info displayed");
    }
  });
}
