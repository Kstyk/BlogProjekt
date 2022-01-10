//komentarze
window.onload = function setTemplate() {
    if(localStorage.getItem('template')!=null )
        document.querySelector(".komentarze").innerHTML = localStorage.getItem('template');

    var wyslij = document.getElementById("przycisk");

    wyslij.addEventListener("click", function() {
    let kom = document.getElementById("komentarz").value;
    let nick = document.getElementById("nick").value;

    if(kom.length>10 && nick.length>2) {
        newKom = document.createElement("li");
        newKom.innerHTML = "<div class='info'><div class='time'><a href='#'>"+nick+"</a><span>4 godziny temu</span></div><a class='avatar' href='#'>"+
            "<img src='images/avatar.png' alt='Profile Avatar' title="+nick+" /></a></div>"+
            "<p>"+kom+"</p>";

        newKom.classList.add("komentarz");
        newKom.classList.add("user-kom");

        let komentarze = document.querySelector(".komentarze");
        komentarze.insertBefore(newKom, komentarze.childNodes[0]);
        setOnLocalStorage();
    } else
    {
        alert("Nick lub komentarz jest za krótki!");
    }
})
};

function setOnLocalStorage () {
    localStorage.setItem('template', document.querySelector(".komentarze").innerHTML);
}