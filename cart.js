const tableBody = document.getElementById('table-body');
const removeBtn = document.querySelectorAll('.fa-xmark');
const actualPrice = document.getElementById('actual-price');

userCart = JSON.parse(localStorage.getItem('userCart')) || [];

function getCartFromLocalStorage() {
	userCart.map((x) => {
		const tr = document.createElement('tr');
		tr.setAttribute('data-id', x.id);
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
		smallTag.innerHTML = `$  ${x.price}`;
		divtd2.appendChild(smallTag);

		const td2 = document.createElement('td');
		tr.appendChild(td2);

		const input = document.createElement('input');
		input.type = 'number';
		input.value = 1;
		td2.appendChild(input);

		const td3 = document.createElement('td');
		td3.innerHTML = `$  ${x.price}`;
		tr.appendChild(td3);

		const td4 = document.createElement('td');
		const removeBtn = document.createElement('i');
		removeBtn.className = 'fa-solid fa-xmark';
		removeBtn.addEventListener('click', removeCartItem);
		td4.appendChild(removeBtn);
		tr.appendChild(td4);
	});
}

getCartFromLocalStorage();

function removeCartItem(event) {
	const parElem = event.target.parentElement.parentElement;
	const cartItemID =
		event.target.parentElement.parentElement.getAttribute('data-id');
	console.log(
		event.target.parentElement.parentElement.getAttribute('data-id')
	);
	userCart = userCart.filter((x) => x.id !== +cartItemID);
	localStorage.setItem('userCart', JSON.stringify(userCart));
	console.log(userCart);
	parElem.remove();
	calculateTotalPrice();
}

function calculateTotalPrice() {
	let price = 0;
	userCart.map((x) => {
		price += x.price;
	});
	actualPrice.innerHTML = `$ ${price}`;
}

calculateTotalPrice();
