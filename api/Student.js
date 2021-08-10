const fetch = require("sync-fetch");
const Libretto = require("./Libretto.js");

var Student = class Student{
    constructor(matId, base_url, base64data){
        this.matId = matId;
        this.base_url = base_url
        this.base64data = base64data;

        var requestData = this.requestPersonalData();

        this.firstName = requestData[0].nome;
        this.lastname = requestData[0].cognome;
        this.date = requestData[0].data;
        this.codFis = requestData[0].codFis;
        this.email = requestData[0].email;
        this.emailAte = requestData[0].emailAte;
        this.userId = requestData[0].userId;

        var requestData = this.requestLibretto();
        this.libretto = new Libretto(requestData);
    }

    requestPersonalData() {
        var requestOptions = {
            method: "GET",
            headers: {
                Authorization: "Basic " + this.base64data,
            },
        };
    
        var response = fetch(this.base_url + "/anagrafica-service-v2/persone", requestOptions);
        var data = response.json();
    
        if (response.statusCode == 401) {
            return data.retErrMsg;
        } else {
            return data;
        }
    }

    requestLibretto(){
        var requestOptions = {
            method: "GET",
            headers: {
                Authorization: "Basic " + this.base64data,
            },
        };
    
        var response = fetch(this.base_url + "/libretto-service-v2/libretti/" + this.matId + "/righe", requestOptions);
        var data = response.json();
    
        if (response.statusCode == 401) {
            return data.retErrMsg;
        } else {
            return data;
        }
    }
}

module.exports = Student