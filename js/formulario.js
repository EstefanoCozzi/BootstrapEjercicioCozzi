document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const emailInput = document.getElementById('email');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario para realizar la validación

        // Resetea los estados de validación anteriores
        form.classList.remove('was-validated');

        // Verifica si el formulario es válido
        if (form.checkValidity() === false) {
            form.classList.add('was-validated'); // Agrega la clase para mostrar mensajes de error
        } else {
            // Valida el correo electrónico
            if (!validateEmail(emailInput.value)) {
                emailInput.classList.add('is-invalid'); // Muestra mensaje de error si el email es inválido
                return;
            }

            // Aquí puedes agregar el código para enviar el formulario, como usar AJAX para enviar datos
            alert('Formulario enviado correctamente.');
            form.reset(); // Opcional: resetea el formulario después de la validación
        }
    });

    function validateEmail(email) {
        // Expresión regular para validar formato de correo electrónico
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
