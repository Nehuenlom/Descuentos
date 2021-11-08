let btnEnv = document.getElementById("btnEnviar");
let dato = document.getElementById("dato");
let dato2 = document.getElementById("dato2");

btnEnv.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el dato ingresado es ", dato.value);
  console.log("el dato ingresado es ", dato2.value);
  let resultado: number = Number(dato.value) * Number(dato2.value);
  console.log("el area del rectangulo es ");
  console.log(resultado);
  //}
});
//agrego cara de algo