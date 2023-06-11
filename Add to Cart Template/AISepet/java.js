// Sepete ekle düğmelerini seçin
var addToCartButtons = document.getElementsByClassName('add-to-cart-btn');

// Her düğme için olay dinleyicisini ekle
for (var i = 0; i < addToCartButtons.length; i++) {
  var button = addToCartButtons[i];
  button.addEventListener('click', addToCart);
}

// Sepete ekle işlevi
function addToCart(event) {
  var product = event.target.parentElement;
  var productName = product.querySelector('h3').innerText;

  // Sepete eklemek için gerekli işlemleri yapın (örneğin veritabanına kaydedebilirsiniz)

  alert(productName + ' sepete eklendi.');
}




// Sepet sayfasını seçin
var cartItemsContainer = document.getElementById('cart-items');

// Sepet sayfasında ürünleri göster
function showCartItems() {
  // Sepete eklenen ürünleri almak için gereken işlemleri yapın (örneğin veritabanından alabilirsiniz)
  var cartItems = [];

  var products = document.getElementsByClassName('product');
  for (var i = 0; i < products.length; i++) {
    var productName = products[i].querySelector('h3').innerText;
    cartItems.push(productName);
  }

  // Her ürünü sepet sayfasına ekleyin
  cartItems.forEach(function(item) {
    var itemElement = document.createElement('div');
    itemElement.innerText = item;
    cartItemsContainer.appendChild(itemElement);
  });
}

// Sepet sayfasını yükleme olayı
window.addEventListener('load', showCartItems);