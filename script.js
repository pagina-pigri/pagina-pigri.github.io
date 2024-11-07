let isConfirmed = false; // Variabile per tenere traccia del primo clic

function checkAnswer() {
    const errorMessage = document.getElementById("error-message");

    if (!isConfirmed) {
        // Primo clic: mostra il messaggio di conferma
        errorMessage.textContent = "Sei sicuro? Hai finito di guardare il video? Se si, clicca ancora una volta il bottone per sbloccare il gruppo.";
        errorMessage.style.display = "block";
        isConfirmed = true; // Imposta conferma per il secondo clic
    } else {
        // Secondo clic: mostra la seconda pagina
        document.getElementById("first-page").style.display = "none";
        document.getElementById("second-page").style.display = "block";
    }
}
