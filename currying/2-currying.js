/* transforma função com n parametros em apenas um funcão que recebe um paramentro*/

function soma(a) {
  return function (b) {
    return a + b;
  };
}

const soma2 = soma(2); // guarda parametro 2 na constante

// 2*2
soma(2);
// 2*3
soma(3);
