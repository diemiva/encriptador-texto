function encriptar() {
    const texto = document.getElementById("texto").value.trim().toLowerCase();
    if (texto === "") {
      mostrarError("Debes ingresar un texto");
      return;
    }
  
    const textoCifrado = texto
     .replace(/e/gi, "enter")
     .replace(/i/gi, "imes")
     .replace(/a/gi, "ai")
     .replace(/o/gi, "ober")
     .replace(/u/gi, "ufat");
  
    mostrarResultado(textoCifrado, "Texto encriptado con éxito");
    document.getElementById("descifrador").style.display = "none";
  
  }
  
  function desencriptar() {
    const texto = document.getElementById("texto").value.trim().toLowerCase();
    if (texto === "") {
      mostrarError("Debes ingresar un texto");
      return;
    }
  
    const textoCifrado = texto
     .replace(/enter/gi, "e")
     .replace(/imes/gi, "i")
     .replace(/ai/gi, "a")
     .replace(/ober/gi, "o")
     .replace(/ufat/gi, "u");
  
    mostrarResultado(textoCifrado, "Texto desencriptado con éxito");
    document.getElementById("descifrador").style.display = "none";

  }
  
  function copiarTexto() {
    var texto = document.getElementById("resultado-texto"); // Get the element with the id "resultado-texto"
    texto.select(); 
    document.execCommand('copy'); 
    alert("Copiado en el portapapeles!");
  }
  
  function mostrarError(mensaje) {
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const p = document.getElementById("p");
 
  
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    p.textContent = mensaje;
    swal("Ooops!", mensaje, "warning");
  }
  
  function mostrarResultado(texto, mensaje) {
    const tituloMensaje = document.getElementById("titulo-mensaje");
    const p = document.getElementById("p");
  
    document.getElementById("resultado-texto").value = texto;
    tituloMensaje.textContent = mensaje;
    p.textContent = "";
  }
