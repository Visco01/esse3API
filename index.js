const Esse3API = require('./api/Esse3API.js')

/* Parameters: endpoint (int), username (string), password (string), matId (string) --> It can be empty*/
/**
 * Creates a new Esse3API object
 * @param position (int) The endpoint's position in JSON data. See README.md for details
 * @param username (string) Username
 * @param password (string) Password 
 * @param matId    (string) A parameter used to login. The first time it can be empty, from the second time 
 *                 it should be saved in DB in order to gain some time with http requests
*/  
var api = new Esse3API(30, "", "", "");

/**EXAMPLE */
if(typeof api.student != "undefined"){
    console.log("List of exams:");
    api.student.libretto.printExams();
    console.log("\nPassed exams:");
    api.student.libretto.printExamsIfPassed();
}