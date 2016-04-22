var prompt = require("prompt");

var Student = function (name, gender, grade, gpa, detentions, sleepingInClass, catchPhrase) {
	this.name = name;
	this.gender = gender;
	this.grade = grade;
	this.gpa = gpa;
	this.detentions = detentions;
	this.sleepingInClass = sleepingInClass;
	this.catchPhrase = catchPhrase;
	this.studentCanHaveFun = function (detentions, gpa) {
		if (detentions<10 && gpa>=2) {
			console.log (name + " can have fun. ");
		}
		else {
			console.log(name + " cannot have fun");
		}
	}	
}

prompt.start();

prompt.get(["name","gender", "grade", "gpa", "detentions", "sleepingInClass", "catchPhrase"], function (err, result) {
		var newStudent = new Student(result.name, result.gender, result.grade, result.gpa, result.detentions, result.sleepingInClass, result.catchPhrase);
		newStudent.studentCanHaveFun(result.detentions, result.gpa);
});

module.exports = Student;
