//walidacja formularzu w kontakcie

var imie = document.getElementById("imie");
var email = document.getElementById("email");
var tel = document.getElementById("tel");
var wiadomosc = document.getElementById("message");
var przycisk = document.getElementById("przycisk");

if(przycisk) {
    przycisk.addEventListener("click", function() {
        if(imie.value.length < 3)
            alert("Twoje imię jest za krókie!");
        if(! email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
            alert("Popraw email!");
        if(! tel.value.match(/^[0-9\+]{8,13}$/))
            alert("Zły numer telefonu! (8-13 cyfr)");

        if(imie.value.length >= 3 &&
            email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) &&
            tel.value.match(/^[0-9\+]{8,13}$/)) {
                alert("Dane poprawne, formularz wysłany");
                imie.value = "";
                email.value = "";
                tel.value = "";
                wiadomosc.value = "";
            }
    })
}