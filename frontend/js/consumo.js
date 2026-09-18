const categoriaSelect = document.getElementById('categoryInput');

if (categoriaSelect) {
    categoriaSelect.innerHTML = '<option value="">Seleccione una categoría</option>';

    fetch('http://localhost:4000/api/categoria')
        .then((respuesta) => {
            if (!respuesta.ok) {
                throw new Error('No se pudo cargar la categoría');
            }
            return respuesta.json();
        })
        .then((datos) => {
            const categorias = Array.isArray(datos?.data) ? datos.data : [];

            categorias.forEach((item) => {
                const option = document.createElement('option');
                option.value = item.id_categoria ?? item.id ?? item.nombre;
                option.textContent = item.nombre;
                categoriaSelect.appendChild(option);
            });
        })
        .catch((error) => {
            console.error('Error al cargar categorías:', error);
            categoriaSelect.innerHTML = '<option value="">No disponible</option>';
        });
}