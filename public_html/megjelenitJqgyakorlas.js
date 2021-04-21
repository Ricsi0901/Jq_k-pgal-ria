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

$(function () {

    for (var i = 0; i < kepTomb.length; i++) {
        var elem = '<div><h3></h3><img id="' + i + '" src="" alt=""/><p></p></div>';
        $("article").append(elem);
    }
    var kepElemTomb = $("article div img");
    var cimElemTomb = $("article div h3");
    var leirasElemTomb = $("article div p");
    console.log(kepTomb);

    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).attr("src", kepTomb[i].eleresiut);
        cimElemTomb.eq(i).html(kepTomb[i].cim);
        leirasElemTomb.eq(i).html(kepTomb[i].leiras);
    }
    ;
    for (var i = 0; i < kepElemTomb.length; i++) {
        kepElemTomb.eq(i).click(kepCsere);

    }
    $("#bal").click(kepLeptetesBal);
    $("#jobb").click(kepLeptetesJobb);
});
function kepCsere() {
    var i = this.id;
    $("#nagykepTarolo img").attr("src", kepTomb[i].eleresiut);
    $("#nagykepTarolo h3").eq(0).html(kepTomb[i].cim);
    $("#nagykepTarolo p").eq(0).html(kepTomb[i].leiras);
}
function kepLeptetesBal() {
    
    index--;
    if (index < 0) {
        index = kepTomb.length - 1;
    }
    $("#nagykepTarolo img").attr("src", kepTomb[index].eleresiut);
}

function kepLeptetesJobb() {
   
    index++;
    
    if (index > kepTomb.length - 1) {
        index = 0;
    }
     $("#nagykepTarolo img").attr("src", kepTomb[index].eleresiut);
}