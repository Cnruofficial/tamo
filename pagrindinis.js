// Prisijungimo formos valdymas
document.getElementById('prisijungimo-forma')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const vartotojas = document.getElementById('vartotojas').value;
    const slaptazodis = document.getElementById('slaptazodis').value;

    // Imituojamas prisijungimas
    if (vartotojas && slaptazodis) {
        window.location.href = 'naujienos.html';
    } else {
        alert('Prašome užpildyti visus laukus.');
    }
});
