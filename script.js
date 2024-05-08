products = [
	{
		id: 001,
		image: 'img/img/products/f1.jpg',
		name: 'Cool Tee',
		price: 15.99,
	},
	{
		id: 002,
		image: 'img/img/products/f2.jpg',
		name: 'Funky Shirt',
		price: 22.5,
	},
	{
		id: 003,
		image: 'img/img/products/f3.jpg',
		name: 'Awesome T-shirt',
		price: 18.75,
	},
	{
		id: 004,
		image: 'img/img/products/f4.jpg',
		name: 'Radical Top',
		price: 12.99,
	},
	{
		id: 005,
		image: 'img/img/products/f5.jpg',
		name: 'Groovy Tee',
		price: 28.0,
	},
	{
		id: 006,
		image: 'img/img/products/f6.jpg',
		name: 'Sleek Shirt',
		price: 20.25,
	},
	{
		id: 007,
		image: 'img/img/products/f7.jpg',
		name: 'Neon T-shirt',
		price: 14.49,
	},
	{
		id: 008,
		image: 'img/img/products/f8.jpg',
		name: 'Graphic Tee',
		price: 26.99,
	},
];

let userCart = [];

const productsContainer = document.getElementById('products');
const cartItemCount = document.getElementById('cart-item-count');

function onAddToCart(event) {
	const productID =
		event.target.parentElement.parentElement.getAttribute('data-id');
	const product = products.find((p) => p.id === +productID);
	const dublicate = userCart.find((p) => p.id === +productID);

	if (dublicate) {
		return;
	} else {
		if (product) {
			userCart.push(product);
			localStorage.setItem('userCart', JSON.stringify(userCart));
			cartIconCount();
		}
	}
}

const generateShop = () => {
	products.map((x) => {
		let div1 = document.createElement('div');
		div1.className = 'card';
		productsContainer.appendChild(div1);
		div1.setAttribute('data-id', x.id);

		let img = document.createElement('img');
		img.src = x.image;
		div1.appendChild(img);

		let div2 = document.createElement('div');
		div2.className = 'card-content';
		div1.appendChild(div2);

		let h2 = document.createElement('h2');
		h2.innerHTML = x.name;
		div2.appendChild(h2);

		let p = document.createElement('p');
		p.innerHTML = `$ ${x.price}`;
		p.className = 'price';
		div2.appendChild(p);

		let btn = document.createElement('button');
		btn.innerHTML = 'Add to Cart';
		btn.className = 'add-to-cart';

		btn.addEventListener('click', onAddToCart);
		div2.appendChild(btn);
	});
};

generateShop();

function getCartFromLocalStorage() {
	userCart = JSON.parse(localStorage.getItem('userCart')) || [];
}

getCartFromLocalStorage();

function cartIconCount() {
	let cartCount = userCart.length;
	console.log(cartCount);
	cartItemCount.innerHTML = cartCount;
}
cartIconCount();
