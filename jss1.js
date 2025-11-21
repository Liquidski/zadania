function obliczPole() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let wynik = document.getElementById("wynik");

    if (a + b <= c || a + c <= b || b + c <= a) {
        wynik.textContent = "Z podanych boków nie sposób utworzyć trójkąta!";
        return;
    }

    let s = (a + b + c) / 2;
    let pole = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    wynik.textContent = "Pole trójkąta wynosi: " + pole.toFixed(4);
}

let obliczButton = document.getElementById('obliczButton');
if (obliczButton) {
    obliczButton.addEventListener('click', obliczPole);
}