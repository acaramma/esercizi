var utenti = ["root", "Andrea", "Sofia", "Silvia", "Pasquale"];
var psw = ["root", "Ciao123", "qwerty", "12345", "asdfg"];
var lun = utenti.length;

function controllo(){
	var entry = document.getElementById("utente").value;
	for(i = 0; i < lun; i++){
		var nome = utenti[i];
		if(entry==nome){
			console.log("Accesso Effettuato");
		}
	}
}