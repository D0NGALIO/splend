// Obtén el input de archivo, la imagen y el botón de selección de imagen
const inputFile = document.getElementById('profile-image');
const imagePreview = document.getElementById('profile-image-preview-img');
const selectImageLabel = document.getElementById('select-image-label');

// Agrega un evento de cambio al input de archivo
inputFile.addEventListener('change', (e) => {
  // Obtén la imagen seleccionada
  const file = e.target.files[0];

  // Crea un objeto URL para la imagen
  const url = URL.createObjectURL(file);

  // Actualiza la fuente de la imagen
  imagePreview.src = url;

  // Muestra la imagen
  imagePreview.style.display = 'block';

  // Oculta el botón de selección de imagen
  selectImageLabel.style.display = 'none';
});

// Agrega un evento de carga a la imagen
imagePreview.addEventListener('load', () => {
  imagePreview.style.display = 'block';
  selectImageLabel.style.display = 'none';
});
