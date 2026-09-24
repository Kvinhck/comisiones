function recuperarTexto(idComponente) {
  let cmp = document.getElementById(idComponente);
  let valor = cmp.value;
  return valor;
}

function recuperarFloat(idComponente) {
  let valorTexto = recuperarTexto(idComponente);
  let valorFloat = parseFloat(valorTexto);
  return valorFloat;
}

function recuperarEntero(idComponente) {
  let valorTexto = recuperarTexto(idComponente);
  let valorEntero = parseInt(valorTexto);
  return valorEntero;
}

function recuperarMostarEnSpan(idComponente, valor) {
  let cmp = document.getElementById(idComponente);
  cmp.textContent = valor;
}
