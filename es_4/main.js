var utenti = ["root", "Andrea", "Sofia", "Silvia", "Pasquale"];
var lun = utenti.length;

document.getElementById("nome_utente").innerHTML = "Inserire il nome utente";

function controllo(nome_utente){
	for(i = 0; i < lun; i++){
		var nome = utenti[i];
		if(nome_utente==nome){
			window.location = "https://www.google.it";
		}
	}
}