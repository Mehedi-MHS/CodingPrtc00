var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.fullname = firstname + " " + lastname;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstname, lastname, roll) {
        var _this = _super.call(this, firstname, lastname) || this;
        _this.firstname = firstname;
        _this.lastname = lastname;
        _this.roll = roll;
        _this.roll = roll;
        return _this;
    }
    Student.prototype.greeting = function () {
        return "Hello i am " + this.firstname + ".My roll no: " + this.roll;
    };
    return Student;
}(Person));
var st1 = new Student("Jihn", "Doe", 1000);
console.log(st1.greeting());
