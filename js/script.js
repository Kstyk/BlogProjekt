//komentarze

let wyslij = document.getElementById("wyslij");

wyslij.addEventListener("click", function() {
    let kom = document.getElementById("komentarz").value;
    let nick = document.getElementById("nick").value;

    newKom = document.createElement("li");
    newKom.innerHTML = "<div class='info'><div class='time'><a href='#'>"+nick+"</a><span>4 godziny temu</span></div><a class='avatar' href='#'>"+
        "<img src='images/avatar.png' alt='Profile Avatar' title="+nick+" /></a></div>"+
        "<p>"+kom+"</p>";

    newKom.classList.add("komentarz");
    newKom.classList.add("user-kom");

    let komentarze = document.querySelector(".komentarze");
    komentarze.insertBefore(newKom, komentarze.childNodes[0]);
    
})

