var Student = require("./student.js");

var Bus = function (driverName, color, gas) {
	this.studentsOnTheBus = [];
	this.driverName = driverName;
	this.color = color;
	this.gas = gas;
	this.studentEntersBus = function (n, g, gr, gp, d, s, c) {
		this.studentsOnTheBus.push (new Student(n, g, gr, gp, d, s, c));
	}
	this.busChatter = function () {
		for (i=0; i<this.studentsOnTheBus.length; i++) {
			if (this.studentsOnTheBus[i].detentions<10 && this.studentsOnTheBus[i].gpa>=2) {
				console.log(this.studentsOnTheBus[i].name + " says, " + '"' + this.studentsOnTheBus[i].catchPhrase+ '"');
			}
		}
	}
	this.removeStudent = function (arr, val) {
		for (i=0; i<this.studentsOnTheBus.length; i++) {
			if(this.studentsOnTheBus[i] = val) {
				this.studentsOnTheBus.splice(i,1);
			}
		}
	}
}

module.exports = Bus;	