document.addEventListener('DOMContentLoaded', function () {
  var formLogin = document.getElementById('formulario-Login');
  formLogin.addEventListener('submit', function (event) {
    event.preventDefault();

    var usuario = document.getElementById('usuario').value;
    var password = document.getElementById('password').value;

    alert(
      usuario +
        '\n' +
        password +
        '\n' +
        ' Login Completado! Transportandonos a la lista de contactos...'
    );

    window.location.href = '../Agenda-Web/assets/pages/pageOne.html';
  });
});
