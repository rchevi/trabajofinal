document.querySelectorAll('.piezas img').forEach(img => {
    img.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', e.target.src);
    });
})

document.querySelectorAll('.solucion').forEach(solucion => {
    solucion.addEventListener('dragover', function(e) {
        e.preventDefault();
    });

    solucion.addEventListener('drop', function(e) {
        e.preventDefault();
        const imgSrc = e.dataTransfer.getData('text/plain');
        const img = document.createElement('img');
        img.src = imgSrc;
        img.draggable = true;
        solucion.appendChild(img);
    });
});

document.getElementById('reiniciar').addEventListener('click', function() {
    document.querySelectorAll('.solucion').forEach(solucion => {
        while (solucion.firstChild) {
            solucion.removeChild(solucion.firstChild);
        }
    });
});
//prueba para subir
