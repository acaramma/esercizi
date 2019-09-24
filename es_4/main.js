var utenti = ["root", "Andrea", "Sofia", "Silvia", "Pasquale"];
var psw = ["root", "Ciao123", "qwerty", "12345", "asdfg"];
var lun = utenti.length;
var lung = psw.length;

function controllo(){
	var entry = document.getElementById("utente").value;
	for(i = 0; i < lun; i++){
		var nome = utenti[i];
		if(entry==nome){
			console.log("Accesso Effettuato");
		}
	}
}

function login(){
	var entry = document.getElementById("utente").value;
	var contr = document.getElementById("pass").value;
	for(i = 0; i < lun; i++){
		var nome = utenti[i];
		var pass = psw[i];
		if(entry == nome && contr == pass){
			console.log("Login Effettuato");
		}
	}
}