// Prisijungimo formos valdymas
document.getElementById('prisijungimo-forma')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const vartotojas = document.getElementById('vartotojas').value;
    const slaptazodis = document.getElementById('slaptazodis').value;

    // Imituojamas prisijungimas (pakeiskite tikru autentifikavimu)
    if (vartotojas && slaptazodis) {
        alert('Prisijungimas sėkmingas! Perkeliame į skydelį...');
        window.location.href = 'skydelis.html';
    } else {
        alert('Prašome užpildyti visus laukus.');
    }
});
