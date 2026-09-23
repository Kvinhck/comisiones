const VENTAS_BASE = 5;

function calcularComision(numeroVentas, precioProducto) {
  let comision = 0;
  if (numeroVentas > VENTAS_BASE) {
    let ventasExtras = numeroVentas - VENTAS_BASE;
    comision = ventasExtras * (precioProducto * 0.1);
  }
  return comision;
}

function calcular() {
  let cmpSueldoBase = document.getElementById("txtSueldoBase");
  let cmpVenta = document.getElementById("txtVentas");
  let cmpPrecio = document.getElementById("txtPrecio");
  let sueldoBaseStr = cmpSueldoBase.value;
  let ventaStr = cmpVenta.value;
  let precioStr = cmpPrecio.value;

  let sueldoBase = parseFloat(sueldoBaseStr);
  let ventas = parseFloat(ventaStr);
  let precio = parseFloat(precioStr);

  let comision = calcularComision(ventas, precio);

  let total = sueldoBase + comision;

  let spSueldoBase = document.getElementById("spSueldoBase");
  let spComision = document.getElementById("spComision");
  let cmpTotal = document.getElementById("spTotal");
  spSueldoBase.textContent = sueldoBase;
  spComision.textContent = comision;
  cmpTotal.textContent = total;
}
