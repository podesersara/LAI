// Declarar variaveis
function myFunction() {
  var pesquisa = document.getElementById('pesquisa');
  var filtrar = pesquisa.value.toUpperCase();
  var resultados = document.getElementById("resultados");
  var lista = resultados.getElementsByTagName('li');
  var match = false;

// Mostrar resultados compatíveis, esconder não compativeis
for (var index = 0; index < lista.length; index++) {
  var a = lista[index].getElementsByTagName("a")[0];
  var texto = a.textContent || a.innerText;
if (texto.toUpperCase().indexOf(filtrar) > -1) {
  lista[index].style.display = "";
  match = true;
} else {
  lista[index].style.display = "none";
  }
}

// Aparecer aviso se não houver resultados compatíveis
if(match == false){
  document.getElementById("p1").style.display = "block";
}else{
  document.getElementById("p1").style.display = "none";
}
}