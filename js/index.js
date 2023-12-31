function cambiarContenido() { 
  document.getElementById("parrafo").innerHTML = "Reducción del estrés en el sistema cardiovascular: La presión arterial alta ejerce una tensión adicional en las arterias y el corazón, lo que con el tiempo puede causar daño a los vasos sanguíneos y aumentar el riesgo de enfermedades del corazón."
}

function cambiarContenidoDos() { 
  document.getElementById("parrafo").innerHTML ="Preservación de la función renal: La hipertensión no controlada puede dañar los riñones y aumentar el riesgo de enfermedad renal crónica. El control de la presión arterial puede ayudar a mantener una función renal óptima."
}

function cambiarContenidoTres() { 
  document.getElementById("parrafo").innerHTML = "Prevención de accidentes cerebrovasculares: La presión arterial alta es un factor de riesgo importante para los accidentes cerebrovasculares (derrames cerebrales). Controlar la presión arterial puede reducir el riesgo de sufrir un accidente cerebrovascular."
}

function cambiarContenidoCuatro() { 
  document.getElementById("parrafo").innerHTML = "Mayor longevidad y bienestar: Mantener una presión arterial saludable puede contribuir a una vida más larga y a un mayor bienestar general. La hipertensión no controlada puede acortar la expectativa de vida y reducir la calidad de vida."
}

function cambiarContenidoCinco() { 
  document.getElementById("parrafo").innerHTML =  "Facilita el control de otros factores de riesgo: El control de la presión arterial puede ayudar a gestionar otros factores de riesgo cardiovascular, como el colesterol alto y la diabetes. Juntos, estos factores de riesgo pueden aumentar significativamente el riesgo de enfermedades cardiovasculares."
} 

setTimeout(cambiarContenido, 5000);
setTimeout(cambiarContenidoDos, 10000);
setTimeout(cambiarContenidoTres, 15000);
setTimeout(cambiarContenidoCuatro, 20000);
setTimeout(cambiarContenidoCinco, 25000);

let objetoPresion = {
  priorizarValor: function(sistolica, diastolica) {
    const rangoSistolica = this.calcularRangoSistolica(sistolica);
    const rangoDiastolica = this.calcularRangoDiastolica(diastolica);

    return Math.max(rangoSistolica, rangoDiastolica);
  },

  calcularRangoSistolica: function(sistolica) {
    if (sistolica >= 100 && sistolica <= 140) {
      return 1; 
    } else if (sistolica >= 141 && sistolica <= 160) {
      return 2; 
    } else if (sistolica >= 161 && sistolica <= 180) {
      return 3; 
    } else if (sistolica > 181) {
      return 4; 
    } else {
      return 0; 
    }
  },
  
  calcularRangoDiastolica: function(diastolica) {
    if (diastolica >= 60 && diastolica <= 90) {
      return 1; 
    } else if (diastolica >= 91 && diastolica <= 100) {
      return 2; 
    } else if (diastolica >= 101 && diastolica <= 110) {
      return 3; 
    } else if (diastolica > 111) {
      return 4; 
    } else {
      return 0; 
    }
  },

  obtenerRespuesta: function(rango) {
    switch (rango) {
      case 0:
        return "Valor inválido";
      case 1:
        return "Tensión normal";
      case 2:
        return "Hipertensión";
      case 3:
        return "Hipertensión severa";
      case 4:
        return "Crisis hipertensiva";
      default:
        return "Respuesta no encontrada";
    }
  },

  resultadosArray: [],

  agregarResultado: function(resultado) {
    this.resultadosArray.push(resultado);
  },

  obtenerResultados: function() {
    return this.resultadosArray;
  }
};

function handleFormSubmit(event) {
  event.preventDefault();

  let sistolicaInput = document.querySelector("#sistolica").value;
  let diastolicaInput = document.querySelector("#diastolica").value;
  

  if (!isNaN(sistolicaInput) && !isNaN(diastolicaInput)) {
    sistolicaInput = parseFloat(sistolicaInput);
    diastolicaInput = parseFloat(diastolicaInput);

    let resultado = objetoPresion.priorizarValor(sistolicaInput, diastolicaInput);
    objetoPresion.agregarResultado(resultado);

    let respuesta = objetoPresion.obtenerRespuesta(resultado);

    sessionStorage.setItem("sistolica", sistolicaInput);
    sessionStorage.setItem("diastolica", diastolicaInput);
    sessionStorage.setItem("respuesta", respuesta);

    let respuestaElement = document.querySelector("#respuesta");
    respuestaElement.textContent = respuesta;

    document.getElementById("presionForm").reset();

  } else {
    alert("Por favor, ingrese valores numéricos para la presión sistólica y diastólica.");
  } 

}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("#presionForm").addEventListener("submit", handleFormSubmit.bind(null, event));


  let sistolica = sessionStorage.getItem("sistolica");
  let diastolica = sessionStorage.getItem("diastolica");
  let respuesta = sessionStorage.getItem("respuesta");

  if (sistolica && diastolica && respuesta) {
    document.querySelector("#sistolica").value = sistolica;
    document.querySelector("#diastolica").value = diastolica;
    document.querySelector("#respuesta").textContent = respuesta;
  }
});

const BOTON_COMPARTIR = document.getElementById("botonCompartir");

BOTON_COMPARTIR.addEventListener("click", ()=>{
  Toastify({
    text: "Compartido con éxito!",
    duration: 3000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    stopOnFocus: true, 
    style: {
      background: "linear-gradient(to right, #00b09b, #96c93d)",
    },
  }).showToast();
  
})