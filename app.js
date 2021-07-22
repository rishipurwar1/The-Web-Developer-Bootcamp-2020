const form = document.querySelector('form');
const shopList = document.querySelector('#list');
const qty = document.querySelector('#qty');
const product = document.querySelector('#product');

form.addEventListener('submit', function(e){
   e.preventDefault();
   const newList = document.createElement('li');
   newList.innerText = `${qty.value} ${product.value}`;
   if(/^ *$/.test(product.value) || /^ *$/.test(qty.value)) newList.remove();
   else shopList.appendChild(newList);
   
   qty.value = '';
   product.value = '';
});
