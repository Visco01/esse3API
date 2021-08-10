var Exam = class Exam{
    constructor(data){
        this.title = data.adDes;
        this.date = data.esito.dataEsa.substring(0, 10);
        this.state = data.statoDes;

        if(data.esito.voto){
            this.mark = data.esito.voto;
        }else if(this.state == "Superata"){
            this.result = "Idoneo";
        }else{
            this.voto = null;
            this.result = "Da effettuare";
        }
    }

    printExam(){
        console.log(this.title + ": " + this.state);
    }

    printExamIfPassed(){
        var string = this.title + ", esito: ";
        if(this.state == "Superata" && typeof this.mark != "undefined"){
            string += this.mark + ",  superato in data: " + this.date;
            console.log(string);
        }else if(this.state == "Superata" && typeof this.mark == "undefined"){
            string += this.result + ",  superato in data: " + this.date;
            console.log(string);
        }
    }
}

module.exports = Exam;