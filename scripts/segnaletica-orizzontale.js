
const infoes = {
    id1: {
        image: `images/stop.jpg`,
        title: "Segnale di stop",
        text1: `La dicitura “STOP” sulla pavimentazione completa la striscia trasversale di arresto ed è sempre abbinata al segnale verticale di "FERMARSI E DARE PRECEDENZA" che prescrive di fermarsi e dare precedenza prima di impegnare l'area dell'incrocio.`,
        text2: `Il segnale di stop è messo di solito negli incroci, indica di dover fermarsi per controllare che non ci sia nessuno, e poi poter passare quando è tutto libero, è accompagnato spesso da un cartello ma principalmente è verniciato per terra con la scritta "STOP"`
    },
    id2: {
        image: "images/334b3c_422012b6e38e48749814770f17b464ef~mv2.webp",
        title: "Strisce Pedonali",
        text1: "Le strisce pedonali sono tra i segnali stradali orizzontali più conosciuti e più riconoscibili, proprio per la loro grande importanza, sono ideate appositamente per garantire maggiore sicurezza a chi percorre la strada a piedi.",
        text2: `Le strisce pedonali sono verniciate in strada che servono a permettere i pedoni di passare da una parte all’altra del marciapiede, di solito sono accompagnati con un semaforo che indica quando poter passare`
    },
    id3: {
        image: "images/e46a1ccb128a44253baae5bf3f062466.jpg",
        title: "Segnale Precedenza",
        text1: `E' formata da triangoli con la punta rivolta verso i conducenti in arrivo ed è complementare del segnale verticale "Dare la precedenza".`,
        text2: `Il segnale di precedenza serve per indicare che bisogna dare la precedenza al passaggio dei veicoli prima, e dopo che son passati possiamo passare pure noi, si trova prima delle rotonde ed incroci ed è una striscia con dei triangoli puntati verso di noi.`
    },
    id4: {
        image: "images/pag524.gif",
        title: "Strisce di Corsia",
        text1: "Le strisce longitudinali dividono la carreggiata in corsie nelle quali possono circolare le vetture. Normalmente queste strisce sono bianche, ma nel caso in cui vi troviate davanti a strisce gialle vuol dire che sono in corso dei lavori e si tratta di linee di mezzeria provvisorie.",
        text2: `Le strisce di corsia sono delle strisce che indicano dove la macchina può stare in una strada, separa le corsie e indica cosa si può fare`
    },
    id5: {
        image: "images/Immagine WhatsApp 2024-11-27 ore 20.06.36_7799c4ea.jpg",
        title: "Il nostro Segnale",
        text1: `A Cosa serve ? Serve per indicare a persone che guidano di non tenere il telefono nelle mani`,
        text2: `Perché abbiamo fatto questo segno ? In Italia, gli incidenti legati all’uso del cellulare durante la guida sono una preoccupazione crescente, l’uso del telefono cellulare è identificato come un fattore che contribuisce in modo significativo a molti incidenti stradali. la distrazione causata dai telefoni cellulari è collegata a una parte notevole degli 80.057 incidenti stradali con feriti o morte segnalati in Italia nella prima metà del 2024, con un aumento dello 0,9% rispetto all’anno precedente. Uno studio separato evidenzia che le distrazioni legate al telefono possono rappresentare fino al 25% di tutti gli incidenti stradali in alcune regioni del mondo, sottolineando i pericoli dell’uso del telefono durante la guida.`
    }
};

function displayInfo(id) {
    document.querySelector(`.js-info`)
        .innerHTML = `
        <div class="info-1">
          <hr width="245px" size= "5px" color="#111">
            <img src="${id.image}">
          <hr width="245px" size= "5px" color="#111">
            <h2>${id.title}</h2>
          <hr width="245px" size= "5px" color="#111">
        </div>
        <div>
          <div class="text-info">
            <h2>${id.text1}</h2>
          </div>
          <div class="text-info">
            <h2>${id.text2}</h2>
          </div>
        </div>
        `;
};

console.log("lebron james the goat michael jordan is second best player");