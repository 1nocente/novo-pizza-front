async function pegarPizzasRecomendadas() {
    const endPoint = 'http://localhost:3000/pizzas';
    const response = await fetch(endPoint);
    const pizzas = await response.json();
    return pizzas.pizzas;
}

function criarPizzaRecomendada(pizza) {
    const divRecomendadas = document.getElementById('divRecomendadas');

    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('pizza');

    const imagens = document.createElement('img');
    imagens.classList.add('img_pizzas')
    imagens.src = '../img/'+pizza.img+'.png'



    const nomePizza = document.createElement('h4');
    nomePizza.textContent = pizza.namePizza;

    const precoPizza = document.createElement('h3');
    precoPizza.textContent = pizza.price;

    pizzaDiv.append(nomePizza, precoPizza);
    divRecomendadas.appendChild(pizzaDiv);
}

async function carregarPizzasRecomendadas() {
    const pizzas = await pegarPizzasRecomendadas();
    pizzas.forEach(criarPizzaRecomendada);
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPizzasRecomendadas(); // Carrega as pizzas recomendadas
});

async function pegarPizzasFavoritas() {
    const endPoint = 'http://localhost:3000/pizzas';
    const response = await fetch(endPoint);
    const pizzas = await response.json();
    return pizzas.pizzas;
}

function criarPizzaFavorita(pizza) {
    const divFavoritas = document.getElementById('divFavoritas');

    const pizzaDiv = document.createElement('div');
    pizzaDiv.classList.add('pizza');

    const imagens = document.createElement('img');
    imagens.classList.add('img_pizzas')
    imagens.src = '../img/'+pizza.img+'.png'

    const nomePizza = document.createElement('h4');
    nomePizza.textContent = pizza.namePizza;

    const precoPizza = document.createElement('h3');
    precoPizza.textContent = pizza.price;

    divFavoritas.appendChild(pizzaDiv)
    pizzaDiv.replaceChildren(imagens, nomePizza, precoPizza)

    console.log(imagens)
}

async function carregarPizzasFavoritas() {
    const pizzas = await pegarPizzasFavoritas();
    pizzas.forEach(criarPizzaFavorita);
}

document.addEventListener('DOMContentLoaded', () => {
    carregarPizzasFavoritas(); // Carrega as pizzas favoritas
});
