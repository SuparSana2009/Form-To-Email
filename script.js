document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('O3Oj5i03zJivbIfCM'); // Ganti dengan User ID dari EmailJS

    document.getElementById('form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_7ekjoqn', 'template_g46z6ml', this)
            .then(function() {
                alert('Email sent successfully!');
            }, function(error) {
                alert('Failed to send email. Error: ' + JSON.stringify(error));
            });
    });
});