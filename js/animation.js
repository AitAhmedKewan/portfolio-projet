const image = document.querySelector('.image-réseau');

image.addEventListener('mousemove', (e) => {
    const { offsetWidth: width, offsetHeight: height } = image;
    const { offsetX: x, offsetY: y } = e;

    // Calculer les pourcentages de la position de la souris par rapport à l'image
    const percentX = (x / width) * 100;
    const percentY = (y / height) * 100;

    // Appliquer la rotation en fonction de la position de la souris
    image.style.transform = `rotateY(${percentX - 50}deg) rotateX(${-(percentY - 50)}deg) scale(1.1)`;
});

image.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateY(0deg) rotateX(0deg) scale(1)'; // Réinitialiser à la position de départ
});