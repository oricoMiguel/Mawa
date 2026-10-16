
function mostrarProduto(produtoId) {
    document.getElementById('descricao').classList.remove('oculto')

    var  produtos = document.querySelectorAll('.produto');
    produtos.forEach(function(prod) {
        prod.classList.remove('ativo')
    });

    // Mostrar o produto selecionado
    document.getElementById(produtoId).classList.add('ativo');
}

function saibaMais(produtoId) {
    
    alert("Um espaço acolhedor e exclusivo, onde você relaxa, renova as energias e valoriza sua beleza. Massagens, cuidados com a pele e terapias relaxantes, tudo pensado para o seu equilíbrio e bem-estar. Venha viver essa experiência!" + produtoId)
}

function saibaMais1(produtoId) {
    
    alert("Cuidado personalizado para fortalecer, hidratar e devolver o brilho natural dos seus fios. Técnicas profissionais e produtos de alta qualidade para deixar seu cabelo saudável, macio e deslumbrante." + produtoId)
}

function saibaMais2(produtoId) {
    
    alert("Cuidamos das suas unhas com carinho e precisão, oferecendo esmaltação impecável, hidratação e designs criativos. Realce sua beleza com mãos bem cuidadas e cheias de estilo!" + produtoId) 
}

function saibaMais3(produtoId) {
    
    alert("Transforme seu visual com cortes modernos ou clássicos, sempre alinhados ao seu estilo e personalidade. Técnica, cuidado e atenção para realçar a sua beleza em cada detalhe!" + produtoId) 
}



