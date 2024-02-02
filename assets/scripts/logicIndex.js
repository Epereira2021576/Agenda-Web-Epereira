document.addEventListener('DOMContentLoaded', function () {
  var formLogin = document.getElementById('formulario-Login');
  formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value;
    var contraseña = document.getElementById('contraseña').value;

    alert(
      nombre +
        ' Bienvenido al sistema, transportandonos a la lista de contactos...'
    );

    window.location.href = '../Agenda-Web/assets/pages/pageOne.html';
  });
});
