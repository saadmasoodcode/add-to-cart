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
const tableBody = document.getElementById('table-body');

function onAddToCart(event) {
	const productID =
		event.target.parentElement.parentElement.getAttribute('data-id');

	const product = products.find((p) => p.id === +productID);
	const dublicate = userCart.find((p) => p.id === +productID);

	if (dublicate) {
		retun;
	} else {
		if (product) {
			userCart.push(product);
			console.log(userCart);
			tableBody.innerHTML = '';

			userCart.map((x) => {
				const tr = document.createElement('tr');
				tableBody.appendChild(tr);

				const td1 = document.createElement('td');
				tr.appendChild(td1);

				const divtd1 = document.createElement('div');
				divtd1.id = 'product-info';
				td1.appendChild(divtd1);

				const image = document.createElement('img');
				image.src = x.image;
				divtd1.appendChild(image);

				const divtd2 = document.createElement('div');
				divtd2.id = 'product-name';
				divtd1.appendChild(divtd2);

				const pTag = document.createElement('p');
				pTag.innerHTML = x.name;
				divtd2.appendChild(pTag);

				const smallTag = document.createElement('small');
				smallTag.innerHTML = x.price;
				divtd2.appendChild(smallTag);

				const td2 = document.createElement('td');
				tr.appendChild(td2);

				const input = document.createElement('input');
				input.type = 'number';
				input.value = 1;
				td2.appendChild(input);

				const td3 = document.createElement('td');
				td3.innerHTML = x.price;
				tr.appendChild(td3);
			});
		}
	}
}

const generateShop = () => {
	products.map((x) => {
		let div1 = document.createElement('div');
		div1.className = 'card';
		productsContainer.appendChild(div1);
		console.log('maazi', typeof x.id);
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

// const addToCartBtn = document.querySelectorAll('.add-to-cart');

// addToCartBtn.forEach((button) => {
// 	button.addEventListener('click', (e) => {
// 		// console.log('Hello Saad');
// 	});
// });
