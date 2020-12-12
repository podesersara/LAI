//Declarar variaveis e ligar items do menu à respectiva secção
var menu = $("#main"),
// 385 é um offset definido de forma experimental.
  altura = menu.outerHeight() + 385,
  menua = menu.find("a"),
  scroll= menua.map(function(){
var a = $($(this).attr("href"));
    if (a.length) { 
      return a; 
    }
 });


// Scroll ao click no item de menu
menua.click(function(e){
  var href = $(this).attr("href"),
// + 1 para ele baixar mais um pixel e activar a cor no menu
  margemTop = $(href).offset().top-altura + 1;
$('html, body').stop().animate({ 
  scrollTop: margemTop
}, 1000);
  e.preventDefault();
});

// Ligar distância da secção ao topo ao respectivo item no menu 
$(window).scroll(function(){
  var distanciatopo = $(this).scrollTop()+altura;
  var atual = scroll.map(function(){
    if ($(this).offset().top < distanciatopo)
    return this;
});

//Saber o id do último elemento que foi visitado
atual = atual[atual.length-1];
//Vai buscar o ID da posição 0 do último elemento da caixa onde nos encontramos
var id = atual && atual.length ? atual[0].id : "";
var lastItem;
if (lastItem !== id) {
lastItem = id;

//Mudar a class "active" para o elemento do menu que está a ser visitado no momento.
menua
  .parent().removeClass("active")
  .end().filter("[href='#"+id+"']").parent().addClass("active");
}                   
});

