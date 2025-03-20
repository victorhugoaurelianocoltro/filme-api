'use strict'

async function searchMovies(title) {
    const url = `https://imdb.iamidiotareyoutoo.com/api/v1/search?q=${title}&limit=5`;
    const response = await fetch(url);  // Buscando dados do filme
    
    const data = await response.json();  // Convertendo a resposta para JSON
    
    console.log(data);
    return data.results;  // Retornando os resultados da busca
}

function createMovieImage(link) {
    const gallery = document.getElementById('gallery');
    const newImg = document.createElement('img');

    newImg.src = link;  // Definindo o link da imagem do filme
    gallery.appendChild(newImg);  // Adicionando a imagem à galeria
}

async function displayMovies() {
    const title = document.getElementById('movieTitle').value;  // Pegando o título do filme inserido pelo usuário
    const movies = await searchMovies(title);  // Buscando dados dos filmes com o título informado
    const gallery = document.getElementById('gallery');

    gallery.replaceChildren();  // Limpando a galeria para resultados anteriores

    console.log(movies);

    // Iterando sobre cada filme e exibindo a imagem
    movies.forEach(movie => {
        if (movie.image) {  // Verificando se o filme possui imagem
            createMovieImage(movie.image);  // Criando a imagem do filme e adicionando à galeria
        }
    });
}

// Adicionando um ouvinte de evento ao botão de pesquisa
document.getElementById('search')
    .addEventListener('click', displayMovies);
