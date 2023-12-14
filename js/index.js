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