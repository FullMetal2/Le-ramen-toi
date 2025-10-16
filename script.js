const reserverBtn = document.getElementById('btnReserver');
const validerBtn = document.getElementById('validerBtn');
const annulerBtn = document.getElementById('annulerBtn');
const popupReservation = document.getElementById('popupReservation');
const overlay = document.getElementById('overlay');

reserverBtn.addEventListener('click', ouvrirPopup);
validerBtn.addEventListener('click', validerReservation);
annulerBtn.addEventListener('click', fermerPopup);
overlay.addEventListener('click', fermerPopup);

function ouvrirPopup() {
    popupReservation.style.display = 'block';
    overlay.style.display = 'block';
}

function fermerPopup() {
    popupReservation.style.display = 'none';
    overlay.style.display = 'none';
}

function validerReservation() {
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const date = document.getElementById('dateReservation').value;
    const heure = document.getElementById('heureReservation').value;

    if (nom && prenom && date && heure) {
        alert(`Réservation confirmée pour ${prenom} ${nom} le ${date} à ${heure}`);
        fermerPopup();
    } else {
        alert('Veuillez remplir tous les champs');
    }
}