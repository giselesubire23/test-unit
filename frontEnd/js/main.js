'use strict';

//=====================
// VARS
//=====================

var $window   = $( window ),html,
    $document = $( document ),
    srcJson      = 'js/data/data.json';


//=====================
// VARS TEMPLATES
//=====================

var templateHome = '<div class="list-item" data-perfil="{nome1}"></div>';


//=====================
// READY
//=====================

$document.ready( appInit );


//=====================
// APP
//=====================

// HIERARQUIA DE FUNÇÕES QUE SERÃO CHAMADAS NO DOCUMENT READY (APÓS O CARREGAMENTO DO DOM)
function appInit(){
    appSet();
    appEvents();
    appLoad();
};

// PRIMEIRAS FUNÇÕES A SEREM CHAMADAS COM O CARREGAMENTO DA PÁGINA
function appSet(){
    alert();
    initCarousel()
};

// ENCAPSULA TODOS OS EVENTOS (CLICK, MOUSEOVER, ETC)
function appEvents(){
    $document.on( 'click', '.scroll-up', initUp );
    $document.on( 'mouseOver', '.scroll-up', initUp );
};

// REQUISIÇÃO E CARREGAMENTO DOS JSONS (GET, ERRO E DONE)
function appLoad(){
    $.getJSON( srcJson, appLoaded )
    .fail( errorLoadJson )
    .done( done );
};

// RETORNO DA REQUISIÇÃO JAX. EXEMPLO DE CÓDIGO POSSÍVEL, CRIANDO INTERAÇÃO E APPEND DOS ITENS DO JSON
function appLoaded( response ){
    for( var i in response ){
        var _appendA = templateHome;
            _appendA = _appendA.replace( '{nome1}', 'teste' );

            $( 'body' ).append( _appendA );
    }
};


//=====================
// HELPERS
//=====================

function errorLoadJson() {
    console.log( 'Erro' );
};

function done() {
    console.log( 'Carregou!' );
};

function initUp(){
    if( $page === "Home" ) {

    } 
};

function alert(){
    console.log( 'primeira função a ser chamada após o carregamento da página' )
};