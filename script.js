function wyswietl() {
    var kurs_react = document.getElementById("kurs_react");
    var kurs_js = document.getElementById("kurs_js");
    var liczba_rat = document.getElementById("liczba_rat");
    var miasto = document.getElementById("miasto");

    var cena = 0;
    var rata = 0;

    if (kurs_react.checked) {
        cena += 5000;
    }

    if (kurs_js.checked) {
        cena += 3000;
    }

    var liczbaRat = parseInt(liczba_rat.value);

    var miastoValue = miasto.value;

    rata = cena / liczbaRat;

    document.getElementById("wynik").innerHTML = "Kurs odbędzie się w " + miastoValue + ". Koszt całkowity: " + cena + "zł. Płacisz " + liczbaRat + " rat po " + rata + "zł";
}
