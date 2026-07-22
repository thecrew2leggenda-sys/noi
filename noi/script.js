function apri(){

    document.getElementById("welcome").style.display="none";

    document.getElementById("contenuto").style.display="block";

}



const dataInizio = new Date("2026-04-07");


function aggiornaTempo(){

    const oggi = new Date();

    const differenza = oggi - dataInizio;


    const giorni = Math.floor(
        differenza / (1000*60*60*24)
    );


    document.getElementById("counter").innerHTML =
    giorni + " giorni insieme ❤️";

}


aggiornaTempo();


setInterval(aggiornaTempo,1000);



// apertura foto

const immagini = document.querySelectorAll(".galleria img");


immagini.forEach(img => {

    img.onclick = () => {

        window.open(img.src);

    }

});