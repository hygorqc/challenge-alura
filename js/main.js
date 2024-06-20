document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const cardsContainer = document.querySelector('.products_cards_list');

  form.addEventListener('submit', addItem);

  carregarItens();

  function addItem(event) {
    event.preventDefault();

    const titulo = document.getElementById('card_titulo').value;
    const preco = document.getElementById('card_preco').value;
    const imageUrl = document.getElementById('card_imagem').value;

    const newItem = {
      id: Date.now(),
      titulo: titulo,
      preco: preco,
      imageUrl: imageUrl,
    };

    salvarItem(newItem);
    exibirItem(newItem);

    form.reset();
  }

  function salvarItem(item) {
    let items = localStorage.getItem('items');
    items = items ? JSON.parse(items) : [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
  }

  function carregarItens() {
    let items = localStorage.getItem('items');
    items = items ? JSON.parse(items) : [];
    items.forEach((item) => exibirItem(item));
  }

  function exibirItem(item) {
    const card = document.createElement('div');
    card.className = 'card_product';
    card.setAttribute('data-id', item.id);

    card.innerHTML = `
      <img class="card_img" src="${item.imageUrl}" alt="${item.titulo}">
              <p>${item.titulo}</p>
              <div class="card_product_price">
                <span>R$ ${Number(item.preco).toFixed(2)}</span>
                <button class="btn-delete"><img src="./img/trash.svg" alt=""></button>
              </div>
      `;

    const deleteBtn = card.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', () => {
      deleteItem(item.id);
      location.reload();
    });
    cardsContainer.appendChild(card);
  }

  function deleteItem(id) {
    let items = localStorage.getItem('items');
    items = items ? JSON.parse(items) : [];
    items = items.filter((item) => item.id !== id);
    localStorage.setItem('items', JSON.stringify(items));

    const card = document.querySelector(`.card[data-id="${id}"]`);
    if (card) {
      cardsContainer.removeChild(card);
      location.reload();
    }
  }
});
