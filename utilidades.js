function aplicarDescuento(precio, porcentaje) {
  if (!(porcentaje >= 0 && porcentaje <= 100)) {
    throw new RangeError("El porcentaje debe estar entre 0 y 100");
  }

  return Math.round((precio * (1 - porcentaje / 100) + Number.EPSILON) * 100) / 100;
}

module.exports = { aplicarDescuento };