const endpoints = require("./endpoints.js");
const Student = require("./Student.js");
const fetch = require("sync-fetch");

var Esse3Api = class Esse3API {
  constructor(pos, username, password, matId) {
    this.base_url = this.getBaseUrl(pos);
    var buff = Buffer.from(username + ":" + password);
    this.base64data = buff.toString("base64");
    if(matId == ''){
      var requestData = this.tryLogin();
      if(requestData == "Credenziali errate"){
        console.log(requestData);
      }else{
        this.student = new Student(requestData.user.trattiCarriera[0].matId, this.base_url, this.base64data);
      }
    }else{
      this.student = new Student(matId, this.base_url, this.base64data);
    }
    
  }

  tryLogin() {
    var requestOptions = {
      method: "GET",
      headers: {
        Authorization: "Basic " + this.base64data,
      },
    };

    var response = fetch(this.base_url + "/login", requestOptions);
    var data = response.json();

    if (response.statusCode == 401) {
      return data.retErrMsg;
    } else {
      if(typeof data.user == "undefined") 
        return "Credenziali errate";
      else if (data.user.grpDes != "Studenti")
        return "Sono ammessi solo gli studenti"; 
      else return data;
    }
  }

  getBaseUrl(pos) {
    var arr = [];
    var i = 0;
    for (var elem in endpoints) {
      arr[i++] = elem;
    }

    return endpoints[arr[pos - 1]].url;
  }
};

module.exports = Esse3Api;