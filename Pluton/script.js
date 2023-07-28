function changeText() {
    var messageElement = document.getElementById("message");
    messageElement.textContent = "Sunucu arka planda açıldı"; // Yeni metni burada belirleyin
}

function myFunction(x) {
    x.classList.toggle("change");

}

function toggleMenu() {
    var x = document.getElementById("Menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}