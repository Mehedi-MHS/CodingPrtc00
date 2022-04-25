var Student = /** @class */ (function () {
    function Student(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Student;
}());
var st1 = new Student("John", "Doe");
console.log(st1.fullname);
