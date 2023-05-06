let arregloGasto = [];


function ObjetoGasto(nombreGasto, cantidadGasto) {
  this.nombreGasto = nombreGasto;
  this.cantidadGasto = cantidadGasto;
}

function obtenerDatosGasto() {
  let btnGasto = document.querySelector("#agregarGasto");

  btnGasto.addEventListener("click", () => {
    let nombreGasto = document.querySelector("#nombreGasto").value;
    let cantidadGasto = parseInt(document.querySelector("#datoGasto").value);

    //  let objetoGasto = {
    //   nombreGasto,
    //   cantidadGasto,
    // };
    // console.log(objetoGasto);

    // dato = arregloGasto.indexOf(objetoGasto)
    // console.log(dato);
    // if(dato == -1){
    //   arregloGasto.push(objetoGasto)
    //   console.log(arregloGasto);
    // }else{
    //   console.log("No se agrego al arreglo");
    // }
   

    let gasto = new ObjetoGasto(nombreGasto, cantidadGasto);
    // validar = arregloGasto.includes(gasto)
    // console.log(validar);

    // arregloGasto.push(gasto)
    // console.log(validar);
    // if(arregloGasto.includes(gasto)){
    //   console.log("Si lo incluye");
    // }else{
    //   console.log("no lo incluye");
    //   arregloGasto.push(gasto)
    //   console.log(arregloGasto);
    // }
    renderizarDatos([gasto]);
  });
}

function renderizarDatos(gasto) {
  gasto.forEach((datoGasto) => {
    // if(arregloGasto.includes(datoGasto)){
    //   console.log("Si lo incluye");
    // }else{
    //   console.log("no lo incluye");
    //   arregloGasto.push(datoGasto)
    //   console.log(arregloGasto);
    // }

    let tablaBodyGasto = document.querySelector("#tablaBodyGasto");

    let tablaRowBodyGasto = document.createElement("tr");
    let tablaColNombreGasto = document.createElement("th");
    let tablaColValor = document.createElement("th");
    let tablaColEliminar = document.createElement("th");

    tablaColNombreGasto.setAttribute("id", "gastoComida");

    var estado = arregloGasto.indexOf(datoGasto);
    console.log(datoGasto);
    console.log(estado);
    console.log(arregloGasto);
    if(estado == -1){
      arregloGasto.push(datoGasto);
    console.log(arregloGasto);

} else {
    console.log("No se agrego");
    
}

    tablaColNombreGasto.innerHTML = `${datoGasto.nombreGasto}`;
    tablaColValor.innerHTML = `$ ${datoGasto.cantidadGasto}`;
    tablaColEliminar.innerHTML = "";

    tablaBodyGasto.append(tablaRowBodyGasto);
    tablaRowBodyGasto.append(
      tablaColNombreGasto,
      tablaColValor,
      tablaColEliminar
    );
  });
}

obtenerDatosGasto();
// renderizarDatos()
// let arregloPresupuesto = [];
// let arregloGasto = [];
// let saldo;

// function capturarDatosPresupuesto() {
//   let btnCalcularPresupuesto = document.querySelector("#calcularPresupuesto");

//   btnCalcularPresupuesto.addEventListener("click", () => {
//     let presupuesto = parseInt(
//       document.querySelector("#datoPresupuesto").value
//     );
//     obtenerPresupuesto(presupuesto);
//   });
// }

// function capturarDatosGastos() {
//   let btnAgregarGasto = document.querySelector("#agregarGasto");

//   btnAgregarGasto.addEventListener("click", () => {
//     let nombreGasto = document.querySelector("#nombreGasto").value;
//     let cantidadGasto = parseInt(document.querySelector("#datoGasto").value);

//     let objetoGasto = {
//       nombreGasto,
//       cantidadGasto,
//     };

//     obtenerGasto([objetoGasto]);
//   });
// }

// function obtenerPresupuesto(datosPresupuesto) {
//   arregloPresupuesto.push(datosPresupuesto);

//   arregloPresupuesto.forEach((presupuesto) => {
//     saldo = presupuesto;
//     let tablaBodyPresupuesto = document.querySelector("#tablaBodyPresupuesto");

//     let tablaRowBodyPresupuesto = document.createElement("tr");
//     let tablaColPresupuesto = document.createElement("th");
//     let tablaColGasto = document.createElement("th");
//     let tablaColSaldo = document.createElement("th");

//     tablaColSaldo.setAttribute("id", "saldoRow");

//     tablaColPresupuesto.innerHTML = `$ ${presupuesto}`;
//     tablaColGasto.innerHTML = "";
//     tablaColSaldo.innerHTML = `$ ${saldo}`;

//     tablaBodyPresupuesto.append(tablaRowBodyPresupuesto);
//     tablaRowBodyPresupuesto.append(
//       tablaColPresupuesto,
//       tablaColGasto,
//       tablaColSaldo
//     );
//   });
// }

// function obtenerGasto(datosGastos) {
//   console.log(datosGastos);
//   datosGastos.forEach((gasto) => {
//     console.log(gasto);
//     console.log(arregloGasto);
//     let tablaBodyGasto = document.querySelector("#tablaBodyGasto");

//     let tablaRowBodyGasto = document.createElement("tr");
//     let tablaColNombreGasto = document.createElement("th");
//     let tablaColValor = document.createElement("th");
//     let tablaColEliminar = document.createElement("th");

//     tablaColNombreGasto.setAttribute("id", "gastoComida");

//     // tablaColNombreGasto.innerHTML = `${gasto.nombreGasto}`;
//     // tablaColValor.innerHTML = `$ ${gasto.cantidadGasto}`;
//     // tablaColEliminar.innerHTML = "";

//     tablaBodyGasto.append(tablaRowBodyGasto);
//     tablaRowBodyGasto.append(
//       tablaColNombreGasto,
//       tablaColValor,
//       tablaColEliminar
//     );

//     dato = arregloGasto.indexOf(gasto)
//     console.log(dato);

//   });
// }

// capturarDatosPresupuesto();
// capturarDatosGastos();

/*   // saldo = arregloPresupuesto[0] - gasto.cantidadGasto;
  console.log(arregloGasto);
  if (saldoRow) {
    saldoRow.innerHTML = saldo;
    dato = arregloGasto.indexOf(gasto);
    console.log(gasto);
    console.log(dato);
    if (dato == -1) {
      arregloGasto.push(gasto);
      console.log(arregloGasto);
      tablaColNombreGasto.innerHTML = `${gasto.nombreGasto}`;
      tablaColValor.innerHTML = `$ ${gasto.cantidadGasto}`;
      tablaColEliminar.innerHTML = "";
      console.log("lo agrego");
    }
  } else {
    console.log("No lo agrego");
  } */
