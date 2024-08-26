const meses = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  const fechaActual = new Date();
  const mesOrden = fechaActual.getMonth();
  const nombreMes = meses[mesOrden];
  console.log(nombreMes);