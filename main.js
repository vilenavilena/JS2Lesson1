const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
  ];
  
  const renderProduct = (product, img='https://via.placeholder.com/150') => {
    return `<div class="product-item">
              <img src="${img}">
              <h3>${product.title}</h3>
              <p>${product.price}</p>
              <button class="buy-btn">Добавить</button>
            </div>`;
  };
  
  const renderProducts = list => {
    document.querySelector('.products').innerHTML = list.map(item =>
    renderProduct(item)).join('');
  };
  
  renderProducts(products);
  
  /*2. Запятая ставится по умолчанию тк при присвоении любого 
  значения свойству .innerHTML элемента это значение неявно 
  преобразуется в строку, а затем анализируется как HTML. 
  По умолчанию массив преобразуется в строку с помощью метода 
  .join() , а разделителем массива по умолчанию является запятая.
  Следовательно, нужно просто вызвать .join('') самостоятельно и в скобках
  указать ('')*/
  