function alertaLogin() {
  let nombre = document.getElementById('nombre').value;
  let contraseña = document.getElementById('contraseña').value;
  alert(
    `Nombre: ${nombre}\nContraseña: ${contraseña}\nLogin exitoso! Transportandonos a la lista de contactos...`
  );
  window.location.href = './assets/pages/pageOne.html';
}
