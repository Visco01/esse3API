const Esse3API = require('./api/Esse3API.js')

/* Parameters: endpoint (int), username (string), password (string), matId (string) --> It can be empty*/
var api = new Esse3API(30, "", "", "");

/**EXAMPLE */
if(typeof api.student != "undefined"){
    console.log("List of exams:");
    api.student.libretto.printExams();
    console.log("\nPassed exams:");
    api.student.libretto.printExamsIfPassed();
}