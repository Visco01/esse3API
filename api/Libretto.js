const fetch = require("sync-fetch");
const Exam = require("./Exam");

var Libretto = class Libretto{
    constructor(data){
        this.exams = [];
        this.init(data);
        
    }

    init(data){
        for(var elem in data){
            this.exams[elem] = new Exam(data[elem]);
        }
    }

    printExams(){
        
    }

}

module.exports = Libretto;

/**
 * Corsi normali:
 * adDes = Algebra lineare
 * esito.dataEsa = 25/01/2020
 * esito.voto = 19
 * statoDes = superata
 * 
 * Corsi idoneità:
 * if(statoDes == Superata && esito.voto == null) esito.voto = Idoneo
 * 
 * this.title
 * this.date
 * this.stato
 * this.voto
 * this.esito
 */