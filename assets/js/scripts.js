const arregloGasto = [];
let objetoPresupuesto = {};

const infoPresupuesto = () => {
  const btnCalcularPresupuesto = document.querySelector("#calcularPresupuesto");
  btnCalcularPresupuesto.addEventListener("click", () => {
    const datoPresupuesto = parseInt(
      document.querySelector("#datoPresupuesto").value
    );
    objetoPresupuesto = {
      presupuesto: datoPresupuesto,
      gastos: 0,
      saldo: datoPresupuesto,
    };
    console.log(objetoPresupuesto);
    btnCalcularPresupuesto.disabled = true;
    renderizarPresupuesto(objetoPresupuesto);
  });
};

const renderizarPresupuesto = (objetoPresupuesto) => {
  let tablaBodyPresupuesto = document.querySelector("#tablaBodyPresupuesto");
  let tablaRowBodyPresupuesto = document.createElement("tr");
  let tablaColNombrePresupuesto = document.createElement("th");
  let tablaColGasto = document.createElement("th");
  let tablaColSaldo = document.createElement("th");

  tablaColNombrePresupuesto.setAttribute("id", "ingresarPresupuesto");
  tablaColGasto.setAttribute("id", "ingresarPresupuestoGasto");
  tablaColSaldo.setAttribute("id", "ingresarSaldo");

  tablaColNombrePresupuesto.setAttribute(
    "value",
    `$${objetoPresupuesto.presupuesto}`
  );
  tablaColGasto.setAttribute("value", `$${objetoPresupuesto.gastos}`);
  tablaColSaldo.setAttribute("value", `$${objetoPresupuesto.saldo}`);

  tablaColNombrePresupuesto.innerHTML = `$${objetoPresupuesto.presupuesto}`;
  tablaColGasto.innerHTML = `$${objetoPresupuesto.gastos}`;
  tablaColSaldo.innerHTML = `$${objetoPresupuesto.saldo}`;

  tablaRowBodyPresupuesto.append(
    tablaColNombrePresupuesto,
    tablaColGasto,
    tablaColSaldo
  );
  tablaBodyPresupuesto.append(tablaRowBodyPresupuesto);
};

const infoGasto = () => {
  const btnCalcularGasto = document.querySelector("#agregarGasto");
  btnCalcularGasto.addEventListener("click", () => {
    const nombreGasto = document.querySelector("#nombreGasto").value;
    const cantidadGasto = parseInt(document.querySelector("#datoGasto").value);
    let objetoGasto = {
      nombreGasto,
      cantidadGasto,
    };
    renderizarDatosGasto([objetoGasto]);
    arregloGasto.push(objetoGasto);
    console.log(arregloGasto);
  });
};

function renderizarDatosGasto(gasto) {
  gasto.forEach((datoGasto) => {
    console.log(datoGasto);
    let tablaBodyGasto = document.querySelector("#tablaBodyGasto");
    let tablaRowBodyGasto = document.createElement("tr");
    let tablaColNombreGasto = document.createElement("th");
    let tablaColValor = document.createElement("th");
    let tablaColEliminar = document.createElement("th");
    let btnEliminar = document.createElement("button");

    tablaRowBodyGasto.setAttribute("id", `${datoGasto.nombreGasto}`);
    tablaColNombreGasto.setAttribute("class", "ingresarGastoComida");
    tablaColValor.setAttribute("class", "ingresarGastoValor");
    tablaColEliminar.setAttribute("class", "ingresarBtnEliminar");

    // btnEliminar.setAttribute("class", "btnEliminar");

    tablaColValor.setAttribute("value", `${datoGasto.cantidadGasto}`);

    let tablaColGasto = document.querySelector("#ingresarPresupuestoGasto");
    let tablaColSaldo = document.querySelector("#ingresarSaldo");

    objetoPresupuesto.gastos += datoGasto.cantidadGasto;
    objetoPresupuesto.saldo = objetoPresupuesto.saldo - datoGasto.cantidadGasto;

    tablaColGasto.value = objetoPresupuesto.gastos;
    tablaColGasto.innerHTML = `$${objetoPresupuesto.gastos}`;

    tablaColSaldo.value = objetoPresupuesto.saldo;
    tablaColSaldo.innerHTML = `$${objetoPresupuesto.saldo}`;

    console.log(objetoPresupuesto.gastos);

    tablaColNombreGasto.innerHTML = `${datoGasto.nombreGasto}`;
    tablaColValor.innerHTML = `$ ${datoGasto.cantidadGasto}`;
    btnEliminar.innerHTML = "Borrar";

    btnEliminar.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.remove();
      arregloGasto.splice(arregloGasto.indexOf(gasto), 1);
    });

    tablaBodyGasto.append(tablaRowBodyGasto);
    tablaColEliminar.append(btnEliminar);
    tablaRowBodyGasto.append(
      tablaColNombreGasto,
      tablaColValor,
      tablaColEliminar
    );
  });
}



infoPresupuesto();
infoGasto();
