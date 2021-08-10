var Exam = class Exam{
    constructor(data){
        this.title = data.adDes;
        this.date = data.esito.dataEsa;
        this.state = data.statoDes;

        if(data.esito.voto){
            this.mark = data.esito.vototo;
        }else if(this.state == "Superata"){
            this.result = "Idoneo";
        }else{
            this.voto = null;
            this.result = "Da effettuare";
        }

        console.log(this.title);
    }
}

module.exports = Exam;