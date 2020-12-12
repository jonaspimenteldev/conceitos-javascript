function fn() {
  log("Hoisting de função");
  
  function log(value) {
    console.log(value);
  }
}

fn();

function fn() {
  // sempre declarar antes de usar
  function log(value) {
    console.log(value);
  }
  log("Hoisting de função");
}

fn();
