// Animação inicial encadeada
$('#title').css("opacity", 0).delay(1000).animate({ marginTop: "3", opacity: 1}, 500, function(){
    $('ul').css("opacity", 0).animate({marginTop: "10", opacity:1}, 500, function(){
        $('.artigo').css("opacity", 0).animate({ opacity:1}, 600);
    });
});

// Filtrar artigos por atributo
$('.menu-item').click(function smooth(){
    var tema = $(this).attr('data-filter');
    if (tema == 'Tudo'){
        $('.artigo').show('slow','swing');
    }else{
        $('.artigo').not('.'+tema).hide('slow', 'swing');
        $('.artigo').filter('.'+tema).show('slow', 'swing');
    }  
});

// Abrir pop-up com conteúdo do artigo clicado
$('.artigo').click(function(){
    var info = $(this).html();
    $('#janela-content').html(info);
    $('.fundo').fadeIn();
    $('#janela').fadeIn();
});

// Fechar pop-up
$('#close').click(function(){
$('.fundo').fadeOut();
$('#janela').fadeOut();
});


// Adicionar classe de ativo ao filtro clicado e remover
var filtros = document.getElementById("main");
var item = filtros.getElementsByClassName("menu-item");

for (var i = 0; i < item.length; i++) {
item[i].addEventListener("click", function() {
    var atual = document.getElementsByClassName("active");
    atual[0].className = atual[0].className.replace(" active", "");
    this.className += " active";
})
};
