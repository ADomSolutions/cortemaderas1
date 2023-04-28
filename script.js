function calcular() {
  // Obtener valores ingresados por el usuario
  var anchoMaterial = parseFloat(document.getElementById("ancho_material").value);
  var altoMaterial = parseFloat(document.getElementById("alto_material").value);
  var cantidadObjetos = parseInt(document.getElementById("cantidad_objetos").value);

  // Calcular número de filas y columnas
  var filas = Math.ceil(Math.sqrt(cantidadObjetos));
  var columnas = Math.ceil(cantidadObjetos / filas);

  // Calcular tamaño de cada corte
  var anchoCorte = anchoMaterial / columnas;
  var altoCorte = altoMaterial / filas;

  // Calcular número de cortes
  var cortes = columnas * filas;

  // Calcular porcentaje de material utilizado
  var materialUtilizado = (anchoCorte * altoCorte * cortes) / (anchoMaterial * altoMaterial) * 100;

  // Crear tabla con los resultados
  var tabla = document.getElementById("tabla_resultados");
  tabla.innerHTML = "";
  var filaEncabezado = tabla.insertRow();
  var celdaEncabezado1 = filaEncabezado.insertCell();
  var celdaEncabezado2 = filaEncabezado.insertCell();
  celdaEncabezado1.innerHTML = "Cantidad de cortes";
  celdaEncabezado2.innerHTML = cortes;
  var filaAncho = tabla.insertRow();
  var celdaAncho1 = filaAncho.insertCell();
  var celdaAncho2 = filaAncho.insertCell();
  celdaAncho1.innerHTML = "Ancho de cada corte";
  celdaAncho2.innerHTML = anchoCorte.toFixed(2);
  var filaAlto = tabla.insertRow();
  var celdaAlto1 = filaAlto.insertCell();
  var celdaAlto2 = filaAlto.insertCell();
  celdaAlto1.innerHTML = "Alto de cada corte";
  celdaAlto2.innerHTML = altoCorte.toFixed(2);
  var filaUtilizacion = tabla.insertRow();
  var celdaUtilizacion1 = filaUtilizacion.insertCell();
  var celdaUtilizacion2 = filaUtilizacion.insertCell();
  celdaUtilizacion1.innerHTML = "Porcentaje de material utilizado";
  celdaUtilizacion2.innerHTML = materialUtilizado.toFixed(2) + "%";

  // Crear gráfico de barras con la distribución de los cortes
  var grafico = document.getElementById("grafico");
  grafico.innerHTML = "";
  for (var i = 0; i < cortes; i++) {
    var barra = document.createElement("div");
    barra.className = "barra";
    barra.style.width = (anchoCorte / anchoMaterial * 100) + "%";
    grafico.appendChild(barra);
  }
  // Crear diagrama de caja
var diagrama = document.getElementById("diagrama");
diagrama.innerHTML = ""; // Limpiar contenido previo
var posicionTop = 0;
var posicionLeft = 0;

for (var i = 0; i < cortes; i++) {
  // Crear caja y agregar estilos
  var caja = document.createElement("div");
  caja.className = "caja";
  caja.style.width = anchoCorte + "px";
  caja.style.height = altoCorte + "px";

  // Posicionar caja dentro del contenedor
  caja.style.top = posicionTop + "px";
  caja.style.left = posicionLeft + "px";

  // Agregar caja al diagrama
  diagrama.appendChild(caja);

  // Actualizar posición para la siguiente caja
  if ((i+1) % columnas == 0) {
    posicionTop += altoCorte;
    posicionLeft = 0;
  } else {
    posicionLeft += anchoCorte;
  }
}var colores = ["#FFA07A", "#FFD700", "#7FFFD4", "#9370DB", "#B0C4DE", "#90EE90", "#FF6347", "#00CED1", "#F0E68C", "#00FA9A"];
var indiceColor = 0;
var cajas = document.querySelectorAll(".caja");
for (var i = 0; i < cajas.length; i++) {
  cajas[i].style.backgroundColor = colores[indiceColor];
  indiceColor = (indiceColor + 1) % colores.length;
}

}

