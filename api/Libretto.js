const fetch = require("sync-fetch");
const Exam = require("./Exam");

var Libretto = class Libretto{
    constructor(data){
        this.exams = [];
        this.init(data);
        this.printExamsIfPassed();
    }

    init(data){
        for(var elem in data){
            this.exams[elem] = new Exam(data[elem]);
        }
    }

    printExams(){
        for(var elem in this.exams){
            this.exams[elem].printExam();
        }
    }

    printExamsIfPassed(){
        for(var elem in this.exams){
            this.exams[elem].printExamIfPassed();
        }
    }

}

module.exports = Libretto;