document.getElementById('myForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const areaTexto = document.getElementById('areaTexto').value;
  
    const formData = { nombre, apellido, email, areaTexto };
  
    const response = await sendFormData(formData);
  
    if (response.success) {
      Swal.fire({
        icon: 'success',
        title: '¡Formulario enviado!',
        text: 'Gracias por completar el formulario.',
        showConfirmButton: false,
        timer: 2000
      });
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al enviar el formulario. Por favor, inténtalo nuevamente.',
      });
    }
  });
  
  async function sendFormData(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ success: true });
    }, 2000);
    });
  }