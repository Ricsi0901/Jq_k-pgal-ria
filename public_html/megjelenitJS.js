window.addEventListener("load", init);

//segédfüggvények
function $(nev) {
    return document.querySelectorAll(nev);
}

var index = 0;

var kep1 = {
    eleresiut: "kepek/pug.jpg",
    cim: "Fázós mopsz",
    leiras: "1. leírás"
}; /*objektum, leírja egyetlen kép tulajdonságait*/

var kep2 = {
    eleresiut: "kepek/weimari.jpg",
    cim: "Kölyök weimári vizsla",
    leiras: "2. leírás"
};
var kep3 = {
    eleresiut: "kepek/welsh-corgi.jpg",
    cim: "Corgi élvezi az esőt",
    leiras: "3. leírás"
};

var kepTomb = [kep1, kep2, kep3];

function init() {

    for (var i = 0; i < kepTomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article")[0].innerHTML += elem;
    }

    var kepElemTomb = $("article div img");
    var cimElemTomb = $("article div h3");
    var leirasElemTomb = $("article div p");
    console.log(kepTomb);

    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb[i].src = kepTomb[i].eleresiut;
        cimElemTomb[i].innerHTML = kepTomb[i].cim;
        leirasElemTomb[i].innerHTML = kepTomb[i].leiras;
    }
    ;

    //kattintás eseménykezelő a kisképre
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb[i].addEventListener("click", kepCsere);
    }
    //ki kell cserélni a kattintott kép elérési útvonalára a nagykép elérési útvonalát
    
    $("#bal")[0].addEventListener("click", kepLeptetesBal);
    $("#jobb")[0].addEventListener("click", kepLeptetesJobb);
    
}

function kepCsere() {
    //itt cserélem ki a képet
    var i = this.id;
    $("#nagykepTarolo img")[0].src = kepTomb[i].eleresiut;
    $("#nagykepTarolo h3")[0].innerHTML = kepTomb[i].cim;
    $("#nagykepTarolo p")[0].innerHTML = kepTomb[i].leiras;
}

function kepLeptetesBal() {
     $("#nagykepTarolo img")[0].src = kepTomb[index].eleresiut;
     index--;
     if(index<0) {
         index=kepTomb.length-1;
     }
}

function kepLeptetesJobb() {
     $("#nagykepTarolo img")[0].src = kepTomb[index].eleresiut;
     index++;
     if(index>kepTomb.length-1) {
         index = 0;
     }
}