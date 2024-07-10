function encriptar() {
    const texto = document.getElementById("texto").value.trim();
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
  }
  
  function desencriptar() {
    const texto = document.getElementById("texto").value.trim();
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
  }
  
  function copiarTexto() {
    const texto = document.getElementById("resultado-texto").textContent;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado al portapapeles");
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