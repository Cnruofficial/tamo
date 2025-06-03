// Prisijungimo formos valdymas
document.getElementById('login-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const vartotojas = document.getElementById('vartotojas').value;
    const slaptazodis = document.getElementById('slaptazodis').value;

    // Imituojamas prisijungimas
    if (vartotojas && slaptazodis) {
        window.location.href = 'news.html';
    } else {
        alert('Prašome užpildyti visus laukus.');
    }
});
