let objetoPresion = {
  priorizarValor: function(sistolica, diastolica) {
    const rangoSistolica = this.calcularRangoSistolica(sistolica);
    const rangoDiastolica = this.calcularRangoDiastolica(diastolica);

    return Math.max(rangoSistolica, rangoDiastolica);
  },

  calcularRangoSistolica: function(sistolica) {
    if (sistolica >= 100 && sistolica <= 140) {
      return "tension normal";
    } else if (sistolica >= 141 && sistolica <= 160) {
      return "hipertension";
    } else if (sistolica >= 161 && sistolica <= 180) {
      return "hipertension severa";
    } else if (sistolica > 181) {
      return "crisis hipertensiva";
    } else {
      return "el valor ingresado no es valido";
    }
  },

  calcularRangoDiastolica: function(diastolica) {
    if (diastolica >= 60 && diastolica <= 90) {
      return "tension normal";
    } else if (diastolica >= 91 && diastolica <= 100) {
      return "hipertension";
    } else if (diastolica >= 101 && diastolica <= 110) {
      return "hipertension severa";
    } else if (diastolica > 111) {
      return "crisis hipertensiva";
    } else {
      return "el valor ingresado no es valido";
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

let sistolica = parseFloat(prompt("Ingrese el valor de su presion sistolica:"));
let diastolica = parseFloat(prompt("Ingrese el valor de su presion diastolica:"));

let resultado = objetoPresion.priorizarValor(sistolica, diastolica);
objetoPresion.agregarResultado(resultado);

let resultados = objetoPresion.obtenerResultados();

alert(resultados);

