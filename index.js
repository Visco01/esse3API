const Esse3API = require('./api/Esse3API.js');

/**
 * Creates a new Esse3API object
 * @param position (int) The endpoint's position in JSON data. See README.md for details. By default is set to
 *                 30: it referres to Ca'Foscari University in Venice.
 * @param username (string) Username
 * @param password (string) Password 
 * @param matId    (string) A parameter used to access to a student's career, obtained with login's http request. 
 *                 The first time it can be empty, from the second time it should be saved in DB 
 *                 in order to gain some time with http requests.
*/  

/**EXAMPLE */
try{
    var api = new Esse3API(30, "", "", "");
    console.log("List of exams:");
    api.student.libretto.printExams();
    console.log("\nPassed exams:");
    api.student.libretto.printExamsIfPassed();
}catch(e){
    console.log("Error status code " + e.code + ": " + e.message);
}

