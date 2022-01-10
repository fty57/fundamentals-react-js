// Função Open

function open() {
     var container = document.getElementById('container');

     var text = prompt('Digite seu nome: ');

     if(text == null || text == ''){
          alert('Digite um nome válido');
          container.innerHTML = 'Bem vindo ...';
     }

     this.container.innerHTML = text;
}

// Este é meu nome
// var nome = 'Álisson';

/*
     Este
     é
     meu 
     comentário
     em
     bloco
*/
