// toggle: abre/cierra la lista de subtemas y cambia el icono
function toggle(elemento) {
    const subtemas = elemento.nextElementSibling;
    const icono = elemento.querySelector("img");
    const unidad = elemento.parentElement; // <li class="unidad">

    if (subtemas.style.display === "block") {
        subtemas.style.display = "none";
        unidad.classList.remove('open');
        if (icono) icono.src = "img/carpeta_c.png";
    } else {
        subtemas.style.display = "block";
        unidad.classList.add('open');
        if (icono) icono.src = "img/carpeta_a.png";
    }
}

// cargarTema: carga el tema en el visor y marca el <li> como activo.
// Puede recibir el elemento <li> (recomendado) o intentar localizarlo por ruta.
function cargarTema(ruta, liElem) {
    // 1) marcar el <li> activo (quitar active de todos)
    document.querySelectorAll('.subtemas li.active').forEach(el => el.classList.remove('active'));

    // 2) localizar el <li> si no fue pasado (fallback)
    let li = liElem;
    if (!li) {
        // busca por atributo data-url si lo usas, o por onclick que contenga la ruta
        li = document.querySelector(`.subtemas li[data-url="${ruta}"]`)
           || document.querySelector(`.subtemas li[onclick*="${ruta}"]`);
    }

    if (li) {
        li.classList.add('active');

        // asegurar que la unidad contenedora esté abierta y con icono "abierto"
        const unidad = li.closest('.unidad');
        if (unidad) {
            const sub = unidad.querySelector('.subtemas');
            const icono = unidad.querySelector('.unidad-titulo img');
            if (sub) sub.style.display = "block";
            unidad.classList.add('open');
            if (icono) icono.src = "img/carpeta_a.png";
        }
    }


     const visor = document.getElementById("visor");
    if (visor) {
        visor.src = ruta;
    } else {
        // si usas fetch u otro método, reemplaza aquí
        console.warn("No se encontró #visor para cargar la ruta:", ruta);
    }

    
}
