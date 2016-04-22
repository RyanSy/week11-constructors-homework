var Bus = require("./bus.js");

var newBus = new Bus('kramer','white',100);

newBus.studentEntersBus("fred","m",12,4,3,"n","yabba dabba doooooo!");
newBus.studentEntersBus("barney","m",12,4,3,"n","heheheheh!");
newBus.studentEntersBus("al","m",12,4,3,"n","no peg.");
newBus.studentEntersBus("peg","f",12,4,3,"n","but al!");
newBus.studentEntersBus("kelly","f",12,4,3,"n","huh?");
newBus.studentEntersBus("bud","m",12,4,3,"n","hooters yum yum yum...");
newBus.studentEntersBus("jerry","m",12,4,3,"n","i want soup.");
newBus.studentEntersBus("elaine","f",12,4,3,"n","soup nazi?");
newBus.studentEntersBus("george","m",12,4,3,"n","chaos!");
newBus.studentEntersBus("homer","m",12,4,3,"n","d'oh!");
newBus.studentEntersBus("marge","f",12,4,3,"n","blah blah");
newBus.studentEntersBus("bart","m",4,2,100,"y","eat my shorts!");
newBus.studentEntersBus("lisa","f",3,4,0,"n","wheres my sax?");
newBus.studentEntersBus("maggie","f",1,4,3,"n","<pacifier-sound>");
newBus.studentEntersBus("stan","m",4,5,3,"n","the killed kenny!");
newBus.studentEntersBus("kenny","m",4,20,3,"n","mmmph mmmmph");
newBus.studentEntersBus("kyle","m",4,4,3,"y","you bastards!");
newBus.studentEntersBus("eric","m",4,4,10,"y","i want cheesy poofs.");
newBus.studentEntersBus("butters","m",4,4,3,"n","uhhh..");
newBus.studentEntersBus("token","m",4,4,3,"n","hmmm..");


newBus.busChatter();

newBus.removeStudent(newBus.studentsOnTheBus, "token");

console.log(newBus.studentsOnTheBus);