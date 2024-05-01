const products = [
	{
		id: 001,
		image: '/img/img/products/f1.jpg',
		name: 'Cool Tee',
		price: 15.99,
	},
	{
		id: 002,
		image: '/img/img/products/f2.jpg',
		name: 'Funky Shirt',
		price: 22.5,
	},
	{
		id: 003,
		image: '/img/img/products/f3.jpg',
		name: 'Awesome T-shirt',
		price: 18.75,
	},
	{
		id: 004,
		image: '/img/img/products/f4.jpg',
		name: 'Radical Top',
		price: 12.99,
	},
	{
		id: 005,
		image: '/img/img/products/f5.jpg',
		name: 'Groovy Tee',
		price: 28.0,
	},
	{
		id: 006,
		image: '/img/img/products/f6.jpg',
		name: 'Sleek Shirt',
		price: 20.25,
	},
	{
		id: 007,
		image: '/img/img/products/f7.jpg',
		name: 'Neon T-shirt',
		price: 14.49,
	},
	{
		id: 008,
		image: '/img/img/products/f8.jpg',
		name: 'Graphic Tee',
		price: 26.99,
	},
];

const productsContainer = document.getElementById('products');

const generateShop = () => {
	return (productsContainer.innerHTML = products
		.map((x) => {
			let { id, image, name, price } = x;
			return `
         <div id=product-id-${id} class="card">
            <img src="${image}" alt="Product Image">
            <div class="card-content">
                  <h2>${name}</h2>
                  <p class="price">$ ${price}</p>
                  <button class="add-to-cart">Add to Cart</button>
            </div>
         </div>`;
		})
		.join(''));
};

generateShop();

// const cartBtn = document.querySelectorAll('.add-to-cart');

// cartBtn.forEach(button => {
// 	button.addEventListner('click', (e) => {
// 		console.log(saad beta);
// 	});
// })
